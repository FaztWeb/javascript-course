// Rest Parameters
function showSecondParameter(first, remaining) {
  console.log(remaining);
}
function multimax(first, ...remaining) {
console.log(remaining); //[2,3,4,5]
}
showSecondParameter(1,2,3,4,5);
multimax(1,2,3,4,5);


// Default Parameters
