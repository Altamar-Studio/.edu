import re

with open("generadores/update_news.py", "r", encoding="utf-8") as f:
    code = f.read()

# 1. Add LOGO_FALLBACKS and get_og_image function
new_funcs = """
LOGO_FALLBACKS = {
    'UNAM': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Logo_UNAM.svg',
    'IPN': 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Logo_Instituto_Polit%C3%A9cnico_Nacional.png',
    'UV': 'https://upload.wikimedia.org/wikipedia/commons/3/36/Escudo_de_la_Universidad_Veracruzana.svg',
    'UAM': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Logo_UAM.svg',
    'BUAP': 'https://upload.wikimedia.org/wikipedia/commons/6/63/Escudo_buap.svg',
    'CHAPINGO': 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Logo_de_la_Universidad_Aut%C3%B3noma_Chapingo.png'
}

def get_og_image(url, fallback_uni):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=3) as response:
            html = response.read().decode('utf-8', errors='ignore')
            match = re.search(r'<meta\s+(?:property|name)=["\']og:image["\']\s+content=["\']([^"\']+)["\']', html, re.IGNORECASE)
            if match:
                return match.group(1), False
    except:
        pass
    return LOGO_FALLBACKS.get(fallback_uni, MOCK_IMAGES[0]), True

def clean_html(raw_html):"""
code = code.replace("def clean_html(raw_html):", new_funcs)

# 2. Replace the random image logic with the actual fetch
old_append = """                all_news.append({
                    'id': global_id,
                    'uni': uni,
                    'title': title,
                    'excerpt': excerpt,
                    'image': random.choice(MOCK_IMAGES), # Imágenes estéticas random
                    'date': date_obj.isoformat(),
                    'category': 'Admisión / Convocatoria',
                    'url': link,
                    'origin': source,
                    'featured': False, # Luego calcularemos cuál es el destacado
                    'score': score
                })"""

new_append = """                # Scraping og:image
                image_url, is_fallback = get_og_image(link, uni)

                all_news.append({
                    'id': global_id,
                    'uni': uni,
                    'title': title,
                    'excerpt': excerpt,
                    'image': image_url,
                    'is_fallback': is_fallback,
                    'date': date_obj.isoformat(),
                    'category': 'Admisión / Convocatoria',
                    'url': link,
                    'origin': source,
                    'featured': False,
                    'score': score
                })"""
code = code.replace(old_append, new_append)

with open("generadores/update_news.py", "w", encoding="utf-8") as f:
    f.write(code)

print("update_news.py modified successfully.")
