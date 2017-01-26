function multiplier(factor) {
  return function (number) {
    return factor * number; 
  }
}

var twice = new multiplier(2);
console.log(twice(5));
