'use strict';

// ============================================================
//  工具函式
// ============================================================
const CAT_LABELS = {
  immune:'免疫調節', allergy:'過敏改善', gi:'腸胃道保健',
  sleep:'睡眠壓力', sports:'運動表現', weight:'體重管理',
  vaginal:'私密處健康', pediatric:'嬰幼兒', ibs:'IBS',
  bone:'骨骼健康', stress:'壓力調節', metabolic:'代謝健康',
  traveler:'旅遊腹瀉', aad:'AAD 預防', joint:'關節健康', lactose:'乳糖不耐'
};

const CAT_COLORS = {
  immune:'tag-immune', allergy:'tag-allergy', gi:'tag-gi',
  sleep:'tag-sleep', sports:'tag-sports', weight:'tag-weight',
  vaginal:'tag-vaginal', pediatric:'tag-immune', ibs:'tag-gi',
  bone:'tag-immune', stress:'tag-sleep', metabolic:'tag-weight',
  traveler:'tag-gi', aad:'tag-gi', joint:'tag-gi', lactose:'tag-gi'
};

const LEVEL_CLASS = { Ia:'ev-ia', Ib:'ev-ib', IIa:'ev-iia', IIb:'ev-iib', III:'ev-iii' };

const SUPP_TYPE_LABELS = {
  beta_glucan:'Beta-葡聚醣', prebiotic:'益生元', postbiotic:'後生元'
};

let PRODUCTS = JSON.parse(localStorage.getItem('probiotic_products') || '[]');
let currentStrain = null;
let compareSelected = [];

// ============================================================
//  Mobile sidebar
// ============================================================
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('mobile-open');
  document.getElementById('sidebar-overlay').classList.toggle('active');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('mobile-open');
  document.getElementById('sidebar-overlay').classList.remove('active');
}

