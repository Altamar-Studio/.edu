let exercises = [];
let currentIndex = 0;
let lives = getLives();
let correctOnFirstTry = 0;
let totalExercises = 0;
let hasFailedCurrent = false;
let currentAnswerState = null; // Used to track user's selected answer

const container = document.getElementById('exercise-container');
const btnCheck = document.getElementById('btn-check');
const btnContinue = document.getElementById('btn-continue');
const progressBar = document.getElementById('progress-bar');
const livesCounter = document.getElementById('lives-counter');
const feedbackBar = document.getElementById('feedback-bar');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackIconContainer = document.getElementById('feedback-icon-container');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackSubtitle = document.getElementById('feedback-subtitle');
const modalGameOver = document.getElementById('modal-game-over');
const modalSuccess = document.getElementById('modal-success');

async function loadExercises() {
    try {
        const response = await fetch('idiomas-ejercicios.json');
        const data = await response.json();
        // Just take the first lesson for demo
        exercises = data.unit1.lessons[0].exercises;
        totalExercises = exercises.length;
        renderExercise();
        updateProgress();
    } catch (e) {
        console.error("Error loading exercises", e);
        container.innerHTML = '<p class="text-center mt-10">Error loading exercises.</p>';
    }
}

function updateProgress() {
    const percent = (currentIndex / exercises.length) * 100;
    progressBar.style.width = `${percent}%`;
}

function updateLives() {
    livesCounter.textContent = lives;
    if (lives <= 0) {
        modalGameOver.classList.remove('hidden');
        modalGameOver.classList.add('flex');
    }
}

