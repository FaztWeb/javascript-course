// aplica un acumulador hasta que finalize el array
var nums = [1,2,3,4,5,6,7,8,9,10];

function add(total, valorActual) {
  return total + valorActual;
}

var result = nums.reduce(add);

console.log(result);

// tambien se peude usar para concatenar
var words = ["the ", "quick ","brown ", "fox "];

var sentence = words.reduce(add);
// reduceRight funciona igual que reduce solo que de manera que va de derecha a izquierda
var inverseSentence = words.reduceRight(add);

console.log(sentence);
console.log(inverseSentence);
