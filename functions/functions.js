
// actions = verbs
// =^.^=

var drawCats = function (howManyTimes) {
  for(var i = 0; i < howManyTimes; i++){
    console.log(i + " =^.^=");
  }
};

drawCats(10);
/*
JavaScript provides the means to define both
- value-returning functions
- functions that don’t return values
(sometimes called subprocedures or void functions).
*/

// a value returning function

function factorial(number) {
  var product = 1;

  for(var i = number; i >= 1; --i){
    product *= i;
  }

  return product;
}

console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(10)); //

// a subprocedure or void function
function curve(arr, amount) {
  for(var i = 0; i < arr.length; i++) {
    arr[i] += amount;
  }
}

var grades = [77, 73, 74, 81, 90];
curve(grades, 5);
console.log(grades);
