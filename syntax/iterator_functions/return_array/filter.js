// filter es similar a every solo que en lugar de retornar true si todo los item cumplen un criterio
// retorna un array con todos los items que cumplan el criterio
function isEven(num) {
  return num % 2 === 0;
}
function isOdd(num) {
  return num % 2 !== 0;
}
var nums = [];
for(var i=0;i<20;i++){
  nums[i] = i+1;
}

var pares = nums.filter(isEven);
var inpares = nums.filter(isOdd);

console.log(nums);
console.log(pares);
console.log(inpares);

// second example
console.log('------------------------------');

function passing(num) {
  return num >= 60;
}

var grades = [];
for(var i = 0; i < 20; i++){
  grades[i] = Math.floor(Math.random() * 101 );
}

var passGrades = grades.filter(passing);

console.log(grades);
console.log(passGrades);

// third example
console.log('------------------------------');

function afterc(str) {
  if (str.indexOf('cie') > -1) {
    return true;
  }
  return false;
}

var words = ["recieve","deceive","percieve","deceit","concieve"];
var misspelled = words.filter(afterc);

console.log(misspelled);
