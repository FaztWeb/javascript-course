// retorna true si al menos un solo item es true
var nums = [1,2,3,4,5,6,7,8,9,10];
var nums2 = [1,3,5,7,9];

function even(num) {
  return num % 2 === 0;
}

var result = nums.some(even);
var result2 = nums2.some(even);

console.log(result);
console.log(result2);
