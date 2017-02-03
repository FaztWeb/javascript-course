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
