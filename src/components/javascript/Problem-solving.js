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
