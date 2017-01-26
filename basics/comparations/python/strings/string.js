// 'hola' * 5

var string = 'hola';
var number = 5;

function multiply_string(string, number) {
  var result = '';
  for(var i =0; i<number;i++){
    result += string;
  }
  return result;
}

console.log(multiply_string('hola', 5));
