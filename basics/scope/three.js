// usando scope sin la palabra var dentro de la funcion
function showScope() {
  scope = 'local';
  return scope;
}

scope = 'global';
console.log(scope);
console.log(showScope());
console.log(scope);
