var number = 1;
var sum = 0;

for(var number = 1; number < 11; number++){
  sum += number;
}

console.log(sum);

// to assing elements to arrays
var nums = [];

for(var i = 0; i < 100; ++i) {
	nums[i] = i + 1;
}

nums; // [0, 1, 2, ..., 100]

// to accessing elements from an array
var numbers = [1,2,3,5,8,13,21];
var sum = 0;

for(var i = 0; i < numbers.lenght; i++) {
	sum += numbers[i];
}
sum; //53
