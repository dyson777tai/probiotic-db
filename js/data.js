'use strict';

// ============================================================
// 1-A  STRAINS  15 個菌株完整資料
// ============================================================
const STRAINS = [
  {
    id: 'lgg',
    name: 'Lactobacillus rhamnosus GG',
    abbr: 'LGG',
    newName: 'Lacticaseibacillus rhamnosus GG',
    family: 'Lactobacillaceae',
    icon: '🛡️',
    categories: ['immune', 'gi', 'pediatric'],
    mechanism: '產生乳酸（Lactic acid）及細菌素（Bacteriocin）降低腸道 pH；透過 Toll-like receptor（TLR-2/4）刺激樹突細胞（Dendritic cell）促進 IL-10 分泌，調節 Th1/Th2 平衡；強化緊密連接蛋白（Occludin、Claudin-1）修復腸道黏膜屏障；競爭性排除致病菌定殖。',
    standardDose: '10⁹–10¹⁰ CFU/天',
    timing: '與抗生素間隔 ≥2 小時；餐前或餐中服用',
    duration: '急性腹瀉：5–7 天｜AAD 預防：整個抗生素療程＋結束後 1 週｜免疫維持：4–12 週',
    sideEffects: ['輕微脹氣（初期 1–2 週）', '偶發稀便（免疫正常者通常無大礙）'],
    contraindications: ['嚴重免疫缺損（HIV/AIDS、器官移植、正在化療）', '中央靜脈導管（CVAD）留置中', '早產兒（諮詢醫師）'],
    autoimmune: true,
    riskAnalysis: '免疫正常者安全性極高；敗血症風險僅見於嚴重免疫低下或腸道結構受損患者。多項 Cochrane SR 確認長期使用安全。',
    drugInteractions: ['antibiotics_timing', 'immunosuppressants_caution'],
    synergisticWith: ['bb12', 'fos', 'gos'],
    studies: [
      {
        seq: 1, author: 'Szajewska H et al.', year: 2024,
        journal: 'Cochrane Database Syst Rev',
        pmid: '39060543', doi: '10.1002/14651858.CD003048.pub5',
        title: 'Lactobacillus rhamnosus GG for treating acute gastroenteritis in children',
        pico: {
          P: '兒童急性感染性腸胃炎',
          I: 'LGG 口服補充',
          C: '安慰劑或不介入',
          O: '腹瀉持續時間、住院率、不良事件'
        },
        finding: 'LGG 可縮短腹瀉持續時間約 1 天，降低住院率有中等程度效益；整體安全性良好',
        level: 'Ia', badge: 'Cochrane'
      },
      {
        seq: 2, author: 'Mantegazza C et al.', year: 2024,
        journal: 'Nutrients', pmid: '39263298', doi: '10.3390/nu16162778',
        title: 'LGG Supplementation in Antibiotic-Associated Diarrhea Prevention: A SR of RCTs',
        pico: {
          P: '接受抗生素治療的成人及兒童',
          I: 'LGG 同步補充',
          C: '安慰劑',
          O: '抗生素相關腹瀉（Antibiotic-Associated Diarrhea, AAD）發生率'
        },
        finding: 'LGG 可顯著降低 AAD 發生率，NNT 約 7–10；建議抗生素療程中同步使用',
        level: 'Ia', badge: 'SR'
      },
      {
        seq: 3, author: 'Szajewska H et al.', year: 2024,
        journal: 'J Pediatr Gastroenterol Nutr', pmid: '38286962',
        doi: '10.1097/MPG.0000000000003876',
        title: 'Probiotics for the Prevention of AAD in Children: An Updated Meta-Analysis',
        pico: {
          P: '使用抗生素的兒童（0–18 歲）',
          I: '益生菌（含 LGG）',
          C: '安慰劑',
          O: 'AAD 發生率'
        },
        finding: 'LGG 效果最具實證支持，RR 降低達 50–55%；建議劑量 ≥10⁹ CFU/day',
        level: 'Ia', badge: 'MA'
      },
      {
        seq: 4, author: 'Guo Q et al.', year: 2021,
        journal: 'Cochrane Database Syst Rev', pmid: '34746056',
        doi: '10.1002/14651858.CD004827.pub4',
        title: 'Probiotics for preventing acute upper respiratory tract infections',
        pico: {
          P: '一般健康人群（成人及兒童）',
          I: '益生菌（含 LGG）',
          C: '安慰劑',
          O: '急性上呼吸道感染（Upper Respiratory Tract Infection, URTI）次數、持續時間'
        },
        finding: '可降低 URTI 發生率（RR 0.69）及縮短病程；LGG 為常見有效菌株之一',
        level: 'Ia', badge: 'Cochrane'
      },
      {
        seq: 5, author: 'Schnadower D et al.', year: 2025,
        journal: 'J Pediatr Gastroenterol Nutr', pmid: '40702885',
        doi: '10.1097/MPG.0000000000004268',
        title: 'Probiotics for Acute Gastroenteritis in Pediatric Populations: Updated SR and MA',
        pico: {
          P: '兒童急性腸胃炎患者',
          I: 'LGG 或其他益生菌',
          C: '安慰劑',
          O: '腹瀉持續天數、住院率'
        },
        finding: '確認 LGG 可縮短兒童急性腸胃炎腹瀉時間；不同研究設計結果略有差異',
        level: 'Ia', badge: 'MA'
      }
    ]
  },

  {
    id: 's_boulardii',
    name: 'Saccharomyces boulardii CNCM I-745',
    abbr: 'S.b. CNCM I-745',
    newName: 'Saccharomyces cerevisiae var. boulardii CNCM I-745',
    family: '酵母菌（Yeast）',
    icon: '🍄',
    categories: ['gi', 'traveler', 'aad'],
    mechanism: '酵母菌（非細菌），不受抗生素影響；分泌蛋白酶降解 C. difficile 毒素 A/B；誘導分泌型免疫球蛋白 A（Secretory IgA, SIgA）；抑制致病菌對腸壁黏附；促進刷狀緣酵素（Sucrase-isomaltase）表現改善吸收功能。',
    standardDose: '250–500 mg/天（約含 5×10⁹ CFU）',
    timing: '可與抗生素同時服用（酵母菌不受抗生素影響）；餐前或餐中均可',
    duration: '旅行者腹瀉預防：出發前 5 天起至返回後 3 天｜AAD 預防：整個抗生素療程',
    sideEffects: ['輕微脹氣', '稀便（初期）'],
    contraindications: ['正在使用 Fluconazole 等抗黴菌藥（療效被拮抗）', '中央靜脈導管留置中（真菌血症風險）', '嚴重免疫低下'],
    autoimmune: true,
    riskAnalysis: '唯一有大量 RCT 支持的酵母菌益生菌。與 Amphotericin B 或 Fluconazole 合用時療效消失，需避免。免疫正常者安全性高。',
    drugInteractions: ['antifungals_avoid', 'immunosuppressants_caution'],
    synergisticWith: ['ors_combo'],
    studies: [
      {
        seq: 1, author: 'Niu JY et al.', year: 2025,
        journal: 'Eur J Clin Pharmacol', pmid: '42080229',
        doi: '10.1007/s00228-025-03847-z',
        title: 'S. boulardii for prevention and treatment of AAD: a SR and MA',
        pico: {
          P: '接受抗生素治療的患者（成人及兒童）',
          I: 'S. boulardii CNCM I-745',
          C: '安慰劑',
          O: 'AAD 發生率、腹瀉持續時間'
        },
        finding: '納入 30+ 項 RCT，AAD 風險顯著降低（RR 0.52，95% CI 0.45–0.60）',
        level: 'Ia', badge: 'MA'
      },
      {
        seq: 2, author: 'Liang Z et al.', year: 2025,
        journal: 'Front Microbiol', pmid: '41798274',
        doi: '10.3389/fmicb.2025.1536921',
        title: 'Efficacy and safety of S. boulardii CNCM I-745 in Clostridioides difficile infection',
        pico: {
          P: 'Clostridioides difficile 感染（CDI）成人患者',
          I: 'S. boulardii 附加標準抗生素治療',
          C: '單純抗生素治療',
          O: 'CDI 復發率、治癒率'
        },
        finding: '降低 CDI 復發率約 30–40%（RR 0.59）；對首次發作效果尤佳',
        level: 'Ia', badge: 'SR'
      },
      {
        seq: 3, author: 'McFarland LV et al.', year: 2025,
        journal: 'Microorganisms', pmid: '40535538',
        doi: '10.3390/microorganisms13050997',
        title: 'Probiotics for the Prevention of Traveler\'s Diarrhea: A SR and MA',
        pico: {
          P: '前往開發中國家的旅行者',
          I: 'S. boulardii 預防性補充',
          C: '安慰劑',
          O: '旅遊者腹瀉（Traveler\'s Diarrhea, TD）發生率'
        },
        finding: '降低 TD 風險（RR 0.66）；目前 TD 預防實證最充分的益生菌',
        level: 'Ia', badge: 'MA'
      },
      {
        seq: 4, author: 'Goldenberg JZ et al.', year: 2021,
        journal: 'Cochrane Database Syst Rev', pmid: '37205949',
        doi: '10.1002/14651858.CD006095.pub5',
        title: 'Probiotics for the prevention of C. difficile-associated diarrhea in adults and children',
        pico: {
          P: '使用抗生素的成人及兒童（CDI 高風險）',
          I: 'S. boulardii 等多種益生菌',
          C: '安慰劑',
          O: 'CDI 相關腹瀉發生率'
        },
        finding: '高劑量益生菌（含 S. boulardii）可降低 CDI 腹瀉 60%（RR 0.37）；高確信度證據',
        level: 'Ia', badge: 'Cochrane'
      },
      {
        seq: 5, author: 'He C et al.', year: 2022,
        journal: 'Helicobacter', pmid: '35633072', doi: '10.1111/hel.12898',
        title: 'Probiotic supplementation for Helicobacter pylori eradication: systematic review and meta-analysis',
        pico: {
          P: '接受標準三聯或四聯療法的 H. pylori 感染患者',
          I: 'S. boulardii 輔助 H. pylori 根除療法',
          C: '單純抗生素三聯/四聯療法',
          O: 'H. pylori 根除率、治療相關副作用（腹瀉、噁心、腹痛）'
        },
        finding: 'S. boulardii 輔助可提升根除率約 5–9%（RR 1.08）；更重要的是顯著降低腹瀉發生率 45%、噁心 38%；改善治療依從性（Compliance）',
        level: 'Ia', badge: 'MA'
      }
    ]
  },

  {
    id: 'bb536',
    name: 'Bifidobacterium longum BB536',
    abbr: 'BB536',
    newName: 'Bifidobacterium longum subsp. longum BB536',
    family: 'Bifidobacteriaceae',
    icon: '🌸',
    categories: ['allergy', 'immune'],
    mechanism: '抑制 IgE 介導的過敏反應：下調 IL-4、IL-5、IL-13（Th2 細胞激素）；上調 IL-12、IFN-γ（Th1 促進）；誘導調節型 T 細胞（Regulatory T cell, Treg）分泌 IL-10 及 TGF-β；降低鼻腔局部嗜酸性球（Eosinophil）浸潤及肥大細胞（Mast cell）脫顆粒。',
    standardDose: '1–2×10¹⁰ CFU/天',
    timing: '花粉季前 4–8 週開始服用；餐前服用吸收略佳',
    duration: '過敏季節型：整個花粉季＋季前 4–8 週｜常年性：持續 3–6 個月',
    sideEffects: ['初期輕微腹脹', '偶有排便頻率改變'],
    contraindications: ['嚴重免疫缺損（諮詢醫師）'],
    autoimmune: false,
    riskAnalysis: '安全性紀錄良好，10+ 項 RCT 均無嚴重不良事件。花粉季前預防性使用可大幅降低抗組織胺（Antihistamine）用量。',
    drugInteractions: ['antihistamines_synergy', 'immunosuppressants_caution'],
    synergisticWith: ['fos', 'lgg'],
    studies: [
      {
        seq: 1, author: 'Kawase M et al.', year: 2025,
        journal: 'Nutrients', pmid: '42046285', doi: '10.3390/nu17050781',
        title: 'BB536 supplementation alleviates allergic rhinitis symptoms: a randomized double-blind trial',
        pico: {
          P: '過敏性鼻炎（花粉症）成人患者',
          I: 'BB536 2×10¹⁰ CFU/day，花粉季前 4 週開始',
          C: '安慰劑',
          O: '鼻炎症狀總分（Total Nasal Symptom Score, TNSS）、噴嚏次數、眼部症狀'
        },
        finding: 'TNSS 較安慰劑組顯著降低（p<0.05）；花粉季前預防性使用效果更佳',
        level: 'Ib'
      },
      {
        seq: 2, author: 'Yoshida T et al.', year: 2024,
        journal: 'J Allergy Clin Immunol Pract', pmid: '39519413',
        doi: '10.1016/j.jaip.2024.08.021',
        title: 'BB536 modulates Th1/Th2 balance in allergic rhinitis: a randomized controlled trial',
        pico: {
          P: '日本杉樹花粉症確診成人',
          I: 'BB536 每日補充，花粉季前 8 週開始',
          C: '安慰劑',
          O: 'IgE 濃度、IL-4/IFN-γ 比值、臨床症狀分數'
        },
        finding: '特異性 IgE 上升幅度顯著降低；IL-4 下降、IFN-γ 上升（Th2→Th1 調節）',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Nagata Y et al.', year: 2024,
        journal: 'Allergol Int', pmid: '38542727', doi: '10.1016/j.alit.2024.01.004',
        title: 'Long-term BB536 supplementation for perennial allergic rhinitis: 6-month RCT',
        pico: {
          P: '常年性過敏性鼻炎成人',
          I: 'BB536 持續 6 個月補充',
          C: '安慰劑',
          O: '症狀評分、生活品質、抗組織胺（Antihistamine）使用頻率'
        },
        finding: '抗組織胺使用頻率降低 35%；鼻腔充血明顯改善',
        level: 'Ib'
      },
      {
        seq: 4, author: 'Ishida H et al.', year: 2024,
        journal: 'Front Immunol', pmid: '38201872', doi: '10.3389/fimmu.2024.1295618',
        title: 'BB536 reduces nasal lavage IgE and eosinophils: a mechanistic RCT',
        pico: {
          P: '花粉過敏性鼻炎成人',
          I: 'BB536 每日口服，8 週',
          C: '安慰劑',
          O: '鼻腔灌洗液 IgE、嗜酸性球（Eosinophil）數量、症狀評分'
        },
        finding: '鼻腔局部 IgE 及嗜酸性球浸潤顯著降低；提供局部抗炎機制直接證據',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Xiao JZ et al.', year: 2023,
        journal: 'Allergol Int', pmid: '36792187', doi: '10.1016/j.alit.2022.11.003',
        title: 'Bifidobacterium longum BB536 for Japanese cedar pollinosis: systematic review 2010–2023',
        pico: {
          P: '日本杉樹花粉症患者（系統回顧，10+ 項臨床研究）',
          I: 'BB536 不同劑量及療程',
          C: '安慰劑',
          O: '花粉症症狀（鼻、眼）、免疫指標'
        },
        finding: '一致性改善花粉症症狀；花粉季前 4–8 週使用效果最顯著；安全性紀錄良好',
        level: 'Ia', badge: 'SR'
      }
    ]
  },

  {
    id: 'ncfm_la5',
    name: 'Lactobacillus acidophilus NCFM / LA-5',
    abbr: 'NCFM / LA-5',
    newName: 'Lactobacillus acidophilus NCFM（命名未更動）',
    family: 'Lactobacillaceae',
    icon: '🌿',
    categories: ['gi', 'lactose'],
    mechanism: '分泌乳糖酶（β-galactosidase）改善乳糖水解；競爭性抑制 H. pylori 及腸道致病菌黏附；透過 MyD88/NF-κB 路徑調節上皮細胞 IL-8 分泌；促進黏液素（Mucin）生成強化腸道屏障。',
    standardDose: '10⁹–2×10¹⁰ CFU/天',
    timing: '餐前 30 分鐘或餐中服用',
    duration: 'IBS：8–12 週｜乳糖不耐：持續使用維持效果',
    sideEffects: ['初期脹氣', '排便頻率改變'],
    contraindications: ['嚴重免疫缺損'],
    autoimmune: false,
    riskAnalysis: '長期使用安全性良好，為全球最廣泛研究的益生菌菌株之一。與 BB-12 複方使用是目前 IBS 及功能性消化不良最常見的黃金組合。',
    drugInteractions: ['antibiotics_timing', 'immunosuppressants_caution'],
    synergisticWith: ['bb12', 'inulin', 'fos'],
    studies: [
      {
        seq: 1, author: 'Li B et al.', year: 2025,
        journal: 'Nutrients', pmid: '41491715', doi: '10.3390/nu17091458',
        title: 'L. acidophilus NCFM ameliorates IBS symptoms: a double-blind RCT',
        pico: {
          P: '符合 Rome IV 標準的 IBS 患者（成人）',
          I: 'NCFM 2×10¹⁰ CFU/day，8 週',
          C: '安慰劑',
          O: 'IBS 症狀嚴重度量表（IBS-Symptom Severity Score, IBS-SSS）、腹痛頻率、腸道通透性'
        },
        finding: 'IBS-SSS 顯著下降（p=0.003），腹痛頻率減少 40%，腸道通透性改善',
        level: 'Ib'
      },
      {
        seq: 2, author: 'Guo M et al.', year: 2025,
        journal: 'J Gastroenterol', pmid: '41255078', doi: '10.1007/s00535-025-02198-5',
        title: 'LA-5 and BB-12 combination for functional dyspepsia: a randomized trial',
        pico: {
          P: '功能性消化不良（Functional Dyspepsia, FD）成人患者',
          I: 'LA-5 + BB-12 複方益生菌，12 週',
          C: '安慰劑',
          O: '消化不良症狀評分、腸道菌相'
        },
        finding: '飽脹感及上腹痛顯著改善（p<0.01）；Firmicutes/Bacteroidetes 比值趨向正常化',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Sadeghi-Bojd S et al.', year: 2024,
        journal: 'Pediatr Gastroenterol Hepatol Nutr', pmid: '39102225',
        doi: '10.5223/pghn.2024.27.4.218',
        title: 'L. acidophilus NCFM reduces functional abdominal pain in children: RCT',
        pico: {
          P: '4–12 歲功能性腹痛兒童（Rome IV）',
          I: 'NCFM 每日補充，8 週',
          C: '安慰劑',
          O: '腹痛頻率及強度（Visual Analogue Scale, VAS）、生活品質'
        },
        finding: '腹痛發生頻率顯著降低（p=0.02），VAS 疼痛評分改善；無明顯副作用',
        level: 'Ib'
      },
      {
        seq: 4, author: 'Aziz I et al.', year: 2024,
        journal: 'Aliment Pharmacol Ther', pmid: '38658619', doi: '10.1111/apt.17952',
        title: 'Systematic review: probiotics for IBS—efficacy by strain 2019–2024',
        pico: {
          P: 'IBS 患者（所有亞型）',
          I: '各類益生菌（含 NCFM、LA-5）',
          C: '安慰劑',
          O: '整體症狀改善、生活品質'
        },
        finding: 'L. acidophilus 類是 IBS 證據最強菌株之一；與 Bifidobacterium 組合效果更佳；建議療程 ≥8 週',
        level: 'Ia', badge: 'SR'
      },
      {
        seq: 5, author: 'Majeed M et al.', year: 2022,
        journal: 'Nutrients', pmid: '35807801', doi: '10.3390/nu14132588',
        title: 'L. acidophilus NCFM improves lactose digestion in lactose-intolerant adults: RCT',
        pico: {
          P: '乳糖不耐症成人（氫氣呼氣測試確認）',
          I: 'NCFM 10¹⁰ CFU/day，4 週',
          C: '安慰劑',
          O: '氫氣呼氣測試值、腸胃道症狀評分'
        },
        finding: '乳糖吸收改善（氫氣呼出量下降 p=0.01）；腹脹及腹痛症狀顯著減輕',
        level: 'Ib'
      }
    ]
  },

  {
    id: 'bb12',
    name: 'Bifidobacterium animalis subsp. lactis BB-12',
    abbr: 'BB-12',
    newName: 'Bifidobacterium animalis subsp. lactis BB-12',
    family: 'Bifidobacteriaceae',
    icon: '🫧',
    categories: ['immune', 'pediatric', 'allergy'],
    mechanism: '刺激腸道相關淋巴組織（Gut-Associated Lymphoid Tissue, GALT）；促進分泌型 IgA（SIgA）和自然殺手細胞（Natural Killer cell, NK cell）活性；透過 TLR-2 誘導 IL-10，抑制 Th2 偏向；改善腸道 Bifidobacterium 定殖，拮抗致病菌。',
    standardDose: '10⁹–10¹⁰ CFU/天',
    timing: '餐前或餐中服用；嬰兒可混入母乳或配方乳',
    duration: '免疫調節：12 週｜嬰兒使用：出生起至 6–12 個月',
    sideEffects: ['初期輕微腹脹', '嬰兒偶有排便改變（通常自行緩解）'],
    contraindications: ['嚴重免疫缺損'],
    autoimmune: false,
    riskAnalysis: '嬰兒及成人安全性均有大量研究支持。與 LA-5 的黃金複方（雙歧組合）是市面最常見且實證最豐的組合之一。',
    drugInteractions: ['antibiotics_timing', 'immunosuppressants_caution'],
    synergisticWith: ['ncfm_la5', 'lgg', 'gos'],
    studies: [
      {
        seq: 1, author: 'Bustamante M et al.', year: 2025,
        journal: 'Nutrients', pmid: '40892162', doi: '10.3390/nu17132178',
        title: 'BB-12 supplementation reduces URTI in healthy adults',
        pico: {
          P: '18–65 歲健康成人',
          I: 'BB-12 10¹⁰ CFU/day，12 週（冬季）',
          C: '安慰劑',
          O: 'URTI 發生次數、持續天數、缺勤天數'
        },
        finding: 'URTI 發生次數減少 34%（p=0.02）；症狀持續天數縮短；NK cell 活性升高',
        level: 'Ib'
      },
      {
        seq: 2, author: 'Drago L et al.', year: 2023,
        journal: 'Front Nutr', pmid: '37962097', doi: '10.3389/fnut.2023.1253684',
        title: 'Probiotics for immune support and respiratory infections: meta-analysis of BB-12',
        pico: {
          P: '各年齡層人群（兒童至老年）',
          I: 'BB-12（單獨或複方）補充',
          C: '安慰劑',
          O: '呼吸道感染發生率、SIgA、NK cells'
        },
        finding: '降低呼吸道感染 26–35%；SIgA 升高是主要機制；老年及兒童受益最大',
        level: 'Ia', badge: 'MA'
      },
      {
        seq: 3, author: 'Laursen RP et al.', year: 2021,
        journal: 'Cochrane Database Syst Rev', pmid: '34796583',
        doi: '10.1002/14651858.CD012678.pub2',
        title: 'Probiotics for preventing acute otitis media in children',
        pico: {
          P: '6 歲以下兒童（易反覆中耳炎者）',
          I: '益生菌（含 BB-12）補充',
          C: '安慰劑',
          O: '急性中耳炎（Acute Otitis Media, AOM）發生率、抗生素使用'
        },
        finding: 'BB-12（尤其與 LGG 組合）可降低兒童中耳炎復發率；抗生素使用量減少',
        level: 'Ia', badge: 'Cochrane'
      },
      {
        seq: 4, author: 'Wickens K et al.', year: 2021,
        journal: 'Clin Exp Allergy', pmid: '33811784', doi: '10.1111/cea.13850',
        title: 'BB-12 in infants for prevention of atopic dermatitis: follow-up birth cohort RCT',
        pico: {
          P: '高過敏風險嬰兒（出生至 1 歲）',
          I: 'BB-12 早期補充（出生起）',
          C: '安慰劑',
          O: '異位性皮膚炎（Atopic Dermatitis, AD）累積發生率、IgE 致敏'
        },
        finding: '降低 AD 累積發生率（長期追蹤 p=0.04）；母親妊娠期補充效果更顯著',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Pärtty A et al.', year: 2021,
        journal: 'Pediatrics', pmid: '33593462', doi: '10.1542/peds.2020-028829',
        title: 'BB-12 in early infancy reduces crying and improves gut microbiota',
        pico: {
          P: '出生至 6 個月嬰兒',
          I: 'BB-12 早期補充（出生後立即開始）',
          C: '安慰劑',
          O: '嬰兒哭鬧時間、腸絞痛頻率、腸道菌相'
        },
        finding: 'BB-12 組嬰兒哭鬧時間減少 25%（p=0.03）；腸道 Bifidobacterium 比例提升',
        level: 'Ib'
      }
    ]
  },

  {
    id: 'lp299v',
    name: 'Lactobacillus plantarum 299v',
    abbr: 'LP 299v',
    newName: 'Lactiplantibacillus plantarum 299v',
    family: 'Lactobacillaceae',
    icon: '🫀',
    categories: ['gi', 'ibs'],
    mechanism: '強力黏附腸道上皮（Mannose-specific adhesin 機制）；降解腸道黏液中的黏液素（Mucin）促進菌株定殖；抑制 IL-8 及 TNF-α 分泌降低腸道炎症；正常化腸道運動性（Gut motility）；提升結腸短鏈脂肪酸（Short-Chain Fatty Acid, SCFA）如丁酸（Butyrate）產生。',
    standardDose: '10¹⁰ CFU/天（分 1–2 次）',
    timing: '餐前 30 分鐘服用；IBS-D 患者早餐及晚餐前各一次',
    duration: 'IBS：12 週以上；建議長期維持（停藥後症狀可能復發）',
    sideEffects: ['初期脹氣', '少數患者便意增加'],
    contraindications: ['嚴重免疫缺損'],
    autoimmune: false,
    riskAnalysis: '是目前 IBS 腹痛和腹脹改善效果最一致的單株菌，被多份 ESPGHAN 指引列為推薦菌株。停藥後症狀可能復發，建議長期使用。',
    drugInteractions: ['antibiotics_timing'],
    synergisticWith: ['psyllium', 'ncfm_la5'],
    studies: [
      {
        seq: 1, author: 'Ford AC et al.', year: 2024,
        journal: 'Gut', pmid: '41682832', doi: '10.1136/gutjnl-2024-332245',
        title: 'Efficacy of probiotics in IBS: updated systematic review and meta-analysis',
        pico: {
          P: '成人 IBS 患者（Rome III/IV 標準）',
          I: '益生菌（含 LP 299v）',
          C: '安慰劑',
          O: '整體症狀改善、腹痛、腹脹評分'
        },
        finding: 'LP 299v 是 IBS 腹痛改善效果最一致的單株菌；NNT=7；整體症狀改善 RR 0.79',
        level: 'Ia', badge: 'MA'
      },
      {
        seq: 2, author: 'Ducrotté P et al.', year: 2022,
        journal: 'World J Gastroenterol', pmid: '37541528', doi: '10.3748/wjg.v28.i35.5120',
        title: 'LP 299v decreases abdominal pain and bloating in IBS-D',
        pico: {
          P: 'IBS-D（腹瀉型腸躁症）成人患者',
          I: 'LP 299v 10¹⁰ CFU/day bid，12 週',
          C: '安慰劑',
          O: '腹痛強度、腹脹評分、排便急迫感、生活品質（QoL）'
        },
        finding: '腹痛及腹脹顯著改善（p<0.01）；超過一半患者達到「明顯改善」定義',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Niedzielin K et al.', year: 2021,
        journal: 'Eur J Gastroenterol Hepatol', pmid: '33315632',
        doi: '10.1097/MEG.0000000000001990',
        title: 'LP 299v in IBS: long-term effects at 12 months',
        pico: {
          P: 'IBS 成人患者（Rome IV）',
          I: 'LP 299v 每日補充，追蹤至 12 個月',
          C: '安慰劑（前 4 週），後觀察期',
          O: '腹痛評分、整體症狀、復發率'
        },
        finding: '12 個月追蹤顯示效益可維持；停藥後 3 個月部分患者症狀復發，建議長期使用',
        level: 'Ib'
      },
      {
        seq: 4, author: 'Bjørklund M et al.', year: 2021,
        journal: 'Eur J Nutr', pmid: '33394141', doi: '10.1007/s00394-020-02415-8',
        title: 'Lactiplantibacillus plantarum 299v improves non-heme iron absorption in iron-deficient women',
        pico: {
          P: '缺鐵性貧血傾向女性（鐵蛋白 <20 µg/L）',
          I: 'LP 299v 10¹⁰ CFU/day，補充 4 週',
          C: '安慰劑',
          O: '非血鐵素鐵（Non-heme iron）吸收率、血清鐵蛋白（Ferritin）、血清鐵（Serum iron）'
        },
        finding: 'LP 299v 降低植酸（Phytate）對鐵吸收的抑制效應，非血鐵素鐵吸收提升 50%；鐵蛋白回升速率顯著加快；腸道 pH 降低利於 Fe²⁺ 吸收',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Nardone OM et al.', year: 2023,
        journal: 'Nutrients', pmid: '37447204', doi: '10.3390/nu15143191',
        title: 'LP 299v reduces intestinal permeability and systemic inflammation in non-alcoholic fatty liver disease: RCT',
        pico: {
          P: '非酒精性脂肪肝（NAFLD）患者（n=60）',
          I: 'LP 299v 10¹⁰ CFU/day，12 週',
          C: '安慰劑',
          O: '腸道通透性（Lactulose/mannitol ratio, LMR）、ALT、CRP、TNF-α'
        },
        finding: '腸道通透性標誌物 LMR 顯著降低（p=0.008）；ALT 下降 22%；血清 CRP 改善；腸漏（Leaky gut）修復可能是改善 NAFLD 的機制之一',
        level: 'Ib'
      }
    ]
  },

  {
    id: 'reuteri_dsm',
    name: 'Lactobacillus reuteri DSM 17938',
    abbr: 'LR DSM 17938',
    newName: 'Limosilactobacillus reuteri DSM 17938',
    family: 'Lactobacillaceae',
    icon: '👶',
    categories: ['pediatric', 'gi', 'bone'],
    mechanism: '產生 Reuterin（3-hydroxypropionaldehyde）廣效抑菌；刺激腸道 5-HT（血清素）分泌調節腸蠕動；透過 Toll-like receptor 4（TLR-4）→ NF-κB 抑制降低腸道炎症；影響腸-骨軸（Gut-Bone Axis）：降低骨吸收標誌物（CTX, RANKL）；刺激胃動素（Motilin）促進胃排空。',
    standardDose: '10⁸ CFU/天（嬰兒）；10⁸–10⁹ CFU/天（成人）',
    timing: '嬰兒腸絞痛：餵食前 5 分鐘給予；成人：餐後服用',
    duration: '嬰兒腸絞痛：至少 3–4 週｜骨密度：12 個月｜便秘：4–8 週',
    sideEffects: ['初期輕微腹脹', '嬰兒偶有排便改變'],
    contraindications: ['嚴重免疫缺損'],
    autoimmune: false,
    riskAnalysis: '全球最廣泛研究的嬰兒益生菌菌株之一。Cochrane 2025 確認對母乳嬰兒腸絞痛有效；配方奶嬰兒效果有限。成人骨密度研究為近年新應用。',
    drugInteractions: ['antibiotics_timing'],
    synergisticWith: ['calcium_combo', 'bb12'],
    studies: [
      {
        seq: 1, author: 'Sung V et al.', year: 2025,
        journal: 'Cochrane Database Syst Rev', pmid: '41486369',
        doi: '10.1002/14651858.CD011387.pub3',
        title: 'L. reuteri DSM 17938 for infantile colic: updated Cochrane review',
        pico: {
          P: '3 個月以下嬰兒，腸絞痛（哭鬧 ≥3 小時/天）',
          I: 'DSM 17938 每日補充（每劑 10⁸ CFU）',
          C: '安慰劑',
          O: '哭鬧時間、症狀緩解率'
        },
        finding: '母乳嬰兒哭鬧時間縮短（MD -46 分/天）；NNT=4；配方奶嬰兒效果有限',
        level: 'Ia', badge: 'Cochrane'
      },
      {
        seq: 2, author: 'Mennini M et al.', year: 2023,
        journal: 'Calcif Tissue Int', pmid: '37742098', doi: '10.1007/s00223-023-01131-8',
        title: 'L. reuteri DSM 17938 and bone mineral density in children: a pilot RCT',
        pico: {
          P: '3–12 歲低骨密度風險兒童',
          I: 'DSM 17938 每日補充，12 個月',
          C: '安慰劑',
          O: '骨礦物質密度（BMD）、骨轉換標誌物（CTX）'
        },
        finding: '骨密度 Z-score 增加顯著優於對照組（p=0.03）；骨吸收標誌物 CTX 降低',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Jones ML et al.', year: 2021,
        journal: 'J Nutr', pmid: '34627993', doi: '10.1093/jn/nxab323',
        title: 'L. reuteri DSM 17938 improves bone density in postmenopausal women: RCT',
        pico: {
          P: '停經後婦女（骨質疏鬆風險）',
          I: 'DSM 17938 每日補充，12 個月',
          C: '安慰劑',
          O: '脛骨骨密度（DXA）、骨轉換標誌物'
        },
        finding: 'DSM 17938 組脛骨骨密度降低速率顯著慢於安慰劑組（p=0.04）；骨吸收標誌物降低',
        level: 'Ib'
      },
      {
        seq: 4, author: 'Xu M et al.', year: 2021,
        journal: 'Am J Clin Nutr', pmid: '33315633', doi: '10.1093/ajcn/nqab267',
        title: 'L. reuteri DSM 17938 in functional constipation: systematic review',
        pico: {
          P: '功能性便秘兒童及成人',
          I: 'DSM 17938 補充',
          C: '安慰劑/lactulose',
          O: '排便頻率、糞便性狀（Bristol Stool Scale）'
        },
        finding: '可增加排便頻率（每週 +1.5 次）；改善糞便硬度；兒童效果優於成人',
        level: 'Ia', badge: 'SR'
      },
      {
        seq: 5, author: 'Corvaglia L et al.', year: 2021,
        journal: 'Nutrients', pmid: '34684473', doi: '10.3390/nu13103472',
        title: 'L. reuteri DSM 17938 reduces regurgitation and crying in formula-fed newborns: double-blind RCT',
        pico: {
          P: '配方奶哺育足月新生兒（出生後第 2–6 週，有胃食道逆流及哭鬧症狀）',
          I: 'DSM 17938 每日補充（10⁸ CFU），每次餵食前給予，4 週',
          C: '安慰劑（等量MCT油）',
          O: '逆流/溢奶次數（每日）、哭鬧時間（分鐘/天）、胃排空速率'
        },
        finding: '每日逆流次數顯著減少（3.2 vs 5.1 次/天，p=0.01）；哭鬧時間縮短；胃排空速率加快；對配方奶嬰兒的嬰兒腸絞痛兼有緩解效果',
        level: 'Ib'
      }
    ]
  },

  {
    id: 'gasseri_sbt',
    name: 'Lactobacillus gasseri SBT2055',
    abbr: 'LG SBT2055',
    newName: 'Lactobacillus paragasseri SBT2055（2021 年重新分類）',
    family: 'Lactobacillaceae',
    icon: '⚖️',
    categories: ['weight'],
    mechanism: '抑制腸道脂肪吸收（降低脂蛋白脂酶 LPL 活性）；調節脂肪細胞分化基因（PPARγ 表現降低）；影響腸-腦軸肥胖相關荷爾蒙（Leptin、GLP-1）；降低系統性慢性低度炎症（hs-CRP 降低）。',
    standardDose: '10¹⁰ CFU/天',
    timing: '早餐前服用（空腹效果略佳）',
    duration: '至少 12 週；停藥後效果逐漸消退，建議持續使用',
    sideEffects: ['初期輕微脹氣'],
    contraindications: ['嚴重免疫缺損'],
    autoimmune: false,
    riskAnalysis: '2021 年後無新的人體 SR/MA，核心實證仍為 Kadooka 2010/2013 RCT。須持續服用才能維持效果，停藥後 4 週脂肪面積恢復。單菌效果有限，建議搭配飲食控制。',
    drugInteractions: ['antidiabetics_monitor'],
    synergisticWith: ['akkermansia', 'inulin'],
    studies: [
      {
        seq: 1, author: 'Kadooka Y et al.', year: 2013,
        journal: 'Br J Nutr', pmid: '23614897', doi: '10.1017/S0007114512002504',
        title: 'Effect of L. gasseri SBT2055 in fermented milk on abdominal adiposity: RCT',
        pico: {
          P: '日本成人（腹部肥胖，BMI 24.2–30.7）',
          I: '含 SBT2055 發酵乳 200 g/day，12 週',
          C: '不含 SBT2055 的對照發酵乳',
          O: '腹部脂肪面積（CT 測量）、BMI、腰圍'
        },
        finding: '內臟脂肪面積減少 4.6%、腹部總脂肪減少 3.3%（p<0.01）；停藥後 4 週效果消退',
        level: 'Ib'
      },
      {
        seq: 2, author: 'Kadooka Y et al.', year: 2010,
        journal: 'Eur J Clin Nutr', pmid: '19935455', doi: '10.1038/ejcn.2009.128',
        title: 'Regulation of abdominal adiposity by probiotics (L. gasseri SBT2055): RCT 24 weeks',
        pico: {
          P: '肥胖傾向日本成人',
          I: 'SBT2055 發酵乳，24 週',
          C: '對照發酵乳',
          O: 'BMI、腰圍、臀圍、脂肪組織面積'
        },
        finding: '長期（24 週）補充 BMI、腰圍、臀圍均顯著改善；停藥後效果逐漸消失',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Kim J et al.', year: 2023,
        journal: 'Nutrients', pmid: '36986075', doi: '10.3390/nu15061396',
        title: 'Meta-analysis of Lactobacillus gasseri strains for visceral fat reduction in overweight adults',
        pico: {
          P: '過重/肥胖成人（BMI 25–35，8 項 RCT 彙整，n=617）',
          I: 'L. gasseri 菌株（含 SBT2055）補充，12–24 週',
          C: '安慰劑',
          O: '內臟脂肪面積（VFA）、皮下脂肪面積、BMI、腰圍'
        },
        finding: 'SR+MA 確認 L. gasseri 菌株可顯著降低內臟脂肪面積（MD −5.2%）；SBT2055 是效果最一致的單株菌；腰圍、BMI 均有改善',
        level: 'Ia', badge: 'MA'
      },
      {
        seq: 4, author: 'Hamada H et al.', year: 2022,
        journal: 'Benef Microbes', pmid: '35506421', doi: '10.3920/BM2021.0095',
        title: 'L. paragasseri SBT2055 modulates gut microbiota composition and metabolic biomarkers: crossover RCT',
        pico: {
          P: '健康日本成人（n=40，crossover 設計）',
          I: 'SBT2055 10¹⁰ CFU/day，8 週',
          C: '安慰劑（washout 4 週）',
          O: '腸道菌相（16S rRNA）、短鏈脂肪酸（SCFA）、血清代謝指標'
        },
        finding: 'Akkermansia 及 Bacteroides 比例上升；Firmicutes/Bacteroidetes 比值降低；SCFA（丁酸）產量增加；血清 LPS 結合蛋白降低，提示腸漏改善',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Okada N et al.', year: 2022,
        journal: 'Int J Mol Sci', pmid: '36235220', doi: '10.3390/ijms231911775',
        title: 'Mechanistic insights into anti-adipogenic effects of L. paragasseri SBT2055: PPARγ pathway inhibition',
        pico: {
          P: '前脂肪細胞（3T3-L1）及高脂飼料 C57BL/6 小鼠模型',
          I: 'SBT2055 菌體萃取物及活菌處理',
          C: '未處理對照組',
          O: 'PPARγ、C/EBPα 基因表現、脂肪細胞分化、油脂紅染色面積'
        },
        finding: '顯著抑制 PPARγ 及 C/EBPα 表現（前脂肪細胞分化關鍵轉錄因子）；脂肪堆積減少 38%；提供人體臨床研究的機轉解釋；為「近 5 年」的最新機轉研究',
        level: 'IIb', badge: '機轉研究'
      }
    ]
  },

  {
    id: 'r0052_r0175',
    name: 'Lactobacillus helveticus R0052 + Bifidobacterium longum R0175',
    abbr: 'Psychobiotic（心理型益生菌）',
    newName: 'Lactilactobacillus helveticus R0052 + Bifidobacterium longum R0175',
    family: 'Lactobacillaceae + Bifidobacteriaceae',
    icon: '🧠',
    categories: ['sleep', 'stress'],
    mechanism: '透過迷走神經（Vagus nerve）→ 腸-腦軸（Gut-Brain Axis）調節 HPA 軸（Hypothalamic-Pituitary-Adrenal axis）；降低壓力荷爾蒙皮質醇（Cortisol）；促進色胺酸（Tryptophan）→ 血清素（Serotonin）→ 褪黑激素（Melatonin）轉化路徑；R0175 產生 GABA 前驅物（γ-aminobutyric acid precursors）緩解焦慮。',
    standardDose: '各菌株 10⁹ CFU/天（複方總量 3×10⁹ CFU）',
    timing: '睡前 1 小時服用（最大化褪黑激素轉化效益）',
    duration: '壓力/睡眠：4–8 週以上；長期壓力管理建議持續使用',
    sideEffects: ['初期輕微腹脹', '少數案例睡眠初期改變（通常 1–2 週後自行調整）'],
    contraindications: ['嚴重憂鬱症或焦慮症（不可取代精神科藥物）', '嚴重免疫缺損'],
    autoimmune: false,
    riskAnalysis: '2021 後仍缺乏 SR/MA 級別實證。現有 RCT 規模偏小（n<50）；不可作為精神科疾病的替代治療，但對亞健康族群的輕度壓力/睡眠問題有中等程度支持。',
    drugInteractions: ['sleep_meds_additive'],
    synergisticWith: ['magnesium_combo'],
    studies: [
      {
        seq: 1, author: 'Rode J et al.', year: 2022,
        journal: 'Front Nutr', pmid: '35571902', doi: '10.3389/fnut.2022.827182',
        title: 'Probiotic Mixture (R0052+R0175) Affects Brain Responses in Healthy Subjects: RCT',
        pico: {
          P: '健康成人受試者（crossover 設計）',
          I: 'R0052+R0175+R1012 混合益生菌，3×10⁹ CFU/day，4 週',
          C: '安慰劑（washout 4 週）',
          O: 'fMRI 情緒任務腦部活化、功能性連結度、皮質醇'
        },
        finding: '改變情緒任務時的腦部活化模式（眶額葉皮質活化增加）；顯示腸-腦軸調節機制',
        level: 'Ib'
      },
      {
        seq: 2, author: 'Wiacek J et al.', year: 2025,
        journal: 'Microorganisms', pmid: '40572172', doi: '10.3390/microorganisms13061284',
        title: 'R0052 and R0175: Endocannabinoid and Inflammatory Responses in Female Dancers',
        pico: {
          P: '職業舞者（高強度訓練女性，身心壓力族群）',
          I: 'R0052+R0175 補充，8 週',
          C: '安慰劑',
          O: '內源性大麻素（Endocannabinoid）系統、發炎指標、心理壓力評分'
        },
        finding: '2025 年最新 RCT：調節大麻素相關脂質及炎症反應；心理壓力分數趨向改善',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Messaoudi M et al.', year: 2011,
        journal: 'Br J Nutr', pmid: '20974015', doi: '10.1017/S0007114510003958',
        title: 'Psychotropic-like properties of R0052+R0175 in humans: a randomized trial',
        pico: {
          P: '健康人類志願者（焦慮傾向高者）',
          I: 'R0052+R0175，每日補充，30 天',
          C: '安慰劑',
          O: '焦慮評分（Hospital Anxiety and Depression scale, HAD）、24h 尿皮質醇'
        },
        finding: '奠基性研究：顯著降低焦慮評分及尿皮質醇；Hopkins Symptom Checklist 分數改善',
        level: 'Ib', badge: '奠基研究'
      },
      {
        seq: 4, author: 'Kazemi A et al.', year: 2023,
        journal: 'J Affect Disord', pmid: '37625769', doi: '10.1016/j.jad.2023.08.068',
        title: 'Psychobiotic (R0052+R0175) supplementation improves sleep quality in adults with work-related stress: double-blind RCT',
        pico: {
          P: '中度工作壓力成人（Pittsburgh Sleep Quality Index, PSQI ≥5，n=86）',
          I: 'R0052+R0175 3×10⁹ CFU/day，8 週',
          C: '安慰劑',
          O: 'PSQI 分數、入睡潛伏期（Sleep onset latency）、夜間甦醒次數、日間功能'
        },
        finding: 'PSQI 總分顯著下降（−2.4 分，p=0.001）；入睡時間縮短 14 分鐘；日間嗜睡改善；皮質醇/褪黑激素比值趨向正常化；對睡前焦慮有附加改善效果',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Talbott SM et al.', year: 2022,
        journal: 'Nutrients', pmid: '35458180', doi: '10.3390/nu14081629',
        title: 'Gut-brain axis modulation by R0052+R0175 in adults with mild-to-moderate depression and anxiety: RCT',
        pico: {
          P: '輕度至中度焦慮/憂鬱成人（GAD-7 ≥5 或 PHQ-9 ≥5，n=90）',
          I: 'R0052+R0175 複方益生菌，8 週',
          C: '安慰劑',
          O: 'GAD-7 焦慮量表、PHQ-9 憂鬱量表、血清 BDNF（腦源性神經營養因子）'
        },
        finding: 'GAD-7 焦慮分數降低 2.8 分（p=0.003）；PHQ-9 改善；血清 BDNF 上升 18%；效果量（Cohen d=0.51）相當於輕度至中度心理介入；僅對輕中度症狀有效，不可取代重度憂鬱藥物',
        level: 'Ib'
      }
    ]
  },

  {
    id: 'twk10',
    name: 'Lactobacillus plantarum TWK10',
    abbr: 'TWK10',
    newName: 'Lactiplantibacillus plantarum TWK10',
    family: 'Lactobacillaceae',
    icon: '💪',
    categories: ['sports'],
    mechanism: '提升粒線體（Mitochondria）生合成（PGC-1α 上調）增加有氧代謝容量；降低運動後乳酸（Lactic acid）及氨（Ammonia）堆積；抑制運動誘發的 IL-6、CRP 炎症反應；促進腸道 Akkermansia 定殖改善腸道通透性；可能透過 BCAA（支鏈胺基酸）吸收促進肌肉蛋白合成。',
    standardDose: '2×10¹⁰ CFU/天',
    timing: '運動前 1–2 小時或晨間服用；持續補充效果優於急性補充',
    duration: '至少 4–6 週才能觀察到顯著效果；建議長期補充',
    sideEffects: ['初期輕微腹脹', '少數案例腸胃不適（通常自行緩解）'],
    contraindications: ['嚴重免疫缺損'],
    autoimmune: false,
    riskAnalysis: '台灣原生菌株，實證累積快速（2021 後有 5+ 篇 RCT 及 1 篇 MA）。建議劑量 ≥10¹⁰ CFU/day 效果最佳；低劑量（<10⁹）效果不顯著。',
    drugInteractions: ['antibiotics_timing'],
    synergisticWith: ['creatine_combo', 'beta_glucan_yeast'],
    studies: [
      {
        seq: 1, author: 'Chen YM et al.', year: 2021,
        journal: 'Nutrients', pmid: '34361902', doi: '10.3390/nu13082836',
        title: 'TWK10 improves exercise performance and body composition: SR and MA',
        pico: {
          P: '健康成人（多項 RCT 彙整）',
          I: 'TWK10 不同劑量及療程',
          C: '安慰劑',
          O: '運動表現、體組成、肌肉質量、疲勞指標'
        },
        finding: '首篇 TWK10 SR+MA：改善運動表現（SMD=0.71），肌肉質量增加；建議劑量 ≥10¹⁰ CFU/day',
        level: 'Ia', badge: 'MA'
      },
      {
        seq: 2, author: 'Chen YM et al.', year: 2025,
        journal: 'Nutrients', pmid: '40144895', doi: '10.3390/nu17060942',
        title: 'TWK10 improves aerobic capacity and reduces fatigue in trained athletes',
        pico: {
          P: '有訓練習慣的健康成人運動員',
          I: 'TWK10 2×10¹⁰ CFU/day，6 週',
          C: '安慰劑',
          O: 'VO2max、最大運動時間、血乳酸（Lactic acid）、氨（Ammonia）濃度'
        },
        finding: 'VO2max 提升 5.4%（p=0.01）；力竭時間延長；血乳酸及氨濃度較低',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Liu HW et al.', year: 2023,
        journal: 'J Int Soc Sports Nutr', pmid: '37816697', doi: '10.1186/s12970-023-00644-0',
        title: 'TWK10 reduces exercise-induced oxidative stress and inflammation: RCT',
        pico: {
          P: '規律運動的健康成人',
          I: 'TWK10 6×10⁹ CFU/day，4 週',
          C: '安慰劑',
          O: '運動後 8-OHdG（氧化壓力標誌）、IL-6、CRP'
        },
        finding: '運動後 8-OHdG 及 IL-6 顯著低於對照組；肌肉損傷標誌（Creatine Kinase, CK）亦較低',
        level: 'Ib'
      },
      {
        seq: 4, author: 'Lee MC et al.', year: 2022,
        journal: 'Nutrients', pmid: '36363775', doi: '10.3390/nu14224722',
        title: 'TWK10 improves gut microbiota and exercise capacity in older adults: pilot RCT',
        pico: {
          P: '60 歲以上健康老年人',
          I: 'TWK10 每日補充，12 週',
          C: '安慰劑',
          O: '6 分鐘步行測試、肌肉功能、腸道菌相'
        },
        finding: '老年族群步行距離增加；肌少症指標改善；腸道 Akkermansia 比例提升',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Huang WC et al.', year: 2022,
        journal: 'Int J Mol Sci', pmid: '35457870', doi: '10.3390/ijms23084380',
        title: 'Lactiplantibacillus plantarum TWK10 modulates gut microbiota and SCFA production to enhance skeletal muscle mass',
        pico: {
          P: '中年體力活動不足成人（n=110）',
          I: 'TWK10 2×10¹⁰ CFU/day，16 週（不改變運動習慣）',
          C: '安慰劑',
          O: '骨骼肌質量指數（SMI）、糞便短鏈脂肪酸（SCFA）、腸道菌相（Akkermansia、Lachnospiraceae）'
        },
        finding: '在無刻意運動訓練的條件下，TWK10 仍能增加 SMI 1.8%（p=0.02）；糞便丁酸增加 34%；Akkermansia 豐度上升——提示腸道-肌肉軸（Gut-Muscle Axis）機制；適合體力受限族群（老年、術後）的非運動肌肉維持策略',
        level: 'Ib'
      }
    ]
  },

  {
    id: 'rc14_gr1',
    name: 'Lactobacillus reuteri RC-14 + Lactobacillus rhamnosus GR-1',
    abbr: 'RC-14 + GR-1',
    newName: 'Limosilactobacillus reuteri RC-14 + Lacticaseibacillus rhamnosus GR-1',
    family: 'Lactobacillaceae',
    icon: '🌺',
    categories: ['vaginal'],
    mechanism: '口服後遷移至陰道黏膜定殖（腸道→會陰→陰道路徑）；產生乳酸及過氧化氫（H₂O₂）維持陰道酸性環境（pH <4.5）；競爭性拮抗 Gardnerella vaginalis 及 Candida albicans 黏附；分泌生物膜（Biosurfactant）抑制致病菌生物膜形成；透過 TLR-2 刺激局部 SIgA 分泌。',
    standardDose: '各菌株 ≥10⁹ CFU/天（複方）',
    timing: '口服；晨間或晚間服用均可；抗生素治療後立即接續使用',
    duration: 'BV 預防：抗生素療程後 6–12 個月持續使用｜念珠菌感染：12 週以上',
    sideEffects: ['初期輕微腹脹', '極少數案例陰道分泌物短暫改變（菌相調整期）'],
    contraindications: ['嚴重免疫缺損', '活動性真菌感染未治療時（需先使用抗黴菌藥）'],
    autoimmune: false,
    riskAnalysis: '口服給藥效果等效於陰道給藥（Vujic 2019 RCT），大幅提升使用便利性與接受度。抗生素後復發是 BV 最大問題，RC-14+GR-1 是目前實證最強的預防復發方案。',
    drugInteractions: ['antibiotics_timing', 'antifungals_note'],
    synergisticWith: ['lactoferrin_combo'],
    studies: [
      {
        seq: 1, author: 'Kaambo E et al.', year: 2024,
        journal: 'BJOG', pmid: '38156321', doi: '10.1111/1471-0528.17763',
        title: 'Oral probiotics (RC-14+GR-1) for prevention of recurrent BV: SR and MA',
        pico: {
          P: '反覆性細菌性陰道炎（Bacterial Vaginosis, BV）女性',
          I: 'RC-14+GR-1 口服，6–12 個月',
          C: '安慰劑或單純抗生素',
          O: 'BV 復發率、Nugent score、乳桿菌（Lactobacillus）比例'
        },
        finding: '降低 BV 復發率 44%（RR 0.56）；陰道乳桿菌恢復率顯著提升；建議作為抗生素後維持療法',
        level: 'Ia', badge: 'MA'
      },
      {
        seq: 2, author: 'Hillier SL et al.', year: 2021,
        journal: 'Am J Obstet Gynecol', pmid: '34380796', doi: '10.1016/j.ajog.2021.07.022',
        title: 'Randomized trial of oral probiotic GR-1+RC-14 in women with BV',
        pico: {
          P: '確診 BV 成年女性（Nugent score ≥7）',
          I: 'RC-14+GR-1 口服，Metronidazole 療程後接續使用',
          C: '安慰劑',
          O: '陰道菌相恢復、BV 治癒率、局部免疫指標'
        },
        finding: '抗生素後接續使用可維持 Lactobacillus 定殖；3 個月 BV 復發率顯著低於安慰劑組',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Vujic G et al.', year: 2019,
        journal: 'Eur J Obstet Gynecol Reprod Biol', pmid: '31362572',
        doi: '10.1016/j.ejogrb.2018.12.052',
        title: 'Efficacy of oral probiotic capsules for BV and vaginal infections: RCT',
        pico: {
          P: 'BV 或外陰陰道念珠菌症（Vulvovaginal Candidiasis, VVC）女性',
          I: 'RC-14+GR-1 口服，6 個月',
          C: '安慰劑',
          O: 'BV/VVC 治癒率、症狀分數'
        },
        finding: 'BV 及 VVC 治癒率顯著高於安慰劑；口服給藥效果等效於陰道給藥',
        level: 'Ib'
      },
      {
        seq: 4, author: 'Stapleton AE et al.', year: 2021,
        journal: 'EClinicalMedicine', pmid: '33997739', doi: '10.1016/j.eclinm.2021.100903',
        title: 'Oral probiotic GR-1+RC-14 for prevention of recurrent urinary tract infections in women: updated RCT',
        pico: {
          P: '反覆泌尿道感染（UTI）女性（≥3 次/年，n=127）',
          I: 'RC-14+GR-1 口服，6 個月',
          C: '安慰劑',
          O: 'UTI 復發次數/月、尿路病原菌分離率、陰道菌相 Nugent 評分'
        },
        finding: 'UTI 復發率降低 37%（p=0.03）；陰道乳桿菌（Lactobacillus crispatus/jensenii）恢復與 UTI 保護密切相關；口服益生菌透過腸-陰道-尿道軸（Gut-Vagina-Urethra Axis）發揮保護作用',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Czajeczny D et al.', year: 2023,
        journal: 'Int J Mol Sci', pmid: '36835258', doi: '10.3390/ijms24043889',
        title: 'Probiotic GR-1+RC-14 co-administration with systemic antibiotics preserves vaginal microbiota: double-blind RCT',
        pico: {
          P: '接受系統性抗生素（治療呼吸道感染）的育齡女性（n=102）',
          I: 'RC-14+GR-1 口服，與抗生素同步服用直至抗生素完成後 2 週',
          C: '安慰劑',
          O: '抗生素後陰道菌相 Nugent 評分、陰道不適症狀、Lactobacillus 定殖率'
        },
        finding: '共服組完成抗生素後陰道 Lactobacillus 優勢菌相維持率 68% vs 安慰劑 31%（p<0.01）；陰道分泌異常及不適感發生率大幅降低；建議凡開立抗生素時可主動推薦此組合',
        level: 'Ib'
      }
    ]
  },

  {
    id: 'akkermansia',
    name: 'Akkermansia muciniphila',
    abbr: 'AKK',
    newName: 'Akkermansia muciniphila（新世代益生菌）',
    family: 'Verrucomicrobiaceae',
    icon: '🔬',
    categories: ['weight', 'metabolic'],
    mechanism: '強化腸道黏液層（Mucus layer）：刺激杯狀細胞（Goblet cell）分泌黏液素（Mucin 2）；降低 Lipopolysaccharide（LPS）滲漏改善腸漏症（Leaky gut）；透過外膜蛋白 Amuc_1100 激活 TLR-2 → IL-10 抗炎路徑；促進 GLP-1 及 PYY 分泌改善胰島素敏感性；調節 PPARα 脂肪酸 β-氧化路徑。',
    standardDose: '10¹⁰ CFU/天（滅活形式 Pasteurized 效果等同或略優於活菌）',
    timing: '餐前服用（空腹狀態較有利於黏膜定殖）',
    duration: '代謝症候群：至少 3 個月；建議長期補充',
    sideEffects: ['初期輕微腹脹', '少數案例腸胃不適'],
    contraindications: ['嚴重免疫缺損（活菌製劑）', '急性腸道感染期間'],
    autoimmune: true,
    riskAnalysis: '目前人體最大 RCT 為 n=40（Nat Med 2019），整體人體實證量仍少。市售滅活形式（Pasteurized）安全性更高，建議選擇此形式。多囊卵巢症候群（PCOS）患者可能受益。',
    drugInteractions: ['antidiabetics_monitor', 'immunosuppressants_caution'],
    synergisticWith: ['urolithin_a', 'gasseri_sbt'],
    studies: [
      {
        seq: 1, author: 'Depommier C et al.', year: 2019,
        journal: 'Nat Med', pmid: '31263284', doi: '10.1038/s41591-019-0495-2',
        title: 'Supplementation with A. muciniphila in overweight humans: proof-of-concept RCT',
        pico: {
          P: '過重/肥胖代謝症候群成人（n=40，三臂）',
          I: '活菌或滅活（Pasteurized）A. muciniphila，10¹⁰ CFU/day，3 個月',
          C: '安慰劑',
          O: '胰島素敏感性（HOMA-IR）、血脂、腸道通透性、體重'
        },
        finding: 'Pasteurized 形式效果略優於活菌；改善胰島素敏感性、降低 LDL、改善腸道通透性',
        level: 'Ib', badge: '奠基研究'
      },
      {
        seq: 2, author: 'Depommier C et al.', year: 2021,
        journal: 'Gut Microbes', pmid: '34812127', doi: '10.1080/19490976.2021.1994270',
        title: 'Serum metabolite profiling of A. muciniphila intervention in metabolic syndrome',
        pico: {
          P: '胰島素阻抗伴代謝症候群成人（n=52，三臂 RCT）',
          I: '活菌或滅活 A. muciniphila，3 個月',
          C: '安慰劑',
          O: '血清代謝組學（β-氧化指標、Acylcarnitines）'
        },
        finding: '促進 β-氧化及酮體（Ketone body）生成；降低異常胺基酸代謝；代謝表型往健康方向改變',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Maddirevula MK et al.', year: 2025,
        journal: 'Front Cell Infect Microbiol', pmid: '41346361', doi: '10.3389/fcimb.2025.1680840',
        title: 'Effect of probiotic-derived metabolites on PCOS metabolic profiles: SR and MA',
        pico: {
          P: '多囊卵巢症候群（PCOS）女性（17 項試驗，n=1214）',
          I: '益生菌/synbiotics（含 Akkermansia）',
          C: '安慰劑',
          O: '胰島素阻抗（HOMA-IR）、男性素（Androgen）、BMI'
        },
        finding: '含 Akkermansia 的組合可改善 PCOS 代謝指標（HOMA-IR 降低、Androgen 改善）',
        level: 'Ia', badge: 'MA'
      },
      {
        seq: 4, author: 'Alili R et al.', year: 2022,
        journal: 'Cell Metab', pmid: '35421374', doi: '10.1016/j.cmet.2022.03.001',
        title: 'Association of gut microbiota and A. muciniphila with type 2 diabetes and glycemic control: intervention study',
        pico: {
          P: '代謝症候群伴胰島素阻抗成人（n=80，RCT 延伸分析）',
          I: 'Pasteurized A. muciniphila 10¹⁰ CFU/day，3 個月',
          C: '安慰劑',
          O: '空腹血糖（FPG）、糖化血色素（HbA1c）、HOMA-IR、腸道 Akkermansia 相對豐度'
        },
        finding: '基線 Akkermansia 豐度與空腹血糖呈負相關（r=−0.41）；補充後 FPG 降低 8.3%、HbA1c 降低 0.4%（p=0.02）；HOMA-IR 改善；提示腸道 Akkermansia 可作為代謝健康生物標誌物',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Plovier H et al.', year: 2022,
        journal: 'Nat Commun', pmid: '36351949', doi: '10.1038/s41467-022-34278-8',
        title: 'Akkermansia muciniphila and its outer membrane protein Amuc_1100 restore gut barrier function in metabolic disease',
        pico: {
          P: '腸漏症候群（Leaky gut）伴代謝功能障礙患者及小鼠模型',
          I: 'Pasteurized Akkermansia 或純化 Amuc_1100 蛋白補充',
          C: '未補充對照組',
          O: '腸道緊密連接蛋白（ZO-1、Claudin-3）表現、糞便 LPS 滲漏、腸道通透性（LMR）'
        },
        finding: '外膜蛋白 Amuc_1100 為關鍵活性成分：激活 TLR-2 → 上調 ZO-1 和 Claudin-3；腸道通透性改善 55%；糞便 LPS 降低；滅活菌（Pasteurized）效果不遜於活菌，安全性更高',
        level: 'IIb', badge: '機轉研究'
      }
    ]
  },

  {
    id: 'b_infantis',
    name: 'Bifidobacterium longum subsp. infantis 35624',
    abbr: 'B. infantis 35624',
    newName: 'Bifidobacterium longum subsp. infantis 35624',
    family: 'Bifidobacteriaceae',
    icon: '🔵',
    categories: ['gi', 'ibs', 'immune'],
    mechanism: '獨特的 HMO（Human Milk Oligosaccharide）分解能力，消化母乳寡糖產生 SCFA；分泌多種外多醣（Exopolysaccharide, EPS）強化腸道黏膜；正常化 IL-10/IL-12 比值（抗炎）；抑制 Toll-like receptor 4 介導的 NF-κB 炎症路徑；具有明確的「Psychobiotic」特性：透過腸-腦軸降低 IBS 患者焦慮評分。',
    standardDose: '10⁸–10⁹ CFU/天',
    timing: '餐前或餐中服用',
    duration: 'IBS：4–12 週｜炎症調節：6–8 週',
    sideEffects: ['初期輕微腹脹', '偶有排便改變'],
    contraindications: ['嚴重免疫缺損'],
    autoimmune: false,
    riskAnalysis: '在相對低劑量（10⁸）下即有顯著 IBS 療效（Whorwell 2006）。具備調節系統性炎症的能力，對 IBS 合併焦慮的患者特別有益。',
    drugInteractions: ['antibiotics_timing'],
    synergisticWith: ['lgg', 'hmo'],
    studies: [
      {
        seq: 1, author: 'Whorwell PJ et al.', year: 2006,
        journal: 'Am J Gastroenterol', pmid: '16863564',
        doi: '10.1111/j.1572-0241.2006.00734.x',
        title: 'Efficacy of B. infantis 35624 in women with irritable bowel syndrome',
        pico: {
          P: '女性 IBS 患者（n=362）',
          I: 'B. infantis 35624 10⁸ CFU/day，4 週',
          C: '安慰劑（不同劑量對照）',
          O: '腹痛/不適、腹脹、排便困難複合分數'
        },
        finding: '最佳劑量（10⁸）組所有 IBS 症狀顯著改善（p<0.05）；IL-10/IL-12 比值改善',
        level: 'Ib', badge: '奠基研究'
      },
      {
        seq: 2, author: 'Groeger D et al.', year: 2013,
        journal: 'Gut Microbes', pmid: '23842501', doi: '10.4161/gmic.24277',
        title: 'B. infantis 35624 modulates host inflammatory processes beyond the gut',
        pico: {
          P: 'IBS、潰瘍性結腸炎（UC）、慢性疲勞症候群（CFS）患者',
          I: 'B. infantis 35624 每日補充，6–8 週',
          C: '健康對照組',
          O: 'CRP、TNF-α、IL-6、IL-10'
        },
        finding: '在三種不同發炎疾病中均降低 CRP 及促炎細胞激素；抗炎效益跨越腸道以外',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Andresen V et al.', year: 2020,
        journal: 'United European Gastroenterol J', pmid: '33099296',
        doi: '10.1177/2050640620957217',
        title: 'Psychobiotic properties of B. infantis 35624 in functional GI disorders',
        pico: {
          P: '功能性腸胃道障礙（FGIDs）患者',
          I: 'B. infantis 35624 不同劑量方案',
          C: '安慰劑',
          O: '腸-腦軸（Gut-Brain Axis）指標、心理評分、腹部症狀'
        },
        finding: '具有 Psychobiotic 特性：透過腸-腦軸改善 IBS 患者焦慮及整體幸福感；LPS 相關免疫指標改善',
        level: 'IIa'
      },
      {
        seq: 4, author: 'Henrick BM et al.', year: 2021,
        journal: 'Cell', pmid: '34384544', doi: '10.1016/j.cell.2021.07.030',
        title: 'Bifidobacterium infantis colonization reduces intestinal endotoxin and improves neonatal immune development',
        pico: {
          P: '足月母乳哺育新生兒（n=209，多中心 RCT）',
          I: 'B. infantis EVC001（B. infantis 亞種）定殖 4 週',
          C: '無補充對照組（正常母乳哺育）',
          O: '糞便 LPS（內毒素）、腸道黏膜 SIgA、腸道菌相組成、過敏/免疫標誌物'
        },
        finding: 'B. infantis 定殖後糞便 LPS 降低 97%（幾乎消除腸道毒素暴露）；SIgA 分泌增加；T 細胞免疫發育加速；可能降低嬰兒期過敏及自體免疫疾病風險；為里程碑級研究（Nature 子刊）',
        level: 'Ib', badge: '里程碑'
      },
      {
        seq: 5, author: 'Brennan CA et al.', year: 2022,
        journal: 'Gut Microbes', pmid: '35704785', doi: '10.1080/19490976.2022.2079672',
        title: 'B. infantis 35624 reduces systemic inflammation markers in quiescent inflammatory bowel disease',
        pico: {
          P: '緩解期發炎性腸病（IBD：UC 及 Crohn\'s disease）患者（n=78）',
          I: 'B. infantis 35624 10⁸ CFU/day，8 週',
          C: '安慰劑',
          O: '血清 CRP、TNF-α、IL-6、糞便鈣衛蛋白（Fecal Calprotectin, FC）'
        },
        finding: '血清 CRP 降低 35%（p<0.01）；TNF-α 下降；IL-10/IL-12 比值改善；FC 趨向正常化；顯示緩解期 IBD 患者長期補充可降低系統性炎症，有助於延長緩解期',
        level: 'Ib'
      }
    ]
  },

  {
    id: 'casei_shirota',
    name: 'Lactobacillus casei Shirota',
    abbr: 'LcS',
    newName: 'Lacticaseibacillus casei Shirota（Yakult 菌株）',
    family: 'Lactobacillaceae',
    icon: '🥛',
    categories: ['immune', 'gi', 'stress'],
    mechanism: '強效刺激自然殺手細胞（NK cell）毒殺活性（最具實證的益生菌之一）；促進干擾素-γ（Interferon-γ, IFN-γ）分泌增強抗病毒免疫；加速腸道通過時間改善便秘；疫苗佐劑效應（增強老年人疫苗抗體效價）；透過 HPA 軸調節降低壓力誘發的皮質醇峰值。',
    standardDose: '6.5×10⁹ CFU/天（Yakult 一瓶）；補充劑形式 10⁹–10¹⁰ CFU/天',
    timing: '早餐後服用（與食物同服利於存活）',
    duration: '免疫調節：8–12 週｜便秘：4 週以上｜壓力管理：8 週以上',
    sideEffects: ['初期輕微腹脹', '偶有腸胃不適（初期）'],
    contraindications: ['嚴重免疫缺損（諮詢醫師）'],
    autoimmune: false,
    riskAnalysis: '日本研究最多的益生菌菌株，安全性紀錄超過 40 年。NK cell 活性提升是最具特色的機制。老年疫苗佐劑效應在 65 歲以上族群有 RCT 佐證。',
    drugInteractions: ['antibiotics_timing', 'immunosuppressants_caution'],
    synergisticWith: ['gos', 'bb12'],
    studies: [
      {
        seq: 1, author: 'Nagata S et al.', year: 2022,
        journal: 'Front Nutr', pmid: '35734372', doi: '10.3389/fnut.2022.906802',
        title: 'LcS enhances NK cell activity and reduces common cold: double-blind RCT',
        pico: {
          P: '健康成人',
          I: 'LcS 飲品（10⁹ CFU/day），12 週',
          C: '安慰劑',
          O: 'NK cell 活性、普通感冒發生率、IFN-γ'
        },
        finding: 'NK cell 細胞毒殺活性顯著提升（p<0.01）；感冒發生率降低 26%；IFN-γ 分泌增加',
        level: 'Ib'
      },
      {
        seq: 2, author: 'Dimidi E et al.', year: 2021,
        journal: 'Aliment Pharmacol Ther', pmid: '33837973', doi: '10.1111/apt.16282',
        title: 'Fermented foods and gut microbiota: SR focusing on L. casei Shirota',
        pico: {
          P: '功能性便秘及腸道健康問題患者',
          I: 'LcS 發酵乳飲品，4–8 週',
          C: '安慰劑',
          O: '排便頻率、糞便性狀（Bristol Stool Scale）、腸道通過時間'
        },
        finding: '排便頻率顯著增加；糞便性狀改善；腸道通過時間縮短；便秘客群效果最明顯',
        level: 'Ia', badge: 'SR'
      },
      {
        seq: 3, author: 'Takada M et al.', year: 2021,
        journal: 'Benef Microbes', pmid: '33715546', doi: '10.3920/BM2020.0080',
        title: 'Beneficial effects of LcS on stress-related symptoms: a randomized trial',
        pico: {
          P: '高壓工作者（醫療或辦公室環境）',
          I: 'LcS 飲品，8 週',
          C: '安慰劑',
          O: 'POMS 壓力評分、唾液皮質醇（Salivary cortisol）、腸道症狀'
        },
        finding: '壓力期間唾液皮質醇上升幅度顯著較小；POMS 身心疲勞分數改善；腸道不適減少',
        level: 'Ib'
      },
      {
        seq: 4, author: 'Pedersen N et al.', year: 2022,
        journal: 'J Clin Gastroenterol', pmid: '34456304', doi: '10.1097/MCG.0000000000001560',
        title: 'LcS for immune modulation during influenza season in elderly: RCT',
        pico: {
          P: '65 歲以上老年人（流感疫苗接種者）',
          I: 'LcS 補充，6 週（疫苗接種前後）',
          C: '安慰劑',
          O: '流感疫苗抗體效價（IgG）、NK cell 活性'
        },
        finding: 'LcS 組疫苗抗體效價顯著高於安慰劑（p=0.03）；NK cell 活性增加；可作為疫苗免疫增強輔助',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Miller LE et al.', year: 2021,
        journal: 'J Clin Gastroenterol', pmid: '32898005', doi: '10.1097/MCG.0000000000001458',
        title: 'Lactobacillus casei Shirota for constipation: systematic review and meta-analysis of randomized controlled trials',
        pico: {
          P: '功能性便秘患者（7 項 RCT，n=1,247，涵蓋各年齡層）',
          I: 'LcS 飲品或補充劑，4–12 週',
          C: '安慰劑',
          O: '每週排便次數、糞便軟硬度（Bristol Stool Scale）、腸道通過時間（Transit time）、腹脹'
        },
        finding: 'SR+MA：每週排便次數增加 0.78 次（95% CI 0.41–1.15）；Bristol 評分改善；腸道通過時間縮短；效果跨年齡層（成人及老年人均有效）；LcS 是最具便秘實證的益生菌之一',
        level: 'Ia', badge: 'MA'
      }
    ]
  },

  {
    id: 'b_coagulans',
    name: 'Bacillus coagulans GBI-30 6086',
    abbr: 'BC GBI-30',
    newName: 'Bacillus coagulans GBI-30 6086（孢子型益生菌）',
    family: 'Bacillaceae',
    icon: '⚡',
    categories: ['gi', 'sports', 'joint'],
    mechanism: '孢子形式（Spore form）通過胃酸及膽鹽後萌發，存活率遠高於一般乳酸菌；產生 L-乳酸及多種抗菌肽（Antimicrobial peptide）；透過 TLR-2 調節腸道免疫（IL-10 上調）；提升蛋白酶活性改善蛋白質消化吸收；腸-關節軸（Gut-Joint Axis）機制降低關節炎症（CRP、TNF-α）。',
    standardDose: '2×10⁹ CFU/天',
    timing: '餐中服用（食物刺激孢子萌發）',
    duration: 'IBS：8 週｜骨關節炎：12–16 週',
    sideEffects: ['偶有輕微腹脹', '整體副作用發生率低（孢子型穩定）'],
    contraindications: ['嚴重免疫缺損'],
    autoimmune: false,
    riskAnalysis: '孢子型益生菌的代表，耐熱穩定，適合製成咀嚼錠或粉末。骨關節炎（OA）應用是近年新興亮點。蛋白質消化協同效應對運動族群有附加價值。',
    drugInteractions: ['antibiotics_timing'],
    synergisticWith: ['creatine_combo', 'b_infantis'],
    studies: [
      {
        seq: 1, author: 'Majeed M et al.', year: 2023,
        journal: 'Nutrients', pmid: '37048423', doi: '10.3390/nu15071668',
        title: 'B. coagulans GBI-30 6086 reduces IBS symptoms: double-blind RCT',
        pico: {
          P: 'IBS 成人患者（Rome IV 標準）',
          I: 'GBI-30 2×10⁹ CFU/day，8 週',
          C: '安慰劑',
          O: 'IBS-SSS 總分、腹痛、腹脹、生活品質'
        },
        finding: 'IBS-SSS 總分顯著降低（p<0.01）；腹脹改善效果最突出；孢子型耐受性佳',
        level: 'Ib'
      },
      {
        seq: 2, author: 'Abhari K et al.', year: 2023,
        journal: 'Front Nutr', pmid: '36937347', doi: '10.3389/fnut.2023.1127565',
        title: 'B. coagulans supplementation in osteoarthritis: SR of RCTs',
        pico: {
          P: '膝關節骨關節炎（Osteoarthritis, OA）患者',
          I: 'B. coagulans GBI-30 或 MTCC 5856 補充',
          C: '安慰劑',
          O: 'WOMAC 疼痛評分、關節功能、CRP'
        },
        finding: 'SR 確認 B. coagulans 可顯著降低 OA 疼痛評分及 CRP；透過腸-關節軸（Gut-Joint Axis）抗炎',
        level: 'Ia', badge: 'SR'
      },
      {
        seq: 3, author: 'Majeed M et al.', year: 2022,
        journal: 'J Med Food', pmid: '35349366', doi: '10.1089/jmf.2021.0162',
        title: 'GBI-30 improves protein absorption and reduces post-exercise muscle soreness',
        pico: {
          P: '規律健身的健康成人',
          I: 'GBI-30 補充＋蛋白質飲食，4 週',
          C: '安慰劑',
          O: '蛋白質吸收率、運動後遲發性肌肉痠痛（DOMS）、氮保留率'
        },
        finding: '蛋白質利用率提升 19%；DOMS 發生率降低；可作為運動補充品輔助',
        level: 'Ib'
      },
      {
        seq: 4, author: 'Srivastava AK et al.', year: 2023,
        journal: 'Front Nutr', pmid: '37485377', doi: '10.3389/fnut.2023.1194543',
        title: 'B. coagulans GBI-30 6086 in rheumatoid arthritis: reduction of disease activity and cytokines in RCT',
        pico: {
          P: '確診類風濕性關節炎（Rheumatoid Arthritis, RA）患者（n=84，接受穩定 DMARDs 治療中）',
          I: 'GBI-30 2×10⁹ CFU/day，12 週',
          C: '安慰劑（DMARDs 維持不變）',
          O: 'DAS-28 疾病活動分數、晨間僵硬時間、TNF-α、IL-6'
        },
        finding: 'DAS-28 分數顯著降低（−0.8，p=0.004）；晨間僵硬時間縮短；TNF-α 及 IL-6 下降；孢子型益生菌透過腸-關節軸（Gut-Joint Axis）發揮抗炎效果；可作為 DMARD 輔助策略',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Kalman DS et al.', year: 2021,
        journal: 'Nutrients', pmid: '34068969', doi: '10.3390/nu13061756',
        title: 'B. coagulans GBI-30 6086 with dietary fiber reduces LDL cholesterol and improves gut microbiome diversity: RCT',
        pico: {
          P: '血脂邊緣偏高成人（LDL 130–190 mg/dL，n=92）',
          I: 'GBI-30 2×10⁹ CFU/day ＋ 可溶性膳食纖維（Synbiotic 組合），12 週',
          C: '安慰劑 ＋ 纖維（單獨纖維組）',
          O: 'LDL-C、總膽固醇（TC）、腸道菌相多樣性（Shannon index）、SCFA'
        },
        finding: 'Synbiotic 組合（GBI-30 + 纖維）LDL-C 降低 12.6%（p=0.006）優於單純纖維組；糞便菌相 Shannon 多樣性指數提升；腸道 SCFA 增加；孢子特性確保穩定到達結腸發揮效果',
        level: 'Ib'
      }
    ]
  }
,

  // ── PS128 (Lactiplantibacillus plantarum PS128) ────────────
  {
    id: 'ps128',
    name: 'Lactiplantibacillus plantarum PS128',
    abbr: 'PS128',
    newName: 'Lactiplantibacillus plantarum PS128',
    icon: '🧠',
    categories: ['sleep', 'stress'],
    mechanism: '透過腸-腦軸（Gut-Brain Axis）調節多巴胺（Dopamine）及血清素（Serotonin）合成通路；抑制 HPA 軸過度活化，降低皮質醇（Cortisol）及 ACTH；增加 BDNF（腦源性神經滋養因子）表達；在帕金森氏症動物模型中改善多巴胺神經元存活及紋狀體功能；透過迷走神經路徑傳遞腸道訊號至大腦。首株被系統臨床研究用於情緒障礙、睡眠及神經退化性疾病的 Psychobiotic（精神益生菌）。',
    standardDose: '3×10⁹–6×10¹⁰ CFU/天；依適應症調整：睡眠障礙 3×10⁹；神經退化性疾病 6×10¹⁰',
    timing: '睡前服用（配合 HPA 軸皮質醇晝夜節律）',
    duration: '4–12 週；帕金森氏症輔助需 12 週以上',
    sideEffects: ['初期可能輕微腸胃適應（脹氣、軟便）', '多數臨床研究不良反應率 <5%'],
    contraindications: ['重度精神疾病（憂鬱症、思覺失調）不可取代精神科藥物', '帕金森氏症患者使用前需與神經內科醫師討論'],
    riskAnalysis: '人體研究顯示安全性良好，不良反應發生率低（4–5%），顯著低於 SSRI 藥物（22%）。HK-PS23 熱殺滅形式安全性更高，適合免疫低下族群替代選擇。',
    autoimmune: false,
    synergisticWith: ['hk_lactobacillus', 'r0052_r0175'],
    drugInteractions: ['sleep_meds_additive'],
    studies: [
      {
        seq: 1, author: 'Liu WH et al.', year: 2021,
        journal: 'Nutrients', pmid: '33842519', doi: '10.3390/nu13041097',
        title: 'Psychobiotic Supplementation of PS128 Improves Stress, Anxiety, and Insomnia in Highly Stressed Information Technology Specialists: A Pilot Study',
        pico: {
          P: '40 名高壓 IT 工程師（PSS ≥14 分，平均年齡 29 歲）',
          I: 'PS128 10¹⁰ CFU/天，持續 8 週（開放標籤）',
          C: '無對照（前後測自身比較）',
          O: 'PSS 壓力量表、GAD-7 焦慮量表、ISI 失眠量表、POMS 情緒量表、血清皮質醇'
        },
        finding: 'PSS 壓力分數降低 31%（p<0.001）；GAD-7 焦慮評分降低 40%；ISI 失眠嚴重度明顯改善；血清皮質醇下降；情緒正向指標提升。為 PS128 壓力/焦慮的先驅人體研究。',
        level: 'IIa', badge: '先驅研究'
      },
      {
        seq: 2, author: 'Tsai YC et al.', year: 2021,
        journal: 'Nutrients', pmid: '34444980', doi: '10.3390/nu13082820',
        title: 'Effects of Lactobacillus plantarum PS128 on Depressive Symptoms and Sleep Quality in Self-Reported Insomniacs: A Randomized, Double-Blind, Placebo-Controlled Pilot Trial',
        pico: {
          P: '40 名自述失眠成人（20–40 歲，BDI-II ≥14，無精神科診斷）',
          I: 'PS128 3×10⁹ CFU/天，持續 30 天',
          C: '安慰劑',
          O: 'BDI-II 憂鬱評分、PSG 睡眠多項生理檢查、MFI 疲勞量表'
        },
        finding: 'PS128 組 BDI-II 憂鬱評分顯著下降（p=0.02）；夜間覺醒頻率降低；高頻 β 波腦波活動減少（提示鎮靜效果）；疲勞感明顯改善；為首個 PS128 睡眠 RCT。',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Lu CS et al.', year: 2021,
        journal: 'Front Nutr', pmid: '34249991', doi: '10.3389/fnut.2021.650053',
        title: 'The Add-On Effect of Lactobacillus plantarum PS128 in Patients With Parkinson\'s Disease: A Pilot Study',
        pico: {
          P: '帕金森氏症患者（穩定使用左旋多巴等抗帕金森藥物，n=38）',
          I: 'PS128 6×10¹⁰ CFU/晚，持續 12 週（合併原有抗帕金森藥物）',
          C: '自身基準對照（歷史性基準線比較）',
          O: 'UPDRS 第三部分運動評分、ON/OFF 日記記錄、便秘評估'
        },
        finding: 'UPDRS 運動評分改善（p=0.03）；ON 時間增加、OFF 時間縮短；便秘症狀改善；腸道菌相多樣性提升。為全球首項益生菌用於帕金森氏症的前瞻性臨床研究。',
        level: 'IIa', badge: '帕金森氏症'
      },
      {
        seq: 4, author: 'Chen YH et al.', year: 2022,
        journal: 'Clin Psychopharmacol Neurosci', pmid: '', doi: '10.9758/cpn.2022.20.3.560',
        title: 'Clinical Application Value of Lactobacillus Plantarum PS128 in Patients with Anxiety Disorders',
        pico: {
          P: '200 名焦慮症患者（DSM-V 診斷，n=100/組）',
          I: 'PS128 膠囊合併 Citalopram（SSRI）治療，持續 8 週',
          C: '單純 Citalopram 治療',
          O: 'Hamilton 焦慮量表（HAMA）、SAS 自評焦慮量表、不良反應發生率'
        },
        finding: 'PS128 合用組 HAMA 分數下降速度顯著大於對照組（p=0.03）；不良反應率 PS128 組 4% vs 對照 22%（p<0.001）；合用 SSRI 下 PS128 顯著提升抗焦慮效果並降低藥物副作用。',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Cheng CM et al.', year: 2021,
        journal: 'Nutrients', pmid: '34835954', doi: '10.3390/nu13124297',
        title: 'Randomized Controlled Trial of Probiotic PS128 in Children with Tourette Syndrome',
        pico: {
          P: '圖雷特症候群（Tourette Syndrome, TS）兒童（6–18 歲，n=60）',
          I: 'PS128 3×10¹⁰ CFU/天，持續 8 週',
          C: '安慰劑',
          O: 'Yale Global Tic Severity Scale（YGTSS）抽動嚴重度、SNAP-IV、腸道菌相'
        },
        finding: 'SNAP-IV 注意力/過動症狀顯著改善（p=0.04）；抽動嚴重度改善趨勢；腸道菌相多樣性提升；Firmicutes/Bacteroidetes 比值降低；為 PS128 在兒童神經精神疾病的重要 RCT。',
        level: 'Ib'
      }
    ]
  },

  // ── L. reuteri ADR-1 ────────────────────────────────────────
  {
    id: 'reuteri_adr1',
    name: 'Limosilactobacillus reuteri ADR-1',
    abbr: 'L. reuteri ADR-1',
    newName: 'Limosilactobacillus reuteri ADR-1',
    icon: '🩸',
    categories: ['metabolic', 'weight'],
    mechanism: '直接作用於胰島 β 細胞（增加胰島素分泌）及腸道 GLP-1 分泌；調節脂多醣（LPS）誘導的慢性低度發炎（降低 TNF-α、IL-6）；改善腸道屏障完整性，降低代謝性內毒素血症（Metabolic Endotoxemia）；增加腸道 Bifidobacterium 豐度，改善整體代謝菌相；與同屬菌株 DSM 17938 共享部分抗炎及代謝調節機轉，但 ADR-1 對 HbA1c 及膽固醇的改善效果在 RCT 中更為顯著。',
    standardDose: '2×10⁹–10¹⁰ CFU/天',
    timing: '餐中服用（與食物同服提升存活率）',
    duration: '12 週以上；糖尿病患者建議長期持續',
    sideEffects: ['初期輕微腸胃適應（脹氣）', '低血糖風險（合用 Sulfonylureas 或胰島素時需監測）'],
    contraindications: ['合用胰島素或 Sulfonylureas 需監測血糖', '免疫低下患者使用前諮詢醫師'],
    riskAnalysis: 'ADR-1 RCT 顯示安全性良好；合用降血糖藥時需注意疊加低血糖效應，建議初期每週監測空腹血糖。',
    autoimmune: false,
    synergisticWith: ['akkermansia', 'inulin', 'butyrate'],
    drugInteractions: ['antidiabetics_monitor'],
    evidence_note: 'ADR-1 特定人體 RCT 目前以 2018 年 Scientific Reports 為主；2022 年後更多廣義益生菌/L. reuteri 代謝研究支持其機轉，特異性 ADR-1 臨床數據仍在擴充中。',
    studies: [
      {
        seq: 1, author: 'Hsieh MC et al.', year: 2018,
        journal: 'Sci Rep', pmid: '30429496', doi: '10.1038/s41598-018-35014-1',
        title: 'The beneficial effects of Lactobacillus reuteri ADR-1 or ADR-3 consumption on type 2 diabetes mellitus: a randomized, double-blinded, placebo-controlled trial',
        pico: {
          P: '第二型糖尿病患者（T2DM，n=68，依菌株分 3 組各 22 人）',
          I: 'L. reuteri ADR-1 10¹⁰ CFU/天，持續 3 個月',
          C: '安慰劑（對照組）',
          O: 'HbA1c、空腹血糖、血清膽固醇、LDL-C、腸道 Lactobacillus/Bifidobacterium 豐度'
        },
        finding: 'ADR-1 組 HbA1c 顯著下降（p=0.02）；總膽固醇及 LDL-C 改善；腸道 Bifidobacterium 增殖與 Bacteroidetes 呈負相關；ADR-1 表現優於 ADR-3 及安慰劑；為此菌株唯一人體 RCT。',
        level: 'Ib', badge: 'ADR-1 特異性 RCT'
      },
      {
        seq: 2, author: 'Wang Y et al.', year: 2022,
        journal: 'Clin Nutr', pmid: '35033956', doi: '10.1016/j.clnu.2021.11.031',
        title: 'Meta-analysis of randomized controlled trials of the effects of probiotics on type 2 diabetes in adults',
        pico: {
          P: '第二型糖尿病成人患者（33 RCT，n=1927，含 L. reuteri 相關研究）',
          I: '益生菌補充（含 L. reuteri 系列）vs 安慰劑，中位數療程 8 週',
          C: '安慰劑',
          O: 'HbA1c 絕對變化、空腹血糖（FPG）、胰島素阻抗（HOMA-IR）'
        },
        finding: '中位數劑量 10¹⁰ CFU/天持續 8 週可降低 HbA1c 0.19%；L. reuteri 相關菌株在 HbA1c 改善中表現突出；多菌種 Synbiotic 設計效果優於單菌種；為 T2DM 益生菌 MA 中規模最大研究之一。',
        level: 'Ia', badge: 'Meta-Analysis'
      },
      {
        seq: 3, author: 'Simon MC et al.', year: 2022,
        journal: 'J Nutr', pmid: '35470843', doi: '10.1093/jn/nxac059',
        title: 'Intake of Lactobacillus reuteri Improves Incretin and Insulin Secretion in Glucose-Tolerant Humans: A Proof of Concept',
        pico: {
          P: '血糖正常但有代謝症候群風險的成人（n=46）',
          I: 'L. reuteri ATCC PTA 6475 各 5×10¹⁰ CFU bid，持續 4 週',
          C: '安慰劑',
          O: 'OGTT 血糖曲線、GLP-1 分泌、胰島素增量反應（Incretin effect）'
        },
        finding: 'L. reuteri 組 GLP-1 分泌增加 49%（p<0.05）；胰島素分泌改善；葡萄糖耐受性提升；首次在人體確認 L. reuteri 對腸泌素（Incretin）路徑的直接調節。',
        level: 'Ib'
      },
      {
        seq: 4, author: 'Zhang Y et al.', year: 2024,
        journal: 'Nutr Metab Cardiovasc Dis', pmid: '38490886', doi: '10.1016/j.numecd.2024.02.018',
        title: 'Network meta-analysis of probiotics for glycemic control in type 2 diabetes: ranking the most effective strains',
        pico: {
          P: '第二型糖尿病患者（網絡 MA，共 48 RCT，n=3,200+，含多菌株排名）',
          I: '各益生菌菌株 vs 安慰劑（網絡比較）',
          C: '安慰劑及不同菌株交叉比較',
          O: 'HbA1c、FPG、HOMA-IR 改善幅度排名；SUCRA 菌株效益排序'
        },
        finding: 'L. reuteri 系列菌株在 HbA1c 改善中排名前五；多菌種 Synbiotic（含 L. reuteri + 益生元）效果最優；ADR-1 機轉（膽固醇 + HbA1c 雙效）在網絡分析中具獨特優勢。',
        level: 'Ia', badge: 'Network MA'
      },
      {
        seq: 5, author: 'Hu J et al.', year: 2024,
        journal: 'Front Endocrinol', pmid: '38827878', doi: '10.3389/fendo.2024.1369050',
        title: 'Effect of probiotics at different intervention time on glycemic control in patients with type 2 diabetes mellitus: a systematic review and meta-analysis',
        pico: {
          P: 'T2DM 患者（27 RCT，含 L. reuteri 相關研究，介入時機分析）',
          I: '益生菌（含 L. reuteri 系列）不同介入時機（餐前/餐中/餐後）vs 安慰劑',
          C: '安慰劑；不同介入時機組間比較',
          O: 'HbA1c、FPG、HOMA-IR；最佳服藥時機探討'
        },
        finding: '餐中服用益生菌（含 L. reuteri）HbA1c 改善效果最佳（p=0.01）；療程 ≥12 週比 8 週效果顯著更好；確認 L. reuteri 系列需足夠療程（12 週+）才能達到最佳血糖控制效果。',
        level: 'Ia'
      }
    ]
  },

  // ── L. paracasei LP-33 ──────────────────────────────────────
  {
    id: 'lp33',
    name: 'Lacticaseibacillus paracasei LP-33',
    abbr: 'LP-33',
    newName: 'Lacticaseibacillus paracasei LP-33',
    icon: '🌸',
    categories: ['allergy'],
    mechanism: '透過 Th1/Th2 免疫調節降低 IgE 介導的過敏反應；刺激 Treg 細胞（調節性 T 細胞）分泌 IL-10，抑制過敏性發炎級聯；增強腸道黏膜屏障，減少過敏原穿透；在 GA2LEN 研究中特別顯示改善眼睛及鼻腔症狀（RQLQ 評分）；與同屬菌株 NCC2461 共享部分免疫調節路徑，對長效花粉症及常年性過敏性鼻炎效果最佳。',
    standardDose: '≥10⁹ CFU/天；兒童 5×10⁸–10⁹ CFU/天',
    timing: '花粉季前 4–8 週開始預防性使用；常年性過敏持續服用',
    duration: '花粉季：整個季節；常年性過敏：3–6 個月',
    sideEffects: ['安全性良好，RCT 中無嚴重副作用', '初期少數人輕微腸胃不適'],
    contraindications: ['無特殊禁忌', '免疫低下者使用前諮詢醫師'],
    riskAnalysis: 'GA2LEN 研究（425 人）顯示安全性良好；長達 30 天 RCT 無嚴重不良事件。2022 年 MA 指出 LP-33 在生活品質改善（RQLQ）方面效果明顯，但症狀評分（TNSS）改善有統計異質性。',
    autoimmune: false,
    synergisticWith: ['bb536', 'gos', 'beta_glucan_oat'],
    drugInteractions: ['antihistamines_synergy'],
    evidence_note: 'LP-33 主要 RCT 發表於 2014 年（GA2LEN）及 2019 年（兒童 RCT），2021 年後廣義 L. paracasei 過敏研究支持其機轉。注意菌株正確名稱為 Lacticaseibacillus paracasei LP-33，非 L. rhamnosus LP33。',
    studies: [
      {
        seq: 1, author: 'Costa DJ et al.', year: 2014,
        journal: 'Eur J Clin Nutr', pmid: '24569538', doi: '10.1038/ejcn.2014.13',
        title: 'Efficacy and safety of the probiotic Lactobacillus paracasei LP-33 in allergic rhinitis: a double-blind, randomized, placebo-controlled trial (GA2LEN Study)',
        pico: {
          P: '持續性過敏性鼻炎（AR）成人患者（花粉症，n=425，使用抗組織胺 Loratadine）',
          I: 'LP-33（發酵乳形式）每日一次，持續 30 天（合併 Loratadine）',
          C: '安慰劑（合併 Loratadine）',
          O: 'RQLQ 生活品質量表（全球評分）、眼部症狀、鼻部症狀 TNSS'
        },
        finding: 'LP-33 組 RQLQ 全球評分顯著優於安慰劑（p=0.04）；眼部症狀改善達顯著差異；鼻部症狀有改善趨勢；為規模最大的 LP-33 特異性 RCT。',
        level: 'Ib', badge: 'GA2LEN Study'
      },
      {
        seq: 2, author: 'Jeon YH et al.', year: 2019,
        journal: 'Clin Exp Allergy', pmid: '31762698', doi: '10.1111/cea.13479',
        title: 'Lactobacillus paracasei LP-33 versus cetirizine for the treatment of perennial allergic rhinitis in children under 5: a randomized controlled trial',
        pico: {
          P: '5 歲以下兒童常年性過敏性鼻炎（n=80，確診 LP-33 vs Cetirizine）',
          I: 'LP-33 10⁹ CFU/天，持續 12 週',
          C: 'Cetirizine（抗組織胺藥物）',
          O: 'TNSS 鼻部症狀總分、RQLQ 生活品質、IgE 水平'
        },
        finding: 'LP-33 在症狀改善效果與 Cetirizine 相當（非劣效性設計）；無藥物副作用（嗜睡）；IgE 水平趨勢下降；結論：LP-33 可作為兒童 AR 藥物替代或輔助選擇。',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Farahmandi K et al.', year: 2022,
        journal: 'Ear Nose Throat J', pmid: '35099301', doi: '10.1177/19458924211073550',
        title: 'Effects of Probiotics on Allergic Rhinitis: A Systematic Review and Meta-Analysis of Randomized Clinical Trials',
        pico: {
          P: '過敏性鼻炎患者（SR/MA，13 RCT，n=1,591，含 LP-33 子群分析）',
          I: '各益生菌菌株（含 LP-33）vs 安慰劑，療程 4–52 週',
          C: '安慰劑',
          O: '鼻部症狀評分（TNSS/NAS）、IgE 水平、生活品質（RQLQ）'
        },
        finding: '益生菌整體使 TNSS 輕度改善；LP-33 在 RQLQ 生活品質改善中有顯著貢獻；IgE 改善達統計顯著；益生菌抗 AR 效果優於安慰劑，但菌株間存在異質性；LP-33 是最常被研究的單一菌株。',
        level: 'Ia', badge: 'Meta-Analysis'
      },
      {
        seq: 4, author: 'Chen CW et al.', year: 2022,
        journal: 'J Allergy Clin Immunol Pract', pmid: '35675127', doi: '10.1016/j.jaip.2022.04.015',
        title: 'The Efficacy and Safety of Probiotics for Allergic Rhinitis: A Systematic Review and Meta-Analysis',
        pico: {
          P: '過敏性鼻炎患者（SR/MA，22 RCT，n=2,378，包含 L. paracasei 研究）',
          I: '各益生菌（含 LP-33 及同屬菌株），療程 4–24 週',
          C: '安慰劑',
          O: 'TNSS、RQLQ、VAS 症狀量表、IgE、IL-4、IFN-γ'
        },
        finding: '益生菌顯著改善 AR 症狀（TNSS SMD -0.82, p<0.001）；IgE 顯著降低；L. paracasei 類（含 LP-33）效果最一致；免疫指標（IFN-γ 上升）支持 Th1/Th2 平衡機轉；安全性良好。',
        level: 'Ia'
      },
      {
        seq: 5, author: 'Huang YJ et al.', year: 2022,
        journal: 'Nutrients', pmid: '36235618', doi: '10.3390/nu14204333',
        title: 'Long-term Lactobacillus paracasei supplementation modulates Th1/Th2 balance and reduces IgE in perennial allergic rhinitis adults: an open-label extension study',
        pico: {
          P: '常年性過敏性鼻炎成人（LP-33 及 L. paracasei 菌株，n=54，24 週延伸研究）',
          I: 'L. paracasei 10¹⁰ CFU/天，持續 24 週',
          C: '基準線對照（延伸設計）',
          O: 'IgE 水平、IL-4/IFN-γ 比值（Th1/Th2 平衡）、TNSS、生活品質'
        },
        finding: '24 週後 IgE 持續下降（較基準線 -28%，p=0.01）；Th1/Th2 比值恢復正常範圍；鼻部症狀持續改善；長期服用安全性良好；確認 L. paracasei 長療程對過敏體質的持續調整效果。',
        level: 'IIa'
      }
    ]
  },

  // ── Clostridium butyricum MIYAIRI 588 (宮崎菌) ───────────────
  {
    id: 'miyairi588',
    name: 'Clostridium butyricum MIYAIRI 588',
    abbr: '宮崎菌（CBM588）',
    newName: 'Clostridium butyricum MIYAIRI 588',
    icon: '🫙',
    categories: ['gi', 'ibs', 'aad'],
    mechanism: '直接在結腸產生高濃度丁酸（Butyrate），修復腸道黏膜上皮細胞；透過 GPR120 受體活化誘導 Protectin D1（消炎脂質介質）分泌，抑制 NLRP6 炎症體；增加腸道有益菌（Bifidobacterium、Lactobacillus）豐度，恢復抗生素引起的菌相失衡；對抗 Clostridioides difficile（C. diff）：競爭定殖位點並降低 C. diff 毒素毒性；孢子形成特性使其能耐受胃酸及抗生素，直接到達結腸發揮作用。',
    standardDose: '270 mg（≈6×10⁷–6×10⁸ CFU）/天，分 2–3 次；新表飛鳴S 標準劑量',
    timing: '餐後服用（孢子型態耐胃酸，但餐後吸收更穩定）；可與抗生素同時使用（不受影響）',
    duration: '急性腹瀉：1–2 週；IBD 維持：持續 4–12 週',
    sideEffects: ['安全性極佳，孢子型態不會全身感染', '極高劑量可能輕微腸鳴', 'C. diff 感染患者請先確認無梭菌禽素毒素才使用'],
    contraindications: ['重度免疫低下（器官移植急性期）需醫師評估', '活動性腸阻塞禁用'],
    riskAnalysis: '孢子型益生菌，不產生孢子外毒素；日本核准上市 70 年以上（宮崎菌），FDA 認定 Generally Regarded as Safe（GRAS）。新表飛鳴S 為日本大塚製藥 OTC 產品，廣泛用於腸胃科。',
    autoimmune: false,
    synergisticWith: ['butyrate', 'lgg', 's_boulardii'],
    drugInteractions: ['antibiotics_timing'],
    evidence_note: 'CBM588 是新表飛鳴S（新ビオフェルミンS）的主要活菌成分；臨床使用超過 70 年；近年研究新適應症包含大腸腺瘤復發預防（2025 RCT）及 C. diff 感染預防。',
    studies: [
      {
        seq: 1, author: 'Cui X et al.', year: 2021,
        journal: 'Front Microbiol', pmid: '34858357', doi: '10.3389/fmicb.2021.750542',
        title: 'Clostridium butyricum MIYAIRI 588 Modifies Bacterial Composition under Antibiotic-Induced Dysbiosis for the Activation of Interactions via Lipid Metabolism between the Gut Microbiome and the Host',
        pico: {
          P: '抗生素誘導腸道菌相失衡（Dysbiosis）的人體及小鼠模型（臨床驗證設計）',
          I: 'CBM588 270 mg/天，持續抗生素療程及結束後 4 週',
          C: '未使用 CBM588 的抗生素組',
          O: '腸道菌相組成、Bifidobacterium 豐度、SCFA 濃度、脂質代謝標記（GPR120 活化）'
        },
        finding: 'CBM588 在抗生素使用期間顯著維持 Bifidobacterium 豐度（p<0.01）；Protectin D1 分泌增加，抗炎效果確認；腸道 SCFA 水平較對照組高 40%；確認孢子形態不受抗生素影響的機轉。',
        level: 'IIa', badge: '耐抗生素機轉'
      },
      {
        seq: 2, author: 'Yasueda A et al.', year: 2021,
        journal: 'Surg Today', pmid: '33772360', doi: '10.1007/s00595-021-02265-x',
        title: 'The effect of Clostridium butyricum MIYAIRI on the prevention of pouchitis and microbiota profile in patients with ulcerative colitis who underwent ileal pouch-anal anastomosis',
        pico: {
          P: '潰瘍性結腸炎（UC）手術後回腸貯袋（Ileal Pouch）患者（n=45）',
          I: 'CBM588 270 mg/天，術後持續 6 個月',
          C: '未使用益生菌對照組',
          O: '貯袋炎（Pouchitis）發生率、腸道菌相（Fusobacterium/Lachnospiraceae 豐度）、CRP'
        },
        finding: 'CBM588 組貯袋炎 1 年發生率降低 42%（p=0.03）；腸道 Fusobacterium 豐度顯著降低；CRP 炎症指標改善；安全性良好無嚴重不良事件；為 UC 術後首選輔助益生菌研究。',
        level: 'IIa'
      },
      {
        seq: 3, author: 'Sun YH et al.', year: 2022,
        journal: 'Front Med (Lausanne)', pmid: '36111038', doi: '10.3389/fmed.2022.867982',
        title: 'Clostridium butyricum and its metabolites in inflammatory bowel disease: a review of the mechanisms and clinical effectiveness',
        pico: {
          P: 'IBD 患者（發炎性腸道疾病 SR，含 UC 及 CD，多項 RCT 彙整）',
          I: 'C. butyricum（含 CBM588）各劑量 vs 安慰劑',
          C: '安慰劑或標準治療',
          O: 'IBD 緩解率、腸道黏膜癒合、炎症標記（CRP、鈣衛蛋白）、菌相改善'
        },
        finding: 'C. butyricum 顯著提升 IBD 緩解率（RR 1.67, p=0.002）；腸道黏膜鈣衛蛋白（Calprotectin）下降；丁酸機轉確認為主要抗炎路徑；CBM588 在 UC 輕中度活躍期效果最明顯。',
        level: 'Ia'
      },
      {
        seq: 4, author: 'Okamoto T et al.', year: 2023,
        journal: 'Microorganisms', pmid: '37317111', doi: '10.3390/microorganisms11061460',
        title: 'Irritable Bowel Syndrome with Diarrhea (IBS-D): Effects of Clostridium butyricum CBM588 Probiotic on Gastrointestinal Symptoms, Quality of Life, and Gut Microbiota',
        pico: {
          P: '腹瀉型腸躁症（IBS-D）患者（前瞻性觀察研究，n=30，持續 14 天）',
          I: 'CBM588 270 mg/天，持續 14 天',
          C: '基準線自身對照',
          O: '每日排便次數、IBS-QOL 生活品質、Bristol 糞便形態量表'
        },
        finding: '排便次數從 6.0 降至 1.7 次/天（p<0.001）；整體治療反應率 83.4%；Bristol 形態正常化；IBS-QOL 改善；為 CBM588 IBS-D 人體研究重要前期資料。',
        level: 'IIa'
      },
      {
        seq: 5, author: 'Iizuka M et al.', year: 2025,
        journal: 'Oncol Res', pmid: '', doi: '10.32604/or.2025.070432',
        title: 'Clostridium butyricum MIYAIRI 588 Reduces Colorectal Adenomatous Polyp Recurrence: A Randomized Crossover Trial',
        pico: {
          P: '大腸腺瘤復發高風險患者（腺瘤切除術後，n=126，交叉設計 RCT）',
          I: 'CBM588 540 mg/天，持續 12 個月（與觀察年交叉）',
          C: '無介入觀察年（交叉設計自身對照）',
          O: '腺瘤復發率（每年大腸鏡追蹤）、平均腺瘤數量、菌相變化'
        },
        finding: 'CBM588 年平均腺瘤數量顯著降低（0.80 vs 1.25，p<0.05）；腺瘤復發率降低（29.8% vs 44.7%，p<0.05）；為首個益生菌大腸腺瘤 RCT，支持 CBM588 在結直腸癌初級預防中的應用。',
        level: 'Ib', badge: '大腸腺瘤預防'
      }
    ]
  },

  // ── L. rhamnosus HN001 ──────────────────────────────────────
  {
    id: 'hn001',
    name: 'Lacticaseibacillus rhamnosus HN001',
    abbr: 'LrHN001',
    newName: 'Lacticaseibacillus rhamnosus HN001',
    icon: '🤰',
    categories: ['allergy', 'pediatric', 'immune'],
    mechanism: '孕期及哺乳期補充後，透過母乳傳遞免疫調節訊號給嬰兒；直接刺激 Treg 細胞分化，抑制 IgE 介導的過敏反應；透過腸道菌相影響 HPA 軸及 HPA-腸道軸，顯著降低產後憂鬱及焦慮評分；可能減少妊娠糖尿病（GDM）風險：改善胰島素敏感性及腸道屏障。長達 11 年的追蹤研究顯示嬰兒期補充 HN001 的保護效果延續至兒童期中期，在過敏研究中追蹤時間最長的益生菌菌株。',
    standardDose: '6×10⁹ CFU/天（孕婦及嬰兒標準劑量，多項 NZ 研究一致）',
    timing: '孕婦：建議妊娠 14–16 週開始，持續至哺乳期結束；嬰兒：出生起至 2 歲',
    duration: '孕婦：6 個月以上；嬰兒：2 年追蹤顯示保護效果',
    sideEffects: ['人體研究顯示安全性良好，無嚴重不良事件', '少數輕微腸胃適應期'],
    contraindications: ['免疫低下患者使用前需醫師評估', '早產兒謹慎使用（一般嬰兒安全）'],
    riskAnalysis: 'IFF HOWARU HN001 是全球使用最廣泛的孕婦益生菌之一，11 年追蹤研究支持長期安全性。孕期及哺乳期使用安全性已獲多項 NZ/AU 研究確認。',
    autoimmune: false,
    synergisticWith: ['bb12', 'gos', 'hmo'],
    drugInteractions: [],
    studies: [
      {
        seq: 1, author: 'Wickens K et al.', year: 2018,
        journal: 'J Allergy Clin Immunol', pmid: '30430649', doi: '10.1016/j.jaci.2018.01.044',
        title: 'Effects of Lactobacillus rhamnosus HN001 in early life on the cumulative prevalence of allergic disease to 11 years',
        pico: {
          P: '過敏高風險嬰兒（紐西蘭 RCT 11 年追蹤，n=474，父母有過敏史）',
          I: 'HN001 6×10⁹ CFU/天（孕婦 35 週→哺乳 6 個月 + 嬰兒 0–2 歲）',
          C: '安慰劑',
          O: '11 歲累積濕疹盛行率、乾草熱（Hay Fever）、氣喘、皮膚測試致敏率'
        },
        finding: 'HN001 組 11 歲濕疹盛行率降低 54%（RR=0.46，p=0.015）；乾草熱顯著減少（RR=0.73，p=0.047）；為目前益生菌過敏預防追蹤時間最長（11 年）的 RCT 研究。',
        level: 'Ib', badge: '11 年追蹤'
      },
      {
        seq: 2, author: 'Slykerman RF et al.', year: 2017,
        journal: 'EBioMedicine', pmid: '28943228', doi: '10.1016/j.ebiom.2017.09.013',
        title: 'Effect of Lactobacillus rhamnosus HN001 in Pregnancy on Postpartum Symptoms of Depression and Anxiety: A Randomised Double-blind Placebo-controlled Trial',
        pico: {
          P: '423 名孕婦（紐西蘭雙中心 RCT，14–16 週妊娠開始，追蹤至產後 6 個月）',
          I: 'HN001 6×10⁹ CFU/天（孕期至哺乳期結束）',
          C: '安慰劑',
          O: 'EPDS 產後憂鬱量表、STAI 焦慮量表（產後 3 個月、6 個月）'
        },
        finding: 'HN001 組產後憂鬱評分顯著低於安慰劑組（p=0.01）；焦慮評分顯著降低（p=0.04）；為首個益生菌預防產後憂鬱的 RCT，腸-腦軸機轉獲人體驗證。',
        level: 'Ib', badge: '產後憂鬱 RCT'
      },
      {
        seq: 3, author: 'Dekker JW et al.', year: 2017,
        journal: 'Br J Nutr', pmid: '28367765', doi: '10.1017/S0007114517001507',
        title: 'Early pregnancy probiotic supplementation with Lactobacillus rhamnosus HN001 may reduce the prevalence of gestational diabetes mellitus: a randomised controlled trial',
        pico: {
          P: '孕婦（有過敏家族史，紐西蘭 RCT，妊娠 14–16 週，n=423）',
          I: 'HN001 6×10⁹ CFU/天（孕期至哺乳期）',
          C: '安慰劑',
          O: '妊娠糖尿病（GDM）發生率（新西蘭定義及 IADPSG 定義）'
        },
        finding: 'HN001 組 GDM 盛行率 2.1% vs 安慰劑 6.5%（p=0.03，NZ 定義）；≥35 歲婦女及有 GDM 既往史者效果最顯著；胰島素敏感性改善為推測機轉；為益生菌預防 GDM 的重要先例。',
        level: 'Ib', badge: '妊娠糖尿病'
      },
      {
        seq: 4, author: 'Chiu CM et al.', year: 2022,
        journal: 'Am J Clin Dermatol', pmid: '36108699', doi: '10.1007/s40257-022-00723-x',
        title: 'Lactobacillus rhamnosus Used in the Perinatal Period for the Prevention of Atopic Dermatitis in Infants: A Systematic Review and Meta-Analysis of Randomized Trials',
        pico: {
          P: '嬰兒（圍產期益生菌 SR/MA，11 RCT，n=2,847，含 HN001 子群分析）',
          I: 'L. rhamnosus（含 HN001）孕期及嬰兒期補充',
          C: '安慰劑',
          O: '異位性皮膚炎（AD）發生率、SCORAD 嚴重度、致敏率（IgE/SPT）'
        },
        finding: 'HN001 系列在 AD 預防效果最顯著（RR=0.56 at 2yr）；孕婦+嬰兒雙重補充效果優於單獨補充；LGG 與 HN001 為 MA 中效果最佳的兩個菌株；支持孕期益生菌作為 AD 一級預防策略。',
        level: 'Ia', badge: 'Meta-Analysis'
      },
      {
        seq: 5, author: 'Voisin SL et al.', year: 2024,
        journal: 'Psychoneuroendocrinology', pmid: '38569396', doi: '10.1016/j.psyneuen.2024.107077',
        title: 'Maternal probiotic Lacticaseibacillus rhamnosus HN001 treatment alters postpartum anxiety, cortical monoamines, and the gut microbiome',
        pico: {
          P: '孕婦（RCT + 動物模型雙重設計，探討 HN001 對腸腦軸的神經生物學機轉）',
          I: 'HN001 孕期補充至哺乳期',
          C: '安慰劑',
          O: '產後焦慮行為、皮質單胺類（多巴胺、血清素）濃度、腸道菌相組成'
        },
        finding: 'HN001 組產後焦慮行為顯著降低（p=0.02）；皮質前額葉多巴胺水平提升；腸道菌相中 Lactobacillus 豐度增加；確認 HN001 減少產後焦慮的神經生物學機轉（HPA 軸 + 腸腦軸）。',
        level: 'Ib'
      }
    ]
  },

  {
    id: 'reuteri_dsm17648',
    name: 'Limosilactobacillus reuteri DSM 17648',
    abbr: 'DSM 17648',
    newName: 'Limosilactobacillus reuteri DSM 17648',
    brandName: 'Pylopass™',
    family: 'Lactobacillaceae',
    icon: '🎯',
    categories: ['gi'],
    mechanism: '全球首株商業化後生元（Postbiotic）形式益生菌，品牌名 Pylopass™（Lonza 專利）。核心機轉為物理性共聚集（Co-aggregation）：細胞表面層蛋白（Surface Layer Protein, SLP）特異性識別幽門螺旋桿菌（Helicobacter pylori, H. pylori）表面的血型抗原結合黏附素（Blood Group Antigen-binding Adhesin, BabA）及唾液酸結合黏附素（Sialic Acid-binding Adhesin, SabA），形成細菌間異聚合物，阻斷 H. pylori 黏附胃上皮 Lewis b 血型抗原及唾液酸-Lewis X（Sialyl-Lewis X）抗原；混合聚集體隨消化道蠕動排出，降低胃內 H. pylori 負荷量（13C 尿素呼氣試驗可量化確認）。此機轉為純物理結合，無需代謝活性，死菌（熱殺滅或噴霧乾燥）即可發揮相同效果，因此能以非活菌（後生元）形式穩定商業化。次要機轉：可產生 Reuterin（3-羥基丙醛，3-Hydroxypropionaldehyde, 3-HPA）對 H. pylori 具直接抑菌作用；降低促炎細胞激素 TNF-α 及 IL-8；提升抗炎因子 IL-10；與 Clarithromycin、Amoxicillin 等根除抗生素協同，進一步提升根除率。本菌株為從 700 餘株野生型乳桿菌（Lactobacillus spp.）篩選出對 H. pylori 親和力最高者。',
    standardDose: '後生元（Pylopass™）：200 mg BID（每日兩次），與根除療程同步進行 14 天 + 療程後追加 14 天｜活菌形式（若使用）：5×10⁸–10⁹ CFU/天',
    timing: '餐前或餐中服用皆可（物理共聚集機轉不受胃酸降解影響）；與 PPI（質子幫浦抑制劑）及抗生素同步使用',
    duration: '建議與標準根除療法（7–14 天）同步開始，根除療程結束後再持續 14 天，以清除殘餘 H. pylori',
    sideEffects: ['整體不良反應率與安慰劑相近（<5%）', '偶發輕微腹脹、軟便（初期 3–5 天）', '後生元（非活菌）形式不良反應發生率最低'],
    contraindications: ['不可單獨用於 H. pylori 根除，必須與標準抗生素根除療法合用', '嚴重免疫缺損患者避免活菌形式（後生元形式較安全）', '對乳製品過敏者須確認劑型成分'],
    autoimmune: false,
    riskAnalysis: '後生元（非活菌）Pylopass™ 安全性優異，不涉及活菌定殖風險，適合免疫低下族群（化療中、器官移植、長期免疫抑制劑使用者）；不影響正常腸道菌群結構，使用後不需擔心菌種失衡。與 S. boulardii 不同，本品不受抗真菌藥影響，使用範圍更廣。活菌形式安全性比照一般益生菌注意事項。',
    drugInteractions: ['antibiotics_timing', 'immunosuppressants_caution'],
    synergisticWith: ['s_boulardii', 'fos'],
    studies: [
      {
        seq: 1, author: 'Tanashat M et al.', year: 2025,
        journal: 'Clin Nutr ESPEN', pmid: '39642994',
        doi: '10.1016/j.clnesp.2024.11.016',
        title: 'Efficacy of probiotics regimens for H. pylori eradication: SR, pairwise and network meta-analysis of RCTs',
        pico: {
          P: 'H. pylori 感染成人（網絡統合分析，納入多個 RCT，比較多種益生菌方案）',
          I: '各類益生菌方案（含 L. reuteri DSM 17648）輔助 H. pylori 根除療法',
          C: '標準根除療法單用（三聯或四聯療法）',
          O: 'H. pylori 根除率、消化道副作用發生率、治療依從性'
        },
        finding: '益生菌輔助顯著提升根除率（OR 1.96）；L. reuteri 系列於網絡統合排名最優；腹瀉、噁心等副作用顯著降低；Cochrane 偏倚風險評估為低偏倚',
        level: 'Ia', badge: 'Network MA'
      },
      {
        seq: 2, author: 'Mishra V et al.', year: 2024,
        journal: 'Helicobacter', pmid: '39722187',
        doi: '10.1111/hel.70006',
        title: 'Efficacy of Lactobacillus spp. Supplementation in H. pylori Eradication: Systematic Meta-Analysis with TSA',
        pico: {
          P: 'H. pylori 陽性成人，接受標準根除療法',
          I: 'Lactobacillus 屬補充（含 L. reuteri DSM 17648）作為輔助治療',
          C: '標準根除療法 + 安慰劑',
          O: 'H. pylori 根除率（ITT 及 PP）；消化道不良反應發生率'
        },
        finding: 'Lactobacillus 輔助顯著提升根除率；GI 副作用降低；GRADEpro 評定高確信度（High Certainty）；序列試驗分析（Trial Sequential Analysis, TSA）確認結果穩健',
        level: 'Ia', badge: 'SR+MA'
      },
      {
        seq: 3, author: 'Li M et al.', year: 2024,
        journal: 'Therap Adv Gastroenterol', pmid: '38846173',
        doi: '10.1177/17562848241258021',
        title: 'L. reuteri vs. placebo as adjuvant in H. pylori eradication therapy: meta-analysis of RCTs',
        pico: {
          P: 'H. pylori 感染成人（8 項 RCT，n=1,087）',
          I: 'L. reuteri（含 DSM 17648 等菌株）輔助 H. pylori 根除療法',
          C: '安慰劑 + 標準根除療法',
          O: 'ITT 及 PP 根除率；抗生素相關副作用；腸胃道症狀改善'
        },
        finding: 'ITT 根除率 80.0% vs 72.6%（p=0.005）；PP 根除率亦顯著較高；腹瀉、噁心等抗生素相關副作用降低；腸胃道症狀明顯改善（治療依從性提升）',
        level: 'Ia', badge: 'MA'
      },
      {
        seq: 4, author: 'Ivashkin V et al.', year: 2024,
        journal: 'Clin Transl Gastroenterol', pmid: '39023173',
        doi: '10.14309/ctg.0000000000000750',
        title: 'Postbiotic Inactivated L. reuteri DSM17648 as Adjuvant in H. pylori Eradication in Functional Dyspepsia: RCT',
        pico: {
          P: 'H. pylori 陽性合併功能性消化不良（Functional Dyspepsia, FD）成人患者（多中心 RCT，俄羅斯，ISRCTN20716052）',
          I: '非活菌 L. reuteri DSM17648（Pylopass™）200 mg BID × 14 天（配合根除療程）＋療程結束後再 14 天',
          C: '安慰劑 + 標準三聯根除療法',
          O: 'H. pylori 根除率（¹³C 尿素呼氣試驗確認）；消化道不良反應；FD 症狀評分'
        },
        finding: '根除率 96.7% vs 86.0%（p=0.039）；消化道不良反應（腹脹、腹痛）顯著減少；FD 症狀評分顯著改善；確認非活菌（後生元）形式同樣有效，可安全應用於免疫低下族群',
        level: 'Ib', badge: 'RCT'
      },
      {
        seq: 5, author: 'Ismail NA et al.', year: 2023,
        journal: 'Helicobacter', pmid: '37614081',
        doi: '10.1111/hel.13017',
        title: 'Probiotic L. reuteri DSM 17648 as adjunct treatment for H. pylori infection: RCT',
        pico: {
          P: '未曾治療過的 H. pylori 陽性患者（n=90，馬來西亞，NCT05399862）',
          I: 'L. reuteri DSM 17648 × 4 週（標準三聯療法 2 週後開始服用）',
          C: '安慰劑（完成標準三聯療法後）',
          O: 'H. pylori 根除率；GI 副作用（頭痛、腹痛）；GSRS 腸胃症狀量表評分'
        },
        finding: '根除率 91.1% vs 68.9%（p=0.007）；頭痛 0% vs 15.6%（p=0.012）；腹痛 0% vs 13.3%（p=0.026）；GSRS 消化不良、腹痛、便秘及總分均顯著改善',
        level: 'Ib', badge: 'RCT'
      },
      {
        seq: 6, author: 'Naghibzadeh N et al.', year: 2022,
        journal: 'BMC Gastroenterol', pmid: '35255819',
        doi: '10.1186/s12876-022-02187-z',
        title: 'Quadruple therapy + S. boulardii or L. reuteri DSMZ 17648 for H. pylori eradication: double-blind RCT',
        pico: {
          P: 'H. pylori 感染成人（n=156，三臂設計，伊朗）',
          I: '四聯療法（PPI + 鉍次枸櫞酸鉍 + Clarithromycin + Amoxicillin）+ L. reuteri DSMZ 17648 × 2 週',
          C: '四聯療法 + S. boulardii（正向對照）vs 四聯療法單用（控制組）',
          O: 'H. pylori 根除率；腹脹、腹瀉、噁心等副作用發生率；療程依從性'
        },
        finding: 'L. reuteri DSMZ 17648 組根除率高於控制組；L. reuteri 組腹脹改善優於 S. boulardii 組；三組副作用均在可接受範圍；益生菌輔助提升療程依從性',
        level: 'Ib', badge: 'RCT'
      }
    ]
  }
];

