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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const margin = 5;

// console.log(
//   document.querySelector('.number').textContent,
//   typeof document.querySelector('.number').textContent
// );

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (guess - secretNumber > margin) {
      document.querySelector('.message').textContent = '📈 📈 Too high';
    } else {
      document.querySelector('.message').textContent = '📈 High';
    }
  } else {
    if (secretNumber - guess > margin) {
      document.querySelector('.message').textContent = '📉 📉 Too low';
    } else {
      document.querySelector('.message').textContent = '📉 Low';
    }
  }
});
