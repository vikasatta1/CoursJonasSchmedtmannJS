'use strict';


/*console.log(document.querySelector('.message').textContent)
console.log(document.querySelector('.number').textContent)
document.querySelector('.highscore').textContent*/
function newSecretNumber() {
    return Math.trunc(Math.random() * 20) + 1
}

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}
const displayScore = (score) => {
    document.querySelector('.score').textContent = score
}
const displayHighScore = (highscore) => {
    document.querySelector('.highscore').textContent = highscore
}

let secretNumber = newSecretNumber()
let score = 20
let highscore = 0
let between = 1


//кнопка CHECK
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    //когда не ввел число в инпут
    if (!guess) {
        displayMessage('No number')
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!!!')
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        if (score > highscore) {
            displayHighScore(score)
            highscore = score
        } else {
            displayHighScore(highscore)
        }
    } else if (guess !== secretNumber) {
        if (score > 0) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!')
            score--
            displayScore(score)
            between++
            document.querySelector('.between').textContent = `(Between ${between} and 20)`
        }
    }
    if (Number(document.querySelector('.score').textContent) === 0) {
        //когда проиграл
        displayMessage('You lost the Game')
    }
})

//кнопка AGAIN
document.querySelector('.again').addEventListener('click', function () {
    score = 20
    displayScore(score)
    secretNumber = newSecretNumber()
    document.querySelector('.number').textContent = '?';
    document.querySelector("body").style.backgroundColor = '#222'
    document.querySelector('.guess').value = ''
    displayMessage('Start guessing...')
    between = 1
    document.querySelector('.between').textContent = `(Between ${between} and 20)`
})