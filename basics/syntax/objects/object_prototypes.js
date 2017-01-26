// js flexibility allows you to changing object structure
// even after their creation
var Person = function (name, surname) {
  this.name = name;
  this.surname = surname;
};

var fabian = new Person('fabian', 'jesus');
var isaac = new Person('Isaac', 'delahaye');

// this code just afects to fabian, not isaac
fabian.greets = function () {
  console.log('Hello ' + this.name  + ' ' + this.surname + '!');
};

console.log(fabian.greets());

// if we want all Person instances to have greets, after creating
// we can use Prototype
// the prototype of an object is a kind of reference of another object

Person.prototype.greets = function () {
  console.log('Hello ' + this.name  + ' ' + this.surname + '!');
};

// if does not exist the methos, js will find of the basic of prototype

String.prototype.padLeft = function (width, char) {
  var result = this;

  if (this.length < width) {
    result = new Array(width - this.length + 1).join(char) + this;
  }

  return result;
};

console.log("abc".padLeft(10, 'x'));
