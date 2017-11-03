var nameVar = "Ryan";
var nameVar = "Ray"; // you can redeclare variable
console.log("nameVar", nameVar);

var nameLet = "Ryan";
nameLet = "Ray";
console.log("nameLet", nameLet);

// const
const nameConst = "Ryan";
console.log("nameConst", nameConst);

const PI = 3.14;

// Block Scoping

const fullName = "Ryan Ray";
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
