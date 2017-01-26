var Animal=require("./BasicClassDefinition.js");
//import util required for inheritance
var util =require("util");

//new class creation
function Dog (age) {
  //call to Animal constructor passing params
  Animal.call(this,age);
}

//tell to engine that Dog inherits from Animal
//util.inherits(nuevaclase,clasepadre);
util.inherits(Dog,Animal);

//create new instance of animal
//and 50 years old
var dogInstance=new Dog(50);
//call getOld method defined on base class
//and execute 10 times
for(i=0;i<10;i++){
  dogInstance.getOld();
}