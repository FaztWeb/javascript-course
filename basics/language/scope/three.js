// usando scope sin la palabra var dentro de la funcion, la
// the variable automatically has a global scope

function showScope() {
  scope = 'local';
  return scope;
}

scope = 'global';

console.log(scope); //displays 'global'
console.log(showScope()); //displays 'local'
console.log(scope); //displays 'local'
