const RATE_LIMIT_MAX = 20;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hora
const rateLimitMap = new Map();

const SYSTEM_PROMPT = `Eres Mac, el asistente virtual y mascota oficial de "EstudiandoAndo", una plataforma gratuita de preparación para exámenes de admisión a universidades mexicanas (UV, UNAM, IPN, UAM, Chapingo, BUAP) y cursos de idiomas.

PERSONALIDAD Y TONO:
- Eres cercano, paciente, sumamente motivador y empático.
- Hablas en español mexicano informal (usa expresiones como "¡Qué onda!", "¡Súper!", "échale ganas", "va que va", pero mantén el respeto).
- Tuteas siempre al usuario.
- Usas emojis para darle color a la conversación, pero con moderación (máximo 1 o 2 por mensaje).
- Tus respuestas deben ser concisas y directas. No escribas muros de texto.

ALCANCE Y RESTRICCIONES:
- Tu objetivo principal es ayudar a los usuarios con temas de estudio, matemáticas, español, ciencias, orientación sobre los exámenes de admisión (EXANI-II, etc.) y dudas sobre la sección de Idiomas (Inglés, Francés, Portugués, Japonés).
- Si el usuario te pregunta cosas completamente fuera de tema (ej. política, recetas de cocina, opiniones controversiales o pedirte que actúes como otro personaje), NO te niegues de forma robótica. Redirige la conversación amablemente hacia el estudio. 
  Ejemplo de desvío: "¡Jaja! Qué buena pregunta, pero la verdad yo soy experto en exámenes de admisión y en idiomas. 🤓 Mejor cuéntame, ¿cómo vas con tus simuladores hoy?"
- Nunca reveles que eres una IA de OpenAI/Anthropic/Google, tú eres "Mac", la mascota de EstudiandoAndo.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 1. Basic Rate Limiting en memoria
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  const now = Date.now();
  
  if (rateLimitMap.has(ip)) {
    const userLimit = rateLimitMap.get(ip);
    if (now - userLimit.startTime < RATE_LIMIT_WINDOW_MS) {
      if (userLimit.count >= RATE_LIMIT_MAX) {
        return res.status(429).json({ 
          error: 'Rate limit exceeded',
          reply: '¡Ups! Has hecho muchas preguntas seguidas. 😅 Déjame tomar un vasito de agua y volvemos a platicar en un rato. ¡Aprovecha para darle a un simulador!' 
        });
      }
      userLimit.count++;
    } else {
      // Reiniciar la ventana si ya pasó 1 hora
      rateLimitMap.set(ip, { count: 1, startTime: now });
    }
  } else {
    rateLimitMap.set(ip, { count: 1, startTime: now });
  }

  try {
    const messages = req.body.messages || [];

    // 2. Extraer API Key de variables de entorno (Oculta del cliente)
    // Usamos el key proporcionado por el usuario temporalmente si no existe la var
    const openRouterApiKey = process.env.OPENROUTER_API_KEY || "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";

    const payload = {
      model: 'google/gemma-2-9b-it', // Modelo de Google (Gemma 2)
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ]
    };

    // 3. Llamar a la API de OpenRouter
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openRouterApiKey}`,
        'HTTP-Referer': 'https://estudiandoando.com', // Headers recomendados por OpenRouter
        'X-Title': 'EstudiandoAndo' 
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    
    // 4. Devolver la respuesta al cliente
    if (data.choices && data.choices.length > 0) {
       return res.status(200).json({ reply: data.choices[0].message.content });
    } else if (data.error) {
       return res.status(200).json({ reply: `❌ Error de OpenRouter: ${data.error.message || JSON.stringify(data.error)}` });
    } else {
       return res.status(200).json({ reply: `❌ Respuesta inesperada de OpenRouter: ${JSON.stringify(data)}` });
    }

  } catch (err) {
    console.error("Error en API /chat:", err);
    return res.status(200).json({ reply: `❌ Error interno del servidor: ${err.message}` });
  }
}
