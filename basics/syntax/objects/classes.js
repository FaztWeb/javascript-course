// js classes is just a syntactic simplification to create object
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

// this class is fully equivalent to old-style code
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

console.log(typeof Person); // result: function

// unlike a cosntructor, we cannot invoke a class as a function
// var person = Person('bla','bla');

// we can assign a class definition to an object, and then use that variable
// as an object cosntructor
var Person = class {
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }
}

var person = new Person('bla', 'bla');

// a class is a collection of method includes in braces and identified by a name
// one of these methos is the constructor, whose define and initialize the properties
class ClassName {
  constructor() {

  }
  method1(){}
  method2(){}
}

// by default the constructor method return a new instance
// but it is possible override the default behaviour
// by inserting a return a statement in the cosntructor

class myClass{
  constructor(value) {
    return {property1: value, property2: ''};
  }
}

var x = new myClass('foo');

// class are not 'hoisted', class cannot be used before declaration
// var person = new Person();
// class Person {}
