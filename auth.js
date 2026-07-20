/**
 * auth.js
 * Maneja el inicio de sesión, registro, sesión activa y actualización del header/footer nav.
 */

const SESSION_KEY = 'ea_session';
const USERS_KEY = 'ea_users';

// Usuario por defecto precargado: Zahir, Ea2026, UV, 20 años
const PRELOADED_USER = {
    username: 'Zahir',
    password: 'Ea2026',
    university: 'UV',
    birthdate: '2006-07-20', // Hace exactamente 20 años en 2026
    age: 20
};

// Inicializar base de datos de usuarios si no existe
function initUsersDB() {
    let users = localStorage.getItem(USERS_KEY);
    if (!users) {
        localStorage.setItem(USERS_KEY, JSON.stringify([PRELOADED_USER]));
    }
}

// Calcular edad desde fecha de nacimiento
function calculateAge(birthdateString) {
    const today = new Date();
    const birthDate = new Date(birthdateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Obtener usuario actualmente autenticado
function getCurrentUser() {
    initUsersDB();
    const session = localStorage.getItem(SESSION_KEY);
    if (!session) return null;
    try {
        return JSON.parse(session);
    } catch (e) {
        return null;
    }
}

// Iniciar sesión
function login(username, password) {
    initUsersDB();
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);
    if (!user) return { success: false, message: 'Usuario o contraseña incorrectos.' };
    
    // Guardar sesión (sin incluir la contraseña por seguridad simulada)
    const sessionUser = {
        username: user.username,
        university: user.university,
        birthdate: user.birthdate,
        age: user.age || calculateAge(user.birthdate)
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    return { success: true };
}

// Registrar usuario
function register(username, password, university, birthdate) {
    initUsersDB();
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const exists = users.some(u => u.username.toLowerCase() === username.toLowerCase());
    if (exists) return { success: false, message: 'El nombre de usuario ya está registrado.' };
    
    const newUser = {
        username: username,
        password: password,
        university: university,
        birthdate: birthdate,
        age: calculateAge(birthdate)
    };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return { success: true };
}

// Cerrar sesión
function logout() {
    localStorage.removeItem(SESSION_KEY);
    window.location.href = 'index.html';
}

// Actualizar barra de navegación de forma dinámica en base al estado de la sesión
function updateNavUI() {
    const user = getCurrentUser();
    
    // 1. Añadir/Quitar enlace de Foros en la navegación de escritorio
    const navLinksContainer = document.querySelector('header nav .hidden.md\\:flex');
    if (navLinksContainer) {
        let forosLink = navLinksContainer.querySelector('a[href="foros.html"]');
        if (user) {
            if (!forosLink) {
                const a = document.createElement('a');
                a.className = 'hover:opacity-100 transition-opacity';
                a.href = 'foros.html';
                a.id = 'nav-foros-link';
                a.innerText = 'Foros';
                
                if (window.location.pathname.includes('foros.html')) {
                    a.className = 'text-black dark:text-white font-bold opacity-100 transition-colors';
                }
                navLinksContainer.appendChild(a);
            }
        } else {
            if (forosLink) {
                forosLink.remove();
            }
        }
    }

    // 2. Modificar la navegación móvil (footer bar) para inyectar la pestaña de Foros si corresponde
    const mobileNav = document.querySelector('nav.fixed.bottom-6');
    if (mobileNav) {
        let mobileForosLink = mobileNav.querySelector('a[href="foros.html"]');
        if (user) {
            if (!mobileForosLink) {
                const a = document.createElement('a');
                a.href = 'foros.html';
                a.className = 'flex flex-col items-center gap-0.5 opacity-40 hover:opacity-100 transition-opacity';
                if (window.location.pathname.includes('foros.html')) {
                    a.className = 'flex flex-col items-center gap-0.5 opacity-100 text-black dark:text-white transition-opacity';
                }
                a.innerHTML = `
                    <span class="material-symbols-outlined text-[20px]">forum</span>
                    <span class="text-[9px] font-bold tracking-tight">Foros</span>
                `;
                mobileNav.appendChild(a);
            }
        } else {
            if (mobileForosLink) {
                mobileForosLink.remove();
            }
        }
    }

    // 3. Modificar la sección de inicio de sesión / botones de auth en el Header
    const rightNavContainer = document.querySelector('header nav div.flex.items-center.gap-4');
    if (rightNavContainer) {
        const authElements = rightNavContainer.querySelectorAll('a');
        authElements.forEach(el => {
            const txt = el.innerText.toLowerCase();
            if (txt.includes('iniciar') || txt.includes('registrar') || el.href.includes('login') || el.href.includes('registro')) {
                el.remove();
            }
        });

        const existingProfileMenu = document.getElementById('profile-menu-container');
        if (existingProfileMenu) {
            existingProfileMenu.remove();
        }

        if (user) {
            const profileDiv = document.createElement('div');
            profileDiv.id = 'profile-menu-container';
            profileDiv.className = 'relative flex items-center gap-2.5';
            
            profileDiv.innerHTML = `
                <button onclick="toggleProfileDropdown()" class="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-[0.98] transition-all cursor-pointer">
                    <div class="w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 text-white font-bold flex items-center justify-center text-sm shadow-sm relative">
                        ${user.username.charAt(0).toUpperCase()}
                        <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-neutral-900 rounded-full"></span>
                    </div>
                    
                    <div class="text-left hidden md:block">
                        <span class="block text-xs font-bold text-ea-dark dark:text-white leading-none">${user.username}</span>
                        <div class="flex items-center gap-1 mt-0.5">
                            <span class="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-[8px] font-black tracking-wider uppercase opacity-80 leading-none text-blue-600 dark:text-blue-400">${user.university}</span>
                            <span class="text-[9px] opacity-40 font-bold">${user.age} años</span>
                        </div>
                    </div>
                    
                    <span class="material-symbols-outlined text-[16px] opacity-40">keyboard_arrow_down</span>
                </button>
                
                <div id="profile-dropdown" class="absolute right-0 top-12 w-64 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-[24px] p-5 shadow-xl hidden flex-col gap-4 animate-fade-in z-50">
                    <div class="border-b border-black/5 dark:border-white/5 pb-3">
                        <span class="block text-[10px] font-bold uppercase tracking-widest opacity-40">Perfil de Estudiante</span>
                        <span class="block font-serif text-xl font-bold text-ea-dark dark:text-white mt-1">${user.username}</span>
                        <div class="flex flex-wrap items-center gap-2 mt-2">
                            <span class="bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">${user.university}</span>
                            <span class="bg-black/5 dark:bg-white/10 text-[9px] font-bold px-2 py-0.5 rounded-full">${user.age} Años</span>
                        </div>
                    </div>
                    
                    <div class="space-y-2 text-xs font-medium">
                        <div class="flex justify-between items-center opacity-70">
                            <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px] text-amber-500">stars</span> Puntos XP</span>
                            <span id="profile-xp-val" class="font-bold text-ea-dark dark:text-white">0 XP</span>
                        </div>
                        <div class="flex justify-between items-center opacity-70">
                            <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px] text-orange-500">local_fire_department</span> Racha de Días</span>
                            <span id="profile-streak-val" class="font-bold text-ea-dark dark:text-white">0 Días</span>
                        </div>
                    </div>
                    
                    <div class="border-t border-black/5 dark:border-white/5 pt-3 mt-1">
                        <button onclick="logout()" class="w-full flex items-center justify-between text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-bold text-xs uppercase tracking-widest active:scale-[0.98] transition-all cursor-pointer">
                            <span>Cerrar sesión</span>
                            <span class="material-symbols-outlined text-[16px]">logout</span>
                        </button>
                    </div>
                </div>
            `;
            
            rightNavContainer.appendChild(profileDiv);

            setTimeout(() => {
                if (typeof getProfile === 'function') {
                    const localProf = getProfile();
                    const xpVal = document.getElementById('profile-xp-val');
                    const streakVal = document.getElementById('profile-streak-val');
                    if (xpVal) xpVal.innerText = `${localProf.xp || 0} XP`;
                    if (streakVal) streakVal.innerText = `${localProf.streak || 0} Días`;
                }
            }, 100);

        } else {
            const loginLink = document.createElement('a');
            loginLink.href = 'login.html';
            loginLink.className = 'text-sm font-medium opacity-60 hover:opacity-100 transition-opacity hidden sm:block';
            loginLink.innerText = 'Iniciar sesión';
            
            const registerLink = document.createElement('a');
            registerLink.href = 'registro.html';
            registerLink.className = 'bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-neutral-800 dark:hover:bg-gray-200 transition-colors';
            registerLink.innerText = 'Registrarse';
            
            rightNavContainer.appendChild(loginLink);
            rightNavContainer.appendChild(registerLink);
        }
    }
}

function toggleProfileDropdown() {
    const dropdown = document.getElementById('profile-dropdown');
    if (!dropdown) return;
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        dropdown.classList.add('flex');
    } else {
        dropdown.classList.add('hidden');
        dropdown.classList.remove('flex');
    }
}

document.addEventListener('click', (e) => {
    const container = document.getElementById('profile-menu-container');
    const dropdown = document.getElementById('profile-dropdown');
    if (container && dropdown && !container.contains(e.target)) {
        dropdown.classList.add('hidden');
        dropdown.classList.remove('flex');
    }
});

initUsersDB();
document.addEventListener('DOMContentLoaded', () => {
    updateNavUI();
});
// También llamarlo inmediatamente en caso de carga rápida
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    updateNavUI();
}
