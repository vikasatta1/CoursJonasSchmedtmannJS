'use strict';
//select element
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector("#score--0")
const score1El = document.getElementById('score--1')
const current0EL = document.getElementById('current--0')
const current1EL = document.getElementById('current--1')
const diceEL = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new') //новая игра
const btnRoll = document.querySelector('.btn--roll')//бросить кубик
const btnHold = document.querySelector('.btn--hold')//передать ход
//starting condition
score0El.textContent = 0
score1El.textContent = 0
diceEL.classList.add('hidden')
const scores = [0, 0]
let currentScore = 0
let activePlayer = 0
let playing = true


//function
const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing === false) return
    //сгенерировать рандом
    const dice = Math.trunc(Math.random() * 6) + 1
    //показать кости
    diceEL.classList.remove('hidden')
    diceEL.src = `dice-${dice}.png`

    //проверить чтоб не был 1б
    if (dice !== 1) {
        currentScore += dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
        //если тру переключить на др игрока
        switchPlayer()
    }
})


btnHold.addEventListener('click', function () {
    if (playing === false) return

    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];

    if (scores[activePlayer] >= 20) {
        diceEL.classList.add('hidden')

        playing = false
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    } else {
        switchPlayer()
    }
})

btnNew.addEventListener('click',function (){
    score0El.textContent = 0
    score1El.textContent = 0
    current0EL.textContent = 0
    current1EL.textContent = 0

    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
})