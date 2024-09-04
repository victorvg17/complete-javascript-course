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

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
