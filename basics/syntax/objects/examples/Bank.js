class Cheking {
  constructor(amount) {
    this.balance = amount;
  }

  deposit(amount) {
    this.balance += amount;
  }

  widthDraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }else if (amount > this.balance) {
      console.log('Insuficient founds');
    }
  }

  toString() {
    return 'Balance ' + this.balance;
  }
}



var account = new Cheking(500);

account.deposit(300);
console.log(account.toString());

account.widthDraw(700);
console.log(account.toString());

account.widthDraw(800);
console.log(account.toString());
