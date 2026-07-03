import re

with open("noticias.html", "r", encoding="utf-8") as f:
    html = f.read()

# Buscamos la función fetchUniNews y la removemos completamente, y reemplazamos initRealNewsAggregator
pattern = r"// Función para consultar noticias reales de Google News usando rss2json\s*async function fetchUniNews\(uni, queryName\).*?async function initRealNewsAggregator\(\) \{.*?\/\/ Mostramos los resultados\s*filterNews\('ALL'\);\s*\}"

replacement = """async function initRealNewsAggregator() {
            const gridContainer = document.getElementById('news-grid');
            const heroContainer = document.getElementById('hero-article');
            
            heroContainer.innerHTML = '';
            gridContainer.innerHTML = `
                <div class="col-span-full py-20 flex flex-col items-center justify-center gap-4 opacity-50 fade-in">
                    <span class="material-symbols-outlined text-4xl animate-spin">sync</span>
                    <p class="font-serif text-2xl italic">Cargando archivo de noticias...</p>
                </div>
            `;

            try {
                // Hacemos un solo fetch ultra rápido al archivo local cacheado
                const response = await fetch('news_cache.json');
                if (!response.ok) throw new Error('Archivo no encontrado');
                const data = await response.json();
                
                // Parseamos las fechas ISO a objetos Date de JS
                realNewsData = data.map(n => ({
                    ...n,
                    date: new Date(n.date)
                }));
            } catch (error) {
                console.warn('Fallo cargando news_cache.json, usando fallback', error);
                realNewsData = fallbackNewsData.map(n => ({...n}));
            }

            // Seleccionamos la primera noticia general como destacada y renderizamos
            if (realNewsData.length > 0) {
                realNewsData[0].featured = true;
            }
            filterNews('ALL');
        }"""

# Reemplazamos usando re.DOTALL
new_html = re.sub(pattern, replacement, html, flags=re.DOTALL)

with open("noticias.html", "w", encoding="utf-8") as f:
    f.write(new_html)

print("noticias.html updated with cached JSON logic.")
