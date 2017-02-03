var nums = [];
for (var i = 0; i < 10; i++) {
  nums[i] = i + 1;
}

var samenums = nums;

console.log(samenums);
nums[0] = 5;
console.log(nums);
console.log(samenums);
