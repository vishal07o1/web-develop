let number = [1, 2, 3, 4, 5];
let smallnumbers = [];

for (const num of number) {
  if (number === 4) {
    break;
  }
  smallnumbers.push(num);
}
console.log(smallnumbers);