// data is information that we store in our computer programms
// js has two types
// primitives: are stored as simple data type
// there are 5 primitive types
/*
  string
  number
  boolean
  null
  undefined
  object
*/

// literals, representa values that aren't stored in
// a variable
// strings
var name = "Nicholas";
var selection = "a";

// numbers
// js has not distintion between
// integers or floating points
var count = 25;
var cost = 1.25;

//boolean
var found = true;

// null: no value
var object = null;

// undefined: uninitialized value
var flag = undefined;
var ref; // assigned undefined automatically

// references: are stored as objects, which are
// really just references to locations in memory

// when you assing a primitive value to a variable
// the value is copied into that variable
var color1 = "red";
var color2 = color1;

console.log(color1); // red
console.log(color2); // red

color1 = "blue";

console.log(color1); // blue
console.log(color2); // red


/*
	to identify primitive types use typeof
*/
typeof "Fazt"; //'string'
typeof 10; //'number'
typeof 5.1; // 'number'
typeof true; // 'boolean'
typeof undefined; // 'undefined'

typeof null; //object
// the best way to determine if a value is null
// is to compare against null directly
value === null // true or false