function renderExercise() {
    if (currentIndex >= exercises.length) {
        // Win state
        
        updateProgress();
        
        // Calculate XP and Accuracy
        const accuracy = Math.round((correctOnFirstTry / totalExercises) * 100);
        const xpEarned = 10 + (correctOnFirstTry * 2); // 10 base + 2 per perfect answer
        
        // Save to Profile
        const result = recordLessonCompletion(xpEarned, accuracy);
        
        // Populate Summary UI
        document.getElementById('summary-xp').textContent = `+${xpEarned}`;
        document.getElementById('summary-accuracy').textContent = `${accuracy}%`;
        document.getElementById('summary-streak').textContent = `${result.newStreak} Días`;
        
        // Show achievements if any
        if (result.newAchievements.length > 0) {
            const achContainer = document.getElementById('achievements-container');
            const achList = document.getElementById('achievements-list');
            achContainer.classList.remove('hidden');
            result.newAchievements.forEach(ach => {
                achList.innerHTML += `
                    <div class="flex items-center gap-3 bg-white dark:bg-neutral-800 border border-black/5 dark:border-white/5 p-3 rounded-xl shadow-sm animate-pop">
                        <span class="text-2xl">${ach.icon}</span>
                        <div class="text-left">
                            <span class="block font-bold text-sm text-ea-dark dark:text-white">${ach.name}</span>
                            <span class="text-xs opacity-60">${ach.desc}</span>
                        </div>
                    </div>
                `;
            });
        }

        // Celebrate Confetti logic
        const confettiContainer = document.getElementById('confetti-container');
        if(confettiContainer) {
            for(let i=0; i<30; i++) {
                const conf = document.createElement('div');
                conf.className = `absolute w-2 h-2 rounded-full ${['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500'][Math.floor(Math.random()*4)]}`;
                conf.style.left = Math.random() * 100 + '%';
                conf.style.top = -10 + 'px';
                conf.style.opacity = Math.random();
                conf.style.transform = `scale(${Math.random() * 1.5})`;
                confettiContainer.appendChild(conf);
                
                // Animate falling
                conf.animate([
                    { transform: `translate3d(0,0,0) rotate(0deg)`, opacity: 1 },
                    { transform: `translate3d(${Math.random()*100 - 50}px, ${window.innerHeight}px, 0) rotate(${Math.random()*360}deg)`, opacity: 0 }
                ], { duration: 1500 + Math.random()*2000, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', fill: 'forwards' });
            }
        }

        modalSuccess.classList.remove('hidden');
        modalSuccess.classList.add('flex');
        return;

    }

    const ex = exercises[currentIndex];
    currentAnswerState = null;
    hasFailedCurrent = false;
    disableCheckBtn();
    hideFeedback();

    let html = `<h2 class="text-2xl sm:text-3xl font-bold mb-8 text-ea-dark dark:text-white">${ex.question}</h2>`;

    if (ex.type === 'multiple_choice') {
        html += `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">`;
        ex.options.forEach((opt, i) => {
            html += `<button class="opt-btn border-2 border-black/10 dark:border-white/10 rounded-2xl p-4 sm:p-6 text-lg font-medium text-left hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" data-val="${opt}" aria-label="Opción: ${opt}">${opt}</button>`;
        });
        html += `</div>`;
    } 
    else if (ex.type === 'fill_in_blank') {
        const parts = ex.phrase.split('_____');
        html += `<div class="text-2xl sm:text-3xl font-medium mb-8 flex flex-wrap items-center gap-2">`;
        html += `<span>${parts[0]}</span>`;
        html += `<button id="dropzone" aria-label="Espacio para completar, presiona para vaciar" class="border-b-4 border-dashed border-gray-400 dark:border-gray-600 min-w-[8rem] h-10 mx-2 flex items-center justify-center text-blue-600 font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"></button>`;
        html += `<span>${parts[1]}</span>`;
        html += `</div>`;
        html += `<div class="flex flex-wrap gap-4" id="word-bank">`;
        ex.options.forEach(opt => {
            html += `<button class="word-btn border-2 border-black/10 dark:border-white/10 rounded-xl px-6 py-3 font-bold text-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500" data-val="${opt}" aria-label="Palabra: ${opt}">${opt}</button>`;
        });
        html += `</div>`;
    }
    else if (ex.type === 'translate') {
        html += `<div class="flex items-start gap-4 mb-8">
                    <img src="mac-greeting.png" class="w-24 h-24 hidden sm:block drop-shadow-md" alt="Mac">
                    <div class="border-2 border-black/10 dark:border-white/10 rounded-2xl rounded-tl-none p-4 font-medium text-lg bg-white dark:bg-neutral-900 shadow-sm relative">
                        ${ex.phrase}
                        <div class="absolute -left-2 top-0 w-4 h-4 border-t-2 border-l-2 border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 transform -rotate-45 -mt-2 -ml-2"></div>
                    </div>
                 </div>`;
        html += `<textarea id="translate-input" aria-label="Escribe tu traducción aquí" class="w-full bg-gray-100 dark:bg-neutral-900 border-2 border-black/10 dark:border-white/10 rounded-2xl p-4 text-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors resize-none" rows="3" placeholder="Escribe tu traducción..."></textarea>`;
    }
    else if (ex.type === 'order_words') {
        let shuffled = [...ex.words].sort(() => Math.random() - 0.5);
        html += `<div id="dropzone" role="list" aria-label="Oración formada" class="border-b-2 border-black/10 dark:border-white/10 min-h-[60px] mb-8 flex flex-wrap gap-2 pb-2"></div>`;
        html += `<div class="flex flex-wrap gap-2" id="word-bank">`;
        shuffled.forEach(w => {
            html += `<button class="order-word-btn border-2 border-black/10 dark:border-white/10 rounded-xl px-4 py-2 font-bold text-md shadow-sm hover:shadow-md transition-all bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500" data-val="${w}" aria-label="Palabra: ${w}">${w}</button>`;
        });
        html += `</div>`;
    }
    else if (ex.type === 'match_pairs') {
        let allItems = [];
        ex.pairs.forEach(p => {
            allItems.push({ val: p.a, type: 'a' });
            allItems.push({ val: p.b, type: 'b' });
        });
        allItems = allItems.sort(() => Math.random() - 0.5);
        html += `<div class="grid grid-cols-2 gap-4">`;
        allItems.forEach(item => {
            html += `<button class="match-btn border-2 border-black/10 dark:border-white/10 rounded-2xl p-4 font-medium text-lg hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" data-val="${item.val}" aria-label="Opción: ${item.val}">${item.val}</button>`;
        });
        html += `</div>`;
    }

    container.innerHTML = html;
    attachExerciseEvents(ex);
}

function attachExerciseEvents(ex) {
    if (ex.type === 'multiple_choice') {
        const btns = container.querySelectorAll('.opt-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                btns.forEach(b => {
                    b.classList.remove('border-blue-500', 'bg-blue-50', 'dark:bg-blue-900/30');
                    b.classList.add('border-black/10', 'dark:border-white/10');
                });
                btn.classList.remove('border-black/10', 'dark:border-white/10');
                btn.classList.add('border-blue-500', 'bg-blue-50', 'dark:bg-blue-900/30');
                currentAnswerState = btn.dataset.val;
                enableCheckBtn();
            });
        });
    } 
    else if (ex.type === 'fill_in_blank') {
        const btns = container.querySelectorAll('.word-btn');
        const dropzone = document.getElementById('dropzone');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Return previous word to bank
                if (currentAnswerState) {
                    const prevBtn = document.querySelector(`.word-btn[data-val="${currentAnswerState}"]`);
                    if(prevBtn) prevBtn.classList.remove('opacity-0', 'pointer-events-none');
                }
                currentAnswerState = btn.dataset.val;
                dropzone.textContent = currentAnswerState;
                dropzone.classList.remove('border-dashed', 'border-gray-400');
                dropzone.classList.add('border-solid', 'border-blue-500');
                btn.classList.add('opacity-0', 'pointer-events-none'); // Hide from bank
                enableCheckBtn();
            });
        });
        dropzone.addEventListener('click', () => {
            if (currentAnswerState) {
                const prevBtn = document.querySelector(`.word-btn[data-val="${currentAnswerState}"]`);
                if(prevBtn) prevBtn.classList.remove('opacity-0', 'pointer-events-none');
                currentAnswerState = null;
                dropzone.textContent = '';
                dropzone.classList.add('border-dashed', 'border-gray-400');
                dropzone.classList.remove('border-solid', 'border-blue-500');
                disableCheckBtn();
            }
        });
    }
    else if (ex.type === 'translate') {
        const input = document.getElementById('translate-input');
        input.addEventListener('input', () => {
            currentAnswerState = input.value.trim();
            if (currentAnswerState.length > 0) enableCheckBtn();
            else disableCheckBtn();
        });
    }
    else if (ex.type === 'order_words') {
        const btns = container.querySelectorAll('.order-word-btn');
        const dropzone = document.getElementById('dropzone');
        let selectedWords = [];
        
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if(btn.parentElement.id === 'word-bank') {
                    dropzone.appendChild(btn);
                    selectedWords.push(btn.dataset.val);
                } else {
                    document.getElementById('word-bank').appendChild(btn);
                    selectedWords = selectedWords.filter(w => w !== btn.dataset.val);
                }
                currentAnswerState = selectedWords;
                if(selectedWords.length > 0) enableCheckBtn();
                else disableCheckBtn();
            });
        });
    }
    else if (ex.type === 'match_pairs') {
        const btns = container.querySelectorAll('.match-btn');
        let selectedA = null;
        let matchedPairsCount = 0;
        
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if(btn.classList.contains('opacity-0')) return; // Already matched
                
                if(!selectedA) {
                    selectedA = btn;
                    btn.classList.add('border-blue-500', 'bg-blue-50');
                } else if(selectedA === btn) {
                    selectedA = null;
                    btn.classList.remove('border-blue-500', 'bg-blue-50');
                } else {
                    // Check if match
                    let isMatch = false;
                    ex.pairs.forEach(p => {
                        if ((p.a === selectedA.dataset.val && p.b === btn.dataset.val) ||
                            (p.b === selectedA.dataset.val && p.a === btn.dataset.val)) {
                            isMatch = true;
                        }
                    });
                    
                    if(isMatch) {
                        btn.classList.add('border-green-500', 'bg-green-50');
                        selectedA.classList.remove('border-blue-500', 'bg-blue-50');
                        selectedA.classList.add('border-green-500', 'bg-green-50');
                        
                        setTimeout(() => {
                            btn.classList.add('opacity-0', 'pointer-events-none');
                            selectedA.classList.add('opacity-0', 'pointer-events-none');
                            selectedA = null;
                            matchedPairsCount++;
                            if(matchedPairsCount === ex.pairs.length) {
                                currentAnswerState = "done";
                                enableCheckBtn();
                                // Auto check
                                checkAnswer();
                            }
                        }, 500);
                    } else {
                        // Wrong match shake
                        btn.classList.add('animate-shake', 'border-red-500');
                        selectedA.classList.add('animate-shake', 'border-red-500');
                        setTimeout(() => {
                            btn.classList.remove('animate-shake', 'border-red-500');
                            selectedA.classList.remove('animate-shake', 'border-red-500', 'border-blue-500', 'bg-blue-50');
                            selectedA = null;
                        }, 500);
                        lives--;
                        updateLives();
                    }
                }
            });
        });
    }
}

