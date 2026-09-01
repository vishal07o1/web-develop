// 1.write a for loops thats loops through the array `["green tes","black", "chai", "ollang"]` and stops the loops when it finds
// chai,store all the teas before chai in a new array called `selected tea`
let tea = ["green tea", "black tea", "chai", "ollang"];
let selectedtea = [];
for (let i = 0; i < tea.length; i++) {
  if (tea[i] == "chai") {
    break;
  }
  selectedtea.push(tea[i]);
}
// console.log(selectedtea);

// 2.write a for loops that loops through the array `["london","new york","paris","berlin"]` and skips paris
// stores the ther cities in a new array named "visited cities"

let cities = ["london", "new york", "paris", "berlin"];
let visitedcities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "paris") {
    continue;
  }
  visitedcities.push(cities[i]);
}
// console.log(visitedcities);

// 3.write a for-of loop to iterate through the array `[1,2,3,4,5]` and stop when number`4` is found store the numbers before 4
//in a array named smallnumbers
let number = [1, 2, 3, 4, 5];
let smallnumbers = [];

for (const num of number) {
  if (num === 4) {
    break;
  }
  smallnumbers.push(num);
}
// console.log(smallnumbers);

//4.use a for-of loop to iterate through the array `["chai","green tea","herbal tea","black tea"]` and skip herbal tea and store
// the other teas in an arary named `preffered tea`
let tea1 = ["chai", "green tea", "herbal tea", "black tea"];
let prefferedtea = [];
for (const t1 of tea1) {
  if (t1 === "herbal tea") {
    continue;
  }
  prefferedtea.push(t1);
}
// console.log(prefferedtea);

// 5.use a for in loop to loop through an object containing cities population stop the loop when the population of `berlin` is reached
// is found and store all the previous in a new object named citypopulation
let citiespopulation = {
  london: 890000,
  NewYork: 840000,
  paris: 2200000,
  berlin: 3500000,
};
let cityNewpopulation = {}; //thats how an object is created
// console.log(Object.keys(citiespopulation)); //london newyork paris berlin
// console.log(Object.values(citiespopulation)); //values of the the keys

for (const city in citiespopulation) {
  //key=value
  if (city === "berlin") {
    break;
  }
  cityNewpopulation[city] = citiespopulation[city];
}
console.log(cityNewpopulation);

// 6.write a foreach loops thats loops through the array `["green tes","black", "chai", "ollang"]` and stops the loops when it finds
// chai,store all the teas before chai in a new array called `selected tea`
let teacollection = ["green tea", "black", "chai", "ollang"];
let availabletea = [];
teacollection.forEach(function (tea) {
  //fuction is used in for each loop
  if (tea === "chai") {
    return;
  }
  availabletea.push(tea);
});
console.log(availabletea);

// 7.use a for-of loop to itterate through the array `[ "chai","green tea","balck tea","jasmine tea","herbal tea" ]`
// and stop when the length of the current tea name is greater than 10 store others in short teas arrays

let teas = ["chai", "green tea", "balck tea", "jasmine tea", "herbal tea"];
let shortteas = [];
