// let js = "amazing";
// console.log(40 + 45 + 3 - 10);

// let firstname = "Victor";
// console.log(firstname);

// let country = "India";

// let continent = "Asia";
// // in millions
// let population = 100;

// console.log(country);
// console.log(continent);
// console.log(population);

// let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);

// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "victor");

// let year;
// console.log(year);
// console.log(typeof year);

// const birthYear = 1993;
// birthYear = 1990;

// const job;

// lastName = "George";
// console.log(lastName);
// console.log(typeof lastName);

// // Math operations
// const now = 2024;
// const ageVictor = now - 1993;
// const ageFoo = now - 2000;

// // console.log(ageFoo, ageVictor);

// console.log(ageVictor * 2, ageVictor / 3, ageVictor ** 2);

// const firstName = "Victor";
// const lastName = "George";

// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;

// console.log(x);

// // Comparison operators
// console.log(ageVictor > ageFoo);

// const now = 2024;
// const ageVictor = now - 1993;
// const ageFoo = now - 2000;

// console.log(now - 1993 > now - 2000);

// let x, y;
// x = y = 25 - 10;

// console.log(x, y);

// function calculateBmi1(weight, height) {
//   return weight / height ** 2;
// }

// test data-1
// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = calculateBmi1(weightMark, heightMark);
// const bmiJohn = calculateBmi1(weightJohn, heightJohn);
// const markHigherBMIData1 = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn, markHigherBMIData1);

// // test data-1
// weightMark = 95;
// heightMark = 1.88;
// weightJohn = 85;
// heightJohn = 1.76;

// markHigherBMIData1 =
//   calculateBmi1(weightMark, heightMark) > calculateBmi1(weightJohn, heightJohn);

// console.log(
//   "Data-1 BMI Mark=" +
//     calculateBmi1(weightMark, heightMark) +
//     " John=" +
//     calculateBmi1(weightJohn, heightJohn) +
//     " markHigherBMIData1=" +
//     markHigherBMIData1
// );

// const firstName = "Victor";
// const job = "developer";
// const birthYear = 1993;
// const year = 2024;

// const descriptionVictor = `I'm ${firstName}, a ${
//   year - birthYear
// } year old ${job}`;

// console.log(descriptionVictor);

// console.log(
//   "String \n\
//     with \n\
// multiple lines"
// );

// console.log(`String
//     with
//     multiple lines`);

// const age = 15;
// const minLegalAge = 18;
// const isOldEnough = age >= minLegalAge;

// if (age >= 18) {
//   console.log("Sarah can start DL preparations");
// } else {
//   const yearsLeft = minLegalAge - age;
//   console.log(`Sarah too young, needs to wait another ${yearsLeft} years`);
// }

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// const favorite = prompt("Enter your favourite number?");
// console.log(`favorite numer=${favorite}`);

// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(hasDriversLicense && !hasGoodVision);

// const scoreDolphins1 = 96;
// const scoreDolphins2 = 108;
// const scoreDolphins3 = 89;

// const scoreKoalas1 = 88;
// const scoreKoalas2 = 91;
// const scoreKoalas3 = 110;

// const scoreDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
// const scoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy");
// } else {
//   console.log("Koalas win the trophy");
// }

const day = "friday";

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
