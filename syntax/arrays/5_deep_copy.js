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