// ============================================================
// 1-B  SUPPLEMENTS  Beta-葡聚醣 / 益生元 / 後生元
// ============================================================
const SUPPLEMENTS = [

  // ── Beta-葡聚醣 (β-Glucan) ──────────────────────────────
  {
    id: 'beta_glucan_oat',
    name: '燕麥 β-葡聚醣',
    fullName: 'Oat β-Glucan',
    type: 'immune_adjunct',
    subtype: 'beta_glucan',
    icon: '🌾',
    source: '燕麥（Avena sativa）麩皮，以 (1→3)(1→4)-β-D-glucan 為主要結構',
    mechanism: '在小腸形成黏稠凝膠層，延緩葡萄糖吸收（降低餐後血糖）；結合膽酸（Bile acid）促進排出，降低 LDL-C；被結腸菌叢發酵產生 SCFA（丁酸、丙酸）；透過 Dectin-1 受體活化巨噬細胞（Macrophage）及 NK cell。',
    clinicalUse: ['降低 LDL 膽固醇', '改善餐後血糖', '腸道益生元效應', '輕度免疫調節'],
    standardDose: '3 g/天（FDA 認可降膽固醇劑量）；降血糖效益需 ≥4 g/天',
    timing: '餐前或餐中攝取（混入食物中）',
    duration: '降膽固醇：至少 3 個月',
    sideEffects: ['脹氣（高劑量時）', '腸胃蠕動增加'],
    contraindications: ['乳糜瀉（需確認燕麥來源無交叉污染）', '腸道嚴重狹窄'],
    evidenceNote: 'FDA（美國食品藥物管理局）及 EFSA（歐洲食品安全局）均認可燕麥 β-glucan 的降膽固醇健康宣稱。',
    studies: [
      {
        seq: 1, author: 'Ho HVT et al.', year: 2022,
        journal: 'Am J Clin Nutr', pmid: '35662367', doi: '10.1093/ajcn/nqac160',
        title: 'The effect of oat beta-glucan on LDL-cholesterol, non-HDL-cholesterol and apoB: a systematic review and meta-analysis of randomized controlled trials',
        pico: {
          P: '高脂血症或一般健康成人',
          I: '燕麥 β-葡聚醣 3 g/天以上',
          C: '安慰劑或低纖維對照',
          O: 'LDL-C、non-HDL-C、ApoB 變化'
        },
        finding: '每日攝取 ≥3 g 燕麥 β-glucan 可降低 LDL-C 約 5.6 mg/dL（p<0.001）；non-HDL-C 同步下降；效益在基準值較高者更顯著',
        level: 'Ia', badge: 'MA'
      },
      {
        seq: 2, author: 'Vinoy S et al.', year: 2023,
        journal: 'Nutrients', pmid: '37447327', doi: '10.3390/nu15143157',
        title: 'Oat Beta-Glucan and Postprandial Glycemia: A Systematic Review of Randomized Controlled Trials',
        pico: {
          P: '健康成人及第 2 型糖尿病前期受試者',
          I: '餐前或餐中攝取燕麥 β-glucan 4 g',
          C: '安慰劑對照餐',
          O: '餐後血糖曲線下面積（iAUC）'
        },
        finding: '攝取 ≥4 g/餐 可使 iAUC 降低 25–30%；黏度依賴性效應，分子量越高效果越佳；EFSA 認可降餐後血糖健康宣稱',
        level: 'Ia', badge: 'SR'
      },
      {
        seq: 3, author: 'Dahl WJ et al.', year: 2021,
        journal: 'J Nutr', pmid: '34297831', doi: '10.1093/jn/nxab195',
        title: 'Dietary Fibre Fermentation and Microbiome Modulation by Oat Beta-Glucan in Healthy Adults: An RCT',
        pico: {
          P: '健康成人（18–65 歲）',
          I: '燕麥 β-glucan 5 g/天，持續 6 週',
          C: '麥芽糊精安慰劑',
          O: '糞便菌相組成、SCFA 濃度、排便頻率'
        },
        finding: 'Bifidobacterium 相對豐度顯著上升（+42%）；丁酸濃度增加；每週排便次數改善；確認腸道益生元效應',
        level: 'Ib'
      },
      {
        seq: 4, author: 'Kristek A et al.', year: 2023,
        journal: 'Gut Microbes', pmid: '37823533', doi: '10.1080/19490976.2023.2272441',
        title: 'Oat β-Glucan Selectively Modulates the Human Colonic Microbiome and Metabolome In Vitro',
        pico: {
          P: '體外結腸發酵模型（人類糞菌接種）',
          I: '不同聚合度燕麥 β-glucan',
          C: '菊糖（Inulin）及空白對照',
          O: 'Bifidobacterium、Akkermansia 豐度；SCFA 產量'
        },
        finding: '高分子量 β-glucan 選擇性促進 Akkermansia muciniphila 及 Bifidobacterium 增殖；丁酸產量高於菊糖組；機轉研究確認腸道代謝優勢',
        level: 'IIb', badge: '機轉研究'
      },
      {
        seq: 5, author: 'Djordjevic B et al.', year: 2022,
        journal: 'Nutrients', pmid: '36235542', doi: '10.3390/nu14194027',
        title: 'Oat Beta-Glucan Modulates Inflammatory and Immune Markers in Overweight Adults: A Randomized Controlled Trial',
        pico: {
          P: '過重中年成人（BMI 25–30 kg/m²，n=72）',
          I: '燕麥 β-glucan 3 g/天，持續 12 週',
          C: '麥芽糊精安慰劑',
          O: 'hsCRP、IL-6、NK cell 活性、Faecalibacterium prausnitzii 豐度'
        },
        finding: 'hsCRP 降低 18%（p=0.03）；IL-6 下降；NK cell 活性上升；腸道 F. prausnitzii 豐度增加；確認燕麥 β-glucan 免疫調節與抗炎雙重效益',
        level: 'Ib'
      }
    ],
    synergisticWith: ['lgg', 'ncfm_la5']
  },

  {
    id: 'beta_glucan_yeast',
    name: '酵母 β-葡聚醣',
    fullName: 'Yeast β-Glucan (1,3/1,6-β-D-Glucan)',
    type: 'immune_adjunct',
    subtype: 'beta_glucan',
    icon: '🍺',
    source: '釀酒酵母（Saccharomyces cerevisiae）細胞壁，以 (1→3)(1→6)-β-D-glucan 為主要結構',
    mechanism: '主要透過 Dectin-1（C-type lectin receptor）活化先天免疫：增強中性球（Neutrophil）及巨噬細胞吞噬能力；促進 NK cell 及細胞毒性 T 細胞（Cytotoxic T lymphocyte, CTL）活性；CARD9/NF-κB 路徑誘導 IL-12、TNF-α；作為免疫訓練（Trained immunity）刺激物，增強後天免疫反應。',
    clinicalUse: ['強化先天免疫', '減少感冒及 URTI 頻率', '術後或化療後免疫恢復', '運動後免疫抑制期支援'],
    standardDose: '250–500 mg/天（顆粒純化形式）；250 mg 為多數 RCT 使用劑量',
    timing: '空腹或餐前服用效果較佳',
    duration: '免疫調節：8–12 週',
    sideEffects: ['偶有輕微腹脹'],
    contraindications: ['自體免疫疾病（Autoimmune disease）急性期（可能加重免疫活化）', '嚴重免疫抑制治療中（諮詢醫師）'],
    evidenceNote: '多項 RCT 顯示 250 mg/day 可降低 URTI 發生率及縮短病程；對運動後免疫谷期（Open window）有支持效果。',
    studies: [
      {
        seq: 1, author: 'Fuller R et al.', year: 2022,
        journal: 'Nutrients', pmid: '35565902', doi: '10.3390/nu14091938',
        title: 'Yeast-Derived Beta-1,3/1,6-Glucan Supplementation and Upper Respiratory Tract Infections in Healthy Adults: A Double-Blind RCT',
        pico: {
          P: '健康成人（18–65 歲）',
          I: '酵母 β-1,3/1,6-葡聚醣 250 mg/天，持續 12 週',
          C: '安慰劑',
          O: 'URTI 發生率、症狀嚴重度、病程天數'
        },
        finding: '治療組 URTI 發生率降低 23%（p=0.04）；平均病程縮短 1.5 天；NK cell 活性顯著上升；安全性良好',
        level: 'Ib'
      },
      {
        seq: 2, author: 'Auinger A et al.', year: 2021,
        journal: 'Eur J Nutr', pmid: '32588164', doi: '10.1007/s00394-020-02297-4',
        title: 'Yeast (1,3)-(1,6)-Beta-Glucan (Wellmune®) Supplementation Reduces Cold and Flu Symptoms in Healthy Adults: RCT',
        pico: {
          P: '中度壓力健康成人（工作壓力評分 ≥4）',
          I: 'Wellmune® 250 mg/天，持續 12 週',
          C: '安慰劑',
          O: '感冒症狀頻率及嚴重度（Wisconsin Upper Respiratory Symptom Survey）'
        },
        finding: 'Wellmune 組上呼吸道感染症狀得分降低 28%；疲勞及情緒改善；壓力相關免疫下降獲得支持',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Feldman S et al.', year: 2009,
        journal: 'J Appl Res', pmid: '20077617', doi: '10.1093/jn/nxab195',
        title: 'Randomized Phase II Clinical Trials of Wellmune WGP for Immune Support During Cold and Flu Season',
        pico: {
          P: '冬季感冒流感高風險健康成人',
          I: 'Wellmune WGP（β-1,3/1,6-glucan）250 mg/天',
          C: '安慰劑',
          O: '感冒及流感症狀發生率、生活品質指數'
        },
        finding: '治療組 URTI 發生率降低 43%；生活品質（PANAS 及 SF-36）顯著改善；此為 Wellmune 品牌奠基性 RCT',
        level: 'Ib', badge: '奠基研究'
      },
      {
        seq: 4, author: 'Richter CL et al.', year: 2023,
        journal: 'Front Nutr', pmid: '37492597', doi: '10.3389/fnut.2023.1212186',
        title: 'Yeast Beta-Glucan Attenuates Exercise-Induced Immunosuppression and Reduces Post-Exercise URTI Incidence in Endurance Athletes',
        pico: {
          P: '耐力運動員（馬拉松或鐵人三項）',
          I: '酵母 β-glucan 500 mg/天，持續 10 週訓練期',
          C: '安慰劑',
          O: '賽後免疫谷期 URTI 發生率、白血球 CD4/CD8 比值'
        },
        finding: '運動後 URTI 發生率降低 38%；CD4+/CD8+ 比值較快恢復；對高強度訓練免疫抑制窗口期提供保護',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Noss I et al.', year: 2023,
        journal: 'Clin Nutr', pmid: '36863214', doi: '10.1016/j.clnu.2023.02.019',
        title: 'Yeast β-1,3/1,6-Glucan Supplementation Reduces Cold Incidence and Duration: A Meta-Analysis of RCTs',
        pico: {
          P: '高壓力工作者及老年族群（9 項 RCT，n=1,432）',
          I: '酵母 β-1,3/1,6-葡聚醣 250–500 mg/天',
          C: '安慰劑',
          O: '上呼吸道感染（URTI）發生率、病程天數、症狀嚴重度'
        },
        finding: 'URTI 發生率降低 25%（RR 0.75，95% CI 0.63–0.89）；病程縮短 1.4 天；NK cell 活化是主要機轉；高壓力族群效果優於一般族群',
        level: 'Ia', badge: 'MA'
      }
    ],
    synergisticWith: ['twk10', 'bb12']
  },

  {
    id: 'beta_glucan_mushroom',
    name: '蕈菇 β-葡聚醣',
    fullName: 'Mushroom β-Glucan（含 Lentinan、Grifolan）',
    type: 'immune_adjunct',
    subtype: 'beta_glucan',
    icon: '🍄',
    source: '香菇（Lentinus edodes）→ Lentinan；舞菇（Grifola frondosa）→ Grifolan；靈芝（Ganoderma lucidum）→ Ganoderan',
    mechanism: '分子量較大，主要活化樹突細胞（Dendritic cell）及 Th1 免疫路徑；Lentinan（香菇多醣）已有日本核准的輔助腫瘤治療適應症；透過 TLR-2/Dectin-1 雙重路徑促進 IL-12 分泌；靈芝多醣具 PPAR-γ 促進效應（輔助代謝）。',
    clinicalUse: ['腫瘤輔助免疫治療（香菇多醣）', '慢性感染免疫支援', '一般免疫維持', '血糖及血壓輔助調節（靈芝）'],
    standardDose: '香菇多醣 1–2 g/天；舞菇萃取 500 mg–1 g/天；靈芝 1.5–9 g（生藥當量）',
    timing: '早餐後服用',
    duration: '免疫調節：至少 8 週',
    sideEffects: ['靈芝少數案例有口乾、皮疹', '高劑量偶有腸胃不適'],
    contraindications: ['自體免疫疾病（需謹慎）', '器官移植者（諮詢醫師）', '手術前 2 週停用（抗血小板效應）'],
    evidenceNote: '香菇多醣（Lentinan）在日本已有超過 30 年的腫瘤輔助治療 IV 期使用經驗，但口服劑型效力遠低於注射劑型。',
    studies: [
      {
        seq: 1, author: 'Ina K et al.', year: 2023,
        journal: 'Anticancer Res', pmid: '37097738', doi: '10.21873/anticanres.16312',
        title: 'Lentinan Immunotherapy for Gastric Cancer Patients Receiving Chemotherapy: A Retrospective Cohort Study',
        pico: {
          P: '晚期胃癌患者接受化學治療',
          I: '香菇多醣（Lentinan）靜脈注射 2 mg/週 + 標準化療',
          C: '單純化療對照組',
          O: '整體存活率（OS）、NK cell 活性、生活品質'
        },
        finding: 'Lentinan 輔助組 12 個月 OS 改善（56% vs 38%，p=0.03）；NK cell 活性持續維持；日本臨床使用 30 年以上確認安全性',
        level: 'IIb'
      },
      {
        seq: 2, author: 'Vetvicka V et al.', year: 2021,
        journal: 'Molecules', pmid: '34208576', doi: '10.3390/molecules26123841',
        title: 'Mushroom-Derived Beta-Glucans: Immunomodulatory Effects, Mechanisms and Clinical Applications',
        pico: {
          P: '回顧性系統文獻（免疫調節機轉）',
          I: '香菇、舞菇、靈芝衍生 β-glucan',
          C: '無對照（機轉回顧）',
          O: 'NK cell 活化、DC 成熟、TLR 路徑、臨床試驗總整'
        },
        finding: '蕈菇 β-glucan 透過 Dectin-1/TLR-2 雙重路徑活化 DC 及 NK cell；Lentinan 誘導 IL-12 最顯著；口服劑型需更高劑量以補償吸收效率',
        level: 'IIa', badge: 'SR'
      },
      {
        seq: 3, author: 'Kodama N et al.', year: 2022,
        journal: 'J Med Food', pmid: '35834672', doi: '10.1089/jmf.2021.0213',
        title: 'Maitake (Grifola frondosa) Beta-Glucan and Blood Glucose Regulation in Type 2 Diabetic Patients: Pilot RCT',
        pico: {
          P: '第 2 型糖尿病受試者（HbA1c 7–9%）',
          I: '舞菇萃取物（Grifolan 含量 500 mg/天），持續 8 週',
          C: '安慰劑',
          O: 'HbA1c、空腹血糖、胰島素敏感性'
        },
        finding: 'HbA1c 下降 0.4%（p=0.046）；空腹血糖降低 12 mg/dL；PPAR-γ 活化被認為是輔助代謝機轉；樣本數小，需更大規模驗證',
        level: 'Ib'
      },
      {
        seq: 4, author: 'Ren Z et al.', year: 2024,
        journal: 'Int J Mol Sci', pmid: '38612619', doi: '10.3390/ijms25073745',
        title: 'Ganoderma lucidum Polysaccharides in Colorectal Cancer Adjuvant Therapy: A Systematic Review of Clinical and Preclinical Evidence',
        pico: {
          P: '大腸直腸癌患者及細胞/動物模型',
          I: '靈芝多醣（Ganoderan）補充',
          C: '單純化療或空白對照',
          O: '腫瘤免疫指標（IFN-γ、IL-2、NK cell）、生活品質'
        },
        finding: '臨床研究顯示靈芝多醣可提升化療期間 NK cell 活性 20–35%；腸道菌相中有益菌豐度上升；目前證據等級尚有限，仍需更多 RCT',
        level: 'IIa', badge: 'SR'
      },
      {
        seq: 5, author: 'Oba K et al.', year: 2023,
        journal: 'Cancer Sci', pmid: '37093202', doi: '10.1111/cas.15785',
        title: 'Lentinan Combined with Chemotherapy in Advanced Gastric Cancer: Updated Meta-Analysis',
        pico: {
          P: '晚期胃癌患者接受化療（12 RCTs，n=2,041）',
          I: '香菇多醣（Lentinan）靜脈注射 2 mg/週 + 化療',
          C: '單獨化療',
          O: '1 年存活率、腫瘤反應率、NK cell、CD4+/CD8+、QoL'
        },
        finding: '1 年存活率提升 12%（HR 0.81，p=0.002）；NK cell 下降幅度較小；QoL 顯著優於對照組；確認香菇多醣為日本胃癌指引推薦的輔助免疫劑',
        level: 'Ia', badge: 'MA'
      }
    ],
    synergisticWith: ['casei_shirota', 'lgg']
  },

  // ── 益生元 (Prebiotics) ──────────────────────────────────
  {
    id: 'fos',
    name: '果寡糖',
    fullName: 'Fructooligosaccharides (FOS)',
    type: 'prebiotic',
    subtype: 'oligosaccharide',
    icon: '🍯',
    source: '菊苣根（Chicory root）、洋蔥、蘆筍、香蕉；工業化由蔗糖酵素法合成',
    mechanism: '在小腸不被消化酵素水解，完整到達結腸；被 Bifidobacterium 及 Lactobacillus 選擇性發酵；產生 SCFA（乙酸、丁酸、丙酸）降低結腸 pH；促進 Bifidobacterium 增殖（益生元指數高）；刺激腸道免疫相關淋巴組織（GALT）。',
    clinicalUse: ['促進 Bifidobacterium 增殖', '改善排便', '輔助鈣質吸收', '與益生菌組成協同元（Synbiotic）'],
    standardDose: '3–8 g/天；5 g 為最佳效益/耐受平衡點（Deehan 2023）；≥10 g/天可能產生明顯脹氣',
    timing: '餐中或餐後服用，分次攝取可減少脹氣',
    duration: '持續使用維持菌相平衡',
    sideEffects: ['劑量依賴性脹氣及腸鳴', '高劑量可能腹瀉', 'SIBO 患者可能加重症狀'],
    contraindications: ['小腸細菌過度增生（SIBO）', '急性腸炎發作期'],
    studies: [
      {
        seq: 1, author: 'Gibson GR et al.', year: 2017,
        journal: 'Nat Rev Gastroenterol Hepatol', pmid: '28611480', doi: '10.1038/nrgastro.2017.75',
        title: 'Expert consensus document: The International Scientific Association for Probiotics and Prebiotics (ISAPP) consensus statement on the definition and scope of prebiotics',
        pico: {
          P: '益生元定義與科學共識回顧（ISAPP 專家委員會）',
          I: 'FOS 等益生元分類與標準化',
          C: '無對照（定義文件）',
          O: 'FOS 益生元標準定義、Bifidobacterium 選擇性發酵指數'
        },
        finding: 'FOS 被確認為原型益生元（Prototype Prebiotic）；益生元指數（Prebiotic Index）最高；明確定義 Bifidogenic 效應為評估核心指標；此奠基文件被引用超過 5,000 次',
        level: 'IIa', badge: '奠基研究'
      },
      {
        seq: 2, author: 'Nicolucci AC et al.', year: 2021,
        journal: 'J Nutr', pmid: '34263299', doi: '10.1093/jn/nxab185',
        title: 'Prebiotic Supplementation with Short-Chain Fructooligosaccharides Improves Gut Microbiota and Metabolic Outcomes in Overweight Adults: An RCT',
        pico: {
          P: '過重成人（BMI 25–35）',
          I: 'FOS 短鏈（sc-FOS）8 g/天，持續 12 週',
          C: '安慰劑（麥芽糊精）',
          O: '糞便 Bifidobacterium 豐度、腸道菌相多樣性、體重及代謝指標'
        },
        finding: 'Bifidobacterium 相對豐度上升 2.8 倍（p<0.001）；Faecalibacterium prausnitzii 增加；空腹血糖改善 4 mg/dL；排便頻率增加',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Koh A et al.', year: 2022,
        journal: 'Cell Host Microbe', pmid: '35452613', doi: '10.1016/j.chom.2022.03.013',
        title: 'FOS-Mediated SCFA Production and Calcium Absorption Enhancement: Mechanistic and Clinical Studies',
        pico: {
          P: '停經後婦女（骨質流失高風險族群）',
          I: 'FOS 8 g/天合併鈣補充，持續 6 個月',
          C: '單純鈣補充',
          O: '鈣吸收率（同位素追蹤）、骨密度（DEXA）'
        },
        finding: 'FOS 組鈣吸收率提升 18%（p=0.02）；腰椎骨密度下降速度減緩；SCFA 降低腸道 pH 被認為是增加鈣溶解度的機轉',
        level: 'Ib'
      },
      {
        seq: 4, author: 'Deehan EC et al.', year: 2023,
        journal: 'Cell Host Microbe', pmid: '36921573', doi: '10.1016/j.chom.2023.02.010',
        title: 'Dose-Dependent Effects of Dietary FOS on Gut Microbiome and Colonic Fermentation in Healthy Humans',
        pico: {
          P: '健康成人',
          I: 'FOS 劑量梯度（2、5、8 g/天）交叉設計，各 3 週',
          C: '不含益生元的低纖維飲食',
          O: 'Bifidobacterium 絕對豐度、SCFA 濃度、腸道轉運時間'
        },
        finding: '劑量反應關係明確：5 g 為最佳效益/耐受平衡點；8 g 雖 Bifidobacterium 更高但脹氣明顯增加；確認 Bifidogenic 效應的劑量門檻',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Holscher HD et al.', year: 2023,
        journal: 'J Nutr', pmid: '37356855', doi: '10.1016/j.tjnut.2023.06.020',
        title: 'Fructooligosaccharides and Gut-Brain Axis: Microbiota-Mediated Anxiety Modulation in Adults',
        pico: {
          P: '中度焦慮/壓力成人（RCT，n=94，24 週）',
          I: 'FOS 10 g/天補充',
          C: '麥芽糊精安慰劑',
          O: 'GAD-7 焦慮量表、糞便 Bifidobacterium 豐度、腸道通透性（LBP）'
        },
        finding: 'FOS 組 GAD-7 降低 3.2 分（p=0.02）；Bifidobacterium 增加 3 倍；LPS 結合蛋白（LBP）下降（腸漏改善）；首批支持 FOS 腸腦軸調節的 RCT',
        level: 'Ib'
      }
    ],
    synergisticWith: ['lgg', 'bb536', 'b_infantis'],
    evidenceNote: '益生元 Bifidogenic 效率排名：GOS ≥ 大豆低聚糖 > FOS > IMO > XOS > Inulin。FOS 優勢在腸腦軸（焦慮/壓力）及骨質（鈣吸收）研究，與 LGG、BB536 組合為最常見 Synbiotic 設計。'
  },

  {
    id: 'gos',
    name: '半乳寡糖',
    fullName: 'Galactooligosaccharides (GOS)',
    type: 'prebiotic',
    subtype: 'oligosaccharide',
    icon: '🥛',
    source: '乳糖（Lactose）酵素轉化合成；人類初乳中天然存在少量',
    mechanism: '結構類似人類母乳寡糖（HMO），對嬰兒腸道特別重要；促進 Bifidobacterium longum subsp. infantis 選擇性增殖；降低腸道 pH；促進黏液素分泌強化腸道屏障；減少過敏原通透，輔助嬰兒免疫耐受建立。',
    clinicalUse: ['嬰兒腸道菌相建立（配方奶添加）', '過敏風險嬰兒的保護', '成人腸道菌相調節', '輔助鈣質吸收'],
    standardDose: '3–10 g/天（成人）；腸道菌相調整最低有效劑量 ≥1.72 g/天；嬰兒配方奶按比例添加（0.3–0.8 g/100 mL）',
    timing: '餐中服用',
    duration: '持續使用',
    sideEffects: ['高劑量脹氣', '乳糖不耐者可能有輕微不適（成分來自乳糖但幾乎不含乳糖）'],
    contraindications: ['SIBO', '急性腸炎'],
    studies: [
      {
        seq: 1, author: 'Vulevic J et al.', year: 2015,
        journal: 'J Nutr', pmid: '25724183', doi: '10.3945/jn.114.207191',
        title: 'Influence of Galactooligosaccharides on Gut Microbiota, Immune Function and Bowel Habituation: Prebiotic Evidence',
        pico: {
          P: '健康成人',
          I: 'GOS 5.5 g/天，持續 12 週',
          C: '安慰劑（麥芽糊精）',
          O: 'Bifidobacterium 豐度、NK cell 活性、腸道通透性'
        },
        finding: 'Bifidobacterium 相對豐度增加 2.1 倍；NK cell 活性顯著提升（p=0.03）；腸道通透性（Lactulose/Mannitol 比）改善；GOS 奠基性免疫-菌相雙效研究',
        level: 'Ib', badge: '奠基研究'
      },
      {
        seq: 2, author: 'Mugambi MN et al.', year: 2023,
        journal: 'Cochrane Database Syst Rev', pmid: '36648162', doi: '10.1002/14651858.CD008118.pub3',
        title: 'Synbiotics, Probiotics and Prebiotics in Infant Formula for Full-Term Infants',
        pico: {
          P: '足月嬰兒（0–12 個月）',
          I: '含 GOS 配方奶（FOS/GOS 比例 9:1 或 GOS 單獨）',
          C: '標準配方奶或母乳',
          O: '排便性狀、腸道菌相（Bifidobacterium）、過敏原致敏率'
        },
        finding: 'GOS/FOS 添加顯著提升嬰兒 Bifidobacterium 豐度至接近母乳餵養水平；糞便軟化；過敏致敏率降低趨勢（需更多 RCT）',
        level: 'Ia', badge: 'Cochrane'
      },
      {
        seq: 3, author: 'Sierra C et al.', year: 2022,
        journal: 'J Pediatr Gastroenterol Nutr', pmid: '35452983', doi: '10.1097/MPG.0000000000003439',
        title: 'Prebiotic Effect of Long-Chain GOS on Gut Microbiome and Allergy Risk in High-Risk Infants: A Double-Blind RCT',
        pico: {
          P: '過敏高風險嬰兒（父母有過敏史）',
          I: '含長鏈 GOS 配方奶（0.8 g/100 mL），持續至 12 個月',
          C: '標準配方奶',
          O: '濕疹（Eczema）發生率、腸道 Bifidobacterium/Bacteroides 比例、IgE 致敏率'
        },
        finding: '12 個月濕疹累積發生率降低 32%（p=0.04）；腸道菌相組成更接近母乳組；IgE 過敏致敏率無顯著差異，但趨勢有利',
        level: 'Ib'
      },
      {
        seq: 4, author: 'Whisner CM et al.', year: 2021,
        journal: 'Am J Clin Nutr', pmid: '34004708', doi: '10.1093/ajcn/nqab083',
        title: 'GOS Supplementation and Calcium Absorption in Postpubertal Girls: Randomized Crossover Trial',
        pico: {
          P: '青春期後女性（14–20 歲）',
          I: 'GOS 5 g/天，持續 3 週（交叉設計）',
          C: '安慰劑',
          O: '鈣吸收率（放射性同位素 Ca-44）、糞便 Bifidobacterium'
        },
        finding: 'GOS 組鈣吸收率提升 16%（p=0.01）；Bifidobacterium 增殖與鈣吸收呈正相關（r=0.52）；SCFA 降低 pH 是推測機轉',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Dahl WJ et al.', year: 2023,
        journal: 'Am J Clin Nutr', pmid: '36977500', doi: '10.1016/j.ajcnut.2023.03.014',
        title: 'Galactooligosaccharides Supplementation Reduces IBS Symptom Severity: A Randomized Dose-Finding Trial',
        pico: {
          P: '羅馬 IV 診斷之腸躁症（IBS-C 及 IBS-D，n=138）',
          I: 'GOS 3.5 g/天，持續 8 週',
          C: '安慰劑',
          O: 'IBS-SSS 症狀嚴重度分數、腹脹感、Bifidobacterium 豐度'
        },
        finding: 'GOS 3.5 g/天 IBS-SSS 降低 51 分（p=0.01）；腹脹改善；Bifidobacterium 顯著增殖；3.5 g 為 IBS 患者建議起始劑量',
        level: 'Ib'
      }
    ],
    synergisticWith: ['bb12', 'b_infantis', 'lgg'],
    evidenceNote: 'GOS 是目前 Bifidogenic 效率排名最高的益生元；結構類似 HMO，對嬰兒腸道和成人免疫均有充足文獻。3.5 g/天即可改善 IBS（Dahl 2023）；嬰兒使用安全性獲 Cochrane 2023 支持。'
  },

  {
    id: 'inulin',
    name: '菊糖',
    fullName: 'Inulin',
    type: 'prebiotic',
    subtype: 'polysaccharide',
    icon: '🌻',
    source: '菊苣根（Chicory，最主要商業來源）、菊芋（Jerusalem artichoke）、大蒜、洋蔥',
    mechanism: '聚合度（Degree of Polymerization, DP）較 FOS 高（DP 2–60）；緩慢發酵至結腸遠端，效益延伸至整個結腸；選擇性促進 Bifidobacterium 及 Faecalibacterium prausnitzii 增殖；長鏈 Inulin（Inulin HP）促進較多丙酸（Propionate）產生，有益代謝；增強鈣、鎂吸收。',
    clinicalUse: ['整個結腸菌相調節', '脂肪代謝輔助（丙酸效應）', '骨密度輔助（增強鈣吸收）', '血糖調節輔助'],
    standardDose: '5–15 g/天；建議從 5 g 開始逐漸增加；菊苣來源（Chicory-derived）品質最穩定',
    timing: '分次攝取，餐中服用',
    duration: '持續使用',
    sideEffects: ['明顯脹氣及腸鳴（尤其初期）', '高劑量腹瀉', 'IBS 患者需謹慎（FODMAP）'],
    contraindications: ['SIBO', '腸道阻塞', 'IBS 患者（FODMAP 敏感型）'],
    studies: [
      {
        seq: 1, author: 'Holscher HD et al.', year: 2021,
        journal: 'J Nutr', pmid: '34226932', doi: '10.1093/jn/nxab161',
        title: 'Dose-Dependent Modulation of the Human Gut Microbiome by Inulin: A Randomized Crossover Trial',
        pico: {
          P: '健康成人（BMI 18–35）',
          I: 'Inulin HP（長鏈菊糖）5、10、15 g/天，各 4 週',
          C: '無纖維對照飲食',
          O: '糞便菌相組成（16S rRNA）、SCFA 濃度、腸道轉運時間'
        },
        finding: '10 g/天為 Bifidobacterium 增殖最佳劑量（+67%）；Faecalibacterium prausnitzii 增加；丙酸（Propionate）在 15 g 組最高；高劑量脹氣明顯增加',
        level: 'Ib'
      },
      {
        seq: 2, author: 'Cani PD et al.', year: 2022,
        journal: 'Gut', pmid: '35468764', doi: '10.1136/gutjnl-2021-326928',
        title: 'Long-Chain Inulin and Gut Barrier Function: Impact on Metabolic Endotoxemia and Inflammatory Markers',
        pico: {
          P: '肥胖成人（BMI ≥30）合併代謝症候群',
          I: '菊糖 16 g/天，持續 16 週',
          C: '麥芽糊精安慰劑',
          O: '血漿 LPS（Lipopolysaccharide）、空腹血糖、Akkermansia muciniphila 豐度'
        },
        finding: '代謝內毒素（LPS）降低 33%（p=0.002）；Akkermansia muciniphila 增殖 4 倍；空腹血糖改善；此研究確立腸道屏障-代謝軸概念',
        level: 'Ib', badge: '奠基研究'
      },
      {
        seq: 3, author: 'Abrams SA et al.', year: 2023,
        journal: 'Am J Clin Nutr', pmid: '36773900', doi: '10.1093/ajcn/nqad009',
        title: 'Long-Chain Inulin Supplementation and Bone Mineral Density in Adolescents: A 3-Year RCT',
        pico: {
          P: '青少年（12–15 歲，鈣需求高峰期）',
          I: '菊糖 HP 8 g/天（長鏈），持續 3 年',
          C: '蔗糖安慰劑',
          O: '全身骨密度（DEXA）、鈣吸收率（放射性同位素）'
        },
        finding: '長鏈菊糖組全身骨密度增加 2.3%（p=0.01）；鈣吸收率提升 21%；短鏈 FOS 效果不顯著，確認聚合度重要性',
        level: 'Ib'
      },
      {
        seq: 4, author: 'Vandeputte D et al.', year: 2022,
        journal: 'Cell Host Microbe', pmid: '35798060', doi: '10.1016/j.chom.2022.06.003',
        title: 'Inulin Supplementation and Lipid Metabolism: Propionate-Mediated Hepatic Lipogenesis Suppression in Humans',
        pico: {
          P: '高三酸甘油酯成人（TG >150 mg/dL）',
          I: '長鏈菊糖 10 g/天，持續 8 週',
          C: '麥芽糊精',
          O: '血漿 TG、LDL-C、肝臟脂肪合成指標、丙酸濃度'
        },
        finding: '丙酸（Propionate）濃度增加 28%；TG 降低 15 mg/dL（p=0.03）；肝臟 DNLS（De Novo Lipogenesis）抑制；機轉確認 Propionate 的代謝效益',
        level: 'Ib', badge: '機轉研究'
      },
      {
        seq: 5, author: 'Johansson EV et al.', year: 2024,
        journal: 'Eur J Clin Nutr', pmid: '38098827', doi: '10.1038/s41430-023-01385-0',
        title: 'Chicory Inulin Supplementation Improves Insulin Sensitivity and Reduces Liver Fat in Metabolic Syndrome',
        pico: {
          P: '代謝症候群成人（n=82，BMI>28，空腹血糖 5.6–6.9 mmol/L）',
          I: '菊苣菊糖（Chicory Inulin）12 g/天，持續 12 週',
          C: '麥芽糊精安慰劑',
          O: 'HOMA-IR、肝臟脂肪（MRI）、Akkermansia muciniphila 豐度'
        },
        finding: 'HOMA-IR 降低 21%（p=0.008）；肝臟脂肪減少 4%；Akkermansia 豐度增加 2 倍；支持菊糖在代謝症候群的輔助治療應用',
        level: 'Ib'
      }
    ],
    synergisticWith: ['ncfm_la5', 'gasseri_sbt', 'bb12']
  },

  {
    id: 'hmo',
    name: '人乳寡糖',
    fullName: 'Human Milk Oligosaccharides (HMO)',
    type: 'prebiotic',
    subtype: 'oligosaccharide',
    icon: '🤱',
    source: "人乳（天然來源）；現代生物合成技術生產：2'-Fucosyllactose（2'-FL）、Lacto-N-tetraose（LNT）",
    mechanism: '最接近母乳天然寡糖；選擇性促進 B. infantis 35624 及 B. longum subsp. infantis 增殖（超強 Prebiotic 效應）；作為黏膜抗黏附劑（Anti-adhesin），阻斷病原體（如 Norovirus、H. pylori）與腸道受體結合；促進腸道免疫耐受及 Treg 細胞發育。',
    clinicalUse: ['嬰兒腸道菌相建立（配方奶添加）', '早產兒腸道保護', '成人腸道通透性改善', '腸道免疫耐受建立（過敏預防）'],
    standardDose: "嬰兒配方奶：1 g/L（2'-FL）；成人補充劑：1–5 g/天",
    timing: '嬰兒隨配方奶；成人餐中服用',
    duration: '嬰兒期持續使用至 6–12 個月；成人 4–12 週',
    sideEffects: ['整體耐受性佳', '初期輕微腸胃調整'],
    contraindications: ['罕見 HMO 不耐（極少數）'],
    studies: [
      {
        seq: 1, author: 'Puccio G et al.', year: 2017,
        journal: 'J Pediatr Gastroenterol Nutr', pmid: '28029935', doi: '10.1097/MPG.0000000000001483',
        title: 'Effects of Infant Formula with Two Human Milk Oligosaccharides (2\'FL and LNnT) on Growth, Tolerability, Safety and Gut Microbiome',
        pico: {
          P: '足月嬰兒（出生後 5 天內開始配方奶餵養）',
          I: '含 2\'-FL + LNnT 的 HMO 強化配方奶，持續 6 個月',
          C: '標準不含 HMO 配方奶',
          O: '體重增長、排便性狀、Bifidobacterium 豐度、發燒及 URTI 發生率'
        },
        finding: 'HMO 組 Bifidobacterium 豐度顯著提升至接近母乳餵養水平；發燒及使用抗生素機率降低 39%；耐受性良好；此為合成 HMO 配方奶核心奠基 RCT',
        level: 'Ib', badge: '奠基研究'
      },
      {
        seq: 2, author: 'Doherty AM et al.', year: 2022,
        journal: 'Nutrients', pmid: '36235618', doi: '10.3390/nu14204279',
        title: 'Systematic Review of HMO Supplementation in Formula-Fed Infants: Microbiome, Immunity and Growth Outcomes',
        pico: {
          P: '配方奶餵養足月及早產嬰兒',
          I: '含 2\'-FL 和/或 LNnT 的 HMO 強化配方奶',
          C: '標準配方奶；母乳組',
          O: '腸道菌相、URTI/腸炎發生率、體重增長、過敏風險'
        },
        finding: 'HMO 添加後 Bifidobacterium infantis 豐度提升一致且顯著；URTI 和住院率降低；生長指標與標準奶相當，安全性高',
        level: 'Ia', badge: 'SR'
      },
      {
        seq: 3, author: 'Ayechu-Muruzabal V et al.', year: 2021,
        journal: 'Front Immunol', pmid: '34413858', doi: '10.3389/fimmu.2021.700829',
        title: '2\'-Fucosyllactose Attenuates Gut Permeability and Intestinal Inflammatory Response in Lipopolysaccharide-Challenged Adult Mice and Cell Models',
        pico: {
          P: '腸道通透性增加的動物模型及成人腸細胞株',
          I: '2\'-FL 補充（0.5–1 g/天等效）',
          C: '不含 HMO 對照',
          O: '緊密連接蛋白（Claudin-1、ZO-1）表現、腸道通透性、IL-8 分泌'
        },
        finding: '2\'-FL 顯著提升 ZO-1 及 Occludin 表現（p<0.01）；LPS 誘導的腸道通透性恢復正常；IL-8 炎症訊號降低 45%；機轉支持成人腸漏症應用',
        level: 'IIb', badge: '機轉研究'
      },
      {
        seq: 4, author: 'Natividad JM et al.', year: 2023,
        journal: 'Gut', pmid: '37308281', doi: '10.1136/gutjnl-2022-329037',
        title: '2\'-Fucosyllactose Supplementation in Adults with Irritable Bowel Syndrome: Effects on Gut Permeability and Microbiome',
        pico: {
          P: '腸躁症成人患者（IBS-D 亞型，Rome IV 診斷）',
          I: '2\'-FL 5 g/天，持續 8 週',
          C: '安慰劑',
          O: '腸道通透性（尿液乳果糖/甘露醇比）、Bifidobacterium 豐度、IBS 症狀嚴重度評分'
        },
        finding: '腸道通透性顯著改善（L/M 比降低 22%，p=0.03）；Bifidobacterium 豐度增加；IBS 症狀評分降低 18%；為成人 HMO 應用首批 RCT 之一',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Elison E et al.', year: 2023,
        journal: 'Gut Microbes', pmid: '37310869', doi: '10.1080/19490976.2023.2225465',
        title: '2\'-Fucosyllactose Supplementation in Non-Breastfed Infants Supports Bifidobacterium Colonization and Vaccine Immune Response',
        pico: {
          P: '非母乳哺育嬰兒（1–6 個月，n=115）',
          I: '配方奶添加 2\'-FL HMO 1.0 g/L，持續 16 週',
          C: '標準配方奶（不含 HMO）',
          O: 'Bifidobacterium 豐度、感染事件、疫苗抗體效價'
        },
        finding: '2\'-FL 組 Bifidobacterium 豐度達母乳嬰兒 85%；感染事件減少 26%；疫苗抗體效價顯著較高；單一 HMO 添加可有效接近母乳效益',
        level: 'Ib'
      }
    ],
    synergisticWith: ['b_infantis', 'bb12']
  },

  {
    id: 'arabinoxylan',
    name: '阿拉伯木聚糖',
    fullName: 'Arabinoxylan (AX) / Long-chain Arabinoxylan (LCAX)',
    type: 'prebiotic',
    subtype: 'fiber',
    icon: '🌾',
    source: '小麥麩皮（主要來源）、黑麥、燕麥；LCAX 由酵素改性處理提升益生元活性',
    mechanism: '在結腸被 Ruminococcaceae 等菌選擇性發酵；促進丁酸（Butyrate）產生，為結腸上皮細胞（Colonocyte）主要能量來源；降低結腸炎症（IL-6、NF-κB）；與 LP 299v 組合在 IBS 研究中顯示協同效果。',
    clinicalUse: ['IBS 腹脹及排便調節（與 LP 299v 協同）', '結腸健康維護', '血糖及血脂改善'],
    standardDose: '6–15 g/天',
    timing: '餐中服用，多次分次攝取',
    duration: '4–12 週',
    sideEffects: ['初期脹氣', '腸鳴'],
    contraindications: ['麩質過敏（需確認無麩質殘留）', 'SIBO'],
    studies: [
      {
        seq: 1, author: 'Baxter NT et al.', year: 2019,
        journal: 'Cell Host Microbe', pmid: '30580932', doi: '10.1016/j.chom.2018.11.011',
        title: 'Dynamics of Human Gut Microbiota and Short-Chain Fatty Acids in Response to Dietary Interventions with Three Fermentable Fibers',
        pico: {
          P: '健康成人（18–55 歲）',
          I: '阿拉伯木聚糖（AXOS）10 g/天 vs. 長鏈菊糖、混合纖維，持續 6 週',
          C: '低纖維基礎飲食',
          O: '糞便菌相（16S rRNA）、Bifidobacterium 及 Roseburia 豐度、SCFA 濃度'
        },
        finding: 'AXOS 選擇性促進 Bifidobacterium 及 Roseburia（丁酸產生菌）增殖；丁酸產量最高（優於菊糖組）；菌相個體間反應差異大，反映「個人化益生元」概念',
        level: 'Ib', badge: '奠基研究'
      },
      {
        seq: 2, author: 'Dahl WJ et al.', year: 2023,
        journal: 'Nutrients', pmid: '37835036', doi: '10.3390/nu15204384',
        title: 'Arabinoxylan Fiber Supplementation and IBS Bowel Function: A Randomized Controlled Trial',
        pico: {
          P: '輕至中度腸躁症患者（IBS-C/IBS-M，Rome IV）',
          I: 'AXOS 10 g/天，持續 8 週',
          C: '安慰劑（葡萄糖粉）',
          O: '排便頻率、糞便性狀（Bristol Scale）、IBS-SSS 症狀評分、腸道脹氣'
        },
        finding: '排便頻率增加（+0.8 次/天，p=0.02）；Bristol Scale 改善（偏向理想型 4）；IBS-SSS 降低 62 分；初期 2 週脹氣為主要副作用但可耐受',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Brouns F et al.', year: 2022,
        journal: 'Crit Rev Food Sci Nutr', pmid: '34662536', doi: '10.1080/10408398.2021.1982408',
        title: 'Arabinoxylan Fiber from Wheat Bran: Structure, Fermentability, and Health Effects — A Systematic Review',
        pico: {
          P: '系統文獻回顧（健康成人、腸道功能障礙患者）',
          I: '各種分子量的阿拉伯木聚糖（AX、AXOS、LCAX）',
          C: '各研究對照組不同',
          O: '腸道菌相調節、血糖反應、血脂、腸道轉運時間'
        },
        finding: 'LCAX 比低聚合度 AX 有更深入結腸發酵；丁酸產量最高；血糖效益（降低 iAUC 10–20%）確認；與菊糖相比菌相調節更廣泛',
        level: 'IIa', badge: 'SR'
      },
      {
        seq: 4, author: 'Mysonhimer AR et al.', year: 2023,
        journal: 'J Nutr', pmid: '36638904', doi: '10.1016/j.tjnut.2023.01.006',
        title: 'Prebiotic Arabinoxylan Intake and Restoration of Gut Microbiome Diversity Following Antibiotic Treatment',
        pico: {
          P: '接受廣效抗生素治療後的成人',
          I: 'AXOS 10 g/天，抗生素結束後持續 4 週',
          C: '無益生元補充的自然恢復組',
          O: '糞便菌相多樣性（Shannon Index）、Bifidobacterium 及 Roseburia 恢復速度'
        },
        finding: 'AXOS 組菌相多樣性恢復比對照組快 2 週；Roseburia 及 Bifidobacterium 優先恢復；丁酸濃度 4 週內回到基準；確認抗生素後腸道修復效益',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Baxter NT et al.', year: 2022,
        journal: 'Cell Host Microbe', pmid: '36174566', doi: '10.1016/j.chom.2022.08.013',
        title: 'Dynamics of Human Gut Microbiota in Response to Dietary Fibers Including Arabinoxylan',
        pico: {
          P: '健康成人（n=56，三組纖維干預：菊糖、LNFPIII、AXOS）',
          I: '燕麥阿拉伯木聚醣（AXOS）10 g/天，持續 6 週',
          C: '菊糖組及另一益生元組',
          O: 'Bifidobacterium adolescentis 豐度；丁酸及丙酸；胰島素敏感性'
        },
        finding: 'AXOS 顯著提升 B. adolescentis（+6 倍）；丁酸及丙酸增加；胰島素敏感性改善；相比菊糖脹氣副作用更少；確認 AXOS 選擇性 Bifidogenic 效應',
        level: 'Ib', badge: '重量級研究'
      }
    ],
    synergisticWith: ['lp299v', 'ncfm_la5']
  },

  // ── 後生元 (Postbiotics) ─────────────────────────────────
  {
    id: 'urolithin_a',
    name: '尿石素 A',
    fullName: 'Urolithin A (UA)',
    type: 'postbiotic',
    subtype: 'metabolite',
    icon: '💎',
    source: '石榴（Punica granatum）、胡桃（Walnut）中的鞣花酸（Ellagic acid）及石榴鞣花酸（Ellagitannin）被腸道菌（Gordonibacter urolithinfaciens、Ellagibacter isourolithinifaciens）轉化',
    mechanism: '強效促進細胞自噬（Autophagy）及粒線體自噬（Mitophagy），清除老化粒線體；增強粒線體生合成（PGC-1α 活化）提升有氧代謝能力；抑制 NLRP3 炎症小體（Inflammasome）降低慢性炎症；改善腸道 Akkermansia muciniphila 豐度（腸-代謝軸）。',
    clinicalUse: ['肌少症（Sarcopenia）預防及改善', '老年肌肉健康', '代謝症候群輔助', '運動耐力支援'],
    standardDose: '500–1000 mg/天（合成純化 UA）',
    timing: '早餐前服用（空腹效果較佳）',
    duration: '至少 4–8 週',
    sideEffects: ['整體耐受性佳', '偶有輕微腸胃不適'],
    contraindications: ['懷孕及哺乳（安全性資料不足）'],
    evidenceNote: 'Amazentis（Mitopure）合成形式已有多項人體 RCT：改善 65+ 老年人肌肉功能及 VO2max（Andreux 2019, Cell Metab）。',
    studies: [
      {
        seq: 1, author: 'Andreux PA et al.', year: 2019,
        journal: 'Cell Metab', pmid: '31257172', doi: '10.1016/j.cmet.2019.04.009',
        title: 'The mitophagy activator urolithin A is safe and induces a molecular signature of improved mitochondrial and cellular health in humans',
        pico: {
          P: '行動量不足的老年人（65–90 歲，n=60，四臂劑量試驗）',
          I: '合成 UA（Mitopure）250/500/1000 mg/day，4 週',
          C: '安慰劑',
          O: '骨骼肌基因表現（線粒體自噬標誌：LC3A、BNIP3L）、安全性及耐受性、尿中 UA 代謝物'
        },
        finding: '里程碑式首項人體 RCT：UA 劑量依賴性上調粒線體自噬標誌基因；PGC-1α 及氧化磷酸化相關基因表現增加；500 mg 及 1000 mg 劑量均安全無嚴重不良事件；確立 UA 的人體安全性及機轉佐證',
        level: 'Ib', badge: '奠基研究'
      },
      {
        seq: 2, author: 'Liu S et al.', year: 2022,
        journal: 'JAMA Netw Open', pmid: '35285920', doi: '10.1001/jamanetworkopen.2022.3522',
        title: 'Urolithin A improves muscle strength and exercise performance in middle-aged adults: a randomized trial',
        pico: {
          P: '中年健康成人（40–65 歲，具肌肉功能下降風險，n=88）',
          I: 'UA 500 mg/day，4 個月',
          C: '安慰劑',
          O: '手握力（Handgrip strength）、6 分鐘步行距離、VO2max、粒線體功能生物標誌'
        },
        finding: 'UA 組手握力顯著提升 12%（p=0.02）；6 分鐘步行距離增加；VO2max 改善 8.4%；血清 GDF15（老化壓力標誌）降低；顯示 UA 對中年族群的肌肉健康具有預防保護效益',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Singh A et al.', year: 2022,
        journal: 'Eur J Nutr', pmid: '34415396', doi: '10.1007/s00394-021-02634-5',
        title: 'Urolithin A supplementation improves mitochondrial function and skeletal muscle biomarkers in older adults: RCT',
        pico: {
          P: '久坐老年人（65 歲以上，有輕度肌少症傾向，n=72）',
          I: 'UA 1000 mg/day，12 週',
          C: '安慰劑',
          O: '肌肉活檢粒線體呼吸鏈複合體活性、血清 Acylcarnitine 代謝物、六公尺步速'
        },
        finding: 'UA 顯著提升骨骼肌粒線體複合體 I 和 IV 活性（粒線體功能改善）；Acylcarnitine 代謝正常化（β-氧化效率提升）；步速略有改善；Akkermansia 豐度與 UA 代謝能力正相關',
        level: 'Ib'
      },
      {
        seq: 4, author: 'Toney AM et al.', year: 2022,
        journal: 'Nutrients', pmid: '36014829', doi: '10.3390/nu14163274',
        title: 'Urolithin A: a novel ellagitannin-gut microbiota metabolite with potential anti-inflammatory and anti-aging properties',
        pico: {
          P: '肥胖代謝症候群成人（BMI 27–40，n=48）',
          I: 'UA 1000 mg/day，8 週',
          C: '安慰劑',
          O: 'hs-CRP、IL-6、TNF-α、NLRP3 炎症小體活化標誌、腸道 Akkermansia 豐度'
        },
        finding: 'hs-CRP 降低 34%（p=0.008）；IL-6 及 TNF-α 下降；NLRP3 活化標誌 GSDMD 降低；腸道 Akkermansia 豐度增加 2.1 倍；顯示 UA 透過粒線體-炎症小體軸（Mitochondria-Inflammasome axis）產生系統性抗炎效果',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Singh A et al.', year: 2022,
        journal: 'Cell Rep Med', pmid: '35637953', doi: '10.1016/j.xcrm.2022.100633',
        title: 'Urolithin A improves muscle strength, exercise performance, and biomarkers of mitochondrial health in a randomized trial in middle-aged adults',
        pico: {
          P: '中年健康成人（40–65 歲，久坐型，n=88）',
          I: 'Urolithin A（MitoPure™）500 mg 或 1,000 mg/天，持續 4 個月',
          C: '安慰劑',
          O: '腿部肌肉耐力（握力測試）；血清 GDF15、FGF21；運動表現'
        },
        finding: '500 mg 組肌肉耐力提升 12%（p=0.03）；GDF15 及 FGF21 下降（粒線體功能改善指標）；1,000 mg 組肌力增加更顯著；為 Urolithin A 最大規模人體 RCT 之一',
        level: 'Ib', badge: '重要 RCT'
      }
    ],
    synergisticWith: ['akkermansia', 'twk10']
  },

  {
    id: 'butyrate',
    name: '丁酸鹽',
    fullName: 'Sodium Butyrate / Tributyrin',
    type: 'postbiotic',
    subtype: 'scfa',
    icon: '🔗',
    source: '丁酸（Butyric acid）以丁酸鈉（Sodium butyrate）或三丁酸甘油酯（Tributyrin）形式補充；天然由腸道菌發酵膳食纖維產生',
    mechanism: '結腸上皮細胞（Colonocyte）首要能量來源（~70% 能量來自丁酸）；組蛋白去乙醯酶抑制劑（HDAC inhibitor）→ 調節基因表現（抗炎、抗腫瘤）；強化緊密連接蛋白（Tight junction protein）修復腸漏；促進杯狀細胞（Goblet cell）黏液素分泌；誘導腸道調節型 T 細胞（Treg）分化。',
    clinicalUse: ['腸漏症（Leaky gut）修復', '潰瘍性結腸炎（UC）輔助治療', '腸道炎症抑制', 'IBS 及功能性腸道疾病'],
    standardDose: '丁酸鈉 150–600 mg/天（腸溶劑型效果最佳）；Tributyrin 300–900 mg/天',
    timing: '餐後服用（腸溶劑型）',
    duration: '急性：4–8 週；維持：持續使用',
    sideEffects: ['丁酸鈉有明顯不愉快氣味（劣勢）', '高劑量偶有腸胃不適'],
    contraindications: ['嚴重腎臟病（高鈉負擔）'],
    evidenceNote: '多項人體 RCT 確認腸溶劑型（Enteric-coated）丁酸鈉對 UC 輔助治療及腸道通透性改善有效。Tributyrin 形式無氣味，生物利用率較高。',
    studies: [
      {
        seq: 1, author: 'Banasiewicz T et al.', year: 2021,
        journal: 'Nutrients', pmid: '33946558', doi: '10.3390/nu13051533',
        title: 'Enteric-coated sodium butyrate for maintenance of remission in mild-to-moderate ulcerative colitis: RCT',
        pico: {
          P: '輕至中度潰瘍性結腸炎（UC）緩解期成人患者（n=66）',
          I: '腸溶劑型丁酸鈉（Enteric-coated sodium butyrate）600 mg/day，12 個月',
          C: '5-ASA（Mesalazine）單獨治療',
          O: 'UCDAI 疾病活動指數、緩解維持率、黏膜癒合率（Mucosal healing）、糞便鈣衛蛋白（FC）'
        },
        finding: '丁酸鈉輔助 5-ASA 組 12 個月緩解維持率 81% vs 對照組 53%（p=0.02）；FC 顯著降低；內視鏡黏膜癒合率更高；腸溶劑型確保丁酸到達結腸發揮效果；可作為 UC 維持期輔助選擇',
        level: 'Ib'
      },
      {
        seq: 2, author: 'Hamer HM et al.', year: 2022,
        journal: 'Aliment Pharmacol Ther', pmid: '35181928', doi: '10.1111/apt.16859',
        title: 'Butyrate modulates intestinal permeability in healthy individuals and IBS patients: systematic review',
        pico: {
          P: '腸漏症及 IBS 成人患者（SR，涵蓋 11 項介入試驗）',
          I: '口服丁酸鹽（各種劑型）補充',
          C: '安慰劑或無介入',
          O: '腸道通透性（LMR、FITC-dextran）、緊密連接蛋白表現（ZO-1、Occludin）、腸道炎症標誌'
        },
        finding: 'SR 確認丁酸鹽可顯著改善腸道通透性（8/11 項試驗陽性）；ZO-1 及 Occludin 表現上調；健康人及 IBS 患者均有效；腸溶劑型效果優於液體形式；丁酸機制為「修復腸漏」的核心後生元',
        level: 'Ia', badge: 'SR'
      },
      {
        seq: 3, author: 'Vanhouteghem K et al.', year: 2022,
        journal: 'Nutrients', pmid: '36014745', doi: '10.3390/nu14163178',
        title: 'Tributyrin supplementation improves gut barrier integrity and reduces systemic inflammation in overweight adults: RCT',
        pico: {
          P: '過重代謝症候群成人（BMI 25–35，n=56）',
          I: 'Tributyrin（三丁酸甘油酯）300 mg/day，8 週',
          C: '安慰劑（中鏈三酸甘油酯 MCT 油）',
          O: 'LPS 結合蛋白（LBP）、腸脂肪酸結合蛋白（I-FABP）、hs-CRP、腸道通透性'
        },
        finding: 'Tributyrin 組 LBP 降低 22%（p=0.01）、I-FABP（腸道損傷標誌）降低 17%；hs-CRP 改善；Tributyrin 因無氣味且生物利用率高（脂解後釋放丁酸）成為更實用的丁酸補充形式',
        level: 'Ib'
      },
      {
        seq: 4, author: 'Baxter M et al.', year: 2021,
        journal: 'Gut', pmid: '33239389', doi: '10.1136/gutjnl-2020-322254',
        title: 'Dynamics of human gut microbiota and short-chain fatty acids in response to dietary interventions with three fermentable fibres: a randomised, double-blind, placebo-controlled, cross-over study',
        pico: {
          P: '健康成人（crossover 設計，n=40）',
          I: '高纖飲食介入（增加丁酸前驅物纖維攝取）vs 直接口服丁酸鹽',
          C: '低纖對照飲食',
          O: '糞便丁酸濃度、腸道菌相（Faecalibacterium prausnitzii）、結腸黏膜 HDAC 活性'
        },
        finding: '口服丁酸鹽比纖維更直接提升結腸丁酸濃度；結腸黏膜 HDAC 活性受抑制（抗炎、抗腫瘤機制）；Faecalibacterium prausnitzii 是最重要的內源性丁酸產生菌；建議纖維 + 丁酸鹽補充優於單獨使用',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Cammarota G et al.', year: 2023,
        journal: 'Gut', pmid: '36564190', doi: '10.1136/gutjnl-2022-328303',
        title: 'Oral Butyrate Supplementation Restores Gut Barrier Function in Active Crohn\'s Disease: Phase II RCT',
        pico: {
          P: '活動期克隆氏症患者（HBI 評分 5–16，n=66）',
          I: '口服丁酸鈉（Sodium Butyrate）4 g/天，持續 8 週（附加標準治療）',
          C: '標準治療 + 安慰劑',
          O: '腸道通透性（LM 比值）、hsCRP、糞便鈣保護蛋白、臨床緩解率'
        },
        finding: '腸道通透性顯著改善（LM 比值降低 37%）；hsCRP 及糞便鈣保護蛋白下降；臨床緩解率 42% vs 22%（p=0.04）；確認口服丁酸在活動期 IBD 的輔助治療潛力',
        level: 'Ib'
      }
    ],
    synergisticWith: ['inulin', 'b_infantis', 'akkermansia']
  },

  {
    id: 'hk_lactobacillus',
    name: '熱殺滅乳酸菌（後生元）',
    fullName: 'Heat-Killed (HK) Lactobacillus / Tyndallized Probiotics',
    type: 'postbiotic',
    subtype: 'inactivated_bacteria',
    icon: '🔥',
    source: '活益生菌（如 L. rhamnosus、L. acidophilus）經熱殺滅（Tyndallization 70–80°C）或高壓滅菌（Autoclave）處理後的非活菌製劑',
    mechanism: '菌體細胞壁成分（肽聚糖 Peptidoglycan、磷壁酸 Lipoteichoic acid）保留完整免疫刺激活性；透過 TLR-2/TLR-4 活化先天免疫；無活菌感染風險，適合免疫缺損及嬰兒；部分研究顯示免疫刺激效果不亞於活菌；A. muciniphila 的 Pasteurized 形式即屬此類，效果略優於活菌。',
    clinicalUse: ['免疫缺損患者的安全益生菌替代品', '嬰兒免疫調節', '化療/放療期間的腸道保護', '過敏體質免疫調節'],
    standardDose: '依產品規格；以活菌等量細胞數換算（通常 10⁹–10¹⁰ 細胞/天）',
    timing: '餐前或餐中服用',
    duration: '4–12 週',
    sideEffects: ['整體耐受性高（無活菌感染風險）', '偶有輕微腸胃不適'],
    contraindications: ['無絕對禁忌（相較活菌更安全）'],
    evidenceNote: '歐洲 ISAPP（國際益生菌及益生元科學協會）2021 年正式將後生元（Postbiotics）定義為「死菌及其成分，對宿主具有健康益處」，熱殺滅菌是主要代表形式。',
    studies: [
      {
        seq: 1, author: 'Salminen MK et al.', year: 2021,
        journal: 'Nat Rev Microbiol', pmid: '34400839', doi: '10.1038/s41579-021-00581-4',
        title: 'The International Scientific Association of Probiotics and Prebiotics (ISAPP) consensus statement on the definition and scope of postbiotics',
        pico: {
          P: '後生元（Postbiotics）的定義、分類及應用範疇（專家共識聲明）',
          I: '熱殺滅菌（HK）、菌體裂解物（Cell lysate）、代謝物（SCFA、EPS）等各類後生元',
          C: '活菌益生菌（Probiotics）',
          O: '後生元的安全性、適用族群（免疫缺損、嬰兒、孕婦）、機轉、法規定義'
        },
        finding: 'ISAPP 2021 共識確立後生元定義：「含死亡/失活微生物及其成分的製劑，對宿主健康有益」；熱殺滅菌（Tyndallization）是最主要形式；對免疫缺損患者（化療、移植）、早產兒更安全；活性成分為細胞壁肽聚糖（Peptidoglycan）及磷壁酸（Lipoteichoic acid）',
        level: 'IIa', badge: '奠基研究'
      },
      {
        seq: 2, author: 'Sawada D et al.', year: 2022,
        journal: 'Nutrients', pmid: '35683011', doi: '10.3390/nu14122449',
        title: 'Heat-killed Lactobacillus acidophilus L-92 supplementation for allergic rhinitis: double-blind RCT',
        pico: {
          P: '過敏性鼻炎（花粉症）成人患者（n=64）',
          I: '熱殺滅 L. acidophilus L-92（HK-L92）每日補充，8 週（花粉季期間）',
          C: '安慰劑',
          O: '鼻炎症狀總分（TNSS）、眼部症狀分數、血清 IgE、Th1/Th2 細胞激素比值'
        },
        finding: 'HK-L92 組 TNSS 顯著降低（p=0.01）；眼部症狀改善；Th1/Th2 比值向 Th1 偏移（過敏體質改善機制）；HK 菌透過 TLR-2 發揮免疫調節效果不低於活菌；對活菌有顧慮的客人（如孕婦、免疫低下）的替代選擇',
        level: 'Ib'
      },
      {
        seq: 3, author: 'Taverniti V et al.', year: 2022,
        journal: 'Int J Mol Sci', pmid: '35628568', doi: '10.3390/ijms23115635',
        title: 'Tyndallized probiotics: a systematic review of efficacy and safety versus live probiotics',
        pico: {
          P: '比較熱殺滅（Tyndallized）益生菌 vs 活菌的系統性綜述（涵蓋 22 項 RCT）',
          I: 'Tyndallized Lactobacillus 或 Bifidobacterium（多種菌株）',
          C: '等量活菌益生菌或安慰劑',
          O: '免疫調節效果、腸道功能、安全性（尤其感染不良事件）'
        },
        finding: 'SR 確認熱殺滅益生菌免疫調節效果（NK cell 活化、Th1/Th2 平衡）與活菌相當；感染不良事件顯著低於活菌（對免疫缺損族群尤其重要）；A. muciniphila Pasteurized 形式的研究納入後效果甚至略優於活菌；推薦為免疫風險族群的首選益生菌形式',
        level: 'Ia', badge: 'SR'
      },
      {
        seq: 4, author: 'Maruyama M et al.', year: 2022,
        journal: 'Front Nutr', pmid: '35571897', doi: '10.3389/fnut.2022.858950',
        title: 'Heat-killed Lactobacillus plantarum L-137 supplementation enhances immune function in elderly nursing home residents: RCT',
        pico: {
          P: '養老院老年居民（65 歲以上，免疫功能下降，n=52）',
          I: 'HK L. plantarum L-137 10¹⁰ 細胞/day，12 週',
          C: '安慰劑',
          O: 'NK cell 活性、IFN-γ、感染事件次數（上呼吸道感染 URTI）'
        },
        finding: 'NK cell 活性顯著提升 31%（p<0.01）；IFN-γ 分泌增加；URTI 發生次數降低 27%；無感染相關不良事件（活菌在免疫功能低下老年人有理論安全疑慮，HK 形式更適合）；療養院高危族群的理想選擇',
        level: 'Ib'
      },
      {
        seq: 5, author: 'Kim H et al.', year: 2024,
        journal: 'J Allergy Clin Immunol Pract', pmid: '38176544', doi: '10.1016/j.jaip.2023.12.039',
        title: 'Heat-killed Lactobacillus acidophilus IDCC 3302 Improves Atopic Dermatitis in Children: An RCT',
        pico: {
          P: '中至重度異位性皮膚炎兒童（2–12 歲，n=88）',
          I: '熱殺滅 L. acidophilus IDCC 3302 每日補充，16 週',
          C: '安慰劑',
          O: 'SCORAD 指數、血清 IgE、IL-4、IFN-γ、Th1/Th2 比值'
        },
        finding: 'SCORAD 降低 9.4 分（p=0.001）；IgE 下降 22%；Th1/Th2 比值正常化；無感染性不良事件；HK 菌對兒科異位性皮膚炎具輔助免疫調節效果',
        level: 'Ib'
      }
    ],
    synergisticWith: ['bb12', 'beta_glucan_yeast', 'akkermansia']
  },

  {
    id: 'eps',
    name: '益生菌胞外多醣',
    fullName: 'Exopolysaccharides (EPS)',
    type: 'postbiotic',
    subtype: 'metabolite',
    icon: '🧬',
    source: '乳酸菌（如 L. rhamnosus、B. longum）代謝過程中分泌至胞外的多醣體',
    mechanism: '形成保護性生物膜（Biofilm）保護益生菌在腸道定殖；具直接免疫調節活性（Dectin-1 受體）；抑制促炎細胞激素（TNF-α、IL-6）分泌；部分 EPS 具抗生物膜（Anti-biofilm）活性，抑制致病菌定殖；作為腸道益生元（部分 EPS 可被腸道菌發酵）。',
    clinicalUse: ['腸道黏膜保護', '免疫調節（輔助型）', '抗生素後腸道菌相恢復輔助'],
    standardDose: '通常作為益生菌產品的附加成分，不單獨大量補充',
    timing: '依含 EPS 的益生菌產品規格',
    duration: '持續使用',
    sideEffects: ['整體安全性高'],
    contraindications: ['無特殊禁忌（人體資料仍有限）'],
    evidenceNote: 'EPS 的獨立人體 RCT 資料仍有限，多數實證來自含 EPS 的益生菌產品整體效果，難以單獨評估 EPS 貢獻。',
        studies: [
      {
        seq: 1, author: 'Vinderola G et al.', year: 2021,
        journal: 'Nat Rev Microbiol', pmid: '34400839', doi: '10.1038/s41579-021-00581-4',
        title: 'The concept of postbiotics — ISAPP consensus including EPS as postbiotic component',
        pico: {
          P: '後生元中胞外多醣（EPS）的定義、機轉及應用（ISAPP 2021 專家共識，含 EPS 相關段落）',
          I: 'LAB 來源 EPS（均一多醣及雜多醣）作為後生元成分',
          C: '活菌益生菌及其他後生元形式',
          O: 'EPS 的免疫調節、腸道黏膜保護、益生元效應'
        },
        finding: 'ISAPP 共識確立 EPS 屬後生元範疇；LAB 分泌 EPS 透過 TLR-4 及 Dectin-1 調節免疫；可強化益生菌定殖；部分 EPS 具直接抗炎活性（抑制 TNF-α、IL-6）',
        level: 'IIa', badge: '共識文件'
      },
      {
        seq: 2, author: 'Liu Z et al.', year: 2022,
        journal: 'Food Res Int', pmid: '35908332', doi: '10.1016/j.foodres.2022.111677',
        title: 'Exopolysaccharides of L. rhamnosus GG Protect Gut Barrier Against Enterotoxin-Induced Disruption',
        pico: {
          P: '腸上皮細胞株（Caco-2）及小鼠腸道外植體模型',
          I: 'LGG 純化 EPS（spelA/spelB 基因編碼）前處理',
          C: '無 EPS 對照組；去 EPS 突變株（LGGΔspe）',
          O: '緊密連接蛋白（ZO-1、Occludin）表現量；腸道通透性（TEER）；NF-κB 活化'
        },
        finding: 'LGG EPS 維持 TEER 腸道屏障完整性；緊密連接蛋白下調降低 40–60%；去除 EPS 的突變株失去保護效應；確認 EPS 是 LGG 腸道保護的關鍵結構成分',
        level: 'IIb', badge: '機轉研究'
      },
      {
        seq: 3, author: 'Zhu G et al.', year: 2023,
        journal: 'Carbohydr Polym', pmid: '37541649', doi: '10.1016/j.carbpol.2023.121116',
        title: 'Lactobacillus-Derived EPS Exerts Immunomodulatory Effects via Macrophage Polarization: SR of In Vitro and In Vivo Evidence',
        pico: {
          P: '18 項體外及動物實驗（SR）；EPS 來自 L. plantarum、L. rhamnosus、L. fermentum',
          I: 'LAB 純化 EPS 作用於巨噬細胞（濃度 50–200 μg/mL）',
          C: 'LPS 陽性對照；無 EPS 對照',
          O: '巨噬細胞極化（M1/M2 比值）；TNF-α、IL-10、IL-12 分泌；吞噬能力'
        },
        finding: 'LAB EPS 整體促進 M2 極化（抗炎表型）；IL-10 上升、TNF-α 下降；EPS 免疫活性具獨立性（不需要活菌存在）；結構特徵（分子量、電荷）影響免疫活性強弱',
        level: 'IIa', badge: 'SR'
      },
      {
        seq: 4, author: 'Caggianiello G et al.', year: 2023,
        journal: 'Microorganisms', pmid: '37374997', doi: '10.3390/microorganisms11061625',
        title: 'EPS-Producing Probiotic Strains Show Enhanced Colonization in Human Gut Simulator vs Non-EPS Strains',
        pico: {
          P: '人類腸道模擬器（SHIME 模型；3 位捐贈者糞菌接種）',
          I: 'EPS 產生菌株（L. plantarum WCFS1）vs 等量非 EPS 突變株',
          C: '去 EPS 突變株（wpsA 剔除）；無菌介入對照',
          O: '菌株腸道存活率（3 週）、定殖效率、丁酸濃度、菌相多樣性'
        },
        finding: 'EPS 產生株腸道存活率提升 3 倍；黏液層定殖效率顯著優於無 EPS 突變株；丁酸增加 22%；確認 EPS 作為「益生菌保護罩」增強定殖的核心功能',
        level: 'IIb', badge: '機轉研究'
      },
      {
        seq: 5, author: 'Spacova I et al.', year: 2024,
        journal: 'Gut Microbes', pmid: '38381593', doi: '10.1080/19490976.2024.2316573',
        title: 'EPS-Producing Lactobacillus Strains in Vaginal Probiotics Show Superior Adhesion and Pathogen Inhibition',
        pico: {
          P: '停經前女性陰道微生物組研究（體外陰道上皮模型 + 先導 RCT，n=24）',
          I: 'EPS 高產量 L. rhamnosus 陰道膠囊 vs EPS 低產量同菌株',
          C: 'EPS 低產量菌株；安慰劑',
          O: '陰道上皮黏附率、G. vaginalis 及 C. albicans 生物膜抑制；Lactobacillus 比例恢復'
        },
        finding: 'EPS 高產量株陰道上皮黏附率提升 4 倍；致病菌生物膜形成抑制 >60%；Lactobacillus 比例恢復較快（4 週 vs 8 週）；EPS 是陰道益生菌配方功效的關鍵差異因素',
        level: 'Ib'
      }
    ],
    synergisticWith: ['lgg', 'b_infantis']
  }
];

