var myArray =[
  "apple",
  "samsung",
  "nokia",
  "blackberry",
  "lg",
  "acer",
  "huawei",
  "xiami",
  "miuzu",
  "alcatel"
];

myArray.forEach(function(value) {
  console.log(value);
});

/*
  EVERY
*/

// applies a Boolean function to an array and returns
// true if the function can return true for every element in the array.

function isEven(num) {
  return num % 2 === 0;
}

var nums = [2,4,6,8];

var even = nums.every(isEven);

if (even) {
  console.log('all numbers are even');
}else {
  console.log('not all numbers are even');
}

// take a Boolean function and return true if at least one of the
// elements in the array meets the criterion of the Boolean function

function isEven(num) {
  return num % 2 === 0;
}

var nums = [1,2,4,6,8];

var someEven = nums.every(isEven);

if (someEven) {
  console.log('some numbers are even');
}else {
  console.log('no some numbers are even');
}

/*
  REDUCE
*/

// take a Boolean function and return true if at least one of the
// elements in the array meets the criterion of the Boolean function

function add(runningTotal, currentValue) {
  return runningTotal + currentValue;
}

var nums = [1,2,3,4,5,6,7,8,9,10];

var sum = nums.reduce(add);

// conact with reduce

var words = ['javascript', 'is', 'awesome'];

function concatenateString(runningTotal, currentValue) {
  return runningTotal + ' '+ currentValue;
}

var sentence = words.reduce(concatenateString);
console.log(sentence);

// only working from the righthand side of the array to the left, instead of from
// left to right.

function concat(accumulatedString, item) {
  return accumulatedString + item;
}
var words = ["the ", "quick ","brown ", "fox "];

var sentence = words.reduceRight(concat);

print(sentence); // displays "fox brown quick the"

/*
  ITERATOS THAT RETURNS AN ARRAY
*/

var myArray=[1,2,3,4,5];

var TwoTimes = function(item) {
  return item * 2;
}
var SegundoArrayProcesado = myArray.map(TwoTimes);
console.log(SegundoArrayProcesado);

var myArray = [
  "apple",
  "samsung",
  "nokia"
];

//filtro los array mediante Array.filter y buscandolos por indexof
var myNewArray = myArray.filter(function(arrayitem) {
  if (arrayitem.indexOf("a")==0) {
    return true;
  };
  return false;
});
console.log(myNewArray);
