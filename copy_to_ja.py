import os

with open("curso-ingles.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replacements
replacements = {
    "<title>Curso de Inglés - EstudiandoAndo</title>": "<title>Curso de Japonés - EstudiandoAndo</title>",
    "🇺🇸": "🇯🇵",
    '<h1 class="text-2xl font-bold tracking-tight text-ea-dark dark:text-white">Inglés</h1>': '<h1 class="text-2xl font-bold tracking-tight text-ea-dark dark:text-white">Japonés</h1>',
    
    # Colors (UI header + map path) -> We will use Red for Japanese
    "text-blue-600": "text-red-600",
    "dark:text-blue-400": "dark:text-red-400",
    "text-blue-800": "text-red-800",
    "dark:text-blue-100": "dark:text-red-100",
    "bg-blue-100/50": "bg-red-100/50",
    "dark:bg-blue-900/50": "dark:bg-red-900/50",
    "border-blue-200": "border-red-200",
    "dark:border-blue-800": "dark:border-red-800",
    "bg-blue-600": "bg-red-600",
    "border-blue-800": "border-red-800",
    "ring-blue-400/50": "ring-red-400/50",
    "rgba(37,99,235,0.5)": "rgba(220,38,38,0.5)",
    "rgba(37,99,235,0.6)": "rgba(220,38,38,0.6)",
    "rgba(37,99,235,0.4)": "rgba(220,38,38,0.4)",
    "#2563eb": "#dc2626", # blue-600 hex to red-600 hex
    
    # JS variables
    "const LANG = 'en'": "const LANG = 'ja'",
    '"Saludos y Presentaciones"': '"Saludos (Aisatsu)"',
    '"Mi Familia y Yo"': '"Familia (Kazoku)"',
    '"En la Ciudad"': '"Ciudad (Machi)"',
    '"Rutina Diaria"': '"Rutina (Nichijō)"',
    '"Comida y Bebida"': '"Comida (Tabemono)"',
    '"Ropa y Compras"': '"Compras (Kaimono)"',
    '"Hobbies y Tiempo Libre"': '"Hobbies (Shumi)"',
    '"Planes Futuros"': '"Planes (Yotei)"'
}

for old, new in replacements.items():
    html = html.replace(old, new)

with open("curso-japones.html", "w", encoding="utf-8") as f:
    f.write(html)
    
print("curso-japones.html created successfully.")
