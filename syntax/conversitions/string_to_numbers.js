var string = "33.3";
var noNumber = 'MyName';

var number = Number(string);
var string = Number(noNumber);

console.log(number);
console.log(string);

// parseInt - allows to use a radix, the base of the convertion
const a = parseInt("16 volts", 10);
const b = parseInt("3a", 16); //
const c = parseFloat('15 kph');

console.log(a);
console.log(b);
console.log(c);

// milliseconds since midnight, January 1, 1970, UTC
const d = new Date();
const ts = d.valueOf();
console.log(ts);

// boolean convertion
const bool = true;
const n = bool ? 1 : 0;
