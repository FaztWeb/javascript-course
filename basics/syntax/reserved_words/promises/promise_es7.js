var isMomHappy = true;

const willGetNewPhone = new Promise(
  (resolve, reject)=>{
    if(isMomHappy){
      const phone = {
        brad:'blackberry'
      , color: 'black'
      };
      resolve(phone);
    }else{
      const reason = new Error('Mon is not happy');
      reject(reason);
    }
  }
);

async function showOff(phone){
  return new Promise(
    (resolve, reject) => {
        var message = 'Hello frined, this is my new '+phone.color+
        ' '+phone.brand;
        resolve(message);
    }
  )
}


// llamando promesa
async function askMon() {
  try{
    console.log('before asking Mon');
    let phone = await willGetNewPhone();
    let message = await showOff(phone);

    console.log(message);
    console.log('after asking mon');
  }
  catch (err){
    console.log(err.message);
  }
}

async(()=>{
  await askMon()
})();
