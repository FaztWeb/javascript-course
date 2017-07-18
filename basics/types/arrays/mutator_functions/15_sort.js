// sort trabaja muy bien con strings
var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];

names.sort();

console.log(names);

// no funciona muy bien con numeros
var nums = [3,1,2,100,4,200];
nums.sort();

console.log(nums);
function compare(n1,n2) {
  return n1 - n2;
}
nums.sort(compare);

console.log(nums);
