// creating arrays literals,  start with length 0
var number = [];
number.length; // 0

//creating arrays of numbers
var numbers = [ 1, 2, 3, 4, 5];

// to obtain from an index
numbers[0]; //1
numbers[0] + numbers[4]; //6
// from a varaible
var indexOnAVariable = 1;
numbers[indexOnAVariable]; // 2

// creating an array of objects
var people = [
	{"name": "Maria", "age": 21},
	{"name": "isaac", "age": 34}
];
people[0]; // {"name": "Maria", "age": 21},
people[0]["name"]; // "Maria"

// creating with Array Constructor
var numArray = new Array();
numArray.length; // 0
// Constructor with elements as arguments
var numeroArreglo = new Array(1,2,3,4,5);
numeroArreglo.length;

// using a single argument is just
// the length of the array
var arreglo = new Array(10);
arreglo.length; // 10
arreglo; //[ , , , , , , , , , ]

// do not all have the same type
var arr = new Array(1,'hola',true);

// we can verify that an object is an array
var myArray = ["apple","samsung","blackberry"];
var myNoArray = "I'm not an array";
Array.isArray(myArray); // true
Array.isArray(myNoArray); // false

// two dimensional array
var twoDimentional = [1, 2, 3 [1,2,3], 4];
twoDimentional[3][0]; //1

//To find the index of an element in the array
var colors = ["red", "green", "blue"];
colors.indexOf("blue"); //2
colors.indexOf("purple"); // -1

// Creating an String from the Array
var a = [1,2,3,4];
a.join(); // '1,2,3,4'
a.toString(); // '1,2,3,4'

var animals = ['Monkey', 'Cat', 'Fish', 'Lizard'];
animals.join(" - ");
animals.join('*');
animals.join('sees');

// Array from strings
var sentence = "Javascript is fun";
var words = sentence.split(" "); // [ 'Javascript', 'is', 'fun' ]
