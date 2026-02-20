// Arrow functions and template literals

const greet = (name) => {
  //   console.log(`Hello, ${name}`);
};

greet("Sinmbf");

// Array methods

// Push and pop
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

// console.log(numbers);

numbers.pop();
// console.log(numbers);

// Map, filter and reduce
const squareOfNum = numbers.map((num) => {
  return num * 2;
});

// console.log(squareOfNum);

const even = numbers.filter((num) => {
  return num % 2 === 0;
});

// console.log(even);

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

// console.log(sum);

// Slice and splice
const fruits = ["Apple", "Banana", "Cherry", "Mango"];

// Slice : start inclusive and end exclusive
const slicedFruits = fruits.slice(1);
// console.log(slicedFruits);

// Splice : start and end index both inclusive
const splicedFruits = fruits.splice(1, 2, "Orange", "Pineapple"); // Also change original array
// console.log(splicedFruits);
// console.log(fruits);

// Spread operator
const names = ["Alice", "Bob", "Charlie"];
// console.log(...names);

const updatedNames = [...names, "David", "Eve"];
// console.log(updatedNames);

const user = {
  name: "sinmbf",
  address: "dallu",
  age: 25,
};

const updatedUser = { ...user, isStudent: false };
// console.log(updatedUser);

// Destructuring
const [firstName, secondName] = names;
console.log(firstName, secondName);

const { name, address, age } = user;
console.log(name, address, age);
