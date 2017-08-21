// function to access of an element of an array
// these functions are called accessor functions

// Searching a value
var names = ['fazt', 'Isaac', 'Aaron', 'Isaac'];

var name = 'Isaac';

var position = names.indexOf(name);

if (position >= 0) {
  console.log(`found at ${name} at position ${position}`);
} else {
  console.log(`${name} not found in array`);
}

// lastIndexOf
var name = 'Isaac';
var lastindex = names.lastIndexOf(name);

console.log("last index: " + lastindex);

// String array representation
// both returns an string, separeted by commas
var namesStr = names.toString();
var namesJoin = names.join();

console.log(namesStr);
console.log(namesJoin);

// Creating from existin arrays
var arrayOne = ["fabian", "jesus"];
var arrayTwo = ["Ryan", "Joe"];

console.log(arrayOne.concat(arrayTwo));
console.log(arrayTwo.concat(arrayOne));

var numeros = [1,2,3];
var nombres = ["Fabian", "Ashley"];

var numerosNombres = numeros.concat(nombres);
var nombresNumeros = nombres.concat(numeros);

console.log(numerosNombres);
console.log(nombresNumeros);

var one = [1,2,3];
var two = [4,5,6];
var three = [7,8,9];

var threeArrays = one.concat(two, three);
console.log(threeArrays);

// concatenando valores
var alpha = ["a", "b", "c"];
var all = alpha.concat("d", [2,3]);
console.log(all);

var myArray=["car","apple","glass"];

myArray.unshift("apple");//adds another "apple" element at the array
//indexof function returns the lowest position of a element on an array
console.log(myArray.indexOf("apple")); //will render 0
//lastIndexOf function returns the greates position of a element on array
console.log(myArray.lastIndexOf("apple"));//will render 2

// create an array from an existing
const peopleNames = ['Isaac', 'Aaron', 'Joe', 'Elon', 'Steve'];
const oneDiv = peopleNames.splice(1,3); // ['Aaron', 'Joe', 'Elon']
const twoDiv = peopleNames; // ['Isaac', 'Steve']



