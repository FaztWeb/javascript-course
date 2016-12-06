var myArray=["apple","samsung","nokia","blackberry","lg","acer","huawei","xiami","miuzu","alcatel"];

console.log("/-------------Array.filter function------------");
//filtro los array mediante Array.filter y buscandolos por indexof
var myNewArray=myArray.filter(function(arrayitem) {
  if (arrayitem.indexOf("a")==0) {
    return true;
  };
  return false;
});
console.log(myNewArray);