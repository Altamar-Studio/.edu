/**
 * userProfile.js
 * Maneja la persistencia y lógica de gamificación local (XP, Rachas, Logros).
 * 
 * TODO [BACKEND SYNC]: 
 * - En el futuro, reemplazar las lecturas/escrituras de localStorage con llamadas fetch() a una API REST o Supabase.
 * - Sincronizar el estado local con la base de datos remota tras completar lecciones.
 */

const PROFILE_KEY = 'ea_user_profile';

const DEFAULT_PROFILE = {
    xp: 0,
    streak: 0,
    lastActiveDate: null,
    lives: 5,
    lastLivesUpdate: Date.now(),
    achievements: [] // e.g., 'first_lesson', 'perfect_score', 'streak_3'
};

const AVAILABLE_ACHIEVEMENTS = {
    'first_lesson': { id: 'first_lesson', name: 'Primer Paso', icon: '🐣', desc: 'Completaste tu primera lección' },
    'perfect_score': { id: 'perfect_score', name: 'Perfección', icon: '🎯', desc: '100% de aciertos en una lección' },
    'streak_3': { id: 'streak_3', name: 'En Racha', icon: '🔥', desc: 'Alcanzaste 3 días de racha' },
    'xp_100': { id: 'xp_100', name: 'Estudioso', icon: '🧠', desc: 'Acumulaste 100 XP' }
};

function getProfile() {
    const data = localStorage.getItem(PROFILE_KEY);
    if (!data) return DEFAULT_PROFILE;
    return JSON.parse(data);
}

function saveProfile(profile) {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    // TODO [BACKEND SYNC]: Aquí se encolaría la actualización hacia el servidor.
}

// Inicializa o repara el perfil, maneja la pérdida de racha
function initProfile() {
    let profile = getProfile();
    const today = new Date().toISOString().split('T')[0];
    
    if (profile.lastActiveDate) {
        const lastDate = new Date(profile.lastActiveDate);
        const currentDate = new Date(today);
        
        // Calcular diferencia en días (ignorando horas)
        const diffTime = Math.abs(currentDate - lastDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays > 1) {
            // Se rompió la racha
            profile.streak = 0;
        }
    }
    
    saveProfile(profile);
    updateUIHeaders();
}

// Registra actividad (suma XP, actualiza racha, revisa logros)
function recordLessonCompletion(xpEarned, accuracy) {
    let profile = getProfile();
    const today = new Date().toISOString().split('T')[0];
    
    // 1. Actualizar Racha
    if (profile.lastActiveDate !== today) {
        profile.streak += 1;
        profile.lastActiveDate = today;
    }
    
    // 2. Sumar XP
    profile.xp += xpEarned;
    
    // 3. Revisar Logros (Devuelve los nuevos desbloqueados para mostrarlos)
    let newUnlocks = [];
    
    function unlock(id) {
        if (!profile.achievements.includes(id)) {
            profile.achievements.push(id);
            newUnlocks.push(AVAILABLE_ACHIEVEMENTS[id]);
        }
    }
    
    unlock('first_lesson');
    if (accuracy === 100) unlock('perfect_score');
    if (profile.streak >= 3) unlock('streak_3');
    if (profile.xp >= 100) unlock('xp_100');
    
    saveProfile(profile);
    
    // TODO [BACKEND SYNC]: Enviar resumen de sesión al servidor
    
    return {
        newTotalXp: profile.xp,
        newStreak: profile.streak,
        newAchievements: newUnlocks
    };
}

// Funciones utilitarias para las Vidas (Lives)
function getLives() {
    return getProfile().lives;
}

function decrementLife() {
    let profile = getProfile();
    if (profile.lives > 0) {
        profile.lives--;
        profile.lastLivesUpdate = Date.now();
        saveProfile(profile);
    }
    return profile.lives;
}

// Actualiza los elementos visuales del header en idiomas.html y curso-ingles.html
function updateUIHeaders() {
    const profile = getProfile();
    const streakEl = document.getElementById('ui-streak');
    const xpEl = document.getElementById('ui-xp');
    const livesEl = document.getElementById('ui-lives');
    
    if (streakEl) streakEl.textContent = profile.streak;
    if (xpEl) xpEl.textContent = profile.xp.toLocaleString();
    if (livesEl) livesEl.textContent = profile.lives + '/5';
}

// Ejecutar init al cargar cualquier página que lo incluya
document.addEventListener('DOMContentLoaded', initProfile);
