let inputField = document.querySelector('.inputField');
let submit = document.querySelector('.submit-button')
let history = document.querySelector('.history')
let attempts = document.querySelector('.attempts')
let message = document.querySelector('.message')
let scoreboard = document.querySelector('.scoreboard');

let random = Math.floor(Math.random() * 10) + 1;

let p = document.createElement('p');

let gameOver = false;
let historyArray = []
let attemptsLeft = 5;

if(!gameOver){
submit.addEventListener('click', function(e){
    e.preventDefault();
    if(gameOver) return;
    const guess = parseInt(inputField.value);
    validate(guess);
});
}
function validate(guess){
    if(isNaN(guess))
        alert(' enter valid number');
    else if(guess < 1)
        alert('enter valid number')
    else if(guess >  10)
        alert('enter valid number')
    else
    checkGuess(guess);
}

function checkGuess(guess){
    historyArray.push(guess);
    history.textContent = historyArray.join(', ');

    attemptsLeft--;
    attempts.textContent = attemptsLeft;

    if(guess === random){
        message.textContent = 'Right Guess!!'
        endGame();
    }else if(attemptsLeft === 0){
        message.textContent =`Attempts exceeded, number was ${random}`
        endGame();
    }else{
        if(guess < random)
            message.textContent =`Lower than expected`
        else
            message.textContent =`Higher than expected`
    }

}

function endGame(){
    inputField.value = '';
    inputField.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame">Start New Game</h2>`
    scoreboard.appendChild(p);
    gameOver = true;
    newGame();
}

function newGame(){
    const newGame = document.querySelector('#newgame')
    newGame.addEventListener('click', function(e){
        random = Math.floor(Math.random() * 10) + 1;
        historyArray = [];
        history.innerHTML = ''
        attemptsLeft = 5
        attempts.innerHTML = attemptsLeft;
        inputField.removeAttribute('disabled')
        scoreboard.removeChild(p)
        gameOver = false;
        
    })
}