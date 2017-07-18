// scope refers to where in a program a
// variable's values can be accessed.

// js follows function-level scoping
// the scope of a variables is defined
// as function scope

function showScope() {
  return scope;
}

// when a variable is defined outside
// of a functions, it's global
var scope = 'global';

console.log(scope); // global
console.log(showScope()); // global

function showScope2() {
  var scope = "local";
  return scope;
}

var scope = "global";
console.log(scope); // global
console.log(showScope()); // local

// this variable has automatically
// a gloval scope

function showScope3() {
  scope = "local";
  return scope;
}

scope = "global";
console.log(scope); // global
console.log(showScope()); // local
console.log(scope); // local

/*
  EXAMPLE 2
*/

var outer = 10;
function myFunction() {
  var inner = 2;
  console.log(inner); //2
  console.log(outer); //10
};
myFunction();
// console.log(inner); // not defined

/*
  EXAMPLE 3
  missing var create a global variable
*/

(function () {
  (function () {
    a = 30;
  })();
})();

console.log(a);//30
