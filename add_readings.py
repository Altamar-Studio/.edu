import json

with open('simulador-chapingo-questions.js', 'r') as f:
    content = f.read()

json_str = content.replace('window.CHAPINGO_QUESTIONS = ', '').strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

questions = json.loads(json_str)

lectura_1 = """La agricultura mexicana enfrenta el reto de producir más alimentos con menos recursos. Los suelos cultivables se erosionan a ritmos preocupantes y la disponibilidad de agua se reduce año con año. Frente a ello, modelos como la agroecología y la agricultura de conservación proponen mantener cubiertas vegetales, rotar cultivos y reducir la labranza, prácticas que protegen al suelo y aumentan su materia orgánica. La Universidad Autónoma Chapingo ha contribuido durante décadas a documentar e impulsar estas alternativas, particularmente en regiones campesinas donde la sustentabilidad y la justicia social son inseparables."""

lectura_2 = """La Reforma Agraria iniciada con la Revolución Mexicana representó una de las transformaciones más profundas del agro nacional. El reparto ejidal y la restitución de tierras a las comunidades dieron lugar a un modelo que conjugaba propiedad social con producción colectiva. Aunque a lo largo del siglo XX el modelo enfrentó contradicciones, su huella perdura en la fisonomía rural del país. La modificación al artículo 27 constitucional en 1992 marcó un punto de inflexión: abrió la posibilidad de enajenar tierras ejidales, cuestión aún debatida."""

for q in questions:
    n = q['number']
    if 28 <= n <= 32:
        q['reading_title'] = "Lectura 1"
        q['reading_text'] = lectura_1
    elif 33 <= n <= 35:
        q['reading_title'] = "Lectura 2"
        q['reading_text'] = lectura_2

with open('simulador-chapingo-questions.js', 'w') as f:
    f.write('window.CHAPINGO_QUESTIONS = ')
    json.dump(questions, f, indent=2, ensure_ascii=False)
    f.write(';\n')

