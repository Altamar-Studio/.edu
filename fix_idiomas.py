import re

with open("idiomas.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Inglés
html = html.replace(
    '<div class="absolute top-0 right-0 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-sm">En progreso</div>',
    '<div id="en-badge" class="absolute top-0 right-0 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-sm hidden">En progreso</div>'
)
html = html.replace(
    '''                <div class="space-y-3">
                    <a href="curso-ingles.html" class="block w-full text-center bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-xl text-sm font-bold shadow-sm hover:-translate-y-1 transition-transform border border-transparent">
                        Continuar Aprendiendo
                    </a>
                </div>''',
    '''                <div class="space-y-3">
                    <a id="en-btn-start" href="curso-ingles.html" class="block w-full text-center bg-white dark:bg-neutral-900 text-black dark:text-white border border-black/10 dark:border-white/10 py-3.5 rounded-xl text-sm font-bold shadow-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-700 transition-colors">
                        Empezar Curso
                    </a>
                    <a id="en-btn-continue" href="curso-ingles.html" class="hidden block w-full text-center bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-xl text-sm font-bold shadow-sm hover:-translate-y-1 transition-transform border border-transparent">
                        Continuar Aprendiendo
                    </a>
                </div>'''
)

# 2. Francés
html = html.replace(
    '<!-- Francés Card -->\n            <div class="group relative',
    '<!-- Francés Card -->\n            <div class="group relative'
)
# Add badge to Francés
html = html.replace(
    'border-l-4 border-l-purple-600 dark:border-l-purple-500 cursor-pointer">\n                <div>',
    'border-l-4 border-l-purple-600 dark:border-l-purple-500 cursor-pointer">\n                <div id="fr-badge" class="absolute top-0 right-0 bg-purple-600 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-sm hidden">En progreso</div>\n                <div>'
)
html = html.replace(
    '''                <div class="space-y-3">
                    <a href="curso-frances.html" class="block w-full text-center bg-white dark:bg-neutral-900 text-black dark:text-white border border-black/10 dark:border-white/10 py-3.5 rounded-xl text-sm font-bold shadow-sm hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-200 dark:hover:border-purple-700 transition-colors">
                        Empezar Curso
                    </a>
                </div>''',
    '''                <div class="space-y-3">
                    <a id="fr-btn-start" href="curso-frances.html" class="block w-full text-center bg-white dark:bg-neutral-900 text-black dark:text-white border border-black/10 dark:border-white/10 py-3.5 rounded-xl text-sm font-bold shadow-sm hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-200 dark:hover:border-purple-700 transition-colors">
                        Empezar Curso
                    </a>
                    <a id="fr-btn-continue" href="curso-frances.html" class="hidden block w-full text-center bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-xl text-sm font-bold shadow-sm hover:-translate-y-1 transition-transform border border-transparent">
                        Continuar Aprendiendo
                    </a>
                </div>'''
)

# 3. Portugués
html = html.replace(
    'border-l-4 border-l-green-600 dark:border-l-green-500 cursor-pointer">\n                <div>',
    'border-l-4 border-l-green-600 dark:border-l-green-500 cursor-pointer">\n                <div id="pt-badge" class="absolute top-0 right-0 bg-green-600 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-sm hidden">En progreso</div>\n                <div>'
)
html = html.replace(
    '''                <div class="space-y-3">
                    <a href="curso-portugues.html" class="block w-full text-center bg-white dark:bg-neutral-900 text-black dark:text-white border border-black/10 dark:border-white/10 py-3.5 rounded-xl text-sm font-bold shadow-sm hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-200 dark:hover:border-green-700 transition-colors">
                        Empezar Curso
                    </a>
                </div>''',
    '''                <div class="space-y-3">
                    <a id="pt-btn-start" href="curso-portugues.html" class="block w-full text-center bg-white dark:bg-neutral-900 text-black dark:text-white border border-black/10 dark:border-white/10 py-3.5 rounded-xl text-sm font-bold shadow-sm hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-200 dark:hover:border-green-700 transition-colors">
                        Empezar Curso
                    </a>
                    <a id="pt-btn-continue" href="curso-portugues.html" class="hidden block w-full text-center bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-xl text-sm font-bold shadow-sm hover:-translate-y-1 transition-transform border border-transparent">
                        Continuar Aprendiendo
                    </a>
                </div>'''
)

# 4. Japonés
html = html.replace(
    'border-l-4 border-l-red-600 dark:border-l-red-500 cursor-pointer">\n                <div>',
    'border-l-4 border-l-red-600 dark:border-l-red-500 cursor-pointer">\n                <div id="ja-badge" class="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-sm hidden">En progreso</div>\n                <div>'
)
html = html.replace(
    '''                <div class="space-y-3">
                    <button class="block w-full text-center bg-white dark:bg-neutral-900 text-black dark:text-white border border-black/10 dark:border-white/10 py-3.5 rounded-xl text-sm font-bold shadow-sm hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-200 dark:hover:border-red-700 transition-colors">
                        Empezar Curso
                    </button>
                </div>''',
    '''                <div class="space-y-3">
                    <a id="ja-btn-start" href="#" class="block w-full text-center bg-white dark:bg-neutral-900 text-black dark:text-white border border-black/10 dark:border-white/10 py-3.5 rounded-xl text-sm font-bold shadow-sm hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-200 dark:hover:border-red-700 transition-colors">
                        Empezar Curso
                    </a>
                    <a id="ja-btn-continue" href="#" class="hidden block w-full text-center bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-xl text-sm font-bold shadow-sm hover:-translate-y-1 transition-transform border border-transparent">
                        Continuar Aprendiendo
                    </a>
                </div>'''
)

# 5. Update JS Function
new_js = '''            function updateCardProgress(lang, unitIdStr, totalLessons, textId, barId) {
                const lessonsCompleted = getUnitProgress(lang, 'a1', unitIdStr, totalLessons);
                const progressPercentage = Math.round((lessonsCompleted / totalLessons) * 100);
                const progressText = document.getElementById(textId);
                const progressBar = document.getElementById(barId);
                
                if (progressText) progressText.textContent = `${progressPercentage}%`;
                if (progressBar) {
                    setTimeout(() => {
                        progressBar.style.width = `${progressPercentage}%`;
                    }, 100);
                }
                
                // Determine whether to show Start or Continue buttons based on total course progress
                // Let's check how many total lessons completed for this lang (unit 1-8)
                let totalCompletedInCourse = 0;
                for (let u = 1; u <= 8; u++) {
                    totalCompletedInCourse += getUnitProgress(lang, 'a1', u.toString(), 5);
                }
                
                const badge = document.getElementById(`${lang}-badge`);
                const btnStart = document.getElementById(`${lang}-btn-start`);
                const btnContinue = document.getElementById(`${lang}-btn-continue`);
                
                if (totalCompletedInCourse > 0) {
                    if (badge) badge.classList.remove('hidden');
                    if (btnStart) btnStart.classList.add('hidden');
                    if (btnContinue) btnContinue.classList.remove('hidden');
                } else {
                    if (badge) badge.classList.add('hidden');
                    if (btnStart) btnStart.classList.remove('hidden');
                    if (btnContinue) btnContinue.classList.add('hidden');
                }
            }'''

html = re.sub(r'function updateCardProgress.*?\}\n', new_js + '\n', html, flags=re.DOTALL)

with open("idiomas.html", "w", encoding="utf-8") as f:
    f.write(html)
    
print("idiomas.html updated successfully.")
