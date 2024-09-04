"use strict";

/*
// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
*/

// const age1 = calcAge1(1993);
// const age2 = calcAge2(1993);

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1993);
// console.log(age3);

// const yearsUnitRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUnitRetirement(1993, "Victor"));

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins > avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas > avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// };

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// checkWinner(scoreDolphins, scoreKoalas);

// test data-1
// Dolphins = {44, 23, 71}
// Koalas = {65, 54, 49}

// test data-2
// Dolphins = {85, 54, 41}
// Koalas = {23, 34, 27}

// const friends = ["Michael", "Steve", "Paappi"]; // literal syntax
// console.log(friends);

// const years = new Array(1991, 1992, 2000, 2067);
// console.log(years.length);

// const jonas = ["Jonas", "Schmid", 2037 - 1991, friends];
// console.log(jonas);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const ages = [calcAge(years[0]), calcAge(years[years.length - 1])];
// console.log(ages);
// console.log();

// const friends = ["Michael", "Steve", "Paappi"]; // literal syntax
// console.log(friends);

// friends.push("Vattoli");
// console.log(friends);

// friends.unshift("John");
// console.log(friends);
// const calcTip = function (billValue) {
//   const tipValue =
//     billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
//   return tipValue;
// };

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas["friends"]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends"
// );
// console.log(jonas[interestedIn]);

// const friendStatus = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`;
// console.log(friendStatus);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schidtman",
//   birthYear: 1993,
//   job: "teacher",
//   friends: ["Michael", "Steve", "Paappi"],
//   hasDriversLicense: false,
//   calcAge: function () {
//     console.log(this);
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     const summary = `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//     return summary;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas.getSummary());

// const friends = ["Michael", "Steve", "Paappi", "Vattoli"]; // literal syntax
// friends.push("Itti");
// console.log(friends);

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// console.log(mark.calcBMI(), john.calcBMI());

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
//   );
// }

// for (let rep = 1; rep < 11; rep++) {
//   console.log(`Doing rep ${rep}`);
// }

// const friends = ["Michael", "Steve", "Paappi"]; // literal syntax
// console.log(friends);

// const years = new Array(1991, 1992, 2000, 2067);
// console.log(years.length);

// const jonas = ["Jonas", "Schmid", 2037 - 1991, ["Michael", "Steve", "Paappi"]];

// console.log(jonas);

// const birthYears = [1993, 1962, 1990, 1993, 2000];
// const ages = [];

// for (let i = 0; i < birthYears.length; i++) {
//   ages.push(2024 - birthYears[i]);
// }
// console.log(ages);

// let rep = 1;

// while (rep < 11) {
//   console.log(`current rep = ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }

// const calcTip = function (billValue) {
//   const tipValue =
//     billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
//   return tipValue;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(tips[i] + bills[i]);
//   //   console.log(`bill=${bills[i]}, tip=${tips[i]}, total=${totals[i]}`);
// }

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(totals));
