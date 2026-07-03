import re

# 1. Update curso-ingles.html
with open('curso-ingles.html', 'r') as f:
    content_curso = f.read()

phrases_js = """
        const motivationalPhrases = [
            "¡Tú puedes!",
            "Un paso a la vez",
            "Sigue así",
            "Excelente esfuerzo",
            "Aprender es crecer",
            "¡No te rindas!",
            "Hoy serás mejor",
            "Sigue brillando",
            "El éxito te espera",
            "¡A darle!"
        ];
"""

# Insert the array at the beginning of the script
if "const motivationalPhrases =" not in content_curso:
    content_curso = content_curso.replace(
        "const LANG = 'en', LEVEL = 'a1', UNIT = '1';",
        phrases_js + "\n        const LANG = 'en', LEVEL = 'a1', UNIT = '1';"
    )

old_mac_html = """                                    <!-- Mac Mascot with idle bounce -->
                                    <div class="absolute -top-20 -right-28 animate-[bounce_3s_infinite] w-32 pointer-events-none hidden sm:block">
                                        <img src="mac-greeting.png" alt="Mac Tutor" class="w-full h-auto drop-shadow-2xl" />
                                    </div>"""

new_bubble_html = """                                    <!-- Motivational Bubble -->
                                    <div class="absolute -top-12 -right-24 animate-[bounce_3s_infinite] pointer-events-none hidden sm:block z-50">
                                        <div class="bg-white dark:bg-neutral-800 text-ea-dark dark:text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg border border-black/10 dark:border-white/10 whitespace-nowrap relative">
                                            ${motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)]}
                                            <div class="absolute -bottom-1.5 left-4 w-3 h-3 bg-white dark:bg-neutral-800 border-b border-r border-black/10 dark:border-white/10 transform rotate-45"></div>
                                        </div>
                                    </div>"""

content_curso = content_curso.replace(old_mac_html, new_bubble_html)

with open('curso-ingles.html', 'w') as f:
    f.write(content_curso)


# 2. Update leccion.js
with open('leccion.js', 'r') as f:
    content_leccion = f.read()

old_leccion_mac = """        html += `<div class="flex items-start gap-4 mb-8">
                    <div class="relative w-24 h-24 hidden sm:block">
                        <img src="mac-greeting.png" class="absolute -top-4 w-full h-full object-contain animate-[bounce_3s_infinite] drop-shadow-md" alt="Mac">
                    </div>
                    <div class="border-2 border-black/10 dark:border-white/10 rounded-3xl rounded-tl-none p-5 font-medium text-xl bg-white dark:bg-neutral-900 shadow-sm relative w-full">
                        ${displayPhrase}
                        <div class="absolute -left-2 top-0 w-4 h-4 border-t-2 border-l-2 border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 transform -rotate-45 -mt-2 -ml-2 hidden sm:block"></div>
                    </div>
                 </div>`;"""

new_leccion_nomac = """        html += `<div class="flex items-start gap-4 mb-8">
                    <div class="border-2 border-black/10 dark:border-white/10 rounded-3xl p-5 font-medium text-xl bg-white dark:bg-neutral-900 shadow-sm relative w-full text-center">
                        ${displayPhrase}
                    </div>
                 </div>`;"""

content_leccion = content_leccion.replace(old_leccion_mac, new_leccion_nomac)

with open('leccion.js', 'w') as f:
    f.write(content_leccion)

print("Mascot removed and motivational phrases added.")
