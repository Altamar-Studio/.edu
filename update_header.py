import os
import glob

html_files = glob.glob('*.html')

old_header = """        <!-- Gamification Status Header -->
        <div class="max-w-4xl mx-auto mb-12 flex justify-center gap-4 sm:gap-6">
            <div class="bg-white/70 dark:bg-neutral-900/80 backdrop-blur-xl border border-black/10 dark:border-white/10 px-4 sm:px-6 py-2.5 rounded-full shadow-sm flex items-center gap-2 transition-transform hover:scale-105 cursor-default">
                <span class="text-orange-500 text-lg drop-shadow-sm">🔥</span>
                <span class="font-bold text-sm dark:text-white text-ea-dark" id="ui-streak">0</span>
            </div>
            <div class="bg-white/70 dark:bg-neutral-900/80 backdrop-blur-xl border border-black/10 dark:border-white/10 px-4 sm:px-6 py-2.5 rounded-full shadow-sm flex items-center gap-2 transition-transform hover:scale-105 cursor-default">
                <span class="text-yellow-400 text-lg drop-shadow-sm">⭐</span>
                <span class="font-bold text-sm dark:text-white text-ea-dark" id="ui-xp">0</span>
            </div>
            <div class="bg-white/70 dark:bg-neutral-900/80 backdrop-blur-xl border border-black/10 dark:border-white/10 px-4 sm:px-6 py-2.5 rounded-full shadow-sm flex items-center gap-2 transition-transform hover:scale-105 cursor-default">
                <span class="text-red-500 text-lg drop-shadow-sm">❤️</span>
                <span class="font-bold text-sm dark:text-white text-ea-dark" id="ui-lives">5/5</span>
            </div>
        </div>"""

new_header = """        <!-- Gamification Status Header -->
        <div class="max-w-4xl mx-auto mb-12 flex justify-center gap-4 sm:gap-6">
            <div class="group bg-white/70 dark:bg-neutral-900/80 backdrop-blur-xl border border-black/10 dark:border-white/10 px-5 sm:px-8 py-3 rounded-full shadow-sm flex items-center gap-3 transition-all hover:scale-110 hover:shadow-md hover:border-orange-500/30 cursor-default">
                <span class="text-orange-500 text-xl drop-shadow-sm transform transition-transform group-hover:scale-125 group-hover:-rotate-12">🔥</span>
                <span class="font-bold text-base dark:text-white text-ea-dark" id="ui-streak">0</span>
            </div>
            <div class="group bg-white/70 dark:bg-neutral-900/80 backdrop-blur-xl border border-black/10 dark:border-white/10 px-5 sm:px-8 py-3 rounded-full shadow-sm flex items-center gap-3 transition-all hover:scale-110 hover:shadow-md hover:border-red-500/30 cursor-default">
                <span class="text-red-500 text-xl drop-shadow-sm transform transition-transform group-hover:scale-125 group-hover:rotate-12" id="ui-heart-icon">❤️</span>
                <span class="font-bold text-base dark:text-white text-ea-dark" id="ui-lives">5/5</span>
            </div>
        </div>"""

old_nuevo = """            <div class="mb-6 flex justify-center">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[9px] font-bold uppercase tracking-widest bg-black/5 dark:bg-white/5 rounded-full border border-black/10 dark:border-white/10 opacity-70">
                    NUEVO <span class="material-symbols-outlined text-[12px]">arrow_right_alt</span>
                </span>
            </div>"""

for f in html_files:
    with open(f, 'r') as file:
        content = file.read()
    
    modified = False
    if old_header in content:
        content = content.replace(old_header, new_header)
        modified = True
    
    if f == 'idiomas.html' and old_nuevo in content:
        content = content.replace(old_nuevo, "")
        modified = True
        
    if modified:
        with open(f, 'w') as file:
            file.write(content)
        print(f"Updated {f}")

