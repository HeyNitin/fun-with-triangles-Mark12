const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector('#submit-answer-btn');
const outputEl = document.querySelector('#output');

const correctAnswers = ['90°', 'obtuse-angled', 'right-angled', 'one-right-angle', 'right-angled'];

submitAnswerBtn.addEventListener('click', calculateScore);

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index += 1;
    }

    outputEl.innerText = `You scored ${score} out of 5.`
}