// creacion de arrays
var number = [];
// al hacer esto se crea un array de longitud 0
console.log(number.length);

// la segunda forma es creadolo con elementos
var numeros = [1,2,3,4,5];
console.log(numeros.length);

// creandolo a traves del constructor
var numArray = new Array();
console.log(numArray.length);

// constructor mas elementos
var numeroArreglo = new Array(1,2,3,4,5);
console.log(numeroArreglo.length);

// si se usa solo un argumento se especifica la longitud del arreglo
var arreglo = new Array(10);

console.log(arreglo.length);
console.log(arreglo);

// los arreglos pueden ser de diferentes tipso
var arr = new Array(1,'hola',true);
console.log(arr);

// se puede verificar si un OBJETO es un arreglo
var number = 3;
var array = [1,2,3];
console.log(Array.isArray(number));
console.log(Array.isArray(array));
