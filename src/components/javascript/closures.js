// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.

// Global Variables
// A function can access all variables defined inside the function, like this:
function myFunction() {
  let a = 4;
  return a * a;
}

myFunction();
// But a function can also access variables defined outside the function, like this:
let b = 4;
function myFunction1() {
  return b * b;
}

myFunction1();

// In the last example, a is a global variable.
// In a web page, global variables belong to the window object.
// Global variables can be used (and changed) by all scripts in the page (and in the window).
// In the first example, a is a local variable.
// A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code.
// Global and local variables with the same name are different variables. Modifying one, does not modify the other.
