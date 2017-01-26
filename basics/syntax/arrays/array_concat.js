var numeros = [1,2,3];
var nombres = ["Fabian", "Ashley"];

var numerosNombres = numeros.concat(nombres);
var nombresNumeros = nombres.concat(numeros);

console.log(numerosNombres);
console.log(nombresNumeros);

var one = [1,2,3];
var two = [4,5,6];
var three = [7,8,9];

var threeArrays = one.concat(two, three);
console.log(threeArrays);

// concatenando valores
var alpha = ["a", "b", "c"];
var all = alpha.concat("d", [2,3]);
console.log(all);
