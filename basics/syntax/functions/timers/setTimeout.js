var timerHOla =setTimeout(function() {
  console.log('hola');
}, 3000);

// para la ejecucion despues de 2 segundos
setTimeout(function () {
  clearTimeout(timerHOla);
}, 2000);
