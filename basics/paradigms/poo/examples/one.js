function cuentaBanco(monto) {
  this.balance = monto;//property
  this.depositar = depositar;//function
  this.retirar = retirar;//function
  this.toString = toString;//function
}

function depositar( monto ) {
  this.balance += monto;
}
function retirar(monto) {
  if (monto <= this.balance) {
    this.balance -= monto;
  }
  if (monto > this.balance) {
    console.log('fondos insuficientes');
  }
}
function toString() {
  return "Balance: " + this.balance;
}

var cuenta = new cuentaBanco(400);
console.log(cuenta.toString());

cuenta.depositar(300);
console.log(cuenta.toString());

cuenta.retirar(100);
console.log(cuenta.toString());
