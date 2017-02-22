// es6
const isMomHappy = true;

// promise
const willIGetNewPhone = new Promise(
  (resolve, reject) => {
    if(isMomHappy){
      const phone = {
        brand:'sansung',
        color: 'black'
      };
      resolve(phone);
    }else{
      const reason = new Error('mom is not happy');
      reject(reason);
    }
  }
);

const showOff = function(phone) {
  const message = 'hello friend, I have a new'+
  phone.brand +' '+phone.color;
  return Promise.resolve(message);
}

const askMom = function () {
  willIGetNewPhone
    .then(showOff)
    .then(fullfilled => console.log(fullfilled))
    .catch(err => console.log(err.message))
}

askMom();
