import re

with open("aprendizaje.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Remove aiKnowledgeBase
knowledge_base = r"""        // Respuestas inteligentes programadas
        const aiKnowledgeBase = \[[\s\S]*?\];"""
html = re.sub(knowledge_base, "let chatHistory = [];", html)

# 2. Replace simulateAiResponse calls
html = html.replace("simulateAiResponse(text)", "fetchAiResponse(text)")
html = html.replace("simulateAiResponse(promptText)", "fetchAiResponse(promptText)")

# 3. Replace the actual simulateAiResponse function with fetchAiResponse
old_simulate = r"""        function simulateAiResponse\(userText\) \{
            typingIndicator\.classList\.remove\('hidden'\);
            typingIndicator\.classList\.add\('flex'\);
            scrollToBottom\(\);
            setMacExpression\('searching'\); // Mac cambia su cara a modo análisis/búsqueda

            setTimeout\(\(\) => \{
                typingIndicator\.classList\.remove\('flex'\);
                typingIndicator\.classList\.add\('hidden'\);

                // Buscar respuesta inteligente basada en palabras clave
                const lowerText = userText\.toLowerCase\(\);
                let matchedResponse = null;

                for \(let knowledge of aiKnowledgeBase\) \{
                    if \(knowledge\.keywords\.some\(kw => lowerText\.includes\(kw\)\)\) \{
                        matchedResponse = knowledge\.response;
                        break;
                    \}
                \}

                // Respuesta por defecto si no encuentra coincidencia directa
                if \(!matchedResponse\) \{
                    matchedResponse = "He registrado tu duda sobre \*\*'" \+ userText \+ "'\*\*\.\\n\\nComo inteligencia artificial de entrenamiento, te recomiendo iniciar ahora mismo nuestro \*\*Simulador UV \(EXANI-II\)\*\* arriba\. Al finalizar tu intento de 120 preguntas, generaré un diagnóstico completo para decirte exactamente en qué temas específicos fallaste y cómo resolver este tipo de planteamientos\.";
                    setMacExpression\('thinking'\);
                \} else \{
                    setMacExpression\('success'\);
                \}

                // Convertir saltos de línea y negritas básicas a HTML
                const formattedText = matchedResponse
                    \.replace\(/\\\*\\\*\(.*?\)\\\*\\\*/g, '<strong>$1</strong>'\)
                    \.replace\(/\\n\\n/g, '</p><p class="mt-2">'\)
                    \.replace\(/\\n/g, '<br>'\);

                const aiMsgHtml = `
                    <div class="flex gap-4 max-w-2xl fade-in">
                        <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center shadow-md overflow-hidden">
                            <img src="mac-greeting\.png" alt="Mac" class="w-full h-full object-cover scale-105">
                        </div>
                        <div class="bg-\[#202c33\] border border-white/5 p-4 rounded-2xl text-sm leading-relaxed text-white/95 rounded-tl-none shadow-sm">
                            <p>\$\{formattedText\}</p>
                        </div>
                    </div>
                `;
                chatMessages\.insertAdjacentHTML\('beforeend', aiMsgHtml\);
                scrollToBottom\(\);
            \}, 1200\); // Retardo simulado de 1\.2 segundos para parecer más real
        \}"""

new_fetch = """        async function fetchAiResponse(userText) {
            typingIndicator.classList.remove('hidden');
            typingIndicator.classList.add('flex');
            scrollToBottom();
            setMacExpression('searching');

            chatHistory.push({ role: 'user', content: userText });

            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ messages: chatHistory })
                });
                
                const data = await response.json();
                
                typingIndicator.classList.remove('flex');
                typingIndicator.classList.add('hidden');
                
                let replyText = "";
                if (response.ok && data.reply) {
                    replyText = data.reply;
                    chatHistory.push({ role: 'assistant', content: replyText });
                    setMacExpression('success');
                } else if (response.status === 429) {
                    replyText = data.reply || "¡Ups! Has hecho muchas preguntas seguidas. 😅 Déjame tomar un vasito de agua y volvemos a platicar en un rato.";
                    setMacExpression('thinking');
                } else {
                    replyText = "Perdón, tuve un problema de conexión con el servidor. 😥 ¿Me lo repites en unos segundos?";
                    setMacExpression('thinking');
                }

                const formattedText = replyText
                    .replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')
                    .replace(/\\n\\n/g, '</p><p class="mt-2">')
                    .replace(/\\n/g, '<br>');

                const aiMsgHtml = `
                    <div class="flex gap-4 max-w-2xl fade-in">
                        <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center shadow-md overflow-hidden">
                            <img src="mac-greeting.png" alt="Mac" class="w-full h-full object-cover scale-105">
                        </div>
                        <div class="bg-[#202c33] border border-white/5 p-4 rounded-2xl text-sm leading-relaxed text-white/95 rounded-tl-none shadow-sm">
                            <p>${formattedText}</p>
                        </div>
                    </div>
                `;
                chatMessages.insertAdjacentHTML('beforeend', aiMsgHtml);
                scrollToBottom();

            } catch (error) {
                typingIndicator.classList.remove('flex');
                typingIndicator.classList.add('hidden');
                setMacExpression('thinking');
                console.error("Chat error:", error);
                
                const aiMsgHtml = `
                    <div class="flex gap-4 max-w-2xl fade-in">
                        <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center shadow-md overflow-hidden">
                            <img src="mac-greeting.png" alt="Mac" class="w-full h-full object-cover scale-105">
                        </div>
                        <div class="bg-[#202c33] border border-white/5 p-4 rounded-2xl text-sm leading-relaxed text-white/95 rounded-tl-none shadow-sm">
                            <p>¡Oops! Algo falló en la conexión. ¿Podemos intentarlo de nuevo más tarde?</p>
                        </div>
                    </div>
                `;
                chatMessages.insertAdjacentHTML('beforeend', aiMsgHtml);
                scrollToBottom();
            }
        }"""

html = re.sub(old_simulate, new_fetch, html)

with open("aprendizaje.html", "w", encoding="utf-8") as f:
    f.write(html)

print("aprendizaje.html updated with real chat.")
