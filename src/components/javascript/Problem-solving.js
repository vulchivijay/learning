// What is output
let arrLength = 10;
let emptyArr = [];

for(i=0; i < arrLength; i++); {
  emptyArr.push(i+1);
}

// console.log(emptyArr); i is 10 end of the loop + 1 so output is [11]

for(let i=0; i < arrLength; i++); {
  emptyArr.push(i+1);
}
// Reference error i is not defined.


// 2. what is output

function fun () {
  let a = b = 0;
  console.log(a);
}

fun(); // print 0
console.log(a); // reference error a is not defined 
console.log(b); // print 0

// 3. what is the output
let arrNum = [1,2,3,4];
arrNum.length = 0;

console.Console(arrNum); // empty array.

// 4. what is the output
for (var i=0; i<3; i++) {
  console.log(i); // prints 0, 1, 2
  setTimeout(function () {
    console.log(i); // prints 3 three times
  }, 0);
  setTimeout(function () {
    console.log(i+1); // prints 3 three times
  }, 1000);
}

for (let i=0; i<3; i++) {
  console.log(i); // prints 0, 1, 2
  setTimeout(function () {
    console.log(i); // prints 0, 1, 2
  }, 0);
  setTimeout(function () {
    console.log(i); // prints 0, 1, 2
  }, 1000);
}

// 5. what is the output
function test () {
  console.log(count1); // reference error Cannot access 'count1' before initializatio
  console.log(count2); // reference error Cannot access 'count1' before initializatio
  let count1 = 100;
  let count2 = 150;
}

test();

function test1 () {
  console.log(count1); // prints undefined 
  console.log(count2); // prints undefined.
  var count1 = 100;
  var count2 = 150;
}

test1();

function test0 () {
  console.log(count1); // reference error Cannot access 'count1' before initializatio
  console.log(count2); // prints undefined.
  console.log(count3); // reference error, count3 is not defined.
  let count1 = 100;
  var count2 = 150;
}

test0();

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

let abc = {
  name: "Vijay" 
}

let fn = () => {
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

// remove duplicate values in an array
let oriArr = [1, 2, 3, 1, 4, 5, 3, 2, 1];
let finalArr = [];

finalArr = oriArr.filter((item, index, finalArr) => {
  return finalArr.indexOf(item) === index 
})

console.log(finalArr); // [1, 2, 3, 4, 5]
console.log(finalArr.sort()); // to sort the items

// abort the api call when api call is taking more time 1 minute

// accordian in react

// login scenario after login user refreshed the page so globle state removed how to hundled that.

// wrire your own method like .uppercase() and .lowercase() for string.

// setimeout, setinterval, async how it works in browser engine
