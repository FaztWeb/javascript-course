// es5
const square = function (x) {
  return x * x;
};
console.log(square(8));

// example 1
const squareArrowOne = (x) => {
  return x * x;
};
console.log(squareArrowOne(3));

// example 2
const squareArrow = x => x * x;
console.log(squareArrow(3));

// aguments object - no longer bound with arrow functions
const add = function (a, b) {
  console.log(arguments); // {'0': 55, '1': 1}
  return a + b;
}
console.log(add(55, 1)); // 56

// this keyword - no longer bound
const user = {
  name: 'Ryan',
  cities: ['California', 'New York', 'Dublín'],
  printPlacesLived: function () {
    this.cities.forEach(function (city) {
      console.log(city);
    })
  }
};
user.printPlacesLived();

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 2,
  multiply () {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply()); // [1, 2, 3] * 2 = [2, 4, 6]
