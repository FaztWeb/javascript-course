// function scope

/*
 * variable’s value is visible within the function definition where the variable is declared
 * and defined and within any functions that are nested within that function
*/

let scope = 'global';

function showScope() {
  return scope;
}

console.log(scope); //displays 'global'
console.log(showScope()); //displays 'global'
