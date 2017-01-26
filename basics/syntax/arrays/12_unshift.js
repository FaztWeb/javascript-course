var nums = [9,1,2,3,4,5];
var numeros = [9,1,2,3,4,5];

for(var i=0; i<nums.length; i++){
  nums[i] = nums[i+1];
}
console.log(nums);


var extraido = numeros.shift();
console.log(numeros);
console.log(extraido);
