import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
import json
import os
import random
from datetime import datetime
import re

MOCK_IMAGES = [
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
]

TARGETS = {
    'UNAM': 'UNAM admisión OR convocatoria OR ingreso',
    'IPN': 'IPN politécnico convocatoria OR ingreso OR admisión',
    'UV': 'Universidad Veracruzana admisión OR ingreso OR convocatoria',
    'UAM': 'UAM admisión OR convocatoria OR ingreso',
    'BUAP': 'BUAP admisión OR convocatoria OR examen',
    'CHAPINGO': 'Universidad Autónoma Chapingo admisión OR convocatoria OR propedéutico'
}

# Palabras clave para asignar puntaje de relevancia (Punto 3)
KEYWORDS = ['admisión', 'admision', 'convocatoria', 'ingreso', 'aspirantes', 'examen', 'resultados', 'inscripción', 'inscripcion', 'fechas', 'registro', 'exani', 'licenciatura', 'propedéutico']


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

def clean_html(raw_html):
    cleanr = re.compile('<.*?>')
    cleantext = re.sub(cleanr, '', raw_html)
    return cleantext.strip()

def fetch_university_news():
    all_news = []
    global_id = 1
    
    for uni, query in TARGETS.items():
        print(f"[{uni}] Buscando noticias...")
        
        # Google News RSS Endpoint
        encoded_query = urllib.parse.quote(query)
        url = f"https://news.google.com/rss/search?q={encoded_query}&hl=es-419&gl=MX&ceid=MX:es-419"
        
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response:
                xml_data = response.read()
            
            root = ET.fromstring(xml_data)
            items = root.findall('.//item')
            
            count = 0
            for item in items:
                title = item.find('title').text
                link = item.find('link').text
                pubDate = item.find('pubDate').text
                description = item.find('description').text if item.find('description') is not None else ""
                
                source = 'Noticias'
                parts = title.split(' - ')
                if len(parts) > 1:
                    source = parts[-1]
                
                excerpt = clean_html(description)
                excerpt = excerpt.replace(title, '').replace(source, '').strip()
                if len(excerpt) < 15:
                    excerpt = "Ingresa para leer el artículo completo en el portal oficial o medio de comunicación."
                
                # RELEVANCE FILTER
                text_to_search = (title + " " + excerpt).lower()
                score = 0
                for kw in KEYWORDS:
                    if kw in text_to_search:
                        score += 1
                
                # Si el score es 0, no es muy relevante para admisión, descartar.
                if score == 0:
                    continue
                
                date_obj = datetime.strptime(pubDate, "%a, %d %b %Y %H:%M:%S %Z")
                
                # Scraping og:image
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
                })
                global_id += 1
                count += 1
                
                # Limitar a top 5 noticias super relevantes por universidad para no saturar
                if count >= 5:
                    break

        except Exception as e:
            print(f"Error parseando {uni}: {e}")

    # Ordenar globalmente: Primero las de mayor score (más relevantes) y luego por fecha más reciente
    all_news.sort(key=lambda x: (x['score'], x['date']), reverse=True)
    
    # Marcar la primera noticia (la más relevante globalmente) como featured
    if all_news:
        all_news[0]['featured'] = True
    
    return all_news

if __name__ == "__main__":
    print("Iniciando motor de scraping en caché para EstudiandoAndo...")
    news_data = fetch_university_news()
    
    output_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'news_cache.json')
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(news_data, f, ensure_ascii=False, indent=2)
        
    print(f"¡Éxito! Se generaron {len(news_data)} noticias relevantes de admisión.")
    print(f"Guardado en: {output_path}")
