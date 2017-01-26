// realtionship where an object has a major role than another one
// the owner is called 'aggregate' and the owned is called component
// however, each object has an independent life
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

var company = {
  name: 'ACME INC.',
  employees: []
};

var johnSmith = new Person('John', 'Smith');
var marioRossi = new Person('Mario','Rossi');

// js allows to do aggregation trough object reference

company.employees.push(johnSmith);
company.employees.push(marioRossi);

// if the company object is deleted each single person still lives
// however, the real meaning of a company is bound to the reference of its employees
delete company;

// aggregation mechanism consist of several objects
// while association relates autonomous object
// association and aggregation raise a constraint more conceptual than technical
