const CACHE = 'probiotic-v2.1';
const OFFLINE_URLS = [
  '/probiotic-db/login.html',
  '/probiotic-db/index.html',
  '/probiotic-db/css/style.css',
  '/probiotic-db/js/auth.js',
  '/probiotic-db/js/data.js',
  '/probiotic-db/js/app.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(OFFLINE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // 網路優先，失敗才用快取（確保資料永遠是最新的）
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