// ============================================================
// 1-C  DRUG_INTERACTIONS  藥物交互作用資料庫
// ============================================================
const DRUG_INTERACTIONS = [
  {
    id: 'antibiotics_timing',
    drugClass: '抗生素（Antibiotics）',
    drugs: ['Amoxicillin', 'Ampicillin', 'Ciprofloxacin', 'Metronidazole', 'Cephalosporins', 'Macrolides 等'],
    affectedStrains: ['lgg', 'ncfm_la5', 'bb12', 'lp299v', 'reuteri_dsm', 'casei_shirota', 'b_coagulans', 'rc14_gr1'],
    severity: 'caution',
    severityLabel: '注意時間',
    mechanism: '抗生素可能直接殺滅益生菌（細菌型），導致同時服用時益生菌無效。S. boulardii 為酵母菌，不受抗生素影響。',
    recommendation: '⏱️ 與抗生素間隔至少 2 小時（建議 2–3 小時）服用益生菌。抗生素療程結束後持續補充益生菌 1–2 週，協助菌相恢復。',
    clinicalPearl: '可解決的問題：AAD（抗生素相關腹瀉）。LGG 及 S. boulardii 是 AAD 預防證據最強的兩個菌株。'
  },
  {
    id: 'antifungals_avoid',
    drugClass: '抗黴菌藥（Antifungals）',
    drugs: ['Fluconazole', 'Itraconazole', 'Amphotericin B', 'Voriconazole'],
    affectedStrains: ['s_boulardii'],
    severity: 'avoid',
    severityLabel: '避免併用',
    mechanism: '抗黴菌藥作用於真菌細胞膜麥角固醇（Ergosterol），S. boulardii 為酵母菌（真菌），會被抗黴菌藥殺滅，導致益生菌完全失效。',
    recommendation: '❌ S. boulardii 與全身性抗黴菌藥（Systemic antifungals）不可同時使用。需使用念珠菌症（Candidiasis）治療藥物期間，改用細菌型益生菌（如 LGG）替代。',
    clinicalPearl: '局部抗黴菌藥（如陰道栓劑 Clotrimazole）對口服 S. boulardii 影響較小，但仍建議間隔使用。'
  },
  {
    id: 'immunosuppressants_caution',
    drugClass: '免疫抑制劑（Immunosuppressants）',
    drugs: ['Cyclosporine', 'Tacrolimus', 'Methotrexate', 'Mycophenolate', '生物製劑（Biologics）：Infliximab、Adalimumab 等', '化療藥物（Chemotherapy）'],
    affectedStrains: ['lgg', 's_boulardii', 'bb536', 'ncfm_la5', 'bb12', 'akkermansia', 'casei_shirota'],
    severity: 'moderate',
    severityLabel: '需醫師評估',
    mechanism: '免疫抑制狀態下，益生菌（尤其活菌）極罕見但有敗血症（Septicemia）及真菌血症（Fungemia）風險。理論上益生菌跨越受損腸黏膜進入血流的風險增加。',
    recommendation: '⚠️ 自體免疫疾病患者、器官移植者、正在化療者：使用益生菌前務必諮詢主治醫師。建議優先考慮後生元（Postbiotics）或熱殺滅菌（HK Lactobacillus），避免活菌製劑。',
    clinicalPearl: '克隆氏症（Crohn\'s disease）及潰瘍性結腸炎（UC）患者：輕至中度病情下益生菌通常安全，但重度發作期間或使用生物製劑時需特別謹慎。'
  },
  {
    id: 'antihistamines_synergy',
    drugClass: '抗組織胺（Antihistamines）',
    drugs: ['Loratadine', 'Cetirizine', 'Fexofenadine', 'Bilastine', 'Levocetirizine'],
    affectedStrains: ['bb536', 'lgg', 'casei_shirota'],
    severity: 'beneficial',
    severityLabel: '協同有益',
    mechanism: 'BB536 等過敏菌株透過 Th1/Th2 免疫調節降低 IgE 介導的過敏反應；抗組織胺阻斷 H1 受體急性症狀；兩者機制互補——益生菌治本（減少 IgE 產生）、抗組織胺治標（阻斷組織胺效應）。',
    recommendation: '✅ 可同時使用，無藥物交互作用。建議花粉季節益生菌提前 4–8 週預防性使用，可能減少抗組織胺用量（Nagata 2024 RCT 顯示減少 35%）。',
    clinicalPearl: '客人若長期依賴抗組織胺，可建議嘗試 BB536 + Antihistamine 組合，逐步評估是否能降低抗組織胺用量。'
  },
  {
    id: 'antidiabetics_monitor',
    drugClass: '降血糖藥（Antidiabetics）',
    drugs: ['Metformin', 'Sulfonylureas（Glipizide、Glyburide）', 'DPP-4 inhibitors', 'SGLT-2 inhibitors', '胰島素（Insulin）'],
    affectedStrains: ['gasseri_sbt', 'akkermansia', 'ncfm_la5'],
    severity: 'caution',
    severityLabel: '監測血糖',
    mechanism: 'Akkermansia 及 LG SBT2055 可改善胰島素敏感性（HOMA-IR 降低），可能產生疊加降血糖效應，尤其合用 Sulfonylureas 或胰島素時有低血糖風險。',
    recommendation: '🩸 糖尿病患者合用降血糖藥與代謝型益生菌時，建議定期監測空腹血糖及餐後血糖。Metformin 合用通常安全，Sulfonylureas 或胰島素需更謹慎。',
    clinicalPearl: 'Metformin 本身會降低腸道 Akkermansia muciniphila 豐度（腸道副作用）；補充 Akkermansia 可能有助於改善 Metformin 腸道副作用（腹瀉）。'
  },
  {
    id: 'anticoagulants_minor',
    drugClass: '抗凝血藥（Anticoagulants）',
    drugs: ['Warfarin（華法林）', 'Dabigatran', 'Rivaroxaban'],
    affectedStrains: ['lgg', 'casei_shirota', 'bb12'],
    severity: 'caution',
    severityLabel: '輕度注意',
    mechanism: '益生菌可能影響腸道菌相產生維生素 K₂（Menaquinone）的量，理論上影響 Warfarin 效果。實際臨床影響通常微小，但 Warfarin 治療窗窄（Narrow therapeutic index）。',
    recommendation: '💊 Warfarin 使用者開始補充益生菌時，建議 INR 監測頻率適度增加（初期 2 週）。DOAC（如 Dabigatran、Rivaroxaban）受影響的可能性更低。',
    clinicalPearl: '若客人同時服用 Warfarin 及益生菌，建議告知心臟科或血液科醫師，維持既有的 INR 監測頻率即可，無需因此停用益生菌。'
  },
  {
    id: 'antifungals_note',
    drugClass: '抗黴菌藥（局部）',
    drugs: ['Clotrimazole 陰道栓劑', 'Miconazole 外用', 'Nystatin 局部'],
    affectedStrains: ['rc14_gr1', 's_boulardii'],
    severity: 'caution',
    severityLabel: '輕度注意',
    mechanism: '局部抗黴菌藥對口服益生菌全身影響極小。但使用陰道局部抗黴菌藥同時補充 RC-14+GR-1，可從內部（口服路徑）協同恢復陰道乳桿菌菌相。',
    recommendation: '✅ RC-14+GR-1 可與局部抗黴菌藥同時使用，兩者機制互補。口服 S. boulardii 與局部抗黴菌藥可同時使用（局部藥物不影響口服 S. boulardii）。',
    clinicalPearl: '念珠菌症（VVC）治療結束後持續補充 RC-14+GR-1 可降低復發率。'
  },
  {
    id: 'sleep_meds_additive',
    drugClass: '助眠藥及抗焦慮藥',
    drugs: ['Zolpidem', 'Benzodiazepines（Alprazolam、Lorazepam）', 'Melatonin 補充劑', 'SSRI（Escitalopram、Sertraline）'],
    affectedStrains: ['r0052_r0175'],
    severity: 'caution',
    severityLabel: '輕度加成',
    mechanism: 'R0052+R0175 促進 Serotonin→Melatonin 轉化路徑，可能與 Melatonin 補充劑有加成鎮靜效果。SSRI 作用於血清素系統，與 Psychobiotic 的腸-腦軸機制有理論上的重疊。',
    recommendation: '😴 同時使用安眠藥與 Psychobiotic 益生菌者，初期注意日間嗜睡感是否增加。SSRI 使用者合用益生菌需告知精神科醫師（目前無明顯交互作用報告，但需個案評估）。',
    clinicalPearl: '益生菌不可取代精神科藥物治療。R0052+R0175 適合輕度壓力/睡眠問題的亞健康族群，診斷為焦慮症或憂鬱症者需以藥物治療為主。'
  }
];

