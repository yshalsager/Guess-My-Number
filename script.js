'use strict';
// dom elements
const messageEl = document.querySelector('.message');
const inputEl = document.querySelector('.guess');
const buttonEl = document.querySelector('.check');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const resetButtonEl = document.querySelector('.again');

//
const getSecretNumber = () => Math.floor(Math.random() * 20) + 1;

// variables
const defaultScore = 20;
let score = defaultScore;
let highScore = 0;
// Generate a secret number between 1 and 20
let secretNumber = getSecretNumber();
// console.log(secretNumber); // temp

// game logic
function runGame() {
  // get the value of the input
  const guess = Number(inputEl.value);
  // check if the input is vaild
  if (!guess) {
    messageEl.textContent = 'Please enter a number in the box!';
    return;
  }
  // check the guess against the secret number
  // check if the input is equal to secret number
  if (guess === secretNumber) {
    messageEl.textContent = 'You guessed the secret number!';
    numberEl.textContent = secretNumber;
    // change the body background color to #60b347;
    document.body.style.backgroundColor = '#60b347';
    // increase number element width to 30 rem
    numberEl.style.width = '30rem';
    // update the highest score if the current score is higher
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else {
    // else if the guess is too high or too low
    // if the score is higher than 0
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      // check if the input is lower than secret number
      messageEl.textContent =
        guess < secretNumber
          ? 'Your guess is too low!'
          : 'Your guess is too high!';
    } else {
      // else if the score is 0 the game is over
      messageEl.textContent = `You lost! The secret number was ${secretNumber}`;
      score = 0;
      scoreEl.textContent = score;
    }
  }
}

// set onclick listener to run the game
buttonEl.addEventListener('click', runGame);

// Run the game when enter key is pressed in the input
inputEl.addEventListener('keypress', event => {
  if (event.key === 'Enter') runGame();
});

// set onclick listener to reset the game
resetButtonEl.addEventListener('click', () => {
  document.body.style = '';
  inputEl.value = '';
  numberEl.style = '';
  score = defaultScore;
  scoreEl.textContent, defaultScore;
  messageEl.textContent = 'Start guessing...';
  secretNumber = getSecretNumber();
  numberEl.textContent = '?';
  // console.log(secretNumber); // temp
});
