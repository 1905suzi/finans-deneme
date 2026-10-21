// ============================================================
// FINANS+ 2026 - Gelecek Nesil Finans Eğitimi & Oyunlaştırma Motoru
// ============================================================

// Global Oyunlaştırma ve Kullanıcı Durumu
let selectedModule = 'budget';
let currentLessonId = 1;
let selectedQuizAnswer = null;

let unlockedLevels = {
    budget: 1,
    stock: 1,
    banking: 1,
    crypto: 1,
    funds: 1
};

let userStreak = 3;
let userGems = 150; // FinansCoin / Finans Puanı
let userXp = 420;
let userHearts = 5;

let userProfile = {
    name: 'Deniz Özkan',
    username: 'deniz_finans',
    email: 'deniz@finansplus.com',
    password: 'finans2026password',
    isLoggedIn: true,
    riskProfile: 'Dengeli Büyüme',
    levelTitle: 'Bilinçli Tasarrufçu',
    completedLessons: 0,
    badges: ['İlk Adım', '50/30/20 Ustası', 'Bütçe Kalkanı']
};

let userFinancialGoals = [
    { id: 1, title: '6 Aylık Acil Durum Fonu', target: 120000, current: 85000, icon: 'fa-shield-halved', color: '#059669' },
    { id: 2, title: 'İlk Temettü Portföyü', target: 200000, current: 110000, icon: 'fa-chart-pie', color: '#0284c7' },
    { id: 3, title: 'Yıllık Altın & Emtia Sepeti', target: 60000, current: 42000, icon: 'fa-coins', color: '#d97706' }
];

// Sayfa Yüklendiğinde Başlat
document.addEventListener('DOMContentLoaded', () => {
    loadProfileFromStorage();
    checkAuthSession();
    updateGamificationStats();
    renderRoadmap();
    initSimulators();
    renderBookContent('all');
    renderGoals();
});

// Oturum Kontrolü
function checkAuthSession() {
    if (userProfile.isLoggedIn) {
        document.getElementById('landing').classList.add('hidden');
        document.getElementById('app-container').classList.remove('hidden');
    } else {
        document.getElementById('landing').classList.remove('hidden');
        document.getElementById('app-container').classList.add('hidden');
    }
}

// ============================================================
// GÖRÜNÜM VE SEKME YÖNETİMİ
// ============================================================
function switchView(viewName) {
    const panels = document.querySelectorAll('.view-panel');
    panels.forEach(p => p.classList.add('hidden'));

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(n => n.classList.remove('active'));

    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) targetView.classList.remove('hidden');

    const targetNav = document.getElementById(`nav-btn-${viewName}`);
    if (targetNav) targetNav.classList.add('active');

    if (viewName === 'map') {
        renderRoadmap();
    } else if (viewName === 'simulator') {
        calculateCompoundInterest();
    } else if (viewName === 'book') {
        renderBookContent('all');
    } else if (viewName === 'goals') {
        renderGoals();
    }
}

// Modül Değiştirme (Bütçe, Borsa, Faiz, Kripto, Fonlar)
function switchModule(modKey) {
    if (!window.financeModules[modKey]) return;
    selectedModule = modKey;
    
    const nameEl = document.getElementById('current-module-name');
    const iconEl = document.getElementById('current-module-icon');
    if (nameEl) nameEl.innerText = window.financeModules[modKey].name;
    if (iconEl) iconEl.className = `fa-solid ${window.financeModules[modKey].icon} module-select-icon`;

    const dropdown = document.getElementById('module-dropdown-menu');
    if (dropdown) dropdown.classList.add('hidden');

    renderRoadmap();
    showToast(`${window.financeModules[modKey].name} modülüne geçildi!`, 'info');
}

function toggleModuleDropdown() {
    const dropdown = document.getElementById('module-dropdown-menu');
    if (dropdown) dropdown.classList.toggle('hidden');
}

