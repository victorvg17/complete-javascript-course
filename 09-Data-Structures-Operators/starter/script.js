'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // openingHours: openingHours,
  openingHours,

  orderDelivery: function (obj) {
    // console.log(obj);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

restaurant.orderDelivery({
  time: '22.30',
  address: 'Kondoor',
  mainIndex: 2,
  starterIndex: 4,
});

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// console.log(restaurant.openingHours.mon.open);

if (restaurant.openingHours.mon?.open) {
  console.log('exist');
}

const openingHours2 = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const properties = Object.keys(openingHours2);
let openStr = `We are open ${properties.length} days: `;
for (const day of properties) {
  // console.log(day);
  openStr += `${day}, `;
}
console.log(openStr);

// const values = Object.values(openingHours);
// console.log(values);

const entries = Object.entries(openingHours2);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we open at: ${open}, close at: ${close}`);
// }

// const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of weekDays) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, restaurant open at: ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method doesnt exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method doesnt exist');

// const users = [{ name: 'Jonas', email: 'gmail.com' }];

// console.log(users[0]?.name ?? 'User array empty');
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// const arr = [7, 8, 9, 10];

// const newArr = [1, 2, ...arr];

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// const newRestaurant = { foundedIn: 1991, ...restaurant, founder: 'Galileo' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Plaza';
// console.log(restaurantCopy.name, restaurant.name);

// console.log(arr);
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// console.log(menu, starters);

// const mainMenuCopy = [...restaurant.mainMenu];
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// let [starter, mainMenu] = restaurant.order(2, 0);
// console.log(`${starter}, ${mainMenu}`);

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanno Georgi',
// };

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`i=${i}, el=${el}`);
// }

// console.log(menu.entries());

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnabry',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// // 2.
// const oddsEntries = Object.entries(game.odds);
// let average = 0;
// const odds = Object.values(game.odds);
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(`Average odds=${average}`);

// 3.
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// for (const [team, odd] of oddsEntries) {
//   let teamName = game.key;
//   const teamStr = team == 'x' ? 'draw' : game[team];
//   console.log(`Odd of victory ${teamStr}: ${odd}`);
// }

// const ordersSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Risotto', 'Pizza']);
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));

// ordersSet.add('Garlic bread');
// ordersSet.add('Garlic bread');
// console.log(ordersSet);

// const staff = ['Waiter', 'Manager', 'Chef', 'Waiter', 'Chef'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set('victorvgeorge').size);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze Italy');
// rest.set(2, 'Lisbon');

// rest.set('open', 11).set('close', 23);
// console.log(rest);

const question = new Map([
  ['question', 'what is the best prog language ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

// console.log(question);

// const openingHours3 = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// const hoursMap = new Map(Object.entries(openingHours3));
// console.log(Object.entries(openingHours3));
// console.log(hoursMap);
// console.log(question.get('question'));

// for (const [key, val] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${val}`);
//   }
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];

// 2.
gameEvents.delete(64);
// console.log(gameEvents);

// 3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// 4.
// "[FIRST HALF] 17: ⚽️ GOAL"
for (const [time, event] of gameEvents) {
  // console.log(time, event);
  const half = time < 45 ? 'FIRST' : 'SECOND';
  // console.log(`[${half} HALF] ${time}: ${event}`);
}

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// // let texts;
// document.querySelector('button').addEventListener('click', function () {
//   const inputValue = document.querySelector('textarea').value.split('\n');
//   for (const [i, el] of inputValue.entries()) {
//     const [first, second] = el.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(output);
//   }
// });

const airline = 'TAP Air Portugal';
const plane = 'A320';

// console.log(plane[0]);
// console.log(plane.length);

// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')));
// console.log(airline.slice(-2));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const seatId = seat.slice(-1);
  // console.log(seatId);
  return seatId === 'B' || seatId === 'E' ? true : false;
};

// console.log(checkMiddleSeat('23B'));
// console.log(checkMiddleSeat('23D'));
// console.log(checkMiddleSeat('23E'));

const capitalizeName = function (name) {
  const names = name.toLowerCase().split(' ');
  const namesUpper = [];
  for (const nm of names) {
    namesUpper.push(nm.replace(nm[0], nm[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

// capitalizeName('victor george');
// capitalizeName('sagar alias jacky');
