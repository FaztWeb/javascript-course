function Cheking(amount) {

  this.balance = amount; //propery
  this.deposit    = deposit; // function
  this.widthDraw  = widthDraw; // function
  this.toString   = toString; // function
}

function deposit(amount) {
  this.balance += amount;
}

function widthDraw(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  }else if (amount > this.balance) {
    console.log('Insuficient founds');
  }
}

function toString() {
  return 'Balance ' + this.balance;
}


var account = new Cheking(500);

account.deposit(300);
console.log(account.toString());

account.widthDraw(700);
console.log(account.toString());

account.widthDraw(800);
console.log(account.toString());
