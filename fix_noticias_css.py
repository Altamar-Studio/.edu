import re

with open("noticias.html", "r", encoding="utf-8") as f:
    html = f.read()

# CSS Fix
css_old = r".img-container img \{"
css_new = r".img-container img {\n            transition: transform 0.7s ease;\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n        }\n        .img-container img.logo-fallback {\n            object-fit: contain;\n            padding: 2rem;\n            background-color: #f3f4f6;\n        }\n        .dark .img-container img.logo-fallback {\n            background-color: #ffffff;\n        }\n        /* hide the original rule to prevent duplicates */\n        .img-container img.old-rule {"
html = html.replace(css_old, css_new)

# renderHero fix
hero_old = r'<img src="\$\{newsItem.image\}" alt="\$\{newsItem.title\}" class="object-cover w-full h-full relative z-0">'
hero_new = r'<img src="${newsItem.image}" alt="${newsItem.title}" class="w-full h-full relative z-0 ${newsItem.is_fallback ? \'logo-fallback\' : \'object-cover\'}">'
html = html.replace(hero_old, hero_new)

# renderGrid fix
grid_old = r'<img src="\$\{news\.image\}" alt="\$\{news\.title\}" class="relative z-0">'
grid_new = r'<img src="${news.image}" alt="${news.title}" class="relative z-0 w-full h-full ${news.is_fallback ? \'logo-fallback\' : \'object-cover\'}">'
html = html.replace(grid_old, grid_new)

with open("noticias.html", "w", encoding="utf-8") as f:
    f.write(html)

print("noticias.html updated with logo fallback UI.")