// ============================================================
// 1. FİNANS ÖĞRENME & İLERLEME HARİTASI
// ============================================================
function renderRoadmap() {
    const container = document.getElementById('roadmap-container');
    if (!container) return;
    container.innerHTML = '';

    const courseList = window.financeCoursesByModule[selectedModule] || window.financeCoursesByModule.budget;
    const unitsInfo = window.financeUnitsByModule[selectedModule] || window.financeUnitsByModule.budget;
    const currentUnlocked = unlockedLevels[selectedModule] || 1;

    // SVG Arka Plan İlerleme Yolu
    const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgEl.setAttribute('class', 'roadmap-svg-bg');
    svgEl.id = 'finans-roadmap-svg';
    svgEl.innerHTML = `
        <defs>
            <linearGradient id="finansPathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#059669"/>
                <stop offset="50%" stop-color="#0284c7"/>
                <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
            <filter id="pathGlow">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <path id="finans-base-path" fill="none" stroke="rgba(203, 213, 225, 0.6)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 8"/>
        <path id="finans-progress-path" fill="none" stroke="url(#finansPathGradient)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" filter="url(#pathGlow)"/>
    `;
    container.appendChild(svgEl);

    let currentUnit = 0;
    const xOffsets = [0, -140, -260, -320, -240, -100, 0, 120, 260, 320, 240, 120];
    let nodeIndex = 0;

    courseList.forEach((lesson) => {
        const lessonUnit = lesson.unit || Math.ceil(lesson.id / 3) || 1;
        
        if (lessonUnit !== currentUnit) {
            currentUnit = lessonUnit;
            nodeIndex = 0;
            const uInfo = unitsInfo[currentUnit] || {
                title: `Bölüm ${currentUnit}`,
                desc: 'Finansal basamakları tırman.',
                badgeClass: `banner-${selectedModule}`
            };

            const bannerHtml = `
                <div class="finans-unit-banner ${uInfo.badgeClass}">
                    <div>
                        <span class="finans-unit-badge">BÖLÜM ${currentUnit}</span>
                        <h2 class="finans-unit-title">${uInfo.title}</h2>
                        <p class="finans-unit-desc">${uInfo.desc}</p>
                    </div>
                    <div class="finans-unit-meta">
                        <i class="fa-solid fa-graduation-cap"></i> Modül Dersleri
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', bannerHtml);
        }

        const isCompleted = lesson.id < currentUnlocked;
        const isActive = lesson.id === currentUnlocked;
        const isLocked = lesson.id > currentUnlocked;
        const isMilestone = (lesson.id === 10 || lesson.id % 5 === 0);

        let stateClass = '';
        let iconHtml = '';
        let clickHandler = '';

        if (isCompleted) {
            stateClass = 'completed';
            iconHtml = isMilestone ? '<i class="fa-solid fa-trophy"></i>' : '<i class="fa-solid fa-check"></i>';
            clickHandler = `onclick="startLesson(${lesson.id})"`;
        } else if (isActive) {
            stateClass = 'active';
            iconHtml = isMilestone ? '<i class="fa-solid fa-trophy"></i>' : '<i class="fa-solid fa-play"></i>';
            clickHandler = `onclick="startLesson(${lesson.id})"`;
        } else {
            stateClass = 'locked';
            iconHtml = '<i class="fa-solid fa-lock"></i>';
            clickHandler = `onclick="showToast('Önce önceki finans seviyesini tamamlamalısın!', 'warning')"`;
        }

        const screenW = window.innerWidth;
        const offsetScale = screenW < 480 ? 0.35 : (screenW < 768 ? 0.6 : 0.95);
        const offset = Math.round(xOffsets[nodeIndex % xOffsets.length] * offsetScale);
        nodeIndex++;

        const speechBubbleHtml = isActive ? `
            <div class="finans-bubble">
                BAŞLA! <i class="fa-solid fa-bolt" style="color:#d97706;"></i>
            </div>
        ` : '';

        const nodeHtml = `
            <div class="roadmap-node-wrap" style="transform: translateX(${offset}px);" data-id="${lesson.id}">
                ${speechBubbleHtml}
                <button type="button" class="finans-node-btn ${stateClass} ${isMilestone ? 'milestone' : ''}" ${clickHandler} title="${lesson.title}">
                    ${iconHtml}
                </button>
                <div class="node-title-card">${lesson.title}</div>
            </div>
        `;

        container.insertAdjacentHTML('beforeend', nodeHtml);
    });

    requestAnimationFrame(updateRoadmapSvgPath);
}

function updateRoadmapSvgPath() {
    const container = document.getElementById('roadmap-container');
    const svgEl = document.getElementById('finans-roadmap-svg');
    const basePath = document.getElementById('finans-base-path');
    const progressPath = document.getElementById('finans-progress-path');
    if (!container || !svgEl || !basePath) return;

    const nodes = container.querySelectorAll('.finans-node-btn');
    if (nodes.length < 2) return;

    const cRect = container.getBoundingClientRect();
    let dPoints = [];

    nodes.forEach(btn => {
        const bRect = btn.getBoundingClientRect();
        const x = Math.round(bRect.left - cRect.left + bRect.width / 2);
        const y = Math.round(bRect.top - cRect.top + bRect.height / 2);
        dPoints.push({ x, y });
    });

    let pathD = `M ${dPoints[0].x} ${dPoints[0].y}`;
    for (let i = 1; i < dPoints.length; i++) {
        const prev = dPoints[i - 1];
        const curr = dPoints[i];
        const cpY1 = prev.y + (curr.y - prev.y) * 0.5;
        const cpY2 = prev.y + (curr.y - prev.y) * 0.5;
        pathD += ` C ${prev.x} ${cpY1}, ${curr.x} ${cpY2}, ${curr.x} ${curr.y}`;
    }

    basePath.setAttribute('d', pathD);
    if (progressPath) progressPath.setAttribute('d', pathD);
}

window.addEventListener('resize', () => {
    requestAnimationFrame(updateRoadmapSvgPath);
});

// ============================================================
// 2. FİNANS DERS & İNTERAKTİF KARAR EKRANI
// ============================================================
function startLesson(id) {
    const courseList = window.financeCoursesByModule[selectedModule] || window.financeCoursesByModule.budget;
    const lesson = courseList.find(l => l.id === id);
    if (!lesson) return;

    currentLessonId = id;
    selectedQuizAnswer = null;

    switchView('lesson');

    document.getElementById('lesson-module-tag').innerText = window.financeModules[selectedModule].name.toUpperCase();
    document.getElementById('lesson-title-display').innerText = lesson.title;
    document.getElementById('lesson-theory-display').innerText = lesson.theory;
    document.getElementById('lesson-case-study').innerText = lesson.caseStudy;
    document.getElementById('lesson-formula').innerText = `📐 Formül / İlke: ${lesson.formula}`;

    renderLessonSimulator(lesson);

    const quizSection = document.getElementById('lesson-quiz-options');
    document.getElementById('lesson-quiz-question').innerText = lesson.quiz.question;
    quizSection.innerHTML = '';

    lesson.quiz.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz-opt-btn';
        btn.innerText = `${String.fromCharCode(65 + idx)}) ${optText}`;
        btn.onclick = () => selectQuizOption(idx, btn);
        quizSection.appendChild(btn);
    });
}

function selectQuizOption(index, btnElement) {
    selectedQuizAnswer = index;
    const allBtns = document.querySelectorAll('.quiz-opt-btn');
    allBtns.forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');
}

function renderLessonSimulator(lesson) {
    const simContainer = document.getElementById('lesson-interactive-simulator');
    if (!simContainer) return;
    simContainer.innerHTML = '';

    if (lesson.simType === 'networth') {
        simContainer.innerHTML = `
            <div class="sim-box-title"><i class="fa-solid fa-calculator"></i> Canlı Net Varlık Hesaplayıcı</div>
            <div class="sim-input-row">
                <label>Varlıklarım (Banka, Hisse, Altın): <span id="lbl-assets">150.000 TL</span></label>
                <input type="range" class="sim-range" id="rng-assets" min="0" max="1000000" step="10000" value="150000" oninput="updateNetWorthDemo()">
            </div>
            <div class="sim-input-row">
                <label>Borçlarım (Kredi Kartı, Taksitler): <span id="lbl-debts">40.000 TL</span></label>
                <input type="range" class="sim-range" id="rng-debts" min="0" max="500000" step="5000" value="40000" oninput="updateNetWorthDemo()">
            </div>
            <div class="sim-result-card">
                <div class="sim-result-value" id="demo-networth-val">+110.000 TL</div>
                <div class="sim-result-label">Finansal Sağlık: Pozitif Net Varlık ✅</div>
            </div>
        `;
    } else if (lesson.simType === 'budget_rule') {
        simContainer.innerHTML = `
            <div class="sim-box-title"><i class="fa-solid fa-chart-pie"></i> 50/30/20 Gelir Dağıtıcı</div>
            <div class="sim-input-row">
                <label>Aylık Net Gelir: <span id="lbl-income">40.000 TL</span></label>
                <input type="range" class="sim-range" id="rng-income" min="15000" max="200000" step="5000" value="40000" oninput="updateBudget503020Demo()">
            </div>
            <div class="sim-result-card" style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px;">
                <div><strong style="color:#0284c7;">%50 İhtiyaç</strong><br><span id="b-need">20.000 TL</span></div>
                <div><strong style="color:#d97706;">%30 İstek</strong><br><span id="b-want">12.000 TL</span></div>
                <div><strong style="color:#059669;">%20 Tasarruf</strong><br><span id="b-save">8.000 TL</span></div>
            </div>
        `;
    } else if (lesson.simType === 'pe_calc') {
        simContainer.innerHTML = `
            <div class="sim-box-title"><i class="fa-solid fa-magnifying-glass-dollar"></i> F/K Oranı Değerleme Aracı</div>
            <div class="sim-input-row">
                <label>Hisse Fiyatı: <span id="lbl-price">80 TL</span></label>
                <input type="range" class="sim-range" id="rng-price" min="10" max="500" step="5" value="80" oninput="updatePeDemo()">
            </div>
            <div class="sim-input-row">
                <label>Hisse Başı Yıllık Kâr (EPS): <span id="lbl-eps">10 TL</span></label>
                <input type="range" class="sim-range" id="rng-eps" min="1" max="50" step="1" value="10" oninput="updatePeDemo()">
            </div>
            <div class="sim-result-card">
                <div class="sim-result-value" id="demo-pe-val">F/K = 8.0</div>
                <div class="sim-result-label" id="demo-pe-comment">Şirket kendini 8 yılda amorti ediyor (Cazip Değerleme)</div>
            </div>
        `;
    } else {
        simContainer.innerHTML = `
            <div class="sim-box-title"><i class="fa-solid fa-lightbulb"></i> Finansal Karar Laboratuvarı</div>
            <p style="font-size:13.5px; color:#475569; margin-bottom:12px;">Bu dersteki finansal prensibi kendi bütçene uygulayarak karar ver ve aşağıdaki pekiştirme testini çöz.</p>
            <div class="sim-result-card">
                <div class="sim-result-value" style="font-size:16px;">🎯 Finansal Karar Alındı</div>
                <div class="sim-result-label">Aşağıdaki testi yanıtlayarak seviyeyi tamamla!</div>
            </div>
        `;
    }
}

function updateNetWorthDemo() {
    const assets = parseFloat(document.getElementById('rng-assets').value);
    const debts = parseFloat(document.getElementById('rng-debts').value);
    document.getElementById('lbl-assets').innerText = `${assets.toLocaleString('tr-TR')} TL`;
    document.getElementById('lbl-debts').innerText = `${debts.toLocaleString('tr-TR')} TL`;
    const net = assets - debts;
    const valEl = document.getElementById('demo-networth-val');
    valEl.innerText = `${net >= 0 ? '+' : ''}${net.toLocaleString('tr-TR')} TL`;
    valEl.style.color = net >= 0 ? '#059669' : '#dc2626';
}

function updateBudget503020Demo() {
    const income = parseFloat(document.getElementById('rng-income').value);
    document.getElementById('lbl-income').innerText = `${income.toLocaleString('tr-TR')} TL`;
    document.getElementById('b-need').innerText = `${(income * 0.5).toLocaleString('tr-TR')} TL`;
    document.getElementById('b-want').innerText = `${(income * 0.3).toLocaleString('tr-TR')} TL`;
    document.getElementById('b-save').innerText = `${(income * 0.2).toLocaleString('tr-TR')} TL`;
}

function updatePeDemo() {
    const price = parseFloat(document.getElementById('rng-price').value);
    const eps = parseFloat(document.getElementById('rng-eps').value);
    document.getElementById('lbl-price').innerText = `${price} TL`;
    document.getElementById('lbl-eps').innerText = `${eps} TL`;
    const pe = (price / eps).toFixed(1);
    document.getElementById('demo-pe-val').innerText = `F/K = ${pe}`;
    const commentEl = document.getElementById('demo-pe-comment');
    if (pe < 7) {
        commentEl.innerText = `Ucuz Değerleme / Fırsat Bölgesi (Yatırımını ${pe} yılda geri ödüyor)`;
    } else if (pe <= 15) {
        commentEl.innerText = `Makul & Dengeli Değerleme (Sektör Standartı)`;
    } else {
        commentEl.innerText = `Yüksek Büyüme Fiyatlaması / Primli Değerleme`;
    }
}

function completeCurrentLesson() {
    const courseList = window.financeCoursesByModule[selectedModule] || window.financeCoursesByModule.budget;
    const lesson = courseList.find(l => l.id === currentLessonId);
    if (!lesson) return;

    if (selectedQuizAnswer === null) {
        showToast('Lütfen dersi tamamlamadan önce mini testi cevaplayın!', 'warning');
        return;
    }

    if (selectedQuizAnswer !== lesson.quiz.correctIndex) {
        userHearts = Math.max(0, userHearts - 1);
        updateGamificationStats();
        showToast('Yanlış cevap! Bilgileri tekrar gözden geçirip doğru şıkkı seç.', 'danger');
        return;
    }

    const currentUnlocked = unlockedLevels[selectedModule] || 1;
    if (currentLessonId === currentUnlocked && currentUnlocked < 10) {
        unlockedLevels[selectedModule] = currentUnlocked + 1;
    }

    userXp += 50;
    userGems += 10;
    userProfile.completedLessons++;
    saveProfileToStorage();
    updateGamificationStats();

    showCelebrationModal(lesson);
}

function showCelebrationModal(lesson) {
    const modal = document.getElementById('celebration-modal');
    if (!modal) return;

    document.getElementById('celeb-title').innerText = 'Tebrikler! Seviye Tamamlandı! 🎉';
    document.getElementById('celeb-desc').innerText = `"${lesson.title}" dersini başarıyla kavradın. Finansal okuryazarlığın bir basamak daha güçlendi!`;
    document.getElementById('celeb-xp-amount').innerText = '+50 XP';
    document.getElementById('celeb-gems-amount').innerText = '+10 FinansCoin';

    modal.classList.remove('hidden');
}

function nextLessonDirectly() {
    const modal = document.getElementById('celebration-modal');
    if (modal) modal.classList.add('hidden');

    const nextId = currentLessonId + 1;
    if (nextId <= 10) {
        startLesson(nextId);
    } else {
        switchView('map');
        showToast('Tebrikler! Bu modülün tüm derslerini tamamladın! 🏆', 'success');
    }
}

function exitLessonToMap() {
    switchView('map');
}

// ============================================================
// 3. FİNANS LABORATUVARI & SİMÜLATÖRLER
// ============================================================
function initSimulators() {
    calculateCompoundInterest();
}

function switchSimTab(tabName) {
    const tabs = document.querySelectorAll('.sim-tab-button');
    tabs.forEach(t => t.classList.remove('active'));
    
    const targetTab = document.getElementById(`sim-tab-${tabName}`);
    if (targetTab) targetTab.classList.add('active');

    const cards = document.querySelectorAll('.sim-calc-section');
    cards.forEach(c => c.classList.add('hidden'));

    const targetSection = document.getElementById(`sim-section-${tabName}`);
    if (targetSection) targetSection.classList.remove('hidden');
}

function calculateCompoundInterest() {
    const p = parseFloat(document.getElementById('calc-principal')?.value || 50000);
    const m = parseFloat(document.getElementById('calc-monthly')?.value || 5000);
    const r = parseFloat(document.getElementById('calc-rate')?.value || 30) / 100;
    const y = parseFloat(document.getElementById('calc-years')?.value || 10);

    let total = p;
    let totalInvested = p;

    for (let i = 0; i < y; i++) {
        total = (total + (m * 12)) * (1 + r);
        totalInvested += (m * 12);
    }

    const interest = total - totalInvested;

    const resEl = document.getElementById('calc-compound-total');
    if (resEl) resEl.innerText = `${Math.round(total).toLocaleString('tr-TR')} TL`;

    const investedEl = document.getElementById('calc-total-invested');
    if (investedEl) investedEl.innerText = `Cebinizden Çıkan: ${Math.round(totalInvested).toLocaleString('tr-TR')} TL`;

    const profitEl = document.getElementById('calc-total-profit');
    if (profitEl) profitEl.innerText = `Bileşik Faiz Kârı: ${Math.round(interest).toLocaleString('tr-TR')} TL`;
}

function calculateRule72() {
    const rate = parseFloat(document.getElementById('rule72-rate')?.value || 24);
    const years = (72 / rate).toFixed(1);
    const resEl = document.getElementById('rule72-result');
    if (resEl) resEl.innerText = `${years} Yılda 2 Katına Çıkar`;
}

function calculateInflationErosion() {
    const amount = parseFloat(document.getElementById('inf-amount')?.value || 100000);
    const infRate = parseFloat(document.getElementById('inf-rate')?.value || 45) / 100;
    const years = parseFloat(document.getElementById('inf-years')?.value || 5);

    const realValue = amount / Math.pow(1 + infRate, years);
    const resEl = document.getElementById('inf-result');
    if (resEl) resEl.innerText = `${Math.round(realValue).toLocaleString('tr-TR')} TL`;
}

// ============================================================
// 4. DİJİTAL FİNANS EL KİTABI & SÖZLÜK (BOOK VIEW)
// ============================================================
function renderBookContent(filter = 'all', searchQuery = '') {
    const container = document.getElementById('book-content-grid');
    if (!container) return;
    container.innerHTML = '';

    const dict = window.financeBookData.dictionary.items || [];
    const search = searchQuery.toLowerCase().trim();

    const filtered = dict.filter(item => {
        const matchesSearch = !search || item.term.toLowerCase().includes(search) || item.def.toLowerCase().includes(search);
        return matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = '<div style="color:#64748b; font-size:14px; grid-column: 1/-1;">Aradığınız terim bulunamadı.</div>';
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'book-item-card';
        card.innerHTML = `
            <div class="book-item-cat">${item.category}</div>
            <div class="book-item-title">${item.term}</div>
            <div class="book-item-desc">${item.def}</div>
        `;
        container.appendChild(card);
    });
}

function filterBookTerms(query) {
    renderBookContent('all', query);
}

// ============================================================
// 5. FİNANSAL HEDEFLER & BİRİKİM KULÜBÜ (PROJECTS VIEW)
// ============================================================
function renderGoals() {
    const container = document.getElementById('goals-grid-container');
    if (!container) return;
    container.innerHTML = '';

    userFinancialGoals.forEach(g => {
        const pct = Math.min(100, Math.round((g.current / g.target) * 100));
        const card = document.createElement('div');
        card.className = 'goal-card';
        card.innerHTML = `
            <div class="goal-card-top">
                <div class="goal-title"><i class="fa-solid ${g.icon}" style="color:${g.color}; margin-right:8px;"></i> ${g.title}</div>
                <span style="font-size:12.5px; font-weight:800; color:${g.color};">%${pct}</span>
            </div>
            <div class="goal-amount-row">
                <span>Mevcut: ${g.current.toLocaleString('tr-TR')} TL</span>
                <span>Hedef: ${g.target.toLocaleString('tr-TR')} TL</span>
            </div>
            <div class="goal-progress-bg">
                <div class="goal-progress-fill" style="width: ${pct}%;"></div>
            </div>
            <div style="display:flex; gap:8px;">
                <button type="button" class="btn-primary" style="flex:1; padding:8px; font-size:12.5px;" onclick="addFundsToGoal(${g.id})">
                    <i class="fa-solid fa-plus"></i> Tasarruf Ekle
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function addFundsToGoal(id) {
    const goal = userFinancialGoals.find(g => g.id === id);
    if (!goal) return;
    const amountStr = prompt(`"${goal.title}" hedefine eklenecek tutarı girin (TL):`, '5000');
    if (!amountStr) return;
    const amount = parseFloat(amountStr);
    if (isNaN(amount) || amount <= 0) return;

    goal.current += amount;
    renderGoals();
    showToast(`${amount.toLocaleString('tr-TR')} TL hedefe eklendi!`, 'success');
}

function openCreateGoalModal() {
    const title = prompt('Yeni Finansal Hedef Başlığı (Örn: Ev Peşinatı, Emeklilik Fonu):');
    if (!title) return;
    const targetStr = prompt('Hedeflenen Toplam Tutar (TL):', '100000');
    const target = parseFloat(targetStr);
    if (isNaN(target) || target <= 0) return;

    userFinancialGoals.push({
        id: Date.now(),
        title: title,
        target: target,
        current: 0,
        icon: 'fa-bullseye',
        color: '#059669'
    });

    renderGoals();
    showToast('Yeni finansal hedef başarıyla eklendi!', 'success');
}

// ============================================================
// 6. 1v1 FİNANS BİLGİ DÜELLOSU
// ============================================================
let duelQuestions = [];
let duelCurrentIdx = 0;
let duelUserScore = 0;
let duelBotScore = 0;

function openDuelModal() {
    duelQuestions = [
        { q: "50/30/20 kuralında %20'lik dilim neye ayrılır?", a: ["İsteklere", "Tasarruf ve Yatırıma", "Kira ödemesine", "Vergilere"], c: 1 },
        { q: "Bir hissenin F/K oranı 6 ise ne anlama gelir?", a: ["Şirket 6 ay sonra batar", "Şirket değerini 6 yılda amorti eder", "Hisse fiyatı 6 TL'dir", "Hisse 6 kez bölünmüştür"], c: 1 },
        { q: "Einstein'ın 'Dünyanın 8. Harikası' dediği finansal güç hangisidir?", a: ["Kaldıraçlı İşlem", "Bileşik Getiri", "Kısa Pozisyon", "Madencilik"], c: 1 },
        { q: "Bitcoin'in maksimum toplam arzı ne kadardır?", a: ["21 Milyon", "100 Milyon", "Sınırsız", "1 Milyar"], c: 0 },
        { q: "Enflasyon %50 iken mevduat faizi %40 ise paranızın reel durumu nedir?", a: ["%10 reel kazanç", "Alım gücü erir (Negatif reel getiri)", "Sabit kalır", "%40 zenginleşir"], c: 1 }
    ];
    duelCurrentIdx = 0;
    duelUserScore = 0;
    duelBotScore = 0;

    const modal = document.getElementById('duel-modal');
    if (modal) modal.classList.remove('hidden');
    renderDuelQuestion();
}

function renderDuelQuestion() {
    if (duelCurrentIdx >= duelQuestions.length) {
        finishDuel();
        return;
    }

    const q = duelQuestions[duelCurrentIdx];
    document.getElementById('duel-q-index').innerText = `Soru ${duelCurrentIdx + 1} / ${duelQuestions.length}`;
    document.getElementById('duel-question-text').innerText = q.q;
    document.getElementById('duel-user-score').innerText = duelUserScore;
    document.getElementById('duel-bot-score').innerText = duelBotScore;

    const optWrap = document.getElementById('duel-options-wrap');
    optWrap.innerHTML = '';

    q.a.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz-opt-btn';
        btn.innerText = optText;
        btn.onclick = () => answerDuelQuestion(idx);
        optWrap.appendChild(btn);
    });
}

function answerDuelQuestion(selectedIdx) {
    const q = duelQuestions[duelCurrentIdx];
    if (selectedIdx === q.c) {
        duelUserScore += 100;
        showToast('Doğru cevap! +100 Puan', 'success');
    } else {
        showToast('Yanlış cevap!', 'danger');
    }

    if (Math.random() < 0.7) {
        duelBotScore += 100;
    }

    duelCurrentIdx++;
    renderDuelQuestion();
}

function finishDuel() {
    let msg = '';
    if (duelUserScore > duelBotScore) {
        msg = `🏆 Tebrikler, Düelloyu Kazandınız!\n\nSkorunuz: ${duelUserScore} - Rakip: ${duelBotScore}\n+50 FinansCoin kazandınız!`;
        userGems += 50;
    } else if (duelUserScore < duelBotScore) {
        msg = `🥈 Rakip Kazandı!\n\nSkorunuz: ${duelUserScore} - Rakip: ${duelBotScore}\nBir dahaki sefere daha çok çalışın!`;
    } else {
        msg = `🤝 Berabere!\n\nSkor: ${duelUserScore} - ${duelBotScore}`;
    }
    alert(msg);
    closeModal('duel-modal');
    updateGamificationStats();
}

// ============================================================
// 7. PROFİL, GİRİŞ & ŞİFRE YÖNETİMİ
// ============================================================
function openProfileModal() {
    const modal = document.getElementById('profile-modal');
    if (!modal) return;

    document.getElementById('prof-name').innerText = userProfile.name;
    document.getElementById('prof-username').innerText = `@${userProfile.username}`;
    document.getElementById('prof-email-display').innerText = userProfile.email;
    document.getElementById('prof-title').innerText = userProfile.levelTitle;
    document.getElementById('prof-risk').innerText = userProfile.riskProfile;
    document.getElementById('prof-xp').innerText = userXp;
    document.getElementById('prof-gems').innerText = userGems;
    document.getElementById('prof-streak').innerText = `${userStreak} Gün`;

    const passBox = document.getElementById('change-password-box');
    if (passBox) passBox.classList.add('hidden');

    modal.classList.remove('hidden');
}

function toggleChangePasswordForm() {
    const passBox = document.getElementById('change-password-box');
    if (passBox) {
        passBox.classList.toggle('hidden');
        document.getElementById('pwd-current').value = '';
        document.getElementById('pwd-new').value = '';
        document.getElementById('pwd-confirm').value = '';
    }
}

function submitPasswordChange() {
    const currentPass = document.getElementById('pwd-current').value;
    const newPass = document.getElementById('pwd-new').value;
    const confirmPass = document.getElementById('pwd-confirm').value;

    if (!currentPass || !newPass || !confirmPass) {
        showToast('Lütfen tüm şifre alanlarını doldurun!', 'warning');
        return;
    }

    if (currentPass !== userProfile.password) {
        showToast('Mevcut şifreniz hatalı!', 'danger');
        return;
    }

    if (newPass.length < 4) {
        showToast('Yeni şifre en az 4 karakter olmalıdır!', 'warning');
        return;
    }

    if (newPass !== confirmPass) {
        showToast('Yeni şifreler birbiriyle uyuşmuyor!', 'danger');
        return;
    }

    userProfile.password = newPass;
    saveProfileToStorage();
    toggleChangePasswordForm();
    showToast('Şifreniz başarıyla güncellendi! ✅', 'success');
}

function logoutUser() {
    if (!confirm('Hesabınızdan çıkış yapmak istediğinize emin misiniz?')) return;
    userProfile.isLoggedIn = false;
    saveProfileToStorage();
    closeModal('profile-modal');
    document.getElementById('app-container').classList.add('hidden');
    document.getElementById('landing').classList.remove('hidden');
    openShowcaseView();
    showToast('Başarıyla çıkış yapıldı.', 'info');
}

function loginUser() {
    const email = document.getElementById('auth-login-email').value.trim();
    const pass = document.getElementById('auth-login-pass').value;

    if (!email || !pass) {
        showToast('Lütfen e-posta ve şifrenizi girin!', 'warning');
        return;
    }

    if (email === userProfile.email && pass === userProfile.password) {
        userProfile.isLoggedIn = true;
        saveProfileToStorage();
        closeModal('auth-modal');
        document.getElementById('landing').classList.add('hidden');
        document.getElementById('app-container').classList.remove('hidden');
        renderRoadmap();
        showToast(`Tekrar hoş geldiniz, ${userProfile.name}! 👋`, 'success');
    } else {
        showToast('E-posta veya şifre hatalı! (Varsayılan: deniz@finansplus.com / finans2026password)', 'danger');
    }
}

function registerUser() {
    const name = document.getElementById('auth-reg-name').value.trim();
    const email = document.getElementById('auth-reg-email').value.trim();
    const pass = document.getElementById('auth-reg-pass').value;

    if (!name || !email || !pass) {
        showToast('Lütfen tüm alanları doldurun!', 'warning');
        return;
    }

    userProfile.name = name;
    userProfile.username = email.split('@')[0] || 'finans_kullanici';
    userProfile.email = email;
    userProfile.password = pass;
    userProfile.isLoggedIn = true;
    saveProfileToStorage();

    closeModal('auth-modal');
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
    renderRoadmap();
    showToast(`Kaydınız tamamlandı. Hoş geldiniz, ${name}! 🎉`, 'success');
}

function openAuthModal(mode = 'login') {
    const modal = document.getElementById('auth-modal');
    if (!modal) return;

    if (mode === 'login') {
        document.getElementById('auth-login-tab').classList.add('active');
        document.getElementById('auth-reg-tab').classList.remove('active');
        document.getElementById('auth-login-form').classList.remove('hidden');
        document.getElementById('auth-reg-form').classList.add('hidden');
    } else {
        document.getElementById('auth-login-tab').classList.remove('active');
        document.getElementById('auth-reg-tab').classList.add('active');
        document.getElementById('auth-login-form').classList.add('hidden');
        document.getElementById('auth-reg-form').classList.remove('hidden');
    }

    modal.classList.remove('hidden');
}

function switchAuthTab(mode) {
    openAuthModal(mode);
}

function changeRiskProfile(profileName) {
    userProfile.riskProfile = profileName;
    saveProfileToStorage();
    document.getElementById('prof-risk').innerText = profileName;
    showToast(`Risk Profiliniz "${profileName}" olarak güncellendi!`, 'info');
}

// ============================================================
// 8. FİNANS+ AKILLI PİYASA VE YATIRIM DANIŞMANI
// ============================================================
const finansAdvisorQuotes = [
    "Unutma: 'Herkes açgözlüyken korkak ol, herkes korkakken açgözlü ol.' - Warren Buffett",
    "Bileşik getiri kartopu gibidir; ne kadar erken başlarsan dağdan o kadar devasa bir çığ iner!",
    "Acil durum fonunu tamamlamadan yüksek riskli kripto veya kaldıraçlı işlemlere girme.",
    "Borsada para sabırsızlardan sabırlılara doğru el değiştirir.",
    "Günde kestiğin 100 TL'lik gereksiz harcama, 5 yılda 300.000 TL yatırım sermayesi demektir!",
    "Tüm yumurtaları aynı sepete koyma; portföyünü hisse, altın, fon ve nakit ile dengele.",
    "Enflasyonun altında faiz almak reel olarak fakirleşmektir; reel getiri tek pusulandır."
];

function toggleFinansAdvisor() {
    const randomQuote = finansAdvisorQuotes[Math.floor(Math.random() * finansAdvisorQuotes.length)];
    alert(`💡 Finans+ Piyasa Danışmanı:\n\n"${randomQuote}"`);
}

// ============================================================
// YARDIMCI VE DESTEK FONKSİYONLARI
// ============================================================
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('hidden');
}

