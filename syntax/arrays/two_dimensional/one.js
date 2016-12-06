// problema de este two dimensional array es que agrega un elemento udefined
var twod = [];

for(var i =0; i<5; i++){
  twod[i] = [];
}

console.log(twod);
twod[1][1]='one';

console.log(twod);

// JavaScript:The Good Parts (O’Reilly, p. 64)

Array.matrix = function (numrows, numcols, initial) {
  var arr = [];
  for(var i=0; i<numrows; ++i){
    var colums=[];
    for(var j=0; j<numcols;++j){
      colums[j] = initial;
    }
    arr[i] = colums;
  }
  return arr;
}

var nums = Array.matrix(5,5,0);

console.log(nums);
console.log(nums[1][1]);

var names = Array.matrix(3,3,"");
names[1][2] = "joe"
console.log(names);
console.log(names[1][2]);

// incializacion en linea
var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
console.log(grades[1][1]);