function enableCheckBtn() {
    btnCheck.classList.remove('bg-gray-200', 'text-gray-400', 'dark:bg-neutral-800', 'dark:text-neutral-500', 'cursor-not-allowed');
    btnCheck.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700');
}

function disableCheckBtn() {
    btnCheck.classList.add('bg-gray-200', 'text-gray-400', 'dark:bg-neutral-800', 'dark:text-neutral-500', 'cursor-not-allowed');
    btnCheck.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700');
}

btnCheck.addEventListener('click', () => {
    if(btnCheck.classList.contains('cursor-not-allowed')) return;
    checkAnswer();
});

function checkAnswer() {
    const ex = exercises[currentIndex];
    let isCorrect = false;
    let correctAnswerStr = "";

    if (ex.type === 'multiple_choice' || ex.type === 'fill_in_blank') {
        isCorrect = (currentAnswerState === ex.answer);
        correctAnswerStr = ex.answer;
    } 
    else if (ex.type === 'translate') {
        let normInput = currentAnswerState.toLowerCase().replace(/[.,!?]/g, '');
        let accepted = [ex.answer.toLowerCase().replace(/[.,!?]/g, '')];
        if(ex.accepted) {
            ex.accepted.forEach(a => accepted.push(a.toLowerCase().replace(/[.,!?]/g, '')));
        }
        isCorrect = accepted.includes(normInput);
        correctAnswerStr = ex.answer;
    }
    else if (ex.type === 'order_words') {
        isCorrect = JSON.stringify(currentAnswerState) === JSON.stringify(ex.answer);
        correctAnswerStr = ex.answer.join(" ");
    }
    else if (ex.type === 'match_pairs') {
        isCorrect = true; // Auto checked during interactions
    }

    if (isCorrect) {
        if (!hasFailedCurrent) correctOnFirstTry++;
        showFeedback(true);
    } else {
        hasFailedCurrent = true;
        lives = decrementLife();
        updateLives();
        container.classList.add('animate-shake');
        setTimeout(() => container.classList.remove('animate-shake'), 400);
        showFeedback(false, correctAnswerStr);
    }
}

