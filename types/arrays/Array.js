// creating arrays literals
// start with length 0
var number = [];

number.length; // 0

//creating arrays of numbers
var numbers = [1,2,3,4,5];

// to obtain from an index
numbers[0]; //1
numbers[0] + numbers[4]; //6

var whatEverIndex = 1;
numbers[whatEverIndex]; // 2

// creating an array of objects
var people = [
	{"name": "Maria", "age": 21},
	{"name": "isaac", "age": 34}
];

people[0]; // {"name": "Maria", "age": 21},
people[0]["name"]; // "Maria"

// creating with Array Constructor
var numArray = new Array();
console.log(numArray.length); // 0

// Constructor with elements as arguments
var numeroArreglo = new Array(1,2,3,4,5);
console.log(numeroArreglo.length);

// using a single argument is just
// the length of the array
var arreglo = new Array(10);
console.log(arreglo.length);
console.log(arreglo);

// do not all have the same type
var arr = new Array(1,'hola',true);
console.log(arr);

// we can verify that an object
// is an array
var number = 3;
var array = [1,2,3];
var myArray=["apple","samsung","blackberry"];
var myNoArray="I'm not an array";

console.log(Array.isArray(myArray)); // true
console.log(Array.isArray(myNoArray)); // false

console.log(Array.isArray(number)); // false
console.log(Array.isArray(array)); // true

// two arrays
var twoDimentional = [1, 2, 3 [1,2,3], 4];
twoDimentional[3][0]; //1

//To find the index of an element in the array
var colors = ["red", "green", "blue"];
colors.indexOf("blue");//2
colors.indexOf("purple"); // -1

// Creating an String from the Array
var a = [1,2,3,4];

console.log(a.join()); // '1,2,3,4'
console.log(a.toString()); // '1,2,3,4'

var animals = ['Monkey', 'Cat', 'Fish', 'Lizard'];
animals.join(" - ");

animals.join('*');

animals.join('sees');

