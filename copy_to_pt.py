import os

with open("curso-ingles.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replacements
replacements = {
    "<title>Curso de Inglés - EstudiandoAndo</title>": "<title>Curso de Portugués - EstudiandoAndo</title>",
    "🇺🇸": "🇧🇷",
    '<h1 class="text-2xl font-bold tracking-tight text-ea-dark dark:text-white">Inglés</h1>': '<h1 class="text-2xl font-bold tracking-tight text-ea-dark dark:text-white">Portugués</h1>',
    
    # Colors (UI header + map path) -> We will use Green for Portuguese
    "text-blue-600": "text-green-600",
    "dark:text-blue-400": "dark:text-green-400",
    "text-blue-800": "text-green-800",
    "dark:text-blue-100": "dark:text-green-100",
    "bg-blue-100/50": "bg-green-100/50",
    "dark:bg-blue-900/50": "dark:bg-green-900/50",
    "border-blue-200": "border-green-200",
    "dark:border-blue-800": "dark:border-green-800",
    "bg-blue-600": "bg-green-600",
    "border-blue-800": "border-green-800",
    "ring-blue-400/50": "ring-green-400/50",
    "rgba(37,99,235,0.5)": "rgba(22,163,74,0.5)",
    "rgba(37,99,235,0.6)": "rgba(22,163,74,0.6)",
    "rgba(37,99,235,0.4)": "rgba(22,163,74,0.4)",
    "#2563eb": "#16a34a", # blue-600 hex to green-600 hex
    
    # JS variables
    "const LANG = 'en'": "const LANG = 'pt'",
    '"Saludos y Presentaciones"': '"Saudações e Apresentações"',
    '"Mi Familia y Yo"': '"Minha Família"',
    '"En la Ciudad"': '"Na Cidade"',
    '"Rutina Diaria"': '"Rotina Diária"',
    '"Comida y Bebida"': '"Comida e Bebida"',
    '"Ropa y Compras"': '"Roupas e Compras"',
    '"Hobbies y Tiempo Libre"': '"Hobbies e Tempo Livre"',
    '"Planes Futuros"': '"Planos Futuros"'
}

for old, new in replacements.items():
    html = html.replace(old, new)

with open("curso-portugues.html", "w", encoding="utf-8") as f:
    f.write(html)
    
print("curso-portugues.html created successfully.")
