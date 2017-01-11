class Account {
    balance:number;
    ownerName:string;

    constructor(ownerName:string, initialBalance:number) {
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }
    deposit(amount:number):void {
        this.balance += amount;
    }
    withdraw(amount:number):void {
        this.balance -= amount;
    }
    checkBalance():void {
        console.log('current owner\'s name: ${this.ownerName}');
        console.log('current balance: $${this.balance}');
    }

}

class CheckingsAccount extends Account {
    constructor(ownerName:string, initialBalance:number) {
        super(ownerName, initialBalance);
    }
}

class SavingsAccount extends Account{
    private withdrawal:number;

    constructor(ownerName:string, initialBalance:number) {
        super(ownerName, initialBalance);
        this.withdrawal = 0;
    }

    withdraw(amount:number):void {
        if (this.withdrawal < 3) {
            this.balance -= amount;
        } else {
            console.log('Error: Withdrawal limit exceeded');
        }
        this.withdrawal++;
    }
}