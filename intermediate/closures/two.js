function wrapValue(n) {
  var localVariable = n;
  return function () {
    return localVariable;
  }
}

var wrap1 = new wrapValue(1);
var wrap2 = new wrapValue(2);

console.log(wrap1());
console.log(wrap2());
