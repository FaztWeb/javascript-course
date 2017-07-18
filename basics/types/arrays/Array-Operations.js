// accessing through [index]

var numbers = [1,2,3,5,8,13,21];
var sum = 0;

for(var i = 0; i < numbers.length; i++){
  sum += numbers[i];
}
console.log(sum);

// we can assign dato through [index] = value
var nums = [];

for (var i=0; i<100; i++){
  nums[i] = i + 1;
}

console.log(nums);
console.log(nums.length);

// Creating Array from a String

var sentence = "javascript is fun";
var words = sentence.split(' ');

for (var i = 0; i < words.length; i++) {
  console.log('word '+ i + ": " + words[i]);
}

// Creating an String from the Array
var a = [1,2,3,4];

console.log(a.join()); // '1,2,3,4'
console.log(a.toString()); // '1,2,3,4'

var animals = ['Monkey', 'Cat', 'Fish', 'Lizard'];
animals.join(" - ");

animals.join('*');

animals.join('sees');