function showFeedback(isCorrect, correctStr = "") {
    feedbackBar.classList.remove('hidden', 'bg-green-100', 'dark:bg-green-900', 'text-green-800', 'dark:text-green-100', 'bg-red-100', 'dark:bg-red-900', 'text-red-800', 'dark:text-red-100');
    btnContinue.classList.remove('bg-green-600', 'text-white', 'hover:bg-green-700', 'bg-red-600', 'hover:bg-red-700');
    
    if(isCorrect) {
        feedbackBar.classList.add('bg-green-100', 'dark:bg-green-900', 'text-green-800', 'dark:text-green-100');
        btnContinue.classList.add('bg-green-600', 'text-white', 'hover:bg-green-700');
        feedbackIconContainer.classList.add('text-green-600');
        feedbackIconContainer.classList.remove('text-red-600');
        feedbackIcon.textContent = 'check';
        feedbackTitle.textContent = '¡Correcto!';
        feedbackSubtitle.classList.add('hidden');
    } else {
        feedbackBar.classList.add('bg-red-100', 'dark:bg-red-900', 'text-red-800', 'dark:text-red-100');
        btnContinue.classList.add('bg-red-600', 'text-white', 'hover:bg-red-700');
        feedbackIconContainer.classList.add('text-red-600');
        feedbackIconContainer.classList.remove('text-green-600');
        feedbackIcon.textContent = 'close';
        feedbackTitle.textContent = 'Respuesta incorrecta';
        feedbackSubtitle.textContent = `Solución: ${correctStr}`;
        feedbackSubtitle.classList.remove('hidden');
    }
    
    feedbackBar.classList.add('flex', 'show');
    btnCheck.parentElement.classList.add('hidden');
}

function hideFeedback() {
    feedbackBar.classList.remove('flex', 'show');
    feedbackBar.classList.add('hidden');
    btnCheck.parentElement.classList.remove('hidden');
}

btnContinue.addEventListener('click', () => {
    // If correct, move next. If wrong, we can just move next for this demo, or re-push to end of queue.
    // Duolingo pushes wrong answers to the end. Let's do that.
    if(feedbackTitle.textContent === 'Respuesta incorrecta' && lives > 0) {
        const failedEx = exercises.splice(currentIndex, 1)[0];
        exercises.push(failedEx);
        // Do not increment currentIndex, so we render the next one in the queue
    } else {
        currentIndex++;
    }
    renderExercise();
    updateProgress();
});

// Init
loadExercises();


document.addEventListener(keydown, (e) => {
    if(e.key === Enter) {
        if(!feedbackBar.classList.contains(hidden)) {
            btnContinue.click();
        } else if(!btnCheck.classList.contains(cursor-not-allowed)) {
            // Check if focus is on textarea, to avoid submitting when pressing enter in textarea
            if(document.activeElement && document.activeElement.tagName === TEXTAREA) return;
            btnCheck.click();
        }
    }
});
