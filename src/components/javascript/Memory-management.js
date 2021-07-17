// Memory Management:

// JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection). This automaticity is a potential source of confusion: it can give developers the false impression that they don't need to worry about memory management.

// Memory life cycle:
// Regardless of the programming language, the memory life cycle is pretty much always the same:

// Allocate the memory you need
// Use the allocated memory (read, write)
// Release the allocated memory when it is not needed anymore
// The second part is explicit in all languages. The first and last parts are explicit in low-level
// languages but are mostly implicit in high-level languages like JavaScript.

// Allocation in JavaScript
// Value initialization
// In order to not bother the programmer with allocations, JavaScript will automatically allocate memory
// when values are initially declared.

var n = 123; // allocates memory for a number
var s = 'azerty'; // allocates memory for a string

var o = {
  a: 1,
  b: null
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and
// contained values
var a = [1, null, 'abra'];

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

// function expressions also allocate an object
someElement.addEventListener('click', function() {
  someElement.style.backgroundColor = 'blue';
}, false);

// Allocation via function calls
// Some function calls result in object allocation.

var d = new Date(); // allocates a Date object
var e = document.createElement('div'); // allocates a DOM element

// Some methods allocate new values or objects:

var s = 'azerty';
var s2 = s.substr(0, 3); // s2 is a new string

// Since strings are immutable values,
// JavaScript may decide to not allocate memory,
// but just store the [0, 3] range.

var a = ['ouais ouais', 'nan nan'];
var a2 = ['generation', 'nan nan'];
var a3 = a.concat(a2);

// new array with 4 elements being
// the concatenation of a and a2 elements.

function f() {
  var x = {};
  var y = {};
  x.a = y;        // x references y
  y.a = x;        // y references x

  return 'azerty';
}

f();