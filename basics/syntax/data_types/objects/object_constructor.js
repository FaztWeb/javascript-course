// the constructor allows us to create a generic object

var person = new Object();
person.name = 'Fabian';
person.surname = 'Jesus';

// creating object using literal object or constructor is the same
var person = {};
console.log(person.constructor === Object); // result: true

// the constructor is able to generate object instance of any js expression
var number = new Object(12);
var anotherNumber = new Object(3*4);
var string = new Object('fabian');
var person = new Object({'name': 'fabian', 'surname': 'jesus'});
console.log(person);
