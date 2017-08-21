/*
  - Shallow Copy
  - Deep Copy
*/

// Shallow Copy
// assigning one array to another
var nums = [];
for (var i = 0; i < 10; i++) {
  nums[i] = i + 1;
}

var samenums = nums;
// but this arrays is just a reference
// when you change the original array,
// that is reflected in the other as well
console.log(samenums);
nums[0] = 5;
console.log(nums);
console.log(samenums);

// Deep Copy
function copy(arr1, arr2) {
  for(var i=0; i < arr1.length; i++){
    arr2[i] = arr1[i];
  }
}

var nums = [];
for(var i=0; i < 10; i++){
  nums[i] = i + 1;
}

console.log(nums);
var samenums = [];
copy(nums, samenums);
nums[0] = 400;
console.log(nums);
console.log(samenums);
