function showScope() {
  var scope = 'local';
  return scope;
}

let scope = 'global';

console.log(scope); //displays 'global'
console.log(showScope()); // displays 'local'
