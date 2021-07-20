// All functions are methods.

// Method Reuse - With the call() method, you can write a method that can be used on different objects.

// The this Keyword
// In a function definition, this refers to the "owner" of the function.
// In the example above, this is the person object that "owns" the fullName function.
// In other words, this.firstName means the firstName property of this object.
// Read more about the this keyword at JS this Keyword.

const myObject = {
  firstname: "Vijaya",
  lastname: "Kumar",

  fullName: function () {
    return this.firstname + " " + this.lastname;
  }
}

myObject.fullName();

// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);
person.fullName.call(person2);


// The call() Method with Arguments

const personObject = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", City: " + city + ", Country: " + country;
  }
}

const person3 = {
  firstName:"John",
  lastName: "Doe"
}

personObject.fullName.call(person3, "Oslo", "Norway");


var abc = {
  name: "Vijay" 
}

var fn = () => {
  console.log(this);
}

fn.call(abc); // this is window object in arrow function

function fnc () {
  console.log(this);
}

fnc.call(abc); // this is abc object in arrow function