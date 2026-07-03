import re

with open("curso-ingles.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replace the constants block
old_consts = """        const LANG = 'en', LEVEL = 'a1', UNIT = '1';
        const TOTAL_LESSONS = 5;
        // Zigzag offsets (Tailwind classes for margin)
        const OFFSETS = ['-ml-[25%]', 'ml-[25%]', '-ml-[15%]', 'ml-[35%]', '-ml-[5%]', 'ml-[15%]'];"""

new_consts = """        const LANG = 'en', LEVEL = 'a1';
        const TOTAL_UNITS = 8;
        const LESSONS_PER_UNIT = 5;
        
        const UNIT_TITLES = {
            1: "Saludos y Presentaciones",
            2: "Mi Familia y Yo",
            3: "En la Ciudad",
            4: "Rutina Diaria",
            5: "Comida y Bebida",
            6: "Ropa y Compras",
            7: "Hobbies y Tiempo Libre",
            8: "Planes Futuros"
        };
        
        // Zigzag offsets (Tailwind classes for margin)
        const OFFSETS = ['-ml-[25%]', 'ml-[25%]', '-ml-[15%]', 'ml-[35%]', '-ml-[5%]', 'ml-[15%]'];"""

html = html.replace(old_consts, new_consts)

# Replace renderPath body
old_render = """                let completedCount = 0;
                const items = [];
                
                // Build the sequence of nodes (e.g., inject a chest after lesson 2)
                for (let i = 0; i < TOTAL_LESSONS; i++) {
                    items.push({ type: 'lesson', index: i });
                    if (i === 2) {
                        items.push({ type: 'chest', afterLesson: 2 });
                    }
                }

                // Figure out the current active index by scanning states
                let activeIndex = -1;
                for (let i = 0; i < TOTAL_LESSONS; i++) {
                    if (getLessonState(LANG, LEVEL, UNIT, i, TOTAL_LESSONS) === 'active') {
                        activeIndex = i;
                        break;
                    }
                }
                if (activeIndex === -1 && getLessonState(LANG, LEVEL, UNIT, 0, TOTAL_LESSONS) === 'locked') activeIndex = 0; // fallback if all locked

                let html = '';
                
                items.forEach((item, idx) => {
                    const offset = OFFSETS[idx % OFFSETS.length] || '';
                    
                    if (item.type === 'lesson') {
                        const state = getLessonState(LANG, LEVEL, UNIT, item.index, TOTAL_LESSONS);
                        
                        if (state === 'completed') {
                            completedCount++;
                            
                            // Get stars from profile
                            const profile = getProfile();
                            const key = `${LANG}_${LEVEL}_u${UNIT}_l${item.index}`;
                            const stars = profile.lessonStars && profile.lessonStars[key] ? profile.lessonStars[key] : 1;
                            
                            let starsHtml = `<div class="absolute -bottom-6 flex gap-0.5">`;
                            for(let s=0; s<3; s++) {
                                if(s < stars) {
                                    starsHtml += `<span class="text-yellow-400 text-[10px] drop-shadow-sm">⭐</span>`;
                                } else {
                                    starsHtml += `<span class="text-gray-300 dark:text-neutral-700 text-[10px] grayscale opacity-50">⭐</span>`;
                                }
                            }
                            starsHtml += `</div>`;
                            
                            html += `
                                <a href="leccion.html?lang=${LANG}&level=${LEVEL}&unit=${UNIT}&lesson=${item.index}" class="path-node relative flex flex-col items-center group cursor-pointer ${offset} mb-6" data-state="completed">
                                    <div class="w-16 h-16 rounded-full bg-blue-600 border-4 border-white dark:border-neutral-900 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] transform transition-transform group-hover:scale-110">
                                        <span class="material-symbols-outlined font-bold text-[28px]">check</span>
                                    </div>
                                    ${starsHtml}
                                </a>`;
                        } else if (state === 'active') {
                            html += `
                                <a href="leccion.html?lang=${LANG}&level=${LEVEL}&unit=${UNIT}&lesson=${item.index}"
                                   class="path-node z-20 relative flex flex-col items-center group cursor-pointer ${offset} my-4" data-state="active">
                                    <!-- Motivational Bubble -->
                                    <div class="absolute -top-12 -right-24 animate-[bounce_3s_infinite] pointer-events-none hidden sm:block z-50">
                                        <div class="bg-white dark:bg-neutral-800 text-ea-dark dark:text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg border border-black/10 dark:border-white/10 whitespace-nowrap relative">
                                            ${motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)]}
                                            <div class="absolute -bottom-1.5 left-4 w-3 h-3 bg-white dark:bg-neutral-800 border-b border-r border-black/10 dark:border-white/10 transform rotate-45"></div>
                                        </div>
                                    </div>
                                    <div class="w-20 h-20 rounded-full bg-blue-600 border-b-8 border-blue-800 flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,99,235,0.6)] transform transition-transform group-hover:scale-105 group-active:translate-y-2 group-active:border-b-0 ring-4 ring-blue-400/50 animate-pulse">
                                        <span class="material-symbols-outlined font-bold text-[36px]">play_arrow</span>
                                    </div>
                                </a>`;
                        } else {
                            // Locked
                            html += `
                                <div class="path-node relative flex flex-col items-center group cursor-not-allowed ${offset} my-2" data-state="locked">
                                    <div class="w-16 h-16 rounded-full bg-gray-200/50 dark:bg-neutral-800/50 backdrop-blur-md border-2 border-gray-300 dark:border-neutral-700 flex items-center justify-center text-black/30 dark:text-white/30 shadow-sm">
                                        <span class="material-symbols-outlined font-bold text-[28px]">lock</span>
                                    </div>
                                </div>`;
                        }
                    } else if (item.type === 'chest') {
                        // Chest is available if the previous lesson is completed
                        const prevState = getLessonState(LANG, LEVEL, UNIT, item.afterLesson, TOTAL_LESSONS);
                        const isAvailable = (prevState === 'completed');
                        
                        if (isAvailable) {
                            html += `
                                <a href="leccion.html?lang=${LANG}&mode=review" class="path-node z-20 relative flex flex-col items-center group cursor-pointer ${offset} my-2" data-state="chest">
                                    <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 border-b-4 border-yellow-700 flex items-center justify-center text-white shadow-[0_0_20px_rgba(250,204,21,0.5)] transform transition-transform group-hover:scale-110 group-active:translate-y-1 group-active:border-b-0">
                                        <span class="text-3xl drop-shadow-md">🎁</span>
                                    </div>
                                    <div class="absolute -bottom-8 bg-white dark:bg-neutral-800 text-ea-dark dark:text-white text-[10px] font-bold px-3 py-1 rounded-xl shadow-sm border border-black/5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                        Repaso Inteligente
                                    </div>
                                </a>`;
                        } else {
                            // Locked chest
                            html += `
                                <div class="path-node relative flex flex-col items-center group cursor-not-allowed ${offset} my-2" data-state="locked">
                                    <div class="w-14 h-14 rounded-xl bg-gray-200/50 dark:bg-neutral-800/50 backdrop-blur-md border-2 border-gray-300 dark:border-neutral-700 flex items-center justify-center opacity-60">
                                        <span class="text-2xl grayscale">🎁</span>
                                    </div>
                                </div>`;
                        }
                    }
                });"""


new_render = """                let completedCount = 0;
                let totalAvailableLessons = TOTAL_UNITS * LESSONS_PER_UNIT;
                const items = [];
                
                // Build the sequence of nodes for ALL units
                for (let u = 1; u <= TOTAL_UNITS; u++) {
                    items.push({ type: 'header', unit: u, title: UNIT_TITLES[u] });
                    for (let l = 0; l < LESSONS_PER_UNIT; l++) {
                        items.push({ type: 'lesson', unit: u, index: l });
                    }
                    if (u === 4 || u === 8) {
                        items.push({ type: 'chest', unit: u, afterLesson: LESSONS_PER_UNIT - 1 });
                    }
                }

                // Figure out active index isn't as simple anymore since states cascade.
                // We just rely on getLessonState which checks localStorage
                
                let outHtml = '';
                let nodeIdx = 0;
                
                items.forEach((item) => {
                    if (item.type === 'header') {
                        outHtml += `
                            <div class="w-full max-w-sm mx-auto mt-12 mb-8 flex items-center gap-4">
                                <div class="h-px bg-gray-300 dark:bg-neutral-700 flex-1"></div>
                                <div class="text-center">
                                    <span class="text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest block mb-1">Unidad ${item.unit}</span>
                                    <h2 class="text-lg font-extrabold text-ea-dark dark:text-white leading-tight">${item.title}</h2>
                                </div>
                                <div class="h-px bg-gray-300 dark:bg-neutral-700 flex-1"></div>
                            </div>
                        `;
                    } else if (item.type === 'lesson') {
                        const offset = OFFSETS[nodeIdx % OFFSETS.length] || '';
                        nodeIdx++;
                        const state = getLessonState(LANG, LEVEL, item.unit, item.index, LESSONS_PER_UNIT);
                        
                        if (state === 'completed') {
                            completedCount++;
                            const profile = getProfile();
                            const key = `${LANG}_${LEVEL}_u${item.unit}_l${item.index}`;
                            const stars = profile.lessonStars && profile.lessonStars[key] ? profile.lessonStars[key] : 1;
                            
                            let starsHtml = `<div class="absolute -bottom-6 flex gap-0.5">`;
                            for(let s=0; s<3; s++) {
                                if(s < stars) {
                                    starsHtml += `<span class="text-yellow-400 text-[10px] drop-shadow-sm">⭐</span>`;
                                } else {
                                    starsHtml += `<span class="text-gray-300 dark:text-neutral-700 text-[10px] grayscale opacity-50">⭐</span>`;
                                }
                            }
                            starsHtml += `</div>`;
                            
                            outHtml += `
                                <a href="leccion.html?lang=${LANG}&level=${LEVEL}&unit=${item.unit}&lesson=${item.index}" class="path-node relative flex flex-col items-center group cursor-pointer ${offset} mb-6" data-state="completed">
                                    <div class="w-16 h-16 rounded-full bg-blue-600 border-4 border-white dark:border-neutral-900 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] transform transition-transform group-hover:scale-110">
                                        <span class="material-symbols-outlined font-bold text-[28px]">check</span>
                                    </div>
                                    ${starsHtml}
                                </a>`;
                        } else if (state === 'active') {
                            outHtml += `
                                <a href="leccion.html?lang=${LANG}&level=${LEVEL}&unit=${item.unit}&lesson=${item.index}"
                                   class="path-node z-20 relative flex flex-col items-center group cursor-pointer ${offset} my-4" data-state="active">
                                    <!-- Motivational Bubble -->
                                    <div class="absolute -top-12 -right-24 animate-[bounce_3s_infinite] pointer-events-none hidden sm:block z-50">
                                        <div class="bg-white dark:bg-neutral-800 text-ea-dark dark:text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg border border-black/10 dark:border-white/10 whitespace-nowrap relative">
                                            ${motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)]}
                                            <div class="absolute -bottom-1.5 left-4 w-3 h-3 bg-white dark:bg-neutral-800 border-b border-r border-black/10 dark:border-white/10 transform rotate-45"></div>
                                        </div>
                                    </div>
                                    <div class="w-20 h-20 rounded-full bg-blue-600 border-b-8 border-blue-800 flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,99,235,0.6)] transform transition-transform group-hover:scale-105 group-active:translate-y-2 group-active:border-b-0 ring-4 ring-blue-400/50 animate-pulse">
                                        <span class="material-symbols-outlined font-bold text-[36px]">play_arrow</span>
                                    </div>
                                </a>`;
                        } else {
                            outHtml += `
                                <div class="path-node relative flex flex-col items-center group cursor-not-allowed ${offset} my-2" data-state="locked">
                                    <div class="w-16 h-16 rounded-full bg-gray-200/50 dark:bg-neutral-800/50 backdrop-blur-md border-2 border-gray-300 dark:border-neutral-700 flex items-center justify-center text-black/30 dark:text-white/30 shadow-sm">
                                        <span class="material-symbols-outlined font-bold text-[28px]">lock</span>
                                    </div>
                                </div>`;
                        }
                    } else if (item.type === 'chest') {
                        const offset = OFFSETS[nodeIdx % OFFSETS.length] || '';
                        nodeIdx++;
                        
                        const prevState = getLessonState(LANG, LEVEL, item.unit, item.afterLesson, LESSONS_PER_UNIT);
                        const isAvailable = (prevState === 'completed');
                        
                        if (isAvailable) {
                            outHtml += `
                                <a href="leccion.html?lang=${LANG}&mode=review" class="path-node z-20 relative flex flex-col items-center group cursor-pointer ${offset} my-2" data-state="chest">
                                    <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 border-b-4 border-yellow-700 flex items-center justify-center text-white shadow-[0_0_20px_rgba(250,204,21,0.5)] transform transition-transform group-hover:scale-110 group-active:translate-y-1 group-active:border-b-0">
                                        <span class="text-3xl drop-shadow-md">🎁</span>
                                    </div>
                                    <div class="absolute -bottom-8 bg-white dark:bg-neutral-800 text-ea-dark dark:text-white text-[10px] font-bold px-3 py-1 rounded-xl shadow-sm border border-black/5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                        Repaso Inteligente
                                    </div>
                                </a>`;
                        } else {
                            outHtml += `
                                <div class="path-node relative flex flex-col items-center group cursor-not-allowed ${offset} my-2" data-state="locked">
                                    <div class="w-14 h-14 rounded-xl bg-gray-200/50 dark:bg-neutral-800/50 backdrop-blur-md border-2 border-gray-300 dark:border-neutral-700 flex items-center justify-center opacity-60">
                                        <span class="text-2xl grayscale">🎁</span>
                                    </div>
                                </div>`;
                        }
                    }
                });
                
                nodesContainer.innerHTML = outHtml;
                
                const counter = document.getElementById('lesson-counter');
                if (counter) counter.textContent = `${completedCount}/${totalAvailableLessons} Lecciones`;"""


# Notice that html replace might fail if exact string mismatch, so we do it carefully.
if old_render in html:
    html = html.replace(old_render, new_render)
    with open("curso-ingles.html", "w", encoding="utf-8") as f:
        f.write(html)
    print("Updated curso-ingles.html successfully.")
else:
    print("Could not find old_render string in HTML.")

