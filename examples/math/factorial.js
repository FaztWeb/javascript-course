function factorial(n) {
  var resultado = 1;
  for(var i=n;i>0;i--){
    resultado *= i;
  }
  return resultado;
}

console.log(factorial(5));
