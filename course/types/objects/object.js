// creating object literals
var emptyObject = {};

var person = { 'name': 'Isaac', 'surname': 'Asimov'};

var person2 = {
	'name': 'Aaron',
	'surname': 'Swartz',
	'luckyNumbers': [2,4,5,6,7],
	'age': 28,
	'isWorking': true
};
person2['luckyNumbers'][1];//4


// notice that the last pair, not need a semicolon

var dog = {
	"legs": 4,
	"name": "Hachiko",
	"color": "white"
};

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
var age = person.age; //undefined

// to access to all keys of an object
Object.keys(person); //['name', 'address', 'country']

// to add a property
// assing a value to a not yet property, assign this property
person.age = 28;
person['favorite-color'] = "red";

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

// everything in js is an object
// even data types has a object wrapper
