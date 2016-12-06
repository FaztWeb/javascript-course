// ejecuta mientras la condicion sea verad
var number = 1;
var sum = 0;

while (number < 11) {
  sum += number;
  ++number;
}
console.log(sum);


// reverse words

var reverse = function (word) {
  var longitud = word.length - 1;
  var reverse = '';
  while(longitud > -1){
    reverse += word[longitud];
    longitud--;
  }
  return reverse;
};

var palabraAlReves = reverse('hola');
console.log(palabraAlReves);
