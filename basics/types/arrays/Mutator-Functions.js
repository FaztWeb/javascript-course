// Adding element to an array
var num = [1,2,3,4,5];

console.log(num);

var newnum = 6;
num.push(newnum);

console.log(num);

var num = [1,2,3,4];
console.log(num);

var newNum = 5;
num[num.length] = newNum;

console.log(num);

// To add an element to the beginning
var nums = [2,3,4,5];
var newNum = 1;
var N = nums.length;

for(var i = N; i >=0; i--){
  nums[i] =nums[i-1];
}
nums[0] = newNum;

// to add an element
console.log(nums);

var nums = [2,3,4,5];
var newNum = 1;

nums.unshift(newNum);
console.log(nums);

var arr = [3,4,5];
arr.unshift(1,2);
console.log(arr);
