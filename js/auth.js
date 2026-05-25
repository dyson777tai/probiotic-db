'use strict';

const AUTH_SESSION_KEY = 'probiotic_auth_v1';

// 帳號對應的 SHA-256 hash（格式：sha256(username + '|' + password)）
// 若要更改密碼，請在 WSL 執行：
//   node -e "const c=require('crypto');console.log(c.createHash('sha256').update('帳號|新密碼').digest('hex'))"
// 然後把下方的 hash 字串換掉。
const CREDENTIALS = {
  'dyson': '2838ca10849f7a780ad4b935ea47adf0775deb108af94ed87cae81f4589b2fb7'
};

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}

async function doLogin(username, password) {
  const hash = await sha256(username + '|' + password);
  if (CREDENTIALS[username] && CREDENTIALS[username] === hash) {
    sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify({ user: username, ts: Date.now() }));
    return true;
  }
  return false;
}

function isLoggedIn() {
  try {
    const s = JSON.parse(sessionStorage.getItem(AUTH_SESSION_KEY) || 'null');
    return s && s.user && (Date.now() - s.ts < 8 * 60 * 60 * 1000); // 8 小時 session
  } catch { return false; }
}

function requireAuth() {
  if (!isLoggedIn()) {
    window.location.replace('login.html');
  }
}

function logout() {
  sessionStorage.removeItem(AUTH_SESSION_KEY);
  window.location.replace('login.html');
}

function getUsername() {
  try {
    return JSON.parse(sessionStorage.getItem(AUTH_SESSION_KEY) || '{}').user || '';
  } catch { return ''; }
}