function updateGamificationStats() {
    const sEl = document.getElementById('stat-streak-val');
    const gEl = document.getElementById('stat-gems-val');
    const xEl = document.getElementById('stat-xp-val');
    const hEl = document.getElementById('stat-hearts-val');

    if (sEl) sEl.innerText = userStreak;
    if (gEl) gEl.innerText = userGems;
    if (xEl) xEl.innerText = userXp;
    if (hEl) hEl.innerText = userHearts;
}

function showToast(msg, type = 'info') {
    const toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.bottom = '24px';
    toast.style.right = '24px';
    toast.style.background = type === 'danger' ? '#dc2626' : (type === 'success' ? '#059669' : '#0f172a');
    toast.style.color = '#fff';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '14px';
    toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.18)';
    toast.style.fontSize = '14px';
    toast.style.fontWeight = '700';
    toast.style.zIndex = '9999';
    toast.style.transition = 'all 0.3s ease';
    toast.innerText = msg;

    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}

function saveProfileToStorage() {
    try {
        localStorage.setItem('finans_user_profile', JSON.stringify(userProfile));
        localStorage.setItem('finans_unlocked', JSON.stringify(unlockedLevels));
        localStorage.setItem('finans_xp', String(userXp));
        localStorage.setItem('finans_gems', String(userGems));
        localStorage.setItem('finans_streak', String(userStreak));
    } catch (e) {}
}

