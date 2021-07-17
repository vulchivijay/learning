// The basic idea of OOP is that we use objects to model real world things that we want to represent inside our programs, and/or provide a simple way to access functionality that would otherwise be hard or impossible to make use of.

// Using Constructor functions

function FHuman (firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

let kumar = new FHuman("kumar", "vulchi");

console.info("Using Constructor functions: kumar is instance of Function Human")
console.log("firstname: ", kumar.firstname);
console.log("lastname: ", kumar.lastname);

class CHuman {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

let vijay = new CHuman("vijay", "kumar");

console.info("Using Class: vijay is instance of Class CHuman")
console.log("firstname: ", vijay.firstname);
console.log("lastname: ", vijay.lastname);

// Objects linking to another Objects:

let OHuman = {
  init (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

let raju = Object.create(OHuman);

raju.init("raju", "vulchi");

console.info("Objects linking with another Objects: raju is instance of Object OHuman")
console.log("firstname: ", raju.firstname);
console.log("lastname: ", raju.lastname);

// Factory functions

function FFHuman (firstname, lastname) {
  return { firstname, lastname }
}

let anusha = FFHuman("anusha", "vijay");
console.info("Factory function: anusha is instace of factory function human");
console.log(anusha);

// Declaring properties and methods with Constructors

function FFMHuman (firstname, lastname) {
  return {
    firstname,
    lastname,
    sayHello () {
      return `Hello I'm ${this.firstname} ${this.lastname}`;
    }
  }
}

let lavanya = FFMHuman("lavanya", "prasad");
console.info("Factory function with methods: lavanya is instace of factory function with method human");
console.log(lavanya);
console.log(lavanya.sayHello());

function PMHuman (firstName, lastName) {
  // Declares properties
  this.firstName = firstName
  this.lastname = lastName
  // Declares methods
  this.sayHello = function () {
    return `Hello, I'm ${firstName}`;
  }
}

PMHuman.prototype.greetings = function () {
  return `Greetings to, ${this.firstName} ${this.lastname}`;
}

console.log("PMHuman: ", PMHuman());

let chris = new PMHuman('Chris', 'Coyier');
console.info("chris is instanse of properties and methods constructor/function PMHuman.");
console.log(chris);
console.log(chris.sayHello());
console.log(chris.greetings());

PMHuman.prototype.sings = function (song) {
  return `${this.firstName} sings ${song}`;
}

console.log(chris.sings("western songs"));
 
class CCFHuman {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    this.sayHello = function () {
      return `Hello, I'm ${firstname} ${lastname}`;
    }
  }
  // function greetings () allowed syntax
  // greetings = function () allowed syntax
  greetings () {
    return `Greeting message to, ${this.firstname} ${this.lastname}`;
  }
}

let haneesh = new CCFHuman("haneesh", "vulchi");

console.log(haneesh);
console.info("haneesh is instanse of properties and methods of class CCFHuman. methods defined inside contructor and outside contstructor");
console.log(haneesh.sayHello());
console.log(haneesh.greetings());
console.log(haneesh.sayHello());


class Person {
  constructor (fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  sayHello () {
    return `Hello ${this.fname} ${this.lname}`;
  }
}

let venkata = new Person("venkata", "raju");

console.log("venkata: ", venkata);

Person.prototype.sings = function (song) {
  return `${this.fname} sings ${song}.`;
}

console.log("we cannot define prototype methods to instace venkata. we can define methods to parent class or constructor.");
// venkata.prototype.hobbies = function (hobby) { // throws error.
//   return `${this.fname} hobbies are ${hobby}.`;
// }

console.log("venkata 1: ", venkata.sings("india songs"));
// console.log(Person);

// Inheritance

class Employee {
  constructor (fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  sayHello () {
    return `Hello ${this.fname} ${this.lname}`;
  }
}

class Developer extends Employee {
  // constructor(fname, lname) {
  //   super(fname, lname);
  // }

  write (code) {
    return `${this.fname} writes ${code}.`;
  }
}

let thilak = new Developer("thilak", "prasad");
let prasad = new Employee("prasad", "munaswamy");

console.log("prasad instance object from Employee class: ", prasad);
console.log("thilak instance object from Developer class with inherit Employee class: ", thilak);
console.log(thilak.sayHello());
console.log(thilak.write("HTML"));

// Subclassing with Factory function There are four steps to creating Subclasses with Factory functions:
// 1. Create a new Factory function
// 2. Create an instance of the Parent blueprint
// 3. Create a new copy of this instance
// 4. Add properties and methods to this new copy

function Emp (firstName, lastName) {
  return {
    firstName,
    lastName,
    sayHello () {
      return `Hello, I'm ${firstName}`;
    }
  }
}

function Dev (firstName, lastName) {
  const human = Emp(firstName, lastName)
  // assigns the method to human instace
  return Object.assign({}, human, {
    code (thing) {
      return `${this.firstName} ${this.lastName} coded ${thing}`;
    }
  })
}

let govind = new Dev("govinda", "narayana");
let aravind = new Emp("aravind", "swamy");

console.log("aravind instance object from Emp class: ", aravind);
console.log("govind instance object from Dev class with inherit of Emp class: ", govind);
console.log(govind.sayHello());
console.log(govind.code("JavaScript"));

// Overwriting the Parent’s method Sometimes you need to overwrite the Parent’s method inside the Subclass. You can do this by:
// 1. Creating a method with the same name
// 2. Calling the Parent’s method (optional)
// 3. Changing whatever you need in the Subclass’s method

class Emp1 {
  constructor (fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  sayHello () {
    console.log("parent method called");
    return `Hello ${this.fname} ${this.lname}`;
  }
}

class Dev1 extends Emp1 {
  sayHello () {
    console.log("child method called");
    // Calls the parent method
    super.sayHello()
    // Additional stuff to run
    return `I'm a developer [parent class method overrided].`;
  }
}

const uday = new Dev1('uday', 'kumar')
console.log(uday.sayHello());

// The process looks like this with Factory functions:

function Dev2 (firstName, lastName) {
  const human = Emp(firstName, lastName)
  return Object.assign({}, human, {
    sayHello () {
      console.log("child method called from factory return object.");
      // Calls the parent method
      human.sayHello()
      // Additional stuff to run
      console.log(`I'm a developer [parent class method overrided].`)
    }
  })
}

let vulchi = new Dev2('vulchi', 'vijay')
vulchi.sayHello();

// Inheritance vs. Composition

// Understanding Composition
// Composition is the act of combining two things into one. It’s about merging things together. The most common (and simplest) way of merging objects is with Object.assign.

const one = { one: 'one' }
const two = { two: 'two' }
const combined = Object.assign({}, one, two)

console.log("combined one and two objects: ", one, two, combined);

// class Emp2 {
//   constructor(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }
//   sayHello () {
//     console.log(`Hello, I'm ${this.firstName}`)
//   }
// }

// class Designer extends Emp2 {
//   design (thing) {
//     console.log(`${this.firstName} designed ${thing}`)
//   }
// }

// class Dev3 extends Designer {
//   code (thing) {
//     console.log(`${this.firstName} coded ${thing}`)
//   }
// }

// console.log(Dev3);

// we can acheive below

const skills = {
  sayHello () { console.log(`Hello, I'm ${this.firstName}`) },
  design (thing) { console.log(`${this.firstName} designed ${thing}`) },
  code (thing) { console.log(`${this.firstName} coded ${thing}`) }
}

class DesignerDeveloper {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    Object.assign(this, {
      code: skills.code,
      design: skills.design,
      sayHello: skills.sayHello
    })
  }
}

let siva = new DesignerDeveloper("hara hara", "maha deva")
console.log(siva);

// You can do the same with Developer and Designer.
// class Des2 {
//   constructor (firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//     Object.assign(this, {
//       design: skills.design,
//       sayHello: skills.sayHello
//     })
//   }
// }

// console.log(Des2);

// class Dev4 {
//   constructor (firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//     Object.assign(this, {
//       code: skills.code,
//       sayHello: skills.sayHello
//     })
//   }
// }

// console.log(Dev4);

// we can do same with factory function
// function DesignerDeveloper1 (firstName, lastName) {
//   return {
//     firstName,
//     lastName,
//     code: skills.code,
//     design: skills.design,
//     sayHello: skills.sayHello
//   }
// }

// console.log(DesignerDeveloper1);

// Inheritance with composition at same time.

class IHuman {
  constructor (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  sayHello () {
    return `Hello, I'm ${this.firstName}`;
  }
}

class DesignerDeveloper2 extends IHuman {}

Object.assign(DesignerDeveloper2.prototype, {
  code: skills.code,
  design: skills.design
})

let ramu = new DesignerDeveloper2("ramu", "lakshman");

console.log(ramu);
console.log(ramu.sayHello())

// Encapsulation
console.info("JAVASCRIPT ENCAPSULATION");

// Simple encapsulation
// {
//     Variables declared here won't leak out
// }

// Encapsulating with functions
// Functions behave like block scopes. When you declare a variable inside a function, they cannot leak out of that function. This works for all variables, even those declared with var.
// function sayFood () {
//   let food = 'Hamburger'
// }
// sayFood()
// console.log(food)

// Likewise, when you’re inside the function, you can access variables that are declared outside of that function.

const food = 'Hamburger'
function sayFood () {
 console.log(food)
}
sayFood()

// Closures : Closures are an advanced form of Encapsulation. They’re simply functions wrapped in functions.

// Here's a closure
// function outsideFunction () {
//   function insideFunction () {
//     /* ...*/
//   }
// }
// Variables declared in outsideFunction can be used in insideFunction .

function outsideFunction () {
  const food = 'Hamburger'
  console.log('Called outside')
  return function insideFunction () {
    console.log('Called inside')
    console.log(food)
  }
}
// Calls `outsideFunction`, which returns `insideFunction`
// Stores `insideFunction` as variable `fn`
const fn = outsideFunction()
// Calls `insideFunction`
fn()

console.log("Encapsulation and Object-Oriented Programming:");
// When you build objects, you want to make some properties publicly available (so people can use them). But you also want to keep some properties private (so others can’t break your implementation).

class Car {
  constructor () {
  this.fuel = 50
  }
}

const car = new Car()
console.log("Fuel : ", car.fuel);

// Users can also use the fuel property to set any amount of fuel.
// const car = new Car()
car.fuel = 100
console.log("Fuel new price: ", car.fuel);

// There are two ways to do prevent users from setting fuel :
// 1. Private by convention
// 2. Real Private Member

// Private by convention
// In JavaScript, there’s a practice of prepending underscores to a variable name. This denotes the variable is private and should not be used.

class Car1 {
  constructor () {
    // Denotes that `_fuel` is private. Don't use it!
    this._fuel = 50
  }
}

let dhoni = new Car1();
console.log("dhoni :", dhoni);

// We often create methods to get and set this “private” _fuel variable.

class Car2 {
  constructor () {
    // Denotes that `_fuel` is private. Don't use it!
    this._fuel = 50
  }
  getFuel () {
    return this._fuel
  }
  setFuel (value) {
    this._fuel = value
    // Caps fuel at 100 liters
    if (value > 100) return this._fuel = 100
  }
}

let sachin = new Car2();
console.log("sachin: ", sachin);
sachin.setFuel(101);
console.log("sachin new value: ", sachin);

// Real Private Members
// Members here refer to variables, functions, and methods. It’s a collective term.
// Private Members with Classes
// Classes let you create private members by prepending # to the variable.

class Car3 {
  // Declares private variable
  fuel
  constructor () {
    this.fuel = 50
  }
}

let suresh = new Car3();
console.log(suresh);

class Car4 {
  fuel1 = 50
  getFuel () {
    return this.fuel1
  }
  setFuel (value) {
    this.fuel1 = value
    if (value > 100) this.fuel1 = 100
  }
}
const ronald = new Car4()
console.log(ronald.getFuel()) // 50
ronald.setFuel(3000)
console.log(ronald.getFuel()) // 100

// Private Members with Factory functions
// Factory functions create Private Members automatically. You just need to declare a variable like normal. Users will not be able to get that variable anywhere else. This is because variables are function-scoped and hence encapsulated by default.

function Car5 () {
  let fuel = 50
  return {
    get fuel () {
      return fuel
    },
    set fuel (value) {
      fuel = value 
      if (value > 100) fuel = 100
    }
  }
}
const chinnu = new Car5()
console.log(chinnu.fuel) // 50
chinnu.fuel = 3000
console.log(chinnu.fuel) // 100 



