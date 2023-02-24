'use strict';

//072 - 078

let scoreNumber = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = (message) =>
  (document.querySelector('.message').textContent = message);

const scoreDegrees = () => {
  scoreNumber--;
  document.querySelector('.score').textContent = scoreNumber;
};

const displaySecretNumber = (value) =>
  (document.querySelector('.number').textContent = value);

const backgroundColor = (color) =>
  (document.querySelector('body').style.backgroundColor = color);

const minWidth = (value) =>
  (document.querySelector('.number').style.minWidth = value);

//Check button
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('🙅 No number');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🏆 Correct number!!!');
    displaySecretNumber(secretNumber);
    backgroundColor('#60b347');

    //Highscore
    if (scoreNumber > highscore) {
      highscore = scoreNumber;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      displayMessage(guess > secretNumber ? '🙅 To High!' : '🙅 To Low!');
      scoreDegrees();
    } else {
      document.querySelector(
        '.answer'
      ).textContent = `✅ Right number is ${secretNumber}`;
      displayMessage('☠️ You lost the game!');
      backgroundColor('tomato');
      displaySecretNumber('💩');
    }
  }
});

//Again button
document.querySelector('.again').addEventListener('click', () => {
  scoreNumber = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('.guess').value = '';
  document.querySelector('.answer').textContent = '';
  backgroundColor('#222');
  displayMessage('Start guessing...');
  displaySecretNumber('?');
  minWidth('15rem');
});
