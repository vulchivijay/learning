// "This":

// "this" with reference to functions in JavaScript. "this" always holds the reference to a
// single object, that defines the current line of code’s execution context.

// this and Functions invocation:

function doSomething() {
  // do something here
  console.log(this);
}
  
// function invocation
doSomething();

// this inside the doSomething function, if it is invoked through the function invocation as
// above, has the value of the global object, which is the window object in the browser

function doSomething(a, b) {
  // adds a propone property to the Window object
  this.propone = "test value"; 
}
  
// function invocation
doSomething();
// output is "test value"

// However, this is not always the case. If the doSomething() function were running in strict mode,
// it would log undefined instead of the global window object.This is because, in strict mode
// (indicated by the line : 'use strict';), the default value of this, for any function object is set to
// undefined instead of the global object.

// this with method invocation:

let person = {
  name : "John",
  age : 31,
  logInfo : function() {
    document.write(this.name + " is " + this.age + " years old ");
  }
}

person.logInfo();

// logs John is 31 years old
let add = {
  num : 0,
  calc : function() {
    // logs the add object
    document.write(this + ' ') 
    this.num += 1;
    return this.num;
  }
};
  
// logs 1
document.write(add.calc() + '<br>'); 
// logs 2
document.write(add.calc()); 

// In the above example, calc() is a method of the add object and is therefore called using
// the method invocation rules and we know, when method invocation patterns are used, the value of
// this is set to the calling object.

// Inside this calc() method, the value of this is set to the calling object, which in our case
// is add. and thus we can successfully access add‘s num property.

let add = {
  num : 0,
  calc : function() {
    // logs the add object
    document.write(this + ' ') 
    function innerfunc() {
      this.num += 1;
      // logs the window object
      document.write(this + ' ');
      return this.num
    }
    return innerfunc();
  }
};
// logs NaN
document.write(add.calc() + '<br>'); 
// logs NaN
document.write(add.calc());

// [object Object] [object Window] NaN
// [object Object] [object Window] NaN 

// When we call calc() we are using method invocation which sets this to add in calc(). This can
// be verified using the log statement in line 4.

// However, innerfunc() is called from within the calc() method using a simple function invocation.
// This means, inside innerfunc() this is set to the global object, which does not have a num property,
// and hence the NaN outputs are obtained.

let add = {
  num : 0,
  calc : function() {
    // logs the add object
    document.write(this + ' ') 
    // using thisreference variable to 
    // store the value of this
    thisreference = this; 
    function innerfunc()
    {
      // using the variable to access the
      // context of the outer function
        thisreference.num += 1; 
        // logs the add object
        document.write(thisreference + ' ');
        return thisreference.num;
    }
    return innerfunc();
  }
};
// logs 1
document.write(add.calc() + '<br>'); 
// logs 2
document.write(add.calc()); 

// [object Object] [object Object] 1
// [object Object] [object Object] 2 

// this with constructor invocation:

// Constructor invocation is performed when new keyword is followed by an function name, and a
// set of opening and closing parentheses(with or without arguments).

For example: let person1= new People(‘John’, 21);

// Here, person1 is the newly created object and People is the constructor function used to
// create this object.

let people = function(name, age) {
  this.name = name;
  this.age = age;
  this.displayInfo = function() {
    document.write(this.name + " is " + this.age + " years old");
  }
}
let person1 = new people('John', 21);
// logs John is 21 years old
person1.displayInfo();
