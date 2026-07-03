import re

with open("noticias.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Add CHAPINGO to filters
filter_old = r'<button onclick="filterNews\(\'BUAP\'\)" class="hover:opacity-100 hover:text-black dark:hover:text-white transition-colors" id="filter-BUAP">BUAP</button>'
filter_new = r'<button onclick="filterNews(\'BUAP\')" class="hover:opacity-100 hover:text-black dark:hover:text-white transition-colors" id="filter-BUAP">BUAP</button>\n                <button onclick="filterNews(\'CHAPINGO\')" class="hover:opacity-100 hover:text-black dark:hover:text-white transition-colors" id="filter-CHAPINGO">UACh</button>'
html = re.sub(filter_old, filter_new, html)

# 2. Update renderGrid article-card classes
# Current: class="article-card group cursor-pointer flex flex-col fade-in block"
card_old = r'class="article-card group cursor-pointer flex flex-col fade-in block"'
card_new = r'class="article-card group cursor-pointer flex flex-col fade-in block bg-white/70 dark:bg-neutral-900/80 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-3xl p-5"'
html = html.replace(card_old, card_new)

# 3. Fix img-container border radius inside the new padding
img_cont_old = r'class="img-container h-\[220px\] mb-5 relative"'
img_cont_new = r'class="img-container h-[220px] mb-5 relative rounded-2xl"'
html = html.replace(img_cont_old, img_cont_new)

with open("noticias.html", "w", encoding="utf-8") as f:
    f.write(html)

print("noticias.html updated with glass cards and Chapingo filter.")
