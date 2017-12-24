// OBJECT LITERAL
// data is called properties
// funcionality is called methods

const emptyObject = {};

// PROPERTIES
// these are properties
const person = {"name": "Bruce", "surname": "Wayne"};

// dobule quotes are optional, except in these cases
const person2 = {
  "first-name": "Bruce",
  "last-name": "Wayne"
};

// nested objects
const person3 = {
  surname: "Bruce",
  address: {
    street: "13 Duncannon street",
    city: "Gotham",
    country: "USA"
  }
};

// to access to the name
person3.surname;

// or in strings and squares, if we cannot use dot notation
person3['surname'];

// if a propertie doesnt exist, just return undefined
const age = person3.age; // undefined

// to assign a value
person3.age = 28;

// we can start an object very basic and gradually enrich it
const person4 = {};
person4.name = "Bruce";
person4.surname = "Wayne";
person4.address = {
  street: "13 Duncannon street",
  city: "Gotham",
  country: "USA"
};
person4.age = 28;

// we can delete a propertie in a runtime
delete person4.address;

// METHODS
// are actions that object can performs
function showFullName() {
  return "Bruce Wayne";
}

const person5 = {};
person5.fullName = showFullName;
person5.fullName(); // "Bruce Wayne"

// we can create an object inside a literal
const person6 = {
  surname: "Wayne",
  showFullName: function () {
    return "Bruce Wayne";
  }
};

// OR WITH ES6, in a more short way
const person7 = {
  surname: "Wayne",
  showFullName() {
    return "Bruce Wayne";
  }
};

// distinction between properties and methos are artificial in js
// because functions are object, method is a propertie that is assigned a function

// this represent the object when it is invoked
const person8 = {}
person8.name = "Bruce";
person8.surname = "Wayne";

person8.fullName = function () {
  return this.name + ' ' + this.surname;
};

// OBJECT CONTRUCTORS
// a constructor allow us to create diferent objects with the same structure
// using the 'new' keyword

function Person() {
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
  this.displayFullName = function () { }
}

// to create an object based on the constructor
const bruceWayne = new Person();
bruceWayne.name = "Bruce";
bruceWayne.surname = "Wayne";

const johnManHunter = new Person();
johnManHunter.name = "John";
johnManHunter.surname = "Manhunter";

// we can initialize properties with parametesr
function PersonTwo(name, surname) {
  this.name = "";
  this.surname = "";
}

const ryanRay = new PersonTwo('Ryan', 'Ray');
const joe = new PersonTwo('Joe', 'McMillan');
// defining without new just execute a function thta can
// generate side effects, changing global variables and soon
// ad we can reduce the risk with "stric mode":

function PersonThree() {
  "use strict";
}

// The Object() CONTRUCTORS
// allowt to create a generic Object
const personTen = new Object();
personTen.name = "Bruce";
personTen.surname = "Wayne";

// creating with a literal is the same as the constructor
const personEleven = {};
personEleven.constructor === Object // true

// the object() constructor is able to generate instance from any javascript expression
var number = new Object(12);
var anotherNumber = new Object(3*2);
var string = new Object("test");
var personTwelve = new Object({name: "Bruce", surname:"Wayne"}) // is equivalent to a literal object, and the rest are primitive values

// OBJECT PROTOTYPES
// an object can change its structure after its creation
var josePerez = new Person("Jose", "Perez");
var brunoDiaz= new Person("Bruno", "Diaz");
// this a new method for josePerez without affecting to brunoDiaz object
josePerez.greets = function () {
  return this.name + ' ' + this.surname;
}

// but to modify the structure of the constructor
// now all objects Person have the greets method
Person.prototype.greets = function () {
  return this.name + ' ' + this.surname;
}

// and we can apply this to Object of javascript too
String.prototype.padLeft = function (width, char) {
  var result = this;
  char = char || ' ';
  if (this.length < width) {
    result = new Array(width - this.length + 1).join(char) + this;
  }
  return result;
}

"abc".padLeft(10, "x"); //xxxxxxxabc

// CLASSES
// developers prefer to create an object from an class construct
// es6 is a syntactic sugar
class MyPersonClass {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}
typeof MyPersonClass // function

// this is equivalent
function PersonClass(name, surname) {
  "use strict";
  this.name = name;
  this.surname = surname;
}

// but we can not execute a class as a function
// var personThirteen = MyPersonClass(); // throw an error

// also we can assing a class to a variable
var PersonFourteen = class {
  // you cannot have more than one constructor in a class
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
};

var johnDoe = new PersonFourteen('john', 'doe');

// and class are not 'hoisted'. we cannot use a class with out a declaration
var person = new Person();
class Person {}
