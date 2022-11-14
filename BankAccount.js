console.log("David");

let bankAccount = class {
  constructor(customerName, accountNumber, balance) {
    this.customerName = customerName;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  get Details() {
    return [this.customerName, this.accountNumber, this.balance];
  }
};

const BA1 = new bankAccount("David", 1234, 50000);

console.log(BA1.Details);
