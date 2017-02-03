// take a Boolean function and return true if at least one of the
// elements in the array meets the criterion of the Boolean function

function add(runningTotal, currentValue) {
  return runningTotal + currentValue;
}

var nums = [1,2,3,4,5,6,7,8,9,10];

var sum = nums.reduce(add);

// conact with reduce

var words = ['javascript', 'is', 'awesome'];

function concatenateString(runningTotal, currentValue) {
  return runningTotal + ' '+ currentValue;
}

var sentence = words.reduce(concatenateString);
console.log(sentence);
