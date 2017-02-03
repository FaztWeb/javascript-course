// is the ability to handle multiple data type uniformly
// in some cases, create more compact code

// ways to support polymorphis in laguages is
// 1- methods take parameters with different data types (overloading)
// 2- manage generic types(parametric polymorphism)
// 3- expressions whose type can be represented by
// a class and classes derived from it(subtype polymorphism or inclusion polymorphism)

/*OVERLOADING*/

// These examples demonstrate that JavaScript supports overloading in a more immediate
// way than strong-typed languages

function countItems(x) {
  return x.toString().length;
}

function sum(x, y, z) {
  x = x ? x : 0;
  y = y ? y : 0;
  z = z ? z : 0;

  return x + y + z;
}

// with es6
function sum(x = 0; y = 0; z = 0) {
  return x + y + z;
}

/*PARAMETRIC POLYMORPHISM*/
// Due to its dynamic data typing, JavaScript supports parametric polymorphism implicitly. In
// fact, the type of function's parameters is inherently generic, since its type is set when a value
// is assigned to it
function Stack()
{
    this.stack = [];
    this.pop = function () {
      this.stack.pop();
    }
    this.push = function (item) {
      this.stack.push(item);
    }
}

/*Subtype polimorphism*/
// allows the consideration of different object types, with an
//  inheritance relationship, to be handle consistently
