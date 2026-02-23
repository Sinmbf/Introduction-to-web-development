// Normal function
/* function greet(name){
  console.log("Hello, "+ name)
}
*/

<<<<<<< Updated upstream
// Arrow function and template literals

// template literals use garna:
/* 
    backtick (keyboard maa 1 ko left side maa xa) vitra lekhne
    string jastai. for example `hello`
    variable ko value use garna chai ${variable_name}
*/
=======

>>>>>>> Stashed changes
const greet = (name) => {
  //   console.log(`Hello, ${name}`);
};

greet("Sinmbf");

// Array methods

// Push: stack jastai array ko last maa euta element add hanxa
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

// console.log(numbers);

// Pop: stack jastai array ko last element remove hanxa
numbers.pop();
// console.log(numbers);

// Map: array ko harek element lai function apply gardinxa
/* 
   for example tala ko map vitra euta function xa jasle
   array ko sab element lai double gardinxa (num*2)
   rw euta naya array return garxa jun squareOfNum maa store hunxa
*/
const squareOfNum = numbers.map((num) => {
  return num * 2;
});

// console.log(squareOfNum);

// Filter:
/*
  array ko jun jun element leh condition match garxa teslai
  matra euta naya array maa store garera return garxa jun chai
  even maa store hunxa
*/

const even = numbers.filter((num) => {
  return num % 2 === 0;
});

// console.log(even);

// Reduce:
/*  array lai reduce gardinxa
    accumulator maa pahila 0 basxa rw current value maa
    array ko element haru paalai pilo basxa
*/
const sum = numbers.reduce((accumulator, currentValue) => {
  console.log(
    "Accumulator value: " + accumulator + "\tCurrent Value: " + currentValue
  );
  return accumulator + currentValue;
}, 0);

// console.log(sum);

// Slice and splice: grab elements from original array using index and create a new one (copy)
const fruits = ["Apple", "Banana", "Cherry", "Mango"];

// Slice : start index inclusive and end index exclusive. No change in original array
const slicedFruits = fruits.slice(1);
// console.log(slicedFruits);

// Splice : start and end index both inclusive. Also change original array
const splicedFruits = fruits.splice(1, 2, "Orange", "Pineapple");
// console.log(splicedFruits);
// console.log(fruits);

// Spread operator: three ota dots paxi array name leh array ko sab element lai access hanna  milxa
const names = ["Alice", "Bob", "Charlie"];
// console.log(...names);

const updatedNames = [...names, "David", "Eve"];
// console.log(updatedNames);

// object
const user = {
  name: "sinmbf", // key-value pair
  address: "dallu",
  age: 25,
};

// Create a new object that contains all elements of user object(name, address, age) and also new element(isStudent)
const updatedUser = { ...user, isStudent: false };
// console.log(updatedUser);

// Destructuring: array or object ko individual value access garne
// firstName vaneko array ko first element. Name j rakhda ni hunxa array ko case maa
const [firstName, secondName] = names;
console.log(firstName, secondName);

// Note: object maa jun key ko name xa tei use hannuparxa
// For example: user object maa keys(name, address, age). So uniharu lai access garna
// exact name chaixa
const { name, address, age } = user;
console.log(name, address, age);
