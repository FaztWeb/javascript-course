// using literal notation, we will have to repeat the
// definition for ecah object that we want to create
var johnSmith = {
  name: "John",
  surname: "Smith",
  address: {
    street: "13 Duncannon Street",
    city: "London",
    country: "United Kingdom"
  },
  displayFullName: function() {
    return this.name + " " + this.surname;
  }
};

var marioRossi = {
  name: "Mario",
  surname: "Rossi",
  address: {
    street: "Piazza Colonna 370",
    city: "Roma",
    country: "Italy"
  },
  displayFullName: function() {
    return this.name + " " + this.surname;
  }
};

/* Constructors */

// in order to avoid defining from scratch objects that have the
// the same structure, we can use a
// constructor - js function invoked using 'new' operator
// the constructor is Capitalized, common Conventions to distiguish
// regular functions from constructors

function Person() {
  this.name = '';
  this.surname = '';
  this.lastname = '';
  this.address = '';
  this.email = '';
  this.displayFullName = function () {};
}

// even if the above constructor seem useless, it defines
// a common structure to any object created.
// in order to create an object of type 'person', we will
// to call the function by prefixing the new operator

var fabianJesus = new Person();
fabianJesus.name = 'Fabian';
fabianJesus.surname = 'Jesus';

var isaacDelahaye = new Person();
isaacDelahaye.name = 'Isaac';
isaacDelahaye.lastname = 'Delahaye';

// in the definition of a constructor, we can expect the
// presence of parameters that can be used in the initialization of object

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  this.lastname = '';
  this.address = '';
  this.email = '';
  this.displayFullName = function () {};
}

var fabianJesus = new Person('Fabian', 'Jesus');
var isaacDelahaye = new Person('Isaac', 'Delahaye');

// it's important the 'new' operator
// if we forget, what we get is not a creation of a object
// but the execution of a function
var person = Person();

/* strict mode*/
// all properties an methods defined in the body of a function
// will be asigned to the object represented by 'this' keyword
// in the execution of the context function, as for example the global object
// to reduce risk of oversights we can use 'strict mode'
function Person() {
  'use strict'
}

// - In strict mode, the value of the object represented by the this keyword is undefined during
// the execution of the function. This generates a runtime error while trying to access the
// property of an object that does not exist, thus avoiding unwanted invocations of the
// constructor
// - but this approach is not sufficient when the constructor is defined inside a namespace

var mankind = {
  Person: function(name, surname) {
    'use strict';
    this.name = name;
    this.surname = surname;
  }
};

var johnSmith = mankind.Person("John", "Smith");
