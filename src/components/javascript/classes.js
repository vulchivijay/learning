// The basic idea of OOP is that we use objects to model real world things that we
// want to represent inside our programs, and/or provide a simple way to access
// functionality that would otherwise be hard or impossible to make use of.

function Person(name) {
  this.name = name;
  this.greeting = function() {
    console.log('Hi! I\'m ' + this.name + '.');
  };
}

let person1 = new Person('Bob');
let person2 = new Person('Sarah');

person1.name
person1.greeting()
person2.name
person2.greeting()

function Person1(first, last, age, gender, interests) {
  this.name = {
     first : first,
     last : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}

let person3 = new Person1('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
person3['age']
person3.interests[1]
person3.bio()

function Employee () {}

Employee.prototype.firstName = "Abhijit";
Employee.prototype.lastName = "Patel";
Employee.prototype.startDate = new Date();
Employee.prototype.signedNDA = true;
Employee.prototype.fullName = function () {
  console.log (this.firstName + " " + this.lastName); 
};

let abhijit = new Employee () //
console.log(abhijit.fullName()); // Abhijit Patel
console.log(abhijit.signedNDA); // true

function Employee2 (name, profession) {
  this.name = name;
  this.profession = profession;
} // Employee () is the constructor function because we use the new keyword below to invoke it.
  
let richard = new Employee2 ("Richard", "Developer") // richard is a new object we create from the Employee () constructor function.
  
console.log(richard.name); //richard
console.log(richard.profession); // Developer