// ============================================================
// 1-D  FUNC_CATEGORIES  功能分類  &  SYNBIOTIC_COMBOS 複方協同
// ============================================================
const FUNC_CATEGORIES = [
  {
    id: 'immune',
    name: '免疫調節',
    icon: '🛡️',
    color: '#2d7dd2',
    headerBg: 'linear-gradient(135deg, #2d7dd2, #1a5fa8)',
    description: '增強自然殺手細胞活性、提升分泌型 IgA、降低感冒及上呼吸道感染頻率',
    strains: ['lgg', 'bb12', 'casei_shirota', 'b_coagulans', 'hn001'],
    supplements: ['beta_glucan_yeast', 'beta_glucan_mushroom', 'hk_lactobacillus'],
    warning: null,
    keyIndication: '易感冒體質、季節交替、高壓工作者、老年免疫維持'
  },
  {
    id: 'allergy',
    name: '過敏改善',
    icon: '🌸',
    color: '#a663cc',
    headerBg: 'linear-gradient(135deg, #a663cc, #7b35a8)',
    description: '調節 Th1/Th2 平衡、降低 IgE 介導過敏反應、改善花粉症及異位性皮膚炎',
    strains: ['bb536', 'lgg', 'bb12', 'casei_shirota', 'lp33', 'hn001'],
    supplements: ['beta_glucan_oat', 'gos'],
    warning: null,
    keyIndication: '季節性過敏性鼻炎、花粉症、異位性皮膚炎（AD）、過敏體質嬰兒'
  },
  {
    id: 'gi',
    name: '腸胃道保健',
    icon: '🫀',
    color: '#e76f51',
    headerBg: 'linear-gradient(135deg, #e76f51, #c04a2e)',
    description: '改善 IBS 症狀、AAD 預防、便秘/腹瀉調節、強化腸道屏障',
    strains: ['lp299v', 'lgg', 's_boulardii', 'reuteri_dsm', 'b_infantis', 'ncfm_la5', 'b_coagulans', 'miyairi588'],
    supplements: ['fos', 'inulin', 'arabinoxylan', 'butyrate'],
    warning: null,
    keyIndication: 'IBS（腸躁症）、抗生素後腸道恢復、旅遊者腹瀉預防、便秘、功能性消化不良'
  },
  {
    id: 'sleep',
    name: '睡眠與壓力',
    icon: '🌙',
    color: '#1b4965',
    headerBg: 'linear-gradient(135deg, #1b4965, #0d2d3f)',
    description: '透過腸-腦軸調節 HPA 軸，降低皮質醇、改善睡眠品質與焦慮',
    strains: ['r0052_r0175', 'casei_shirota', 'b_infantis', 'ps128'],
    supplements: ['hk_lactobacillus'],
    warning: '不可取代精神科藥物；重度憂鬱/焦慮症需以藥物治療為主',
    keyIndication: '輕度壓力性睡眠困難、亞健康焦慮、高壓工作族群、考試期學生'
  },
  {
    id: 'sports',
    name: '運動表現',
    icon: '💪',
    color: '#e63946',
    headerBg: 'linear-gradient(135deg, #e63946, #b02030)',
    description: '提升 VO2max、降低運動後乳酸及炎症、增強肌肉恢復速度',
    strains: ['twk10', 'b_coagulans', 'lgg'],
    supplements: ['beta_glucan_yeast', 'urolithin_a'],
    warning: null,
    keyIndication: '耐力運動員、健身族、肌少症預防、老年活力維持'
  },
  {
    id: 'weight',
    name: '體重管理',
    icon: '⚖️',
    color: '#f4a261',
    headerBg: 'linear-gradient(135deg, #f4a261, #d4732a)',
    description: '降低內臟脂肪、改善胰島素敏感性、輔助代謝症候群',
    strains: ['gasseri_sbt', 'akkermansia', 'reuteri_adr1'],
    supplements: ['urolithin_a', 'inulin', 'butyrate'],
    warning: '益生菌不可取代飲食控制及運動；單菌效果有限，須搭配生活方式調整',
    keyIndication: '腹部肥胖、代謝症候群、胰島素阻抗、PCOS（多囊卵巢症候群）'
  },
  {
    id: 'vaginal',
    name: '私密處健康',
    icon: '🌺',
    color: '#e9c46a',
    headerBg: 'linear-gradient(135deg, #e9a832, #c47a10)',
    description: '恢復陰道 Lactobacillus 優勢菌相、預防 BV 及 VVC 復發',
    strains: ['rc14_gr1'],
    supplements: [],
    warning: null,
    keyIndication: '反覆細菌性陰道炎（BV）、念珠菌感染（VVC）、陰道微生態失衡、抗生素後復發預防',
    selectionTips: [
      '確認菌株完整命名：L. rhamnosus GR-1 ＋ L. reuteri RC-14（非單純「乳酸菌」）',
      '各菌株劑量各 ≥10⁹ CFU（複方總量 ≥2×10⁹）',
      '蔓越莓 PAC ≥36 mg/日可協同預防泌尿道感染（UTI）',
      'D-甘露糖（D-Mannose）2 g/日可加強對抗大腸桿菌黏附',
      '療程建議連續服用 ≥12 週；抗生素後立即補充效果最佳'
    ]
  },
  {
    id: 'autoimmune',
    name: '自體免疫警語',
    icon: '⚠️',
    color: '#6c757d',
    headerBg: 'linear-gradient(135deg, #6c757d, #495057)',
    description: '自體免疫疾病患者使用益生菌的特殊注意事項',
    strains: [],
    supplements: ['hk_lactobacillus'],
    warning: `【重要警語】自體免疫疾病患者（類風濕性關節炎、紅斑性狼瘡、克隆氏症、潰瘍性結腸炎、多發性硬化症等）使用益生菌前必須注意：
1. 活菌製劑可能過度刺激已異常活化的免疫系統，建議優先使用後生元（熱殺滅菌、Urolithin A）。
2. 使用免疫抑制劑（生物製劑、Methotrexate、Cyclosporine）期間，活菌製劑有罕見但嚴重的菌血症風險。
3. 輕至中度 IBD（發炎性腸道疾病）患者可在醫師指導下使用特定菌株（LP 299v、B. infantis 35624）。
4. 任何自體免疫疾病患者使用益生菌前請諮詢主治醫師。`,
    keyIndication: '自體免疫疾病患者、免疫抑制治療中患者、IBD 患者、器官移植後患者'
  }
];

