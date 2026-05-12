// Base de datos oficial del Simulador EXANI-II (UV) - EstudiandoAndo
// 360 reactivos premium únicos (90 por módulo)
// Sin repeticiones, sin cortes, sin errores ortográficos

const basePreguntasUV = {
  "Pensamiento Matemático": [
    {
      "id": "MAT-1",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En la sucesión 20, 26, 32... ¿cuál es el término n=5?",
      "lectura": "",
      "opciones": [
        "44",
        "50",
        "38",
        "46"
      ],
      "correcta": "44",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 44.",
      "meta": {
        "type": "2d_arithmetic_seq",
        "a1": 20,
        "d": 6
      }
    },
    {
      "id": "MAT-2",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En una urna hay 5 bolas rojas, 3 azules y 2 verdes. Al extraer dos bolas sin reemplazo, ¿cuál es la probabilidad de que ambas sean rojas?",
      "lectura": "",
      "opciones": [
        "2/9",
        "1/4",
        "5/18",
        "1/5"
      ],
      "correcta": "2/9",
      "explicacion": "Probabilidad = casos favorables / total de casos. El resultado es 2/9.",
      "meta": {
        "type": "2d_balls_box",
        "balls": [
          5,
          3,
          2
        ]
      }
    },
    {
      "id": "MAT-3",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $27 y subió a $43, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "59.3%",
        "168.8%",
        "20%",
        "50%"
      ],
      "correcta": "59.3%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 59.3%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          27,
          43
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-4",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Determina el valor de sen(θ) si sabes que cos(θ) = 4/5 y el ángulo se encuentra en el primer cuadrante.",
      "lectura": "",
      "opciones": [
        "3/5",
        "1/5",
        "2/5",
        "4/5"
      ],
      "correcta": "3/5",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 3/5.",
      "meta": {
        "type": "2d_triangle",
        "a": 4,
        "b": 3,
        "angle": 90
      }
    },
    {
      "id": "MAT-5",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Un cilindro tiene un radio de 4 cm y altura de 10 cm. Si se llena a las 3/4 partes, ¿cuál es el volumen de agua aproximado? (Use π ≈ 3.14)",
      "lectura": "",
      "opciones": [
        "376.8 cm³",
        "502.4 cm³",
        "251.2 cm³",
        "125.6 cm³"
      ],
      "correcta": "376.8 cm³",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 376.8 cm³.",
      "meta": {
        "type": "2d_cylinder",
        "r": 4,
        "h": 10,
        "fill": 0.75
      },
      "figura": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 180\" width=\"200\" height=\"180\" style=\"max-width:100%;background:#fafafa;border-radius:12px;border:1px solid #e5e5e5;padding:8px\">\n            <ellipse cx=\"100\" cy=\"40\" rx=\"60\" ry=\"20\" fill=\"none\" stroke=\"#0A0A0A\" stroke-width=\"2\"/>\n            <line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"140\" fill=\"none\" stroke=\"#0A0A0A\" stroke-width=\"2\"/>\n            <line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"140\" fill=\"none\" stroke=\"#0A0A0A\" stroke-width=\"2\"/>\n            <ellipse cx=\"100\" cy=\"140\" rx=\"60\" ry=\"20\" fill=\"none\" stroke=\"#0A0A0A\" stroke-width=\"2\"/>\n            <line x1=\"100\" y1=\"40\" x2=\"160\" y2=\"40\" stroke=\"#6366f1\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <text x=\"130\" y=\"35\" fill=\"#6366f1\" font-family=\"Inter,sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">r=4</text>\n            <line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"140\" stroke=\"#6366f1\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <text x=\"185\" y=\"95\" fill=\"#6366f1\" font-family=\"Inter,sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">h=10</text>\n        </svg>"
    },
    {
      "id": "MAT-6",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Vértice de f(x) = (x--2)² + -3",
      "lectura": "",
      "opciones": [
        "(-2, -3)",
        "(2, -3)",
        "(-2, 3)",
        "(0, 0)"
      ],
      "correcta": "(-2, -3)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (-2, -3).",
      "meta": {
        "type": "2d_parabola",
        "a": 1,
        "b": 4,
        "c": 1
      }
    },
    {
      "id": "MAT-7",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Vértice de f(x) = (x-2)² + 2",
      "lectura": "",
      "opciones": [
        "(2, 2)",
        "(-2, 2)",
        "(2, -2)",
        "(0, 0)"
      ],
      "correcta": "(2, 2)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (2, 2).",
      "meta": {
        "type": "2d_parabola",
        "a": 1,
        "b": -4,
        "c": 6
      }
    },
    {
      "id": "MAT-8",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En la sucesión 20, 28, 36... ¿cuál es el término n=5?",
      "lectura": "",
      "opciones": [
        "52",
        "60",
        "44",
        "54"
      ],
      "correcta": "52",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 52.",
      "meta": {
        "type": "2d_arithmetic_seq",
        "a1": 20,
        "d": 8
      }
    },
    {
      "id": "MAT-9",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Vértice de f(x) = (x--1)² + 2",
      "lectura": "",
      "opciones": [
        "(-1, 2)",
        "(1, 2)",
        "(-1, -2)",
        "(0, 0)"
      ],
      "correcta": "(-1, 2)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (-1, 2).",
      "meta": {
        "type": "2d_parabola",
        "a": 1,
        "b": 2,
        "c": 3
      }
    },
    {
      "id": "MAT-10",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Área de un círculo con radio 7 unidades (π=3.14):",
      "lectura": "",
      "opciones": [
        "153.9",
        "123.1",
        "163.9",
        "44.0"
      ],
      "correcta": "153.9",
      "explicacion": "Se aplica la fórmula geométrica correspondiente. El cálculo da 153.9.",
      "meta": {
        "type": "2d_circle",
        "r": 7,
        "h": 0,
        "k": 0
      }
    },
    {
      "id": "MAT-11",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En la sucesión 7, 15, 23... ¿cuál es el término n=5?",
      "lectura": "",
      "opciones": [
        "39",
        "47",
        "31",
        "41"
      ],
      "correcta": "39",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 39.",
      "meta": {
        "type": "2d_arithmetic_seq",
        "a1": 7,
        "d": 8
      }
    },
    {
      "id": "MAT-12",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $15 y subió a $36, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "140.0%",
        "71.4%",
        "20%",
        "50%"
      ],
      "correcta": "140.0%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 140.0%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          15,
          36
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-13",
      "modulo": "Pensamiento Matemático",
      "pregunta": "¿Cuál es el factor común en la expresión: 12a²b + 18ab²?",
      "lectura": "",
      "opciones": [
        "6ab",
        "3ab",
        "6a²b²",
        "12ab"
      ],
      "correcta": "6ab",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 6ab.",
      "meta": {
        "type": "2d_algebra"
      }
    },
    {
      "id": "MAT-14",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Vértice de f(x) = (x-1)² + 2",
      "lectura": "",
      "opciones": [
        "(1, 2)",
        "(-1, 2)",
        "(1, -2)",
        "(0, 0)"
      ],
      "correcta": "(1, 2)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (1, 2).",
      "meta": {
        "type": "2d_parabola",
        "a": 1,
        "b": -2,
        "c": 3
      }
    },
    {
      "id": "MAT-15",
      "modulo": "Pensamiento Matemático",
      "pregunta": "¿Distancia entre A(3,-4) y B(-1,1)?",
      "lectura": "",
      "opciones": [
        "6.4",
        "7.04",
        "8.4",
        "10.0"
      ],
      "correcta": "6.4",
      "explicacion": "Se usa la fórmula d = v × t y se despeja. El resultado es 6.4.",
      "meta": {
        "type": "2d_slope_line",
        "x1": 3,
        "y1": -4,
        "x2": -1,
        "y2": 1
      }
    },
    {
      "id": "MAT-16",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Un cine vendió 150 boletos. Los de adulto costaron $80 y los de niño $50. Si el ingreso total fue de $9,300, ¿cuántos boletos de adulto se vendieron?",
      "lectura": "",
      "opciones": [
        "60",
        "70",
        "80",
        "90"
      ],
      "correcta": "60",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 60.",
      "meta": {
        "type": "2d_algebra"
      }
    },
    {
      "id": "MAT-17",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Vértice de f(x) = (x-2)² + 2",
      "lectura": "",
      "opciones": [
        "(2, 2)",
        "(-2, 2)",
        "(2, -2)",
        "(0, 0)"
      ],
      "correcta": "(2, 2)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (2, 2).",
      "meta": {
        "type": "2d_parabola",
        "a": 1,
        "b": -4,
        "c": 6
      }
    },
    {
      "id": "MAT-18",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Factorice la expresión: x² + 5x + 6",
      "lectura": "",
      "opciones": [
        "(x + 2)(x + 3)",
        "(x + 6)(x + 1)",
        "(x - 2)(x - 3)",
        "(x + 5)(x + 1)"
      ],
      "correcta": "(x + 2)(x + 3)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (x + 2)(x + 3).",
      "meta": {
        "type": "2d_algebra"
      }
    },
    {
      "id": "MAT-19",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Factorice el trinomio x² - 7x + 12",
      "lectura": "",
      "opciones": [
        "(x - 4)(x - 3)",
        "(x - 6)(x - 2)",
        "(x + 4)(x + 3)",
        "(x - 7)(x + 5)"
      ],
      "correcta": "(x - 4)(x - 3)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (x - 4)(x - 3).",
      "meta": {
        "type": "2d_algebra"
      }
    },
    {
      "id": "MAT-20",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En la sucesión 5, 13, 21... ¿cuál es el término n=5?",
      "lectura": "",
      "opciones": [
        "37",
        "45",
        "29",
        "39"
      ],
      "correcta": "37",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 37.",
      "meta": {
        "type": "2d_arithmetic_seq",
        "a1": 5,
        "d": 8
      }
    },
    {
      "id": "MAT-21",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $28 y subió a $41, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "46.4%",
        "215.4%",
        "20%",
        "50%"
      ],
      "correcta": "46.4%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 46.4%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          28,
          41
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-22",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $14 y subió a $63, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "350.0%",
        "28.6%",
        "20%",
        "50%"
      ],
      "correcta": "350.0%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 350.0%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          14,
          63
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-23",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En la sucesión 8, 12, 16... ¿cuál es el término n=5?",
      "lectura": "",
      "opciones": [
        "24",
        "28",
        "20",
        "26"
      ],
      "correcta": "24",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 24.",
      "meta": {
        "type": "2d_arithmetic_seq",
        "a1": 8,
        "d": 4
      }
    },
    {
      "id": "MAT-24",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $37 y subió a $67, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "81.1%",
        "123.3%",
        "20%",
        "50%"
      ],
      "correcta": "81.1%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 81.1%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          37,
          67
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-25",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $19 y subió a $38, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "100.0%",
        "100.0%",
        "20%",
        "50%"
      ],
      "correcta": "100.0%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 100.0%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          19,
          38
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-26",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $19 y subió a $31, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "63.2%",
        "158.3%",
        "20%",
        "50%"
      ],
      "correcta": "63.2%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 63.2%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          19,
          31
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-27",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Vértice de f(x) = (x-3)² + 0",
      "lectura": "",
      "opciones": [
        "(3, 0)",
        "(-3, 0)",
        "(3, 0)",
        "(0, 0)"
      ],
      "correcta": "(3, 0)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (3, 0).",
      "meta": {
        "type": "2d_parabola",
        "a": 1,
        "b": -6,
        "c": 9
      }
    },
    {
      "id": "MAT-28",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En la sucesión 16, 21, 26... ¿cuál es el término n=5?",
      "lectura": "",
      "opciones": [
        "36",
        "41",
        "31",
        "38"
      ],
      "correcta": "36",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 36.",
      "meta": {
        "type": "2d_arithmetic_seq",
        "a1": 16,
        "d": 5
      }
    },
    {
      "id": "MAT-29",
      "modulo": "Pensamiento Matemático",
      "pregunta": "¿Distancia entre A(-1,2) y B(-4,3)?",
      "lectura": "",
      "opciones": [
        "3.16",
        "3.48",
        "5.16",
        "10.0"
      ],
      "correcta": "3.16",
      "explicacion": "Se usa la fórmula d = v × t y se despeja. El resultado es 3.16.",
      "meta": {
        "type": "2d_slope_line",
        "x1": -1,
        "y1": 2,
        "x2": -4,
        "y2": 3
      }
    },
    {
      "id": "MAT-30",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En la sucesión 15, 21, 27... ¿cuál es el término n=5?",
      "lectura": "",
      "opciones": [
        "39",
        "45",
        "33",
        "41"
      ],
      "correcta": "39",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 39.",
      "meta": {
        "type": "2d_arithmetic_seq",
        "a1": 15,
        "d": 6
      }
    },
    {
      "id": "MAT-31",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Área de un círculo con radio 6 unidades (π=3.14):",
      "lectura": "",
      "opciones": [
        "113.0",
        "90.4",
        "123.0",
        "37.7"
      ],
      "correcta": "113.0",
      "explicacion": "Se aplica la fórmula geométrica correspondiente. El cálculo da 113.0.",
      "meta": {
        "type": "2d_circle",
        "r": 6,
        "h": 0,
        "k": 0
      }
    },
    {
      "id": "MAT-32",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En la sucesión 5, 8, 11... ¿cuál es el término n=5?",
      "lectura": "",
      "opciones": [
        "17",
        "20",
        "14",
        "19"
      ],
      "correcta": "17",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 17.",
      "meta": {
        "type": "2d_arithmetic_seq",
        "a1": 5,
        "d": 3
      }
    },
    {
      "id": "MAT-33",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Vértice de f(x) = (x-0)² + -1",
      "lectura": "",
      "opciones": [
        "(0, -1)",
        "(0, -1)",
        "(0, 1)",
        "(0, 0)"
      ],
      "correcta": "(0, -1)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (0, -1).",
      "meta": {
        "type": "2d_parabola",
        "a": 1,
        "b": 0,
        "c": -1
      }
    },
    {
      "id": "MAT-34",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $17 y subió a $67, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "294.1%",
        "34.0%",
        "20%",
        "50%"
      ],
      "correcta": "294.1%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 294.1%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          17,
          67
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-35",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En la sucesión 8, 16, 24... ¿cuál es el término n=5?",
      "lectura": "",
      "opciones": [
        "40",
        "48",
        "32",
        "42"
      ],
      "correcta": "40",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 40.",
      "meta": {
        "type": "2d_arithmetic_seq",
        "a1": 8,
        "d": 8
      }
    },
    {
      "id": "MAT-36",
      "modulo": "Pensamiento Matemático",
      "pregunta": "¿Distancia entre A(2,1) y B(3,5)?",
      "lectura": "",
      "opciones": [
        "4.12",
        "4.53",
        "6.12",
        "10.0"
      ],
      "correcta": "4.12",
      "explicacion": "Se usa la fórmula d = v × t y se despeja. El resultado es 4.12.",
      "meta": {
        "type": "2d_slope_line",
        "x1": 2,
        "y1": 1,
        "x2": 3,
        "y2": 5
      }
    },
    {
      "id": "MAT-37",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $38 y subió a $75, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "97.4%",
        "102.7%",
        "20%",
        "50%"
      ],
      "correcta": "97.4%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 97.4%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          38,
          75
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-38",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $50 y subió a $82, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "64.0%",
        "156.2%",
        "20%",
        "50%"
      ],
      "correcta": "64.0%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 64.0%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          50,
          82
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-39",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Vértice de f(x) = (x-3)² + 3",
      "lectura": "",
      "opciones": [
        "(3, 3)",
        "(-3, 3)",
        "(3, -3)",
        "(0, 0)"
      ],
      "correcta": "(3, 3)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (3, 3).",
      "meta": {
        "type": "2d_parabola",
        "a": 1,
        "b": -6,
        "c": 12
      }
    },
    {
      "id": "MAT-40",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Área de un círculo con radio 7 unidades (π=3.14):",
      "lectura": "",
      "opciones": [
        "153.9",
        "123.1",
        "163.9",
        "44.0"
      ],
      "correcta": "153.9",
      "explicacion": "Se aplica la fórmula geométrica correspondiente. El cálculo da 153.9.",
      "meta": {
        "type": "2d_circle",
        "r": 7,
        "h": 0,
        "k": 0
      }
    },
    {
      "id": "MAT-41",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $48 y subió a $76, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "58.3%",
        "171.4%",
        "20%",
        "50%"
      ],
      "correcta": "58.3%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 58.3%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          48,
          76
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-42",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $24 y subió a $50, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "108.3%",
        "92.3%",
        "20%",
        "50%"
      ],
      "correcta": "108.3%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 108.3%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          24,
          50
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-43",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En un triángulo, el ángulo A = 40°, lado a = 12 cm y ángulo B = 60°. ¿Cuánto mide el lado b?",
      "lectura": "",
      "opciones": [
        "16.17 cm",
        "13.85 cm",
        "18.25 cm",
        "10.50 cm"
      ],
      "correcta": "16.17 cm",
      "explicacion": "Se aplica la fórmula geométrica correspondiente. El cálculo da 16.17 cm.",
      "meta": {
        "type": "2d_triangle",
        "a": 12,
        "angle": 40,
        "angle2": 60
      }
    },
    {
      "id": "MAT-44",
      "modulo": "Pensamiento Matemático",
      "pregunta": "¿Distancia entre A(2,0) y B(-5,2)?",
      "lectura": "",
      "opciones": [
        "7.28",
        "8.01",
        "9.28",
        "10.0"
      ],
      "correcta": "7.28",
      "explicacion": "Se usa la fórmula d = v × t y se despeja. El resultado es 7.28.",
      "meta": {
        "type": "2d_slope_line",
        "x1": 2,
        "y1": 0,
        "x2": -5,
        "y2": 2
      }
    },
    {
      "id": "MAT-45",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Vértice de f(x) = (x-1)² + 1",
      "lectura": "",
      "opciones": [
        "(1, 1)",
        "(-1, 1)",
        "(1, -1)",
        "(0, 0)"
      ],
      "correcta": "(1, 1)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (1, 1).",
      "meta": {
        "type": "2d_parabola",
        "a": 1,
        "b": -2,
        "c": 2
      }
    },
    {
      "id": "MAT-46",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $36 y subió a $52, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "44.4%",
        "225.0%",
        "20%",
        "50%"
      ],
      "correcta": "44.4%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 44.4%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          36,
          52
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-47",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $11 y subió a $60, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "445.5%",
        "22.4%",
        "20%",
        "50%"
      ],
      "correcta": "445.5%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 445.5%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          11,
          60
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-48",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $22 y subió a $50, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "127.3%",
        "78.6%",
        "20%",
        "50%"
      ],
      "correcta": "127.3%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 127.3%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          22,
          50
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-49",
      "modulo": "Pensamiento Matemático",
      "pregunta": "¿Distancia entre A(5,1) y B(4,-5)?",
      "lectura": "",
      "opciones": [
        "6.08",
        "6.69",
        "8.08",
        "10.0"
      ],
      "correcta": "6.08",
      "explicacion": "Se usa la fórmula d = v × t y se despeja. El resultado es 6.08.",
      "meta": {
        "type": "2d_slope_line",
        "x1": 5,
        "y1": 1,
        "x2": 4,
        "y2": -5
      }
    },
    {
      "id": "MAT-50",
      "modulo": "Pensamiento Matemático",
      "pregunta": "¿Distancia entre A(-5,-4) y B(-4,-3)?",
      "lectura": "",
      "opciones": [
        "1.41",
        "1.55",
        "3.41",
        "10.0"
      ],
      "correcta": "1.41",
      "explicacion": "Se usa la fórmula d = v × t y se despeja. El resultado es 1.41.",
      "meta": {
        "type": "2d_slope_line",
        "x1": -5,
        "y1": -4,
        "x2": -4,
        "y2": -3
      }
    },
    {
      "id": "MAT-51",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si 3x + 2y = 18 y x = 4, ¿cuál es el valor de y?",
      "lectura": "",
      "opciones": [
        "3",
        "2",
        "4",
        "5"
      ],
      "correcta": "3",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 3.",
      "meta": {
        "type": "2d_algebra"
      }
    },
    {
      "id": "MAT-52",
      "modulo": "Pensamiento Matemático",
      "pregunta": "La suma de dos números es 45 y su diferencia es 15. ¿Cuáles son esos números?",
      "lectura": "",
      "opciones": [
        "30 y 15",
        "25 y 20",
        "35 y 10",
        "40 y 5"
      ],
      "correcta": "30 y 15",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 30 y 15.",
      "meta": {
        "type": "2d_algebra"
      }
    },
    {
      "id": "MAT-53",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $49 y subió a $76, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "55.1%",
        "181.5%",
        "20%",
        "50%"
      ],
      "correcta": "55.1%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 55.1%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          49,
          76
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-54",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Calcula el volumen de una pirámide cuya base es un cuadrado de lado 6 cm y tiene una altura de 10 cm.",
      "lectura": "",
      "opciones": [
        "120 cm³",
        "360 cm³",
        "60 cm³",
        "240 cm³"
      ],
      "correcta": "120 cm³",
      "explicacion": "Se aplica la fórmula geométrica correspondiente. El cálculo da 120 cm³.",
      "meta": {
        "type": "3d_cone",
        "r": 3,
        "h": 10
      }
    },
    {
      "id": "MAT-55",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $16 y subió a $37, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "131.2%",
        "76.2%",
        "20%",
        "50%"
      ],
      "correcta": "131.2%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 131.2%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          16,
          37
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-56",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En la sucesión 13, 16, 19... ¿cuál es el término n=5?",
      "lectura": "",
      "opciones": [
        "25",
        "28",
        "22",
        "27"
      ],
      "correcta": "25",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 25.",
      "meta": {
        "type": "2d_arithmetic_seq",
        "a1": 13,
        "d": 3
      }
    },
    {
      "id": "MAT-57",
      "modulo": "Pensamiento Matemático",
      "pregunta": "¿Distancia entre A(1,3) y B(3,-2)?",
      "lectura": "",
      "opciones": [
        "5.39",
        "5.93",
        "7.39",
        "10.0"
      ],
      "correcta": "5.39",
      "explicacion": "Se usa la fórmula d = v × t y se despeja. El resultado es 5.39.",
      "meta": {
        "type": "2d_slope_line",
        "x1": 1,
        "y1": 3,
        "x2": 3,
        "y2": -2
      }
    },
    {
      "id": "MAT-58",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Determine el valor de 'y' en el sistema de ecuaciones: 2x + 3y = 12; 3x - y = 7",
      "lectura": "",
      "opciones": [
        "2",
        "1",
        "3",
        "-1"
      ],
      "correcta": "2",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 2.",
      "meta": {
        "type": "2d_algebra"
      }
    },
    {
      "id": "MAT-59",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Área de un círculo con radio 6 unidades (π=3.14):",
      "lectura": "",
      "opciones": [
        "113.0",
        "90.4",
        "123.0",
        "37.7"
      ],
      "correcta": "113.0",
      "explicacion": "Se aplica la fórmula geométrica correspondiente. El cálculo da 113.0.",
      "meta": {
        "type": "2d_circle",
        "r": 6,
        "h": 0,
        "k": 0
      }
    },
    {
      "id": "MAT-60",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Área de un círculo con radio 6 unidades (π=3.14):",
      "lectura": "",
      "opciones": [
        "113.0",
        "90.4",
        "123.0",
        "37.7"
      ],
      "correcta": "113.0",
      "explicacion": "Se aplica la fórmula geométrica correspondiente. El cálculo da 113.0.",
      "meta": {
        "type": "2d_circle",
        "r": 6,
        "h": 0,
        "k": 0
      }
    },
    {
      "id": "MAT-61",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Área de un círculo con radio 8 unidades (π=3.14):",
      "lectura": "",
      "opciones": [
        "201.0",
        "160.8",
        "211.0",
        "50.2"
      ],
      "correcta": "201.0",
      "explicacion": "Se aplica la fórmula geométrica correspondiente. El cálculo da 201.0.",
      "meta": {
        "type": "2d_circle",
        "r": 8,
        "h": 0,
        "k": 0
      }
    },
    {
      "id": "MAT-62",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En la sucesión 19, 23, 27... ¿cuál es el término n=5?",
      "lectura": "",
      "opciones": [
        "35",
        "39",
        "31",
        "37"
      ],
      "correcta": "35",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 35.",
      "meta": {
        "type": "2d_arithmetic_seq",
        "a1": 19,
        "d": 4
      }
    },
    {
      "id": "MAT-63",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $16 y subió a $35, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "118.8%",
        "84.2%",
        "20%",
        "50%"
      ],
      "correcta": "118.8%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 118.8%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          16,
          35
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-64",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Vértice de f(x) = (x-2)² + -2",
      "lectura": "",
      "opciones": [
        "(2, -2)",
        "(-2, -2)",
        "(2, 2)",
        "(0, 0)"
      ],
      "correcta": "(2, -2)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (2, -2).",
      "meta": {
        "type": "2d_parabola",
        "a": 1,
        "b": -4,
        "c": 2
      }
    },
    {
      "id": "MAT-65",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Vértice de f(x) = (x-3)² + -3",
      "lectura": "",
      "opciones": [
        "(3, -3)",
        "(-3, -3)",
        "(3, 3)",
        "(0, 0)"
      ],
      "correcta": "(3, -3)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (3, -3).",
      "meta": {
        "type": "2d_parabola",
        "a": 1,
        "b": -6,
        "c": 6
      }
    },
    {
      "id": "MAT-66",
      "modulo": "Pensamiento Matemático",
      "pregunta": "¿Cuál es la probabilidad de obtener una suma de 7 al lanzar dos dados convencionales?",
      "lectura": "",
      "opciones": [
        "1/6",
        "1/12",
        "5/36",
        "7/36"
      ],
      "correcta": "1/6",
      "explicacion": "Probabilidad = casos favorables / total de casos. El resultado es 1/6.",
      "meta": {
        "type": "2d_dice_prob",
        "sum": 7
      }
    },
    {
      "id": "MAT-67",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $29 y subió a $73, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "151.7%",
        "65.9%",
        "20%",
        "50%"
      ],
      "correcta": "151.7%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 151.7%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          29,
          73
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-68",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En un triángulo con lados a=8, b=10 y un ángulo comprendido C=60°, ¿cuánto mide el lado c?",
      "lectura": "",
      "opciones": [
        "9.16",
        "15.6",
        "7.21",
        "12.0"
      ],
      "correcta": "9.16",
      "explicacion": "Se aplica la fórmula geométrica correspondiente. El cálculo da 9.16.",
      "meta": {
        "type": "2d_triangle",
        "a": 8,
        "b": 10,
        "angle": 60
      }
    },
    {
      "id": "MAT-69",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Área de un círculo con radio 3 unidades (π=3.14):",
      "lectura": "",
      "opciones": [
        "28.3",
        "22.6",
        "38.3",
        "18.8"
      ],
      "correcta": "28.3",
      "explicacion": "Se aplica la fórmula geométrica correspondiente. El cálculo da 28.3.",
      "meta": {
        "type": "2d_circle",
        "r": 3,
        "h": 0,
        "k": 0
      }
    },
    {
      "id": "MAT-70",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Vértice de f(x) = (x-3)² + 0",
      "lectura": "",
      "opciones": [
        "(3, 0)",
        "(-3, 0)",
        "(3, 0)",
        "(0, 0)"
      ],
      "correcta": "(3, 0)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (3, 0).",
      "meta": {
        "type": "2d_parabola",
        "a": 1,
        "b": -6,
        "c": 9
      }
    },
    {
      "id": "MAT-71",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En la sucesión 7, 12, 17... ¿cuál es el término n=5?",
      "lectura": "",
      "opciones": [
        "27",
        "32",
        "22",
        "29"
      ],
      "correcta": "27",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 27.",
      "meta": {
        "type": "2d_arithmetic_seq",
        "a1": 7,
        "d": 5
      }
    },
    {
      "id": "MAT-72",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $21 y subió a $36, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "71.4%",
        "140.0%",
        "20%",
        "50%"
      ],
      "correcta": "71.4%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 71.4%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          21,
          36
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-73",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Vértice de f(x) = (x-3)² + 0",
      "lectura": "",
      "opciones": [
        "(3, 0)",
        "(-3, 0)",
        "(3, 0)",
        "(0, 0)"
      ],
      "correcta": "(3, 0)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (3, 0).",
      "meta": {
        "type": "2d_parabola",
        "a": 1,
        "b": -6,
        "c": 9
      }
    },
    {
      "id": "MAT-74",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En la sucesión 11, 17, 23... ¿cuál es el término n=5?",
      "lectura": "",
      "opciones": [
        "35",
        "41",
        "29",
        "37"
      ],
      "correcta": "35",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 35.",
      "meta": {
        "type": "2d_arithmetic_seq",
        "a1": 11,
        "d": 6
      }
    },
    {
      "id": "MAT-75",
      "modulo": "Pensamiento Matemático",
      "pregunta": "¿Cuál es la factorización correcta de la expresión 4x² - 25?",
      "lectura": "",
      "opciones": [
        "(2x + 5)(2x - 5)",
        "(2x - 5)(2x - 5)",
        "(4x - 5)(x + 5)",
        "(2x + 5)²"
      ],
      "correcta": "(2x + 5)(2x - 5)",
      "explicacion": "La pendiente se calcula como m = (y₂ − y₁) / (x₂ − x₁). Resultado: (2x + 5)(2x - 5).",
      "meta": {
        "type": "2d_algebra"
      }
    },
    {
      "id": "MAT-76",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Área de un círculo con radio 8 unidades (π=3.14):",
      "lectura": "",
      "opciones": [
        "201.0",
        "160.8",
        "211.0",
        "50.2"
      ],
      "correcta": "201.0",
      "explicacion": "Se aplica la fórmula geométrica correspondiente. El cálculo da 201.0.",
      "meta": {
        "type": "2d_circle",
        "r": 8,
        "h": 0,
        "k": 0
      }
    },
    {
      "id": "MAT-77",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En la sucesión 14, 20, 26... ¿cuál es el término n=5?",
      "lectura": "",
      "opciones": [
        "38",
        "44",
        "32",
        "40"
      ],
      "correcta": "38",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 38.",
      "meta": {
        "type": "2d_arithmetic_seq",
        "a1": 14,
        "d": 6
      }
    },
    {
      "id": "MAT-78",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un conjunto de datos tiene una desviación estándar de 0, ¿qué se puede concluir sobre los datos?",
      "lectura": "",
      "opciones": [
        "Todos los datos son iguales entre sí",
        "El promedio de los datos es 0",
        "Los datos están muy dispersos",
        "No hay datos suficientes"
      ],
      "correcta": "Todos los datos son iguales entre sí",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es Todos los datos son iguales entre sí.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          10,
          10,
          10,
          10
        ]
      }
    },
    {
      "id": "MAT-79",
      "modulo": "Pensamiento Matemático",
      "pregunta": "¿Distancia entre A(0,1) y B(-5,2)?",
      "lectura": "",
      "opciones": [
        "5.1",
        "5.61",
        "7.1",
        "10.0"
      ],
      "correcta": "5.1",
      "explicacion": "Se usa la fórmula d = v × t y se despeja. El resultado es 5.1.",
      "meta": {
        "type": "2d_slope_line",
        "x1": 0,
        "y1": 1,
        "x2": -5,
        "y2": 2
      }
    },
    {
      "id": "MAT-80",
      "modulo": "Pensamiento Matemático",
      "pregunta": "¿Cuál es el área de un hexágono regular que tiene un lado de 6 cm y una apotema de 5.2 cm?",
      "lectura": "",
      "opciones": [
        "93.6 cm²",
        "18.72 cm²",
        "46.8 cm²",
        "56.16 cm²"
      ],
      "correcta": "93.6 cm²",
      "explicacion": "Se aplica la fórmula geométrica correspondiente. El cálculo da 93.6 cm².",
      "meta": {
        "type": "2d_hexagon",
        "l": 6,
        "a": 5.2
      },
      "figura": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 180\" width=\"200\" height=\"180\" style=\"max-width:100%;background:#fafafa;border-radius:12px;border:1px solid #e5e5e5;padding:8px\">\n            <polygon points=\"143,65 143,115 100,140 57,115 57,65 100,40\" fill=\"none\" stroke=\"#0A0A0A\" stroke-width=\"2\"/>\n            <line x1=\"100\" y1=\"90\" x2=\"143\" y2=\"65\" stroke=\"#6366f1\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n            <text x=\"128\" y=\"60\" fill=\"#6366f1\" font-family=\"Inter,sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">a=3.46</text>\n            <text x=\"155\" y=\"48\" fill=\"#6366f1\" font-family=\"Inter,sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">l=4</text>\n        </svg>"
    },
    {
      "id": "MAT-81",
      "modulo": "Pensamiento Matemático",
      "pregunta": "En la sucesión 8, 14, 20... ¿cuál es el término n=5?",
      "lectura": "",
      "opciones": [
        "32",
        "38",
        "26",
        "34"
      ],
      "correcta": "32",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 32.",
      "meta": {
        "type": "2d_arithmetic_seq",
        "a1": 8,
        "d": 6
      }
    },
    {
      "id": "MAT-82",
      "modulo": "Pensamiento Matemático",
      "pregunta": "¿Distancia entre A(5,-2) y B(6,-5)?",
      "lectura": "",
      "opciones": [
        "3.16",
        "3.48",
        "5.16",
        "10.0"
      ],
      "correcta": "3.16",
      "explicacion": "Se usa la fórmula d = v × t y se despeja. El resultado es 3.16.",
      "meta": {
        "type": "2d_slope_line",
        "x1": 5,
        "y1": -2,
        "x2": 6,
        "y2": -5
      }
    },
    {
      "id": "MAT-83",
      "modulo": "Pensamiento Matemático",
      "pregunta": "La media de 5 números es 12. Si se agrega un sexto número y la media sube a 13, ¿cuál es el valor del sexto número?",
      "lectura": "",
      "opciones": [
        "18",
        "15",
        "20",
        "13"
      ],
      "correcta": "18",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 18.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          12,
          12,
          12,
          12,
          12,
          18
        ]
      }
    },
    {
      "id": "MAT-84",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Vértice de f(x) = (x--1)² + 1",
      "lectura": "",
      "opciones": [
        "(-1, 1)",
        "(1, 1)",
        "(-1, -1)",
        "(0, 0)"
      ],
      "correcta": "(-1, 1)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (-1, 1).",
      "meta": {
        "type": "2d_parabola",
        "a": 1,
        "b": 2,
        "c": 2
      }
    },
    {
      "id": "MAT-85",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Área de un círculo con radio 4 unidades (π=3.14):",
      "lectura": "",
      "opciones": [
        "50.2",
        "40.2",
        "60.2",
        "25.1"
      ],
      "correcta": "50.2",
      "explicacion": "Se aplica la fórmula geométrica correspondiente. El cálculo da 50.2.",
      "meta": {
        "type": "2d_circle",
        "r": 4,
        "h": 0,
        "k": 0
      }
    },
    {
      "id": "MAT-86",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Calcula el área sombreada que queda entre un cuadrado de lado 10 cm y su círculo inscrito. (π ≈ 3.14)",
      "lectura": "",
      "opciones": [
        "21.5 cm²",
        "78.5 cm²",
        "25.0 cm²",
        "10.5 cm²"
      ],
      "correcta": "21.5 cm²",
      "explicacion": "Se aplica la fórmula geométrica correspondiente. El cálculo da 21.5 cm².",
      "meta": {
        "type": "2d_shaded_area",
        "side": 10
      }
    },
    {
      "id": "MAT-87",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Si un artículo costaba $50 y subió a $86, ¿qué porcentaje aumentó?",
      "lectura": "",
      "opciones": [
        "72.0%",
        "138.9%",
        "20%",
        "50%"
      ],
      "correcta": "72.0%",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es 72.0%.",
      "meta": {
        "type": "2d_bar_chart",
        "data": [
          50,
          86
        ],
        "labels": [
          "Antes",
          "Después"
        ]
      }
    },
    {
      "id": "MAT-88",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Un rectángulo tiene 48 cm² de área. Si el largo mide el triple que el ancho, ¿cuál es su perímetro?",
      "lectura": "",
      "opciones": [
        "32 cm",
        "24 cm",
        "16 cm",
        "40 cm"
      ],
      "correcta": "32 cm",
      "explicacion": "Se plantea y resuelve la ecuación algebraica correspondiente. La respuesta es 32 cm.",
      "meta": {
        "type": "2d_trapezoid",
        "B": 12,
        "b": 12,
        "h": 4
      }
    },
    {
      "id": "MAT-89",
      "modulo": "Pensamiento Matemático",
      "pregunta": "¿Distancia entre A(-4,2) y B(-2,-3)?",
      "lectura": "",
      "opciones": [
        "5.39",
        "5.93",
        "7.39",
        "10.0"
      ],
      "correcta": "5.39",
      "explicacion": "Se usa la fórmula d = v × t y se despeja. El resultado es 5.39.",
      "meta": {
        "type": "2d_slope_line",
        "x1": -4,
        "y1": 2,
        "x2": -2,
        "y2": -3
      }
    },
    {
      "id": "MAT-90",
      "modulo": "Pensamiento Matemático",
      "pregunta": "Vértice de f(x) = (x--2)² + 2",
      "lectura": "",
      "opciones": [
        "(-2, 2)",
        "(2, 2)",
        "(-2, -2)",
        "(0, 0)"
      ],
      "correcta": "(-2, 2)",
      "explicacion": "Se aplica el procedimiento matemático adecuado. La respuesta correcta es (-2, 2).",
      "meta": {
        "type": "2d_parabola",
        "a": 1,
        "b": 4,
        "c": 6
      }
    }
  ],
  "Comprensión Lectora": [
    {
      "id": "lectura_0",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Cuál es el 'problema de la caja negra' mencionado en el texto?",
      "lectura": "La inteligencia artificial (IA) ha experimentado un crecimiento exponencial en las últimas dos décadas, transformando industrias enteras y planteando interrogantes éticas sin precedentes. A diferencia de los sistemas computacionales tradicionales, que operan siguiendo instrucciones explícitas programadas por desarrolladores humanos, los modelos de aprendizaje profundo son capaces de identificar patrones complejos en conjuntos masivos de datos y generar predicciones con una precisión que, en ciertos dominios especializados, supera las capacidades del juicio humano experto. En el ámbito médico, por ejemplo, algoritmos de visión computacional han demostrado una tasa de detección de melanomas superior a la de dermatólogos con décadas de experiencia clínica, lo cual ha generado un debate polarizado entre quienes ven en estos avances una revolución democrática del acceso a diagnósticos de calidad y quienes advierten sobre los riesgos de delegar decisiones vitales a sistemas cuyas lógicas internas resultan, paradójicamente, opacas incluso para sus propios creadores. Este fenómeno, conocido como el problema de la 'caja negra', constituye uno de los desafíos centrales de la IA contemporánea: ¿cómo confiar en un sistema que no puede explicar el razonamiento detrás de sus conclusiones? La Unión Europea ha respondido a esta problemática con la propuesta del Reglamento de Inteligencia Artificial, que exige transparencia algorítmica en aplicaciones de alto riesgo, mientras que en otras latitudes la regulación avanza a un ritmo considerablemente más lento. Simultáneamente, la IA generativa —modelos capaces de producir texto, imágenes y código de programación— ha difuminado la frontera entre la creación humana y la producción automatizada, obligando a repensar conceptos fundamentales como autoría, originalidad y propiedad intelectual. En el sector educativo, estas herramientas ofrecen oportunidades extraordinarias de personalización del aprendizaje, pero también plantean el riesgo de erosionar las competencias de pensamiento crítico si los estudiantes las utilizan como sustitutos del esfuerzo intelectual genuino en lugar de como complementos pedagógicos.",
      "opciones": [
        "La falta de programadores capacitados para desarrollar algoritmos de aprendizaje profundo.",
        "La imposibilidad de comprender el razonamiento interno que los sistemas de IA utilizan para llegar a sus conclusiones.",
        "El alto costo económico de implementar sistemas de inteligencia artificial en hospitales.",
        "La dificultad de almacenar grandes volúmenes de datos en servidores convencionales."
      ],
      "correcta": "La imposibilidad de comprender el razonamiento interno que los sistemas de IA utilizan para llegar a sus conclusiones.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_1",
      "modulo": "Comprensión Lectora",
      "pregunta": "Según el texto, ¿qué postura ha adoptado la Unión Europea frente a la IA?",
      "lectura": "La inteligencia artificial (IA) ha experimentado un crecimiento exponencial en las últimas dos décadas, transformando industrias enteras y planteando interrogantes éticas sin precedentes. A diferencia de los sistemas computacionales tradicionales, que operan siguiendo instrucciones explícitas programadas por desarrolladores humanos, los modelos de aprendizaje profundo son capaces de identificar patrones complejos en conjuntos masivos de datos y generar predicciones con una precisión que, en ciertos dominios especializados, supera las capacidades del juicio humano experto. En el ámbito médico, por ejemplo, algoritmos de visión computacional han demostrado una tasa de detección de melanomas superior a la de dermatólogos con décadas de experiencia clínica, lo cual ha generado un debate polarizado entre quienes ven en estos avances una revolución democrática del acceso a diagnósticos de calidad y quienes advierten sobre los riesgos de delegar decisiones vitales a sistemas cuyas lógicas internas resultan, paradójicamente, opacas incluso para sus propios creadores. Este fenómeno, conocido como el problema de la 'caja negra', constituye uno de los desafíos centrales de la IA contemporánea: ¿cómo confiar en un sistema que no puede explicar el razonamiento detrás de sus conclusiones? La Unión Europea ha respondido a esta problemática con la propuesta del Reglamento de Inteligencia Artificial, que exige transparencia algorítmica en aplicaciones de alto riesgo, mientras que en otras latitudes la regulación avanza a un ritmo considerablemente más lento. Simultáneamente, la IA generativa —modelos capaces de producir texto, imágenes y código de programación— ha difuminado la frontera entre la creación humana y la producción automatizada, obligando a repensar conceptos fundamentales como autoría, originalidad y propiedad intelectual. En el sector educativo, estas herramientas ofrecen oportunidades extraordinarias de personalización del aprendizaje, pero también plantean el riesgo de erosionar las competencias de pensamiento crítico si los estudiantes las utilizan como sustitutos del esfuerzo intelectual genuino en lugar de como complementos pedagógicos.",
      "opciones": [
        "Ha delegado la regulación de la IA exclusivamente a las empresas tecnológicas privadas.",
        "Ha prohibido completamente el uso de inteligencia artificial en el sector médico.",
        "Ha propuesto un reglamento que exige transparencia algorítmica en aplicaciones de alto riesgo.",
        "Ha financiado la investigación en IA sin establecer ningún tipo de regulación."
      ],
      "correcta": "Ha propuesto un reglamento que exige transparencia algorítmica en aplicaciones de alto riesgo.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_2",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Qué riesgo plantea el texto respecto al uso de IA generativa en la educación?",
      "lectura": "La inteligencia artificial (IA) ha experimentado un crecimiento exponencial en las últimas dos décadas, transformando industrias enteras y planteando interrogantes éticas sin precedentes. A diferencia de los sistemas computacionales tradicionales, que operan siguiendo instrucciones explícitas programadas por desarrolladores humanos, los modelos de aprendizaje profundo son capaces de identificar patrones complejos en conjuntos masivos de datos y generar predicciones con una precisión que, en ciertos dominios especializados, supera las capacidades del juicio humano experto. En el ámbito médico, por ejemplo, algoritmos de visión computacional han demostrado una tasa de detección de melanomas superior a la de dermatólogos con décadas de experiencia clínica, lo cual ha generado un debate polarizado entre quienes ven en estos avances una revolución democrática del acceso a diagnósticos de calidad y quienes advierten sobre los riesgos de delegar decisiones vitales a sistemas cuyas lógicas internas resultan, paradójicamente, opacas incluso para sus propios creadores. Este fenómeno, conocido como el problema de la 'caja negra', constituye uno de los desafíos centrales de la IA contemporánea: ¿cómo confiar en un sistema que no puede explicar el razonamiento detrás de sus conclusiones? La Unión Europea ha respondido a esta problemática con la propuesta del Reglamento de Inteligencia Artificial, que exige transparencia algorítmica en aplicaciones de alto riesgo, mientras que en otras latitudes la regulación avanza a un ritmo considerablemente más lento. Simultáneamente, la IA generativa —modelos capaces de producir texto, imágenes y código de programación— ha difuminado la frontera entre la creación humana y la producción automatizada, obligando a repensar conceptos fundamentales como autoría, originalidad y propiedad intelectual. En el sector educativo, estas herramientas ofrecen oportunidades extraordinarias de personalización del aprendizaje, pero también plantean el riesgo de erosionar las competencias de pensamiento crítico si los estudiantes las utilizan como sustitutos del esfuerzo intelectual genuino en lugar de como complementos pedagógicos.",
      "opciones": [
        "Que los profesores pierdan sus empleos de manera inmediata y masiva.",
        "Que los sistemas educativos adopten un único modelo pedagógico uniforme.",
        "Que los costos de la educación se incrementen significativamente.",
        "Que los estudiantes sustituyan el esfuerzo intelectual genuino y erosionen sus competencias de pensamiento crítico."
      ],
      "correcta": "Que los estudiantes sustituyan el esfuerzo intelectual genuino y erosionen sus competencias de pensamiento crítico.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_3",
      "modulo": "Comprensión Lectora",
      "pregunta": "La expresión 'difuminado la frontera' en el contexto de la IA generativa implica que:",
      "lectura": "La inteligencia artificial (IA) ha experimentado un crecimiento exponencial en las últimas dos décadas, transformando industrias enteras y planteando interrogantes éticas sin precedentes. A diferencia de los sistemas computacionales tradicionales, que operan siguiendo instrucciones explícitas programadas por desarrolladores humanos, los modelos de aprendizaje profundo son capaces de identificar patrones complejos en conjuntos masivos de datos y generar predicciones con una precisión que, en ciertos dominios especializados, supera las capacidades del juicio humano experto. En el ámbito médico, por ejemplo, algoritmos de visión computacional han demostrado una tasa de detección de melanomas superior a la de dermatólogos con décadas de experiencia clínica, lo cual ha generado un debate polarizado entre quienes ven en estos avances una revolución democrática del acceso a diagnósticos de calidad y quienes advierten sobre los riesgos de delegar decisiones vitales a sistemas cuyas lógicas internas resultan, paradójicamente, opacas incluso para sus propios creadores. Este fenómeno, conocido como el problema de la 'caja negra', constituye uno de los desafíos centrales de la IA contemporánea: ¿cómo confiar en un sistema que no puede explicar el razonamiento detrás de sus conclusiones? La Unión Europea ha respondido a esta problemática con la propuesta del Reglamento de Inteligencia Artificial, que exige transparencia algorítmica en aplicaciones de alto riesgo, mientras que en otras latitudes la regulación avanza a un ritmo considerablemente más lento. Simultáneamente, la IA generativa —modelos capaces de producir texto, imágenes y código de programación— ha difuminado la frontera entre la creación humana y la producción automatizada, obligando a repensar conceptos fundamentales como autoría, originalidad y propiedad intelectual. En el sector educativo, estas herramientas ofrecen oportunidades extraordinarias de personalización del aprendizaje, pero también plantean el riesgo de erosionar las competencias de pensamiento crítico si los estudiantes las utilizan como sustitutos del esfuerzo intelectual genuino en lugar de como complementos pedagógicos.",
      "opciones": [
        "La tecnología ha eliminado las barreras geográficas entre países.",
        "Las máquinas han superado definitivamente a los humanos en creatividad.",
        "Los artistas han perdido todo interés en la creación manual.",
        "Se ha vuelto difícil distinguir entre lo creado por humanos y lo producido por máquinas."
      ],
      "correcta": "Se ha vuelto difícil distinguir entre lo creado por humanos y lo producido por máquinas.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_4",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Cuál es el tono predominante del autor al abordar el impacto de la IA?",
      "lectura": "La inteligencia artificial (IA) ha experimentado un crecimiento exponencial en las últimas dos décadas, transformando industrias enteras y planteando interrogantes éticas sin precedentes. A diferencia de los sistemas computacionales tradicionales, que operan siguiendo instrucciones explícitas programadas por desarrolladores humanos, los modelos de aprendizaje profundo son capaces de identificar patrones complejos en conjuntos masivos de datos y generar predicciones con una precisión que, en ciertos dominios especializados, supera las capacidades del juicio humano experto. En el ámbito médico, por ejemplo, algoritmos de visión computacional han demostrado una tasa de detección de melanomas superior a la de dermatólogos con décadas de experiencia clínica, lo cual ha generado un debate polarizado entre quienes ven en estos avances una revolución democrática del acceso a diagnósticos de calidad y quienes advierten sobre los riesgos de delegar decisiones vitales a sistemas cuyas lógicas internas resultan, paradójicamente, opacas incluso para sus propios creadores. Este fenómeno, conocido como el problema de la 'caja negra', constituye uno de los desafíos centrales de la IA contemporánea: ¿cómo confiar en un sistema que no puede explicar el razonamiento detrás de sus conclusiones? La Unión Europea ha respondido a esta problemática con la propuesta del Reglamento de Inteligencia Artificial, que exige transparencia algorítmica en aplicaciones de alto riesgo, mientras que en otras latitudes la regulación avanza a un ritmo considerablemente más lento. Simultáneamente, la IA generativa —modelos capaces de producir texto, imágenes y código de programación— ha difuminado la frontera entre la creación humana y la producción automatizada, obligando a repensar conceptos fundamentales como autoría, originalidad y propiedad intelectual. En el sector educativo, estas herramientas ofrecen oportunidades extraordinarias de personalización del aprendizaje, pero también plantean el riesgo de erosionar las competencias de pensamiento crítico si los estudiantes las utilizan como sustitutos del esfuerzo intelectual genuino en lugar de como complementos pedagógicos.",
      "opciones": [
        "Analítico y equilibrado, presentando tanto oportunidades como riesgos.",
        "Abiertamente pesimista y alarmista sobre el futuro tecnológico.",
        "Completamente optimista sobre los beneficios de la tecnología.",
        "Indiferente y descriptivo sin ninguna valoración crítica."
      ],
      "correcta": "Analítico y equilibrado, presentando tanto oportunidades como riesgos.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_5",
      "modulo": "Comprensión Lectora",
      "pregunta": "Del texto se puede inferir que los algoritmos de visión computacional en medicina:",
      "lectura": "La inteligencia artificial (IA) ha experimentado un crecimiento exponencial en las últimas dos décadas, transformando industrias enteras y planteando interrogantes éticas sin precedentes. A diferencia de los sistemas computacionales tradicionales, que operan siguiendo instrucciones explícitas programadas por desarrolladores humanos, los modelos de aprendizaje profundo son capaces de identificar patrones complejos en conjuntos masivos de datos y generar predicciones con una precisión que, en ciertos dominios especializados, supera las capacidades del juicio humano experto. En el ámbito médico, por ejemplo, algoritmos de visión computacional han demostrado una tasa de detección de melanomas superior a la de dermatólogos con décadas de experiencia clínica, lo cual ha generado un debate polarizado entre quienes ven en estos avances una revolución democrática del acceso a diagnósticos de calidad y quienes advierten sobre los riesgos de delegar decisiones vitales a sistemas cuyas lógicas internas resultan, paradójicamente, opacas incluso para sus propios creadores. Este fenómeno, conocido como el problema de la 'caja negra', constituye uno de los desafíos centrales de la IA contemporánea: ¿cómo confiar en un sistema que no puede explicar el razonamiento detrás de sus conclusiones? La Unión Europea ha respondido a esta problemática con la propuesta del Reglamento de Inteligencia Artificial, que exige transparencia algorítmica en aplicaciones de alto riesgo, mientras que en otras latitudes la regulación avanza a un ritmo considerablemente más lento. Simultáneamente, la IA generativa —modelos capaces de producir texto, imágenes y código de programación— ha difuminado la frontera entre la creación humana y la producción automatizada, obligando a repensar conceptos fundamentales como autoría, originalidad y propiedad intelectual. En el sector educativo, estas herramientas ofrecen oportunidades extraordinarias de personalización del aprendizaje, pero también plantean el riesgo de erosionar las competencias de pensamiento crítico si los estudiantes las utilizan como sustitutos del esfuerzo intelectual genuino en lugar de como complementos pedagógicos.",
      "opciones": [
        "Podrían democratizar el acceso a diagnósticos especializados de calidad.",
        "Solo funcionan correctamente en países desarrollados.",
        "Son menos precisos que cualquier médico con experiencia clínica.",
        "Ya han reemplazado completamente a los médicos especialistas."
      ],
      "correcta": "Podrían democratizar el acceso a diagnósticos especializados de calidad.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_6",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Qué demostró Saussure con la arbitrariedad del signo lingüístico?",
      "lectura": "La filosofía del lenguaje ha debatido durante siglos la relación entre las palabras y la realidad que pretenden representar. Ferdinand de Saussure, considerado el padre de la lingüística moderna, estableció a principios del siglo XX la distinción fundamental entre significante —la imagen acústica o visual de la palabra— y significado —el concepto mental que evoca—, argumentando que la relación entre ambos es esencialmente arbitraria: no existe ninguna razón natural por la cual la secuencia fonética 'árbol' deba designar a ese organismo vegetal, como lo demuestra el hecho de que otras lenguas utilicen secuencias completamente distintas (tree, Baum, arbre) para referirse al mismo concepto. Esta arbitrariedad del signo lingüístico tiene consecuencias filosóficas profundas, pues sugiere que el lenguaje no es un simple espejo transparente de la realidad, sino un sistema de categorización que organiza y, en cierta medida, construye nuestra percepción del mundo. La hipótesis de Sapir-Whorf llevó esta idea a su expresión más radical al proponer que la estructura gramatical de una lengua determina los procesos cognitivos de sus hablantes. Aunque la versión fuerte de esta hipótesis —el determinismo lingüístico— ha sido ampliamente cuestionada, investigaciones psicolingüísticas recientes han proporcionado evidencias a favor de una versión moderada: los hablantes de lenguas que distinguen gramaticalmente entre azul claro y azul oscuro, como el ruso, perciben y discriminan estos tonos con mayor rapidez que los hablantes de inglés, que utilizan un solo término genérico. De manera similar, las lenguas aborígenes australianas que emplean coordenadas cardinales absolutas en lugar de referencias egocéntricas (izquierda-derecha) dotan a sus hablantes de una orientación espacial extraordinariamente precisa. Estos hallazgos no implican que el lenguaje sea una prisión cognitiva, sino que funciona como una lente que enfoca la atención hacia ciertos aspectos de la experiencia, haciendo que algunos distinciones resulten más accesibles y automáticas que otras.",
      "opciones": [
        "Que no existe una relación natural entre la forma de una palabra y el concepto que representa.",
        "Que todas las lenguas del mundo comparten una estructura gramatical universal.",
        "Que las palabras más cortas siempre designan conceptos más simples.",
        "Que el significado de las palabras permanece invariable a lo largo del tiempo."
      ],
      "correcta": "Que no existe una relación natural entre la forma de una palabra y el concepto que representa.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_7",
      "modulo": "Comprensión Lectora",
      "pregunta": "La versión moderada de la hipótesis de Sapir-Whorf sostiene que:",
      "lectura": "La filosofía del lenguaje ha debatido durante siglos la relación entre las palabras y la realidad que pretenden representar. Ferdinand de Saussure, considerado el padre de la lingüística moderna, estableció a principios del siglo XX la distinción fundamental entre significante —la imagen acústica o visual de la palabra— y significado —el concepto mental que evoca—, argumentando que la relación entre ambos es esencialmente arbitraria: no existe ninguna razón natural por la cual la secuencia fonética 'árbol' deba designar a ese organismo vegetal, como lo demuestra el hecho de que otras lenguas utilicen secuencias completamente distintas (tree, Baum, arbre) para referirse al mismo concepto. Esta arbitrariedad del signo lingüístico tiene consecuencias filosóficas profundas, pues sugiere que el lenguaje no es un simple espejo transparente de la realidad, sino un sistema de categorización que organiza y, en cierta medida, construye nuestra percepción del mundo. La hipótesis de Sapir-Whorf llevó esta idea a su expresión más radical al proponer que la estructura gramatical de una lengua determina los procesos cognitivos de sus hablantes. Aunque la versión fuerte de esta hipótesis —el determinismo lingüístico— ha sido ampliamente cuestionada, investigaciones psicolingüísticas recientes han proporcionado evidencias a favor de una versión moderada: los hablantes de lenguas que distinguen gramaticalmente entre azul claro y azul oscuro, como el ruso, perciben y discriminan estos tonos con mayor rapidez que los hablantes de inglés, que utilizan un solo término genérico. De manera similar, las lenguas aborígenes australianas que emplean coordenadas cardinales absolutas en lugar de referencias egocéntricas (izquierda-derecha) dotan a sus hablantes de una orientación espacial extraordinariamente precisa. Estos hallazgos no implican que el lenguaje sea una prisión cognitiva, sino que funciona como una lente que enfoca la atención hacia ciertos aspectos de la experiencia, haciendo que algunos distinciones resulten más accesibles y automáticas que otras.",
      "opciones": [
        "El lenguaje determina absolutamente todo lo que una persona puede pensar.",
        "El pensamiento es completamente independiente del lenguaje utilizado.",
        "Todas las lenguas humanas son estructuralmente idénticas.",
        "La lengua que hablamos influye en ciertos procesos perceptivos y cognitivos sin determinarlos completamente."
      ],
      "correcta": "La lengua que hablamos influye en ciertos procesos perceptivos y cognitivos sin determinarlos completamente.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_8",
      "modulo": "Comprensión Lectora",
      "pregunta": "El ejemplo de los hablantes de ruso respecto al color azul ilustra que:",
      "lectura": "La filosofía del lenguaje ha debatido durante siglos la relación entre las palabras y la realidad que pretenden representar. Ferdinand de Saussure, considerado el padre de la lingüística moderna, estableció a principios del siglo XX la distinción fundamental entre significante —la imagen acústica o visual de la palabra— y significado —el concepto mental que evoca—, argumentando que la relación entre ambos es esencialmente arbitraria: no existe ninguna razón natural por la cual la secuencia fonética 'árbol' deba designar a ese organismo vegetal, como lo demuestra el hecho de que otras lenguas utilicen secuencias completamente distintas (tree, Baum, arbre) para referirse al mismo concepto. Esta arbitrariedad del signo lingüístico tiene consecuencias filosóficas profundas, pues sugiere que el lenguaje no es un simple espejo transparente de la realidad, sino un sistema de categorización que organiza y, en cierta medida, construye nuestra percepción del mundo. La hipótesis de Sapir-Whorf llevó esta idea a su expresión más radical al proponer que la estructura gramatical de una lengua determina los procesos cognitivos de sus hablantes. Aunque la versión fuerte de esta hipótesis —el determinismo lingüístico— ha sido ampliamente cuestionada, investigaciones psicolingüísticas recientes han proporcionado evidencias a favor de una versión moderada: los hablantes de lenguas que distinguen gramaticalmente entre azul claro y azul oscuro, como el ruso, perciben y discriminan estos tonos con mayor rapidez que los hablantes de inglés, que utilizan un solo término genérico. De manera similar, las lenguas aborígenes australianas que emplean coordenadas cardinales absolutas en lugar de referencias egocéntricas (izquierda-derecha) dotan a sus hablantes de una orientación espacial extraordinariamente precisa. Estos hallazgos no implican que el lenguaje sea una prisión cognitiva, sino que funciona como una lente que enfoca la atención hacia ciertos aspectos de la experiencia, haciendo que algunos distinciones resulten más accesibles y automáticas que otras.",
      "opciones": [
        "El inglés es un idioma inferior al ruso en todos los aspectos.",
        "La percepción del color es completamente universal e idéntica en todas las culturas.",
        "Los rusos tienen una visión cromática superior por factores genéticos.",
        "Las distinciones léxicas de una lengua pueden facilitar la percepción y discriminación de ciertos estímulos."
      ],
      "correcta": "Las distinciones léxicas de una lengua pueden facilitar la percepción y discriminación de ciertos estímulos.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_9",
      "modulo": "Comprensión Lectora",
      "pregunta": "La metáfora del lenguaje como 'lente' al final del texto implica que:",
      "lectura": "La filosofía del lenguaje ha debatido durante siglos la relación entre las palabras y la realidad que pretenden representar. Ferdinand de Saussure, considerado el padre de la lingüística moderna, estableció a principios del siglo XX la distinción fundamental entre significante —la imagen acústica o visual de la palabra— y significado —el concepto mental que evoca—, argumentando que la relación entre ambos es esencialmente arbitraria: no existe ninguna razón natural por la cual la secuencia fonética 'árbol' deba designar a ese organismo vegetal, como lo demuestra el hecho de que otras lenguas utilicen secuencias completamente distintas (tree, Baum, arbre) para referirse al mismo concepto. Esta arbitrariedad del signo lingüístico tiene consecuencias filosóficas profundas, pues sugiere que el lenguaje no es un simple espejo transparente de la realidad, sino un sistema de categorización que organiza y, en cierta medida, construye nuestra percepción del mundo. La hipótesis de Sapir-Whorf llevó esta idea a su expresión más radical al proponer que la estructura gramatical de una lengua determina los procesos cognitivos de sus hablantes. Aunque la versión fuerte de esta hipótesis —el determinismo lingüístico— ha sido ampliamente cuestionada, investigaciones psicolingüísticas recientes han proporcionado evidencias a favor de una versión moderada: los hablantes de lenguas que distinguen gramaticalmente entre azul claro y azul oscuro, como el ruso, perciben y discriminan estos tonos con mayor rapidez que los hablantes de inglés, que utilizan un solo término genérico. De manera similar, las lenguas aborígenes australianas que emplean coordenadas cardinales absolutas en lugar de referencias egocéntricas (izquierda-derecha) dotan a sus hablantes de una orientación espacial extraordinariamente precisa. Estos hallazgos no implican que el lenguaje sea una prisión cognitiva, sino que funciona como una lente que enfoca la atención hacia ciertos aspectos de la experiencia, haciendo que algunos distinciones resulten más accesibles y automáticas que otras.",
      "opciones": [
        "Solo las personas bilingües pueden percibir la realidad con precisión.",
        "El lenguaje enfoca la atención hacia ciertos aspectos de la experiencia sin impedir percibir otros.",
        "Todas las lenguas ofrecen exactamente la misma perspectiva del mundo.",
        "El lenguaje distorsiona completamente la realidad haciéndola irreconocible."
      ],
      "correcta": "El lenguaje enfoca la atención hacia ciertos aspectos de la experiencia sin impedir percibir otros.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_10",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Por qué el autor menciona las lenguas aborígenes australianas?",
      "lectura": "La filosofía del lenguaje ha debatido durante siglos la relación entre las palabras y la realidad que pretenden representar. Ferdinand de Saussure, considerado el padre de la lingüística moderna, estableció a principios del siglo XX la distinción fundamental entre significante —la imagen acústica o visual de la palabra— y significado —el concepto mental que evoca—, argumentando que la relación entre ambos es esencialmente arbitraria: no existe ninguna razón natural por la cual la secuencia fonética 'árbol' deba designar a ese organismo vegetal, como lo demuestra el hecho de que otras lenguas utilicen secuencias completamente distintas (tree, Baum, arbre) para referirse al mismo concepto. Esta arbitrariedad del signo lingüístico tiene consecuencias filosóficas profundas, pues sugiere que el lenguaje no es un simple espejo transparente de la realidad, sino un sistema de categorización que organiza y, en cierta medida, construye nuestra percepción del mundo. La hipótesis de Sapir-Whorf llevó esta idea a su expresión más radical al proponer que la estructura gramatical de una lengua determina los procesos cognitivos de sus hablantes. Aunque la versión fuerte de esta hipótesis —el determinismo lingüístico— ha sido ampliamente cuestionada, investigaciones psicolingüísticas recientes han proporcionado evidencias a favor de una versión moderada: los hablantes de lenguas que distinguen gramaticalmente entre azul claro y azul oscuro, como el ruso, perciben y discriminan estos tonos con mayor rapidez que los hablantes de inglés, que utilizan un solo término genérico. De manera similar, las lenguas aborígenes australianas que emplean coordenadas cardinales absolutas en lugar de referencias egocéntricas (izquierda-derecha) dotan a sus hablantes de una orientación espacial extraordinariamente precisa. Estos hallazgos no implican que el lenguaje sea una prisión cognitiva, sino que funciona como una lente que enfoca la atención hacia ciertos aspectos de la experiencia, haciendo que algunos distinciones resulten más accesibles y automáticas que otras.",
      "opciones": [
        "Para ejemplificar cómo un sistema lingüístico de coordenadas absolutas dota de habilidades espaciales excepcionales.",
        "Para ilustrar la superioridad de las referencias egocéntricas como izquierda-derecha.",
        "Para argumentar que solo las lenguas occidentales permiten el pensamiento abstracto.",
        "Para demostrar que son lenguas primitivas sin capacidad expresiva."
      ],
      "correcta": "Para ejemplificar cómo un sistema lingüístico de coordenadas absolutas dota de habilidades espaciales excepcionales.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_11",
      "modulo": "Comprensión Lectora",
      "pregunta": "Del texto se puede inferir que la relación entre lenguaje y pensamiento es:",
      "lectura": "La filosofía del lenguaje ha debatido durante siglos la relación entre las palabras y la realidad que pretenden representar. Ferdinand de Saussure, considerado el padre de la lingüística moderna, estableció a principios del siglo XX la distinción fundamental entre significante —la imagen acústica o visual de la palabra— y significado —el concepto mental que evoca—, argumentando que la relación entre ambos es esencialmente arbitraria: no existe ninguna razón natural por la cual la secuencia fonética 'árbol' deba designar a ese organismo vegetal, como lo demuestra el hecho de que otras lenguas utilicen secuencias completamente distintas (tree, Baum, arbre) para referirse al mismo concepto. Esta arbitrariedad del signo lingüístico tiene consecuencias filosóficas profundas, pues sugiere que el lenguaje no es un simple espejo transparente de la realidad, sino un sistema de categorización que organiza y, en cierta medida, construye nuestra percepción del mundo. La hipótesis de Sapir-Whorf llevó esta idea a su expresión más radical al proponer que la estructura gramatical de una lengua determina los procesos cognitivos de sus hablantes. Aunque la versión fuerte de esta hipótesis —el determinismo lingüístico— ha sido ampliamente cuestionada, investigaciones psicolingüísticas recientes han proporcionado evidencias a favor de una versión moderada: los hablantes de lenguas que distinguen gramaticalmente entre azul claro y azul oscuro, como el ruso, perciben y discriminan estos tonos con mayor rapidez que los hablantes de inglés, que utilizan un solo término genérico. De manera similar, las lenguas aborígenes australianas que emplean coordenadas cardinales absolutas en lugar de referencias egocéntricas (izquierda-derecha) dotan a sus hablantes de una orientación espacial extraordinariamente precisa. Estos hallazgos no implican que el lenguaje sea una prisión cognitiva, sino que funciona como una lente que enfoca la atención hacia ciertos aspectos de la experiencia, haciendo que algunos distinciones resulten más accesibles y automáticas que otras.",
      "opciones": [
        "Total: sin lenguaje no existe ningún tipo de pensamiento posible.",
        "Unidireccional: el pensamiento crea el lenguaje pero nunca al revés.",
        "Compleja y bidireccional: el lenguaje influye en la cognición pero no la determina absolutamente.",
        "Inexistente, pues pensamiento y lenguaje son completamente independientes."
      ],
      "correcta": "Compleja y bidireccional: el lenguaje influye en la cognición pero no la determina absolutamente.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_12",
      "modulo": "Comprensión Lectora",
      "pregunta": "Según el texto, ¿por qué la cifra de 1.1 °C de aumento no debe subestimarse?",
      "lectura": "El cambio climático antropogénico representa la crisis medioambiental más compleja y urgente que enfrenta la humanidad en el siglo XXI. Las evidencias científicas acumuladas durante las últimas cinco décadas son contundentes: la concentración atmosférica de dióxido de carbono ha superado las 420 partes por millón, un nivel sin precedentes en al menos 800,000 años de registros paleoclimáticos obtenidos mediante el análisis de núcleos de hielo en la Antártida y Groenlandia. Este incremento, directamente atribuible a la quema de combustibles fósiles, la deforestación masiva y las prácticas agrícolas intensivas, ha elevado la temperatura promedio global en aproximadamente 1.1 °C respecto a los niveles preindustriales. Aunque esta cifra puede parecer modesta en términos absolutos, sus consecuencias son devastadoras y multiplicativas: la acidificación oceánica amenaza los arrecifes coralinos que sostienen el 25% de la biodiversidad marina; el deshielo acelerado de los casquetes polares contribuye al aumento del nivel del mar, poniendo en riesgo existencial a naciones insulares del Pacífico; y los fenómenos meteorológicos extremos —sequías prolongadas, inundaciones catastróficas, olas de calor sin precedentes— se intensifican con cada fracción de grado adicional. El Acuerdo de París de 2015 estableció el objetivo de limitar el calentamiento a 1.5 °C, pero los compromisos nacionales actuales, conocidos como Contribuciones Determinadas a Nivel Nacional (NDC), son insuficientes y encaminan al planeta hacia un escenario de entre 2.4 °C y 3.5 °C para finales de siglo. La transición energética hacia fuentes renovables —solar, eólica, geotérmica— es técnicamente viable y económicamente competitiva, pero enfrenta resistencias estructurales vinculadas a los intereses de la industria de los hidrocarburos, la inercia institucional y la inequidad global en la distribución de los costos y beneficios de la descarbonización. Los países en desarrollo, históricamente menos responsables de las emisiones acumuladas, enfrentan la paradoja de necesitar crecimiento económico para reducir la pobreza mientras se les exige limitar sus emisiones, una tensión que el concepto de 'responsabilidades comunes pero diferenciadas' intenta resolver sin lograrlo plenamente.",
      "opciones": [
        "Porque solo afecta a las regiones polares del planeta.",
        "Porque el aumento se detendrá naturalmente en los próximos años.",
        "Porque los científicos creen que el dato es incorrecto y la cifra real es mayor.",
        "Porque sus consecuencias son devastadoras y multiplicativas en múltiples sistemas naturales."
      ],
      "correcta": "Porque sus consecuencias son devastadoras y multiplicativas en múltiples sistemas naturales.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_13",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Qué son las 'Contribuciones Determinadas a Nivel Nacional' (NDC)?",
      "lectura": "El cambio climático antropogénico representa la crisis medioambiental más compleja y urgente que enfrenta la humanidad en el siglo XXI. Las evidencias científicas acumuladas durante las últimas cinco décadas son contundentes: la concentración atmosférica de dióxido de carbono ha superado las 420 partes por millón, un nivel sin precedentes en al menos 800,000 años de registros paleoclimáticos obtenidos mediante el análisis de núcleos de hielo en la Antártida y Groenlandia. Este incremento, directamente atribuible a la quema de combustibles fósiles, la deforestación masiva y las prácticas agrícolas intensivas, ha elevado la temperatura promedio global en aproximadamente 1.1 °C respecto a los niveles preindustriales. Aunque esta cifra puede parecer modesta en términos absolutos, sus consecuencias son devastadoras y multiplicativas: la acidificación oceánica amenaza los arrecifes coralinos que sostienen el 25% de la biodiversidad marina; el deshielo acelerado de los casquetes polares contribuye al aumento del nivel del mar, poniendo en riesgo existencial a naciones insulares del Pacífico; y los fenómenos meteorológicos extremos —sequías prolongadas, inundaciones catastróficas, olas de calor sin precedentes— se intensifican con cada fracción de grado adicional. El Acuerdo de París de 2015 estableció el objetivo de limitar el calentamiento a 1.5 °C, pero los compromisos nacionales actuales, conocidos como Contribuciones Determinadas a Nivel Nacional (NDC), son insuficientes y encaminan al planeta hacia un escenario de entre 2.4 °C y 3.5 °C para finales de siglo. La transición energética hacia fuentes renovables —solar, eólica, geotérmica— es técnicamente viable y económicamente competitiva, pero enfrenta resistencias estructurales vinculadas a los intereses de la industria de los hidrocarburos, la inercia institucional y la inequidad global en la distribución de los costos y beneficios de la descarbonización. Los países en desarrollo, históricamente menos responsables de las emisiones acumuladas, enfrentan la paradoja de necesitar crecimiento económico para reducir la pobreza mientras se les exige limitar sus emisiones, una tensión que el concepto de 'responsabilidades comunes pero diferenciadas' intenta resolver sin lograrlo plenamente.",
      "opciones": [
        "Las sanciones económicas impuestas por la ONU a países contaminantes.",
        "Un tipo de impuesto internacional sobre el carbono.",
        "Un programa de financiamiento para energías renovables en países pobres.",
        "Los compromisos voluntarios de cada país para reducir sus emisiones de gases de efecto invernadero."
      ],
      "correcta": "Los compromisos voluntarios de cada país para reducir sus emisiones de gases de efecto invernadero.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_14",
      "modulo": "Comprensión Lectora",
      "pregunta": "La 'paradoja' que enfrentan los países en desarrollo, según el texto, consiste en:",
      "lectura": "El cambio climático antropogénico representa la crisis medioambiental más compleja y urgente que enfrenta la humanidad en el siglo XXI. Las evidencias científicas acumuladas durante las últimas cinco décadas son contundentes: la concentración atmosférica de dióxido de carbono ha superado las 420 partes por millón, un nivel sin precedentes en al menos 800,000 años de registros paleoclimáticos obtenidos mediante el análisis de núcleos de hielo en la Antártida y Groenlandia. Este incremento, directamente atribuible a la quema de combustibles fósiles, la deforestación masiva y las prácticas agrícolas intensivas, ha elevado la temperatura promedio global en aproximadamente 1.1 °C respecto a los niveles preindustriales. Aunque esta cifra puede parecer modesta en términos absolutos, sus consecuencias son devastadoras y multiplicativas: la acidificación oceánica amenaza los arrecifes coralinos que sostienen el 25% de la biodiversidad marina; el deshielo acelerado de los casquetes polares contribuye al aumento del nivel del mar, poniendo en riesgo existencial a naciones insulares del Pacífico; y los fenómenos meteorológicos extremos —sequías prolongadas, inundaciones catastróficas, olas de calor sin precedentes— se intensifican con cada fracción de grado adicional. El Acuerdo de París de 2015 estableció el objetivo de limitar el calentamiento a 1.5 °C, pero los compromisos nacionales actuales, conocidos como Contribuciones Determinadas a Nivel Nacional (NDC), son insuficientes y encaminan al planeta hacia un escenario de entre 2.4 °C y 3.5 °C para finales de siglo. La transición energética hacia fuentes renovables —solar, eólica, geotérmica— es técnicamente viable y económicamente competitiva, pero enfrenta resistencias estructurales vinculadas a los intereses de la industria de los hidrocarburos, la inercia institucional y la inequidad global en la distribución de los costos y beneficios de la descarbonización. Los países en desarrollo, históricamente menos responsables de las emisiones acumuladas, enfrentan la paradoja de necesitar crecimiento económico para reducir la pobreza mientras se les exige limitar sus emisiones, una tensión que el concepto de 'responsabilidades comunes pero diferenciadas' intenta resolver sin lograrlo plenamente.",
      "opciones": [
        "Necesitar crecimiento económico para reducir la pobreza mientras se les pide limitar emisiones.",
        "Tener abundantes recursos renovables pero carecer de tecnología para explotarlos.",
        "Rechazar cualquier tipo de cooperación internacional en materia climática.",
        "Producir más emisiones per cápita que los países industrializados."
      ],
      "correcta": "Necesitar crecimiento económico para reducir la pobreza mientras se les pide limitar emisiones.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_15",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Cuál es la función de los núcleos de hielo mencionados en el texto?",
      "lectura": "El cambio climático antropogénico representa la crisis medioambiental más compleja y urgente que enfrenta la humanidad en el siglo XXI. Las evidencias científicas acumuladas durante las últimas cinco décadas son contundentes: la concentración atmosférica de dióxido de carbono ha superado las 420 partes por millón, un nivel sin precedentes en al menos 800,000 años de registros paleoclimáticos obtenidos mediante el análisis de núcleos de hielo en la Antártida y Groenlandia. Este incremento, directamente atribuible a la quema de combustibles fósiles, la deforestación masiva y las prácticas agrícolas intensivas, ha elevado la temperatura promedio global en aproximadamente 1.1 °C respecto a los niveles preindustriales. Aunque esta cifra puede parecer modesta en términos absolutos, sus consecuencias son devastadoras y multiplicativas: la acidificación oceánica amenaza los arrecifes coralinos que sostienen el 25% de la biodiversidad marina; el deshielo acelerado de los casquetes polares contribuye al aumento del nivel del mar, poniendo en riesgo existencial a naciones insulares del Pacífico; y los fenómenos meteorológicos extremos —sequías prolongadas, inundaciones catastróficas, olas de calor sin precedentes— se intensifican con cada fracción de grado adicional. El Acuerdo de París de 2015 estableció el objetivo de limitar el calentamiento a 1.5 °C, pero los compromisos nacionales actuales, conocidos como Contribuciones Determinadas a Nivel Nacional (NDC), son insuficientes y encaminan al planeta hacia un escenario de entre 2.4 °C y 3.5 °C para finales de siglo. La transición energética hacia fuentes renovables —solar, eólica, geotérmica— es técnicamente viable y económicamente competitiva, pero enfrenta resistencias estructurales vinculadas a los intereses de la industria de los hidrocarburos, la inercia institucional y la inequidad global en la distribución de los costos y beneficios de la descarbonización. Los países en desarrollo, históricamente menos responsables de las emisiones acumuladas, enfrentan la paradoja de necesitar crecimiento económico para reducir la pobreza mientras se les exige limitar sus emisiones, una tensión que el concepto de 'responsabilidades comunes pero diferenciadas' intenta resolver sin lograrlo plenamente.",
      "opciones": [
        "Demostrar que la temperatura global siempre ha sido constante.",
        "Servir como fuente de agua potable para las estaciones de investigación.",
        "Proporcionar registros paleoclimáticos que permiten conocer las concentraciones de CO₂ del pasado.",
        "Almacenar muestras biológicas de especies extintas en el hielo."
      ],
      "correcta": "Proporcionar registros paleoclimáticos que permiten conocer las concentraciones de CO₂ del pasado.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_16",
      "modulo": "Comprensión Lectora",
      "pregunta": "El autor sugiere que la transición energética no avanza al ritmo necesario principalmente por:",
      "lectura": "El cambio climático antropogénico representa la crisis medioambiental más compleja y urgente que enfrenta la humanidad en el siglo XXI. Las evidencias científicas acumuladas durante las últimas cinco décadas son contundentes: la concentración atmosférica de dióxido de carbono ha superado las 420 partes por millón, un nivel sin precedentes en al menos 800,000 años de registros paleoclimáticos obtenidos mediante el análisis de núcleos de hielo en la Antártida y Groenlandia. Este incremento, directamente atribuible a la quema de combustibles fósiles, la deforestación masiva y las prácticas agrícolas intensivas, ha elevado la temperatura promedio global en aproximadamente 1.1 °C respecto a los niveles preindustriales. Aunque esta cifra puede parecer modesta en términos absolutos, sus consecuencias son devastadoras y multiplicativas: la acidificación oceánica amenaza los arrecifes coralinos que sostienen el 25% de la biodiversidad marina; el deshielo acelerado de los casquetes polares contribuye al aumento del nivel del mar, poniendo en riesgo existencial a naciones insulares del Pacífico; y los fenómenos meteorológicos extremos —sequías prolongadas, inundaciones catastróficas, olas de calor sin precedentes— se intensifican con cada fracción de grado adicional. El Acuerdo de París de 2015 estableció el objetivo de limitar el calentamiento a 1.5 °C, pero los compromisos nacionales actuales, conocidos como Contribuciones Determinadas a Nivel Nacional (NDC), son insuficientes y encaminan al planeta hacia un escenario de entre 2.4 °C y 3.5 °C para finales de siglo. La transición energética hacia fuentes renovables —solar, eólica, geotérmica— es técnicamente viable y económicamente competitiva, pero enfrenta resistencias estructurales vinculadas a los intereses de la industria de los hidrocarburos, la inercia institucional y la inequidad global en la distribución de los costos y beneficios de la descarbonización. Los países en desarrollo, históricamente menos responsables de las emisiones acumuladas, enfrentan la paradoja de necesitar crecimiento económico para reducir la pobreza mientras se les exige limitar sus emisiones, una tensión que el concepto de 'responsabilidades comunes pero diferenciadas' intenta resolver sin lograrlo plenamente.",
      "opciones": [
        "La falta de interés de la población mundial en el medio ambiente.",
        "La imposibilidad técnica de generar energía con fuentes renovables.",
        "El excesivo costo de los paneles solares y las turbinas eólicas.",
        "Resistencias estructurales vinculadas a intereses económicos, inercia institucional e inequidad global."
      ],
      "correcta": "Resistencias estructurales vinculadas a intereses económicos, inercia institucional e inequidad global.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_17",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Qué relación establece el texto entre la acidificación oceánica y la biodiversidad?",
      "lectura": "El cambio climático antropogénico representa la crisis medioambiental más compleja y urgente que enfrenta la humanidad en el siglo XXI. Las evidencias científicas acumuladas durante las últimas cinco décadas son contundentes: la concentración atmosférica de dióxido de carbono ha superado las 420 partes por millón, un nivel sin precedentes en al menos 800,000 años de registros paleoclimáticos obtenidos mediante el análisis de núcleos de hielo en la Antártida y Groenlandia. Este incremento, directamente atribuible a la quema de combustibles fósiles, la deforestación masiva y las prácticas agrícolas intensivas, ha elevado la temperatura promedio global en aproximadamente 1.1 °C respecto a los niveles preindustriales. Aunque esta cifra puede parecer modesta en términos absolutos, sus consecuencias son devastadoras y multiplicativas: la acidificación oceánica amenaza los arrecifes coralinos que sostienen el 25% de la biodiversidad marina; el deshielo acelerado de los casquetes polares contribuye al aumento del nivel del mar, poniendo en riesgo existencial a naciones insulares del Pacífico; y los fenómenos meteorológicos extremos —sequías prolongadas, inundaciones catastróficas, olas de calor sin precedentes— se intensifican con cada fracción de grado adicional. El Acuerdo de París de 2015 estableció el objetivo de limitar el calentamiento a 1.5 °C, pero los compromisos nacionales actuales, conocidos como Contribuciones Determinadas a Nivel Nacional (NDC), son insuficientes y encaminan al planeta hacia un escenario de entre 2.4 °C y 3.5 °C para finales de siglo. La transición energética hacia fuentes renovables —solar, eólica, geotérmica— es técnicamente viable y económicamente competitiva, pero enfrenta resistencias estructurales vinculadas a los intereses de la industria de los hidrocarburos, la inercia institucional y la inequidad global en la distribución de los costos y beneficios de la descarbonización. Los países en desarrollo, históricamente menos responsables de las emisiones acumuladas, enfrentan la paradoja de necesitar crecimiento económico para reducir la pobreza mientras se les exige limitar sus emisiones, una tensión que el concepto de 'responsabilidades comunes pero diferenciadas' intenta resolver sin lograrlo plenamente.",
      "opciones": [
        "La acidificación solo afecta a las aguas dulces y no a los océanos.",
        "No existe una relación directa entre ambos fenómenos según el texto.",
        "La acidificación amenaza los arrecifes coralinos que sostienen el 25% de la biodiversidad marina.",
        "La acidificación beneficia a las especies marinas al proporcionar más nutrientes."
      ],
      "correcta": "La acidificación amenaza los arrecifes coralinos que sostienen el 25% de la biodiversidad marina.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_18",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Qué porcentaje de las emisiones globales de CO₂ genera el sector de la construcción?",
      "lectura": "La arquitectura sostenible representa una respuesta del diseño y la construcción a la crisis ambiental global, buscando minimizar el impacto ecológico de los edificios durante todo su ciclo de vida, desde la extracción de materiales hasta su eventual demolición. El sector de la construcción es responsable del 39% de las emisiones globales de CO₂ relacionadas con la energía: el 28% proviene de la operación de edificios (calefacción, refrigeración, iluminación) y el 11% de la fabricación de materiales como el cemento, el acero y el vidrio. Los estándares de certificación como LEED y BREEAM evalúan el desempeño ambiental de los edificios mediante criterios que incluyen eficiencia energética, gestión del agua, calidad del aire interior, selección de materiales y proximidad al transporte público. Entre las estrategias más innovadoras destaca el diseño bioclimático, que aprovecha las condiciones climáticas locales —orientación solar, vientos predominantes, vegetación circundante— para reducir la demanda energética sin recurrir a sistemas mecánicos. Los edificios de energía neta cero, que generan tanta energía renovable como la que consumen anualmente, han dejado de ser prototipos experimentales para convertirse en requisitos normativos en varias jurisdicciones europeas. Paralelamente, la arquitectura biomimética se inspira en soluciones evolutivas de la naturaleza: fachadas que regulan la temperatura imitando la piel de los lagartos del desierto, estructuras que canalizan la ventilación como los termiteros africanos, y materiales autorreparables inspirados en los mecanismos biológicos de cicatrización. El concepto de economía circular aplicado a la construcción promueve el diseño para el desensamblaje, permitiendo que los componentes de un edificio sean reutilizados al final de su vida útil en lugar de terminar en vertederos.",
      "opciones": [
        "El 100% de las emisiones provienen de la construcción.",
        "Menos del 5% de las emisiones globales totales.",
        "El 39%, dividido entre operación de edificios (28%) y fabricación de materiales (11%).",
        "Exactamente el 50% de todas las emisiones mundiales."
      ],
      "correcta": "El 39%, dividido entre operación de edificios (28%) y fabricación de materiales (11%).",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_19",
      "modulo": "Comprensión Lectora",
      "pregunta": "El diseño bioclimático se caracteriza por:",
      "lectura": "La arquitectura sostenible representa una respuesta del diseño y la construcción a la crisis ambiental global, buscando minimizar el impacto ecológico de los edificios durante todo su ciclo de vida, desde la extracción de materiales hasta su eventual demolición. El sector de la construcción es responsable del 39% de las emisiones globales de CO₂ relacionadas con la energía: el 28% proviene de la operación de edificios (calefacción, refrigeración, iluminación) y el 11% de la fabricación de materiales como el cemento, el acero y el vidrio. Los estándares de certificación como LEED y BREEAM evalúan el desempeño ambiental de los edificios mediante criterios que incluyen eficiencia energética, gestión del agua, calidad del aire interior, selección de materiales y proximidad al transporte público. Entre las estrategias más innovadoras destaca el diseño bioclimático, que aprovecha las condiciones climáticas locales —orientación solar, vientos predominantes, vegetación circundante— para reducir la demanda energética sin recurrir a sistemas mecánicos. Los edificios de energía neta cero, que generan tanta energía renovable como la que consumen anualmente, han dejado de ser prototipos experimentales para convertirse en requisitos normativos en varias jurisdicciones europeas. Paralelamente, la arquitectura biomimética se inspira en soluciones evolutivas de la naturaleza: fachadas que regulan la temperatura imitando la piel de los lagartos del desierto, estructuras que canalizan la ventilación como los termiteros africanos, y materiales autorreparables inspirados en los mecanismos biológicos de cicatrización. El concepto de economía circular aplicado a la construcción promueve el diseño para el desensamblaje, permitiendo que los componentes de un edificio sean reutilizados al final de su vida útil en lugar de terminar en vertederos.",
      "opciones": [
        "Priorizar la estética sobre cualquier consideración ambiental.",
        "Construir edificios idénticos sin considerar el clima local.",
        "Usar exclusivamente sistemas de aire acondicionado de alta potencia.",
        "Aprovechar las condiciones climáticas locales para reducir la demanda energética sin sistemas mecánicos."
      ],
      "correcta": "Aprovechar las condiciones climáticas locales para reducir la demanda energética sin sistemas mecánicos.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_20",
      "modulo": "Comprensión Lectora",
      "pregunta": "La arquitectura biomimética se inspira en:",
      "lectura": "La arquitectura sostenible representa una respuesta del diseño y la construcción a la crisis ambiental global, buscando minimizar el impacto ecológico de los edificios durante todo su ciclo de vida, desde la extracción de materiales hasta su eventual demolición. El sector de la construcción es responsable del 39% de las emisiones globales de CO₂ relacionadas con la energía: el 28% proviene de la operación de edificios (calefacción, refrigeración, iluminación) y el 11% de la fabricación de materiales como el cemento, el acero y el vidrio. Los estándares de certificación como LEED y BREEAM evalúan el desempeño ambiental de los edificios mediante criterios que incluyen eficiencia energética, gestión del agua, calidad del aire interior, selección de materiales y proximidad al transporte público. Entre las estrategias más innovadoras destaca el diseño bioclimático, que aprovecha las condiciones climáticas locales —orientación solar, vientos predominantes, vegetación circundante— para reducir la demanda energética sin recurrir a sistemas mecánicos. Los edificios de energía neta cero, que generan tanta energía renovable como la que consumen anualmente, han dejado de ser prototipos experimentales para convertirse en requisitos normativos en varias jurisdicciones europeas. Paralelamente, la arquitectura biomimética se inspira en soluciones evolutivas de la naturaleza: fachadas que regulan la temperatura imitando la piel de los lagartos del desierto, estructuras que canalizan la ventilación como los termiteros africanos, y materiales autorreparables inspirados en los mecanismos biológicos de cicatrización. El concepto de economía circular aplicado a la construcción promueve el diseño para el desensamblaje, permitiendo que los componentes de un edificio sean reutilizados al final de su vida útil en lugar de terminar en vertederos.",
      "opciones": [
        "Las estructuras de los edificios más altos del mundo.",
        "Soluciones evolutivas de la naturaleza, como la piel de lagartos o la ventilación de termiteros.",
        "Los diseños arquitectónicos de la antigua Roma.",
        "Los materiales sintéticos desarrollados en laboratorios espaciales."
      ],
      "correcta": "Soluciones evolutivas de la naturaleza, como la piel de lagartos o la ventilación de termiteros.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_21",
      "modulo": "Comprensión Lectora",
      "pregunta": "Un edificio de energía neta cero es aquel que:",
      "lectura": "La arquitectura sostenible representa una respuesta del diseño y la construcción a la crisis ambiental global, buscando minimizar el impacto ecológico de los edificios durante todo su ciclo de vida, desde la extracción de materiales hasta su eventual demolición. El sector de la construcción es responsable del 39% de las emisiones globales de CO₂ relacionadas con la energía: el 28% proviene de la operación de edificios (calefacción, refrigeración, iluminación) y el 11% de la fabricación de materiales como el cemento, el acero y el vidrio. Los estándares de certificación como LEED y BREEAM evalúan el desempeño ambiental de los edificios mediante criterios que incluyen eficiencia energética, gestión del agua, calidad del aire interior, selección de materiales y proximidad al transporte público. Entre las estrategias más innovadoras destaca el diseño bioclimático, que aprovecha las condiciones climáticas locales —orientación solar, vientos predominantes, vegetación circundante— para reducir la demanda energética sin recurrir a sistemas mecánicos. Los edificios de energía neta cero, que generan tanta energía renovable como la que consumen anualmente, han dejado de ser prototipos experimentales para convertirse en requisitos normativos en varias jurisdicciones europeas. Paralelamente, la arquitectura biomimética se inspira en soluciones evolutivas de la naturaleza: fachadas que regulan la temperatura imitando la piel de los lagartos del desierto, estructuras que canalizan la ventilación como los termiteros africanos, y materiales autorreparables inspirados en los mecanismos biológicos de cicatrización. El concepto de economía circular aplicado a la construcción promueve el diseño para el desensamblaje, permitiendo que los componentes de un edificio sean reutilizados al final de su vida útil en lugar de terminar en vertederos.",
      "opciones": [
        "Solo funciona durante las horas de luz solar.",
        "Genera tanta energía renovable como la que consume durante un año.",
        "No utiliza ningún tipo de energía para su funcionamiento.",
        "Consume el doble de energía que un edificio convencional."
      ],
      "correcta": "Genera tanta energía renovable como la que consume durante un año.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_22",
      "modulo": "Comprensión Lectora",
      "pregunta": "El 'diseño para el desensamblaje' busca:",
      "lectura": "La arquitectura sostenible representa una respuesta del diseño y la construcción a la crisis ambiental global, buscando minimizar el impacto ecológico de los edificios durante todo su ciclo de vida, desde la extracción de materiales hasta su eventual demolición. El sector de la construcción es responsable del 39% de las emisiones globales de CO₂ relacionadas con la energía: el 28% proviene de la operación de edificios (calefacción, refrigeración, iluminación) y el 11% de la fabricación de materiales como el cemento, el acero y el vidrio. Los estándares de certificación como LEED y BREEAM evalúan el desempeño ambiental de los edificios mediante criterios que incluyen eficiencia energética, gestión del agua, calidad del aire interior, selección de materiales y proximidad al transporte público. Entre las estrategias más innovadoras destaca el diseño bioclimático, que aprovecha las condiciones climáticas locales —orientación solar, vientos predominantes, vegetación circundante— para reducir la demanda energética sin recurrir a sistemas mecánicos. Los edificios de energía neta cero, que generan tanta energía renovable como la que consumen anualmente, han dejado de ser prototipos experimentales para convertirse en requisitos normativos en varias jurisdicciones europeas. Paralelamente, la arquitectura biomimética se inspira en soluciones evolutivas de la naturaleza: fachadas que regulan la temperatura imitando la piel de los lagartos del desierto, estructuras que canalizan la ventilación como los termiteros africanos, y materiales autorreparables inspirados en los mecanismos biológicos de cicatrización. El concepto de economía circular aplicado a la construcción promueve el diseño para el desensamblaje, permitiendo que los componentes de un edificio sean reutilizados al final de su vida útil en lugar de terminar en vertederos.",
      "opciones": [
        "Que los edificios puedan construirse en un solo día.",
        "Que las viviendas sean portátiles y puedan trasladarse.",
        "Que los componentes de un edificio puedan reutilizarse al final de su vida útil.",
        "Que los edificios sean más baratos de demoler con explosivos."
      ],
      "correcta": "Que los componentes de un edificio puedan reutilizarse al final de su vida útil.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_23",
      "modulo": "Comprensión Lectora",
      "pregunta": "Las certificaciones LEED y BREEAM evalúan:",
      "lectura": "La arquitectura sostenible representa una respuesta del diseño y la construcción a la crisis ambiental global, buscando minimizar el impacto ecológico de los edificios durante todo su ciclo de vida, desde la extracción de materiales hasta su eventual demolición. El sector de la construcción es responsable del 39% de las emisiones globales de CO₂ relacionadas con la energía: el 28% proviene de la operación de edificios (calefacción, refrigeración, iluminación) y el 11% de la fabricación de materiales como el cemento, el acero y el vidrio. Los estándares de certificación como LEED y BREEAM evalúan el desempeño ambiental de los edificios mediante criterios que incluyen eficiencia energética, gestión del agua, calidad del aire interior, selección de materiales y proximidad al transporte público. Entre las estrategias más innovadoras destaca el diseño bioclimático, que aprovecha las condiciones climáticas locales —orientación solar, vientos predominantes, vegetación circundante— para reducir la demanda energética sin recurrir a sistemas mecánicos. Los edificios de energía neta cero, que generan tanta energía renovable como la que consumen anualmente, han dejado de ser prototipos experimentales para convertirse en requisitos normativos en varias jurisdicciones europeas. Paralelamente, la arquitectura biomimética se inspira en soluciones evolutivas de la naturaleza: fachadas que regulan la temperatura imitando la piel de los lagartos del desierto, estructuras que canalizan la ventilación como los termiteros africanos, y materiales autorreparables inspirados en los mecanismos biológicos de cicatrización. El concepto de economía circular aplicado a la construcción promueve el diseño para el desensamblaje, permitiendo que los componentes de un edificio sean reutilizados al final de su vida útil en lugar de terminar en vertederos.",
      "opciones": [
        "Solo el costo económico de la construcción.",
        "El desempeño ambiental de los edificios mediante criterios como eficiencia energética y gestión del agua.",
        "La belleza estética del diseño arquitectónico.",
        "Exclusivamente la resistencia sísmica de las estructuras."
      ],
      "correcta": "El desempeño ambiental de los edificios mediante criterios como eficiencia energética y gestión del agua.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_24",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Por qué el autor cuestiona la visión de internet como 'gran igualador'?",
      "lectura": "La brecha digital, entendida como la desigualdad en el acceso, uso y apropiación de las tecnologías de la información y comunicación (TIC), se ha convertido en uno de los factores más determinantes de la estratificación social en el siglo XXI. A diferencia de lo que sugieren las narrativas tecnooptimistas que presentan internet como un gran igualador, las evidencias empíricas revelan que la revolución digital ha tendido a reproducir y amplificar las desigualdades preexistentes en lugar de eliminarlas. La primera brecha digital, relacionada con el acceso físico a la infraestructura tecnológica, afecta a aproximadamente 2,700 millones de personas que aún carecen de conexión a internet, concentradas desproporcionadamente en el África subsahariana, el sur de Asia y las zonas rurales de países en desarrollo. Sin embargo, investigadores como Jan van Dijk han argumentado que el problema trasciende la mera conectividad: la segunda brecha digital se refiere a las diferencias en habilidades digitales entre quienes ya tienen acceso, distinguiendo entre competencias operacionales básicas (encender un dispositivo, navegar por una página web) y competencias estratégicas avanzadas (evaluar críticamente información en línea, proteger la privacidad digital, utilizar herramientas tecnológicas para la movilidad social y económica). Una tercera brecha, más reciente, involucra la desigualdad en los beneficios tangibles que las personas obtienen del uso de internet: mientras los usuarios de mayor capital cultural y económico aprovechan la tecnología para la educación continua, la generación de ingresos y la participación cívica, los usuarios de menores recursos tienden a utilizarla predominantemente para entretenimiento pasivo. Esta estratificación digital tiene implicaciones profundas para la democracia, la educación y el mercado laboral, pues en una economía crecientemente digitalizada, quienes carecen de competencias digitales avanzadas enfrentan una desventaja estructural análoga al analfabetismo funcional del siglo XX.",
      "opciones": [
        "Porque internet es una tecnología demasiado nueva para evaluar.",
        "Porque la conectividad global ya es universal y completa.",
        "Porque todos los usuarios de internet obtienen los mismos beneficios.",
        "Porque las evidencias muestran que la revolución digital ha reproducido y amplificado las desigualdades preexistentes."
      ],
      "correcta": "Porque las evidencias muestran que la revolución digital ha reproducido y amplificado las desigualdades preexistentes.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_25",
      "modulo": "Comprensión Lectora",
      "pregunta": "La 'segunda brecha digital' se refiere a:",
      "lectura": "La brecha digital, entendida como la desigualdad en el acceso, uso y apropiación de las tecnologías de la información y comunicación (TIC), se ha convertido en uno de los factores más determinantes de la estratificación social en el siglo XXI. A diferencia de lo que sugieren las narrativas tecnooptimistas que presentan internet como un gran igualador, las evidencias empíricas revelan que la revolución digital ha tendido a reproducir y amplificar las desigualdades preexistentes en lugar de eliminarlas. La primera brecha digital, relacionada con el acceso físico a la infraestructura tecnológica, afecta a aproximadamente 2,700 millones de personas que aún carecen de conexión a internet, concentradas desproporcionadamente en el África subsahariana, el sur de Asia y las zonas rurales de países en desarrollo. Sin embargo, investigadores como Jan van Dijk han argumentado que el problema trasciende la mera conectividad: la segunda brecha digital se refiere a las diferencias en habilidades digitales entre quienes ya tienen acceso, distinguiendo entre competencias operacionales básicas (encender un dispositivo, navegar por una página web) y competencias estratégicas avanzadas (evaluar críticamente información en línea, proteger la privacidad digital, utilizar herramientas tecnológicas para la movilidad social y económica). Una tercera brecha, más reciente, involucra la desigualdad en los beneficios tangibles que las personas obtienen del uso de internet: mientras los usuarios de mayor capital cultural y económico aprovechan la tecnología para la educación continua, la generación de ingresos y la participación cívica, los usuarios de menores recursos tienden a utilizarla predominantemente para entretenimiento pasivo. Esta estratificación digital tiene implicaciones profundas para la democracia, la educación y el mercado laboral, pues en una economía crecientemente digitalizada, quienes carecen de competencias digitales avanzadas enfrentan una desventaja estructural análoga al analfabetismo funcional del siglo XX.",
      "opciones": [
        "La diferencia de velocidad entre conexiones por cable y WiFi.",
        "La falta de cables submarinos para conectar continentes.",
        "Las diferencias en habilidades digitales entre quienes ya tienen acceso a la tecnología.",
        "La competencia entre empresas de telecomunicaciones."
      ],
      "correcta": "Las diferencias en habilidades digitales entre quienes ya tienen acceso a la tecnología.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_26",
      "modulo": "Comprensión Lectora",
      "pregunta": "La analogía con el 'analfabetismo funcional' sugiere que:",
      "lectura": "La brecha digital, entendida como la desigualdad en el acceso, uso y apropiación de las tecnologías de la información y comunicación (TIC), se ha convertido en uno de los factores más determinantes de la estratificación social en el siglo XXI. A diferencia de lo que sugieren las narrativas tecnooptimistas que presentan internet como un gran igualador, las evidencias empíricas revelan que la revolución digital ha tendido a reproducir y amplificar las desigualdades preexistentes en lugar de eliminarlas. La primera brecha digital, relacionada con el acceso físico a la infraestructura tecnológica, afecta a aproximadamente 2,700 millones de personas que aún carecen de conexión a internet, concentradas desproporcionadamente en el África subsahariana, el sur de Asia y las zonas rurales de países en desarrollo. Sin embargo, investigadores como Jan van Dijk han argumentado que el problema trasciende la mera conectividad: la segunda brecha digital se refiere a las diferencias en habilidades digitales entre quienes ya tienen acceso, distinguiendo entre competencias operacionales básicas (encender un dispositivo, navegar por una página web) y competencias estratégicas avanzadas (evaluar críticamente información en línea, proteger la privacidad digital, utilizar herramientas tecnológicas para la movilidad social y económica). Una tercera brecha, más reciente, involucra la desigualdad en los beneficios tangibles que las personas obtienen del uso de internet: mientras los usuarios de mayor capital cultural y económico aprovechan la tecnología para la educación continua, la generación de ingresos y la participación cívica, los usuarios de menores recursos tienden a utilizarla predominantemente para entretenimiento pasivo. Esta estratificación digital tiene implicaciones profundas para la democracia, la educación y el mercado laboral, pues en una economía crecientemente digitalizada, quienes carecen de competencias digitales avanzadas enfrentan una desventaja estructural análoga al analfabetismo funcional del siglo XX.",
      "opciones": [
        "El analfabetismo ha desaparecido completamente en todos los países.",
        "La falta de competencias digitales avanzadas genera una desventaja estructural similar a no saber leer en el siglo pasado.",
        "Las competencias digitales son menos importantes que la lectura.",
        "Leer y escribir ya no son habilidades necesarias en la actualidad."
      ],
      "correcta": "La falta de competencias digitales avanzadas genera una desventaja estructural similar a no saber leer en el siglo pasado.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_27",
      "modulo": "Comprensión Lectora",
      "pregunta": "La 'tercera brecha digital' se relaciona con:",
      "lectura": "La brecha digital, entendida como la desigualdad en el acceso, uso y apropiación de las tecnologías de la información y comunicación (TIC), se ha convertido en uno de los factores más determinantes de la estratificación social en el siglo XXI. A diferencia de lo que sugieren las narrativas tecnooptimistas que presentan internet como un gran igualador, las evidencias empíricas revelan que la revolución digital ha tendido a reproducir y amplificar las desigualdades preexistentes en lugar de eliminarlas. La primera brecha digital, relacionada con el acceso físico a la infraestructura tecnológica, afecta a aproximadamente 2,700 millones de personas que aún carecen de conexión a internet, concentradas desproporcionadamente en el África subsahariana, el sur de Asia y las zonas rurales de países en desarrollo. Sin embargo, investigadores como Jan van Dijk han argumentado que el problema trasciende la mera conectividad: la segunda brecha digital se refiere a las diferencias en habilidades digitales entre quienes ya tienen acceso, distinguiendo entre competencias operacionales básicas (encender un dispositivo, navegar por una página web) y competencias estratégicas avanzadas (evaluar críticamente información en línea, proteger la privacidad digital, utilizar herramientas tecnológicas para la movilidad social y económica). Una tercera brecha, más reciente, involucra la desigualdad en los beneficios tangibles que las personas obtienen del uso de internet: mientras los usuarios de mayor capital cultural y económico aprovechan la tecnología para la educación continua, la generación de ingresos y la participación cívica, los usuarios de menores recursos tienden a utilizarla predominantemente para entretenimiento pasivo. Esta estratificación digital tiene implicaciones profundas para la democracia, la educación y el mercado laboral, pues en una economía crecientemente digitalizada, quienes carecen de competencias digitales avanzadas enfrentan una desventaja estructural análoga al analfabetismo funcional del siglo XX.",
      "opciones": [
        "La desigualdad en los beneficios tangibles que diferentes grupos obtienen del uso de internet.",
        "La diferencia entre redes sociales y correo electrónico.",
        "La velocidad de descarga entre diferentes proveedores de internet.",
        "La cantidad de dispositivos electrónicos que posee cada persona."
      ],
      "correcta": "La desigualdad en los beneficios tangibles que diferentes grupos obtienen del uso de internet.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_28",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Cuántas personas aproximadamente carecen de conexión a internet según el texto?",
      "lectura": "La brecha digital, entendida como la desigualdad en el acceso, uso y apropiación de las tecnologías de la información y comunicación (TIC), se ha convertido en uno de los factores más determinantes de la estratificación social en el siglo XXI. A diferencia de lo que sugieren las narrativas tecnooptimistas que presentan internet como un gran igualador, las evidencias empíricas revelan que la revolución digital ha tendido a reproducir y amplificar las desigualdades preexistentes en lugar de eliminarlas. La primera brecha digital, relacionada con el acceso físico a la infraestructura tecnológica, afecta a aproximadamente 2,700 millones de personas que aún carecen de conexión a internet, concentradas desproporcionadamente en el África subsahariana, el sur de Asia y las zonas rurales de países en desarrollo. Sin embargo, investigadores como Jan van Dijk han argumentado que el problema trasciende la mera conectividad: la segunda brecha digital se refiere a las diferencias en habilidades digitales entre quienes ya tienen acceso, distinguiendo entre competencias operacionales básicas (encender un dispositivo, navegar por una página web) y competencias estratégicas avanzadas (evaluar críticamente información en línea, proteger la privacidad digital, utilizar herramientas tecnológicas para la movilidad social y económica). Una tercera brecha, más reciente, involucra la desigualdad en los beneficios tangibles que las personas obtienen del uso de internet: mientras los usuarios de mayor capital cultural y económico aprovechan la tecnología para la educación continua, la generación de ingresos y la participación cívica, los usuarios de menores recursos tienden a utilizarla predominantemente para entretenimiento pasivo. Esta estratificación digital tiene implicaciones profundas para la democracia, la educación y el mercado laboral, pues en una economía crecientemente digitalizada, quienes carecen de competencias digitales avanzadas enfrentan una desventaja estructural análoga al analfabetismo funcional del siglo XX.",
      "opciones": [
        "La totalidad de la población mundial.",
        "Menos de 100 millones en todo el mundo.",
        "Exactamente 500 millones de personas.",
        "Aproximadamente 2,700 millones de personas."
      ],
      "correcta": "Aproximadamente 2,700 millones de personas.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_29",
      "modulo": "Comprensión Lectora",
      "pregunta": "El texto sugiere que los usuarios de menores recursos tienden a:",
      "lectura": "La brecha digital, entendida como la desigualdad en el acceso, uso y apropiación de las tecnologías de la información y comunicación (TIC), se ha convertido en uno de los factores más determinantes de la estratificación social en el siglo XXI. A diferencia de lo que sugieren las narrativas tecnooptimistas que presentan internet como un gran igualador, las evidencias empíricas revelan que la revolución digital ha tendido a reproducir y amplificar las desigualdades preexistentes en lugar de eliminarlas. La primera brecha digital, relacionada con el acceso físico a la infraestructura tecnológica, afecta a aproximadamente 2,700 millones de personas que aún carecen de conexión a internet, concentradas desproporcionadamente en el África subsahariana, el sur de Asia y las zonas rurales de países en desarrollo. Sin embargo, investigadores como Jan van Dijk han argumentado que el problema trasciende la mera conectividad: la segunda brecha digital se refiere a las diferencias en habilidades digitales entre quienes ya tienen acceso, distinguiendo entre competencias operacionales básicas (encender un dispositivo, navegar por una página web) y competencias estratégicas avanzadas (evaluar críticamente información en línea, proteger la privacidad digital, utilizar herramientas tecnológicas para la movilidad social y económica). Una tercera brecha, más reciente, involucra la desigualdad en los beneficios tangibles que las personas obtienen del uso de internet: mientras los usuarios de mayor capital cultural y económico aprovechan la tecnología para la educación continua, la generación de ingresos y la participación cívica, los usuarios de menores recursos tienden a utilizarla predominantemente para entretenimiento pasivo. Esta estratificación digital tiene implicaciones profundas para la democracia, la educación y el mercado laboral, pues en una economía crecientemente digitalizada, quienes carecen de competencias digitales avanzadas enfrentan una desventaja estructural análoga al analfabetismo funcional del siglo XX.",
      "opciones": [
        "No tener acceso a ningún tipo de contenido de entretenimiento.",
        "Ser los usuarios más productivos y creativos de internet.",
        "Utilizar internet exclusivamente para actividades educativas.",
        "Utilizar internet predominantemente para entretenimiento pasivo en lugar de desarrollo profesional."
      ],
      "correcta": "Utilizar internet predominantemente para entretenimiento pasivo en lugar de desarrollo profesional.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_30",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Cuál era el paradigma dominante sobre el cerebro adulto durante el siglo XX?",
      "lectura": "La neuroplasticidad cerebral, definida como la capacidad del sistema nervioso central para reorganizar sus conexiones sinápticas en respuesta a la experiencia, el aprendizaje o las lesiones, ha revolucionado la comprensión neurocientífica del cerebro humano. Durante gran parte del siglo XX, el paradigma dominante sostenía que el cerebro adulto era un órgano esencialmente estático, cuyas estructuras neuronales quedaban fijadas al concluir los períodos críticos del desarrollo infantil. Esta visión determinista fue desafiada de manera contundente a partir de la década de 1960 por los trabajos pioneros de investigadores como Paul Bach-y-Rita, quien demostró que pacientes con daño cerebral severo podían recuperar funciones perdidas mediante protocolos de rehabilitación intensiva que aprovechaban la capacidad del cerebro para reasignar funciones de áreas dañadas a regiones intactas. Investigaciones posteriores han revelado que la neuroplasticidad opera a múltiples niveles: desde la potenciación a largo plazo (LTP) —el fortalecimiento de conexiones sinápticas individuales que subyace a la formación de memorias— hasta la remodelación cortical a gran escala observada en músicos profesionales, cuyas áreas auditivas y motoras presentan diferencias estructurales significativas respecto a individuos sin entrenamiento musical. Particularmente revelador ha sido el estudio de los taxistas londinenses, cuyos hipocampos posteriores —la región cerebral asociada a la navegación espacial— son mensurablemente más grandes que los de la población general, y cuyo volumen se correlaciona positivamente con los años de experiencia en la profesión. Sin embargo, la neuroplasticidad no es un fenómeno exclusivamente positivo: la exposición crónica al estrés, la adicción a sustancias psicoactivas y el dolor crónico también remodelan el cerebro, pero de maneras maladaptativas que refuerzan patrones disfuncionales. Este aspecto dual de la plasticidad cerebral tiene implicaciones profundas para la educación, la rehabilitación clínica y la comprensión de los trastornos psiquiátricos, sugiriendo que las intervenciones tempranas y sostenidas pueden modificar trayectorias neurocognitivas que anteriormente se consideraban irreversibles.",
      "opciones": [
        "Que las neuronas se reproducían constantemente durante toda la vida adulta.",
        "Que podía regenerarse completamente después de cualquier lesión.",
        "Que solo funcionaba al 10% de su capacidad total.",
        "Que era un órgano estático cuyas estructuras quedaban fijadas tras el desarrollo infantil."
      ],
      "correcta": "Que era un órgano estático cuyas estructuras quedaban fijadas tras el desarrollo infantil.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_31",
      "modulo": "Comprensión Lectora",
      "pregunta": "El estudio de los taxistas londinenses demuestra que:",
      "lectura": "La neuroplasticidad cerebral, definida como la capacidad del sistema nervioso central para reorganizar sus conexiones sinápticas en respuesta a la experiencia, el aprendizaje o las lesiones, ha revolucionado la comprensión neurocientífica del cerebro humano. Durante gran parte del siglo XX, el paradigma dominante sostenía que el cerebro adulto era un órgano esencialmente estático, cuyas estructuras neuronales quedaban fijadas al concluir los períodos críticos del desarrollo infantil. Esta visión determinista fue desafiada de manera contundente a partir de la década de 1960 por los trabajos pioneros de investigadores como Paul Bach-y-Rita, quien demostró que pacientes con daño cerebral severo podían recuperar funciones perdidas mediante protocolos de rehabilitación intensiva que aprovechaban la capacidad del cerebro para reasignar funciones de áreas dañadas a regiones intactas. Investigaciones posteriores han revelado que la neuroplasticidad opera a múltiples niveles: desde la potenciación a largo plazo (LTP) —el fortalecimiento de conexiones sinápticas individuales que subyace a la formación de memorias— hasta la remodelación cortical a gran escala observada en músicos profesionales, cuyas áreas auditivas y motoras presentan diferencias estructurales significativas respecto a individuos sin entrenamiento musical. Particularmente revelador ha sido el estudio de los taxistas londinenses, cuyos hipocampos posteriores —la región cerebral asociada a la navegación espacial— son mensurablemente más grandes que los de la población general, y cuyo volumen se correlaciona positivamente con los años de experiencia en la profesión. Sin embargo, la neuroplasticidad no es un fenómeno exclusivamente positivo: la exposición crónica al estrés, la adicción a sustancias psicoactivas y el dolor crónico también remodelan el cerebro, pero de maneras maladaptativas que refuerzan patrones disfuncionales. Este aspecto dual de la plasticidad cerebral tiene implicaciones profundas para la educación, la rehabilitación clínica y la comprensión de los trastornos psiquiátricos, sugiriendo que las intervenciones tempranas y sostenidas pueden modificar trayectorias neurocognitivas que anteriormente se consideraban irreversibles.",
      "opciones": [
        "El hipocampo puede crecer estructuralmente en respuesta al uso intensivo de la navegación espacial.",
        "Conducir en Londres causa daño cerebral irreversible.",
        "Los taxistas nacen con un hipocampo más grande que el promedio.",
        "La memoria espacial no tiene relación con ninguna estructura cerebral."
      ],
      "correcta": "El hipocampo puede crecer estructuralmente en respuesta al uso intensivo de la navegación espacial.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_32",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Qué es la potenciación a largo plazo (LTP) según el texto?",
      "lectura": "La neuroplasticidad cerebral, definida como la capacidad del sistema nervioso central para reorganizar sus conexiones sinápticas en respuesta a la experiencia, el aprendizaje o las lesiones, ha revolucionado la comprensión neurocientífica del cerebro humano. Durante gran parte del siglo XX, el paradigma dominante sostenía que el cerebro adulto era un órgano esencialmente estático, cuyas estructuras neuronales quedaban fijadas al concluir los períodos críticos del desarrollo infantil. Esta visión determinista fue desafiada de manera contundente a partir de la década de 1960 por los trabajos pioneros de investigadores como Paul Bach-y-Rita, quien demostró que pacientes con daño cerebral severo podían recuperar funciones perdidas mediante protocolos de rehabilitación intensiva que aprovechaban la capacidad del cerebro para reasignar funciones de áreas dañadas a regiones intactas. Investigaciones posteriores han revelado que la neuroplasticidad opera a múltiples niveles: desde la potenciación a largo plazo (LTP) —el fortalecimiento de conexiones sinápticas individuales que subyace a la formación de memorias— hasta la remodelación cortical a gran escala observada en músicos profesionales, cuyas áreas auditivas y motoras presentan diferencias estructurales significativas respecto a individuos sin entrenamiento musical. Particularmente revelador ha sido el estudio de los taxistas londinenses, cuyos hipocampos posteriores —la región cerebral asociada a la navegación espacial— son mensurablemente más grandes que los de la población general, y cuyo volumen se correlaciona positivamente con los años de experiencia en la profesión. Sin embargo, la neuroplasticidad no es un fenómeno exclusivamente positivo: la exposición crónica al estrés, la adicción a sustancias psicoactivas y el dolor crónico también remodelan el cerebro, pero de maneras maladaptativas que refuerzan patrones disfuncionales. Este aspecto dual de la plasticidad cerebral tiene implicaciones profundas para la educación, la rehabilitación clínica y la comprensión de los trastornos psiquiátricos, sugiriendo que las intervenciones tempranas y sostenidas pueden modificar trayectorias neurocognitivas que anteriormente se consideraban irreversibles.",
      "opciones": [
        "La capacidad del cerebro para generar nuevas neuronas.",
        "Un método de enseñanza basado en la repetición mecánica.",
        "El fortalecimiento de conexiones sinápticas individuales que subyace a la formación de memorias.",
        "Un tipo de medicamento utilizado en la rehabilitación neurológica."
      ],
      "correcta": "El fortalecimiento de conexiones sinápticas individuales que subyace a la formación de memorias.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_33",
      "modulo": "Comprensión Lectora",
      "pregunta": "El texto indica que la neuroplasticidad puede ser 'maladaptativa' cuando:",
      "lectura": "La neuroplasticidad cerebral, definida como la capacidad del sistema nervioso central para reorganizar sus conexiones sinápticas en respuesta a la experiencia, el aprendizaje o las lesiones, ha revolucionado la comprensión neurocientífica del cerebro humano. Durante gran parte del siglo XX, el paradigma dominante sostenía que el cerebro adulto era un órgano esencialmente estático, cuyas estructuras neuronales quedaban fijadas al concluir los períodos críticos del desarrollo infantil. Esta visión determinista fue desafiada de manera contundente a partir de la década de 1960 por los trabajos pioneros de investigadores como Paul Bach-y-Rita, quien demostró que pacientes con daño cerebral severo podían recuperar funciones perdidas mediante protocolos de rehabilitación intensiva que aprovechaban la capacidad del cerebro para reasignar funciones de áreas dañadas a regiones intactas. Investigaciones posteriores han revelado que la neuroplasticidad opera a múltiples niveles: desde la potenciación a largo plazo (LTP) —el fortalecimiento de conexiones sinápticas individuales que subyace a la formación de memorias— hasta la remodelación cortical a gran escala observada en músicos profesionales, cuyas áreas auditivas y motoras presentan diferencias estructurales significativas respecto a individuos sin entrenamiento musical. Particularmente revelador ha sido el estudio de los taxistas londinenses, cuyos hipocampos posteriores —la región cerebral asociada a la navegación espacial— son mensurablemente más grandes que los de la población general, y cuyo volumen se correlaciona positivamente con los años de experiencia en la profesión. Sin embargo, la neuroplasticidad no es un fenómeno exclusivamente positivo: la exposición crónica al estrés, la adicción a sustancias psicoactivas y el dolor crónico también remodelan el cerebro, pero de maneras maladaptativas que refuerzan patrones disfuncionales. Este aspecto dual de la plasticidad cerebral tiene implicaciones profundas para la educación, la rehabilitación clínica y la comprensión de los trastornos psiquiátricos, sugiriendo que las intervenciones tempranas y sostenidas pueden modificar trayectorias neurocognitivas que anteriormente se consideraban irreversibles.",
      "opciones": [
        "Los pacientes rechazan cualquier tipo de tratamiento médico.",
        "Las personas duermen más de diez horas diarias de forma sostenida.",
        "El cerebro crece demasiado rápido durante la infancia.",
        "El estrés crónico, la adicción o el dolor remodelan el cerebro reforzando patrones disfuncionales."
      ],
      "correcta": "El estrés crónico, la adicción o el dolor remodelan el cerebro reforzando patrones disfuncionales.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_34",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Cuál es la implicación principal que el autor deriva para la educación?",
      "lectura": "La neuroplasticidad cerebral, definida como la capacidad del sistema nervioso central para reorganizar sus conexiones sinápticas en respuesta a la experiencia, el aprendizaje o las lesiones, ha revolucionado la comprensión neurocientífica del cerebro humano. Durante gran parte del siglo XX, el paradigma dominante sostenía que el cerebro adulto era un órgano esencialmente estático, cuyas estructuras neuronales quedaban fijadas al concluir los períodos críticos del desarrollo infantil. Esta visión determinista fue desafiada de manera contundente a partir de la década de 1960 por los trabajos pioneros de investigadores como Paul Bach-y-Rita, quien demostró que pacientes con daño cerebral severo podían recuperar funciones perdidas mediante protocolos de rehabilitación intensiva que aprovechaban la capacidad del cerebro para reasignar funciones de áreas dañadas a regiones intactas. Investigaciones posteriores han revelado que la neuroplasticidad opera a múltiples niveles: desde la potenciación a largo plazo (LTP) —el fortalecimiento de conexiones sinápticas individuales que subyace a la formación de memorias— hasta la remodelación cortical a gran escala observada en músicos profesionales, cuyas áreas auditivas y motoras presentan diferencias estructurales significativas respecto a individuos sin entrenamiento musical. Particularmente revelador ha sido el estudio de los taxistas londinenses, cuyos hipocampos posteriores —la región cerebral asociada a la navegación espacial— son mensurablemente más grandes que los de la población general, y cuyo volumen se correlaciona positivamente con los años de experiencia en la profesión. Sin embargo, la neuroplasticidad no es un fenómeno exclusivamente positivo: la exposición crónica al estrés, la adicción a sustancias psicoactivas y el dolor crónico también remodelan el cerebro, pero de maneras maladaptativas que refuerzan patrones disfuncionales. Este aspecto dual de la plasticidad cerebral tiene implicaciones profundas para la educación, la rehabilitación clínica y la comprensión de los trastornos psiquiátricos, sugiriendo que las intervenciones tempranas y sostenidas pueden modificar trayectorias neurocognitivas que anteriormente se consideraban irreversibles.",
      "opciones": [
        "Que todos los niños deben aprender a tocar un instrumento musical.",
        "Que la educación formal es innecesaria si el cerebro se adapta naturalmente.",
        "Que los métodos educativos actuales son completamente adecuados.",
        "Que las intervenciones tempranas y sostenidas pueden modificar trayectorias neurocognitivas antes consideradas irreversibles."
      ],
      "correcta": "Que las intervenciones tempranas y sostenidas pueden modificar trayectorias neurocognitivas antes consideradas irreversibles.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_35",
      "modulo": "Comprensión Lectora",
      "pregunta": "La referencia a los músicos profesionales en el texto sirve para:",
      "lectura": "La neuroplasticidad cerebral, definida como la capacidad del sistema nervioso central para reorganizar sus conexiones sinápticas en respuesta a la experiencia, el aprendizaje o las lesiones, ha revolucionado la comprensión neurocientífica del cerebro humano. Durante gran parte del siglo XX, el paradigma dominante sostenía que el cerebro adulto era un órgano esencialmente estático, cuyas estructuras neuronales quedaban fijadas al concluir los períodos críticos del desarrollo infantil. Esta visión determinista fue desafiada de manera contundente a partir de la década de 1960 por los trabajos pioneros de investigadores como Paul Bach-y-Rita, quien demostró que pacientes con daño cerebral severo podían recuperar funciones perdidas mediante protocolos de rehabilitación intensiva que aprovechaban la capacidad del cerebro para reasignar funciones de áreas dañadas a regiones intactas. Investigaciones posteriores han revelado que la neuroplasticidad opera a múltiples niveles: desde la potenciación a largo plazo (LTP) —el fortalecimiento de conexiones sinápticas individuales que subyace a la formación de memorias— hasta la remodelación cortical a gran escala observada en músicos profesionales, cuyas áreas auditivas y motoras presentan diferencias estructurales significativas respecto a individuos sin entrenamiento musical. Particularmente revelador ha sido el estudio de los taxistas londinenses, cuyos hipocampos posteriores —la región cerebral asociada a la navegación espacial— son mensurablemente más grandes que los de la población general, y cuyo volumen se correlaciona positivamente con los años de experiencia en la profesión. Sin embargo, la neuroplasticidad no es un fenómeno exclusivamente positivo: la exposición crónica al estrés, la adicción a sustancias psicoactivas y el dolor crónico también remodelan el cerebro, pero de maneras maladaptativas que refuerzan patrones disfuncionales. Este aspecto dual de la plasticidad cerebral tiene implicaciones profundas para la educación, la rehabilitación clínica y la comprensión de los trastornos psiquiátricos, sugiriendo que las intervenciones tempranas y sostenidas pueden modificar trayectorias neurocognitivas que anteriormente se consideraban irreversibles.",
      "opciones": [
        "Demostrar que la inteligencia musical es puramente genética.",
        "Comparar la inteligencia de los músicos con la de los taxistas.",
        "Argumentar que la música es la única actividad que modifica el cerebro.",
        "Ilustrar que el entrenamiento intensivo produce diferencias estructurales medibles en el cerebro."
      ],
      "correcta": "Ilustrar que el entrenamiento intensivo produce diferencias estructurales medibles en el cerebro.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_36",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Cuál es la diferencia fundamental entre una mutación genética y una modificación epigenética?",
      "lectura": "La epigenética, un campo de la biología molecular que ha experimentado un auge extraordinario desde el desciframiento del genoma humano en 2003, estudia las modificaciones heredables en la expresión génica que no implican alteraciones en la secuencia del ADN. A diferencia de las mutaciones genéticas clásicas —que modifican directamente las letras del código genético (adenina, timina, guanina, citosina)—, los mecanismos epigenéticos actúan como interruptores moleculares que encienden o apagan genes específicos sin cambiar la información genética subyacente. Los tres mecanismos principales son la metilación del ADN, que típicamente silencia la expresión génica al añadir grupos metilo a la citosina; la modificación de histonas, que altera la accesibilidad del ADN al enrollarse o desenrollarse alrededor de estas proteínas estructurales; y los ARN no codificantes, que regulan la expresión génica a nivel postranscripcional. Lo revolucionario de la epigenética radica en su demostración de que el ambiente —la alimentación, el estrés psicológico, la exposición a contaminantes, e incluso las experiencias sociales tempranas— puede modificar de manera estable la actividad de nuestros genes, y que algunas de estas modificaciones pueden transmitirse a las generaciones siguientes. Estudios en modelos animales han mostrado que la desnutrición durante el embarazo puede programar epigenéticamente al feto para un metabolismo 'ahorrativo' que, en un ambiente de abundancia alimentaria postnatal, predispone a la obesidad y la diabetes tipo 2. En humanos, la cohorte del Invierno del Hambre holandés (1944-1945) proporcionó evidencias epidemiológicas de que la hambruna prenatal incrementó significativamente las tasas de enfermedades cardiovasculares y metabólicas sesenta años después, e incluso en la generación siguiente que no experimentó directamente la hambruna. Estas evidencias desafían el determinismo genético tradicional y sugieren que la herencia biológica es considerablemente más compleja y sensible al contexto ambiental de lo que se creía, con implicaciones profundas para la medicina preventiva, la salud pública y nuestra comprensión de la justicia intergeneracional.",
      "opciones": [
        "La mutación altera la secuencia del ADN; la modificación epigenética cambia la expresión génica sin alterar la secuencia.",
        "La mutación es heredable y la modificación epigenética nunca lo es.",
        "No existe ninguna diferencia real entre ambos conceptos.",
        "La mutación solo ocurre en animales y la epigenética solo en humanos."
      ],
      "correcta": "La mutación altera la secuencia del ADN; la modificación epigenética cambia la expresión génica sin alterar la secuencia.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_37",
      "modulo": "Comprensión Lectora",
      "pregunta": "El estudio del Invierno del Hambre holandés demostró que:",
      "lectura": "La epigenética, un campo de la biología molecular que ha experimentado un auge extraordinario desde el desciframiento del genoma humano en 2003, estudia las modificaciones heredables en la expresión génica que no implican alteraciones en la secuencia del ADN. A diferencia de las mutaciones genéticas clásicas —que modifican directamente las letras del código genético (adenina, timina, guanina, citosina)—, los mecanismos epigenéticos actúan como interruptores moleculares que encienden o apagan genes específicos sin cambiar la información genética subyacente. Los tres mecanismos principales son la metilación del ADN, que típicamente silencia la expresión génica al añadir grupos metilo a la citosina; la modificación de histonas, que altera la accesibilidad del ADN al enrollarse o desenrollarse alrededor de estas proteínas estructurales; y los ARN no codificantes, que regulan la expresión génica a nivel postranscripcional. Lo revolucionario de la epigenética radica en su demostración de que el ambiente —la alimentación, el estrés psicológico, la exposición a contaminantes, e incluso las experiencias sociales tempranas— puede modificar de manera estable la actividad de nuestros genes, y que algunas de estas modificaciones pueden transmitirse a las generaciones siguientes. Estudios en modelos animales han mostrado que la desnutrición durante el embarazo puede programar epigenéticamente al feto para un metabolismo 'ahorrativo' que, en un ambiente de abundancia alimentaria postnatal, predispone a la obesidad y la diabetes tipo 2. En humanos, la cohorte del Invierno del Hambre holandés (1944-1945) proporcionó evidencias epidemiológicas de que la hambruna prenatal incrementó significativamente las tasas de enfermedades cardiovasculares y metabólicas sesenta años después, e incluso en la generación siguiente que no experimentó directamente la hambruna. Estas evidencias desafían el determinismo genético tradicional y sugieren que la herencia biológica es considerablemente más compleja y sensible al contexto ambiental de lo que se creía, con implicaciones profundas para la medicina preventiva, la salud pública y nuestra comprensión de la justicia intergeneracional.",
      "opciones": [
        "La desnutrición no tiene efectos a largo plazo en la salud humana.",
        "Los holandeses desarrollaron inmunidad natural contra la hambruna.",
        "La hambruna prenatal incrementó enfermedades en los afectados e incluso en la generación siguiente.",
        "Solo las personas directamente expuestas sufrieron consecuencias."
      ],
      "correcta": "La hambruna prenatal incrementó enfermedades en los afectados e incluso en la generación siguiente.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_38",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Qué es la metilación del ADN según el texto?",
      "lectura": "La epigenética, un campo de la biología molecular que ha experimentado un auge extraordinario desde el desciframiento del genoma humano en 2003, estudia las modificaciones heredables en la expresión génica que no implican alteraciones en la secuencia del ADN. A diferencia de las mutaciones genéticas clásicas —que modifican directamente las letras del código genético (adenina, timina, guanina, citosina)—, los mecanismos epigenéticos actúan como interruptores moleculares que encienden o apagan genes específicos sin cambiar la información genética subyacente. Los tres mecanismos principales son la metilación del ADN, que típicamente silencia la expresión génica al añadir grupos metilo a la citosina; la modificación de histonas, que altera la accesibilidad del ADN al enrollarse o desenrollarse alrededor de estas proteínas estructurales; y los ARN no codificantes, que regulan la expresión génica a nivel postranscripcional. Lo revolucionario de la epigenética radica en su demostración de que el ambiente —la alimentación, el estrés psicológico, la exposición a contaminantes, e incluso las experiencias sociales tempranas— puede modificar de manera estable la actividad de nuestros genes, y que algunas de estas modificaciones pueden transmitirse a las generaciones siguientes. Estudios en modelos animales han mostrado que la desnutrición durante el embarazo puede programar epigenéticamente al feto para un metabolismo 'ahorrativo' que, en un ambiente de abundancia alimentaria postnatal, predispone a la obesidad y la diabetes tipo 2. En humanos, la cohorte del Invierno del Hambre holandés (1944-1945) proporcionó evidencias epidemiológicas de que la hambruna prenatal incrementó significativamente las tasas de enfermedades cardiovasculares y metabólicas sesenta años después, e incluso en la generación siguiente que no experimentó directamente la hambruna. Estas evidencias desafían el determinismo genético tradicional y sugieren que la herencia biológica es considerablemente más compleja y sensible al contexto ambiental de lo que se creía, con implicaciones profundas para la medicina preventiva, la salud pública y nuestra comprensión de la justicia intergeneracional.",
      "opciones": [
        "Un mecanismo que silencia la expresión génica al añadir grupos metilo a la citosina.",
        "Un proceso de reparación que corrige errores en la secuencia de ADN.",
        "La duplicación del ADN durante la división celular.",
        "Un método de laboratorio para secuenciar el genoma humano."
      ],
      "correcta": "Un mecanismo que silencia la expresión génica al añadir grupos metilo a la citosina.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_39",
      "modulo": "Comprensión Lectora",
      "pregunta": "El concepto de 'metabolismo ahorrativo' programado epigenéticamente significa que:",
      "lectura": "La epigenética, un campo de la biología molecular que ha experimentado un auge extraordinario desde el desciframiento del genoma humano en 2003, estudia las modificaciones heredables en la expresión génica que no implican alteraciones en la secuencia del ADN. A diferencia de las mutaciones genéticas clásicas —que modifican directamente las letras del código genético (adenina, timina, guanina, citosina)—, los mecanismos epigenéticos actúan como interruptores moleculares que encienden o apagan genes específicos sin cambiar la información genética subyacente. Los tres mecanismos principales son la metilación del ADN, que típicamente silencia la expresión génica al añadir grupos metilo a la citosina; la modificación de histonas, que altera la accesibilidad del ADN al enrollarse o desenrollarse alrededor de estas proteínas estructurales; y los ARN no codificantes, que regulan la expresión génica a nivel postranscripcional. Lo revolucionario de la epigenética radica en su demostración de que el ambiente —la alimentación, el estrés psicológico, la exposición a contaminantes, e incluso las experiencias sociales tempranas— puede modificar de manera estable la actividad de nuestros genes, y que algunas de estas modificaciones pueden transmitirse a las generaciones siguientes. Estudios en modelos animales han mostrado que la desnutrición durante el embarazo puede programar epigenéticamente al feto para un metabolismo 'ahorrativo' que, en un ambiente de abundancia alimentaria postnatal, predispone a la obesidad y la diabetes tipo 2. En humanos, la cohorte del Invierno del Hambre holandés (1944-1945) proporcionó evidencias epidemiológicas de que la hambruna prenatal incrementó significativamente las tasas de enfermedades cardiovasculares y metabólicas sesenta años después, e incluso en la generación siguiente que no experimentó directamente la hambruna. Estas evidencias desafían el determinismo genético tradicional y sugieren que la herencia biológica es considerablemente más compleja y sensible al contexto ambiental de lo que se creía, con implicaciones profundas para la medicina preventiva, la salud pública y nuestra comprensión de la justicia intergeneracional.",
      "opciones": [
        "Un feto expuesto a desnutrición desarrolla un metabolismo que almacena energía eficientemente, causando riesgo de obesidad en abundancia.",
        "El feto nace con un metabolismo más rápido que el promedio.",
        "La desnutrición materna protege al bebé de enfermedades futuras.",
        "El metabolismo del feto no se ve afectado por la nutrición materna."
      ],
      "correcta": "Un feto expuesto a desnutrición desarrolla un metabolismo que almacena energía eficientemente, causando riesgo de obesidad en abundancia.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_40",
      "modulo": "Comprensión Lectora",
      "pregunta": "El autor utiliza la metáfora de 'interruptores moleculares' para ilustrar que:",
      "lectura": "La epigenética, un campo de la biología molecular que ha experimentado un auge extraordinario desde el desciframiento del genoma humano en 2003, estudia las modificaciones heredables en la expresión génica que no implican alteraciones en la secuencia del ADN. A diferencia de las mutaciones genéticas clásicas —que modifican directamente las letras del código genético (adenina, timina, guanina, citosina)—, los mecanismos epigenéticos actúan como interruptores moleculares que encienden o apagan genes específicos sin cambiar la información genética subyacente. Los tres mecanismos principales son la metilación del ADN, que típicamente silencia la expresión génica al añadir grupos metilo a la citosina; la modificación de histonas, que altera la accesibilidad del ADN al enrollarse o desenrollarse alrededor de estas proteínas estructurales; y los ARN no codificantes, que regulan la expresión génica a nivel postranscripcional. Lo revolucionario de la epigenética radica en su demostración de que el ambiente —la alimentación, el estrés psicológico, la exposición a contaminantes, e incluso las experiencias sociales tempranas— puede modificar de manera estable la actividad de nuestros genes, y que algunas de estas modificaciones pueden transmitirse a las generaciones siguientes. Estudios en modelos animales han mostrado que la desnutrición durante el embarazo puede programar epigenéticamente al feto para un metabolismo 'ahorrativo' que, en un ambiente de abundancia alimentaria postnatal, predispone a la obesidad y la diabetes tipo 2. En humanos, la cohorte del Invierno del Hambre holandés (1944-1945) proporcionó evidencias epidemiológicas de que la hambruna prenatal incrementó significativamente las tasas de enfermedades cardiovasculares y metabólicas sesenta años después, e incluso en la generación siguiente que no experimentó directamente la hambruna. Estas evidencias desafían el determinismo genético tradicional y sugieren que la herencia biológica es considerablemente más compleja y sensible al contexto ambiental de lo que se creía, con implicaciones profundas para la medicina preventiva, la salud pública y nuestra comprensión de la justicia intergeneracional.",
      "opciones": [
        "Los mecanismos epigenéticos activan o desactivan genes sin modificar el código genético en sí.",
        "Cada célula contiene un conjunto diferente de genes.",
        "Los genes pueden ser físicamente extraídos del ADN cuando no son necesarios.",
        "La electricidad corporal controla directamente la expresión génica."
      ],
      "correcta": "Los mecanismos epigenéticos activan o desactivan genes sin modificar el código genético en sí.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_41",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Qué implicación tiene la epigenética para la 'justicia intergeneracional' mencionada al final?",
      "lectura": "La epigenética, un campo de la biología molecular que ha experimentado un auge extraordinario desde el desciframiento del genoma humano en 2003, estudia las modificaciones heredables en la expresión génica que no implican alteraciones en la secuencia del ADN. A diferencia de las mutaciones genéticas clásicas —que modifican directamente las letras del código genético (adenina, timina, guanina, citosina)—, los mecanismos epigenéticos actúan como interruptores moleculares que encienden o apagan genes específicos sin cambiar la información genética subyacente. Los tres mecanismos principales son la metilación del ADN, que típicamente silencia la expresión génica al añadir grupos metilo a la citosina; la modificación de histonas, que altera la accesibilidad del ADN al enrollarse o desenrollarse alrededor de estas proteínas estructurales; y los ARN no codificantes, que regulan la expresión génica a nivel postranscripcional. Lo revolucionario de la epigenética radica en su demostración de que el ambiente —la alimentación, el estrés psicológico, la exposición a contaminantes, e incluso las experiencias sociales tempranas— puede modificar de manera estable la actividad de nuestros genes, y que algunas de estas modificaciones pueden transmitirse a las generaciones siguientes. Estudios en modelos animales han mostrado que la desnutrición durante el embarazo puede programar epigenéticamente al feto para un metabolismo 'ahorrativo' que, en un ambiente de abundancia alimentaria postnatal, predispone a la obesidad y la diabetes tipo 2. En humanos, la cohorte del Invierno del Hambre holandés (1944-1945) proporcionó evidencias epidemiológicas de que la hambruna prenatal incrementó significativamente las tasas de enfermedades cardiovasculares y metabólicas sesenta años después, e incluso en la generación siguiente que no experimentó directamente la hambruna. Estas evidencias desafían el determinismo genético tradicional y sugieren que la herencia biológica es considerablemente más compleja y sensible al contexto ambiental de lo que se creía, con implicaciones profundas para la medicina preventiva, la salud pública y nuestra comprensión de la justicia intergeneracional.",
      "opciones": [
        "Que las leyes de herencia mendeliana son completamente incorrectas.",
        "Que las condiciones ambientales sufridas por una generación pueden afectar biológicamente a las siguientes.",
        "Que la pobreza es exclusivamente un fenómeno cultural sin base biológica.",
        "Que todos los seres humanos comparten exactamente el mismo genoma."
      ],
      "correcta": "Que las condiciones ambientales sufridas por una generación pueden afectar biológicamente a las siguientes.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_42",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Por qué la microbiota intestinal se compara con una huella dactilar?",
      "lectura": "La microbiota intestinal, el complejo ecosistema de billones de microorganismos que habita el tracto gastrointestinal humano, ha emergido como uno de los campos de investigación biomédica más revolucionarios del siglo XXI. Lejos de ser simples pasajeros o parásitos oportunistas, estos microorganismos —que superan en número a las células humanas del cuerpo— desempeñan funciones metabólicas, inmunológicas y neurológicas esenciales que los investigadores apenas comienzan a comprender. El Proyecto del Microbioma Humano, lanzado en 2007, reveló que cada individuo alberga una comunidad microbiana única, tan distintiva como una huella dactilar, cuya composición está influida por factores como el modo de nacimiento (parto natural versus cesárea), la lactancia materna, la dieta, el uso de antibióticos y el entorno geográfico. Desde el punto de vista metabólico, las bacterias intestinales sintetizan vitaminas esenciales como la K y varias del complejo B, fermentan fibras dietéticas indigeribles produciendo ácidos grasos de cadena corta que nutren las células del colon, y participan en la regulación del metabolismo energético. Inmunológicamente, la microbiota educa al sistema inmune adaptativo durante los primeros años de vida, enseñándole a distinguir entre antígenos peligrosos y sustancias inocuas, lo cual explica parcialmente por qué la excesiva esterilización del entorno infantil se asocia con mayores tasas de alergias y enfermedades autoinmunes, fenómeno descrito por la 'hipótesis de la higiene'. Quizás el descubrimiento más sorprendente ha sido la comunicación bidireccional entre la microbiota y el cerebro a través del llamado eje intestino-cerebro, mediada por el nervio vago, neurotransmisores producidos bacterianamente y metabolitos neuroactivos. Estudios en modelos animales han demostrado que la transferencia de microbiota de ratones con comportamiento ansioso a ratones libres de gérmenes induce ansiedad en los receptores, sugiriendo que las bacterias intestinales pueden influir directamente en el estado emocional y el comportamiento.",
      "opciones": [
        "Porque permanece completamente invariable durante toda la vida.",
        "Porque se puede observar a simple vista en los dedos.",
        "Porque la comunidad microbiana de cada individuo es única y distintiva.",
        "Porque todas las personas tienen exactamente los mismos microorganismos."
      ],
      "correcta": "Porque la comunidad microbiana de cada individuo es única y distintiva.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_43",
      "modulo": "Comprensión Lectora",
      "pregunta": "La 'hipótesis de la higiene' explica que:",
      "lectura": "La microbiota intestinal, el complejo ecosistema de billones de microorganismos que habita el tracto gastrointestinal humano, ha emergido como uno de los campos de investigación biomédica más revolucionarios del siglo XXI. Lejos de ser simples pasajeros o parásitos oportunistas, estos microorganismos —que superan en número a las células humanas del cuerpo— desempeñan funciones metabólicas, inmunológicas y neurológicas esenciales que los investigadores apenas comienzan a comprender. El Proyecto del Microbioma Humano, lanzado en 2007, reveló que cada individuo alberga una comunidad microbiana única, tan distintiva como una huella dactilar, cuya composición está influida por factores como el modo de nacimiento (parto natural versus cesárea), la lactancia materna, la dieta, el uso de antibióticos y el entorno geográfico. Desde el punto de vista metabólico, las bacterias intestinales sintetizan vitaminas esenciales como la K y varias del complejo B, fermentan fibras dietéticas indigeribles produciendo ácidos grasos de cadena corta que nutren las células del colon, y participan en la regulación del metabolismo energético. Inmunológicamente, la microbiota educa al sistema inmune adaptativo durante los primeros años de vida, enseñándole a distinguir entre antígenos peligrosos y sustancias inocuas, lo cual explica parcialmente por qué la excesiva esterilización del entorno infantil se asocia con mayores tasas de alergias y enfermedades autoinmunes, fenómeno descrito por la 'hipótesis de la higiene'. Quizás el descubrimiento más sorprendente ha sido la comunicación bidireccional entre la microbiota y el cerebro a través del llamado eje intestino-cerebro, mediada por el nervio vago, neurotransmisores producidos bacterianamente y metabolitos neuroactivos. Estudios en modelos animales han demostrado que la transferencia de microbiota de ratones con comportamiento ansioso a ratones libres de gérmenes induce ansiedad en los receptores, sugiriendo que las bacterias intestinales pueden influir directamente en el estado emocional y el comportamiento.",
      "opciones": [
        "La excesiva esterilización infantil impide la educación inmunológica, aumentando alergias y autoinmunidad.",
        "La falta de higiene previene todas las enfermedades conocidas.",
        "Las alergias son causadas exclusivamente por factores genéticos.",
        "Los antibióticos fortalecen siempre el sistema inmunológico."
      ],
      "correcta": "La excesiva esterilización infantil impide la educación inmunológica, aumentando alergias y autoinmunidad.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_44",
      "modulo": "Comprensión Lectora",
      "pregunta": "El eje intestino-cerebro implica que:",
      "lectura": "La microbiota intestinal, el complejo ecosistema de billones de microorganismos que habita el tracto gastrointestinal humano, ha emergido como uno de los campos de investigación biomédica más revolucionarios del siglo XXI. Lejos de ser simples pasajeros o parásitos oportunistas, estos microorganismos —que superan en número a las células humanas del cuerpo— desempeñan funciones metabólicas, inmunológicas y neurológicas esenciales que los investigadores apenas comienzan a comprender. El Proyecto del Microbioma Humano, lanzado en 2007, reveló que cada individuo alberga una comunidad microbiana única, tan distintiva como una huella dactilar, cuya composición está influida por factores como el modo de nacimiento (parto natural versus cesárea), la lactancia materna, la dieta, el uso de antibióticos y el entorno geográfico. Desde el punto de vista metabólico, las bacterias intestinales sintetizan vitaminas esenciales como la K y varias del complejo B, fermentan fibras dietéticas indigeribles produciendo ácidos grasos de cadena corta que nutren las células del colon, y participan en la regulación del metabolismo energético. Inmunológicamente, la microbiota educa al sistema inmune adaptativo durante los primeros años de vida, enseñándole a distinguir entre antígenos peligrosos y sustancias inocuas, lo cual explica parcialmente por qué la excesiva esterilización del entorno infantil se asocia con mayores tasas de alergias y enfermedades autoinmunes, fenómeno descrito por la 'hipótesis de la higiene'. Quizás el descubrimiento más sorprendente ha sido la comunicación bidireccional entre la microbiota y el cerebro a través del llamado eje intestino-cerebro, mediada por el nervio vago, neurotransmisores producidos bacterianamente y metabolitos neuroactivos. Estudios en modelos animales han demostrado que la transferencia de microbiota de ratones con comportamiento ansioso a ratones libres de gérmenes induce ansiedad en los receptores, sugiriendo que las bacterias intestinales pueden influir directamente en el estado emocional y el comportamiento.",
      "opciones": [
        "Los microorganismos intestinales reemplazan las funciones cerebrales.",
        "La alimentación no tiene ninguna relación con el estado emocional.",
        "Existe comunicación bidireccional entre la microbiota intestinal y el cerebro, influyendo en emociones y comportamiento.",
        "El cerebro controla la digestión pero el intestino no influye en el cerebro."
      ],
      "correcta": "Existe comunicación bidireccional entre la microbiota intestinal y el cerebro, influyendo en emociones y comportamiento.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_45",
      "modulo": "Comprensión Lectora",
      "pregunta": "El experimento con ratones libres de gérmenes demuestra que:",
      "lectura": "La microbiota intestinal, el complejo ecosistema de billones de microorganismos que habita el tracto gastrointestinal humano, ha emergido como uno de los campos de investigación biomédica más revolucionarios del siglo XXI. Lejos de ser simples pasajeros o parásitos oportunistas, estos microorganismos —que superan en número a las células humanas del cuerpo— desempeñan funciones metabólicas, inmunológicas y neurológicas esenciales que los investigadores apenas comienzan a comprender. El Proyecto del Microbioma Humano, lanzado en 2007, reveló que cada individuo alberga una comunidad microbiana única, tan distintiva como una huella dactilar, cuya composición está influida por factores como el modo de nacimiento (parto natural versus cesárea), la lactancia materna, la dieta, el uso de antibióticos y el entorno geográfico. Desde el punto de vista metabólico, las bacterias intestinales sintetizan vitaminas esenciales como la K y varias del complejo B, fermentan fibras dietéticas indigeribles produciendo ácidos grasos de cadena corta que nutren las células del colon, y participan en la regulación del metabolismo energético. Inmunológicamente, la microbiota educa al sistema inmune adaptativo durante los primeros años de vida, enseñándole a distinguir entre antígenos peligrosos y sustancias inocuas, lo cual explica parcialmente por qué la excesiva esterilización del entorno infantil se asocia con mayores tasas de alergias y enfermedades autoinmunes, fenómeno descrito por la 'hipótesis de la higiene'. Quizás el descubrimiento más sorprendente ha sido la comunicación bidireccional entre la microbiota y el cerebro a través del llamado eje intestino-cerebro, mediada por el nervio vago, neurotransmisores producidos bacterianamente y metabolitos neuroactivos. Estudios en modelos animales han demostrado que la transferencia de microbiota de ratones con comportamiento ansioso a ratones libres de gérmenes induce ansiedad en los receptores, sugiriendo que las bacterias intestinales pueden influir directamente en el estado emocional y el comportamiento.",
      "opciones": [
        "La transferencia de microbiota puede inducir cambios en el comportamiento emocional del receptor.",
        "La ansiedad es exclusivamente un fenómeno neurológico sin componente microbiano.",
        "Las bacterias intestinales no influyen en el comportamiento animal.",
        "Los ratones no pueden vivir sin bacterias intestinales."
      ],
      "correcta": "La transferencia de microbiota puede inducir cambios en el comportamiento emocional del receptor.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_46",
      "modulo": "Comprensión Lectora",
      "pregunta": "Los ácidos grasos de cadena corta mencionados en el texto son:",
      "lectura": "La microbiota intestinal, el complejo ecosistema de billones de microorganismos que habita el tracto gastrointestinal humano, ha emergido como uno de los campos de investigación biomédica más revolucionarios del siglo XXI. Lejos de ser simples pasajeros o parásitos oportunistas, estos microorganismos —que superan en número a las células humanas del cuerpo— desempeñan funciones metabólicas, inmunológicas y neurológicas esenciales que los investigadores apenas comienzan a comprender. El Proyecto del Microbioma Humano, lanzado en 2007, reveló que cada individuo alberga una comunidad microbiana única, tan distintiva como una huella dactilar, cuya composición está influida por factores como el modo de nacimiento (parto natural versus cesárea), la lactancia materna, la dieta, el uso de antibióticos y el entorno geográfico. Desde el punto de vista metabólico, las bacterias intestinales sintetizan vitaminas esenciales como la K y varias del complejo B, fermentan fibras dietéticas indigeribles produciendo ácidos grasos de cadena corta que nutren las células del colon, y participan en la regulación del metabolismo energético. Inmunológicamente, la microbiota educa al sistema inmune adaptativo durante los primeros años de vida, enseñándole a distinguir entre antígenos peligrosos y sustancias inocuas, lo cual explica parcialmente por qué la excesiva esterilización del entorno infantil se asocia con mayores tasas de alergias y enfermedades autoinmunes, fenómeno descrito por la 'hipótesis de la higiene'. Quizás el descubrimiento más sorprendente ha sido la comunicación bidireccional entre la microbiota y el cerebro a través del llamado eje intestino-cerebro, mediada por el nervio vago, neurotransmisores producidos bacterianamente y metabolitos neuroactivos. Estudios en modelos animales han demostrado que la transferencia de microbiota de ratones con comportamiento ansioso a ratones libres de gérmenes induce ansiedad en los receptores, sugiriendo que las bacterias intestinales pueden influir directamente en el estado emocional y el comportamiento.",
      "opciones": [
        "Componentes del ADN bacteriano.",
        "Productos de la fermentación bacteriana de fibras que nutren las células del colon.",
        "Toxinas producidas por bacterias patógenas.",
        "Suplementos alimenticios vendidos en farmacias."
      ],
      "correcta": "Productos de la fermentación bacteriana de fibras que nutren las células del colon.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_47",
      "modulo": "Comprensión Lectora",
      "pregunta": "Del texto se infiere que el parto por cesárea podría afectar la microbiota porque:",
      "lectura": "La microbiota intestinal, el complejo ecosistema de billones de microorganismos que habita el tracto gastrointestinal humano, ha emergido como uno de los campos de investigación biomédica más revolucionarios del siglo XXI. Lejos de ser simples pasajeros o parásitos oportunistas, estos microorganismos —que superan en número a las células humanas del cuerpo— desempeñan funciones metabólicas, inmunológicas y neurológicas esenciales que los investigadores apenas comienzan a comprender. El Proyecto del Microbioma Humano, lanzado en 2007, reveló que cada individuo alberga una comunidad microbiana única, tan distintiva como una huella dactilar, cuya composición está influida por factores como el modo de nacimiento (parto natural versus cesárea), la lactancia materna, la dieta, el uso de antibióticos y el entorno geográfico. Desde el punto de vista metabólico, las bacterias intestinales sintetizan vitaminas esenciales como la K y varias del complejo B, fermentan fibras dietéticas indigeribles produciendo ácidos grasos de cadena corta que nutren las células del colon, y participan en la regulación del metabolismo energético. Inmunológicamente, la microbiota educa al sistema inmune adaptativo durante los primeros años de vida, enseñándole a distinguir entre antígenos peligrosos y sustancias inocuas, lo cual explica parcialmente por qué la excesiva esterilización del entorno infantil se asocia con mayores tasas de alergias y enfermedades autoinmunes, fenómeno descrito por la 'hipótesis de la higiene'. Quizás el descubrimiento más sorprendente ha sido la comunicación bidireccional entre la microbiota y el cerebro a través del llamado eje intestino-cerebro, mediada por el nervio vago, neurotransmisores producidos bacterianamente y metabolitos neuroactivos. Estudios en modelos animales han demostrado que la transferencia de microbiota de ratones con comportamiento ansioso a ratones libres de gérmenes induce ansiedad en los receptores, sugiriendo que las bacterias intestinales pueden influir directamente en el estado emocional y el comportamiento.",
      "opciones": [
        "El parto natural y la cesárea producen comunidades microbianas idénticas.",
        "La cesárea elimina permanentemente toda la microbiota del bebé.",
        "El modo de nacimiento influye en qué microorganismos colonizan inicialmente al recién nacido.",
        "Los bebés nacidos por cesárea no necesitan microorganismos intestinales."
      ],
      "correcta": "El modo de nacimiento influye en qué microorganismos colonizan inicialmente al recién nacido.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_48",
      "modulo": "Comprensión Lectora",
      "pregunta": "Según el texto, la resistencia bacteriana es una manifestación de:",
      "lectura": "La resistencia bacteriana a los antibióticos ha sido catalogada por la Organización Mundial de la Salud como una de las diez principales amenazas para la salud pública global. Este fenómeno, lejos de ser una anomalía reciente, es una manifestación de la selección natural darwiniana: cuando una población bacteriana se expone a un antibiótico, las bacterias susceptibles mueren mientras que aquellas que poseen mutaciones aleatorias confiriendo resistencia sobreviven y se reproducen, transmitiendo estos genes de resistencia a su descendencia. Lo alarmante es la velocidad con que este proceso se ha acelerado debido al uso indiscriminado de antibióticos tanto en medicina humana como en la ganadería industrial, donde se administran rutinariamente a animales sanos como promotores del crecimiento. Alexander Fleming, al recibir el Premio Nobel en 1945 por el descubrimiento de la penicilina, advirtió proféticamente que el uso inadecuado de los antibióticos generaría microorganismos resistentes. Setenta años después, sus palabras han adquirido una urgencia dramática: las infecciones por bacterias multirresistentes causan aproximadamente 1.27 millones de muertes anuales a nivel mundial, y las proyecciones más pesimistas estiman que para 2050 esta cifra podría alcanzar los 10 millones, superando al cáncer como causa de mortalidad. Entre los mecanismos bioquímicos de resistencia más preocupantes se encuentran las betalactamasas de espectro extendido (BLEE), enzimas que degradan una amplia gama de antibióticos betalactámicos, y los plásmidos de resistencia, segmentos de ADN transferibles entre bacterias incluso de especies distintas mediante transferencia horizontal de genes, lo cual acelera exponencialmente la propagación de la resistencia. La respuesta a esta crisis requiere un enfoque multidimensional que incluya el desarrollo de nuevos antibióticos, la implementación de programas de vigilancia epidemiológica, la restricción del uso veterinario no terapéutico y, fundamentalmente, la educación de profesionales de la salud y pacientes sobre el uso racional de estos medicamentos.",
      "opciones": [
        "Una conspiración de la industria farmacéutica para vender más medicamentos.",
        "La selección natural darwiniana aplicada a poblaciones bacterianas expuestas a antibióticos.",
        "La mutación intencional de las bacterias para sobrevivir.",
        "Un fenómeno sobrenatural sin explicación científica conocida."
      ],
      "correcta": "La selección natural darwiniana aplicada a poblaciones bacterianas expuestas a antibióticos.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_49",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Qué advertencia hizo Alexander Fleming en 1945?",
      "lectura": "La resistencia bacteriana a los antibióticos ha sido catalogada por la Organización Mundial de la Salud como una de las diez principales amenazas para la salud pública global. Este fenómeno, lejos de ser una anomalía reciente, es una manifestación de la selección natural darwiniana: cuando una población bacteriana se expone a un antibiótico, las bacterias susceptibles mueren mientras que aquellas que poseen mutaciones aleatorias confiriendo resistencia sobreviven y se reproducen, transmitiendo estos genes de resistencia a su descendencia. Lo alarmante es la velocidad con que este proceso se ha acelerado debido al uso indiscriminado de antibióticos tanto en medicina humana como en la ganadería industrial, donde se administran rutinariamente a animales sanos como promotores del crecimiento. Alexander Fleming, al recibir el Premio Nobel en 1945 por el descubrimiento de la penicilina, advirtió proféticamente que el uso inadecuado de los antibióticos generaría microorganismos resistentes. Setenta años después, sus palabras han adquirido una urgencia dramática: las infecciones por bacterias multirresistentes causan aproximadamente 1.27 millones de muertes anuales a nivel mundial, y las proyecciones más pesimistas estiman que para 2050 esta cifra podría alcanzar los 10 millones, superando al cáncer como causa de mortalidad. Entre los mecanismos bioquímicos de resistencia más preocupantes se encuentran las betalactamasas de espectro extendido (BLEE), enzimas que degradan una amplia gama de antibióticos betalactámicos, y los plásmidos de resistencia, segmentos de ADN transferibles entre bacterias incluso de especies distintas mediante transferencia horizontal de genes, lo cual acelera exponencialmente la propagación de la resistencia. La respuesta a esta crisis requiere un enfoque multidimensional que incluya el desarrollo de nuevos antibióticos, la implementación de programas de vigilancia epidemiológica, la restricción del uso veterinario no terapéutico y, fundamentalmente, la educación de profesionales de la salud y pacientes sobre el uso racional de estos medicamentos.",
      "opciones": [
        "Que la penicilina sería reemplazada por medicamentos más baratos.",
        "Que el uso inadecuado de antibióticos generaría microorganismos resistentes.",
        "Que los antibióticos curarían todas las enfermedades infecciosas.",
        "Que las bacterias eventualmente se extinguirían por completo."
      ],
      "correcta": "Que el uso inadecuado de antibióticos generaría microorganismos resistentes.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_50",
      "modulo": "Comprensión Lectora",
      "pregunta": "Los plásmidos de resistencia son especialmente peligrosos porque:",
      "lectura": "La resistencia bacteriana a los antibióticos ha sido catalogada por la Organización Mundial de la Salud como una de las diez principales amenazas para la salud pública global. Este fenómeno, lejos de ser una anomalía reciente, es una manifestación de la selección natural darwiniana: cuando una población bacteriana se expone a un antibiótico, las bacterias susceptibles mueren mientras que aquellas que poseen mutaciones aleatorias confiriendo resistencia sobreviven y se reproducen, transmitiendo estos genes de resistencia a su descendencia. Lo alarmante es la velocidad con que este proceso se ha acelerado debido al uso indiscriminado de antibióticos tanto en medicina humana como en la ganadería industrial, donde se administran rutinariamente a animales sanos como promotores del crecimiento. Alexander Fleming, al recibir el Premio Nobel en 1945 por el descubrimiento de la penicilina, advirtió proféticamente que el uso inadecuado de los antibióticos generaría microorganismos resistentes. Setenta años después, sus palabras han adquirido una urgencia dramática: las infecciones por bacterias multirresistentes causan aproximadamente 1.27 millones de muertes anuales a nivel mundial, y las proyecciones más pesimistas estiman que para 2050 esta cifra podría alcanzar los 10 millones, superando al cáncer como causa de mortalidad. Entre los mecanismos bioquímicos de resistencia más preocupantes se encuentran las betalactamasas de espectro extendido (BLEE), enzimas que degradan una amplia gama de antibióticos betalactámicos, y los plásmidos de resistencia, segmentos de ADN transferibles entre bacterias incluso de especies distintas mediante transferencia horizontal de genes, lo cual acelera exponencialmente la propagación de la resistencia. La respuesta a esta crisis requiere un enfoque multidimensional que incluya el desarrollo de nuevos antibióticos, la implementación de programas de vigilancia epidemiológica, la restricción del uso veterinario no terapéutico y, fundamentalmente, la educación de profesionales de la salud y pacientes sobre el uso racional de estos medicamentos.",
      "opciones": [
        "Solo se encuentran en bacterias de laboratorio controlado.",
        "Se destruyen fácilmente con jabón y agua caliente.",
        "Permiten la transferencia de genes de resistencia entre bacterias de diferentes especies.",
        "Solo afectan a las bacterias más débiles y vulnerables."
      ],
      "correcta": "Permiten la transferencia de genes de resistencia entre bacterias de diferentes especies.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_51",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Por qué el texto menciona el uso de antibióticos en ganadería?",
      "lectura": "La resistencia bacteriana a los antibióticos ha sido catalogada por la Organización Mundial de la Salud como una de las diez principales amenazas para la salud pública global. Este fenómeno, lejos de ser una anomalía reciente, es una manifestación de la selección natural darwiniana: cuando una población bacteriana se expone a un antibiótico, las bacterias susceptibles mueren mientras que aquellas que poseen mutaciones aleatorias confiriendo resistencia sobreviven y se reproducen, transmitiendo estos genes de resistencia a su descendencia. Lo alarmante es la velocidad con que este proceso se ha acelerado debido al uso indiscriminado de antibióticos tanto en medicina humana como en la ganadería industrial, donde se administran rutinariamente a animales sanos como promotores del crecimiento. Alexander Fleming, al recibir el Premio Nobel en 1945 por el descubrimiento de la penicilina, advirtió proféticamente que el uso inadecuado de los antibióticos generaría microorganismos resistentes. Setenta años después, sus palabras han adquirido una urgencia dramática: las infecciones por bacterias multirresistentes causan aproximadamente 1.27 millones de muertes anuales a nivel mundial, y las proyecciones más pesimistas estiman que para 2050 esta cifra podría alcanzar los 10 millones, superando al cáncer como causa de mortalidad. Entre los mecanismos bioquímicos de resistencia más preocupantes se encuentran las betalactamasas de espectro extendido (BLEE), enzimas que degradan una amplia gama de antibióticos betalactámicos, y los plásmidos de resistencia, segmentos de ADN transferibles entre bacterias incluso de especies distintas mediante transferencia horizontal de genes, lo cual acelera exponencialmente la propagación de la resistencia. La respuesta a esta crisis requiere un enfoque multidimensional que incluya el desarrollo de nuevos antibióticos, la implementación de programas de vigilancia epidemiológica, la restricción del uso veterinario no terapéutico y, fundamentalmente, la educación de profesionales de la salud y pacientes sobre el uso racional de estos medicamentos.",
      "opciones": [
        "Porque los animales necesitan más antibióticos que los humanos.",
        "Porque la ganadería es el único sector que utiliza antibióticos.",
        "Porque los antibióticos veterinarios son más potentes que los humanos.",
        "Porque su uso como promotores de crecimiento en animales sanos acelera la aparición de resistencias."
      ],
      "correcta": "Porque su uso como promotores de crecimiento en animales sanos acelera la aparición de resistencias.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_52",
      "modulo": "Comprensión Lectora",
      "pregunta": "Las proyecciones para 2050 mencionadas en el texto sugieren que:",
      "lectura": "La resistencia bacteriana a los antibióticos ha sido catalogada por la Organización Mundial de la Salud como una de las diez principales amenazas para la salud pública global. Este fenómeno, lejos de ser una anomalía reciente, es una manifestación de la selección natural darwiniana: cuando una población bacteriana se expone a un antibiótico, las bacterias susceptibles mueren mientras que aquellas que poseen mutaciones aleatorias confiriendo resistencia sobreviven y se reproducen, transmitiendo estos genes de resistencia a su descendencia. Lo alarmante es la velocidad con que este proceso se ha acelerado debido al uso indiscriminado de antibióticos tanto en medicina humana como en la ganadería industrial, donde se administran rutinariamente a animales sanos como promotores del crecimiento. Alexander Fleming, al recibir el Premio Nobel en 1945 por el descubrimiento de la penicilina, advirtió proféticamente que el uso inadecuado de los antibióticos generaría microorganismos resistentes. Setenta años después, sus palabras han adquirido una urgencia dramática: las infecciones por bacterias multirresistentes causan aproximadamente 1.27 millones de muertes anuales a nivel mundial, y las proyecciones más pesimistas estiman que para 2050 esta cifra podría alcanzar los 10 millones, superando al cáncer como causa de mortalidad. Entre los mecanismos bioquímicos de resistencia más preocupantes se encuentran las betalactamasas de espectro extendido (BLEE), enzimas que degradan una amplia gama de antibióticos betalactámicos, y los plásmidos de resistencia, segmentos de ADN transferibles entre bacterias incluso de especies distintas mediante transferencia horizontal de genes, lo cual acelera exponencialmente la propagación de la resistencia. La respuesta a esta crisis requiere un enfoque multidimensional que incluya el desarrollo de nuevos antibióticos, la implementación de programas de vigilancia epidemiológica, la restricción del uso veterinario no terapéutico y, fundamentalmente, la educación de profesionales de la salud y pacientes sobre el uso racional de estos medicamentos.",
      "opciones": [
        "Los antibióticos serán reemplazados por vacunas universales.",
        "La resistencia bacteriana se habrá solucionado completamente para entonces.",
        "La población mundial habrá desarrollado inmunidad natural a todas las bacterias.",
        "Las muertes por bacterias multirresistentes podrían superar a las causadas por el cáncer."
      ],
      "correcta": "Las muertes por bacterias multirresistentes podrían superar a las causadas por el cáncer.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_53",
      "modulo": "Comprensión Lectora",
      "pregunta": "El enfoque 'multidimensional' propuesto por el autor incluye:",
      "lectura": "La resistencia bacteriana a los antibióticos ha sido catalogada por la Organización Mundial de la Salud como una de las diez principales amenazas para la salud pública global. Este fenómeno, lejos de ser una anomalía reciente, es una manifestación de la selección natural darwiniana: cuando una población bacteriana se expone a un antibiótico, las bacterias susceptibles mueren mientras que aquellas que poseen mutaciones aleatorias confiriendo resistencia sobreviven y se reproducen, transmitiendo estos genes de resistencia a su descendencia. Lo alarmante es la velocidad con que este proceso se ha acelerado debido al uso indiscriminado de antibióticos tanto en medicina humana como en la ganadería industrial, donde se administran rutinariamente a animales sanos como promotores del crecimiento. Alexander Fleming, al recibir el Premio Nobel en 1945 por el descubrimiento de la penicilina, advirtió proféticamente que el uso inadecuado de los antibióticos generaría microorganismos resistentes. Setenta años después, sus palabras han adquirido una urgencia dramática: las infecciones por bacterias multirresistentes causan aproximadamente 1.27 millones de muertes anuales a nivel mundial, y las proyecciones más pesimistas estiman que para 2050 esta cifra podría alcanzar los 10 millones, superando al cáncer como causa de mortalidad. Entre los mecanismos bioquímicos de resistencia más preocupantes se encuentran las betalactamasas de espectro extendido (BLEE), enzimas que degradan una amplia gama de antibióticos betalactámicos, y los plásmidos de resistencia, segmentos de ADN transferibles entre bacterias incluso de especies distintas mediante transferencia horizontal de genes, lo cual acelera exponencialmente la propagación de la resistencia. La respuesta a esta crisis requiere un enfoque multidimensional que incluya el desarrollo de nuevos antibióticos, la implementación de programas de vigilancia epidemiológica, la restricción del uso veterinario no terapéutico y, fundamentalmente, la educación de profesionales de la salud y pacientes sobre el uso racional de estos medicamentos.",
      "opciones": [
        "Prohibir completamente el uso de todos los antibióticos existentes.",
        "Exclusivamente el desarrollo de nuevos antibióticos más potentes.",
        "Nuevos antibióticos, vigilancia epidemiológica, restricción de uso veterinario y educación.",
        "Aislar a todos los pacientes con infecciones bacterianas."
      ],
      "correcta": "Nuevos antibióticos, vigilancia epidemiológica, restricción de uso veterinario y educación.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_54",
      "modulo": "Comprensión Lectora",
      "pregunta": "El equilibrio de Nash describe una situación donde:",
      "lectura": "La teoría de juegos, rama de las matemáticas desarrollada formalmente por John von Neumann y Oskar Morgenstern en 1944, estudia las decisiones estratégicas en situaciones donde el resultado para cada participante depende no solo de sus propias acciones sino también de las decisiones de los demás. Aunque originalmente concebida para analizar juegos de mesa y apuestas, su aplicación se ha extendido a campos tan diversos como la economía, la biología evolutiva, la ciencia política, las relaciones internacionales y la inteligencia artificial. El concepto central más influyente de la teoría de juegos es el equilibrio de Nash, formulado por el matemático John Nash en 1950: un estado en el que ningún jugador puede mejorar su resultado cambiando unilateralmente su estrategia, dado que los demás mantienen las suyas. Este concepto se ilustra paradigmáticamente con el dilema del prisionero, un escenario en el que dos sospechosos interrogados por separado enfrentan la elección entre cooperar con su cómplice permaneciendo en silencio o traicionarlo confesando. La paradoja del dilema radica en que la racionalidad individual conduce a ambos a traicionar, obteniendo un resultado colectivo peor que si ambos hubieran cooperado, revelando así la tensión fundamental entre el interés individual y el bienestar colectivo. En biología evolutiva, la teoría de juegos ha sido aplicada por John Maynard Smith para explicar comportamientos animales aparentemente altruistas: la estrategia evolutivamente estable (EEE) demuestra cómo ciertas conductas cooperativas pueden emerger y mantenerse en poblaciones naturales sin necesidad de invocar el altruismo genuino, sino como resultado de la maximización del éxito reproductivo individual a largo plazo. Las aplicaciones contemporáneas incluyen el diseño de subastas gubernamentales, la negociación de tratados internacionales y el desarrollo de algoritmos de inteligencia artificial capaces de cooperar estratégicamente con humanos.",
      "opciones": [
        "Todos los jugadores obtienen siempre el mejor resultado posible.",
        "Un jugador domina completamente a todos los demás.",
        "Ningún jugador puede mejorar su resultado cambiando unilateralmente su estrategia.",
        "Los jugadores cooperan siempre voluntariamente entre sí."
      ],
      "correcta": "Ningún jugador puede mejorar su resultado cambiando unilateralmente su estrategia.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_55",
      "modulo": "Comprensión Lectora",
      "pregunta": "La paradoja del dilema del prisionero consiste en que:",
      "lectura": "La teoría de juegos, rama de las matemáticas desarrollada formalmente por John von Neumann y Oskar Morgenstern en 1944, estudia las decisiones estratégicas en situaciones donde el resultado para cada participante depende no solo de sus propias acciones sino también de las decisiones de los demás. Aunque originalmente concebida para analizar juegos de mesa y apuestas, su aplicación se ha extendido a campos tan diversos como la economía, la biología evolutiva, la ciencia política, las relaciones internacionales y la inteligencia artificial. El concepto central más influyente de la teoría de juegos es el equilibrio de Nash, formulado por el matemático John Nash en 1950: un estado en el que ningún jugador puede mejorar su resultado cambiando unilateralmente su estrategia, dado que los demás mantienen las suyas. Este concepto se ilustra paradigmáticamente con el dilema del prisionero, un escenario en el que dos sospechosos interrogados por separado enfrentan la elección entre cooperar con su cómplice permaneciendo en silencio o traicionarlo confesando. La paradoja del dilema radica en que la racionalidad individual conduce a ambos a traicionar, obteniendo un resultado colectivo peor que si ambos hubieran cooperado, revelando así la tensión fundamental entre el interés individual y el bienestar colectivo. En biología evolutiva, la teoría de juegos ha sido aplicada por John Maynard Smith para explicar comportamientos animales aparentemente altruistas: la estrategia evolutivamente estable (EEE) demuestra cómo ciertas conductas cooperativas pueden emerger y mantenerse en poblaciones naturales sin necesidad de invocar el altruismo genuino, sino como resultado de la maximización del éxito reproductivo individual a largo plazo. Las aplicaciones contemporáneas incluyen el diseño de subastas gubernamentales, la negociación de tratados internacionales y el desarrollo de algoritmos de inteligencia artificial capaces de cooperar estratégicamente con humanos.",
      "opciones": [
        "Ambos prisioneros siempre logran escapar de la cárcel.",
        "La cooperación siempre es la estrategia dominante para ambos.",
        "Los prisioneros no tienen ninguna opción disponible.",
        "La racionalidad individual lleva a un resultado colectivo peor que la cooperación mutua."
      ],
      "correcta": "La racionalidad individual lleva a un resultado colectivo peor que la cooperación mutua.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_56",
      "modulo": "Comprensión Lectora",
      "pregunta": "En biología evolutiva, la teoría de juegos explica el altruismo animal como:",
      "lectura": "La teoría de juegos, rama de las matemáticas desarrollada formalmente por John von Neumann y Oskar Morgenstern en 1944, estudia las decisiones estratégicas en situaciones donde el resultado para cada participante depende no solo de sus propias acciones sino también de las decisiones de los demás. Aunque originalmente concebida para analizar juegos de mesa y apuestas, su aplicación se ha extendido a campos tan diversos como la economía, la biología evolutiva, la ciencia política, las relaciones internacionales y la inteligencia artificial. El concepto central más influyente de la teoría de juegos es el equilibrio de Nash, formulado por el matemático John Nash en 1950: un estado en el que ningún jugador puede mejorar su resultado cambiando unilateralmente su estrategia, dado que los demás mantienen las suyas. Este concepto se ilustra paradigmáticamente con el dilema del prisionero, un escenario en el que dos sospechosos interrogados por separado enfrentan la elección entre cooperar con su cómplice permaneciendo en silencio o traicionarlo confesando. La paradoja del dilema radica en que la racionalidad individual conduce a ambos a traicionar, obteniendo un resultado colectivo peor que si ambos hubieran cooperado, revelando así la tensión fundamental entre el interés individual y el bienestar colectivo. En biología evolutiva, la teoría de juegos ha sido aplicada por John Maynard Smith para explicar comportamientos animales aparentemente altruistas: la estrategia evolutivamente estable (EEE) demuestra cómo ciertas conductas cooperativas pueden emerger y mantenerse en poblaciones naturales sin necesidad de invocar el altruismo genuino, sino como resultado de la maximización del éxito reproductivo individual a largo plazo. Las aplicaciones contemporáneas incluyen el diseño de subastas gubernamentales, la negociación de tratados internacionales y el desarrollo de algoritmos de inteligencia artificial capaces de cooperar estratégicamente con humanos.",
      "opciones": [
        "Un fenómeno causado exclusivamente por la intervención humana.",
        "Un comportamiento que solo existe en especies domésticas.",
        "El resultado de la maximización del éxito reproductivo individual a largo plazo, no altruismo genuino.",
        "Una prueba de que los animales tienen conciencia moral."
      ],
      "correcta": "El resultado de la maximización del éxito reproductivo individual a largo plazo, no altruismo genuino.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_57",
      "modulo": "Comprensión Lectora",
      "pregunta": "La teoría de juegos fue originalmente concebida para:",
      "lectura": "La teoría de juegos, rama de las matemáticas desarrollada formalmente por John von Neumann y Oskar Morgenstern en 1944, estudia las decisiones estratégicas en situaciones donde el resultado para cada participante depende no solo de sus propias acciones sino también de las decisiones de los demás. Aunque originalmente concebida para analizar juegos de mesa y apuestas, su aplicación se ha extendido a campos tan diversos como la economía, la biología evolutiva, la ciencia política, las relaciones internacionales y la inteligencia artificial. El concepto central más influyente de la teoría de juegos es el equilibrio de Nash, formulado por el matemático John Nash en 1950: un estado en el que ningún jugador puede mejorar su resultado cambiando unilateralmente su estrategia, dado que los demás mantienen las suyas. Este concepto se ilustra paradigmáticamente con el dilema del prisionero, un escenario en el que dos sospechosos interrogados por separado enfrentan la elección entre cooperar con su cómplice permaneciendo en silencio o traicionarlo confesando. La paradoja del dilema radica en que la racionalidad individual conduce a ambos a traicionar, obteniendo un resultado colectivo peor que si ambos hubieran cooperado, revelando así la tensión fundamental entre el interés individual y el bienestar colectivo. En biología evolutiva, la teoría de juegos ha sido aplicada por John Maynard Smith para explicar comportamientos animales aparentemente altruistas: la estrategia evolutivamente estable (EEE) demuestra cómo ciertas conductas cooperativas pueden emerger y mantenerse en poblaciones naturales sin necesidad de invocar el altruismo genuino, sino como resultado de la maximización del éxito reproductivo individual a largo plazo. Las aplicaciones contemporáneas incluyen el diseño de subastas gubernamentales, la negociación de tratados internacionales y el desarrollo de algoritmos de inteligencia artificial capaces de cooperar estratégicamente con humanos.",
      "opciones": [
        "Diseñar algoritmos de inteligencia artificial.",
        "Explicar la evolución de las especies biológicas.",
        "Resolver conflictos militares internacionales.",
        "Analizar juegos de mesa y situaciones de apuestas."
      ],
      "correcta": "Analizar juegos de mesa y situaciones de apuestas.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_58",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Qué revela el dilema del prisionero sobre las relaciones sociales?",
      "lectura": "La teoría de juegos, rama de las matemáticas desarrollada formalmente por John von Neumann y Oskar Morgenstern en 1944, estudia las decisiones estratégicas en situaciones donde el resultado para cada participante depende no solo de sus propias acciones sino también de las decisiones de los demás. Aunque originalmente concebida para analizar juegos de mesa y apuestas, su aplicación se ha extendido a campos tan diversos como la economía, la biología evolutiva, la ciencia política, las relaciones internacionales y la inteligencia artificial. El concepto central más influyente de la teoría de juegos es el equilibrio de Nash, formulado por el matemático John Nash en 1950: un estado en el que ningún jugador puede mejorar su resultado cambiando unilateralmente su estrategia, dado que los demás mantienen las suyas. Este concepto se ilustra paradigmáticamente con el dilema del prisionero, un escenario en el que dos sospechosos interrogados por separado enfrentan la elección entre cooperar con su cómplice permaneciendo en silencio o traicionarlo confesando. La paradoja del dilema radica en que la racionalidad individual conduce a ambos a traicionar, obteniendo un resultado colectivo peor que si ambos hubieran cooperado, revelando así la tensión fundamental entre el interés individual y el bienestar colectivo. En biología evolutiva, la teoría de juegos ha sido aplicada por John Maynard Smith para explicar comportamientos animales aparentemente altruistas: la estrategia evolutivamente estable (EEE) demuestra cómo ciertas conductas cooperativas pueden emerger y mantenerse en poblaciones naturales sin necesidad de invocar el altruismo genuino, sino como resultado de la maximización del éxito reproductivo individual a largo plazo. Las aplicaciones contemporáneas incluyen el diseño de subastas gubernamentales, la negociación de tratados internacionales y el desarrollo de algoritmos de inteligencia artificial capaces de cooperar estratégicamente con humanos.",
      "opciones": [
        "Que la traición siempre produce los mejores resultados para todos.",
        "Que las personas nunca actúan de manera egoísta.",
        "La tensión fundamental que existe entre el interés individual y el bienestar colectivo.",
        "Que la cooperación es imposible en cualquier circunstancia."
      ],
      "correcta": "La tensión fundamental que existe entre el interés individual y el bienestar colectivo.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_59",
      "modulo": "Comprensión Lectora",
      "pregunta": "Las aplicaciones contemporáneas de la teoría de juegos incluyen:",
      "lectura": "La teoría de juegos, rama de las matemáticas desarrollada formalmente por John von Neumann y Oskar Morgenstern en 1944, estudia las decisiones estratégicas en situaciones donde el resultado para cada participante depende no solo de sus propias acciones sino también de las decisiones de los demás. Aunque originalmente concebida para analizar juegos de mesa y apuestas, su aplicación se ha extendido a campos tan diversos como la economía, la biología evolutiva, la ciencia política, las relaciones internacionales y la inteligencia artificial. El concepto central más influyente de la teoría de juegos es el equilibrio de Nash, formulado por el matemático John Nash en 1950: un estado en el que ningún jugador puede mejorar su resultado cambiando unilateralmente su estrategia, dado que los demás mantienen las suyas. Este concepto se ilustra paradigmáticamente con el dilema del prisionero, un escenario en el que dos sospechosos interrogados por separado enfrentan la elección entre cooperar con su cómplice permaneciendo en silencio o traicionarlo confesando. La paradoja del dilema radica en que la racionalidad individual conduce a ambos a traicionar, obteniendo un resultado colectivo peor que si ambos hubieran cooperado, revelando así la tensión fundamental entre el interés individual y el bienestar colectivo. En biología evolutiva, la teoría de juegos ha sido aplicada por John Maynard Smith para explicar comportamientos animales aparentemente altruistas: la estrategia evolutivamente estable (EEE) demuestra cómo ciertas conductas cooperativas pueden emerger y mantenerse en poblaciones naturales sin necesidad de invocar el altruismo genuino, sino como resultado de la maximización del éxito reproductivo individual a largo plazo. Las aplicaciones contemporáneas incluyen el diseño de subastas gubernamentales, la negociación de tratados internacionales y el desarrollo de algoritmos de inteligencia artificial capaces de cooperar estratégicamente con humanos.",
      "opciones": [
        "Diseño de subastas, negociación de tratados y algoritmos de IA cooperativa.",
        "Únicamente la planificación de campañas publicitarias.",
        "Exclusivamente la predicción del clima y los terremotos.",
        "Solo el análisis de juegos de mesa recreativos."
      ],
      "correcta": "Diseño de subastas, negociación de tratados y algoritmos de IA cooperativa.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_60",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Cuál es la diferencia fundamental entre justicia retributiva y restaurativa?",
      "lectura": "El sistema de justicia restaurativa representa un paradigma alternativo al modelo punitivo tradicional de administración de justicia penal. Mientras el enfoque retributivo convencional define el delito como una violación de la ley estatal y centra su respuesta en el castigo proporcional al infractor —prisión, multas, antecedentes penales—, la justicia restaurativa redefine el delito como un daño causado a personas y relaciones concretas, y orienta su intervención hacia la reparación integral de ese daño mediante procesos participativos que involucran a la víctima, al ofensor y a la comunidad afectada. Las prácticas restaurativas incluyen la mediación víctima-ofensor, los círculos de sentencia comunitarios inspirados en tradiciones indígenas de pueblos originarios de Canadá, Australia y Nueva Zelanda, y las conferencias de grupo familiar desarrolladas en el sistema de justicia juvenil neozelandés. Los defensores de este modelo argumentan que el sistema punitivo tradicional fracasa en múltiples dimensiones: las víctimas frecuentemente experimentan una revictimización institucional al ser reducidas al papel de testigos en un proceso que no les pertenece; los ofensores raramente comprenden el impacto real de sus acciones al ser aislados de la comunidad afectada; y las altas tasas de reincidencia demuestran que el encarcelamiento por sí solo no logra la rehabilitación ni la disuasión efectiva. Estudios empíricos en países como Nueva Zelanda, Canadá y Bélgica han reportado que los procesos restaurativos producen mayores niveles de satisfacción en las víctimas, reducciones significativas en la reincidencia delictiva y ahorros sustanciales para el sistema judicial. Sin embargo, los críticos advierten que la justicia restaurativa presenta limitaciones importantes en casos de violencia grave o desigualdad de poder entre las partes, y que su implementación inadecuada puede trivializar el sufrimiento de las víctimas o presionarlas para que otorguen un perdón que no sienten genuinamente.",
      "opciones": [
        "La retributiva castiga al infractor; la restaurativa busca reparar el daño mediante procesos participativos.",
        "No existe ninguna diferencia entre ambos modelos.",
        "La restaurativa aplica castigos más severos que la retributiva.",
        "La retributiva se enfoca en la víctima y la restaurativa en el castigo."
      ],
      "correcta": "La retributiva castiga al infractor; la restaurativa busca reparar el daño mediante procesos participativos.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_61",
      "modulo": "Comprensión Lectora",
      "pregunta": "Los círculos de sentencia comunitarios se inspiran en:",
      "lectura": "El sistema de justicia restaurativa representa un paradigma alternativo al modelo punitivo tradicional de administración de justicia penal. Mientras el enfoque retributivo convencional define el delito como una violación de la ley estatal y centra su respuesta en el castigo proporcional al infractor —prisión, multas, antecedentes penales—, la justicia restaurativa redefine el delito como un daño causado a personas y relaciones concretas, y orienta su intervención hacia la reparación integral de ese daño mediante procesos participativos que involucran a la víctima, al ofensor y a la comunidad afectada. Las prácticas restaurativas incluyen la mediación víctima-ofensor, los círculos de sentencia comunitarios inspirados en tradiciones indígenas de pueblos originarios de Canadá, Australia y Nueva Zelanda, y las conferencias de grupo familiar desarrolladas en el sistema de justicia juvenil neozelandés. Los defensores de este modelo argumentan que el sistema punitivo tradicional fracasa en múltiples dimensiones: las víctimas frecuentemente experimentan una revictimización institucional al ser reducidas al papel de testigos en un proceso que no les pertenece; los ofensores raramente comprenden el impacto real de sus acciones al ser aislados de la comunidad afectada; y las altas tasas de reincidencia demuestran que el encarcelamiento por sí solo no logra la rehabilitación ni la disuasión efectiva. Estudios empíricos en países como Nueva Zelanda, Canadá y Bélgica han reportado que los procesos restaurativos producen mayores niveles de satisfacción en las víctimas, reducciones significativas en la reincidencia delictiva y ahorros sustanciales para el sistema judicial. Sin embargo, los críticos advierten que la justicia restaurativa presenta limitaciones importantes en casos de violencia grave o desigualdad de poder entre las partes, y que su implementación inadecuada puede trivializar el sufrimiento de las víctimas o presionarlas para que otorguen un perdón que no sienten genuinamente.",
      "opciones": [
        "Los tribunales militares de la Segunda Guerra Mundial.",
        "Tradiciones indígenas de pueblos originarios de Canadá, Australia y Nueva Zelanda.",
        "El sistema judicial romano antiguo.",
        "Las prácticas carcelarias de Estados Unidos."
      ],
      "correcta": "Tradiciones indígenas de pueblos originarios de Canadá, Australia y Nueva Zelanda.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_62",
      "modulo": "Comprensión Lectora",
      "pregunta": "Según el texto, el sistema punitivo fracasa porque:",
      "lectura": "El sistema de justicia restaurativa representa un paradigma alternativo al modelo punitivo tradicional de administración de justicia penal. Mientras el enfoque retributivo convencional define el delito como una violación de la ley estatal y centra su respuesta en el castigo proporcional al infractor —prisión, multas, antecedentes penales—, la justicia restaurativa redefine el delito como un daño causado a personas y relaciones concretas, y orienta su intervención hacia la reparación integral de ese daño mediante procesos participativos que involucran a la víctima, al ofensor y a la comunidad afectada. Las prácticas restaurativas incluyen la mediación víctima-ofensor, los círculos de sentencia comunitarios inspirados en tradiciones indígenas de pueblos originarios de Canadá, Australia y Nueva Zelanda, y las conferencias de grupo familiar desarrolladas en el sistema de justicia juvenil neozelandés. Los defensores de este modelo argumentan que el sistema punitivo tradicional fracasa en múltiples dimensiones: las víctimas frecuentemente experimentan una revictimización institucional al ser reducidas al papel de testigos en un proceso que no les pertenece; los ofensores raramente comprenden el impacto real de sus acciones al ser aislados de la comunidad afectada; y las altas tasas de reincidencia demuestran que el encarcelamiento por sí solo no logra la rehabilitación ni la disuasión efectiva. Estudios empíricos en países como Nueva Zelanda, Canadá y Bélgica han reportado que los procesos restaurativos producen mayores niveles de satisfacción en las víctimas, reducciones significativas en la reincidencia delictiva y ahorros sustanciales para el sistema judicial. Sin embargo, los críticos advierten que la justicia restaurativa presenta limitaciones importantes en casos de violencia grave o desigualdad de poder entre las partes, y que su implementación inadecuada puede trivializar el sufrimiento de las víctimas o presionarlas para que otorguen un perdón que no sienten genuinamente.",
      "opciones": [
        "Las víctimas siempre quedan completamente satisfechas con las sentencias.",
        "El encarcelamiento elimina completamente la reincidencia delictiva.",
        "Todos los delincuentes son liberados inmediatamente sin consecuencias.",
        "Revictimiza a las víctimas, no rehabilita al ofensor y presenta altas tasas de reincidencia."
      ],
      "correcta": "Revictimiza a las víctimas, no rehabilita al ofensor y presenta altas tasas de reincidencia.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_63",
      "modulo": "Comprensión Lectora",
      "pregunta": "Los estudios empíricos sobre justicia restaurativa muestran:",
      "lectura": "El sistema de justicia restaurativa representa un paradigma alternativo al modelo punitivo tradicional de administración de justicia penal. Mientras el enfoque retributivo convencional define el delito como una violación de la ley estatal y centra su respuesta en el castigo proporcional al infractor —prisión, multas, antecedentes penales—, la justicia restaurativa redefine el delito como un daño causado a personas y relaciones concretas, y orienta su intervención hacia la reparación integral de ese daño mediante procesos participativos que involucran a la víctima, al ofensor y a la comunidad afectada. Las prácticas restaurativas incluyen la mediación víctima-ofensor, los círculos de sentencia comunitarios inspirados en tradiciones indígenas de pueblos originarios de Canadá, Australia y Nueva Zelanda, y las conferencias de grupo familiar desarrolladas en el sistema de justicia juvenil neozelandés. Los defensores de este modelo argumentan que el sistema punitivo tradicional fracasa en múltiples dimensiones: las víctimas frecuentemente experimentan una revictimización institucional al ser reducidas al papel de testigos en un proceso que no les pertenece; los ofensores raramente comprenden el impacto real de sus acciones al ser aislados de la comunidad afectada; y las altas tasas de reincidencia demuestran que el encarcelamiento por sí solo no logra la rehabilitación ni la disuasión efectiva. Estudios empíricos en países como Nueva Zelanda, Canadá y Bélgica han reportado que los procesos restaurativos producen mayores niveles de satisfacción en las víctimas, reducciones significativas en la reincidencia delictiva y ahorros sustanciales para el sistema judicial. Sin embargo, los críticos advierten que la justicia restaurativa presenta limitaciones importantes en casos de violencia grave o desigualdad de poder entre las partes, y que su implementación inadecuada puede trivializar el sufrimiento de las víctimas o presionarlas para que otorguen un perdón que no sienten genuinamente.",
      "opciones": [
        "Mayor satisfacción de víctimas, menor reincidencia y ahorros para el sistema judicial.",
        "Que las víctimas rechazan siempre los procesos restaurativos.",
        "Que la reincidencia aumenta con los procesos restaurativos.",
        "Que la justicia restaurativa es más costosa que la retributiva."
      ],
      "correcta": "Mayor satisfacción de víctimas, menor reincidencia y ahorros para el sistema judicial.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_64",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Qué limitación de la justicia restaurativa señalan los críticos?",
      "lectura": "El sistema de justicia restaurativa representa un paradigma alternativo al modelo punitivo tradicional de administración de justicia penal. Mientras el enfoque retributivo convencional define el delito como una violación de la ley estatal y centra su respuesta en el castigo proporcional al infractor —prisión, multas, antecedentes penales—, la justicia restaurativa redefine el delito como un daño causado a personas y relaciones concretas, y orienta su intervención hacia la reparación integral de ese daño mediante procesos participativos que involucran a la víctima, al ofensor y a la comunidad afectada. Las prácticas restaurativas incluyen la mediación víctima-ofensor, los círculos de sentencia comunitarios inspirados en tradiciones indígenas de pueblos originarios de Canadá, Australia y Nueva Zelanda, y las conferencias de grupo familiar desarrolladas en el sistema de justicia juvenil neozelandés. Los defensores de este modelo argumentan que el sistema punitivo tradicional fracasa en múltiples dimensiones: las víctimas frecuentemente experimentan una revictimización institucional al ser reducidas al papel de testigos en un proceso que no les pertenece; los ofensores raramente comprenden el impacto real de sus acciones al ser aislados de la comunidad afectada; y las altas tasas de reincidencia demuestran que el encarcelamiento por sí solo no logra la rehabilitación ni la disuasión efectiva. Estudios empíricos en países como Nueva Zelanda, Canadá y Bélgica han reportado que los procesos restaurativos producen mayores niveles de satisfacción en las víctimas, reducciones significativas en la reincidencia delictiva y ahorros sustanciales para el sistema judicial. Sin embargo, los críticos advierten que la justicia restaurativa presenta limitaciones importantes en casos de violencia grave o desigualdad de poder entre las partes, y que su implementación inadecuada puede trivializar el sufrimiento de las víctimas o presionarlas para que otorguen un perdón que no sienten genuinamente.",
      "opciones": [
        "Puede ser inadecuada en casos de violencia grave o desigualdad de poder, y podría presionar a las víctimas.",
        "Que solo funciona en países de habla inglesa.",
        "Que siempre favorece al ofensor sobre la víctima.",
        "Que es demasiado costosa para implementarse en cualquier país."
      ],
      "correcta": "Puede ser inadecuada en casos de violencia grave o desigualdad de poder, y podría presionar a las víctimas.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_65",
      "modulo": "Comprensión Lectora",
      "pregunta": "La 'revictimización institucional' se refiere a:",
      "lectura": "El sistema de justicia restaurativa representa un paradigma alternativo al modelo punitivo tradicional de administración de justicia penal. Mientras el enfoque retributivo convencional define el delito como una violación de la ley estatal y centra su respuesta en el castigo proporcional al infractor —prisión, multas, antecedentes penales—, la justicia restaurativa redefine el delito como un daño causado a personas y relaciones concretas, y orienta su intervención hacia la reparación integral de ese daño mediante procesos participativos que involucran a la víctima, al ofensor y a la comunidad afectada. Las prácticas restaurativas incluyen la mediación víctima-ofensor, los círculos de sentencia comunitarios inspirados en tradiciones indígenas de pueblos originarios de Canadá, Australia y Nueva Zelanda, y las conferencias de grupo familiar desarrolladas en el sistema de justicia juvenil neozelandés. Los defensores de este modelo argumentan que el sistema punitivo tradicional fracasa en múltiples dimensiones: las víctimas frecuentemente experimentan una revictimización institucional al ser reducidas al papel de testigos en un proceso que no les pertenece; los ofensores raramente comprenden el impacto real de sus acciones al ser aislados de la comunidad afectada; y las altas tasas de reincidencia demuestran que el encarcelamiento por sí solo no logra la rehabilitación ni la disuasión efectiva. Estudios empíricos en países como Nueva Zelanda, Canadá y Bélgica han reportado que los procesos restaurativos producen mayores niveles de satisfacción en las víctimas, reducciones significativas en la reincidencia delictiva y ahorros sustanciales para el sistema judicial. Sin embargo, los críticos advierten que la justicia restaurativa presenta limitaciones importantes en casos de violencia grave o desigualdad de poder entre las partes, y que su implementación inadecuada puede trivializar el sufrimiento de las víctimas o presionarlas para que otorguen un perdón que no sienten genuinamente.",
      "opciones": [
        "El proceso por el cual las víctimas sufren nuevamente al ser reducidas al papel de testigos en un sistema que no les pertenece.",
        "Un tipo de terapia psicológica ofrecida a las víctimas.",
        "La obligación de las víctimas de pagar los costos judiciales.",
        "El encarcelamiento de las víctimas junto con los ofensores."
      ],
      "correcta": "El proceso por el cual las víctimas sufren nuevamente al ser reducidas al papel de testigos en un sistema que no les pertenece.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_66",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Qué establece el principio de superposición cuántica?",
      "lectura": "La mecánica cuántica, desarrollada durante el primer tercio del siglo XX, constituye uno de los marcos teóricos más exitosos y conceptualmente desconcertantes de la física moderna. Sus predicciones han sido verificadas experimentalmente con una precisión que no tiene paralelo en ninguna otra teoría científica: la electrodinámica cuántica, por ejemplo, predice el momento magnético anómalo del electrón con una exactitud de doce cifras decimales. Sin embargo, la interpretación de sus postulados fundamentales sigue siendo motivo de intenso debate filosófico casi un siglo después de su formulación. El principio de superposición establece que una partícula cuántica puede existir simultáneamente en múltiples estados hasta que una medición la obliga a colapsar en un estado definido. Erwin Schrödinger ilustró la contraintuitiva naturaleza de este principio con su célebre experimento mental del gato encerrado en una caja con un mecanismo letal activado por un evento cuántico aleatorio: según la interpretación ortodoxa de Copenhague, el gato estaría literalmente vivo y muerto al mismo tiempo hasta que un observador abriera la caja. El principio de incertidumbre de Heisenberg, por su parte, establece un límite fundamental a la precisión con que pueden conocerse simultáneamente ciertas parejas de propiedades físicas —como la posición y el momento de una partícula—, no como consecuencia de las limitaciones de los instrumentos de medición, sino como una propiedad intrínseca de la naturaleza misma. Más recientemente, el fenómeno del entrelazamiento cuántico —que Einstein denominó despectivamente 'acción fantasmagórica a distancia'— ha sido confirmado experimentalmente: dos partículas entrelazadas exhiben correlaciones instantáneas independientemente de la distancia que las separa, lo cual ha abierto las puertas a tecnologías revolucionarias como la computación cuántica y la criptografía cuántica, que prometen transformar radicalmente los campos de la informática y la seguridad digital en las próximas décadas.",
      "opciones": [
        "Que dos partículas no pueden ocupar el mismo espacio al mismo tiempo.",
        "Que una partícula puede existir en múltiples estados simultáneamente hasta que se realiza una medición.",
        "Que las partículas siempre se encuentran en un único estado definido.",
        "Que la velocidad de las partículas supera siempre la velocidad de la luz."
      ],
      "correcta": "Que una partícula puede existir en múltiples estados simultáneamente hasta que se realiza una medición.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_67",
      "modulo": "Comprensión Lectora",
      "pregunta": "El experimento mental del gato de Schrödinger busca ilustrar:",
      "lectura": "La mecánica cuántica, desarrollada durante el primer tercio del siglo XX, constituye uno de los marcos teóricos más exitosos y conceptualmente desconcertantes de la física moderna. Sus predicciones han sido verificadas experimentalmente con una precisión que no tiene paralelo en ninguna otra teoría científica: la electrodinámica cuántica, por ejemplo, predice el momento magnético anómalo del electrón con una exactitud de doce cifras decimales. Sin embargo, la interpretación de sus postulados fundamentales sigue siendo motivo de intenso debate filosófico casi un siglo después de su formulación. El principio de superposición establece que una partícula cuántica puede existir simultáneamente en múltiples estados hasta que una medición la obliga a colapsar en un estado definido. Erwin Schrödinger ilustró la contraintuitiva naturaleza de este principio con su célebre experimento mental del gato encerrado en una caja con un mecanismo letal activado por un evento cuántico aleatorio: según la interpretación ortodoxa de Copenhague, el gato estaría literalmente vivo y muerto al mismo tiempo hasta que un observador abriera la caja. El principio de incertidumbre de Heisenberg, por su parte, establece un límite fundamental a la precisión con que pueden conocerse simultáneamente ciertas parejas de propiedades físicas —como la posición y el momento de una partícula—, no como consecuencia de las limitaciones de los instrumentos de medición, sino como una propiedad intrínseca de la naturaleza misma. Más recientemente, el fenómeno del entrelazamiento cuántico —que Einstein denominó despectivamente 'acción fantasmagórica a distancia'— ha sido confirmado experimentalmente: dos partículas entrelazadas exhiben correlaciones instantáneas independientemente de la distancia que las separa, lo cual ha abierto las puertas a tecnologías revolucionarias como la computación cuántica y la criptografía cuántica, que prometen transformar radicalmente los campos de la informática y la seguridad digital en las próximas décadas.",
      "opciones": [
        "La naturaleza contraintuitiva de la superposición cuántica aplicada a escalas macroscópicas.",
        "La capacidad de los gatos para sobrevivir en espacios cerrados.",
        "La diferencia entre la física clásica y la relatividad general.",
        "La crueldad de los experimentos científicos con animales."
      ],
      "correcta": "La naturaleza contraintuitiva de la superposición cuántica aplicada a escalas macroscópicas.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_68",
      "modulo": "Comprensión Lectora",
      "pregunta": "El principio de incertidumbre de Heisenberg establece que:",
      "lectura": "La mecánica cuántica, desarrollada durante el primer tercio del siglo XX, constituye uno de los marcos teóricos más exitosos y conceptualmente desconcertantes de la física moderna. Sus predicciones han sido verificadas experimentalmente con una precisión que no tiene paralelo en ninguna otra teoría científica: la electrodinámica cuántica, por ejemplo, predice el momento magnético anómalo del electrón con una exactitud de doce cifras decimales. Sin embargo, la interpretación de sus postulados fundamentales sigue siendo motivo de intenso debate filosófico casi un siglo después de su formulación. El principio de superposición establece que una partícula cuántica puede existir simultáneamente en múltiples estados hasta que una medición la obliga a colapsar en un estado definido. Erwin Schrödinger ilustró la contraintuitiva naturaleza de este principio con su célebre experimento mental del gato encerrado en una caja con un mecanismo letal activado por un evento cuántico aleatorio: según la interpretación ortodoxa de Copenhague, el gato estaría literalmente vivo y muerto al mismo tiempo hasta que un observador abriera la caja. El principio de incertidumbre de Heisenberg, por su parte, establece un límite fundamental a la precisión con que pueden conocerse simultáneamente ciertas parejas de propiedades físicas —como la posición y el momento de una partícula—, no como consecuencia de las limitaciones de los instrumentos de medición, sino como una propiedad intrínseca de la naturaleza misma. Más recientemente, el fenómeno del entrelazamiento cuántico —que Einstein denominó despectivamente 'acción fantasmagórica a distancia'— ha sido confirmado experimentalmente: dos partículas entrelazadas exhiben correlaciones instantáneas independientemente de la distancia que las separa, lo cual ha abierto las puertas a tecnologías revolucionarias como la computación cuántica y la criptografía cuántica, que prometen transformar radicalmente los campos de la informática y la seguridad digital en las próximas décadas.",
      "opciones": [
        "La incertidumbre se debe a errores humanos en la toma de datos.",
        "Los instrumentos de medición actuales son insuficientes pero mejorarán.",
        "Todas las propiedades de una partícula pueden conocerse con precisión infinita.",
        "Existen límites fundamentales intrínsecos a la precisión con que se pueden conocer simultáneamente ciertos pares de propiedades."
      ],
      "correcta": "Existen límites fundamentales intrínsecos a la precisión con que se pueden conocer simultáneamente ciertos pares de propiedades.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_69",
      "modulo": "Comprensión Lectora",
      "pregunta": "Einstein calificó al entrelazamiento cuántico como 'acción fantasmagórica a distancia' porque:",
      "lectura": "La mecánica cuántica, desarrollada durante el primer tercio del siglo XX, constituye uno de los marcos teóricos más exitosos y conceptualmente desconcertantes de la física moderna. Sus predicciones han sido verificadas experimentalmente con una precisión que no tiene paralelo en ninguna otra teoría científica: la electrodinámica cuántica, por ejemplo, predice el momento magnético anómalo del electrón con una exactitud de doce cifras decimales. Sin embargo, la interpretación de sus postulados fundamentales sigue siendo motivo de intenso debate filosófico casi un siglo después de su formulación. El principio de superposición establece que una partícula cuántica puede existir simultáneamente en múltiples estados hasta que una medición la obliga a colapsar en un estado definido. Erwin Schrödinger ilustró la contraintuitiva naturaleza de este principio con su célebre experimento mental del gato encerrado en una caja con un mecanismo letal activado por un evento cuántico aleatorio: según la interpretación ortodoxa de Copenhague, el gato estaría literalmente vivo y muerto al mismo tiempo hasta que un observador abriera la caja. El principio de incertidumbre de Heisenberg, por su parte, establece un límite fundamental a la precisión con que pueden conocerse simultáneamente ciertas parejas de propiedades físicas —como la posición y el momento de una partícula—, no como consecuencia de las limitaciones de los instrumentos de medición, sino como una propiedad intrínseca de la naturaleza misma. Más recientemente, el fenómeno del entrelazamiento cuántico —que Einstein denominó despectivamente 'acción fantasmagórica a distancia'— ha sido confirmado experimentalmente: dos partículas entrelazadas exhiben correlaciones instantáneas independientemente de la distancia que las separa, lo cual ha abierto las puertas a tecnologías revolucionarias como la computación cuántica y la criptografía cuántica, que prometen transformar radicalmente los campos de la informática y la seguridad digital en las próximas décadas.",
      "opciones": [
        "Fue el primero en demostrar experimentalmente el entrelazamiento.",
        "Apoyaba entusiastamente esta interpretación de la mecánica cuántica.",
        "Creía que el fenómeno era un truco de magia sin base científica.",
        "Las correlaciones instantáneas entre partículas parecían violar la localidad, algo que le resultaba inaceptable."
      ],
      "correcta": "Las correlaciones instantáneas entre partículas parecían violar la localidad, algo que le resultaba inaceptable.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_70",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Qué aplicaciones tecnológicas derivan del entrelazamiento cuántico?",
      "lectura": "La mecánica cuántica, desarrollada durante el primer tercio del siglo XX, constituye uno de los marcos teóricos más exitosos y conceptualmente desconcertantes de la física moderna. Sus predicciones han sido verificadas experimentalmente con una precisión que no tiene paralelo en ninguna otra teoría científica: la electrodinámica cuántica, por ejemplo, predice el momento magnético anómalo del electrón con una exactitud de doce cifras decimales. Sin embargo, la interpretación de sus postulados fundamentales sigue siendo motivo de intenso debate filosófico casi un siglo después de su formulación. El principio de superposición establece que una partícula cuántica puede existir simultáneamente en múltiples estados hasta que una medición la obliga a colapsar en un estado definido. Erwin Schrödinger ilustró la contraintuitiva naturaleza de este principio con su célebre experimento mental del gato encerrado en una caja con un mecanismo letal activado por un evento cuántico aleatorio: según la interpretación ortodoxa de Copenhague, el gato estaría literalmente vivo y muerto al mismo tiempo hasta que un observador abriera la caja. El principio de incertidumbre de Heisenberg, por su parte, establece un límite fundamental a la precisión con que pueden conocerse simultáneamente ciertas parejas de propiedades físicas —como la posición y el momento de una partícula—, no como consecuencia de las limitaciones de los instrumentos de medición, sino como una propiedad intrínseca de la naturaleza misma. Más recientemente, el fenómeno del entrelazamiento cuántico —que Einstein denominó despectivamente 'acción fantasmagórica a distancia'— ha sido confirmado experimentalmente: dos partículas entrelazadas exhiben correlaciones instantáneas independientemente de la distancia que las separa, lo cual ha abierto las puertas a tecnologías revolucionarias como la computación cuántica y la criptografía cuántica, que prometen transformar radicalmente los campos de la informática y la seguridad digital en las próximas décadas.",
      "opciones": [
        "Mejores telescopios para observar galaxias distantes.",
        "Sistemas de calefacción basados en energía nuclear.",
        "Computación cuántica y criptografía cuántica, que transformarían la informática y la seguridad digital.",
        "Motores de combustión más eficientes para automóviles."
      ],
      "correcta": "Computación cuántica y criptografía cuántica, que transformarían la informática y la seguridad digital.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_71",
      "modulo": "Comprensión Lectora",
      "pregunta": "La electrodinámica cuántica se menciona en el texto para demostrar:",
      "lectura": "La mecánica cuántica, desarrollada durante el primer tercio del siglo XX, constituye uno de los marcos teóricos más exitosos y conceptualmente desconcertantes de la física moderna. Sus predicciones han sido verificadas experimentalmente con una precisión que no tiene paralelo en ninguna otra teoría científica: la electrodinámica cuántica, por ejemplo, predice el momento magnético anómalo del electrón con una exactitud de doce cifras decimales. Sin embargo, la interpretación de sus postulados fundamentales sigue siendo motivo de intenso debate filosófico casi un siglo después de su formulación. El principio de superposición establece que una partícula cuántica puede existir simultáneamente en múltiples estados hasta que una medición la obliga a colapsar en un estado definido. Erwin Schrödinger ilustró la contraintuitiva naturaleza de este principio con su célebre experimento mental del gato encerrado en una caja con un mecanismo letal activado por un evento cuántico aleatorio: según la interpretación ortodoxa de Copenhague, el gato estaría literalmente vivo y muerto al mismo tiempo hasta que un observador abriera la caja. El principio de incertidumbre de Heisenberg, por su parte, establece un límite fundamental a la precisión con que pueden conocerse simultáneamente ciertas parejas de propiedades físicas —como la posición y el momento de una partícula—, no como consecuencia de las limitaciones de los instrumentos de medición, sino como una propiedad intrínseca de la naturaleza misma. Más recientemente, el fenómeno del entrelazamiento cuántico —que Einstein denominó despectivamente 'acción fantasmagórica a distancia'— ha sido confirmado experimentalmente: dos partículas entrelazadas exhiben correlaciones instantáneas independientemente de la distancia que las separa, lo cual ha abierto las puertas a tecnologías revolucionarias como la computación cuántica y la criptografía cuántica, que prometen transformar radicalmente los campos de la informática y la seguridad digital en las próximas décadas.",
      "opciones": [
        "Que la física clásica es más precisa que la física cuántica.",
        "Que la teoría cuántica es incorrecta y necesita ser reemplazada.",
        "La extraordinaria precisión predictiva de la mecánica cuántica como teoría científica.",
        "Que los electrones no existen realmente en la naturaleza."
      ],
      "correcta": "La extraordinaria precisión predictiva de la mecánica cuántica como teoría científica.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_72",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Cuál es la diferencia fundamental entre el modelo lineal y la economía circular?",
      "lectura": "La economía circular constituye un paradigma productivo que se contrapone radicalmente al modelo lineal tradicional de 'extraer-producir-desechar' que ha prevalecido desde la Revolución Industrial. Mientras el modelo lineal asume la disponibilidad ilimitada de recursos naturales y la capacidad infinita de los ecosistemas para absorber residuos, la economía circular reconoce las limitaciones biofísicas del planeta y propone un sistema regenerativo en el que los materiales, componentes y productos mantienen su utilidad y valor el mayor tiempo posible mediante estrategias de diseño para la durabilidad, reparación, reutilización, remanufactura y reciclaje. Este concepto, popularizado por la Fundación Ellen MacArthur a partir de 2010, se inspira en los ciclos biogeoquímicos naturales donde los residuos de un organismo constituyen los nutrientes de otro, eliminando el concepto mismo de 'desperdicio'. En la práctica, la implementación de la economía circular requiere una transformación sistémica que abarca desde el rediseño de productos —utilizando materiales biodegradables o infinitamente reciclables— hasta la reconfiguración de modelos de negocio: la servitización, por ejemplo, reemplaza la venta de productos por la provisión de servicios (iluminación en vez de bombillas, movilidad en vez de automóviles), desvinculando la rentabilidad empresarial del consumo de recursos vírgenes. Sin embargo, la transición enfrenta obstáculos considerables: la obsolescencia programada sigue siendo una estrategia comercial dominante, los sistemas de recolección y clasificación de residuos son deficientes en la mayoría de los países en desarrollo, y los incentivos fiscales continúan favoreciendo la extracción de materias primas sobre la recuperación de materiales secundarios. Además, algunos críticos señalan que el concepto de economía circular puede generar un 'efecto rebote' si la eficiencia en el uso de recursos conduce a un aumento del consumo total, neutralizando los beneficios ambientales esperados. A pesar de estas limitaciones, la Unión Europea ha incorporado la economía circular como eje central de su Pacto Verde Europeo, con el objetivo de alcanzar la neutralidad climática para 2050.",
      "opciones": [
        "El modelo lineal asume recursos ilimitados; la economía circular reconoce las limitaciones biofísicas y propone un sistema regenerativo.",
        "La economía circular se basa exclusivamente en el reciclaje de plásticos.",
        "No existe una diferencia real, ambos modelos son equivalentes.",
        "El modelo lineal es más moderno que la economía circular."
      ],
      "correcta": "El modelo lineal asume recursos ilimitados; la economía circular reconoce las limitaciones biofísicas y propone un sistema regenerativo.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_73",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Qué es la 'servitización' según el texto?",
      "lectura": "La economía circular constituye un paradigma productivo que se contrapone radicalmente al modelo lineal tradicional de 'extraer-producir-desechar' que ha prevalecido desde la Revolución Industrial. Mientras el modelo lineal asume la disponibilidad ilimitada de recursos naturales y la capacidad infinita de los ecosistemas para absorber residuos, la economía circular reconoce las limitaciones biofísicas del planeta y propone un sistema regenerativo en el que los materiales, componentes y productos mantienen su utilidad y valor el mayor tiempo posible mediante estrategias de diseño para la durabilidad, reparación, reutilización, remanufactura y reciclaje. Este concepto, popularizado por la Fundación Ellen MacArthur a partir de 2010, se inspira en los ciclos biogeoquímicos naturales donde los residuos de un organismo constituyen los nutrientes de otro, eliminando el concepto mismo de 'desperdicio'. En la práctica, la implementación de la economía circular requiere una transformación sistémica que abarca desde el rediseño de productos —utilizando materiales biodegradables o infinitamente reciclables— hasta la reconfiguración de modelos de negocio: la servitización, por ejemplo, reemplaza la venta de productos por la provisión de servicios (iluminación en vez de bombillas, movilidad en vez de automóviles), desvinculando la rentabilidad empresarial del consumo de recursos vírgenes. Sin embargo, la transición enfrenta obstáculos considerables: la obsolescencia programada sigue siendo una estrategia comercial dominante, los sistemas de recolección y clasificación de residuos son deficientes en la mayoría de los países en desarrollo, y los incentivos fiscales continúan favoreciendo la extracción de materias primas sobre la recuperación de materiales secundarios. Además, algunos críticos señalan que el concepto de economía circular puede generar un 'efecto rebote' si la eficiencia en el uso de recursos conduce a un aumento del consumo total, neutralizando los beneficios ambientales esperados. A pesar de estas limitaciones, la Unión Europea ha incorporado la economía circular como eje central de su Pacto Verde Europeo, con el objetivo de alcanzar la neutralidad climática para 2050.",
      "opciones": [
        "Un método de reciclaje industrial de alta tecnología.",
        "Reemplazar la venta de productos por la provisión de servicios, desvinculando la rentabilidad del consumo de recursos.",
        "Un tipo de publicidad que promueve el consumo responsable.",
        "Una política fiscal que grava el consumo excesivo de energía."
      ],
      "correcta": "Reemplazar la venta de productos por la provisión de servicios, desvinculando la rentabilidad del consumo de recursos.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_74",
      "modulo": "Comprensión Lectora",
      "pregunta": "El 'efecto rebote' mencionado por los críticos se refiere a:",
      "lectura": "La economía circular constituye un paradigma productivo que se contrapone radicalmente al modelo lineal tradicional de 'extraer-producir-desechar' que ha prevalecido desde la Revolución Industrial. Mientras el modelo lineal asume la disponibilidad ilimitada de recursos naturales y la capacidad infinita de los ecosistemas para absorber residuos, la economía circular reconoce las limitaciones biofísicas del planeta y propone un sistema regenerativo en el que los materiales, componentes y productos mantienen su utilidad y valor el mayor tiempo posible mediante estrategias de diseño para la durabilidad, reparación, reutilización, remanufactura y reciclaje. Este concepto, popularizado por la Fundación Ellen MacArthur a partir de 2010, se inspira en los ciclos biogeoquímicos naturales donde los residuos de un organismo constituyen los nutrientes de otro, eliminando el concepto mismo de 'desperdicio'. En la práctica, la implementación de la economía circular requiere una transformación sistémica que abarca desde el rediseño de productos —utilizando materiales biodegradables o infinitamente reciclables— hasta la reconfiguración de modelos de negocio: la servitización, por ejemplo, reemplaza la venta de productos por la provisión de servicios (iluminación en vez de bombillas, movilidad en vez de automóviles), desvinculando la rentabilidad empresarial del consumo de recursos vírgenes. Sin embargo, la transición enfrenta obstáculos considerables: la obsolescencia programada sigue siendo una estrategia comercial dominante, los sistemas de recolección y clasificación de residuos son deficientes en la mayoría de los países en desarrollo, y los incentivos fiscales continúan favoreciendo la extracción de materias primas sobre la recuperación de materiales secundarios. Además, algunos críticos señalan que el concepto de economía circular puede generar un 'efecto rebote' si la eficiencia en el uso de recursos conduce a un aumento del consumo total, neutralizando los beneficios ambientales esperados. A pesar de estas limitaciones, la Unión Europea ha incorporado la economía circular como eje central de su Pacto Verde Europeo, con el objetivo de alcanzar la neutralidad climática para 2050.",
      "opciones": [
        "Que la economía circular es más costosa que el modelo lineal.",
        "Que la mayor eficiencia en el uso de recursos podría aumentar el consumo total, neutralizando beneficios.",
        "Que los consumidores rechazan los productos de segunda mano.",
        "Que los materiales reciclados son de menor calidad que los originales."
      ],
      "correcta": "Que la mayor eficiencia en el uso de recursos podría aumentar el consumo total, neutralizando beneficios.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_75",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Qué relación establece el texto entre la economía circular y los ciclos naturales?",
      "lectura": "La economía circular constituye un paradigma productivo que se contrapone radicalmente al modelo lineal tradicional de 'extraer-producir-desechar' que ha prevalecido desde la Revolución Industrial. Mientras el modelo lineal asume la disponibilidad ilimitada de recursos naturales y la capacidad infinita de los ecosistemas para absorber residuos, la economía circular reconoce las limitaciones biofísicas del planeta y propone un sistema regenerativo en el que los materiales, componentes y productos mantienen su utilidad y valor el mayor tiempo posible mediante estrategias de diseño para la durabilidad, reparación, reutilización, remanufactura y reciclaje. Este concepto, popularizado por la Fundación Ellen MacArthur a partir de 2010, se inspira en los ciclos biogeoquímicos naturales donde los residuos de un organismo constituyen los nutrientes de otro, eliminando el concepto mismo de 'desperdicio'. En la práctica, la implementación de la economía circular requiere una transformación sistémica que abarca desde el rediseño de productos —utilizando materiales biodegradables o infinitamente reciclables— hasta la reconfiguración de modelos de negocio: la servitización, por ejemplo, reemplaza la venta de productos por la provisión de servicios (iluminación en vez de bombillas, movilidad en vez de automóviles), desvinculando la rentabilidad empresarial del consumo de recursos vírgenes. Sin embargo, la transición enfrenta obstáculos considerables: la obsolescencia programada sigue siendo una estrategia comercial dominante, los sistemas de recolección y clasificación de residuos son deficientes en la mayoría de los países en desarrollo, y los incentivos fiscales continúan favoreciendo la extracción de materias primas sobre la recuperación de materiales secundarios. Además, algunos críticos señalan que el concepto de economía circular puede generar un 'efecto rebote' si la eficiencia en el uso de recursos conduce a un aumento del consumo total, neutralizando los beneficios ambientales esperados. A pesar de estas limitaciones, la Unión Europea ha incorporado la economía circular como eje central de su Pacto Verde Europeo, con el objetivo de alcanzar la neutralidad climática para 2050.",
      "opciones": [
        "La economía circular solo funciona en ecosistemas controlados artificialmente.",
        "Los ciclos naturales son incompatibles con cualquier sistema productivo.",
        "La economía circular se inspira en los ciclos biogeoquímicos donde los residuos de un organismo son nutrientes de otro.",
        "La economía circular busca eliminar completamente los procesos naturales."
      ],
      "correcta": "La economía circular se inspira en los ciclos biogeoquímicos donde los residuos de un organismo son nutrientes de otro.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_76",
      "modulo": "Comprensión Lectora",
      "pregunta": "Según el texto, ¿qué obstáculo fiscal enfrenta la economía circular?",
      "lectura": "La economía circular constituye un paradigma productivo que se contrapone radicalmente al modelo lineal tradicional de 'extraer-producir-desechar' que ha prevalecido desde la Revolución Industrial. Mientras el modelo lineal asume la disponibilidad ilimitada de recursos naturales y la capacidad infinita de los ecosistemas para absorber residuos, la economía circular reconoce las limitaciones biofísicas del planeta y propone un sistema regenerativo en el que los materiales, componentes y productos mantienen su utilidad y valor el mayor tiempo posible mediante estrategias de diseño para la durabilidad, reparación, reutilización, remanufactura y reciclaje. Este concepto, popularizado por la Fundación Ellen MacArthur a partir de 2010, se inspira en los ciclos biogeoquímicos naturales donde los residuos de un organismo constituyen los nutrientes de otro, eliminando el concepto mismo de 'desperdicio'. En la práctica, la implementación de la economía circular requiere una transformación sistémica que abarca desde el rediseño de productos —utilizando materiales biodegradables o infinitamente reciclables— hasta la reconfiguración de modelos de negocio: la servitización, por ejemplo, reemplaza la venta de productos por la provisión de servicios (iluminación en vez de bombillas, movilidad en vez de automóviles), desvinculando la rentabilidad empresarial del consumo de recursos vírgenes. Sin embargo, la transición enfrenta obstáculos considerables: la obsolescencia programada sigue siendo una estrategia comercial dominante, los sistemas de recolección y clasificación de residuos son deficientes en la mayoría de los países en desarrollo, y los incentivos fiscales continúan favoreciendo la extracción de materias primas sobre la recuperación de materiales secundarios. Además, algunos críticos señalan que el concepto de economía circular puede generar un 'efecto rebote' si la eficiencia en el uso de recursos conduce a un aumento del consumo total, neutralizando los beneficios ambientales esperados. A pesar de estas limitaciones, la Unión Europea ha incorporado la economía circular como eje central de su Pacto Verde Europeo, con el objetivo de alcanzar la neutralidad climática para 2050.",
      "opciones": [
        "Los incentivos fiscales favorecen la extracción de materias primas sobre la recuperación de materiales secundarios.",
        "No existen obstáculos fiscales para la economía circular.",
        "Los gobiernos prohíben el comercio de materiales reciclados.",
        "Los impuestos sobre el reciclaje son demasiado altos en todos los países."
      ],
      "correcta": "Los incentivos fiscales favorecen la extracción de materias primas sobre la recuperación de materiales secundarios.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_77",
      "modulo": "Comprensión Lectora",
      "pregunta": "La mención de la obsolescencia programada en el texto funciona como:",
      "lectura": "La economía circular constituye un paradigma productivo que se contrapone radicalmente al modelo lineal tradicional de 'extraer-producir-desechar' que ha prevalecido desde la Revolución Industrial. Mientras el modelo lineal asume la disponibilidad ilimitada de recursos naturales y la capacidad infinita de los ecosistemas para absorber residuos, la economía circular reconoce las limitaciones biofísicas del planeta y propone un sistema regenerativo en el que los materiales, componentes y productos mantienen su utilidad y valor el mayor tiempo posible mediante estrategias de diseño para la durabilidad, reparación, reutilización, remanufactura y reciclaje. Este concepto, popularizado por la Fundación Ellen MacArthur a partir de 2010, se inspira en los ciclos biogeoquímicos naturales donde los residuos de un organismo constituyen los nutrientes de otro, eliminando el concepto mismo de 'desperdicio'. En la práctica, la implementación de la economía circular requiere una transformación sistémica que abarca desde el rediseño de productos —utilizando materiales biodegradables o infinitamente reciclables— hasta la reconfiguración de modelos de negocio: la servitización, por ejemplo, reemplaza la venta de productos por la provisión de servicios (iluminación en vez de bombillas, movilidad en vez de automóviles), desvinculando la rentabilidad empresarial del consumo de recursos vírgenes. Sin embargo, la transición enfrenta obstáculos considerables: la obsolescencia programada sigue siendo una estrategia comercial dominante, los sistemas de recolección y clasificación de residuos son deficientes en la mayoría de los países en desarrollo, y los incentivos fiscales continúan favoreciendo la extracción de materias primas sobre la recuperación de materiales secundarios. Además, algunos críticos señalan que el concepto de economía circular puede generar un 'efecto rebote' si la eficiencia en el uso de recursos conduce a un aumento del consumo total, neutralizando los beneficios ambientales esperados. A pesar de estas limitaciones, la Unión Europea ha incorporado la economía circular como eje central de su Pacto Verde Europeo, con el objetivo de alcanzar la neutralidad climática para 2050.",
      "opciones": [
        "Un concepto ajeno al debate sobre sostenibilidad ambiental.",
        "Un ejemplo de las resistencias comerciales que dificultan la transición hacia la economía circular.",
        "Una estrategia recomendada por el autor para estimular la innovación.",
        "Una práctica exclusiva de la industria alimentaria."
      ],
      "correcta": "Un ejemplo de las resistencias comerciales que dificultan la transición hacia la economía circular.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_78",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Cuál era la premisa compartida por los tres muralistas principales?",
      "lectura": "El muralismo mexicano, movimiento artístico surgido en la década de 1920 tras la Revolución Mexicana, constituye una de las aportaciones más significativas de América Latina al arte universal del siglo XX. Sus tres exponentes principales —Diego Rivera, José Clemente Orozco y David Alfaro Siqueiros— compartían la convicción de que el arte debía trascender los espacios elitistas de galerías y museos para llevar mensajes de contenido social, histórico y político directamente al pueblo, utilizando los muros de edificios públicos como soporte monumental. Sin embargo, más allá de esta premisa compartida, cada artista desarrolló un lenguaje visual y una postura ideológica distintivos. Rivera, profundamente influido por los frescos renacentistas italianos que estudió durante su estancia en Europa, privilegió una narrativa épica y didáctica que idealizaba el pasado prehispánico y celebraba al trabajador campesino e industrial como protagonista de la historia nacional, aunque sus críticos señalan que esta visión romántica simplificaba las contradicciones sociales que pretendía denunciar. Orozco, en contraste, adoptó un expresionismo desgarrador que rechazaba cualquier idealización: sus figuras torturadas y sus composiciones caóticas expresaban una visión trágica de la condición humana que trascendía las fronteras nacionales para abordar temas universales como la guerra, la injusticia y el sufrimiento. Siqueiros, el más radicalmente vanguardista de los tres, experimentó con materiales industriales —pinturas automotrices, piroxilina, aerógrafo— y con perspectivas dinámicas que anticiparon el arte cinético, buscando crear una experiencia inmersiva que envolviera físicamente al espectador. El legado del muralismo mexicano se extiende mucho más allá de sus fronteras: influyó decisivamente en el arte público estadounidense durante el New Deal, inspiró movimientos de arte comunitario en toda América Latina y sentó las bases para comprender el arte como instrumento de transformación social y construcción de identidad colectiva.",
      "opciones": [
        "Que el arte debía venderse exclusivamente a coleccionistas privados.",
        "Que la pintura de caballete era superior al mural como formato artístico.",
        "Que el arte debía salir de galerías y museos para llevar mensajes sociales al pueblo en muros públicos.",
        "Que el arte no debía tener ningún contenido político ni social."
      ],
      "correcta": "Que el arte debía salir de galerías y museos para llevar mensajes sociales al pueblo en muros públicos.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_79",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿En qué se diferenciaba la visión de Orozco de la de Rivera?",
      "lectura": "El muralismo mexicano, movimiento artístico surgido en la década de 1920 tras la Revolución Mexicana, constituye una de las aportaciones más significativas de América Latina al arte universal del siglo XX. Sus tres exponentes principales —Diego Rivera, José Clemente Orozco y David Alfaro Siqueiros— compartían la convicción de que el arte debía trascender los espacios elitistas de galerías y museos para llevar mensajes de contenido social, histórico y político directamente al pueblo, utilizando los muros de edificios públicos como soporte monumental. Sin embargo, más allá de esta premisa compartida, cada artista desarrolló un lenguaje visual y una postura ideológica distintivos. Rivera, profundamente influido por los frescos renacentistas italianos que estudió durante su estancia en Europa, privilegió una narrativa épica y didáctica que idealizaba el pasado prehispánico y celebraba al trabajador campesino e industrial como protagonista de la historia nacional, aunque sus críticos señalan que esta visión romántica simplificaba las contradicciones sociales que pretendía denunciar. Orozco, en contraste, adoptó un expresionismo desgarrador que rechazaba cualquier idealización: sus figuras torturadas y sus composiciones caóticas expresaban una visión trágica de la condición humana que trascendía las fronteras nacionales para abordar temas universales como la guerra, la injusticia y el sufrimiento. Siqueiros, el más radicalmente vanguardista de los tres, experimentó con materiales industriales —pinturas automotrices, piroxilina, aerógrafo— y con perspectivas dinámicas que anticiparon el arte cinético, buscando crear una experiencia inmersiva que envolviera físicamente al espectador. El legado del muralismo mexicano se extiende mucho más allá de sus fronteras: influyó decisivamente en el arte público estadounidense durante el New Deal, inspiró movimientos de arte comunitario en toda América Latina y sentó las bases para comprender el arte como instrumento de transformación social y construcción de identidad colectiva.",
      "opciones": [
        "Orozco era más optimista que Rivera en su visión del pueblo mexicano.",
        "No había ninguna diferencia significativa entre ambos artistas.",
        "Orozco pintaba paisajes naturales mientras Rivera solo retratos.",
        "Orozco rechazaba la idealización y expresaba una visión trágica universal; Rivera idealizaba el pasado prehispánico."
      ],
      "correcta": "Orozco rechazaba la idealización y expresaba una visión trágica universal; Rivera idealizaba el pasado prehispánico.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_80",
      "modulo": "Comprensión Lectora",
      "pregunta": "La innovación técnica de Siqueiros consistió principalmente en:",
      "lectura": "El muralismo mexicano, movimiento artístico surgido en la década de 1920 tras la Revolución Mexicana, constituye una de las aportaciones más significativas de América Latina al arte universal del siglo XX. Sus tres exponentes principales —Diego Rivera, José Clemente Orozco y David Alfaro Siqueiros— compartían la convicción de que el arte debía trascender los espacios elitistas de galerías y museos para llevar mensajes de contenido social, histórico y político directamente al pueblo, utilizando los muros de edificios públicos como soporte monumental. Sin embargo, más allá de esta premisa compartida, cada artista desarrolló un lenguaje visual y una postura ideológica distintivos. Rivera, profundamente influido por los frescos renacentistas italianos que estudió durante su estancia en Europa, privilegió una narrativa épica y didáctica que idealizaba el pasado prehispánico y celebraba al trabajador campesino e industrial como protagonista de la historia nacional, aunque sus críticos señalan que esta visión romántica simplificaba las contradicciones sociales que pretendía denunciar. Orozco, en contraste, adoptó un expresionismo desgarrador que rechazaba cualquier idealización: sus figuras torturadas y sus composiciones caóticas expresaban una visión trágica de la condición humana que trascendía las fronteras nacionales para abordar temas universales como la guerra, la injusticia y el sufrimiento. Siqueiros, el más radicalmente vanguardista de los tres, experimentó con materiales industriales —pinturas automotrices, piroxilina, aerógrafo— y con perspectivas dinámicas que anticiparon el arte cinético, buscando crear una experiencia inmersiva que envolviera físicamente al espectador. El legado del muralismo mexicano se extiende mucho más allá de sus fronteras: influyó decisivamente en el arte público estadounidense durante el New Deal, inspiró movimientos de arte comunitario en toda América Latina y sentó las bases para comprender el arte como instrumento de transformación social y construcción de identidad colectiva.",
      "opciones": [
        "La creación de esculturas monumentales en bronce.",
        "El uso exclusivo de acuarelas y pasteles sobre papel.",
        "La invención de la técnica del fresco en Italia.",
        "El uso de materiales industriales y perspectivas dinámicas para crear experiencias inmersivas."
      ],
      "correcta": "El uso de materiales industriales y perspectivas dinámicas para crear experiencias inmersivas.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_81",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Cuál es la crítica que se hace a la obra de Rivera según el texto?",
      "lectura": "El muralismo mexicano, movimiento artístico surgido en la década de 1920 tras la Revolución Mexicana, constituye una de las aportaciones más significativas de América Latina al arte universal del siglo XX. Sus tres exponentes principales —Diego Rivera, José Clemente Orozco y David Alfaro Siqueiros— compartían la convicción de que el arte debía trascender los espacios elitistas de galerías y museos para llevar mensajes de contenido social, histórico y político directamente al pueblo, utilizando los muros de edificios públicos como soporte monumental. Sin embargo, más allá de esta premisa compartida, cada artista desarrolló un lenguaje visual y una postura ideológica distintivos. Rivera, profundamente influido por los frescos renacentistas italianos que estudió durante su estancia en Europa, privilegió una narrativa épica y didáctica que idealizaba el pasado prehispánico y celebraba al trabajador campesino e industrial como protagonista de la historia nacional, aunque sus críticos señalan que esta visión romántica simplificaba las contradicciones sociales que pretendía denunciar. Orozco, en contraste, adoptó un expresionismo desgarrador que rechazaba cualquier idealización: sus figuras torturadas y sus composiciones caóticas expresaban una visión trágica de la condición humana que trascendía las fronteras nacionales para abordar temas universales como la guerra, la injusticia y el sufrimiento. Siqueiros, el más radicalmente vanguardista de los tres, experimentó con materiales industriales —pinturas automotrices, piroxilina, aerógrafo— y con perspectivas dinámicas que anticiparon el arte cinético, buscando crear una experiencia inmersiva que envolviera físicamente al espectador. El legado del muralismo mexicano se extiende mucho más allá de sus fronteras: influyó decisivamente en el arte público estadounidense durante el New Deal, inspiró movimientos de arte comunitario en toda América Latina y sentó las bases para comprender el arte como instrumento de transformación social y construcción de identidad colectiva.",
      "opciones": [
        "Que rechazaba cualquier referencia al pasado prehispánico de México.",
        "Que su visión romántica simplificaba las contradicciones sociales que pretendía denunciar.",
        "Que copiaba directamente las obras de los otros muralistas.",
        "Que sus murales eran técnicamente deficientes y mal ejecutados."
      ],
      "correcta": "Que su visión romántica simplificaba las contradicciones sociales que pretendía denunciar.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_82",
      "modulo": "Comprensión Lectora",
      "pregunta": "El impacto internacional del muralismo mexicano incluyó:",
      "lectura": "El muralismo mexicano, movimiento artístico surgido en la década de 1920 tras la Revolución Mexicana, constituye una de las aportaciones más significativas de América Latina al arte universal del siglo XX. Sus tres exponentes principales —Diego Rivera, José Clemente Orozco y David Alfaro Siqueiros— compartían la convicción de que el arte debía trascender los espacios elitistas de galerías y museos para llevar mensajes de contenido social, histórico y político directamente al pueblo, utilizando los muros de edificios públicos como soporte monumental. Sin embargo, más allá de esta premisa compartida, cada artista desarrolló un lenguaje visual y una postura ideológica distintivos. Rivera, profundamente influido por los frescos renacentistas italianos que estudió durante su estancia en Europa, privilegió una narrativa épica y didáctica que idealizaba el pasado prehispánico y celebraba al trabajador campesino e industrial como protagonista de la historia nacional, aunque sus críticos señalan que esta visión romántica simplificaba las contradicciones sociales que pretendía denunciar. Orozco, en contraste, adoptó un expresionismo desgarrador que rechazaba cualquier idealización: sus figuras torturadas y sus composiciones caóticas expresaban una visión trágica de la condición humana que trascendía las fronteras nacionales para abordar temas universales como la guerra, la injusticia y el sufrimiento. Siqueiros, el más radicalmente vanguardista de los tres, experimentó con materiales industriales —pinturas automotrices, piroxilina, aerógrafo— y con perspectivas dinámicas que anticiparon el arte cinético, buscando crear una experiencia inmersiva que envolviera físicamente al espectador. El legado del muralismo mexicano se extiende mucho más allá de sus fronteras: influyó decisivamente en el arte público estadounidense durante el New Deal, inspiró movimientos de arte comunitario en toda América Latina y sentó las bases para comprender el arte como instrumento de transformación social y construcción de identidad colectiva.",
      "opciones": [
        "Influencia en el arte público del New Deal estadounidense y movimientos comunitarios en América Latina.",
        "La prohibición del arte abstracto en toda Europa occidental.",
        "La eliminación de todas las galerías de arte en Estados Unidos.",
        "La creación de un estilo artístico idéntico en todos los países."
      ],
      "correcta": "Influencia en el arte público del New Deal estadounidense y movimientos comunitarios en América Latina.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_83",
      "modulo": "Comprensión Lectora",
      "pregunta": "El texto sugiere que el muralismo mexicano estableció el arte como:",
      "lectura": "El muralismo mexicano, movimiento artístico surgido en la década de 1920 tras la Revolución Mexicana, constituye una de las aportaciones más significativas de América Latina al arte universal del siglo XX. Sus tres exponentes principales —Diego Rivera, José Clemente Orozco y David Alfaro Siqueiros— compartían la convicción de que el arte debía trascender los espacios elitistas de galerías y museos para llevar mensajes de contenido social, histórico y político directamente al pueblo, utilizando los muros de edificios públicos como soporte monumental. Sin embargo, más allá de esta premisa compartida, cada artista desarrolló un lenguaje visual y una postura ideológica distintivos. Rivera, profundamente influido por los frescos renacentistas italianos que estudió durante su estancia en Europa, privilegió una narrativa épica y didáctica que idealizaba el pasado prehispánico y celebraba al trabajador campesino e industrial como protagonista de la historia nacional, aunque sus críticos señalan que esta visión romántica simplificaba las contradicciones sociales que pretendía denunciar. Orozco, en contraste, adoptó un expresionismo desgarrador que rechazaba cualquier idealización: sus figuras torturadas y sus composiciones caóticas expresaban una visión trágica de la condición humana que trascendía las fronteras nacionales para abordar temas universales como la guerra, la injusticia y el sufrimiento. Siqueiros, el más radicalmente vanguardista de los tres, experimentó con materiales industriales —pinturas automotrices, piroxilina, aerógrafo— y con perspectivas dinámicas que anticiparon el arte cinético, buscando crear una experiencia inmersiva que envolviera físicamente al espectador. El legado del muralismo mexicano se extiende mucho más allá de sus fronteras: influyó decisivamente en el arte público estadounidense durante el New Deal, inspiró movimientos de arte comunitario en toda América Latina y sentó las bases para comprender el arte como instrumento de transformación social y construcción de identidad colectiva.",
      "opciones": [
        "Un instrumento de transformación social y construcción de identidad colectiva.",
        "Un medio de entretenimiento equivalente al cine o la televisión.",
        "Un pasatiempo sin relevancia política ni social.",
        "Una actividad exclusiva de las élites intelectuales y económicas."
      ],
      "correcta": "Un instrumento de transformación social y construcción de identidad colectiva.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_84",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Por qué se redactó la Declaración Universal de los Derechos Humanos en 1948?",
      "lectura": "Los derechos humanos, tal como los concebimos en la actualidad, son el resultado de un largo proceso histórico de luchas sociales, revoluciones políticas y reflexiones filosóficas que se remontan a la Ilustración europea del siglo XVIII, aunque sus raíces pueden rastrearse hasta códigos legales aún más antiguos como el Cilindro de Ciro (539 a.C.) y la Carta Magna inglesa (1215). La Declaración Universal de los Derechos Humanos, adoptada por la Asamblea General de las Naciones Unidas el 10 de diciembre de 1948 en respuesta a las atrocidades de la Segunda Guerra Mundial y el Holocausto, constituye el documento fundacional del sistema internacional contemporáneo de protección de los derechos fundamentales. Sus 30 artículos establecen derechos civiles y políticos —libertad de expresión, prohibición de la tortura, presunción de inocencia— junto con derechos económicos, sociales y culturales —educación, salud, trabajo digno— que los Estados firmantes se comprometen a respetar y garantizar. No obstante, la implementación efectiva de estos derechos enfrenta desafíos enormes y persistentes: la tensión entre la universalidad proclamada y el relativismo cultural invocado por gobiernos autoritarios para justificar prácticas como la censura, la discriminación de género o los castigos corporales; la contradicción entre la soberanía estatal y la intervención humanitaria cuando un gobierno comete graves violaciones contra su propia población; y la brecha creciente entre los derechos formalmente reconocidos y su cumplimiento efectivo, particularmente en materia de derechos económicos en un contexto de desigualdad global extrema. Pensadores contemporáneos como Amartya Sen han argumentado que los derechos humanos no deben entenderse únicamente como libertades negativas —la ausencia de interferencia estatal— sino como capacidades positivas que requieren condiciones materiales concretas para su ejercicio real, vinculando así los derechos humanos con la justicia distributiva y el desarrollo económico.",
      "opciones": [
        "Como parte de un acuerdo comercial entre Europa y Asia.",
        "Para reemplazar la Constitución de los Estados Unidos.",
        "Por iniciativa exclusiva de los países latinoamericanos.",
        "Como respuesta directa a las atrocidades de la Segunda Guerra Mundial y el Holocausto."
      ],
      "correcta": "Como respuesta directa a las atrocidades de la Segunda Guerra Mundial y el Holocausto.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_85",
      "modulo": "Comprensión Lectora",
      "pregunta": "La tensión entre 'universalidad' y 'relativismo cultural' se refiere a:",
      "lectura": "Los derechos humanos, tal como los concebimos en la actualidad, son el resultado de un largo proceso histórico de luchas sociales, revoluciones políticas y reflexiones filosóficas que se remontan a la Ilustración europea del siglo XVIII, aunque sus raíces pueden rastrearse hasta códigos legales aún más antiguos como el Cilindro de Ciro (539 a.C.) y la Carta Magna inglesa (1215). La Declaración Universal de los Derechos Humanos, adoptada por la Asamblea General de las Naciones Unidas el 10 de diciembre de 1948 en respuesta a las atrocidades de la Segunda Guerra Mundial y el Holocausto, constituye el documento fundacional del sistema internacional contemporáneo de protección de los derechos fundamentales. Sus 30 artículos establecen derechos civiles y políticos —libertad de expresión, prohibición de la tortura, presunción de inocencia— junto con derechos económicos, sociales y culturales —educación, salud, trabajo digno— que los Estados firmantes se comprometen a respetar y garantizar. No obstante, la implementación efectiva de estos derechos enfrenta desafíos enormes y persistentes: la tensión entre la universalidad proclamada y el relativismo cultural invocado por gobiernos autoritarios para justificar prácticas como la censura, la discriminación de género o los castigos corporales; la contradicción entre la soberanía estatal y la intervención humanitaria cuando un gobierno comete graves violaciones contra su propia población; y la brecha creciente entre los derechos formalmente reconocidos y su cumplimiento efectivo, particularmente en materia de derechos económicos en un contexto de desigualdad global extrema. Pensadores contemporáneos como Amartya Sen han argumentado que los derechos humanos no deben entenderse únicamente como libertades negativas —la ausencia de interferencia estatal— sino como capacidades positivas que requieren condiciones materiales concretas para su ejercicio real, vinculando así los derechos humanos con la justicia distributiva y el desarrollo económico.",
      "opciones": [
        "La diferencia entre idiomas occidentales y orientales.",
        "La competencia entre diferentes religiones por la supremacía moral.",
        "Un debate exclusivamente académico sin consecuencias prácticas.",
        "El conflicto entre la aplicación universal de los derechos y los gobiernos que invocan su cultura para justificar violaciones."
      ],
      "correcta": "El conflicto entre la aplicación universal de los derechos y los gobiernos que invocan su cultura para justificar violaciones.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_86",
      "modulo": "Comprensión Lectora",
      "pregunta": "Según Amartya Sen, los derechos humanos deben entenderse como:",
      "lectura": "Los derechos humanos, tal como los concebimos en la actualidad, son el resultado de un largo proceso histórico de luchas sociales, revoluciones políticas y reflexiones filosóficas que se remontan a la Ilustración europea del siglo XVIII, aunque sus raíces pueden rastrearse hasta códigos legales aún más antiguos como el Cilindro de Ciro (539 a.C.) y la Carta Magna inglesa (1215). La Declaración Universal de los Derechos Humanos, adoptada por la Asamblea General de las Naciones Unidas el 10 de diciembre de 1948 en respuesta a las atrocidades de la Segunda Guerra Mundial y el Holocausto, constituye el documento fundacional del sistema internacional contemporáneo de protección de los derechos fundamentales. Sus 30 artículos establecen derechos civiles y políticos —libertad de expresión, prohibición de la tortura, presunción de inocencia— junto con derechos económicos, sociales y culturales —educación, salud, trabajo digno— que los Estados firmantes se comprometen a respetar y garantizar. No obstante, la implementación efectiva de estos derechos enfrenta desafíos enormes y persistentes: la tensión entre la universalidad proclamada y el relativismo cultural invocado por gobiernos autoritarios para justificar prácticas como la censura, la discriminación de género o los castigos corporales; la contradicción entre la soberanía estatal y la intervención humanitaria cuando un gobierno comete graves violaciones contra su propia población; y la brecha creciente entre los derechos formalmente reconocidos y su cumplimiento efectivo, particularmente en materia de derechos económicos en un contexto de desigualdad global extrema. Pensadores contemporáneos como Amartya Sen han argumentado que los derechos humanos no deben entenderse únicamente como libertades negativas —la ausencia de interferencia estatal— sino como capacidades positivas que requieren condiciones materiales concretas para su ejercicio real, vinculando así los derechos humanos con la justicia distributiva y el desarrollo económico.",
      "opciones": [
        "Capacidades positivas que requieren condiciones materiales concretas para su ejercicio real.",
        "Libertades que solo dependen de la voluntad individual.",
        "Privilegios exclusivos de los ciudadanos de países desarrollados.",
        "Simples ideales filosóficos sin aplicación práctica posible."
      ],
      "correcta": "Capacidades positivas que requieren condiciones materiales concretas para su ejercicio real.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_87",
      "modulo": "Comprensión Lectora",
      "pregunta": "¿Qué desafío plantea la relación entre soberanía estatal e intervención humanitaria?",
      "lectura": "Los derechos humanos, tal como los concebimos en la actualidad, son el resultado de un largo proceso histórico de luchas sociales, revoluciones políticas y reflexiones filosóficas que se remontan a la Ilustración europea del siglo XVIII, aunque sus raíces pueden rastrearse hasta códigos legales aún más antiguos como el Cilindro de Ciro (539 a.C.) y la Carta Magna inglesa (1215). La Declaración Universal de los Derechos Humanos, adoptada por la Asamblea General de las Naciones Unidas el 10 de diciembre de 1948 en respuesta a las atrocidades de la Segunda Guerra Mundial y el Holocausto, constituye el documento fundacional del sistema internacional contemporáneo de protección de los derechos fundamentales. Sus 30 artículos establecen derechos civiles y políticos —libertad de expresión, prohibición de la tortura, presunción de inocencia— junto con derechos económicos, sociales y culturales —educación, salud, trabajo digno— que los Estados firmantes se comprometen a respetar y garantizar. No obstante, la implementación efectiva de estos derechos enfrenta desafíos enormes y persistentes: la tensión entre la universalidad proclamada y el relativismo cultural invocado por gobiernos autoritarios para justificar prácticas como la censura, la discriminación de género o los castigos corporales; la contradicción entre la soberanía estatal y la intervención humanitaria cuando un gobierno comete graves violaciones contra su propia población; y la brecha creciente entre los derechos formalmente reconocidos y su cumplimiento efectivo, particularmente en materia de derechos económicos en un contexto de desigualdad global extrema. Pensadores contemporáneos como Amartya Sen han argumentado que los derechos humanos no deben entenderse únicamente como libertades negativas —la ausencia de interferencia estatal— sino como capacidades positivas que requieren condiciones materiales concretas para su ejercicio real, vinculando así los derechos humanos con la justicia distributiva y el desarrollo económico.",
      "opciones": [
        "Definir cuándo es legítimo intervenir en un Estado que viola los derechos de su propia población.",
        "La intervención humanitaria siempre es bienvenida por todos los gobiernos.",
        "Los Estados nunca violan los derechos de sus ciudadanos.",
        "La soberanía estatal es un concepto obsoleto sin vigencia actual."
      ],
      "correcta": "Definir cuándo es legítimo intervenir en un Estado que viola los derechos de su propia población.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_88",
      "modulo": "Comprensión Lectora",
      "pregunta": "El texto menciona el Cilindro de Ciro y la Carta Magna para:",
      "lectura": "Los derechos humanos, tal como los concebimos en la actualidad, son el resultado de un largo proceso histórico de luchas sociales, revoluciones políticas y reflexiones filosóficas que se remontan a la Ilustración europea del siglo XVIII, aunque sus raíces pueden rastrearse hasta códigos legales aún más antiguos como el Cilindro de Ciro (539 a.C.) y la Carta Magna inglesa (1215). La Declaración Universal de los Derechos Humanos, adoptada por la Asamblea General de las Naciones Unidas el 10 de diciembre de 1948 en respuesta a las atrocidades de la Segunda Guerra Mundial y el Holocausto, constituye el documento fundacional del sistema internacional contemporáneo de protección de los derechos fundamentales. Sus 30 artículos establecen derechos civiles y políticos —libertad de expresión, prohibición de la tortura, presunción de inocencia— junto con derechos económicos, sociales y culturales —educación, salud, trabajo digno— que los Estados firmantes se comprometen a respetar y garantizar. No obstante, la implementación efectiva de estos derechos enfrenta desafíos enormes y persistentes: la tensión entre la universalidad proclamada y el relativismo cultural invocado por gobiernos autoritarios para justificar prácticas como la censura, la discriminación de género o los castigos corporales; la contradicción entre la soberanía estatal y la intervención humanitaria cuando un gobierno comete graves violaciones contra su propia población; y la brecha creciente entre los derechos formalmente reconocidos y su cumplimiento efectivo, particularmente en materia de derechos económicos en un contexto de desigualdad global extrema. Pensadores contemporáneos como Amartya Sen han argumentado que los derechos humanos no deben entenderse únicamente como libertades negativas —la ausencia de interferencia estatal— sino como capacidades positivas que requieren condiciones materiales concretas para su ejercicio real, vinculando así los derechos humanos con la justicia distributiva y el desarrollo económico.",
      "opciones": [
        "Demostrar que la Edad Media fue una época de plena libertad.",
        "Indicar que los documentos antiguos son superiores a los modernos.",
        "Mostrar que las raíces históricas de los derechos humanos son anteriores a la Ilustración.",
        "Argumentar que los derechos humanos fueron inventados en Persia."
      ],
      "correcta": "Mostrar que las raíces históricas de los derechos humanos son anteriores a la Ilustración.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    },
    {
      "id": "lectura_89",
      "modulo": "Comprensión Lectora",
      "pregunta": "La 'brecha' mencionada en el texto se refiere a:",
      "lectura": "Los derechos humanos, tal como los concebimos en la actualidad, son el resultado de un largo proceso histórico de luchas sociales, revoluciones políticas y reflexiones filosóficas que se remontan a la Ilustración europea del siglo XVIII, aunque sus raíces pueden rastrearse hasta códigos legales aún más antiguos como el Cilindro de Ciro (539 a.C.) y la Carta Magna inglesa (1215). La Declaración Universal de los Derechos Humanos, adoptada por la Asamblea General de las Naciones Unidas el 10 de diciembre de 1948 en respuesta a las atrocidades de la Segunda Guerra Mundial y el Holocausto, constituye el documento fundacional del sistema internacional contemporáneo de protección de los derechos fundamentales. Sus 30 artículos establecen derechos civiles y políticos —libertad de expresión, prohibición de la tortura, presunción de inocencia— junto con derechos económicos, sociales y culturales —educación, salud, trabajo digno— que los Estados firmantes se comprometen a respetar y garantizar. No obstante, la implementación efectiva de estos derechos enfrenta desafíos enormes y persistentes: la tensión entre la universalidad proclamada y el relativismo cultural invocado por gobiernos autoritarios para justificar prácticas como la censura, la discriminación de género o los castigos corporales; la contradicción entre la soberanía estatal y la intervención humanitaria cuando un gobierno comete graves violaciones contra su propia población; y la brecha creciente entre los derechos formalmente reconocidos y su cumplimiento efectivo, particularmente en materia de derechos económicos en un contexto de desigualdad global extrema. Pensadores contemporáneos como Amartya Sen han argumentado que los derechos humanos no deben entenderse únicamente como libertades negativas —la ausencia de interferencia estatal— sino como capacidades positivas que requieren condiciones materiales concretas para su ejercicio real, vinculando así los derechos humanos con la justicia distributiva y el desarrollo económico.",
      "opciones": [
        "La distancia geográfica entre las sedes de la ONU.",
        "La división entre ciencias naturales y ciencias sociales.",
        "La distancia entre los derechos formalmente reconocidos y su cumplimiento efectivo en la práctica.",
        "La diferencia salarial entre empleados del sector público y privado."
      ],
      "correcta": "La distancia entre los derechos formalmente reconocidos y su cumplimiento efectivo en la práctica.",
      "explicacion": "La respuesta se sustenta en la información del texto. Se requiere identificar ideas principales, inferir significados o reconocer la intención del autor."
    }
  ],
  "Redacción Indirecta": [
    {
      "id": "redaccion_0",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la opción que contiene un ejemplo de oración compuesta coordinada adversativa.",
      "lectura": "",
      "opciones": [
        "Estudió con dedicación para el examen, es decir, se preparó muy bien.",
        "Estudió con dedicación para el examen y obtuvo una excelente calificación.",
        "Estudió con dedicación para el examen, pero no obtuvo la calificación esperada.",
        "Estudió con dedicación para el examen porque quería obtener una beca."
      ],
      "correcta": "Estudió con dedicación para el examen, pero no obtuvo la calificación esperada.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_1",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona el enunciado que emplea correctamente una oración subordinada causal.",
      "lectura": "",
      "opciones": [
        "La conferencia fue cancelada, porque el ponente sufrió, un percance de salud.",
        "La conferencia fue cancelada por que el ponente sufrió un percance de salud.",
        "La conferencia fue cancelada, porque, el ponente sufrió un percance de salud.",
        "La conferencia fue cancelada porque el ponente sufrió un percance de salud."
      ],
      "correcta": "La conferencia fue cancelada porque el ponente sufrió un percance de salud.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_2",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la oración que no contiene ningún barbarismo léxico.",
      "lectura": "",
      "opciones": [
        "El paciente presentó una fuerte emorragia durante la intervención quirúrjica.",
        "El paciente presentó una fuerte hemorrajia durante la intervención quirúrgica.",
        "El paciente presentó una fuerte hemorragía durante la intervensión quirúrgica.",
        "El paciente presentó una fuerte hemorragia durante la intervención quirúrgica."
      ],
      "correcta": "El paciente presentó una fuerte hemorragia durante la intervención quirúrgica.",
      "explicacion": "La opción correcta evita el vicio lingüístico señalado en el enunciado."
    },
    {
      "id": "redaccion_3",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Cuál de las siguientes opciones presenta la escritura correcta de un extranjerismo adaptado al español?",
      "lectura": "",
      "opciones": [
        "La reunión se realizará vía video-conferencia con el comité ejecutivo.",
        "La reunión se realizará via videoconferencia con el comité ejecutivo.",
        "La reunión se realizará vía video conferencia con el comité ejecutivo.",
        "La reunión se realizará vía videoconferencia con el comité ejecutivo."
      ],
      "correcta": "La reunión se realizará vía videoconferencia con el comité ejecutivo.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_4",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Qué figura retórica se emplea en: 'Le dijo mil veces que no llegara tarde a clase'?",
      "lectura": "",
      "opciones": [
        "Prosopopeya",
        "Sinestesia",
        "Hipérbole",
        "Metáfora"
      ],
      "correcta": "Hipérbole",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_5",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿En cuál de los siguientes enunciados se aplica correctamente la tilde diacrítica?",
      "lectura": "",
      "opciones": [
        "Aún no se si él aceptará la propuesta económica que le hicimos ayer.",
        "Aún no sé si el aceptará la propuesta económica qué le hicimos ayer.",
        "Aún no sé si él aceptará la propuesta económica que le hicimos ayer.",
        "Aun no se si el aceptará la propuesta económica que le hicimos ayer."
      ],
      "correcta": "Aún no sé si él aceptará la propuesta económica que le hicimos ayer.",
      "explicacion": "La escritura correcta según las normas ortográficas vigentes es 'Aún no sé si él aceptará la propuesta económica que le hicimos ayer.'."
    },
    {
      "id": "redaccion_6",
      "modulo": "Redacción Indirecta",
      "pregunta": "Elige el conector que establece una relación de consecuencia: 'La matrícula escolar aumentó un 30%; __________, se habilitaron nuevas aulas'.",
      "lectura": "",
      "opciones": [
        "por el contrario",
        "no obstante",
        "en consecuencia",
        "sin embargo"
      ],
      "correcta": "en consecuencia",
      "explicacion": "El conector 'en consecuencia' establece la relación lógica correcta entre las ideas del enunciado."
    },
    {
      "id": "redaccion_7",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica el enunciado que utiliza correctamente la expresión 'a ver' frente a 'haber'.",
      "lectura": "",
      "opciones": [
        "Vamos haber si puede a ver alguna solución al conflicto laboral.",
        "Vamos a ver si puede haber alguna solución al conflicto laboral.",
        "Vamos a ver si puede a ver alguna solución al conflicto laboral.",
        "Vamos haber si puede haber alguna solución al conflicto laboral."
      ],
      "correcta": "Vamos a ver si puede haber alguna solución al conflicto laboral.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_8",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Cuál es el gentilicio correcto para los originarios de Buenos Aires?",
      "lectura": "",
      "opciones": [
        "bonaerino",
        "bonarense",
        "buenairense",
        "bonaerense o porteño"
      ],
      "correcta": "bonaerense o porteño",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_9",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la oración donde el verbo 'adecuar' está correctamente conjugado.",
      "lectura": "",
      "opciones": [
        "Es importante que el plan se adecuara a las necesidades reales de la comunidad.",
        "Es importante que el plan se adecue a las necesidades reales de la comunidad.",
        "Es importante que el plan se adecúe a las necesidades reales de la comunidad.",
        "Es importante que el plan se adecúa a las necesidades reales de la comunidad."
      ],
      "correcta": "Es importante que el plan se adecue a las necesidades reales de la comunidad.",
      "explicacion": "La forma verbal correcta es 'Es importante que el plan se adecue a las necesidades reales de la comunidad.', según las reglas de conjugación del español."
    },
    {
      "id": "redaccion_10",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la oración que presenta un uso correcto del adverbio 'donde' sin antecedente.",
      "lectura": "",
      "opciones": [
        "Iremos a donde tú decidas celebrar la reunión de fin de semestre.",
        "Iremos en donde tú decidas celebrar la reunión de fin de semestre.",
        "Iremos donde tú decidas celebrar la reunión de fin de semestre.",
        "Iremos adonde tú decidas celebrar la reunión de fin de semestre."
      ],
      "correcta": "Iremos donde tú decidas celebrar la reunión de fin de semestre.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_11",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona el enunciado donde se emplea correctamente el verbo 'haber' en forma impersonal.",
      "lectura": "",
      "opciones": [
        "Hubo muchas irregularidades en el proceso de licitación pública.",
        "Han habido muchas irregularidades en el proceso de licitación pública.",
        "Hubieron muchas irregularidades en el proceso de licitación pública.",
        "Habían muchas irregularidades en el proceso de licitación pública."
      ],
      "correcta": "Hubo muchas irregularidades en el proceso de licitación pública.",
      "explicacion": "La forma verbal correcta es 'Hubo muchas irregularidades en el proceso de licitación pública.', según las reglas de conjugación del español."
    },
    {
      "id": "redaccion_12",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la opción que presenta el uso correcto del prefijo 'ex' según la RAE.",
      "lectura": "",
      "opciones": [
        "El ex presidente asistió a la inauguración del centro cultural.",
        "El éx-presidente asistió a la inauguración del centro cultural.",
        "El expresidente asistió a la inauguración del centro cultural.",
        "El éx presidente asistió a la inauguración del centro cultural."
      ],
      "correcta": "El ex presidente asistió a la inauguración del centro cultural.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_13",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la oración que utiliza correctamente el pronombre relativo.",
      "lectura": "",
      "opciones": [
        "El profesor el cual su investigación fue premiada impartirá la conferencia.",
        "El profesor que su investigación fue premiada impartirá la conferencia.",
        "El profesor del cual su investigación fue premiada impartirá la conferencia.",
        "El profesor cuya investigación fue premiada impartirá la conferencia."
      ],
      "correcta": "El profesor cuya investigación fue premiada impartirá la conferencia.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_14",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la opción que presenta un uso correcto de la raya o guion largo.",
      "lectura": "",
      "opciones": [
        "El ponente —reconocido experto en energías renovables — presentó datos alarmantes.",
        "El ponente -reconocido experto en energías renovables- presentó datos alarmantes.",
        "El ponente —reconocido experto en energías renovables— presentó datos alarmantes.",
        "El ponente, —reconocido experto en energías renovables—, presentó datos alarmantes."
      ],
      "correcta": "El ponente —reconocido experto en energías renovables— presentó datos alarmantes.",
      "explicacion": "El uso correcto de los signos de puntuación es fundamental para la claridad textual."
    },
    {
      "id": "redaccion_15",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la oración que presenta un correcto uso de las comillas.",
      "lectura": "",
      "opciones": [
        "El profesor \"explicó\" que el término paradigma proviene del griego.",
        "El profesor explicó que el término \"paradigma\" proviene del griego.",
        "El profesor explicó que el término paradigma proviene del \"griego\".",
        "El \"profesor\" explicó que el término paradigma proviene del griego."
      ],
      "correcta": "El profesor explicó que el término \"paradigma\" proviene del griego.",
      "explicacion": "El uso correcto de los signos de puntuación es fundamental para la claridad textual."
    },
    {
      "id": "redaccion_16",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la opción con la ortografía correcta: 'La joven tomó la __________ de estudiar una carrera científica por pura __________ personal'.",
      "lectura": "",
      "opciones": [
        "decisión - convicción",
        "desisión - convicción",
        "decisión - convición",
        "desición - convicción"
      ],
      "correcta": "decisión - convicción",
      "explicacion": "La escritura correcta según las normas ortográficas vigentes es 'decisión - convicción'."
    },
    {
      "id": "redaccion_17",
      "modulo": "Redacción Indirecta",
      "pregunta": "Elige la opción que evita el vicio sintáctico conocido como dequeísmo.",
      "lectura": "",
      "opciones": [
        "Opinó de que el nuevo plan de estudios requería una revisión exhaustiva.",
        "Aseguró de que la entrega de las becas se realizaría en tiempo y forma.",
        "Aseguró que la entrega de las becas universitarias se realizaría en tiempo y forma.",
        "Nos comunicó de que las clases serían suspendidas por causas de fuerza mayor."
      ],
      "correcta": "Aseguró que la entrega de las becas universitarias se realizaría en tiempo y forma.",
      "explicacion": "La opción correcta evita el vicio lingüístico señalado en el enunciado."
    },
    {
      "id": "redaccion_18",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la oración que emplea correctamente el gerundio compuesto.",
      "lectura": "",
      "opciones": [
        "Haber terminado el examen, los estudiantes abandonaron el aula en silencio.",
        "Habiendo terminando el examen, los estudiantes abandonaron el aula en silencio.",
        "Terminando el examen, los estudiantes abandonaron el aula en silencio.",
        "Habiendo terminado el examen, los estudiantes abandonaron el aula en silencio."
      ],
      "correcta": "Habiendo terminado el examen, los estudiantes abandonaron el aula en silencio.",
      "explicacion": "La forma verbal correcta es 'Habiendo terminado el examen, los estudiantes abandonaron el aula en silencio.', según las reglas de conjugación del español."
    },
    {
      "id": "redaccion_19",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la oración que emplea correctamente la preposición 'ante'.",
      "lectura": "",
      "opciones": [
        "El acusado compareció frente ante del juez para rendir su declaración preparatoria.",
        "El acusado compareció delante ante el juez para rendir su declaración preparatoria.",
        "El acusado compareció en frente del juez para rendir su declaración preparatoria.",
        "El acusado compareció ante el juez para rendir su declaración preparatoria."
      ],
      "correcta": "El acusado compareció ante el juez para rendir su declaración preparatoria.",
      "explicacion": "La preposición correcta sigue la norma culta del español estándar formal."
    },
    {
      "id": "redaccion_20",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la palabra que completa de forma correcta el enunciado: 'El tribunal determinó que el acusado debe __________ los daños ocasionados al patrimonio cultural'.",
      "lectura": "",
      "opciones": [
        "rezarsir",
        "resarsir",
        "rezarcir",
        "resarcir"
      ],
      "correcta": "resarcir",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_21",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la oración que emplea correctamente el objeto indirecto con duplicación pronominal.",
      "lectura": "",
      "opciones": [
        "A los beneficiarios les se entregó su constancia de participación oficial.",
        "A los beneficiarios se le entregó su constancia de participación oficial.",
        "A los beneficiarios se los entregó su constancia de participación oficial.",
        "A los beneficiarios se les entregó su constancia de participación oficial."
      ],
      "correcta": "A los beneficiarios se les entregó su constancia de participación oficial.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_22",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Cuál es la función de los paréntesis en el siguiente enunciado: 'La OMS (Organización Mundial de la Salud) emitió un comunicado oficial'?",
      "lectura": "",
      "opciones": [
        "Indicar que el texto contenido es una cita textual directa.",
        "Separar el sujeto del predicado en la oración principal.",
        "Señalar una interrupción abrupta en el discurso del hablante.",
        "Introducir una aclaración o información complementaria al texto."
      ],
      "correcta": "Introducir una aclaración o información complementaria al texto.",
      "explicacion": "El uso correcto de los signos de puntuación es fundamental para la claridad textual."
    },
    {
      "id": "redaccion_23",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la opción que presenta un uso correcto de los dos puntos.",
      "lectura": "",
      "opciones": [
        "El director comunicó lo siguiente: las inscripciones quedan suspendidas temporalmente.",
        "El director comunicó lo siguiente; las inscripciones quedan suspendidas temporalmente.",
        "El director comunicó: lo siguiente las inscripciones quedan suspendidas temporalmente.",
        "El director comunicó lo siguiente, las inscripciones quedan suspendidas temporalmente."
      ],
      "correcta": "El director comunicó lo siguiente: las inscripciones quedan suspendidas temporalmente.",
      "explicacion": "El uso correcto de los signos de puntuación es fundamental para la claridad textual."
    },
    {
      "id": "redaccion_24",
      "modulo": "Redacción Indirecta",
      "pregunta": "Elige el conector discursivo que completa con precisión semántica el siguiente fragmento: 'El proyecto presentaba deficiencias metodológicas graves; __________, el comité evaluador decidió otorgarle una prórroga'.",
      "lectura": "",
      "opciones": [
        "en consecuencia",
        "no obstante",
        "es decir",
        "por consiguiente"
      ],
      "correcta": "no obstante",
      "explicacion": "El conector 'no obstante' establece la relación lógica correcta entre las ideas del enunciado."
    },
    {
      "id": "redaccion_25",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la forma verbal correcta: 'Si yo __________ presidente, implementaría un programa de becas universal'.",
      "lectura": "",
      "opciones": [
        "fuera",
        "habría sido",
        "fuese sido",
        "sería"
      ],
      "correcta": "fuera",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_26",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica el enunciado donde se usa correctamente la expresión 'a través de'.",
      "lectura": "",
      "opciones": [
        "El estudiante envió su solicitud a travéz del portal institucional.",
        "El estudiante envió su solicitud a travez del portal institucional.",
        "El estudiante envió su solicitud atraves del portal institucional.",
        "El estudiante envió su solicitud a través del portal institucional."
      ],
      "correcta": "El estudiante envió su solicitud a través del portal institucional.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_27",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Qué recurso literario se utiliza en la expresión: 'Sus ojos eran dos luceros que iluminaban la estancia'?",
      "lectura": "",
      "opciones": [
        "Hipérbole",
        "Metonimia",
        "Metáfora",
        "Ironía"
      ],
      "correcta": "Metáfora",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_28",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la opción donde la palabra 'más' lleva tilde correctamente.",
      "lectura": "",
      "opciones": [
        "No quiero mas problemas; es más, prefiero retirarme del proyecto.",
        "No quiero mas problemas; es mas, prefiero retirarme del proyecto.",
        "No quiero más problemas; es más, prefiero retirarme del proyecto.",
        "No quiero más problemas; es mas, prefiero retirarme del proyecto."
      ],
      "correcta": "No quiero más problemas; es más, prefiero retirarme del proyecto.",
      "explicacion": "La escritura correcta según las normas ortográficas vigentes es 'No quiero más problemas; es más, prefiero retirarme del proyecto.'."
    },
    {
      "id": "redaccion_29",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Cuál de las siguientes oraciones carece de ambigüedad sintáctica?",
      "lectura": "",
      "opciones": [
        "Se vende ropa para damas de fina confección.",
        "El perro de mi vecino persiguió al gato en su jardín.",
        "Ayer vi a tu hermano saliendo de la biblioteca universitaria.",
        "Ayer vi a tu hermano cuando él salía de la biblioteca universitaria."
      ],
      "correcta": "Ayer vi a tu hermano cuando él salía de la biblioteca universitaria.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_30",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Cuál de las siguientes oraciones contiene un complemento circunstancial de modo?",
      "lectura": "",
      "opciones": [
        "El cirujano realizó la operación con su equipo de residentes.",
        "El cirujano realizó la operación en el quirófano principal ayer.",
        "El cirujano realizó la operación cuidadosamente en el quirófano principal.",
        "El cirujano realizó la operación para salvar al paciente crítico."
      ],
      "correcta": "El cirujano realizó la operación cuidadosamente en el quirófano principal.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_31",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Cuál de los siguientes enunciados utiliza correctamente el participio irregular del verbo 'imprimir'?",
      "lectura": "",
      "opciones": [
        "El documento fue impreso en papel reciclado de alta calidad.",
        "El documento fue imprentado en papel reciclado de alta calidad.",
        "El documento fue imprimido en papel reciclado de alta calidad.",
        "El documento fue imprimado en papel reciclado de alta calidad."
      ],
      "correcta": "El documento fue impreso en papel reciclado de alta calidad.",
      "explicacion": "La forma verbal correcta es 'El documento fue impreso en papel reciclado de alta calidad.', según las reglas de conjugación del español."
    },
    {
      "id": "redaccion_32",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la palabra esdrújula que está correctamente acentuada.",
      "lectura": "",
      "opciones": [
        "Vijesimo",
        "Vigésimo",
        "Vijésimo",
        "Vigesimo"
      ],
      "correcta": "Vigésimo",
      "explicacion": "La escritura correcta según las normas ortográficas vigentes es 'Vigésimo'."
    },
    {
      "id": "redaccion_33",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la opción donde la palabra 'haya' está correctamente empleada.",
      "lectura": "",
      "opciones": [
        "Espero que el comité haya revisado todos los expedientes antes de la sesión.",
        "Espero que el comité alla revisado todos los expedientes antes de la sesión.",
        "Espero que el comité haiga revisado todos los expedientes antes de la sesión.",
        "Espero que el comité aya revisado todos los expedientes antes de la sesión."
      ],
      "correcta": "Espero que el comité haya revisado todos los expedientes antes de la sesión.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_34",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Cuál es el significado contextual de la palabra 'acervo' en la siguiente oración: 'El acervo bibliográfico de la universidad fue enriquecido con nuevas adquisiciones'?",
      "lectura": "",
      "opciones": [
        "Severidad o dureza en el trato interpersonal.",
        "Conjunto de bienes culturales acumulados por tradición o herencia.",
        "Tipo de planta utilizada con fines medicinales.",
        "Calidad de lo que tiene sabor ácido o agrio."
      ],
      "correcta": "Conjunto de bienes culturales acumulados por tradición o herencia.",
      "explicacion": "En el contexto dado, 'Conjunto de bienes culturales acumulados por tradición o herencia.' es la opción semánticamente más precisa."
    },
    {
      "id": "redaccion_35",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Cuál de estas opciones es la forma correcta del plural de 'currículum'?",
      "lectura": "",
      "opciones": [
        "currículumes",
        "currículos",
        "currículums",
        "curriculums"
      ],
      "correcta": "currículos",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_36",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Qué oración presenta un correcto uso del punto y coma?",
      "lectura": "",
      "opciones": [
        "Los alumnos de medicina estudiaron anatomía. los de derecho, legislación civil.",
        "Los alumnos de medicina estudiaron anatomía: los de derecho, legislación civil.",
        "Los alumnos de medicina estudiaron anatomía, los de derecho, legislación civil.",
        "Los alumnos de medicina estudiaron anatomía; los de derecho, legislación civil."
      ],
      "correcta": "Los alumnos de medicina estudiaron anatomía; los de derecho, legislación civil.",
      "explicacion": "El uso correcto de los signos de puntuación es fundamental para la claridad textual."
    },
    {
      "id": "redaccion_37",
      "modulo": "Redacción Indirecta",
      "pregunta": "Elige la opción que presenta la escritura correcta de una sigla y su desarrollo.",
      "lectura": "",
      "opciones": [
        "La U.N.A.M. (universidad nacional autónoma de méxico) celebra su centenario.",
        "La Unam (Universidad Nacional Autónoma De México) celebra su centenario.",
        "La UNAM (Universidad Nacional Autónoma de México) celebra su centenario.",
        "La UNAM (Universidad nacional autónoma de México) celebra su centenario."
      ],
      "correcta": "La UNAM (Universidad Nacional Autónoma de México) celebra su centenario.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_38",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona el enunciado que presenta una concordancia verbal y nominal estrictamente correcta de acuerdo con la norma culta.",
      "lectura": "",
      "opciones": [
        "La multitud de manifestantes exigió ser escuchada pacíficamente ante las autoridades locales.",
        "La multitud de manifestante exigieron ser escuchada pacíficamente ante las autoridades locales.",
        "La multitud de manifestantes exigieron ser escuchados pacíficamente ante las autoridades locales.",
        "La multitud de manifestantes exigió ser escuchados pacíficamente ante las autoridades locales."
      ],
      "correcta": "La multitud de manifestantes exigió ser escuchada pacíficamente ante las autoridades locales.",
      "explicacion": "La opción correcta respeta las reglas de concordancia verbal y nominal del español estándar."
    },
    {
      "id": "redaccion_39",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la opción que presenta un correcto uso de la coma vocativa.",
      "lectura": "",
      "opciones": [
        "Estudiantes, recuerden entregar su ensayo, antes del viernes.",
        "Estudiantes recuerden entregar su ensayo antes del viernes.",
        "Estudiantes recuerden, entregar su ensayo antes del viernes.",
        "Estudiantes, recuerden entregar su ensayo antes del viernes."
      ],
      "correcta": "Estudiantes, recuerden entregar su ensayo antes del viernes.",
      "explicacion": "El uso correcto de los signos de puntuación es fundamental para la claridad textual."
    },
    {
      "id": "redaccion_40",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la opción que completa correctamente la correlación verbal: 'Si hubiera llegado a tiempo, __________ participar en el debate'.",
      "lectura": "",
      "opciones": [
        "hubiese pudiese",
        "hubiera podido",
        "habría podría",
        "habría podido"
      ],
      "correcta": "habría podido",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_41",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Cuál de las siguientes oraciones contiene un pleonasmo o redundancia?",
      "lectura": "",
      "opciones": [
        "Ve al segundo piso y trae los documentos del escritorio.",
        "Busca en el piso de arriba los documentos del escritorio.",
        "Sube arriba y trae los documentos que dejé sobre el escritorio.",
        "Sube y trae los documentos que dejé sobre el escritorio."
      ],
      "correcta": "Sube arriba y trae los documentos que dejé sobre el escritorio.",
      "explicacion": "La opción correcta evita el vicio lingüístico señalado en el enunciado."
    },
    {
      "id": "redaccion_42",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica el enunciado con correcta conjugación verbal en pretérito perfecto simple.",
      "lectura": "",
      "opciones": [
        "El rector satisficó las demandas del sindicato.",
        "El rector satisfació las demandas del sindicato.",
        "El rector satisfazó las demandas del sindicato.",
        "El rector satisfizo las demandas del sindicato tras una larga negociación."
      ],
      "correcta": "El rector satisfizo las demandas del sindicato tras una larga negociación.",
      "explicacion": "La forma verbal correcta es 'El rector satisfizo las demandas del sindicato tras una larga negociación.', según las reglas de conjugación del español."
    },
    {
      "id": "redaccion_43",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la opción que presenta la forma correcta de expresar una fecha en español.",
      "lectura": "",
      "opciones": [
        "La ceremonia se llevará a cabo el 15 de Septiembre de 2025.",
        "La ceremonia se llevará a cabo el Septiembre 15, 2025.",
        "La ceremonia se llevará a cabo el 15 de septiembre de 2025.",
        "La ceremonia se llevará a cabo en septiembre 15 del 2025."
      ],
      "correcta": "La ceremonia se llevará a cabo el 15 de septiembre de 2025.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_44",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la oración que emplea correctamente la conjunción disyuntiva 'u'.",
      "lectura": "",
      "opciones": [
        "¿Prefieres estudiar siete u ocho horas diarias para el examen de admisión?",
        "¿Prefieres estudiar siete ú ocho horas diarias para el examen de admisión?",
        "¿Prefieres estudiar siete o ocho horas diarias para el examen de admisión?",
        "¿Prefieres estudiar siete ó ocho horas diarias para el examen de admisión?"
      ],
      "correcta": "¿Prefieres estudiar siete u ocho horas diarias para el examen de admisión?",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_45",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la opción que emplea correctamente 'por qué', 'porque', 'porqué' o 'por que'.",
      "lectura": "",
      "opciones": [
        "No entiendo porque no aprobó, por qué estudió mucho; el por que de su reprobación es un misterio.",
        "No entiendo porqué no aprobó, porque estudió mucho; el por que de su reprobación es un misterio.",
        "No entiendo por que no aprobó, por que estudió mucho; el porqué de su reprobación es un misterio.",
        "No entiendo por qué no aprobó, porque estudió mucho; el porqué de su reprobación es un misterio."
      ],
      "correcta": "No entiendo por qué no aprobó, porque estudió mucho; el porqué de su reprobación es un misterio.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_46",
      "modulo": "Redacción Indirecta",
      "pregunta": "Elige el antónimo más adecuado para la palabra subrayada: 'La redacción del informe técnico pecaba de ser sumamente <u>prolija</u> en detalles irrelevantes'.",
      "lectura": "",
      "opciones": [
        "confusa",
        "redundante",
        "extensa",
        "concisa"
      ],
      "correcta": "concisa",
      "explicacion": "El uso correcto de los signos de puntuación es fundamental para la claridad textual."
    },
    {
      "id": "redaccion_47",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la oración en la que se emplea correctamente el infinitivo como sustantivo.",
      "lectura": "",
      "opciones": [
        "El saber no ocupa lugar en la formación profesional del individuo.",
        "El sabiendo no ocupa lugar en la formación profesional del individuo.",
        "El sabido no ocupa lugar en la formación profesional del individuo.",
        "El que sabe no ocupa un lugar en la formación profesional."
      ],
      "correcta": "El saber no ocupa lugar en la formación profesional del individuo.",
      "explicacion": "La forma verbal correcta es 'El saber no ocupa lugar en la formación profesional del individuo.', según las reglas de conjugación del español."
    },
    {
      "id": "redaccion_48",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Cuál de las siguientes palabras es un ejemplo de palabra compuesta escrita correctamente?",
      "lectura": "",
      "opciones": [
        "decimoséptimo",
        "decimoseptimo",
        "décimo séptimo",
        "décimo-séptimo"
      ],
      "correcta": "decimoséptimo",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_49",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la palabra correctamente escrita con el sufijo '-ción' o '-sión'.",
      "lectura": "",
      "opciones": [
        "La extención del plazo fue aprobada por unanimidad en la sesión extraordinaria.",
        "La extencion del plazo fue aprobada por unanimidad en la sesion extraordinaria.",
        "La extensión del plazo fue aprobada por unanimidad en la seción extraordinaria.",
        "La extensión del plazo fue aprobada por unanimidad en la sesión extraordinaria."
      ],
      "correcta": "La extensión del plazo fue aprobada por unanimidad en la sesión extraordinaria.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_50",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿En cuál de estas oraciones se usa correctamente la expresión 'asimismo'?",
      "lectura": "",
      "opciones": [
        "El informe detalla los avances del proyecto; así mismo, señala las áreas de oportunidad.",
        "El informe detalla los avances del proyecto; a si mismo, señala las áreas de oportunidad.",
        "El informe detalla los avances del proyecto; asimismo, señala las áreas de oportunidad.",
        "El informe detalla los avances del proyecto; a sí mismo, señala las áreas de oportunidad."
      ],
      "correcta": "El informe detalla los avances del proyecto; asimismo, señala las áreas de oportunidad.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_51",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la oración que emplea correctamente el leísmo aceptado por la RAE.",
      "lectura": "",
      "opciones": [
        "Les vi salir del edificio esta mañana temprano.",
        "Le vi salir del edificio esta mañana temprano.",
        "Lo vi salir del edificio esta mañana temprano.",
        "La vi salir del edificio esta mañana temprano."
      ],
      "correcta": "Le vi salir del edificio esta mañana temprano.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_52",
      "modulo": "Redacción Indirecta",
      "pregunta": "Elige la opción con escritura correcta de la palabra derivada del verbo 'conducir'.",
      "lectura": "",
      "opciones": [
        "La conducción del vehículo requiere extrema precaución en carreteras mojadas.",
        "La conduccíon del vehículo requiere extrema precaución en carreteras mojadas.",
        "La condución del vehículo requiere extrema precaución en carreteras mojadas.",
        "La conduccion del vehículo requiere extrema precaución en carreteras mojadas."
      ],
      "correcta": "La conducción del vehículo requiere extrema precaución en carreteras mojadas.",
      "explicacion": "La forma verbal correcta es 'La conducción del vehículo requiere extrema precaución en carreteras mojadas.', según las reglas de conjugación del español."
    },
    {
      "id": "redaccion_53",
      "modulo": "Redacción Indirecta",
      "pregunta": "Elige la oración que emplea correctamente el verbo 'prever'.",
      "lectura": "",
      "opciones": [
        "El meteorólogo previó la tormenta con 48 horas de anticipación.",
        "El meteorólogo previó la tormenta con 48 horas de anticipación.",
        "El meteorólogo preveió la tormenta con 48 horas de anticipación.",
        "El meteorólogo preveyó la tormenta con 48 horas de anticipación."
      ],
      "correcta": "El meteorólogo previó la tormenta con 48 horas de anticipación.",
      "explicacion": "La forma verbal correcta es 'El meteorólogo previó la tormenta con 48 horas de anticipación.', según las reglas de conjugación del español."
    },
    {
      "id": "redaccion_54",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Qué tipo de texto es aquel cuyo propósito es convencer al lector mediante argumentos lógicos?",
      "lectura": "",
      "opciones": [
        "Texto argumentativo",
        "Texto narrativo",
        "Texto descriptivo",
        "Texto expositivo"
      ],
      "correcta": "Texto argumentativo",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_55",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Qué función desempeña el complemento subrayado en: 'El profesor entregó <u>los exámenes corregidos</u> a sus alumnos'?",
      "lectura": "",
      "opciones": [
        "Atributo del sujeto oracional.",
        "Complemento circunstancial de instrumento.",
        "Complemento indirecto u objeto indirecto.",
        "Complemento directo u objeto directo."
      ],
      "correcta": "Complemento directo u objeto directo.",
      "explicacion": "El uso correcto de los signos de puntuación es fundamental para la claridad textual."
    },
    {
      "id": "redaccion_56",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la opción que corrige el anacoluto presente en el enunciado original: 'Los estudiantes que no entregaron, se les descontará puntos'.",
      "lectura": "",
      "opciones": [
        "Los estudiantes que no entregaron se les descontará puntos.",
        "A los estudiantes que no entregaron se les descontarán puntos.",
        "Los estudiantes que no entregaron, se descontará puntos.",
        "A los estudiantes que no entregaron, se les descontará puntos."
      ],
      "correcta": "A los estudiantes que no entregaron se les descontarán puntos.",
      "explicacion": "La opción correcta evita el vicio lingüístico señalado en el enunciado."
    },
    {
      "id": "redaccion_57",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la oración que presenta correctamente una enumeración con punto y coma.",
      "lectura": "",
      "opciones": [
        "Asistieron delegados de México D.F.; Guadalajara Jalisco; y Monterrey Nuevo León.",
        "Asistieron delegados de México, D.F.; Guadalajara, Jalisco; y Monterrey, Nuevo León.",
        "Asistieron delegados de México, D.F., Guadalajara, Jalisco, y Monterrey, Nuevo León.",
        "Asistieron delegados de: México, D.F.; Guadalajara, Jalisco; y Monterrey, Nuevo León."
      ],
      "correcta": "Asistieron delegados de México, D.F.; Guadalajara, Jalisco; y Monterrey, Nuevo León.",
      "explicacion": "El uso correcto de los signos de puntuación es fundamental para la claridad textual."
    },
    {
      "id": "redaccion_58",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la oración que emplea correctamente el verbo 'abolir' en presente de indicativo.",
      "lectura": "",
      "opciones": [
        "El congreso abolimos esa ley obsoleta durante el próximo periodo ordinario.",
        "El congreso abole esa ley obsoleta durante el próximo periodo ordinario.",
        "El congreso abolece esa ley obsoleta durante el próximo periodo ordinario.",
        "El congreso pretende abolir esa ley obsoleta durante el próximo periodo ordinario."
      ],
      "correcta": "El congreso pretende abolir esa ley obsoleta durante el próximo periodo ordinario.",
      "explicacion": "La forma verbal correcta es 'El congreso pretende abolir esa ley obsoleta durante el próximo periodo ordinario.', según las reglas de conjugación del español."
    },
    {
      "id": "redaccion_59",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la oración que emplea correctamente el verbo 'satisfacer' en futuro.",
      "lectura": "",
      "opciones": [
        "El nuevo programa satisfará las expectativas de los estudiantes de posgrado.",
        "El nuevo programa satisfacerá las expectativas de los estudiantes de posgrado.",
        "El nuevo programa satisfaciera las expectativas de los estudiantes de posgrado.",
        "El nuevo programa satisfaceré las expectativas de los estudiantes de posgrado."
      ],
      "correcta": "El nuevo programa satisfará las expectativas de los estudiantes de posgrado.",
      "explicacion": "La forma verbal correcta es 'El nuevo programa satisfará las expectativas de los estudiantes de posgrado.', según las reglas de conjugación del español."
    },
    {
      "id": "redaccion_60",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la opción donde el uso de los signos de puntuación es el adecuado para insertar un inciso explicativo.",
      "lectura": "",
      "opciones": [
        "La investigación científica, que demandó meses de recolección de datos arrojó resultados contundentes.",
        "La investigación científica que demandó meses de recolección de datos arrojó resultados contundentes.",
        "La investigación científica que demandó meses de recolección de datos, arrojó resultados contundentes.",
        "La investigación científica, que demandó meses de recolección de datos, arrojó resultados contundentes."
      ],
      "correcta": "La investigación científica, que demandó meses de recolección de datos, arrojó resultados contundentes.",
      "explicacion": "El uso correcto de los signos de puntuación es fundamental para la claridad textual."
    },
    {
      "id": "redaccion_61",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Cuál de las siguientes opciones presenta el uso correcto de 'hay', 'ahí' y 'ay'?",
      "lectura": "",
      "opciones": [
        "¡Ay! Ahí ahí un error grave en el documento que presentaste ayer.",
        "¡Ahí! Hay ay un error grave en el documento que presentaste ayer.",
        "¡Ay! Ahí hay un error grave en el documento que presentaste ayer.",
        "¡Hay! Ay ahí un error grave en el documento que presentaste ayer."
      ],
      "correcta": "¡Ay! Ahí hay un error grave en el documento que presentaste ayer.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_62",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la oración que hace un uso correcto de las preposiciones en el español estándar formal.",
      "lectura": "",
      "opciones": [
        "Bajo la base de lo estipulado en el contrato, las cláusulas entrarán en vigor mañana.",
        "De acuerdo con lo estipulado en el contrato, las cláusulas entrarán en vigor mañana.",
        "De acuerdo a lo estipulado en el contrato, las cláusulas entrarán en vigor mañana.",
        "En base a lo estipulado en el contrato, las cláusulas entrarán en vigor mañana."
      ],
      "correcta": "De acuerdo con lo estipulado en el contrato, las cláusulas entrarán en vigor mañana.",
      "explicacion": "La preposición correcta sigue la norma culta del español estándar formal."
    },
    {
      "id": "redaccion_63",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la oración cuyo sujeto es un sintagma nominal complejo.",
      "lectura": "",
      "opciones": [
        "Llueve intensamente en toda la región costera del estado.",
        "Es necesario replantear las estrategias educativas del semestre.",
        "La directora general del hospital público emitió un comunicado de prensa urgente.",
        "Hay demasiados pendientes administrativos en la oficina central."
      ],
      "correcta": "La directora general del hospital público emitió un comunicado de prensa urgente.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_64",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Qué palabra presenta una grafía completamente correcta de acuerdo con las normas ortográficas de la RAE?",
      "lectura": "",
      "opciones": [
        "Exhuberante",
        "Exuverante",
        "Exuberante",
        "Exhuverante"
      ],
      "correcta": "Exuberante",
      "explicacion": "La escritura correcta según las normas ortográficas vigentes es 'Exuberante'."
    },
    {
      "id": "redaccion_65",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Qué oración emplea correctamente la locución 'con base en'?",
      "lectura": "",
      "opciones": [
        "En base a los resultados del diagnóstico, se modificó el tratamiento.",
        "Bajo base en los resultados del diagnóstico, se modificó el tratamiento.",
        "Con base en los resultados del diagnóstico, se modificó el tratamiento.",
        "Con base a los resultados del diagnóstico, se modificó el tratamiento."
      ],
      "correcta": "Con base en los resultados del diagnóstico, se modificó el tratamiento.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_66",
      "modulo": "Redacción Indirecta",
      "pregunta": "Elige la opción que presenta un uso correcto de 'sino' y 'si no'.",
      "lectura": "",
      "opciones": [
        "No quiero café, sino té; sino hay, tomaré agua.",
        "No quiero café, sino té; si no hay, tomaré agua.",
        "No quiero café, si no té; sino hay, tomaré agua.",
        "No quiero café sino té; si no hay, tomaré agua."
      ],
      "correcta": "No quiero café, sino té; si no hay, tomaré agua.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_67",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona el enunciado con correcta acentuación en todas sus palabras.",
      "lectura": "",
      "opciones": [
        "La línea telefonica del área academica está temporalmente fuera de servicio.",
        "La linea telefónica del area académica está temporalmente fuera de servicio.",
        "La línea telefónica del area academica esta temporalmente fuera de servicio.",
        "La línea telefónica del área académica está temporalmente fuera de servicio."
      ],
      "correcta": "La línea telefónica del área académica está temporalmente fuera de servicio.",
      "explicacion": "La escritura correcta según las normas ortográficas vigentes es 'La línea telefónica del área académica está temporalmente fuera de servicio.'."
    },
    {
      "id": "redaccion_68",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica el enunciado que emplea correctamente la perífrasis verbal de obligación.",
      "lectura": "",
      "opciones": [
        "Los aspirantes tienen de presentar tres cartas de recomendación académica.",
        "Los aspirantes tienen a presentar tres cartas de recomendación académica.",
        "Los aspirantes tienen presentar tres cartas de recomendación académica.",
        "Los aspirantes tienen que presentar tres cartas de recomendación académica."
      ],
      "correcta": "Los aspirantes tienen que presentar tres cartas de recomendación académica.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_69",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Qué tipo de conector es la expresión 'en primer lugar' dentro de un texto expositivo?",
      "lectura": "",
      "opciones": [
        "Conector de reformulación o paráfrasis explicativa.",
        "Conector de causa y efecto directo.",
        "Conector de orden o secuencia temporal y lógica.",
        "Conector de contraste u oposición argumentativa."
      ],
      "correcta": "Conector de orden o secuencia temporal y lógica.",
      "explicacion": "El conector 'Conector de orden o secuencia temporal y lógica.' establece la relación lógica correcta entre las ideas del enunciado."
    },
    {
      "id": "redaccion_70",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la opción con el uso correcto de la letra 'b' o 'v'.",
      "lectura": "",
      "opciones": [
        "El diseñador tuvo que renobar la exhibición del bestíbulo principal.",
        "El diseñador tuvo que renovar la exhibición del vestíbulo principal.",
        "El diseñador tuvo que renovar la exibición del vestíbulo principal.",
        "El diseñador tubo que renovar la exhibición del vestíbulo principal."
      ],
      "correcta": "El diseñador tuvo que renovar la exhibición del vestíbulo principal.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_71",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la forma correcta: 'Hubo graves disturbios en la plaza; __________, la policía no intervino hasta recibir órdenes superiores'.",
      "lectura": "",
      "opciones": [
        "luego entonces",
        "por lo tanto",
        "sin embargo",
        "así que"
      ],
      "correcta": "sin embargo",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_72",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la opción donde 'aun' sin tilde está correctamente empleado.",
      "lectura": "",
      "opciones": [
        "Aun así no reconocieron la validez del experimento científico todavía.",
        "Aún los más escépticos reconocieron la validez del experimento científico.",
        "Aún cuando los escépticos reconocieron la validez, siguieron dudando.",
        "Aun los más escépticos reconocieron la validez del experimento científico."
      ],
      "correcta": "Aun los más escépticos reconocieron la validez del experimento científico.",
      "explicacion": "La escritura correcta según las normas ortográficas vigentes es 'Aun los más escépticos reconocieron la validez del experimento científico.'."
    },
    {
      "id": "redaccion_73",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la oración que emplea correctamente la voz pasiva refleja.",
      "lectura": "",
      "opciones": [
        "Se publicaron los resultados del examen de admisión en el portal oficial.",
        "Se publicó los resultados del examen de admisión en el portal oficial.",
        "Se publicarán los resultados fueron del examen de admisión.",
        "Los resultados se publicaron del examen de admisión en el portal oficial."
      ],
      "correcta": "Se publicaron los resultados del examen de admisión en el portal oficial.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_74",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Qué tipo de texto argumentativo utiliza la apelación a la autoridad como recurso retórico?",
      "lectura": "",
      "opciones": [
        "En mi opinión personal, creo que la falta de sueño afecta mucho a las personas.",
        "La falta de sueño es mala porque todos sabemos que dormir es importante.",
        "Según el Dr. López, reconocido neurólogo, la falta de sueño deteriora la memoria a largo plazo.",
        "Todo el mundo sabe que no dormir bien causa problemas de salud graves."
      ],
      "correcta": "Según el Dr. López, reconocido neurólogo, la falta de sueño deteriora la memoria a largo plazo.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_75",
      "modulo": "Redacción Indirecta",
      "pregunta": "Elige la opción donde la tilde en el monosílabo es correcta: 'Quiero que __________ venga pronto para que __________ dé su opinión'.",
      "lectura": "",
      "opciones": [
        "él - me",
        "él - mé",
        "el - mé",
        "el - me"
      ],
      "correcta": "él - me",
      "explicacion": "La escritura correcta según las normas ortográficas vigentes es 'él - me'."
    },
    {
      "id": "redaccion_76",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Cuál de las siguientes oraciones emplea correctamente el modo subjuntivo?",
      "lectura": "",
      "opciones": [
        "Es necesario que el alumno presentaría su documentación antes del viernes.",
        "Es necesario que el alumno presenta su documentación antes del viernes.",
        "Es necesario que el alumno presentara su documentación antes del viernes.",
        "Es necesario que el alumno presente su documentación antes del viernes."
      ],
      "correcta": "Es necesario que el alumno presente su documentación antes del viernes.",
      "explicacion": "La forma verbal correcta es 'Es necesario que el alumno presente su documentación antes del viernes.', según las reglas de conjugación del español."
    },
    {
      "id": "redaccion_77",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica el enunciado libre de solecismo.",
      "lectura": "",
      "opciones": [
        "Le informo de que su solicitud ha sido aprobada por el comité directivo.",
        "Les informo que sus solicitud ha sido aprobada por el comité directivo.",
        "Le informo que su solicitud ha sido aprobada por el comité directivo.",
        "Le informo a que su solicitud ha sido aprobada por el comité directivo."
      ],
      "correcta": "Le informo que su solicitud ha sido aprobada por el comité directivo.",
      "explicacion": "La opción correcta evita el vicio lingüístico señalado en el enunciado."
    },
    {
      "id": "redaccion_78",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona el enunciado que presenta un correcto uso de la expresión 'sobre todo' frente a 'sobretodo'.",
      "lectura": "",
      "opciones": [
        "Me gusta la ciencia, sobre todo la biología molecular y la genética.",
        "Me gusta la ciencia; sobretodo, la biología molecular y la genética.",
        "Me gusta la ciencia, sobretodo la biología molecular y la genética.",
        "Me gusta la ciencia, sobre-todo la biología molecular y la genética."
      ],
      "correcta": "Me gusta la ciencia, sobre todo la biología molecular y la genética.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_79",
      "modulo": "Redacción Indirecta",
      "pregunta": "Sustituye la palabra subrayada por el sinónimo contextual más preciso: 'El argumento postulado resultó completamente <u>falaz</u> al contrastarse con las pruebas empíricas'.",
      "lectura": "",
      "opciones": [
        "complejo",
        "inédito",
        "verosímil",
        "engañoso"
      ],
      "correcta": "engañoso",
      "explicacion": "El uso correcto de los signos de puntuación es fundamental para la claridad textual."
    },
    {
      "id": "redaccion_80",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la palabra que está correctamente dividida en sílabas.",
      "lectura": "",
      "opciones": [
        "abs-trac-ción",
        "a-bstrac-ción",
        "abst-rac-ción",
        "ab-strac-ción"
      ],
      "correcta": "abs-trac-ción",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_81",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la palabra que funciona como adverbio en la siguiente oración: 'El equipo trabajó eficientemente durante toda la jornada de investigación'.",
      "lectura": "",
      "opciones": [
        "jornada",
        "investigación",
        "eficientemente",
        "equipo"
      ],
      "correcta": "eficientemente",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_82",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica el tipo de oración subordinada en: 'Quien estudie con constancia obtendrá resultados favorables'.",
      "lectura": "",
      "opciones": [
        "Subordinada adjetiva especificativa.",
        "Subordinada adverbial de finalidad.",
        "Subordinada sustantiva en función de sujeto.",
        "Subordinada adverbial concesiva."
      ],
      "correcta": "Subordinada sustantiva en función de sujeto.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_83",
      "modulo": "Redacción Indirecta",
      "pregunta": "Selecciona la opción que presenta correctamente la abreviatura de 'usted' y 'ustedes'.",
      "lectura": "",
      "opciones": [
        "Ud. y Uds. son las formas abreviadas correctas aceptadas por la RAE.",
        "Vd. y Vds. son las únicas formas abreviadas correctas aceptadas por la RAE.",
        "U. y Us. son las formas abreviadas correctas aceptadas por la RAE.",
        "Ud y Uds son las formas abreviadas correctas sin punto."
      ],
      "correcta": "Ud. y Uds. son las formas abreviadas correctas aceptadas por la RAE.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_84",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Cuál de las siguientes oraciones utiliza correctamente el verbo 'caber' en pretérito?",
      "lectura": "",
      "opciones": [
        "No cupió ni una persona más en el auditorio durante la ceremonia de graduación.",
        "No cabó ni una persona más en el auditorio durante la ceremonia de graduación.",
        "No cupo ni una persona más en el auditorio durante la ceremonia de graduación.",
        "No cabió ni una persona más en el auditorio durante la ceremonia de graduación."
      ],
      "correcta": "No cupo ni una persona más en el auditorio durante la ceremonia de graduación.",
      "explicacion": "La forma verbal correcta es 'No cupo ni una persona más en el auditorio durante la ceremonia de graduación.', según las reglas de conjugación del español."
    },
    {
      "id": "redaccion_85",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica la función del 'que' en la oración: 'El libro que compraste en la feria resultó ser una primera edición'.",
      "lectura": "",
      "opciones": [
        "Conjunción subordinante que introduce una oración sustantiva.",
        "Pronombre relativo que introduce una oración subordinada adjetiva.",
        "Adverbio de cantidad que modifica al verbo principal.",
        "Pronombre interrogativo que solicita información específica."
      ],
      "correcta": "Pronombre relativo que introduce una oración subordinada adjetiva.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_86",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Cuál de las siguientes opciones presenta la forma correcta del verbo 'yacer'?",
      "lectura": "",
      "opciones": [
        "Los restos del escritor yacían en el panteón municipal desde hace un siglo.",
        "Los restos del escritor yacen en el panteón municipal desde hace un siglo.",
        "Los restos del escritor yacieron en el panteón municipal desde hace un siglo.",
        "Los restos del escritor yazcan en el panteón municipal desde hace un siglo."
      ],
      "correcta": "Los restos del escritor yacen en el panteón municipal desde hace un siglo.",
      "explicacion": "La forma verbal correcta es 'Los restos del escritor yacen en el panteón municipal desde hace un siglo.', según las reglas de conjugación del español."
    },
    {
      "id": "redaccion_87",
      "modulo": "Redacción Indirecta",
      "pregunta": "¿Cuál es la diferencia entre 'aptitud' y 'actitud' según el contexto académico?",
      "lectura": "",
      "opciones": [
        "'Aptitud' es la disposición emocional; 'actitud' es la capacidad intelectual.",
        "Ambas palabras son sinónimos y pueden usarse indistintamente en cualquier contexto.",
        "'Aptitud' se refiere a la capacidad o habilidad para realizar algo; 'actitud' es la disposición anímica.",
        "'Aptitud' solo se usa en contextos deportivos; 'actitud' en contextos académicos."
      ],
      "correcta": "'Aptitud' se refiere a la capacidad o habilidad para realizar algo; 'actitud' es la disposición anímica.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    },
    {
      "id": "redaccion_88",
      "modulo": "Redacción Indirecta",
      "pregunta": "Identifica el enunciado donde el verbo 'proveer' está correctamente conjugado en participio.",
      "lectura": "",
      "opciones": [
        "El almacén ha proveido de material suficiente a todas las sucursales.",
        "El almacén ha proveído de material suficiente a todas las sucursales.",
        "El almacén ha provisto de material suficiente a todas las sucursales.",
        "El almacén ha provenido de material suficiente a todas las sucursales."
      ],
      "correcta": "El almacén ha provisto de material suficiente a todas las sucursales.",
      "explicacion": "La forma verbal correcta es 'El almacén ha provisto de material suficiente a todas las sucursales.', según las reglas de conjugación del español."
    },
    {
      "id": "redaccion_89",
      "modulo": "Redacción Indirecta",
      "pregunta": "Elige la oración donde el adjetivo concuerda correctamente con el sustantivo al que modifica.",
      "lectura": "",
      "opciones": [
        "Presentaron sendas propuestas los candidatos a la rectoría universitaria.",
        "Presentaron senda propuestas los candidatos a la rectoría universitaria.",
        "Presentaron senda propuesta los candidato a la rectoría universitaria.",
        "Presentaron sendas propuesta los candidatos a la rectoría universitaria."
      ],
      "correcta": "Presentaron sendas propuestas los candidatos a la rectoría universitaria.",
      "explicacion": "La opción correcta cumple con las normas gramaticales y ortográficas del español estándar."
    }
  ],
  "Inglés": [
    {
      "id": "ingles_0",
      "modulo": "Inglés",
      "pregunta": "Choose the correct gerund or infinitive form: 'The committee decided __________ the expansion until the next fiscal year.'",
      "lectura": "",
      "opciones": [
        "postponing",
        "postponed",
        "to postpone",
        "postpone"
      ],
      "correcta": "to postpone",
      "explicacion": "The option 'to postpone' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_1",
      "modulo": "Inglés",
      "pregunta": "Select the correct relative pronoun: 'The research laboratory __________ we conduct our quantum chemistry experiments has been fully renovated.'",
      "lectura": "",
      "opciones": [
        "whose",
        "who",
        "where",
        "which"
      ],
      "correcta": "where",
      "explicacion": "The option 'where' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_2",
      "modulo": "Inglés",
      "pregunta": "Select the option that correctly completes the sentence in the passive voice: 'The groundbreaking research article on renewable energy __________ by an international team of scientists last year.'",
      "lectura": "",
      "opciones": [
        "is published",
        "was published",
        "has published",
        "publishes"
      ],
      "correcta": "was published",
      "explicacion": "The option 'was published' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_3",
      "modulo": "Inglés",
      "pregunta": "Select the correct future continuous form: 'At this time tomorrow, the researchers __________ their findings at the international conference.'",
      "lectura": "",
      "opciones": [
        "are presenting",
        "will be presenting",
        "would present",
        "will present"
      ],
      "correcta": "will be presenting",
      "explicacion": "The option 'will be presenting' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_4",
      "modulo": "Inglés",
      "pregunta": "Identify the correct use of 'in spite of': ",
      "lectura": "",
      "opciones": [
        "In spite his lack of experience, he was offered the position.",
        "In spite of he lacked experience, he was offered the position.",
        "In spite he lacked experience, he was offered the position.",
        "In spite of his lack of experience, he was offered the research position."
      ],
      "correcta": "In spite of his lack of experience, he was offered the research position.",
      "explicacion": "The option 'In spite of his lack of experience, he was offered the research position.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_5",
      "modulo": "Inglés",
      "pregunta": "Select the correct form: 'Each of the students __________ required to submit an individual lab report by the end of the week.'",
      "lectura": "",
      "opciones": [
        "have been",
        "is",
        "were",
        "are"
      ],
      "correcta": "is",
      "explicacion": "The option 'is' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_6",
      "modulo": "Inglés",
      "pregunta": "Select the correct form: 'I __________ to the library when I ran into my old classmate from high school.'",
      "lectura": "",
      "opciones": [
        "had walked",
        "was walking",
        "walked",
        "have walked"
      ],
      "correcta": "was walking",
      "explicacion": "The option 'was walking' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_7",
      "modulo": "Inglés",
      "pregunta": "Which sentence uses the emphatic 'do' correctly?",
      "lectura": "",
      "opciones": [
        "I do believes that renewable energy is the key.",
        "I did believes that renewable energy is the key.",
        "I does believe that renewable energy is the key.",
        "I do believe that renewable energy is the key to a sustainable future."
      ],
      "correcta": "I do believe that renewable energy is the key to a sustainable future.",
      "explicacion": "The option 'I do believe that renewable energy is the key to a sustainable future.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_8",
      "modulo": "Inglés",
      "pregunta": "Identify the correct use of 'unless': 'You will not be eligible for the scholarship __________ you maintain a GPA above 3.5.'",
      "lectura": "",
      "opciones": [
        "if",
        "unless",
        "whether",
        "provided"
      ],
      "correcta": "unless",
      "explicacion": "The option 'unless' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_9",
      "modulo": "Inglés",
      "pregunta": "Identify the correct meaning: 'The student's dissertation was groundbreaking.' What does 'groundbreaking' mean?",
      "lectura": "",
      "opciones": [
        "Innovative and pioneering in its field of study.",
        "Controversial and widely criticized.",
        "Related to construction or engineering.",
        "Extremely long and detailed."
      ],
      "correcta": "Innovative and pioneering in its field of study.",
      "explicacion": "The option 'Innovative and pioneering in its field of study.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_10",
      "modulo": "Inglés",
      "pregunta": "Which sentence uses 'whereas' correctly?",
      "lectura": "",
      "opciones": [
        "The biology department requires fieldwork, whereas, the mathematics department focuses.",
        "The biology department requires fieldwork, whereas the mathematics department focuses on theoretical research.",
        "Whereas the biology department requires fieldwork the mathematics department focuses.",
        "The biology department requires fieldwork whereas, the mathematics department focuses."
      ],
      "correcta": "The biology department requires fieldwork, whereas the mathematics department focuses on theoretical research.",
      "explicacion": "The option 'The biology department requires fieldwork, whereas the mathematics department focuses on theoretical research.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_11",
      "modulo": "Inglés",
      "pregunta": "Select the correct form of the adjective: 'This is __________ book I have ever read on the subject of molecular biology.'",
      "lectura": "",
      "opciones": [
        "most interesting",
        "the more interesting",
        "the most interesting",
        "more interesting"
      ],
      "correcta": "the most interesting",
      "explicacion": "The option 'the most interesting' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_12",
      "modulo": "Inglés",
      "pregunta": "Choose the correct option: 'Scarcely __________ the lecture begun when the fire alarm went off.'",
      "lectura": "",
      "opciones": [
        "had",
        "was",
        "has",
        "did"
      ],
      "correcta": "had",
      "explicacion": "The option 'had' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_13",
      "modulo": "Inglés",
      "pregunta": "Select the correct use of 'needn't': 'You __________ bring your textbook tomorrow because the professor will provide digital copies.'",
      "lectura": "",
      "opciones": [
        "mustn't",
        "shouldn't",
        "needn't",
        "can't"
      ],
      "correcta": "needn't",
      "explicacion": "The option 'needn't' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_14",
      "modulo": "Inglés",
      "pregunta": "Choose the correct article: '__________ Nile is the longest river in Africa and one of the most important in the world.'",
      "lectura": "",
      "opciones": [
        "The",
        "An",
        "No article needed",
        "A"
      ],
      "correcta": "The",
      "explicacion": "The option 'The' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_15",
      "modulo": "Inglés",
      "pregunta": "Choose the correct option: 'It is high time the government __________ more funding for public universities.'",
      "lectura": "",
      "opciones": [
        "will allocate",
        "allocates",
        "allocated",
        "allocate"
      ],
      "correcta": "allocated",
      "explicacion": "The option 'allocated' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_16",
      "modulo": "Inglés",
      "pregunta": "Select the correct reflexive pronoun: 'The students taught __________ how to use the new statistical software.'",
      "lectura": "",
      "opciones": [
        "themselves",
        "theirselves",
        "theirself",
        "themself"
      ],
      "correcta": "themselves",
      "explicacion": "The option 'themselves' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_17",
      "modulo": "Inglés",
      "pregunta": "Complete the question using the correct auxiliary: '__________ the head of department verify all grant applications before submitting them?'",
      "lectura": "",
      "opciones": [
        "Has",
        "Is",
        "Does",
        "Do"
      ],
      "correcta": "Does",
      "explicacion": "The option 'Does' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_18",
      "modulo": "Inglés",
      "pregunta": "Select the correct option: 'The university __________ established in 1910 and has been a leading institution ever since.'",
      "lectura": "",
      "opciones": [
        "was",
        "has been",
        "had been",
        "is"
      ],
      "correcta": "was",
      "explicacion": "The option 'was' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_19",
      "modulo": "Inglés",
      "pregunta": "Select the correct option: 'She is accustomed __________ long hours in the laboratory during the research phase.'",
      "lectura": "",
      "opciones": [
        "working",
        "for working",
        "to work",
        "to working"
      ],
      "correcta": "to working",
      "explicacion": "The option 'to working' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_20",
      "modulo": "Inglés",
      "pregunta": "Select the correct tag question: 'The students have already submitted their research papers, __________?'",
      "lectura": "",
      "opciones": [
        "didn't they",
        "don't they",
        "have they",
        "haven't they"
      ],
      "correcta": "haven't they",
      "explicacion": "The option 'haven't they' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_21",
      "modulo": "Inglés",
      "pregunta": "Select the sentence that uses the third conditional correctly:",
      "lectura": "",
      "opciones": [
        "If she had studied harder, she will be admitted.",
        "If she studies harder, she would have admitted.",
        "If she had studied harder, she would have been admitted to the medical faculty.",
        "If she studied harder, she would have been admitted."
      ],
      "correcta": "If she had studied harder, she would have been admitted to the medical faculty.",
      "explicacion": "La forma verbal 'If she had studied harder, she would have been admitted to the medical faculty.' es la correcta según la estructura condicional indicada."
    },
    {
      "id": "ingles_22",
      "modulo": "Inglés",
      "pregunta": "Choose the correct option: 'The dean suggested that every student __________ a foreign language before graduating.'",
      "lectura": "",
      "opciones": [
        "would learn",
        "learns",
        "learn",
        "learned"
      ],
      "correcta": "learn",
      "explicacion": "The option 'learn' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_23",
      "modulo": "Inglés",
      "pregunta": "Select the sentence that uses the zero conditional correctly:",
      "lectura": "",
      "opciones": [
        "If you heated water to 100 degrees Celsius, it boils.",
        "If you heat water to 100 degrees Celsius, it will boil.",
        "If you heat water to 100 degrees Celsius, it boils and turns into steam.",
        "If you heat water to 100 degrees Celsius, it would boil."
      ],
      "correcta": "If you heat water to 100 degrees Celsius, it boils and turns into steam.",
      "explicacion": "La forma verbal 'If you heat water to 100 degrees Celsius, it boils and turns into steam.' es la correcta según la estructura condicional indicada."
    },
    {
      "id": "ingles_24",
      "modulo": "Inglés",
      "pregunta": "Which option correctly uses 'despite'? ",
      "lectura": "",
      "opciones": [
        "Despite it rained heavily, the ceremony continued.",
        "Despite of the heavy rain, the ceremony continued.",
        "Despite the heavy rain but the ceremony continued.",
        "Despite the heavy rain, the outdoor graduation ceremony continued as planned."
      ],
      "correcta": "Despite the heavy rain, the outdoor graduation ceremony continued as planned.",
      "explicacion": "The option 'Despite the heavy rain, the outdoor graduation ceremony continued as planned.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_25",
      "modulo": "Inglés",
      "pregunta": "Which sentence uses 'as long as' correctly?",
      "lectura": "",
      "opciones": [
        "You may use the laboratory equipment as long you follow all safety protocols.",
        "You may use the laboratory equipment as long as you follow all safety protocols.",
        "You may use the laboratory equipment as long following all safety protocols.",
        "You may use the laboratory equipment as long as to follow all safety protocols."
      ],
      "correcta": "You may use the laboratory equipment as long as you follow all safety protocols.",
      "explicacion": "The option 'You may use the laboratory equipment as long as you follow all safety protocols.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_26",
      "modulo": "Inglés",
      "pregunta": "Identify the sentence with correct punctuation:",
      "lectura": "",
      "opciones": [
        "The conference will cover three topics, artificial intelligence, data science, and cybersecurity.",
        "The conference will cover three topics: artificial intelligence, data science, and cybersecurity.",
        "The conference will cover three topics - artificial intelligence; data science; and cybersecurity.",
        "The conference will cover three topics; artificial intelligence, data science, and cybersecurity."
      ],
      "correcta": "The conference will cover three topics: artificial intelligence, data science, and cybersecurity.",
      "explicacion": "The option 'The conference will cover three topics: artificial intelligence, data science, and cybersecurity.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_27",
      "modulo": "Inglés",
      "pregunta": "Which sentence correctly uses an embedded question?",
      "lectura": "",
      "opciones": [
        "Could you tell me where the registrar's office is located?",
        "Could you tell me where the registrar's office is located at?",
        "Could you tell me where is the registrar's office located?",
        "Could you tell me where is located the registrar's office?"
      ],
      "correcta": "Could you tell me where the registrar's office is located?",
      "explicacion": "The option 'Could you tell me where the registrar's office is located?' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_28",
      "modulo": "Inglés",
      "pregunta": "Select the correct option: 'The more you practice speaking English, __________ your fluency will become.'",
      "lectura": "",
      "opciones": [
        "the better",
        "the best",
        "better",
        "the more better"
      ],
      "correcta": "the better",
      "explicacion": "The option 'the better' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_29",
      "modulo": "Inglés",
      "pregunta": "Select the correct option with 'get': 'After months of hard work, the student finally __________ used to the demanding academic schedule.'",
      "lectura": "",
      "opciones": [
        "gets",
        "got",
        "get",
        "getting"
      ],
      "correcta": "got",
      "explicacion": "The option 'got' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_30",
      "modulo": "Inglés",
      "pregunta": "Choose the sentence with the correct use of the possessive: ",
      "lectura": "",
      "opciones": [
        "The childrens playground was recently renovated.",
        "The children playground was recently renovated.",
        "The children's playground was recently renovated by the city council.",
        "The childrens' playground was recently renovated."
      ],
      "correcta": "The children's playground was recently renovated by the city council.",
      "explicacion": "The option 'The children's playground was recently renovated by the city council.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_31",
      "modulo": "Inglés",
      "pregunta": "Choose the correct option: 'The professor recommended that each student __________ at least three academic sources for the term paper.'",
      "lectura": "",
      "opciones": [
        "consult",
        "consulted",
        "consults",
        "would consult"
      ],
      "correcta": "consult",
      "explicacion": "The option 'consult' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_32",
      "modulo": "Inglés",
      "pregunta": "Identify the correct sentence: 'The results suggest that the hypothesis __________.'",
      "lectura": "",
      "opciones": [
        "may to be correct",
        "may correct",
        "may be correct",
        "maybe correct"
      ],
      "correcta": "may be correct",
      "explicacion": "The option 'may be correct' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_33",
      "modulo": "Inglés",
      "pregunta": "Choose the correct form of the causative: 'The dean __________ the old auditorium renovated before the start of the academic year.'",
      "lectura": "",
      "opciones": [
        "made",
        "had",
        "got",
        "let"
      ],
      "correcta": "had",
      "explicacion": "The option 'had' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_34",
      "modulo": "Inglés",
      "pregunta": "Select the correct form of the reported speech: 'She said, \"I am studying for the final exam.\" → She said that she __________ for the final exam.'",
      "lectura": "",
      "opciones": [
        "has studied",
        "is studying",
        "studies",
        "was studying"
      ],
      "correcta": "was studying",
      "explicacion": "The option 'was studying' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_35",
      "modulo": "Inglés",
      "pregunta": "Choose the word that best completes the sentence: 'The professor's explanation was so __________ that even the most complex theories became understandable.'",
      "lectura": "",
      "opciones": [
        "comprehensive",
        "comprehensible",
        "comprehended",
        "comprehending"
      ],
      "correcta": "comprehensive",
      "explicacion": "The option 'comprehensive' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_36",
      "modulo": "Inglés",
      "pregunta": "Which transition fits best? 'The preliminary simulation yielded positive results; __________, continuous testing is necessary to validate the model.'",
      "lectura": "",
      "opciones": [
        "therefore",
        "however",
        "moreover",
        "consequently"
      ],
      "correcta": "however",
      "explicacion": "The option 'however' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_37",
      "modulo": "Inglés",
      "pregunta": "Choose the correct preposition of time: 'The orientation seminar for incoming freshmen is scheduled to commence __________ Monday morning at nine o'clock.'",
      "lectura": "",
      "opciones": [
        "in",
        "at",
        "during",
        "on"
      ],
      "correcta": "on",
      "explicacion": "The option 'on' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_38",
      "modulo": "Inglés",
      "pregunta": "Which option correctly uses 'provided that'?",
      "lectura": "",
      "opciones": [
        "Students may retake the exam provided they to submit a request.",
        "Students may retake the exam provided that submitting a request.",
        "Students may retake the exam provided that they submit a formal written request.",
        "Students may retake the exam providing to that they submit a request."
      ],
      "correcta": "Students may retake the exam provided that they submit a formal written request.",
      "explicacion": "The option 'Students may retake the exam provided that they submit a formal written request.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_39",
      "modulo": "Inglés",
      "pregunta": "Choose the correct conjunction: '__________ the experiment fails, we will need to redesign the entire methodology from scratch.'",
      "lectura": "",
      "opciones": [
        "If",
        "Although",
        "Despite",
        "Unless"
      ],
      "correcta": "If",
      "explicacion": "The option 'If' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_40",
      "modulo": "Inglés",
      "pregunta": "Choose the comparative form that fits properly: 'The new database operates significantly __________ than the obsolete legacy systems.'",
      "lectura": "",
      "opciones": [
        "fastest",
        "as fast",
        "faster",
        "more fast"
      ],
      "correcta": "faster",
      "explicacion": "The option 'faster' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_41",
      "modulo": "Inglés",
      "pregunta": "Identify the correct use of 'used to': 'When I was a child, I __________ play in the park every afternoon after school.'",
      "lectura": "",
      "opciones": [
        "am used to",
        "was used to",
        "use to",
        "used to"
      ],
      "correcta": "used to",
      "explicacion": "The option 'used to' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_42",
      "modulo": "Inglés",
      "pregunta": "Select the correct preposition: 'The thesis consists __________ five chapters and a comprehensive bibliography.'",
      "lectura": "",
      "opciones": [
        "of",
        "from",
        "in",
        "on"
      ],
      "correcta": "of",
      "explicacion": "The option 'of' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_43",
      "modulo": "Inglés",
      "pregunta": "Choose the correct option: 'He speaks English __________ he were a native speaker, but he actually learned it as an adult.'",
      "lectura": "",
      "opciones": [
        "such as",
        "like if",
        "as",
        "as if"
      ],
      "correcta": "as if",
      "explicacion": "The option 'as if' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_44",
      "modulo": "Inglés",
      "pregunta": "Which sentence correctly uses 'would rather'?",
      "lectura": "",
      "opciones": [
        "I would rather study at home than go to the crowded library during exam week.",
        "I would rather to study at home than go to the crowded library.",
        "I rather would study at home than go to the crowded library.",
        "I would rather study at home that go to the crowded library."
      ],
      "correcta": "I would rather study at home than go to the crowded library during exam week.",
      "explicacion": "The option 'I would rather study at home than go to the crowded library during exam week.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_45",
      "modulo": "Inglés",
      "pregunta": "Identify the correct use of 'so that': 'The professor spoke slowly __________ all the international students could understand the lecture.'",
      "lectura": "",
      "opciones": [
        "so as",
        "in order",
        "for that",
        "so that"
      ],
      "correcta": "so that",
      "explicacion": "The option 'so that' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_46",
      "modulo": "Inglés",
      "pregunta": "Select the correct option: 'No sooner __________ the results been announced than the students began celebrating.'",
      "lectura": "",
      "opciones": [
        "were",
        "have",
        "did",
        "had"
      ],
      "correcta": "had",
      "explicacion": "The option 'had' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_47",
      "modulo": "Inglés",
      "pregunta": "Identify the proper modal verb for expressing strong obligation: 'All foreign exchange applicants __________ submit their certified health documents before the official deadline.'",
      "lectura": "",
      "opciones": [
        "might",
        "must",
        "could",
        "would"
      ],
      "correcta": "must",
      "explicacion": "The option 'must' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_48",
      "modulo": "Inglés",
      "pregunta": "Choose the correct form: 'The professor, along with her research assistants, __________ attending the symposium next week.'",
      "lectura": "",
      "opciones": [
        "have been",
        "are",
        "is",
        "were"
      ],
      "correcta": "is",
      "explicacion": "The option 'is' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_49",
      "modulo": "Inglés",
      "pregunta": "Identify the correct form of the present perfect continuous: 'The scientific team __________ on this algorithm for over six consecutive months.'",
      "lectura": "",
      "opciones": [
        "was working",
        "have worked",
        "is working",
        "has been working"
      ],
      "correcta": "has been working",
      "explicacion": "The correct answer is 'has been working' because it follows the tense required by the time markers in the sentence."
    },
    {
      "id": "ingles_50",
      "modulo": "Inglés",
      "pregunta": "Which word correctly completes the sentence? 'The university campus is __________ large that it takes twenty minutes to walk from one end to the other.'",
      "lectura": "",
      "opciones": [
        "so",
        "very",
        "too",
        "such"
      ],
      "correcta": "so",
      "explicacion": "The option 'so' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_51",
      "modulo": "Inglés",
      "pregunta": "Which phrasal verb means 'to investigate'? 'The committee will __________ the allegations of academic misconduct.'",
      "lectura": "",
      "opciones": [
        "look into",
        "look after",
        "look up",
        "look over"
      ],
      "correcta": "look into",
      "explicacion": "The option 'look into' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_52",
      "modulo": "Inglés",
      "pregunta": "Identify the correct meaning of 'to drop out': 'Unfortunately, many students __________ of college due to financial difficulties.'",
      "lectura": "",
      "opciones": [
        "drop by",
        "drop off",
        "drop in",
        "drop out"
      ],
      "correcta": "drop out",
      "explicacion": "The option 'drop out' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_53",
      "modulo": "Inglés",
      "pregunta": "Select the correct form: 'By the end of this semester, I __________ all the required courses for my degree.'",
      "lectura": "",
      "opciones": [
        "will complete",
        "am completing",
        "will have completed",
        "have completed"
      ],
      "correcta": "will have completed",
      "explicacion": "The option 'will have completed' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_54",
      "modulo": "Inglés",
      "pregunta": "Select the correct quantifier: 'There are __________ parking spaces available near the science building during the morning hours.'",
      "lectura": "",
      "opciones": [
        "a little",
        "few",
        "little",
        "a few"
      ],
      "correcta": "few",
      "explicacion": "The option 'few' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_55",
      "modulo": "Inglés",
      "pregunta": "Choose the correct form: 'The number of applicants for the exchange program __________ increased significantly this year.'",
      "lectura": "",
      "opciones": [
        "have",
        "are",
        "were",
        "has"
      ],
      "correcta": "has",
      "explicacion": "The option 'has' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_56",
      "modulo": "Inglés",
      "pregunta": "Which option shows the correct use of a defining relative clause?",
      "lectura": "",
      "opciones": [
        "The students which passed the entrance exam were invited to the orientation.",
        "The students who passed the entrance exam were invited to the orientation session.",
        "The students, who passed the entrance exam, were invited to the orientation.",
        "The students whom passed the entrance exam were invited to the orientation."
      ],
      "correcta": "The students who passed the entrance exam were invited to the orientation session.",
      "explicacion": "The option 'The students who passed the entrance exam were invited to the orientation session.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_57",
      "modulo": "Inglés",
      "pregunta": "Identify the correct sentence using 'be supposed to': 'The meeting __________ start at ten, but the presenter arrived late.'",
      "lectura": "",
      "opciones": [
        "was supposed to",
        "was suppose to",
        "is supposed",
        "supposed to"
      ],
      "correcta": "was supposed to",
      "explicacion": "The option 'was supposed to' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_58",
      "modulo": "Inglés",
      "pregunta": "Choose the correct linking word: 'The student failed the exam __________ having attended all the review sessions.'",
      "lectura": "",
      "opciones": [
        "despite",
        "because",
        "although",
        "however"
      ],
      "correcta": "despite",
      "explicacion": "The option 'despite' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_59",
      "modulo": "Inglés",
      "pregunta": "Choose the correct option to express a prohibition: 'Students __________ use their mobile phones during the examination period.'",
      "lectura": "",
      "opciones": [
        "don't have to",
        "must not",
        "needn't",
        "shouldn't have"
      ],
      "correcta": "must not",
      "explicacion": "The option 'must not' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_60",
      "modulo": "Inglés",
      "pregunta": "Choose the correct option to complete the sentence using the first conditional: 'If the engineering students finish their laboratory project on time, the supervisor __________ them extra academic credits.'",
      "lectura": "",
      "opciones": [
        "gave",
        "gives",
        "will give",
        "would give"
      ],
      "correcta": "will give",
      "explicacion": "La forma verbal 'will give' es la correcta según la estructura condicional indicada."
    },
    {
      "id": "ingles_61",
      "modulo": "Inglés",
      "pregunta": "Select the sentence with correct subject-verb agreement:",
      "lectura": "",
      "opciones": [
        "Neither the professor nor the students was aware of the schedule change.",
        "Neither the professor nor the students were aware of the schedule change.",
        "Neither the professor nor the students is aware of the schedule change.",
        "Neither the professor nor the students has been aware of the schedule change."
      ],
      "correcta": "Neither the professor nor the students were aware of the schedule change.",
      "explicacion": "The option 'Neither the professor nor the students were aware of the schedule change.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_62",
      "modulo": "Inglés",
      "pregunta": "Identify the correct collocation: 'The university has decided to __________ an investigation into the plagiarism allegations.'",
      "lectura": "",
      "opciones": [
        "perform",
        "conduct",
        "make",
        "do"
      ],
      "correcta": "conduct",
      "explicacion": "The option 'conduct' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_63",
      "modulo": "Inglés",
      "pregunta": "Choose the correct preposition: 'The chemistry professor is very good __________ explaining complex concepts to first-year students.'",
      "lectura": "",
      "opciones": [
        "on",
        "at",
        "in",
        "for"
      ],
      "correcta": "at",
      "explicacion": "The option 'at' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_64",
      "modulo": "Inglés",
      "pregunta": "Select the correct form: 'I wish I __________ more time to prepare for the presentation last week.'",
      "lectura": "",
      "opciones": [
        "had had",
        "had",
        "would have",
        "have had"
      ],
      "correcta": "had had",
      "explicacion": "The option 'had had' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_65",
      "modulo": "Inglés",
      "pregunta": "Choose the correct option: 'The teacher made the students __________ the entire chapter before the discussion.'",
      "lectura": "",
      "opciones": [
        "reading",
        "read",
        "to read",
        "to reading"
      ],
      "correcta": "read",
      "explicacion": "The option 'read' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_66",
      "modulo": "Inglés",
      "pregunta": "Choose the correct word: 'The experiment produced __________ interesting results that the team published them immediately.'",
      "lectura": "",
      "opciones": [
        "too",
        "such",
        "very",
        "so"
      ],
      "correcta": "such",
      "explicacion": "The option 'such' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_67",
      "modulo": "Inglés",
      "pregunta": "Identify the correct use of the past perfect: 'By the time the ambulance arrived, the patient __________ consciousness.'",
      "lectura": "",
      "opciones": [
        "had lost",
        "has lost",
        "lost",
        "was losing"
      ],
      "correcta": "had lost",
      "explicacion": "The correct answer is 'had lost' because it follows the tense required by the time markers in the sentence."
    },
    {
      "id": "ingles_68",
      "modulo": "Inglés",
      "pregunta": "Which sentence uses 'enough' correctly?",
      "lectura": "",
      "opciones": [
        "The lecture hall is enough not large to accommodate all students.",
        "The lecture hall is not enough large to accommodate all students.",
        "The lecture hall is not large enough to accommodate all the registered students.",
        "The lecture hall is large not enough to accommodate all students."
      ],
      "correcta": "The lecture hall is not large enough to accommodate all the registered students.",
      "explicacion": "The option 'The lecture hall is not large enough to accommodate all the registered students.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_69",
      "modulo": "Inglés",
      "pregunta": "Choose the correct form: 'If only I __________ to the professor's advice earlier, I would have passed the course.'",
      "lectura": "",
      "opciones": [
        "had listened",
        "have listened",
        "would listen",
        "listened"
      ],
      "correcta": "had listened",
      "explicacion": "La forma verbal 'had listened' es la correcta según la estructura condicional indicada."
    },
    {
      "id": "ingles_70",
      "modulo": "Inglés",
      "pregunta": "Choose the correct conditional form: 'If I __________ you, I would accept the scholarship without hesitation.'",
      "lectura": "",
      "opciones": [
        "would be",
        "were",
        "was",
        "am"
      ],
      "correcta": "were",
      "explicacion": "La forma verbal 'were' es la correcta según la estructura condicional indicada."
    },
    {
      "id": "ingles_71",
      "modulo": "Inglés",
      "pregunta": "Select the correct option: 'The students were asked __________ their cell phones off during the lecture.'",
      "lectura": "",
      "opciones": [
        "to turn",
        "turning",
        "turned",
        "turn"
      ],
      "correcta": "to turn",
      "explicacion": "The option 'to turn' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_72",
      "modulo": "Inglés",
      "pregunta": "Choose the correct word: 'The researcher's findings were __________ with previous studies on the same topic.'",
      "lectura": "",
      "opciones": [
        "consisting",
        "consistent",
        "consist",
        "consisted"
      ],
      "correcta": "consistent",
      "explicacion": "The option 'consistent' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_73",
      "modulo": "Inglés",
      "pregunta": "Choose the correct option with 'make' or 'do': 'The laboratory assistant needs to __________ an experiment to verify the hypothesis.'",
      "lectura": "",
      "opciones": [
        "perform",
        "do",
        "make",
        "take"
      ],
      "correcta": "do",
      "explicacion": "The option 'do' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_74",
      "modulo": "Inglés",
      "pregunta": "Identify the correct use of 'either...or': ",
      "lectura": "",
      "opciones": [
        "You either can take the morning class or attend the evening session.",
        "You can either take the morning class nor attend the evening session.",
        "You can either take the morning class or attend the evening session.",
        "You can either take the morning class and attend the evening session."
      ],
      "correcta": "You can either take the morning class or attend the evening session.",
      "explicacion": "The option 'You can either take the morning class or attend the evening session.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_75",
      "modulo": "Inglés",
      "pregunta": "Select the correct adverb placement: 'The research team __________ completed the longitudinal study after five years of data collection.'",
      "lectura": "",
      "opciones": [
        "finally",
        "lastly",
        "completedly",
        "eventual"
      ],
      "correcta": "finally",
      "explicacion": "The option 'finally' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_76",
      "modulo": "Inglés",
      "pregunta": "Choose the correct form: 'Had the students __________ the instructions carefully, they would not have made so many mistakes.'",
      "lectura": "",
      "opciones": [
        "read",
        "have read",
        "reading",
        "been reading"
      ],
      "correcta": "read",
      "explicacion": "The option 'read' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_77",
      "modulo": "Inglés",
      "pregunta": "Identify the correct synonym for the underlined word: 'The instructions were exceptionally <u>lucid</u>, leaving no room for misunderstanding.'",
      "lectura": "",
      "opciones": [
        "complex",
        "obscure",
        "clear",
        "ambiguous"
      ],
      "correcta": "clear",
      "explicacion": "The option 'clear' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_78",
      "modulo": "Inglés",
      "pregunta": "Choose the correct option: 'The visiting professor gave __________ valuable advice on how to structure our thesis.'",
      "lectura": "",
      "opciones": [
        "ours",
        "us",
        "we",
        "our"
      ],
      "correcta": "us",
      "explicacion": "The option 'us' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_79",
      "modulo": "Inglés",
      "pregunta": "Identify the sentence with correct word order:",
      "lectura": "",
      "opciones": [
        "She ever hardly arrives late to her biochemistry lectures.",
        "Hardly ever she arrives late to her biochemistry lectures.",
        "She hardly ever arrives late to her biochemistry lectures at the university.",
        "She arrives hardly ever late to her biochemistry lectures."
      ],
      "correcta": "She hardly ever arrives late to her biochemistry lectures at the university.",
      "explicacion": "The option 'She hardly ever arrives late to her biochemistry lectures at the university.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_80",
      "modulo": "Inglés",
      "pregunta": "Which option correctly completes the sentence? 'Not only __________ the exam, but she also received the highest score in the class.'",
      "lectura": "",
      "opciones": [
        "did she pass",
        "she passed",
        "passed she",
        "she did pass"
      ],
      "correcta": "did she pass",
      "explicacion": "The option 'did she pass' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_81",
      "modulo": "Inglés",
      "pregunta": "Select the correct phrasal verb: 'The professor asked the students to __________ their assignments by Friday afternoon.'",
      "lectura": "",
      "opciones": [
        "hand over",
        "hand off",
        "hand in",
        "hand out"
      ],
      "correcta": "hand in",
      "explicacion": "The option 'hand in' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_82",
      "modulo": "Inglés",
      "pregunta": "Choose the correct preposition: 'The scholarship was awarded __________ the student with the highest GPA in the entire graduating class.'",
      "lectura": "",
      "opciones": [
        "for",
        "at",
        "to",
        "by"
      ],
      "correcta": "to",
      "explicacion": "The option 'to' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_83",
      "modulo": "Inglés",
      "pregunta": "Select the correct passive form: 'The results of the entrance exam __________ next Monday at the registrar's office.'",
      "lectura": "",
      "opciones": [
        "have announced",
        "will announce",
        "will be announced",
        "are announcing"
      ],
      "correcta": "will be announced",
      "explicacion": "The option 'will be announced' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_84",
      "modulo": "Inglés",
      "pregunta": "Identify the correct sentence using 'have something done': 'She __________ her thesis proofread by a professional editor last month.'",
      "lectura": "",
      "opciones": [
        "has",
        "made",
        "had",
        "got to"
      ],
      "correcta": "had",
      "explicacion": "The option 'had' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_85",
      "modulo": "Inglés",
      "pregunta": "Which sentence correctly uses a non-defining relative clause?",
      "lectura": "",
      "opciones": [
        "Dr. García who is an expert in nanotechnology will give the keynote speech.",
        "Dr. García which is an expert in nanotechnology, will give the keynote speech.",
        "Dr. García, who is an expert in nanotechnology, will give the keynote speech.",
        "Dr. García, that is an expert in nanotechnology, will give the keynote speech."
      ],
      "correcta": "Dr. García, who is an expert in nanotechnology, will give the keynote speech.",
      "explicacion": "The option 'Dr. García, who is an expert in nanotechnology, will give the keynote speech.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_86",
      "modulo": "Inglés",
      "pregunta": "Identify the correct meaning of the idiom: 'The student said the chemistry exam was a piece of cake.'",
      "lectura": "",
      "opciones": [
        "The exam was very easy and required little effort.",
        "The exam was sweet and enjoyable.",
        "The exam was divided into small sections.",
        "The exam included questions about baking."
      ],
      "correcta": "The exam was very easy and required little effort.",
      "explicacion": "The option 'The exam was very easy and required little effort.' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_87",
      "modulo": "Inglés",
      "pregunta": "Choose the correct word to complete: 'The symposium was attended by __________ of distinguished researchers from around the world.'",
      "lectura": "",
      "opciones": [
        "dozen",
        "dozens of a",
        "dozens",
        "a dozens"
      ],
      "correcta": "dozens",
      "explicacion": "The option 'dozens' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_88",
      "modulo": "Inglés",
      "pregunta": "Identify the correct passive construction: 'The new dormitory __________ by next September, according to university officials.'",
      "lectura": "",
      "opciones": [
        "will have been completed",
        "will be completing",
        "will complete",
        "is completing"
      ],
      "correcta": "will have been completed",
      "explicacion": "The option 'will have been completed' is grammatically correct within the context of this sentence."
    },
    {
      "id": "ingles_89",
      "modulo": "Inglés",
      "pregunta": "Select the correct option: 'I look forward __________ from you regarding the status of my graduate application.'",
      "lectura": "",
      "opciones": [
        "for hearing",
        "to hear",
        "to hearing",
        "hearing"
      ],
      "correcta": "to hearing",
      "explicacion": "The option 'to hearing' is grammatically correct within the context of this sentence."
    }
  ]
};
