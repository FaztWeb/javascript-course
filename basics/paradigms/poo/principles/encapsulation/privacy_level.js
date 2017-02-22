// , the prototype's methods cannot
// access the constructor's closure

function ThreatSeats() {
  var seats = [];
}

ThreatSeats.prototype.placePerson = function (person) {
  seats.push(person);
};

var threadSeats = new ThreatSeats();
threadSeats.placePerson({name: 'Fabian', surname: 'Napa'});

// This led us to apply a sort of classification of an
// object's members in order to determine how
// to implement the information hiding princip

// private
// public
// privileged

function ThreadSeats() {
  var seats = [];

  this.placePerson = function (person) {
    seats.push(person);
  };

  this.countOcupiedSeats = function () {
    return seats.lenght;
  };

  this.maxSize = 10;
}

ThreadSeats.prototype.isSoldOut = function () {
  return this.countOcupiedSeats() >= this.maxSize;
};
