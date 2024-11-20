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
// console.log(h1oursMap);
// console.log(question.get('question'));

// for (const [key, val] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${val}`);
//   }
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));
