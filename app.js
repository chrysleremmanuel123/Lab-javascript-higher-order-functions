//Progression-1

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);

//Progression-2

const foods1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

foods1.splice(2, 0, "noodles", "ice-cream");

console.log(foods1);

//Progression-3

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

let evenNumber = numberArray.filter(function isEven(num) {
  var even = num % 2 == 0;
  return even;
});

console.log(evenNumber);

//Progression-4

let nonPrimeNumber = numberArray.filter(function nonPrime(num, index) {
  var noPrime = num % index === 0;
  return noPrime;
});

console.log(nonPrimeNumber);

//Progression-5
let evenNumber1 = numberArray.filter((num) => {
  return num % 2 == 0;
});
console.log(evenNumber1);

//Progression-6
const myArray = [11, 34, 20, 5, 53, 16];

let square = myArray.map(function (item) {
  return item * item;
});

console.log(square);

//Progression-7

let mul = myArray.reduce(function (acc, init) {
  return acc * init;
});

console.log(mul);
