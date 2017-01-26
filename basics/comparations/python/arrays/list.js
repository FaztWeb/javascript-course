
function range(init, end) {
  var numbers = '';

  if (!end) {
    end = init;
    init = 0;
  }
  for(var i=init; i < end; ++i){
    if (i !== end && i !== init) {
      numbers += ' ,';
    }
    numbers += i;
  }
  return numbers;
}

function list(params) {
  return (new Array(params));
}

console.log(range(1,10));
console.log(range(10));
console.log(range(1));
console.log(list(range(10,20)));
