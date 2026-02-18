// Variables

let fullName = "Siddhartha Shakya";
let address = "Dallu, Kathmandu";
const bloodGroup = "A+";

console.log(fullName);
console.log(address);
console.log(bloodGroup);

// Data Types
let name = "Sinmbf";
let age = 21;
let isStudent = true;
let info = ["Coding", "Traveling", "Cooking"];
console.log(info[0]);

// Object
let user = {
  name1: "Sinmbf",
  age1: 21,
};

console.log(user.name1, user["age1"]);

// Functions
function greet(myName) {
  console.log("Hello", myName);
}

greet("Sinmbf");

// DOM manipulation
let headingTwoById = document.getElementById("heading-2");
console.log(headingTwoById);

let headingTwoByQuery = document.querySelector("#heading-2"); // Preferred way
console.log(headingTwoByQuery);

let paragraphByQuery = document.querySelector(".para"); // Preferred way
console.log(paragraphByQuery);
paragraphByQuery.textContent = "This is updated paragraph";
paragraphByQuery.style.color = "red";

// Events
let button = document.querySelector(".btn"); // Preferred way
button.addEventListener("click", () => {
  alert("Button clicked");
  console.log("Button clicked");
});
