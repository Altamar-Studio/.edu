import re

with open('leccion.js', 'r') as f:
    content = f.read()

# 1. Update review lesson vocab check
content = content.replace(
'''                    lesson.exercises.forEach(ex => {
                        if (ex.vocab && ex.vocab.word && weakWords.includes(ex.vocab.word)) {
                            allReviewExercises.push(ex);
                        }
                    });''',
'''                    lesson.exercises.forEach(ex => {
                        const wordTarget = ex.target_vocab || (ex.vocab && ex.vocab.word);
                        if (wordTarget && weakWords.includes(wordTarget)) {
                            allReviewExercises.push(ex);
                        }
                    });'''
)

# 2. Update renderExercise prompt
content = content.replace(
'''    const questionText = ex.prompt || ex.question || '';''',
'''    const questionText = ex.question || ex.prompt || '';'''
)

# 3. Update multiple_choice options
content = content.replace(
'''        const mcOptions = ex.options && ex.options.length
            ? ex.options
            : [ex.answer, ...(ex.distractors || [])].sort(() => Math.random() - 0.5);''',
'''        const correctAnswer = ex.correct_answer || ex.answer;
        const mcOptions = ex.options && ex.options.length
            ? ex.options
            : [correctAnswer, ...(ex.distractors || [])].sort(() => Math.random() - 0.5);'''
)

# 4. Update translate parsing
content = content.replace(
'''        const phraseMatch = (ex.prompt || '').match(/['“«](.+?)['”»]/);
        const displayPhrase = ex.phrase || (phraseMatch ? phraseMatch[1] : ex.prompt) || '';''',
'''        const phraseMatch = (ex.question || ex.prompt || '').match(/['“«](.+?)['”»]/);
        const displayPhrase = ex.phrase || (phraseMatch ? phraseMatch[1] : (ex.question || ex.prompt)) || '';'''
)

# 5. Update order_words options
content = content.replace(
'''        const wordBank = ex.options && ex.options.length ? ex.options : (ex.words || []);''',
'''        const wordBank = ex.word_bank || ex.options || ex.words || [];'''
)

# 6. Update checkAnswer logic
content = content.replace(
'''    let isCorrect = false;
    let correctAnswerStr = "";

    if (ex.type === 'multiple_choice' || ex.type === 'fill_in_blank') {
        isCorrect = (currentAnswerState === ex.answer);
        correctAnswerStr = ex.answer;
    } 
    else if (ex.type === 'translate') {
        let normInput = currentAnswerState.toLowerCase().replace(/[.,!?]/g, '');
        let accepted = [ex.answer.toLowerCase().replace(/[.,!?]/g, '')];
        // Support both field names: 'accepted_answers' (new schema) and 'accepted' (legacy)
        const acceptedList = ex.accepted_answers || ex.accepted || [];
        acceptedList.forEach(a => accepted.push(a.toLowerCase().replace(/[.,!?]/g, '')));
        isCorrect = accepted.includes(normInput);
        correctAnswerStr = ex.answer;
    }
    else if (ex.type === 'order_words') {
        isCorrect = JSON.stringify(currentAnswerState) === JSON.stringify(ex.answer);
        correctAnswerStr = ex.answer.join(" ");
    }''',
'''    let isCorrect = false;
    let correctAnswerStr = "";
    
    const correctAnswer = ex.correct_answer || ex.answer;

    if (ex.type === 'multiple_choice' || ex.type === 'fill_in_blank') {
        isCorrect = (currentAnswerState === correctAnswer);
        correctAnswerStr = correctAnswer;
    } 
    else if (ex.type === 'translate') {
        let normInput = currentAnswerState.toLowerCase().replace(/[.,!?¿¡]/g, '');
        let accepted = [correctAnswer.toLowerCase().replace(/[.,!?¿¡]/g, '')];
        const acceptedList = ex.accepted_answers || ex.accepted || [];
        acceptedList.forEach(a => accepted.push(a.toLowerCase().replace(/[.,!?¿¡]/g, '')));
        isCorrect = accepted.includes(normInput);
        correctAnswerStr = correctAnswer;
    }
    else if (ex.type === 'order_words') {
        const correctArr = typeof correctAnswer === 'string' ? correctAnswer.split(' ') : correctAnswer;
        isCorrect = JSON.stringify(currentAnswerState) === JSON.stringify(correctArr);
        correctAnswerStr = Array.isArray(correctAnswer) ? correctAnswer.join(" ") : correctAnswer;
    }'''
)

# 7. Update mastery tracking
content = content.replace(
'''    if (ex.vocab && ex.vocab.word) {
        const params = getLessonParams();
        if (typeof recordVocabAttempt === 'function') {
            // Don't penalize repeatedly in the same session if they retry
            if (!ex._masteryRecorded) {
                recordVocabAttempt(params.lang, ex.vocab.word, isCorrect);
                ex._masteryRecorded = true;
            }
        }
    }''',
'''    const wordTarget = ex.target_vocab || (ex.vocab && ex.vocab.word);
    if (wordTarget) {
        const params = getLessonParams();
        if (typeof recordVocabAttempt === 'function') {
            if (!ex._masteryRecorded) {
                recordVocabAttempt(params.lang, wordTarget, isCorrect);
                ex._masteryRecorded = true;
            }
        }
    }'''
)

with open('leccion.js', 'w') as f:
    f.write(content)
print("leccion.js updated successfully")