function loadProfileFromStorage() {
    try {
        const p = localStorage.getItem('finans_user_profile');
        if (p) userProfile = JSON.parse(p);
        const u = localStorage.getItem('finans_unlocked');
        if (u) unlockedLevels = JSON.parse(u);
        const x = localStorage.getItem('finans_xp');
        if (x) userXp = parseInt(x);
        const g = localStorage.getItem('finans_gems');
        if (g) userGems = parseInt(g);
        const s = localStorage.getItem('finans_streak');
        if (s) userStreak = parseInt(s);
    } catch (e) {}
}

function openAuthView(event) {
    if (event) event.stopPropagation();
    const showcaseView = document.getElementById('landing-showcase-view');
    const authView = document.getElementById('landing-auth-view');
    if (showcaseView) showcaseView.style.display = 'none';
    if (authView) {
        authView.style.display = 'grid';
        authView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function openShowcaseView() {
    const showcaseView = document.getElementById('landing-showcase-view');
    const authView = document.getElementById('landing-auth-view');
    if (authView) authView.style.display = 'none';
    if (showcaseView) {
        showcaseView.style.display = 'block';
        showcaseView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function switchLandingAuthTab(mode) {
    const loginTabBtn = document.getElementById('tab-btn-login');
    const regTabBtn = document.getElementById('tab-btn-register');
    const loginForm = document.getElementById('landing-login-form');
    const regForm = document.getElementById('landing-register-form');

    if (mode === 'login') {
        if (loginTabBtn) loginTabBtn.classList.add('active');
        if (regTabBtn) regTabBtn.classList.remove('active');
        if (loginForm) loginForm.style.display = 'block';
        if (regForm) regForm.style.display = 'none';
    } else {
        if (regTabBtn) regTabBtn.classList.add('active');
        if (loginTabBtn) loginTabBtn.classList.remove('active');
        if (loginForm) loginForm.style.display = 'none';
        if (regForm) regForm.style.display = 'block';
    }
}

function handleLandingLogin(event) {
    if (event) event.preventDefault();
    const emailInput = document.getElementById('landing-login-email');
    const passInput = document.getElementById('landing-login-pass');
    const email = emailInput ? emailInput.value.trim() : '';
    const pass = passInput ? passInput.value : '';

    if (!email || !pass) {
        showToast('Lütfen e-posta ve şifrenizi giriniz!', 'warning');
        return;
    }

    if (email === userProfile.email && pass === userProfile.password) {
        userProfile.isLoggedIn = true;
        saveProfileToStorage();
        document.getElementById('landing').classList.add('hidden');
        document.getElementById('app-container').classList.remove('hidden');
        renderRoadmap();
        showToast(`Tekrar hoş geldiniz, ${userProfile.name}! 📈`, 'success');
    } else if (email && pass.length >= 4) {
        userProfile.email = email;
        userProfile.username = email.split('@')[0] || 'finans_kullanici';
        userProfile.name = userProfile.username.charAt(0).toUpperCase() + userProfile.username.slice(1);
        userProfile.password = pass;
        userProfile.isLoggedIn = true;
        saveProfileToStorage();
        document.getElementById('landing').classList.add('hidden');
        document.getElementById('app-container').classList.remove('hidden');
        renderRoadmap();
        showToast(`Giriş başarılı! Hoş geldiniz, ${userProfile.name}! 🚀`, 'success');
    } else {
        showToast('E-posta veya şifre hatalı! (Varsayılan: deniz@finansplus.com / finans2026password)', 'danger');
    }
}

function handleLandingRegister(event) {
    if (event) event.preventDefault();
    const nameInput = document.getElementById('landing-register-name');
    const emailInput = document.getElementById('landing-register-email');
    const passInput = document.getElementById('landing-register-pass');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const pass = passInput ? passInput.value : '';

    if (!name || !email || !pass) {
        showToast('Lütfen tüm kayıt alanlarını doldurunuz!', 'warning');
        return;
    }

    userProfile.name = name;
    userProfile.username = email.split('@')[0] || 'finans_kullanici';
    userProfile.email = email;
    userProfile.password = pass;
    userProfile.isLoggedIn = true;
    saveProfileToStorage();

    document.getElementById('landing').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
    renderRoadmap();
    showToast(`Kaydınız oluşturuldu. Hoş geldiniz, ${name}! 🎉`, 'success');
}

function enterPlatform() {
    userProfile.isLoggedIn = true;
    saveProfileToStorage();
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
    renderRoadmap();
    showToast(`Finans+ Platformuna Hoş Geldiniz! 🚀`, 'success');
}
