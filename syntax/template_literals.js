console.log(`cadena de texto`);

console.log(`linea 1 de cadena de texto
  linea 2 de cadena de texto`);

const miNombre = "Fabian";
console.log(`cadena de texto que muetra: ${miNombre}`);

const a = 5;
const b = 10;
console.log(`Quince es ${ a + b } y \nNo ${2 * a + b}`);

// Post postProcesado de los resultados
function postProcesado(arreglo,...resultados) {
    console.log(arreglo[0]);
    console.log(arreglo[1]);

    console.log(resultados[0]);
    console.log(resultados[1]);

    return 'postProcesado Terminado!';
}

  postProcesado`Hola ${ a + b} mundo ${ a * b }`;

// funcion raw - retorna el valor tal como fue ingresado
function tag(strings, values) {
  console.log(strings.raw[0]);
}

tag`línea 1 de cadena de texto \n línea 2 de cadena de texto`;

console.log(String.raw`Hola\n${2+3}!`);
