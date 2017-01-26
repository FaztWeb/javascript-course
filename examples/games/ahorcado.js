var palabras = 'hormiga babuino tejon murcielago oso castor camello gato almeja cobra pantera coyote cuervo ciervo perro burro pato aguila huron zorro rana cabra ganso halcon leon lagarto llama topo mono alce raton mula salamandra nutria buho panda loro paloma piton conejo carnero rata cuervo rinoceronte salmon foca tiburon oveja mofeta perezoso serpiente araña cigüeña cisne tigre sapo trucha pavo tortuga comadreja ballena lobo wombat cebra'.split('');

const IMAGENES_AHORCADO = [`
    +---+
    |
        |
        |
        |
        |
        |
     =========`, `
    +---+
    |   |
    O
        |
        |
        |
        |
    =========`, `
    +---+
    |   |
    O
    |
        |
        |
        |
        |
    =========`, `
    +---+
    |   |
    O
    |
   /|
        |
        |
        |
    =========`, `
     +---+
     |   |
     O
     |
    /|\  |
         |
         |
    =========`, `
     +---+
     |  |
     O
     |
    /|\ |
    /
        |
        |
    =========`, `
     +---+
     |  |
     O
     |
    /|\ |
    / \ |
        |
=========`];

// functions

function obtenerPalabraAlAzar(listaDePalabras) {
  var indiceDePalabras = Math.floor(Math.random() * listaDePalabras.length);
  return listaDePalabras[indiceDePalabras];
}

function mostrarTablero(IMAGENES_AHORCADO, letrasIncorrectas, letrasCorrectas, palabraSecreta) {
  console.log(IMAGENES_AHORCADO[letrasIncorrectas.length]);
  var letras = '';
  for(var i in letrasIncorrectas.split('')){
    letras += ' ' +letrasIncorrectas[i];
  }
  console.log(`${letrasIncorrectas.length} Letras Incorrectas : ${letras}  `);

}

// game
var letrasIncorrectas = '';
var letrasCorrectas = '';

mostrarTablero(IMAGENES_AHORCADO, 'adf', letrasCorrectas);
