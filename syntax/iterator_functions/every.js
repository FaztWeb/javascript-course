// RETORNA true si todos los items retornan true
var nums = [2,4,6,8,10];
var nums2 = [2,3,6,8,10];

function isEvent(num) {
  return num % 2 === 0;
}

var result = nums.every(isEvent);
var result2 = nums2.every(isEvent);

console.log(result);
console.log(result2);
