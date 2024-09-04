// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const tests = [1, 2, 3, 4];
// console.log(tests);
// // console.log(tests);

// // console.log(tests);

// const calcAge = (birthYear) => 2037 - birthYear;
// console.log(calcAge(1993));

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degree celsius")),
//   };

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// Coding challenge
/*
Example: [17, 21, 23] will print "... 17C in 1 days ... 21C in 2 days ...
23C in 3 days ..."

Create functio 'printForecast' which takes in an array 'arr' and logs a string
like above to console.

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForecast = function (arr) {
  let forecast = "";
  for (let i = 0; i < arr.length; i++) {
    forecast += " ... ";
    forecast += ` ${arr[i]}C in ${i + 1} days`;
  }
  return forecast;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
