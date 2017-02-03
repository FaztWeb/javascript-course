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
