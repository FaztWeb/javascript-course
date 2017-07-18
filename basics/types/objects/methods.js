// while object properties represent data,
// methods represent actions of an object
var person = {};

function showFullName() {
  return 'Fabian Jesus';
}

person.fullName = showFullName;
console.log(person.fullName());

// we can assign any method inside its literal representation
var person = {
  name: 'Fabian',
  surname : 'Jesus',
  showFullName: function () {
    return 'Fabian Jesus';
  }
};

// methods in es6 - ecma2015
var person = {
  name: 'Fabian',
  surname: 'Jesus',
  showFullName(){
    return 'Fabian Jesus';
  }
};

// we can assign an anonymous function to a property
person.fullName = function () {
  return 'Fabian Jesus';
}

// 'this' represent the object when the method is invoked
person.fullName = function () {
  return this.name + ' ' + this.surname;
}
