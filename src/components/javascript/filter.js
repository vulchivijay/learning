// Filter()

// This same effect could be written using JavaScript’s built-in filter() method.

var uniqueProducts = array.filter(function(elem, i, array) {
     return array.indexOf(elem) === i;
  }
);

// Seeing filter communicates code behavior so I know exactly what it’s doing. Compared to the
// looping approach above:
// Checking #1, #2, #3 is unnecessary because filter() does these automatically.
// #4 is the same but without the additional if(…) block.

// A big hurdle was #5. I had to search thru the code base to find what models even was.
// Did it already have data? Was it targeting specific data types? map, reduce, and filter solves
// this problem by not depending on code outside the callbacks, called side-effects.
// Use it when: You want to remove unwanted elements based on a condition.
// Example: remove duplicate elements from an array.

// In sum, map, reduce and filter makes code less complex, without side effects, and often more readable.

var uniqueArray = array.filter(function(elem, index, array) {
        return array.indexOf(elem) === index;
    }
);

// ES6
// array.filter((elem, index, arr) => arr.indexOf(elem) === index);

// What it does: Like map() it traverses the array from left to right invoking a callback function
// on each element. The returned value must be a boolean identifying whether the element will be kept
// or discarded. After all elements have been traversed filter() returns a new array with all elements
// that returned true[2].
