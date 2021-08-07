// Singleton Design Pattern in JavaScript

// A Singleton only allows for a single instantiation, but many instances of the same object.
// The Singleton restricts clients from creating multiple objects, after the first object created,
// it will return instances of itself.

// Finding use cases for Singletons is difficult for most who have not yet used it prior. One example
// is using an office printer. If there are ten people in an office, and they all use one printer,
// ten computers share one printer (instance). By sharing one printer, they share the same resources.

var printer = (function () {

  var printerInstance;

  function create () {

  function print() {
      // underlying printer mechanics
  }

  function turnOn() {
      // warm up
      // check for paper
  }

  return {
      // public + private states and behaviors
      print: print,
      turnOn: turnOn
  };
  }

  return {
  getInstance: function() {
      if(!printerInstance) {
      printerInstance = create();
      }
      return printerInstance;
  }
  };

  function Singleton () {
  if(!printerInstance) {
      printerInstance = intialize();
  }
  };

})();

// The create method is private because we do not want the client to access this, however, notice
// that the getInstance method is public. Each officer worker can generate a printer instance by
// interacting with the getInstance method, like so:

var officePrinter = printer.getInstance();

// Module Design Pattern in JavaScript

// JavaScript modules are the most prevalently used design patterns for keeping particular pieces of
// code independent of other components. This provides loose coupling to support well-structured code.

// For those that are familiar with object-oriented languages, modules are JavaScript “classes”. One of
// the many advantages of classes is encapsulation - protecting states and behaviors from being accessed
// from other classes. The module pattern allows for public and private (plus the lesser-know protected
//   and privileged) access levels.

// Modules should be Immediately-Invoked-Function-Expressions (IIFE) to allow for private scopes - that is,
// a closure that protect variables and methods (however, it will return an object instead of a function).
// This is what it looks like:

(function() {

  // declare private variables and/or functions

  return {
      // declare public variables and/or functions
  }

})();

// Here we instantiate the private variables and/or functions before returning our object that we want to
// return. Code outside of our closure is unable to access these private variables since it is not in the
// same scope. Let’s take a more concrete implementation:

var HTMLChanger = (function() {
  var contents = 'contents'

  var changeHTML = function() {
  var element = document.getElementById('attribute-to-change');
  element.innerHTML = contents;
  }

  return {
  callChangeHTML: function() {
      changeHTML();
      console.log(contents);
  }
  };

})();

HTMLChanger.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined

// Notice that callChangeHTML binds to the returned object and can be referenced within the HTMLChanger
// namespace. However, when outside the module, contents are unable to be referenced.

// Revealing Module Pattern

// A variation of the module pattern is called the Revealing Module Pattern. The purpose is to maintain
// encapsulation and reveal certain variables and methods returned in an object literal. The direct
// implementation looks like this:

var Exposer = (function() {
  var privateVariable = 10;

  var privateMethod = function() {
  console.log('Inside a private method!');
  privateVariable++;
  }

  var methodToExpose = function() {
  console.log('This is a method I want to expose!');
  }

  var otherMethodIWantToExpose = function() {
  privateMethod();
  }

  return {
      first: methodToExpose,
      second: otherMethodIWantToExpose
  };
})();

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined

// Although this looks much cleaner, an obvious disadvantage is unable to reference the private methods.
// This can pose unit testing challenges. Similarly, the public behaviors are non-overridable.

// Prototype Design Pattern in JavaScript

// Any JavaScript developer has either seen the keyword prototype, confused by the prototypical inheritance,
// or implemented prototypes in their code. The Prototype design pattern relies on the JavaScript prototypical
// inheritance. The prototype model is used mainly for creating objects in performance-intensive situations.

// The objects created are clones (shallow clones) of the original object that are passed around. One use case
// of the prototype pattern is performing an extensive database operation to create an object used for other
// parts of the application. If another process needs to use this object, instead of having to perform this
// substantial database operation, it would be advantageous to clone the previously created object.

var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}

TeslaModelS.prototype.go = function() {
  // Rotate wheels
}

TeslaModelS.prototype.stop = function() {
  // Apply brake pads
}

// The constructor allows the creation of a single TeslaModelS object. When a creating new TeslaModelS object,
// it will retain the states initialized in the constructor. Additionally, maintaining the function go and stop
// is easy since we declared them with prototype. A synonymous way to extend functions on the prototype as
// described below:

var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}

TeslaModelS.prototype = {
  go: function() {
  // Rotate wheels
  },
  stop: function() {
  // Apply brake pads
  }
}

// Revealing Prototype Pattern

// Similar to Module pattern, the Prototype pattern also has a revealing variation. The Revealing Prototype
// Pattern provides encapsulation with public and private members since it returns an object literal.

// Since we are returning an object, we will prefix the prototype object with a function. By extending our
// example above, we can choose what we want to expose in the current prototype to preserve their access levels:

var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}

TeslaModelS.prototype = function() {

  var go = function() {
  // Rotate wheels
  };

  var stop = function() {
  // Apply brake pads
  };

  return {
  pressBrakePedal: stop,
  pressGasPedal: go
  }

}();

// Note how the functions stop and go will be shielded from the returning object due to being outside of
// returned object’s scope. Since JavaScript natively supports prototypical inheritance, there is no need
// to rewrite underlying features.