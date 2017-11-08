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


console.log(johnManHunter);
