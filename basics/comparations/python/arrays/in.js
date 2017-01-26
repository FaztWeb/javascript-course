
function In(word, array) {
   var index = array.indexOf(word);
   return (index>-1) ? true : false;
}

var animales = ['perro', 'gato', 'buey']

console.log(In('perro', animales));
console.log(In('hola', 'el dice: hola'));
console.log(In('bye', 'el dice: hola'));
