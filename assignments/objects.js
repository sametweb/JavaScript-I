// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F"
};

// Write your intern objects here:

function Intern(id, email, name, gender) {
  this.id = id;
  this.email = email;
  this.name = name;
  this.gender = gender;
}

const Mitzi = new Intern(1, "mmelloy0@psu.edu", "Mitzi", "F");
const Kennan = new Intern(2, "kdiben1@tinypic.com", "Kennan", "M");
const Keven = new Intern(3, "kmummery2@wikimedia.org", "Keven", "M");
const Gannie = new Intern(4, "gmartinson3@illinois.edu", "Gannie", "M");
const Antonietta = new Intern(5, "adaine5@samsung.com", "Antonietta", "F");

// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log("Mitzi's name is", Mitzi.name);
// Kennan's ID
console.log("Kennan's id is", Kennan.id);
// Keven's email
console.log("Keven's email is", Keven.email);
// Gannie's name
console.log("Gannie's name is", Gannie.name);
// Antonietta's Gender
console.log("Antonietta's gender is", Antonietta.gender);

// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
Intern.prototype.speak = function() {
  return "Hello, my name is " + this.name;
};
console.log(Kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.

Intern.prototype.multiplyNums = function(num1, num2) {
  return `${
    this.name
  } multiplied ${num1} and ${num2} and found the result of '${num1 * num2}'`;
};
console.log(Antonietta.multiplyNums(3, 4));

// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const parent = new Person("Susan", "70");
parent.child = new Person("George", "50");
parent.child.grandchild = new Person("Sam", "30");

Person.prototype.speak = function() {
  return "Hello my name is " + this.name;
};

const { child } = parent;
const { grandchild } = parent.child;

// Log the parent object's name
console.log("Parent's name is", parent.name);

// Log the child's age
console.log("Child's age is", parent.child.age);

// Log the name and age of the grandchild
console.log(
  "Grandchild's name is",
  grandchild.name,
  "and",
  grandchild.age,
  "years old."
);

// Have the parent speak
parent.speak();

// Have the child speak
child.speak();

// Have the grandchild speak
grandchild.speak();
