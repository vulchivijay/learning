// All functions are methods.

// Method Reuse - With the apply() method, you can write a method that can be used on different objects.

// The Difference Between call() and apply()
// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will return "Mary Doe":
person.fullName.apply(person1);

const personObject = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", City: " + city + ", Country: " + country;
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe"
}

personObject.fullName.apply(person2, ["Oslo", "Norway"]);


var abc = {
  name: "Vijay" 
}

var fn = () => {
  console.log(this);
}

fn.apply(abc); // this is window object in arrow function

function fnc () {
  console.log(this);
}

fnc.apply(abc); // this is abc object in arrow function