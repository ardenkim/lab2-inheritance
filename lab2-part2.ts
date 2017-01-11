class SavingsAccount {
    private balance:number;
    private ownerName:string;
    private withdrawal:number;

    constructor(ownerName:string, initialBalance:number) {
        this.ownerName = ownerName;
        this.balance = initialBalance;
        this.withdrawal = 0;
    }

    deposit(amount:number):void {
        this.balance += amount;
    }
    withdraw(amount:number):void {
        if (this.withdrawal < 3) {
            this.balance -= amount;
        } else {
            console.log('Error: Withdrawal limit exceeded');
        }
        this.withdrawal++;
    }
    checkBalance():void {
        console.log('current owner\'s name: ${this.ownerName}');
        console.log('current balance: $${this.balance}');
    }
}