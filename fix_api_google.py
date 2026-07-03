import re

with open("api/chat.js", "r", encoding="utf-8") as f:
    code = f.read()

# Replace from `// 2. Extraer API Key...` to the end of the file
pattern = r"    // 2\. Extraer API Key.*?  \} catch \(err\) \{"

new_logic = """    // 2. Extraer API Key de Google (Gemini)
    const googleApiKey = process.env.GEMINI_API_KEY || "AIzaSyDkfqqKjU02EWi7CZ7M-54sKV-F0IaqYAU";

    // 3. Formatear mensajes para Google Generative Language API
    // El frontend nos manda: { role: 'user'|'assistant', content: '...' }
    const formattedContents = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const payload = {
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      },
      contents: formattedContents
    };

    // 4. Llamar a la API nativa de Google Gemini
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${googleApiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    
    // 5. Devolver la respuesta al cliente
    if (data.candidates && data.candidates.length > 0) {
       const textReply = data.candidates[0].content.parts[0].text;
       return res.status(200).json({ reply: textReply });
    } else if (data.error) {
       return res.status(200).json({ reply: `❌ Error de Google API: ${data.error.message || JSON.stringify(data.error)}` });
    } else {
       return res.status(200).json({ reply: `❌ Respuesta inesperada de Google: ${JSON.stringify(data)}` });
    }

  } catch (err) {"""

new_code = re.sub(pattern, new_logic, code, flags=re.DOTALL)

with open("api/chat.js", "w", encoding="utf-8") as f:
    f.write(new_code)

print("api/chat.js updated to use Google native API.")
