// Rest parameter: collects all remaining elements into an array.
// Spread operator: allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements.

// Rest parameter:

function add(x, y) {
  return x + y;
}

add(1, 2, 3, 4, 5) // returns 3

// The above function call returns 3, this is because in Javascript it is possible to call a function with any number of arguments. However, only the fist two arguments will be counted.

// With rest parameters we can gather any number of arguments into an array and do what we want with them. So we can re-write the add function like this:

function add(...args) {
  let result = 0;

  for (let arg of args) result += arg;

  return result
}

add(1) // returns 1
add(1,2) // returns 3
add(1, 2, 3, 4, 5) // returns 15

function xyz(x, y, ...z) {
  console.log(x, ' ', y); // hey hello

  console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
  console.log(z[0]); // wassup
  console.log(z.length); // 4
}

xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy")



// Arguments keyword
// Before rest parameters existed, to get all the arguments in a function we used arguments which is an array-likeobject.

function someFunction() {
  return arguments;
}

someFunction("joykare", 100, false);

// someFunction returns the arguments and their indexes, [Arguments] { '0': 'joykare', '1': 100, '2': false }.


// Spread operators
// The spread operator allows us to expand elements. With rest parameters we were able to get a list of arguments into an array. spread operators however, let us unpack elements in an array to single/individual arguments.


// Adding array elements to an existing array
const arr = ["Joy", "Wangari", "Warugu"];
const newArr = ["joykare", ...arr];

// The value of newArr will be [ 'joykare', 'Joy', 'Wangari', 'Warugu' ]. Note: Unlike rest parameters you can use the spread operator as the first argument. So if you wanted to add an element as the last element in your array you cna do this:
const myNames = [...arr, "joykare"];
// The value of names in this case will be [ 'Joy', 'Wangari', 'Warugu', 'joykare' ].

// Copying arrays
// We can use the spread operator to copy an array.
const arr = [1, 2, 3];
const arr2 = [...arr];

// Pass elements of an array to a function as separate arguments
// If we had an array that we wanted to pass as a list of arguments in a function, we would use the spread operator. Let's reuse our add function.

function add(a, b, c) {
  return a + b + c ;
}
const args = [1, 2, 3];

add(...args);

