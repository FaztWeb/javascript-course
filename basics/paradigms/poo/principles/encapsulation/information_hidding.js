/*information hidding principle, */

// two reason to hidding internal details
// 1.simplify an understandable way to use an object with out need it complexity
// 2.to simplify change management

// information hidding principle enforces the design objecto to have at leats to parts:
// public part and private one
// other Object Oriented programming provides specif keywords such as
// public and private(access modifiers) to allow the hidden principle
// JS objects do not care about privacy. All the properties and methods are public
// public and private (access modifiers)
// some pattern can be used to obtain different levels of information hidding

/*Convention-based approach*/


function TheatreSeats() {
  this._seats = [];
}

TheatreSeats.prototype.placePerson = function (person) {
  this._seats.push(person);
};

TheatreSeats.prototype.showPersons = function () {
  return this._seats;
};

var theatreSeats = new TheatreSeats();
theatreSeats.placePerson({name:'Fabian',surname:'Jesus'});
theatreSeats.placePerson({name:'Isaac',surname:'Delahaye'});
console.log(theatreSeats.showPersons());

// The internal details are not really hidden and privacy is based on the developer's willingness
