'use strict';

let secretNumber = Math.floor(Math.random() * (20 - 1) + 1) + 1;
let score = 20;
let highScore = Number(document.querySelector('.highscore').textContent);

// Display the message in UI

const displayMessage = function (content) {
  document.querySelector('.message').textContent = content;
};

// Setting the score
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Reset all
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * (20 - 1) + 1) + 1;
  score = 20;

  document.querySelector('.guess').textContent = secretNumber;
  setScore(score);
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

// On check button
document.querySelector('.check').addEventListener('click', function () {
  const inputValue = Number(document.querySelector('.guess').value);

  // When there is no input

  if (!inputValue) {
    displayMessage('Enter a number');
  }

  // When Player Wins
  else if (inputValue === secretNumber) {
    displayMessage('Correct Answer 🎉');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // When value not equal to secret number
  else if (inputValue !== secretNumber) {
    if (score > 1) {
      displayMessage(inputValue > secretNumber ? 'Too High' : 'Too Low');

      --score;

      setScore(score);
    } else {
      displayMessage('Game Over ');
      --score;

      setScore(score);
    }
  }
});
