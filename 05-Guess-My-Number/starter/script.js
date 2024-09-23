'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.score').textContent);
console.log(document.querySelector('.highscore').textContent);

// document.querySelector('.score').textContent = 66;
// document.querySelector('.number').textContent = 1993;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const upperLimit = 20;
let secretNumber = Math.trunc(Math.random() * upperLimit) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.again').addEventListener('click', function () {
  console.log('Again clicked');
  // reset secretNumber and score for new game
  secretNumber = Math.trunc(Math.random() * upperLimit) + 1;
  score = 20;

  document.querySelector('.message').textContent = 'Start guessing ...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number';
  } else if (guess === secretNumber) {
    // when player wins
    document.querySelector('.message').textContent = '🎉 Correct number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // update high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 📈 Too high' : '📉 📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  console.log('currentScore=' + score);
});
