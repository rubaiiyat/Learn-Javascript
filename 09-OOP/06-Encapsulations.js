class Bank {
  #name;
  #account;
  #balance;
  constructor(name, account, balance) {
    this.#name = name;
    this.#account = account;
    this.#balance = balance;
  }

  showDetails() {
    console.log(
      `Name: ${this.#name}, Account: ${this.#account}, Balance: ${
        this.#balance
      }`
    );
  }

  addAmount(amount) {
    this.#balance = this.#balance + amount;
    this.showDetails();
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("You Have Not Enough Money");
    } else {
      this.#balance = this.#balance - amount;
      this.showDetails();
    }
  }
}

let bank = new Bank("John", 354325, 20);
bank.showDetails();

bank.addAmount(500);
bank.withdraw(500);
