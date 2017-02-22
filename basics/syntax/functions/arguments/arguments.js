function eat(person, food) {
  return person + ' eat ' +food;
}

var result = eat('fabian','ceviche');

console.log(result);

// accesible through arguments array

function eat2() {
  console.log(arguments);
}

eat2('fabian', 'ceviche'); //{0: 'fabian', 1:'ceviche'}

function eat3() {
  return arguments[0] + ' eat ' +arguments[1];
}

eat3('fabian', 'ceviche'); // fabian eat ceviche
