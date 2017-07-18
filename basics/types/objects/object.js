// everything in js is an object
// even data types has a object wrapper
// - object is just a list of pair of values
// - is a container of values combined to form single data structure
// that has a particular indentity

var emptyObject = {};

var person = { 'name': 'Fabian', 'surname': 'Jesus'};

// PROPERTIES

// double quotes or single quotes are generally optional
var person = {name: 'Fabian', surname: 'Jesus'};

// but in this case, we are forced to use double or single quotes
var person = {'first-name':'Fabian', 'sencond-name':'Jesus'};

// we can assing any value to an object property
// and any javascript expression, or another object

var person = {
    name: 'Fabian',
    address: {
      street: '13 Ducanncon Street',
      city: 'London'
    },
    country: 'United Kingdom'
};

/* To Access the values of an object*/

// dot notation
var name = person.name;
// we cannot use dot notation to access to 'first-name'
// var name = person.first-name;

// square brackets
var name = person['name'];

// access a non-existing property return 'undefined'
var age = person.age;

// assing a value to a not yet property, assign this property
person.age = 28;

// due to the dynamic feature of javascript, objects can start
// with a basic representation and gradually enrich it with properties
var person = {};
person.name = 'Fabian';
person.surname = 'Jesus';
person.address = {
  street: '123 Ducanncon street',
  city: 'London',
  country: 'United Kingdom'
};
person.age = 28;

// we can also destroy an object with 'delete' statement
delete person.address;
