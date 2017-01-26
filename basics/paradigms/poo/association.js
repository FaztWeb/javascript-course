// association is a relationship between two or more objects
// an object can exist without the other and no objects ows the other

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  this.parent = null;
}

var johnSmith = new Person('John', 'Smith');
var fredSmith = new Person('Fred', 'Smith');

// johnSmith and fredSmith live independently from each other
// both can be created ann deleted independently
// js allows us to define association using a simple object reference through a property
fredSmith.parent = johnSmith;
