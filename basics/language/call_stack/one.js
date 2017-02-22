function greet(who) {
  setTimeout(function () {
    console.log('Hello' ,who);
  }, 1000);
}
greet('Harry');
console.log('bye');
