import os

with open("curso-ingles.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replacements
replacements = {
    "<title>Curso de Inglés - EstudiandoAndo</title>": "<title>Curso de Francés - EstudiandoAndo</title>",
    "🇺🇸": "🇫🇷",
    '<h1 class="text-2xl font-bold tracking-tight text-ea-dark dark:text-white">Inglés</h1>': '<h1 class="text-2xl font-bold tracking-tight text-ea-dark dark:text-white">Francés</h1>',
    
    # Colors (UI header + map path)
    "text-blue-600": "text-purple-600",
    "dark:text-blue-400": "dark:text-purple-400",
    "text-blue-800": "text-purple-800",
    "dark:text-blue-100": "dark:text-purple-100",
    "bg-blue-100/50": "bg-purple-100/50",
    "dark:bg-blue-900/50": "dark:bg-purple-900/50",
    "border-blue-200": "border-purple-200",
    "dark:border-blue-800": "dark:border-purple-800",
    "bg-blue-600": "bg-purple-600",
    "border-blue-800": "border-purple-800",
    "ring-blue-400/50": "ring-purple-400/50",
    "rgba(37,99,235,0.5)": "rgba(147,51,234,0.5)",
    "rgba(37,99,235,0.6)": "rgba(147,51,234,0.6)",
    "rgba(37,99,235,0.4)": "rgba(147,51,234,0.4)",
    "#2563eb": "#9333ea", # blue-600 hex to purple-600 hex
    
    # JS variables
    "const LANG = 'en'": "const LANG = 'fr'",
    '"Saludos y Presentaciones"': '"Les Salutations"',
    '"Mi Familia y Yo"': '"La Famille"',
    '"En la Ciudad"': '"La Ville"',
    '"Rutina Diaria"': '"La Routine"',
    '"Comida y Bebida"': '"La Nourriture"',
    '"Ropa y Compras"': '"Les Vêtements"',
    '"Hobbies y Tiempo Libre"': '"Les Loisirs"',
    '"Planes Futuros"': '"Projets"'
}

for old, new in replacements.items():
    html = html.replace(old, new)

with open("curso-frances.html", "w", encoding="utf-8") as f:
    f.write(html)
    
print("curso-frances.html created successfully.")
