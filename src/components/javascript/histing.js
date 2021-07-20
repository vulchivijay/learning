// Hoisting is a JavaScript mechanism where variables and function declarations
// are moved to the top of their scope before code execution.

console.log(typeof variable); // Output: undefined
console.log(variable); // Output: ReferenceError: variable is not defined

function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a);
/* Accessible as a global variable outside hoist() function.
Output: 20 */

console.log(b);
/* Since it was declared, it is confined to the hoist() function scope. We can't print it
out outside the confines of the hoist() function.
Output: ReferenceError: b is not defined */

// ES5
console.log(hoist); // Output: undefined
var hoist = 'The variable has been hoisted.';

//ES6
var hoist1;

console.log(hoist1); // Output: undefined
hoist1 = 'The variable has been hoisted.';

function hoist() {
  console.log(message);
  var message='Hoisting is all the rage!'
}

hoist(); // Ouput: undefined

function hoist() {
  var message;
  console.log(message);
  message='Hoisting is all the rage!'
}

hoist(); // Ouput: undefined

// ES6
console.log(hoist); // Output: ReferenceError: hoist is not defined ...
let hoist = 'The variable has been hoisted.';

let hoist;

console.log(hoist); // Output: undefined
hoist = 'Hoisted'

const PI = 3.142;
PI = 22/7; // Let's reassign the value of PI

console.log(PI); // Output: TypeError: Assignment to constant variable.

console.log(hoist); // Output: ReferenceError: hoist is not defined
const hoist = 'The variable has been hoisted.';

function getCircumference(radius) {
  console.log(circumference)
  circumference = PI*radius*2;
  const PI = 22/7;
}

getCircumference(2) // ReferenceError: circumference is not defined


let people = function(name, age) {
  this.name = name;
  this.age = age;

  this.displayInfo = function() {
    document.write(this.name + " is " + this.age + " years old");
  }
}

let person1 = new people('John', 21);

// logs John is 21 years old
person1.displayInfo();