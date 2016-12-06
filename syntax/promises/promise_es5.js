// ES5
var isMomHappy = true;

// la madre promete comprar un nuevo telefono
// Promise
var willGetNewPhone = new Promise(
  function (resolve, reject) {
    if(isMomHappy){
      var phone = {
        brand: 'Sansumg',
        color: 'black'
      };
      resolve(phone);
    }else{
      var reason = new Error('mom is not happy');
      reject(reason);
    }
  }
)

// segunda promesa, el niño promete a su amigo,mostrarle el telefono cuando su mama lo compre
// es este metodo no se ha llamado un reject
// var showOff = function (phone){
//   return new Promise(
//     function(resolve, reject){
//       var message = 'Hey friend, I have a new ' +
//       phone.color +' ' +phone.brand+ 'brand.';
//       resolve(message);
//     }
//   );
// }
// resumido a
var showOff = function (phone) {
  var message = 'Hey friend, I have a new ' +
  phone.color + ' ' + phone.brand + ' brand.';

  return Promise.resolve(message);
}


// el niño ejecuta la promesa
// llamdo la promesa
var askMom = function() {
  willGetNewPhone
    .then(showOff)
    .then(function(fulfilled) {
      // obteniste un nuevo telefono
      console.log(fulfilled);
    })
    .catch(function(error) {
      // mama no lo compró
      console.log(error.message);
      // mon is not happy
    })
}

askMom();
