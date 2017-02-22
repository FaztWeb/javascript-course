// is a strong type of aggregation
// each object has no independent life with out its owner
// the address object is bound to the person object
// if the person object is deleted, also the address object
// represented by a literal object
var person = {
  name: 'Fabian',
  surname: 'Jesus',
  address: {
    street: '123 Duncannon Street',
    city: 'London',
    country: 'United Kigdom'
  }
};
