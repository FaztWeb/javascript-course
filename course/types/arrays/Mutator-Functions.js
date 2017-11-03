// MUTATOR FUNCTIONS
// allows yo modify an array
// without referencing individual elements

// Adding element to the end of an array
var num = [1,2,3,4,5];
num.push(6);

// adding without a mutator function
var num = [1,2,3,4];
num[num.length] = 5;

// To add an element to the beginning
// without a mutator function
var nums = [2,3,4,5];

for(var i = nums.length; i >= 0 ; i--){
  nums[i] =nums[i-1];
}

nums[0] = 1;

// to add an element to the beginning
var nums = [2,3,4,5];
nums.unshift(1); // 1, 2, 3, 4, 5

// to add multiples items
var arr = [3,4,5];
arr.unshift(1,2); // 1, 2, 3, 4, 5

// to remove an element from the end
var nums = [1,2,3,4,5,9];
nums.pop(); // 1, 2, 3, 4, 5

// to remove an element from the beginning
// it retuns the element
var nums = [9, 1, 2, 3];
nums.shift(); // 1, 2, 3

// without mutator function
// to delete the first element
var nums2 = [9, 1, 2, 3, 4, 5];

for(var i = 0; i < nums2.length; ++i) {
	nums2[i] = nums2[i + 1];
}

// to add and remove element in the middle
// splice(index, n_to_remove, elements_to_add)
var nums = [1,2,3,7,8,9];

nums.splice(3,0,4,5,6); // 1, 2, 3, 4, 5, 6, 7, 8, 9

var nums = [1,2,3,100,200,300,400,4,5];
nums.splice(3,4); // 1, 2, 3, 4, 5

// To reverse the order of elements
var nums = [1,2,3,4,5];
nums.reverse(); // 5, 4, 3, 2, 1


// to sort elements
// works fine for strings
var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];

names.sort(); // Bryan, Clayton, Cynthia, ...

// doesn't work very well with numbers
var nums = [3,1,2,100,4,200];
nums.sort(); // 1, 100, 2, 200

// we have to pass an ordering function
function compare(n1, n2) {
  return n1 - n2;
}
nums.sort(compare); // 1, 2, 3, 4, 100, 200
