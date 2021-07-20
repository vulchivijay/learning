// Both for..in and for..of are looping constructs which are used to iterate over data structures. The only difference between them is the entities they iterate over:

// for..in iterates over all enumerable property keys of an object
// for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.

let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
   console.log(list[i]) // will print 4, 5, 6
}

// for...in Loop => iterates over the index in the array.
// for...of Loop => iterates over the object of objects.

var str = 'abc';
var arrForOf = [];
var arrForIn = [];

for(value of str){
  arrForOf.push(value);
}

for(value in str){
  arrForIn.push(value);
}

console.log(arrForOf); 
// ["a", "b", "c"]
console.log(arrForIn); 
// ["0", "1", "2"]
  
  
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Result:
// 0
// 1
// 2
// 3
// 4
  
const foodArray = [
  { name: 'Burrito' },
  { name: 'Pizza' },
  { name: 'Burger' },
  { name: 'Pasta' }
];
for (let i = 0; i < foodArray.length; i++) {
  console.log(`i value: ${i} | Food Name:`, foodArray[i]);
}

// Result:
// i value: 0 | Food Name: { name: 'Burrito' }
// i value: 1 | Food Name: { name: 'Pizza' }
// i value: 2 | Food Name: { name: 'Burger' }
// i value: 3 | Food Name: { name: 'Pasta' }
  
foodArray.forEach((food, index) => {
  console.log(`i value: ${index} | Food Name:`, food);
});
  
// Result:
// i value: 0 | Food Name: { name: 'Burrito' }
// i value: 1 | Food Name: { name: 'Pizza' }
// i value: 2 | Food Name: { name: 'Burger' }
// i value: 3 | Food Name: { name: 'Pasta' }
  
  
