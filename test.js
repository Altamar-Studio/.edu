var window = { matchMedia: function() { return { matches: false }; } };
var document = { 
    documentElement: { classList: { add: function(){}, remove: function(){} } },
    getElementById: function(id) {
        if(id === 'lesson-nodes') return { innerHTML: '' };
        return { textContent: '', classList: { add: function(){}, remove: function(){} }, style: {} };
    },
    addEventListener: function(event, cb) { if(event === 'DOMContentLoaded') cb(); },
    querySelectorAll: function() { return []; }
};
var localStorage = {
    getItem: function() { return '{"xp":20,"streak":1,"lives":5,"completedLessons":["en_a1_u1_l0"]}'; },
    setItem: function() {}
};

// Paste userProfile.js
const PROFILE_KEY = 'ea_user_profile';
const DEFAULT_PROFILE = { xp: 0, streak: 0, lastActiveDate: null, activeDays: [], lives: 5, lastLivesUpdate: Date.now(), achievements: [], completedLessons: [], lessonStars: {}, vocabMastery: {} };
const LIFE_RECHARGE_MS = 15 * 60 * 1000;
const AVAILABLE_ACHIEVEMENTS = {
    'first_lesson': { id: 'first_lesson', name: 'Primer Paso', icon: '🐣', desc: 'Completaste tu primera lección' },
    'perfect_score': { id: 'perfect_score', name: 'Perfección', icon: '🎯', desc: '100% de aciertos en una lección' },
    'streak_3': { id: 'streak_3', name: 'En Racha', icon: '🔥', desc: 'Alcanzaste 3 días de racha' },
    'streak_7': { id: 'streak_7', name: 'Fuego Semanal', icon: '☄️', desc: 'Alcanzaste 7 días de racha' },
    'streak_30': { id: 'streak_30', name: 'Imparable', icon: '🌋', desc: 'Alcanzaste 30 días de racha' },
    'xp_100': { id: 'xp_100', name: 'Estudioso', icon: '🧠', desc: 'Acumulaste 100 XP' }
};

function getProfile() {
    const data = localStorage.getItem(PROFILE_KEY);
    if (!data) return DEFAULT_PROFILE;
    let parsed = JSON.parse(data);
    if (!parsed.completedLessons) parsed.completedLessons = [];
    if (!parsed.achievements) parsed.achievements = [];
    if (!parsed.vocabMastery) parsed.vocabMastery = {};
    if (!parsed.activeDays) parsed.activeDays = parsed.lastActiveDate ? [parsed.lastActiveDate] : [];
    if (!parsed.lessonStars) parsed.lessonStars = {};
    if (parsed.lives === undefined) parsed.lives = 5;
    if (!parsed.lastLivesUpdate) parsed.lastLivesUpdate = Date.now();
    return parsed;
}

function getLessonState(lang, level, unit, lessonIdx, totalLessons) {
    const profile = getProfile();
    const key = `${lang}_${level}_u${unit}_l${lessonIdx}`;
    if (profile.completedLessons.includes(key)) return 'completed';
    const prevKey = `${lang}_${level}_u${unit}_l${lessonIdx - 1}`;
    if (lessonIdx === 0 || profile.completedLessons.includes(prevKey)) return 'active';
    return 'locked';
}

const LANG = 'en', LEVEL = 'a1', UNIT = '1';
const TOTAL_LESSONS = 5;
const OFFSETS = ['-ml-[25%]', 'ml-[25%]', '-ml-[15%]', 'ml-[35%]', '-ml-[5%]', 'ml-[15%]'];

function renderPath() {
    const nodesContainer = document.getElementById('lesson-nodes');
    if (!nodesContainer) return;
    nodesContainer.innerHTML = '';
    let completedCount = 0;
    const items = [];
    for (let i = 0; i < TOTAL_LESSONS; i++) {
        items.push({ type: 'lesson', index: i });
        if (i === 2) items.push({ type: 'chest', afterLesson: 2 });
    }

    let activeIndex = -1;
    for (let i = 0; i < TOTAL_LESSONS; i++) {
        if (getLessonState(LANG, LEVEL, UNIT, i, TOTAL_LESSONS) === 'active') {
            activeIndex = i; break;
        }
    }
    if (activeIndex === -1 && getLessonState(LANG, LEVEL, UNIT, 0, TOTAL_LESSONS) === 'locked') activeIndex = 0;

    let html = '';
    items.forEach((item, idx) => {
        const offset = OFFSETS[idx % OFFSETS.length] || '';
        if (item.type === 'lesson') {
            const state = getLessonState(LANG, LEVEL, UNIT, item.index, TOTAL_LESSONS);
            if (state === 'completed') {
                completedCount++;
                const profile = getProfile();
                const key = `${LANG}_${LEVEL}_u${UNIT}_l${item.index}`;
                const stars = profile.lessonStars && profile.lessonStars[key] ? profile.lessonStars[key] : 1;
                let starsHtml = `<div class="absolute -bottom-6 flex gap-0.5">`;
                for(let s=0; s<3; s++) {
                    if(s < stars) starsHtml += `<span class="text-yellow-400 text-[10px] drop-shadow-sm">⭐</span>`;
                    else starsHtml += `<span class="text-gray-300 dark:text-neutral-700 text-[10px] grayscale opacity-50">⭐</span>`;
                }
                starsHtml += `</div>`;
                html += `A`;
            } else if (state === 'active') {
                html += `B`;
            } else {
                html += `C`;
            }
        } else if (item.type === 'chest') {
            const prevState = getLessonState(LANG, LEVEL, UNIT, item.afterLesson, TOTAL_LESSONS);
            if (prevState === 'completed') html += `D`;
            else html += `E`;
        }
    });

    console.log("HTML generated: " + html);
    console.log("completedCount: " + completedCount);
}

try {
    renderPath();
} catch(e) {
    console.log("Error: " + e.message);
}