// ============================================================
//  導覽
// ============================================================
function showPage(id, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('#sidebar nav a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  if (el) el.classList.add('active');
  if (id === 'strains')      renderStrains(DB.STRAINS);
  if (id === 'functional')   renderFunctional();
  if (id === 'supplements')  renderSupplements(DB.SUPPLEMENTS);
  if (id === 'interactions') renderInteractions();
  if (id === 'combos')       renderCombos();
  if (id === 'compare')      renderCompare();
  if (id === 'products')     renderProductsPage();
  closeSidebar();
}

// ============================================================
//  菌株交叉比較表
// ============================================================
function renderCompare() {
  const container = document.getElementById('compare-content');

  const chips = DB.STRAINS.map(s => {
    const isSel = compareSelected.includes(s.id);
    const isMax = !isSel && compareSelected.length >= 3;
    return `<span class="compare-chip ${isSel ? 'selected' : ''} ${isMax ? 'disabled' : ''}"
      onclick="toggleCompareStrain('${s.id}')">${s.icon} ${s.abbr}</span>`;
  }).join('');

  let selectedBar = '';
  if (compareSelected.length > 0) {
    const chips2 = compareSelected.map(id => {
      const s = DB.STRAINS.find(x => x.id === id);
      return `<span style="background:var(--primary);color:#fff;padding:3px 10px;border-radius:12px;font-size:12px;font-weight:600;">${s.icon} ${s.abbr}</span>`;
    }).join('');
    selectedBar = `<div class="compare-selected-bar">
      <span>已選：</span>${chips2}
      <button class="compare-clear-btn" onclick="clearCompare()">清除</button>
    </div>`;
  }

  const tableHTML = compareSelected.length >= 2
    ? buildCompareTable(compareSelected)
    : `<div class="compare-placeholder">
        <span class="cp-icon">⚖️</span>
        請從上方選擇 <b>2–3 個菌株</b>，比較表將自動顯示
      </div>`;

  container.innerHTML = `
    <div class="compare-picker-wrap">
      <div class="compare-picker-label">選擇菌株（最多 3 個）</div>
      <div class="compare-picker-hint">點選下方菌株名稱加入比較；再次點選移除。</div>
      <div class="compare-chips">${chips}</div>
    </div>
    ${selectedBar}
    <div class="compare-table-wrap">${tableHTML}</div>`;
}

function toggleCompareStrain(id) {
  if (compareSelected.includes(id)) {
    compareSelected = compareSelected.filter(x => x !== id);
  } else if (compareSelected.length < 3) {
    compareSelected.push(id);
  }
  renderCompare();
}

function clearCompare() {
  compareSelected = [];
  renderCompare();
}

function buildCompareTable(ids) {
  const strains = ids.map(id => DB.STRAINS.find(s => s.id === id));

  const bestLevel = s => {
    const lvl = ['Ia','Ib','IIa','IIb','III'];
    let best = 'III';
    (s.studies || []).forEach(st => {
      if (lvl.indexOf(st.level) < lvl.indexOf(best)) best = st.level;
    });
    return best;
  };

  const rows = [
    ['全名（Full Name）',     s => `<em style="font-size:11px;">${s.name}</em>`],
    ['新分類學名',            s => `<small style="color:#5a7a6a;">${s.newName || s.abbr}</small>`],
    ['功能分類',              s => (s.categories || []).map(c =>
      `<span class="tag ${CAT_COLORS[c] || 'tag-immune'}" style="font-size:10px;margin:1px;">${CAT_LABELS[c] || c}</span>`
    ).join('')],
    ['建議劑量',              s => s.standardDose],
    ['服用時機',              s => s.timing],
    ['建議療程',              s => s.duration],
    ['PICO 文獻數',           s => `<span style="font-weight:700;color:var(--primary);font-size:16px;">${(s.studies||[]).length}</span> 篇`],
    ['最強文獻等級',          s => `<span class="evidence-badge ${LEVEL_CLASS[bestLevel(s)] || 'ev-ib'}">${bestLevel(s)}</span>`],
    ['主要副作用',            s => (s.sideEffects || []).join('<br>')],
    ['禁忌 / 特殊族群',       s => (s.contraindications || []).slice(0, 2).join('<br>') || '無特殊'],
    ['自體免疫警語',          s => s.autoimmune
      ? '<span style="color:#e76f51;font-weight:700;">⚠️ 需注意</span>'
      : '<span style="color:var(--primary);">✅ 無</span>'],
    ['協同搭配',              s => (s.synergisticWith || []).slice(0, 3).map(xid => {
      const t = DB.STRAINS.find(x => x.id === xid) || DB.SUPPLEMENTS.find(x => x.id === xid);
      return t ? `<span style="font-size:11px;background:#f0f7f3;border:1px solid #b0d8c0;padding:1px 6px;border-radius:10px;margin:1px;display:inline-block;">${t.icon || '🔗'} ${t.abbr || t.name}</span>` : '';
    }).join('') || '—'],
  ];

  const header = `<tr>
    <th class="ct-label">比較項目</th>
    ${strains.map(s => `<th>${s.icon}<br>${s.abbr}</th>`).join('')}
  </tr>`;

  const body = rows.map(([label, fn]) => `
    <tr>
      <td class="ct-label">${label}</td>
      ${strains.map(s => `<td>${fn(s)}</td>`).join('')}
    </tr>`).join('');

  return `<table class="compare-table"><thead>${header}</thead><tbody>${body}</tbody></table>`;
}

// ============================================================
//  益生菌百科 — 卡片列表
// ============================================================
function renderStrains(list) {
  const grid = document.getElementById('strain-grid');
  if (!list.length) {
    grid.innerHTML = '<p style="color:#a0b8ad;padding:20px;">沒有符合的結果。</p>';
    return;
  }
  grid.innerHTML = list.map(s => `
    <div class="strain-card" onclick="openDetail('${s.id}')">
      <span class="study-count">${s.studies.length} 篇文獻</span>
      <div class="strain-name">${s.icon} ${s.name}</div>
      <div class="strain-abbr">${s.abbr}｜${s.newName}</div>
      <div class="strain-dose">💊 ${s.standardDose}</div>
      <div class="strain-tags">
        ${s.categories.map(c=>`<span class="tag ${CAT_COLORS[c]||'tag-immune'}">${CAT_LABELS[c]||c}</span>`).join('')}
        ${s.autoimmune ? '<span class="tag tag-auto">⚠️ 自體免疫注意</span>' : ''}
      </div>
    </div>
  `).join('');
}

function filterStrains(q) {
  const cat = document.getElementById('strain-cat-filter').value;
  const lower = (q||'').toLowerCase();
  const result = DB.STRAINS.filter(s => {
    const matchQ = !lower ||
      s.name.toLowerCase().includes(lower) ||
      s.abbr.toLowerCase().includes(lower) ||
      s.newName.toLowerCase().includes(lower) ||
      (s.categories||[]).some(c => (CAT_LABELS[c]||'').includes(q));
    const matchCat = !cat || (s.categories||[]).includes(cat);
    return matchQ && matchCat;
  });
  renderStrains(result);
}

// ============================================================
//  Detail Panel
// ============================================================
function openDetail(id) {
  const s = DB.STRAINS.find(x => x.id === id);
  if (!s) return;
  currentStrain = s;
  document.getElementById('detail-name').textContent = s.icon + ' ' + s.name;
  document.getElementById('detail-abbr').textContent = s.abbr + '｜' + s.newName;
  document.getElementById('detail-tags').innerHTML =
    s.categories.map(c=>`<span class="tag ${CAT_COLORS[c]||'tag-immune'}">${CAT_LABELS[c]||c}</span>`).join('') +
    (s.autoimmune ? '<span class="tag tag-auto">⚠️ 自體免疫注意</span>' : '');

  document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.detail-tab')[0].classList.add('active');
  renderDetailTab('overview', s);
  document.getElementById('detail-overlay').classList.add('open');
}

function closeDetailPanel() {
  document.getElementById('detail-overlay').classList.remove('open');
}

function closeDetail(e) {
  if (e.target === document.getElementById('detail-overlay')) closeDetailPanel();
}

function switchTab(tab, el) {
  document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderDetailTab(tab, currentStrain);
}

function renderDetailTab(tab, s) {
  const body = document.getElementById('detail-body');
  if (tab === 'overview') {
    body.innerHTML = `
      <div class="info-section">
        <h4>🔬 作用機轉（Mechanism of Action）</h4>
        <div class="strain-mechbox">${s.mechanism}</div>
      </div>
      <div class="info-section">
        <h4>👨‍👩‍👧 適用族群</h4>
        <div class="info-box">
          ${s.categories.map(c=>`<span class="tag ${CAT_COLORS[c]||'tag-immune'}" style="margin:2px;">${CAT_LABELS[c]||c}</span>`).join('')}
        </div>
      </div>
      <div class="info-section">
        <h4>🔗 協同搭配</h4>
        <div class="info-box">
          ${(s.synergisticWith||[]).map(id => {
            const t = DB.STRAINS.find(x=>x.id===id) || DB.SUPPLEMENTS.find(x=>x.id===id);
            return t ? `<span class="tag tag-prebiotic" style="margin:2px;">${t.icon||'🔗'} ${t.name||t.abbr}</span>` : '';
          }).join('') || '—'}
        </div>
      </div>
      ${s.evidence_note ? `<div class="info-box warning">⚠️ <b>文獻說明：</b>${s.evidence_note}</div>` : ''}
    `;
  } else if (tab === 'studies') {
    const footnotes = s.studies.map((st,i) =>
      `<div class="footnote-item"><span class="fn-num">[${i+1}]</span>${st.author} ${st.year}. <em>${st.title}</em>. <b>${st.journal}</b>. PMID: ${st.pmid}</div>`
    ).join('');
    body.innerHTML = s.studies.map((st,i) => `
      <div class="study-card">
        <div class="study-card-header">
          <div>
            <div class="study-ref">
              <span class="study-num-badge">${i+1}</span>
              ${st.author} ${st.year}<sup class="footnote-ref">[${i+1}]</sup>
            </div>
            <div class="study-journal">${st.journal}${st.pmid ? ' · PMID: '+st.pmid : ''}</div>
          </div>
          <div>
            <span class="evidence-badge ${LEVEL_CLASS[st.level]||'ev-ib'}">${st.level}</span>
            ${st.badge ? `<span class="tag tag-immune" style="font-size:10px;padding:2px 7px;">${st.badge}</span>` : ''}
          </div>
        </div>
        <div class="study-card-body">
          <div class="pico-grid">
            <div class="pico-l">P</div><div class="pico-v">${st.pico.P}</div>
            <div class="pico-l">I</div><div class="pico-v">${st.pico.I}</div>
            <div class="pico-l">C</div><div class="pico-v">${st.pico.C}</div>
            <div class="pico-l">O</div><div class="pico-v">${st.pico.O}</div>
          </div>
          <div class="study-finding">📌 ${st.finding}</div>
        </div>
      </div>
    `).join('') + `<div class="footnotes-section"><h5>文獻腳注</h5>${footnotes}</div>`;
  } else if (tab === 'dose') {
    body.innerHTML = `
      <table class="dose-table" style="margin-bottom:18px;">
        <thead><tr><th>項目</th><th>說明</th></tr></thead>
        <tbody>
          <tr><td>建議劑量</td><td>${s.standardDose}</td></tr>
          <tr><td>服用時機</td><td>${s.timing}</td></tr>
          <tr><td>建議療程</td><td>${s.duration}</td></tr>
        </tbody>
      </table>
      <div class="info-section">
        <h4>⚠️ 副作用</h4>
        <div class="info-box">
          <ul style="padding-left:18px;font-size:13px;line-height:2;">
            ${s.sideEffects.map(e=>`<li>${e}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="info-section">
        <h4>🚫 禁忌症 / 特殊族群</h4>
        <div class="info-box warning">
          <ul style="padding-left:18px;font-size:13px;line-height:2;">
            ${s.contraindications.map(c=>`<li>${c}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  } else if (tab === 'risk') {
    body.innerHTML = `
      <div class="info-section">
        <h4>📊 潛在風險分析</h4>
        <div class="risk-box ${s.autoimmune ? 'risk-med' : 'risk-low'}">${s.riskAnalysis}</div>
      </div>
      <div class="info-section">
        <h4>💊 相關藥物交互作用</h4>
        ${(s.drugInteractions||[]).map(id => {
          const d = DB.DRUG_INTERACTIONS.find(x=>x.id===id);
          if (!d) return '';
          return `
            <div class="interaction-item">
              <span class="interaction-severity sev-${d.severity}">${d.severityLabel}</span>
              <div>
                <div style="font-weight:700;font-size:13px;">${d.drugClass}</div>
                <div style="font-size:12px;color:#5a7a6a;margin:3px 0;">${d.recommendation}</div>
              </div>
            </div>`;
        }).join('') || '<div style="color:#a0b8ad;font-size:13px;">無特殊藥物交互作用紀錄。</div>'}
      </div>
    `;
  }
}

// ============================================================
//  功能分類
// ============================================================
function renderFunctional() {
  const grid = document.getElementById('func-grid');
  grid.innerHTML = DB.FUNC_CATEGORIES.map(cat => `
    <div class="func-card" onclick="showPage('strains',null);setTimeout(()=>{document.getElementById('strain-cat-filter').value='${cat.id}';filterStrains('');},100)">
      <div class="func-card-header" style="background:${cat.headerBg};">
        <div class="func-icon">${cat.icon}</div>
        <div>
          <h3>${cat.name}</h3>
          <p>${cat.keyIndication}</p>
        </div>
      </div>
      <div class="func-card-body">
        ${cat.warning ? `<div style="font-size:11px;color:#e76f51;margin-bottom:8px;">⚠️ ${cat.warning.split('\n')[0]}</div>` : ''}
        <ul>
          ${cat.strains.map(id => {
            const s = DB.STRAINS.find(x=>x.id===id);
            return s ? `<li>${s.icon} ${s.abbr} — ${s.name.split(' ').slice(0,3).join(' ')}</li>` : '';
          }).join('')}
          ${cat.supplements.map(id => {
            const s = DB.SUPPLEMENTS.find(x=>x.id===id);
            return s ? `<li>${s.icon||'💊'} ${s.name}</li>` : '';
          }).join('')}
        </ul>
        ${cat.selectionTips ? `
        <div class="func-selection-tips" onclick="event.stopPropagation()">
          <div class="fst-title">🛒 選購要點</div>
          <ul>${cat.selectionTips.map(t=>`<li>${t}</li>`).join('')}</ul>
        </div>` : ''}
      </div>
    </div>
  `).join('');
}

// ============================================================
//  免疫輔助品
// ============================================================
function renderSupplements(list) {
  const grid = document.getElementById('supp-grid');
  grid.innerHTML = list.map(s => `
    <div class="strain-card" onclick="openSuppDetail('${s.id}')">
      <div class="strain-name">${s.icon||'💊'} ${s.name}</div>
      <div class="strain-abbr">${s.fullName}</div>
      <div class="strain-dose">💊 ${s.standardDose}</div>
      <div class="strain-tags">
        <span class="tag ${s.subtype==='beta_glucan'?'tag-immune':s.subtype==='postbiotic'?'tag-allergy':'tag-prebiotic'}">${SUPP_TYPE_LABELS[s.type]||s.type}</span>
      </div>
    </div>
  `).join('');
}

function filterSupplements(type) {
  const list = type ? DB.SUPPLEMENTS.filter(s=>s.subtype===type||s.type===type) : DB.SUPPLEMENTS;
  renderSupplements(list);
}

function openSuppDetail(id) {
  const s = DB.SUPPLEMENTS.find(x=>x.id===id);
  if (!s) return;
  document.getElementById('detail-name').textContent = (s.icon||'💊') + ' ' + s.name;
  document.getElementById('detail-abbr').textContent = s.fullName;
  document.getElementById('detail-tags').innerHTML =
    `<span class="tag ${s.subtype==='beta_glucan'?'tag-immune':s.subtype==='postbiotic'?'tag-allergy':'tag-prebiotic'}">${SUPP_TYPE_LABELS[s.type]||s.type}</span>`;

  document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.detail-tab')[0].classList.add('active');

  document.getElementById('detail-body').innerHTML = `
    <div class="info-section">
      <h4>🌿 來源</h4>
      <div class="info-box">${s.source}</div>
    </div>
    <div class="info-section">
      <h4>🔬 作用機轉</h4>
      <div class="strain-mechbox">${s.mechanism}</div>
    </div>
    <div class="info-section">
      <h4>🎯 臨床應用</h4>
      <div class="info-box">
        <ul style="padding-left:18px;font-size:13px;line-height:2;">
          ${s.clinicalUse.map(u=>`<li>${u}</li>`).join('')}
        </ul>
      </div>
    </div>
    <table class="dose-table" style="margin:12px 0 18px;">
      <thead><tr><th>項目</th><th>說明</th></tr></thead>
      <tbody>
        <tr><td>建議劑量</td><td>${s.standardDose}</td></tr>
        <tr><td>服用時機</td><td>${s.timing}</td></tr>
        <tr><td>建議療程</td><td>${s.duration}</td></tr>
      </tbody>
    </table>
    <div class="info-section">
      <h4>⚠️ 副作用與禁忌</h4>
      <div class="info-box warning">
        <b>副作用：</b>${s.sideEffects.join('、')}<br>
        <b>禁忌：</b>${(s.contraindications||[]).join('、')||'無特殊禁忌'}
      </div>
    </div>
    ${s.evidenceNote ? `<div class="info-box" style="margin-top:12px;background:#f0f7f3;">📚 ${s.evidenceNote}</div>` : ''}
  `;
  document.getElementById('detail-overlay').classList.add('open');
}

// ============================================================
//  藥物交互作用
// ============================================================
function renderInteractions() {
  const list = document.getElementById('interaction-list');
  const SEV_ICON = {beneficial:'✅', caution:'⏱️', moderate:'⚠️', avoid:'❌'};

  const abxBox = `
    <div class="abx-quickref">
      <h4 class="abx-qr-title">💊 抗生素期間益生菌使用速查</h4>
      <div class="abx-qr-table-wrap">
        <table class="dose-table abx-qr-table">
          <thead><tr><th>益生菌類型</th><th>代表菌株</th><th>抗生素影響</th><th>建議做法</th></tr></thead>
          <tbody>
            <tr>
              <td><span class="tag tag-immune" style="font-size:11px;">酵母菌</span></td>
              <td>S. boulardii</td>
              <td><span class="abx-safe">✅ 不受影響</span></td>
              <td>可與抗生素同時服用，AAD 預防首選</td>
            </tr>
            <tr>
              <td><span class="tag tag-gi" style="font-size:11px;">細菌型活菌</span></td>
              <td>LGG、BB-12、LP 299v 等</td>
              <td><span class="abx-warn">⚠️ 可能被殺滅</span></td>
              <td>與抗生素間隔 <b>≥2 小時</b>服用</td>
            </tr>
            <tr>
              <td><span class="tag tag-allergy" style="font-size:11px;">後生元 / HK 菌</span></td>
              <td>HK Lactobacillus、Urolithin A</td>
              <td><span class="abx-safe">✅ 不受影響</span></td>
              <td>免疫低下患者首選，無活菌感染風險</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box warning" style="margin-top:10px;font-size:13px;">
        ⚠️ <b>禁忌族群：</b>免疫低下、器官移植、化療患者 → 優先後生元；活菌製劑使用前務必諮詢主治醫師。抗黴菌藥（Fluconazole 等）可能殺滅 S. boulardii，需改用細菌型益生菌。
      </div>
    </div>`;

  list.innerHTML = abxBox + DB.DRUG_INTERACTIONS.map(d => `
    <div class="interaction-card">
      <div class="int-header">
        <span class="interaction-severity sev-${d.severity}">${d.severityLabel}</span>
        <div class="int-drug">${SEV_ICON[d.severity]||''} ${d.drugClass}</div>
      </div>
      <div class="int-detail">
        <b>藥物：</b>${d.drugs.join('、')}<br>
        <b>影響菌株：</b>${(d.affectedStrains||[]).map(id=>{const s=DB.STRAINS.find(x=>x.id===id);return s?s.abbr:id;}).join('、')}<br><br>
        <b>機轉：</b>${d.mechanism}<br><br>
        <div class="study-finding">${d.recommendation}</div>
        ${d.clinicalPearl ? `<div style="margin-top:8px;font-size:12px;color:#5a7a6a;">💡 臨床提示：${d.clinicalPearl}</div>` : ''}
      </div>
    </div>
  `).join('');
}

// ============================================================
//  複方協同組合
// ============================================================
function renderCombos() {
  const list = document.getElementById('combos-list');
  list.innerHTML = DB.SYNBIOTIC_COMBOS.map(c => `
    <div class="combo-card">
      <div class="combo-title">${c.icon} ${c.name}</div>
      <div class="combo-target">🎯 適用：${c.target}</div>
      <div class="combo-section-label">益生菌（Probiotics）</div>
      <div class="chip-row">
        ${(c.components.probiotics||[]).map(id=>{const s=DB.STRAINS.find(x=>x.id===id);return s?`<span class="chip chip-p">${s.icon} ${s.abbr}</span>`:''}).join('')}
      </div>
      ${c.components.prebiotics&&c.components.prebiotics.length?`
        <div class="combo-section-label">益生元（Prebiotics）</div>
        <div class="chip-row">
          ${c.components.prebiotics.map(id=>{const s=DB.SUPPLEMENTS.find(x=>x.id===id);return s?`<span class="chip chip-pre">${s.icon||'🌿'} ${s.name}</span>`:''}).join('')}
        </div>`:''
      }
      ${c.components.postbiotics&&c.components.postbiotics.length?`
        <div class="combo-section-label">後生元（Postbiotics）</div>
        <div class="chip-row">
          ${c.components.postbiotics.map(id=>{const s=DB.SUPPLEMENTS.find(x=>x.id===id);return s?`<span class="chip chip-post">${s.icon||'💎'} ${s.name}</span>`:''}).join('')}
        </div>`:''
      }
      <div class="combo-section-label">劑量與時機</div>
      <div class="info-box" style="font-size:13px;">💊 ${c.dose}<br>⏰ ${c.timing}</div>
      <div class="combo-benefit">📌 預期效益：${c.expectedBenefit}</div>
      <div style="font-size:11px;color:#5a7a6a;margin-top:8px;">📚 文獻依據：${c.evidenceBasis}</div>
    </div>
  `).join('');
}

// ============================================================
//  客戶需求配對
// ============================================================
function runMatcher() {
  const checked = [...document.querySelectorAll('.matcher-form input[type=checkbox]:checked')].map(c=>c.value);
  const needs = checked.filter(v=>!['antibiotic','immunocomp','pregnant','elderly'].includes(v));
  const flags = checked.filter(v=>['antibiotic','immunocomp','pregnant','elderly'].includes(v));

  if (!needs.length) {
    document.getElementById('matcher-results').innerHTML =
      '<div class="info-box warning" style="max-width:600px;">請至少勾選一個主要需求。</div>';
    return;
  }

  // 評分：每符合一個需求 +2，flags 加警示
  const scores = {};
  DB.STRAINS.forEach(s => {
    let score = needs.filter(n => s.categories.includes(n)).length * 2;
    if (flags.includes('antibiotic') && s.id === 's_boulardii') score += 2;
    if (flags.includes('immunocomp') && s.autoimmune) score -= 3;
    if (score > 0) scores[s.id] = score;
  });

  const sorted = Object.entries(scores).sort((a,b)=>b[1]-a[1]).slice(0,6);

  let warnings = '';
  if (flags.includes('immunocomp'))
    warnings += '<div class="info-box danger" style="max-width:600px;margin-bottom:16px;">⚠️ 自體免疫 / 免疫低下：請優先考慮後生元（熱殺滅菌）；使用活菌製劑前務必諮詢主治醫師。</div>';
  if (flags.includes('antibiotic'))
    warnings += '<div class="info-box warning" style="max-width:600px;margin-bottom:16px;">💊 正在服用抗生素：益生菌與抗生素間隔 ≥2 小時；S. boulardii 不受抗生素影響，是 AAD 預防首選。</div>';
  if (flags.includes('pregnant'))
    warnings += '<div class="info-box warning" style="max-width:600px;margin-bottom:16px;">🤱 懷孕 / 哺乳中：LGG 及 BB-12 是目前人體研究最多、安全性資料最充足的菌株，建議優先選擇。</div>';

  const resultCards = sorted.map(([id, score]) => {
    const s = DB.STRAINS.find(x=>x.id===id);
    if (!s) return '';
    const myProds = PRODUCTS.filter(p => (p.strains||[]).includes(id));
    return `
      <div class="result-card">
        <span class="match-score">符合度 ${'⭐'.repeat(Math.min(score,5))}</span>
        <div style="font-size:14px;font-weight:700;margin-bottom:4px;">${s.icon} ${s.name}</div>
        <div style="font-size:12px;color:#5a7a6a;margin-bottom:8px;">${s.abbr}｜${s.standardDose}</div>
        <div style="font-size:12px;margin-bottom:6px;">${s.categories.filter(c=>needs.includes(c)).map(c=>`<span class="tag ${CAT_COLORS[c]}">${CAT_LABELS[c]}</span>`).join('')}</div>
        ${myProds.length ? `<div style="font-size:12px;margin-top:6px;padding:6px 10px;background:#f0f7f3;border-radius:6px;">🏪 ${myProds.map(p=>p.name).join('、')}</div>` : '<div style="font-size:11px;color:#a0b8ad;margin-top:4px;">（尚未建立對應產品）</div>'}
        <button class="btn btn-secondary" style="font-size:11px;padding:4px 10px;margin-top:8px;" onclick="openDetail('${id}')">查看詳情</button>
      </div>`;
  }).join('');

  document.getElementById('matcher-results').innerHTML = warnings +
    `<h4 style="font-size:15px;font-weight:700;color:#1a2e24;margin-bottom:14px;">推薦菌株</h4>
     <div class="result-grid">${resultCards}</div>`;
}

// ============================================================
//  產品庫
// ============================================================
function renderProductsPage() {
  const sel = document.getElementById('prod-strains');
  if (sel && sel.options.length <= 1) {
    DB.STRAINS.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.id;
      opt.textContent = s.icon + ' ' + s.abbr + ' — ' + s.name.substring(0,30);
      sel.appendChild(opt);
    });
  }
  renderProductTable();
}

function addProduct() {
  const name = document.getElementById('prod-name').value.trim();
  if (!name) { alert('請填寫產品名稱'); return; }
  const strains = [...document.getElementById('prod-strains').selectedOptions].map(o=>o.value);
  const prod = {
    id: Date.now(), name,
    brand: document.getElementById('prod-brand').value.trim(),
    strains,
    category: document.getElementById('prod-category').value,
    cfu: document.getElementById('prod-cfu').value.trim(),
    price: document.getElementById('prod-price').value.trim(),
    note: document.getElementById('prod-note').value.trim()
  };
  PRODUCTS.push(prod);
  localStorage.setItem('probiotic_products', JSON.stringify(PRODUCTS));
  renderProductTable();
  clearProductForm();
}

function deleteProduct(id) {
  PRODUCTS = PRODUCTS.filter(p=>p.id!==id);
  localStorage.setItem('probiotic_products', JSON.stringify(PRODUCTS));
  renderProductTable();
}

function clearProductForm() {
  ['prod-name','prod-brand','prod-cfu','prod-price','prod-note'].forEach(id=>{document.getElementById(id).value='';});
  document.getElementById('prod-strains').selectedIndex = -1;
}

function renderProductTable() {
  const tbody = document.getElementById('product-tbody');
  if (!PRODUCTS.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:#a0b8ad;padding:24px;">尚未新增產品。</td></tr>';
    return;
  }
  const catLabel = {immune:'免疫',allergy:'過敏',gi:'腸胃',sleep:'睡眠',sports:'運動',weight:'體重',vaginal:'私密處'};
  tbody.innerHTML = PRODUCTS.map(p => `
    <tr>
      <td><b>${p.name}</b>${p.note?`<div style="font-size:11px;color:#5a7a6a;">${p.note}</div>`:''}</td>
      <td>${p.brand||'—'}</td>
      <td style="font-size:12px;">${(p.strains||[]).map(id=>{const s=DB.STRAINS.find(x=>x.id===id);return s?s.abbr:'';}).join('<br>')}</td>
      <td><span class="tag ${CAT_COLORS[p.category]||'tag-immune'}" style="font-size:11px;">${catLabel[p.category]||p.category}</span></td>
      <td style="font-size:12px;">${p.cfu||'—'}</td>
      <td style="font-size:12px;">${p.price?'$'+p.price:'—'}</td>
      <td><button class="btn btn-secondary" style="font-size:11px;padding:3px 8px;" onclick="deleteProduct(${p.id})">刪除</button></td>
    </tr>
  `).join('');
}

function exportProducts() {
  const blob = new Blob([JSON.stringify(PRODUCTS, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'probiotic_products.json';
  a.click();
}

// ============================================================
//  初始化
// ============================================================
function seedProducts() {
  const seededVer = localStorage.getItem('probiotic_seed_ver');
  if (seededVer === DB.SEED_VERSION) return;
  const existingIds = new Set(PRODUCTS.map(p => p.id));
  DB.SEED_PRODUCTS.forEach(p => {
    if (!existingIds.has(p.id)) PRODUCTS.push(p);
  });
  localStorage.setItem('probiotic_products', JSON.stringify(PRODUCTS));
  localStorage.setItem('probiotic_seed_ver', DB.SEED_VERSION);
}

window.addEventListener('DOMContentLoaded', () => {
  seedProducts();
  renderStrains(DB.STRAINS);
  renderHomeStats();
  const userEl = document.getElementById('sidebar-user');
  if (userEl) userEl.textContent = '👤 ' + getUsername();
});

function renderHomeStats() {
  const strainStudies = DB.STRAINS.reduce((n, s) => n + (s.studies || []).length, 0);
  const suppStudies   = DB.SUPPLEMENTS.reduce((n, s) => n + (s.studies || []).length, 0);
  const stats = [
    { num: DB.STRAINS.length,           label: '菌株 / 複合菌' },
    { num: strainStudies + suppStudies, label: 'PICO 文獻' },
    { num: DB.SUPPLEMENTS.length,       label: '免疫輔助成分' },
    { num: DB.SYNBIOTIC_COMBOS.length,  label: '複方協同組合' },
    { num: DB.DRUG_INTERACTIONS.length, label: '藥物交互作用類' },
  ];
  const el = document.getElementById('home-stats');
  if (el) el.innerHTML = stats.map(s =>
    `<div class="stat-card"><div class="stat-num">${s.num}</div><div class="stat-label">${s.label}</div></div>`
  ).join('');
}
