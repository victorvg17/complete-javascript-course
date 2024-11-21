'use strict';

const flight = 'LH234';
const jonas = {
  name: 'Victor George',
  passport: 'VD4588968',
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  //   if (passenger.passport === 'VD4588968') {
  //     alert('Check in');
  //   } else {
  //     alert('Wrong passport');
  //   }
};

const newPassport = function (person) {
  person.passport = Math.random() * 1000000;
};

newPassport(jonas);
checkIn(flight, jonas);
// console.log(jonas);

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// console.log(oneWord('Victor George Jobukuttan'));
// console.log(upperFirstWord('Victor George Jobukuttan'));

const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}, by ${fn.name}`);
};

// transformer('Js is the best', upperFirstWord);

// transformer('Js is the best', oneWord);

const greet = function (greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  };
};

const greetArr = greeting => {
  return name => `${greeting} ${name}`;
};

const greeterHey = greet('Hey');
// console.log(greeterHey('Jonas'));
// console.log(greeterHey('Dev'));
// console.log(greeterHey('Victor'));

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a set on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name: name });
  },
};

// lufthansa.book(239, 'Jonas Schmid');
// lufthansa.book(635, 'John Doe');

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// regular function call => this is undefined
// book(23, 'Jane Doe');
// book.call(euroWings, 23, 'Jane Doe');
// console.log(euroWings);

// book.call(lufthansa, 23, 'Mary Jane');

const bookEW = book.bind(euroWings);
const bookEW23 = book.bind(euroWings, 23);
// bookEW(23, 'Rafa Nada');
// bookEW23('Roger Federer');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(500));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// 1.1
// const polls = [0, 0, 0, 0];
// const registerNewAnswer = function () {
//   const selectedOption = Number(
//     prompt(`
//           What is your favourite programming language?
//               0: JavaScript
//               1: Python
//               2: Rust
//               3: C++
//               (Write option number)
//           `)
//   );

//   if (isNaN(selectedOption) || selectedOption < 0 || selectedOption > 3) {
//     alert('Invalid option. Please refresh and try again');
//   }

//   polls[selectedOption]++;

//   // 4.
//   displayResults('string');
// };

// 2.
// document.querySelector('.poll').addEventListener('click', registerNewAnswer);

// 3.
// const displayResults = function (type = 'array') {
//   if (type === 'string') {
//     const output = `Poll results are ${polls.join(',')}`;
//     console.log(output);
//   } else {
//     console.log(polls);
//   }
// };

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'string') {
      const output = `Poll results are ${this.answers.join(',')}`;
      console.log(output);
    } else if (type === 'array') {
      console.log(this.answers);
    }
  },
};

// 2
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//   BONUS TEST DATA 1: [5, 2, 3]
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

//   BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
