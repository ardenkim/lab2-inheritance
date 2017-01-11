class CheckingsAccount {
    private balance:number;
    private ownerName:string;

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

let checkingsAccount = new CheckingsAccount("Arden", 100);
checkingsAccount.checkBalance();
checkingsAccount.deposit(150);
checkingsAccount.checkBalance();
checkingsAccount.withdraw(200);
checkingsAccount.checkBalance();
