var myArray=[1,2,3,4,5];

console.log("/-------------Array.map function------------");

var TwoTimes=function(item) {
  return item*2;
}

var SegundoArrayProcesado=myArray.map(TwoTimes);
console.log(SegundoArrayProcesado);