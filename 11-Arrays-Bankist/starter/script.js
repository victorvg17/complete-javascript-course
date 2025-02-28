'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let currentAccount;

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}</div>
    </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov <= 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${outcomes}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    // .filter((int, i, arr) => {
    //   console.log(`i=${i}, arr=${arr}`);
    //   return int > 1;
    // })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);

// Event handler for login
btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // CLear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event handler for transfer button
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  console.log(amount, inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    console.log('Transfer valid');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
    console.log(currentAccount);
  }
});

// Event handler for Close-account button
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Delete Account');

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    console.log(`User exist at index=${index} and good to delete`);

    // Delete account
    if (index !== -1) accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

// Event handler for Requenst-loan button
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    console.log('Loan approved');
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (movement, i, array) {
  // if (movement > 0) {
  //   console.log(`Movement ${i + 1}, you deposited ${movement}`);
  // } else {
  //   console.log(`Movement ${i + 1}, you withdrew ${movement}`);
  // }
});

// for (const [i, movmt] of movements.entries()) {
//   if (movmt > 0) {
//     console.log(`Movement ${i + 1}, you deposited ${movmt}`);
//   } else {
//     console.log(`Movement ${i + 1}, you withdrew ${movmt}`);
//   }
// }

/////////////////////////////////////////////////

const eurToUsd = 1.1;
// const movementsUsd = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUsd);

// const movementDescriptions = movements.map((mov, i, arr) => {
//   const action = mov > 0 ? 'deposited' : 'withdrew';
//   return `Movement ${i + 1}, you ${action} ${mov}`;
// });

// console.log(movementDescriptions);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

const deposits = movements.filter(mov => mov > 0);

// const withdrawals = movements.filter(mov => mov < 0);

// console.log(deposits);
console.log(movements);
// const balance = movements.reduce(function (acc, curr, i, mov) {
//   console.log(`Iteration ${i}: ${acc}, ${curr}`);
//   return acc + curr;
// }, 0);
const balance = movements.reduce((acc, curr) => acc + curr, 0);

// console.log(`balance=${balance}`);

const currencies1 = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies1.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogsCombined = [...dogsJuliaCorrected, ...dogsKate];
  dogsCombined.forEach(function (age, i) {
    // op1 = "Dog number 1 is an adult, and is 5 years old"
    // op2 = "Dog number 2 is still a puppy 🐶"
    let output;
    if (age >= 3) {
      output = `Dog number ${i + 1} is an adult, and is ${age} years old`;
    } else {
      output = `Dog number ${i + 1} is still a puppy 🐶`;
    }
    console.log(output);
  });
};

// checkDogs(dogsJulia, dogsKate);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

use array methods map(), filter() and reduce()
GOOD LUCK 😀
*/

const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge1 = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const filteredDogs = humanAge.filter(age => age >= 18);
  const averageHumageAge =
    filteredDogs.reduce((acc, age) => acc + age, filteredDogs[0]) /
    filteredDogs.length;

  // console.log(
  //   `humanAge=${humanAge}, filteredDogs=${filteredDogs}, averageHumanAge=${averageHumageAge}`
  // );
  return averageHumageAge;
};

const calcAverageHumanAge2 = ages => {
  const averageHumageAge = ages
    // .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .map((age, i, arr) => {
      return age <= 2 ? 2 * age : 16 + age * 4;
    })
    .filter((age, i, arr) => {
      console.log(`map op=${arr}`);
      return age >= 18;
    })
    .reduce((acc, age, i, arr) => {
      console.log(`filter op=${arr}`);
      return acc + age / arr.length;
    }, 0);
  // console.log(`averageHumanAge=${averageHumageAge}`);
  return averageHumageAge;
};

// const avg1 = calcAverageHumanAge1(testData1);
// const avg2 = calcAverageHumanAge2(testData1);
// console.log(`avg1=${avg1}, avg2=${avg2}`);
// calcAverageHumanAge1(testData2);
// calcAverageHumanAge2(testData2);

// maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

// console.log(`max=${max}`);

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

// console.log(`totalDepositsUSD=${totalDepositsUSD} USD`);

const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(`firstWithdrawal=${firstWithdrawal}`);

// console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

for (let acc of accounts) {
  if (acc.owner === 'Jessica Davis') console.log(acc);
}

// console.log(movements);
// const lastWithdrawal = movements.findLast(mov => mov < 0);
// console.log(lastWithdrawal);

const lastLargeMovementIndex = movements.findLastIndex(mov => {
  return Math.abs(mov) > 1000;
});

// console.log(
//   `Your latest large movement was ${
//     movements.length - lastLargeMovementIndex - 1
//   } movements ago`
// );

// console.log(movements.includes(-130));
// console.log(movements.some(mov => mov > 5000));

// const accountMovements = accounts.map(acc => acc.movements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov);
// console.log(overallBalance);

const overallBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);

// console.log(overallBalance2);

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  // { weight: 3233, curFood: 340, owners: ['Sarah'] }, // dummy
];

// 1.
// recommendedFood = weight ** 0.75 * 28

for (let dog of dogs) {
  const recommendedFood = dog.weight ** 0.75 * 28;
  dog.recommendedFood = Math.round(recommendedFood);
}

// console.log(dogs);

// 2.
const sarahDogs = dogs.find(dog => {
  return dog.owners.includes('Sarah');
});

// console.log(
//   `Sarah's dog is currently eating ${
//     sarahDogs.curFood > sarahDogs.recommendedFood ? 'too much' : 'too little'
//   }`
// );

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood <= dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();

// 4.
// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much! `);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little! `);

// 5.
// const goodDog = dogs.find(dog => dog.curFood === dog.recommendedFood);
// if (goodDog) console.log('Good dog found');
// else console.log('No good dog found');
// console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
const okayDogCallback = dog =>
  0.9 * dog.recommendedFood <= dog.curFood &&
  dog.curFood <= 1.1 * dog.recommendedFood;
// const okayDog = dogs.find(dog => okayDogCallback(dog));
// console.log(dogs.some(dog => okayDogCallback(dog)));

// 7.
const okayDogs = dogs.filter(dog => okayDogCallback(dog));
// console.log(okayDogs);

// 8.
const dogsCopy = dogs.slice().sort((a, b) => a.curFood - b.curFood);
// console.log(dogsCopy);

const owners = ['Jonas', 'Zach', 'Adam', 'Martin'];
owners.sort();
// console.log(owners);

// Numbers
// return < 0 => A, B => keep order
// return > 0 => B, A => switch order
// movements.sort((a, b) => {
//   // return a - b;
//   if (a > b) return 1;
//   else return -1;
// });

// movements.sort((a, b) => a - b);
// console.log(movements);

// movements.sort((a, b) => b - a);
// console.log(movements);

// console.log([1, 2, 3, 4, 5, 6, 7]);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
x.fill(1, 2);
// console.log(x);

const y = Array.from({ length: 7 }, () => 2);
// console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

const diceRolls = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 6) + 1
);
// console.log(diceRolls);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});

// console.log(movements);
const reversedMov = movements.slice().reverse();
// const reversedMov = movements.toReversed();
// console.log(reversedMov);
// console.log(movements);

// movements[]
// const bankDepositSum1 = accounts.reduce((acc, account) => {
//   const deposits = account.movements.filter(mov => mov > 0);
//   return deposits.reduce((acc, dep) => acc + dep);
// });

// 1.
const bankDepositSum = accounts
  .map(acc => acc.movements)
  .flat()
  .filter(mov => mov > 0)
  .reduce((sum, mov) => sum + mov);
// console.log(bankDepositSum);

// 2. Number of deposits above 1000
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, mov) => (mov >= 1000 ? count + 1 : count), 0);

// console.log(numDeposits1000);

// 3.
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      // curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
      sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  return title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
};

console.log(convertTitleCase('this is but not a nice title'));
