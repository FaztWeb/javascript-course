// inheritance enables new objects to acquire the properties of existing objects
// refers to creating a specialized object starting from a more general one

// Inheritance is also called subclassingin languages that support class
// 'superclass' <----- 'subclass'

function Person() {
  this.name = '';
  this.surname = '';
}

// A simple approach to create the programmer object that inherits properties from person is
// based on prototype

function Programmer() {
  this.knowLanguage = '';
}

Programmer.prototype = new Person();

// create a new Programmer
var programmer = new Programmer();
console.log(programmer.name);
console.log(programmer.surname);
console.log(programmer.knowLanguage);
