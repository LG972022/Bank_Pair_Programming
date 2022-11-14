

let bankAccount = class {
    
  constructor(customerName, accountNumber, balance) {
    this.customerName = customerName;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  get Details() {
    return [this.customerName, this.accountNumber, this.balance];
  }

  Withdraw(amount){
    this.balance = this.balance - amount;
    return ("you have taken " + amount + "and you have " + this.balance + " left in the account")
  }

  Deposit(amount){
      this.balance = this.balance + amount;
      return ("you have deposited " + amount + "and you have " + this.balance + " left in the account")
  }
};

const BA1 = new bankAccount("David", 1234, 50000);


// console.log(BA1.Details);
console.log(BA1.Deposit(300));
