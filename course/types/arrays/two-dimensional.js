// problema de este two dimensional array es que agrega un elemento udefined
var twod = [];

for(var i =0; i < 5; i++){
  twod[i] = [];
}

console.log(twod);
twod[1][1]='one';

console.log(twod);

// JavaScript:The Good Parts (O’Reilly, p. 64)
Array.matrix = function (numrows, numcols, initial) {
  var arr = [];
  for(var i=0; i < numrows; ++i){
    var colums=[];
    for(var j=0; j < numcols;++j){
      colums[j] = initial;
    }
    arr[i] = colums;
  }
  return arr;
}

var nums = Array.matrix(5,5,0);
console.log(nums[1][1]);

var names = Array.matrix(3,3,"");
names[1][2] = "joe"
console.log(names);
console.log(names[1][2]);

// PROCESSING TWO DIMENSIONAL ARRAY ELEMENTS
var grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89]
];

var total = 0;
var average = 0.0;

for(var row = 0; row < grades.length; ++row){
  for(var col = 0; col < grades[row].length; ++col){
    total += grades[row][col];
  }
  average = total/grades[row].length;
  console.log("studend "+parseInt(row + 1)+" average: "+average.toFixed(2));
  total = 0;
  average = 0.0;
}

// a jagged arrays es un array done las filas tienen diferentes numeros de elementos
var grades = [[89, 77],[76, 82, 81],[91, 94, 89, 99]];

var total = 0;
var average = 0.0;
for (var row =0;row < grades.length; ++row){
  for(var col=0;col < grades[row].length;++col){
    total += grades[row][col];
  }
  average = total / grades[row].length;
  console.log('Student: ',parseInt(row + 1), "average: ",average.toFixed(2));
  total = 0;
  average = 0.0;
}
