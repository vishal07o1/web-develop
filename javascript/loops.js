// loops
// types of loops-while,do/while,for,forin forof foreach

// 1.write a while loop that calculates the sum of all numbersrom 1 to 5 and stores the result in a variable name sum

let sum = 0;
let i = 0;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum);

//2.write a while loops that countsdown from 5 to 1 and stores the number in an array named countdown

let n = 5;
let countdown = [];

while (n > 0) {
  countdown.push(n);
  n--;
}
console.log(countdown);

// 3.write a do while loops thats prompts a user to enter their favourite tea type until they enter stop
// store each tea type in an array named teacollection
// let teacollection = [];
// let tea;
// do {
//   tea = prompt(`enter your favourite tea (type "stop" to finish)`);
//   if (tea !== "stop") {
//     teacollection.push(tea);
//   }
// } while (tea !== "stop"); // it does not print on terminal as node does not support "prompt" so we do it in browser

// 4.write a do while loop thats add a numbem from 1 to 3 and store the result in a variable called total
let num = 1;
let total = 0;
do {
  total = total + num;
  num++;
} while (num <= 3);
console.log(total);

// write a for loops that multiplies each elemnets in array `[2,4,6]` by 2 and stores the result in a new array called multipliednumbers
let multipliednumbers = [];
let numbers = [2, 4, 6];
for (let i = 0; i < numbers.length; i++) {
  let numbers1 = numbers[i] * 2;
  multipliednumbers.push(numbers1);
}
console.log(multipliednumbers);

//6.write a for loop thats lists all the cities in the array `[paris,newyork,tokyo,london]
// and stores all each city in a new array called city lists

let city = ["paris", "newyork", "tokyo", "london"];
let citylist = [];
for (let i = 0; i < city.length; i++) {
  const cities = city[i];
  citylist.push(cities);
}
console.log(citylist);
