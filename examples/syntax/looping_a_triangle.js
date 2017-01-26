
function drawTriangle(characterLength, caracter) {
  var result = '';
  for(let i = 0; i < characterLength; i++){
    result += caracter;
    console.log(result);
  }
}

drawTriangle(7, '#');
drawTriangle(7, '*');
