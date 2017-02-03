function Person() {
  this.name = '';
  this.surname = '';
}

function Programmer() {
  this.knowLanguage = '';
}

function writeFullName(p) {
  console.log(p.name + ' ' + p.surname);
}

Programmer.prototype = new Person();

var a = new Person();
a.name = 'Fabian';
a.surname = 'Jesus';

var b = new Programmer();
b.name = 'Isaac';
b.surname = 'Delahaye';
b.knowLanguage = 'JavaScript';

writeFullName(a);
writeFullName(b);
