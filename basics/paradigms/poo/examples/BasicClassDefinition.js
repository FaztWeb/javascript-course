//creacion de clase animal

function Animal (age) {
  this.hasEnergy=true;
  this.hasAge=true;
  this.Age=age;
}
//agrego metodo hacerse viejo a la clase 
Animal.prototype.getOld=function() {
  this.Age++;
  console.log(this.Age);
}
//exporto el modulo
module.exports=Animal;
