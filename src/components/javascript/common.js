for (let i=0; i<3; i++) {
  console.log(i); // prints 0, 1, 2
  setTimeout(function () {
    console.log(i); // prints 3 three times
  }, 0);
  setTimeout(function () {
    console.log(i+1); // prints 3 three times
  }, 1000);
}

function test () {
  console.log(count1); // prints undefined
  console.log(count2); // prints undefined
  let count1 = 100;
  let count2 = 150;
}

test();

function test1 () {
  console.log(count1); // prints undefined 
  console.log(count2); // ReferenceError: Cannot access 'count2' before initialization
  var count1 = 100;
  var count2 = 150;
}

test1();

function test2 () {
  console.log('hoist'); // prints Hoisted because hoist is declared as global variable.
  hoist = "Hoisted";
}

test2();

function test3 () {
  'use strict';
  console.log('hoist'); // ReferenceError: hoist is not defined
  hoist = "Hoisted";
}

test3();

var abc = {
  name: "Vijay" 
}

var fn = () => {
  console.log(this);
}

fn.call(abc); // this is window object in arrow function
fn.apply(abc); // this is window object in arrow function

fn.bind(abc); // returns new function.

function fnc () {
  console.log(this);
}

fnc.call(abc); // this is abc object in arrow function
fnc.apply(abc); // this is abc object in arrow function
fnc.bind(abc); // returns new function.


duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr) {
  return arr.concat(arr);
}

duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

// abort the api call when api call is taking more time 1 minute

// accordian in react

// login scenario after login user refreshed the page so globle state removed how to hundled that.

// wrire your own method like .uppercase() and .lowercase() for string.

// setimeout, setinterval, async how it works in browser engine
