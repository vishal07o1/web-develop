// declare an array named tea flavours that contains the string "greentea", "blacktea", "oolongtea", "herbaltea"
// acces the first element of the array and store it in a variable named firsttea

let teaFlavours = ["greentea", "blacktea", "oolongtea", "herbaltea"];
let firstTea = teaFlavours[0];

console.log(firstTea); // Output: greentea

// declare an array countries visited that contains the string "India", "USA", "Japan" and add berlin to the
// array using the push method and store the new length of the array in a variable named newLength

let countriesVisited = ["India", "USA", "Japan"];
countriesVisited.push("Berlin");
let newLength = countriesVisited.push("Berlin");

// you have array named teaorders that contains the string "greentea", "blacktea", "oolong
// remove the last element of the array using the pop method and store the removed element in a variable named lastOrder
// pop removes last element of the array and returns it

let teaOrders = ["greentea", "blacktea", "oolongtea"];
teaOrders.pop();

console.log(teaOrders); // Output: ["greentea", "blacktea"]

// you have an array named popularteas that contains the string "greentea", "blacktea", "oolongtea" create a
// soft copies named softcopyteas
let popularTeas = ["greentea", "blacktea", "oolongtea"];
let var1 = 5;
let var2 = var1;
var1 = 9;
console.log(var2); // Output: 5

let softcopyteas = popularTeas;
popularTeas.pop();
console.log(softcopyteas);
console.log(popularTeas); //now popular teas also changes to softcopies even it comes after pop but not in the case of numbers
// in js array copies point at the same array in the memories that we created so if we change it in the copie it changes in the main memory\

// you have an array named topcities containing berlin,singapore,and newyork create a hard copy of this array named hardcopycities
let topcities = ["berlin", "singapore", "new york"];
let hardcopycities = [...topcities]; //this means  seperate copy is made change doesnt affect the original one
topcities.pop();
console.log(hardcopycities);
console.log(topcities);

// you have to array named euporeancities containing "paris" and "rome" and asian cities containing "tokyo" and "bangkok"
// merge this array into a new array called worldcities

let euporeancities = ["paris", "rome"];
let asiancities = ["tokyo", "bangkok"];
// let worldcities = euporeancities + " " + asiancities; //it becomes a string
let worldcities = euporeancities.concat(asiancities);
console.log(worldcities);

// you have an array called citybucket list containing kyoto new york londoncape town
// check if london is in the array and store the result in a variable called islondonInlist

let citybucket = ["kyoto", "london", "ny"];
let islondonInlist = citybucket.includes("london"); //include provides true or false only
console.log(islondonInlist);
