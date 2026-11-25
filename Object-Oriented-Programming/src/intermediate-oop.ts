// 1. Static Properties & Methods

class BankAccount {
  static bankName: string = "ABC Bank";

  constructor(
    public accountHolder: string,
    public balance: number
  ) {}

  static getBankName(): string {
    return BankAccount.bankName;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    // Implement withdrawal logic
  }
}

// Practice:
// - Create multiple bank accounts.
// - Manage individual account balances.
// - Try accessing instance properties from a static method.


// 2. Getters & Setters

class User {
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(name: string, email: string, password: string) {
    this._name = name;
    this._email = email;
    this._password = password;
  }

  // Implement getters and setters.

  // Practice:
  // - Validate name and email.
  // - Password must contain at least 8 characters.
  // - Prevent invalid values using setters.
}


// 3. Interface with Classes

interface Payment {
  amount: number;

  pay(): void;
}

class BkashPayment implements Payment {
  constructor(public amount: number) {}

  pay(): void {
    console.log(`Paid ${this.amount} using Bkash`);
  }
}

class CardPayment implements Payment {
  constructor(public amount: number) {}

  pay(): void {
    console.log(`Paid ${this.amount} using Card`);
  }
}