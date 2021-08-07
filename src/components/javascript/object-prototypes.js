// Object prototypes:

// Prototypes are the mechanism by which JavaScript objects inherit features from one another.

// JavaScript is often described as a prototype-based language — to provide inheritance, objects
// can have a prototype object, which acts as a template object that it inherits methods and properties from.

// An object's prototype object may also have a prototype object, which it inherits methods and
// properties from, and so on. This is often referred to as a prototype chain, and explains why different
// objects have properties and methods defined on other objects available to them.

function Person(first, last, age, gender, interests) {
  // property and method definitions
  this.name = {
    'first': first,
    'last' : last
  };
  this.age = age;
  this.gender = gender;
  //...see link in summary above for full definition
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

// Think about this for a moment. In our code we define the constructor, then we create an instance
// object from the constructor, then we add a new method to the constructor's prototype:

function Person(first, last, age, gender, interests) {
  // property and method definitions
}
let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
};

// But the farewell() method is still available on the person1 object instance — its members have been
// automatically updated to include the newly defined farewell() method.