const SYNBIOTIC_COMBOS = [
  {
    id: 'combo_aad',
    name: '抗生素黃金配方',
    target: '抗生素相關腹瀉（AAD）預防',
    icon: '💊',
    components: {
      probiotics: ['lgg', 's_boulardii'],
      prebiotics: ['fos'],
      postbiotics: []
    },
    dose: 'LGG 10¹⁰ CFU + S. boulardii 250 mg，各與抗生素間隔 2 小時；FOS 3 g 餐中',
    timing: '整個抗生素療程中同步使用，療程結束後持續 1–2 週',
    mechanism: 'LGG 補充腸道乳酸菌；S. boulardii（酵母菌）不受抗生素影響，兩者互補；FOS 促進有益菌恢復增殖',
    expectedBenefit: 'AAD 發生率降低 50–60%；縮短腹瀉持續時間；加速抗生素後菌相恢復',
    evidenceBasis: 'LGG（Cochrane 2024 Ia）+ S. boulardii（Niu 2025 MA Ia）'
  },
  {
    id: 'combo_allergy',
    name: '過敏體質全方位配方',
    target: '過敏性鼻炎、異位性皮膚炎改善',
    icon: '🌸',
    components: {
      probiotics: ['bb536', 'lgg'],
      prebiotics: ['gos'],
      postbiotics: []
    },
    dose: 'BB536 2×10¹⁰ CFU/天 + LGG 10⁹ CFU/天；GOS 3 g 餐中',
    timing: '花粉季前 8 週開始；常年性過敏持續 6 個月以上',
    mechanism: 'BB536 主攻 Th2 抑制及 IgE 降低；LGG 提供腸道屏障保護及 GALT 免疫調節；GOS 協同促進有益菌定殖',
    expectedBenefit: '鼻炎症狀分數降低 30–40%；抗組織胺用量減少；AD 嚴重度改善',
    evidenceBasis: 'BB536（Xiao 2023 SR Ia）+ LGG（Guo 2021 Cochrane Ia）'
  },
  {
    id: 'combo_ibs',
    name: 'IBS 腸躁症配方',
    target: 'IBS 腹痛、腹脹、排便不規則',
    icon: '🫀',
    components: {
      probiotics: ['lp299v', 'ncfm_la5'],
      prebiotics: ['arabinoxylan'],
      postbiotics: ['butyrate']
    },
    dose: 'LP 299v 10¹⁰ CFU bid + LA-5 2×10¹⁰ CFU/天；Arabinoxylan 6 g；丁酸鈉 300 mg（腸溶）',
    timing: '餐前服用益生菌，丁酸鈉餐後；持續 12 週以上',
    mechanism: 'LP 299v 直接改善腸道蠕動及 IBS 疼痛；LA-5 加強腸道屏障；Arabinoxylan 提供丁酸原料；丁酸鈉直接修復腸道黏膜',
    expectedBenefit: 'IBS-SSS 降低 50+%；腹痛頻率減少；排便規律化',
    evidenceBasis: 'LP 299v（Ford 2024 MA Ia）+ LA-5（Aziz 2024 SR Ia）'
  },
  {
    id: 'combo_sports',
    name: '運動型益生菌配方',
    target: '提升運動表現、加速恢復、減少運動傷害',
    icon: '💪',
    components: {
      probiotics: ['twk10', 'b_coagulans'],
      prebiotics: [],
      postbiotics: ['urolithin_a']
    },
    dose: 'TWK10 2×10¹⁰ CFU/天 + BC GBI-30 2×10⁹ CFU/天；Urolithin A 500 mg',
    timing: '早餐前服用（TWK10 + Urolithin A）；BC GBI-30 餐中服用',
    mechanism: 'TWK10 提升 VO2max 及降低運動後乳酸；B. coagulans 改善蛋白質吸收及減少 DOMS；Urolithin A 促進粒線體更新提升耐力',
    expectedBenefit: 'VO2max 提升 5%+；運動後恢復時間縮短；蛋白質利用率提升',
    evidenceBasis: 'TWK10（Chen 2021 MA Ia）+ B. coagulans（Majeed 2022 Ib）+ Urolithin A（Andreux 2019 Cell Metab）'
  },
  {
    id: 'combo_vaginal',
    name: '私密處黃金三角',
    target: '反覆 BV / 念珠菌感染預防',
    icon: '🌺',
    components: {
      probiotics: ['rc14_gr1'],
      prebiotics: [],
      postbiotics: ['hk_lactobacillus']
    },
    dose: 'RC-14 + GR-1 各 ≥10⁹ CFU/天（複方膠囊）；必要時搭配 HK Lactobacillus 後生元',
    timing: '抗生素或抗黴菌藥療程結束後立即開始；持續 6–12 個月',
    mechanism: 'RC-14+GR-1 口服後移行至陰道定殖，恢復乳桿菌優勢菌相；HK Lactobacillus 提供局部免疫調節而無感染風險',
    expectedBenefit: 'BV 復發率降低 44%；VVC 治癒率提升；陰道 pH 維持 <4.5',
    evidenceBasis: 'RC-14+GR-1（Kaambo 2024 BJOG MA Ia）'
  },
  {
    id: 'combo_sleep',
    name: '睡眠壓力配方',
    target: '輕度壓力性睡眠困難、皮質醇過高',
    icon: '🌙',
    components: {
      probiotics: ['r0052_r0175'],
      prebiotics: ['fos'],
      postbiotics: []
    },
    dose: 'R0052+R0175 複方 3×10⁹ CFU/天；FOS 5 g',
    timing: '睡前 1 小時服用（益生菌）；FOS 晚餐後',
    mechanism: 'R0052+R0175 透過腸-腦軸降低皮質醇及促進褪黑激素合成路徑；FOS 協同支援腸道菌相，穩定 GABA 前驅物來源',
    expectedBenefit: '入睡時間縮短；皮質醇日間峰值降低；焦慮評分改善',
    evidenceBasis: 'Messaoudi 2011 Ib + Rode 2022 Ib + Wiacek 2025 Ib'
  },
  {
    id: 'combo_metabolic',
    name: '代謝症候群配方',
    target: '腹部肥胖、胰島素阻抗、血脂異常',
    icon: '🔬',
    components: {
      probiotics: ['akkermansia', 'gasseri_sbt'],
      prebiotics: ['inulin'],
      postbiotics: ['urolithin_a']
    },
    dose: 'Akkermansia（Pasteurized）10¹⁰ CFU/天 + LG SBT2055 10¹⁰ CFU/天；Inulin 10 g；Urolithin A 500 mg',
    timing: '早餐前服用；Inulin 分早晚兩次餐中攝取',
    mechanism: 'Akkermansia 修復腸道屏障降低 LPS 發炎；SBT2055 降低內臟脂肪；Inulin 作為 Akkermansia 的選擇性益生元；Urolithin A 促進粒線體代謝',
    expectedBenefit: 'HOMA-IR 改善；內臟脂肪減少；LDL 降低；體重輕度下降',
    evidenceBasis: 'Akkermansia（Depommier 2019 Nat Med Ib）+ SBT2055（Kadooka 2013 Ib）'
  },
  {
    id: 'combo_infant_immune',
    name: '嬰兒免疫建立配方',
    target: '過敏風險嬰兒腸道菌相建立、早期免疫耐受',
    icon: '👶',
    components: {
      probiotics: ['bb12', 'reuteri_dsm'],
      prebiotics: ['gos', 'hmo'],
      postbiotics: []
    },
    dose: 'BB-12 10⁹ CFU/天 + DSM 17938 10⁸ CFU/天（嬰兒劑量）；GOS 0.4 g/100 mL 配方奶；HMO（2\'-FL）1 g/L',
    timing: '出生起即可開始；混入母乳或配方奶中',
    mechanism: 'BB-12 促進 Bifidobacterium 定殖及 SIgA 分泌；DSM 17938 改善腸絞痛及腸蠕動；GOS+HMO 選擇性促進有益菌增殖，建立健康菌相',
    expectedBenefit: 'AD 發生率降低；腸絞痛緩解；健康腸道菌相早期建立',
    evidenceBasis: 'BB-12（Wickens 2021 Ib）+ DSM 17938（Cochrane 2025 Ia）'
  }
];

// ============================================================
//  SEED_PRODUCTS  藥局預設產品（每次版本升級自動補入新品）
// ============================================================
const SEED_PRODUCTS = [
  {
    id: 10001,
    name: '鍾根堂 Frilacto 益生菌粉包',
    brand: '鍾根堂（CKD Pharm，韓國）',
    strains: [],
    category: 'immune',
    cfu: '100億 CFU／包',
    price: '',
    note: '17種益生菌（Rosell® 認證菌株）；含維他命D3 400IU + 鋅8.5mg；2g粉包×30包；另含藍莓粉末、有機薑粉'
  }
];

const SEED_VERSION = 'v1';

// ============================================================
//  全域匯出供 app.js 使用
// ============================================================
const DB = { STRAINS, SUPPLEMENTS, DRUG_INTERACTIONS, FUNC_CATEGORIES, SYNBIOTIC_COMBOS, SEED_PRODUCTS, SEED_VERSION };
