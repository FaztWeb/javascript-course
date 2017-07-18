// creating arrays0
var number = [];

// that is an array with Length 0
console.log(number.length); // 0

// creating an array with elements
var numbers = [1,2,3,4,5];
console.log(numbers.length); // 5

// to obtain an index
var whatEverIndex = 1;
numbers[0]; //1
numbers[whatEverIndex]; // 2

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
