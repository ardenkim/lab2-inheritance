class SavingsAccount {
    private balance:number;
    private ownerName:string;
    private withdrawal:number;

    constructor(ownerName:string, initialBalance:number) {
        this.ownerName = ownerName;
        this.balance = initialBalance;
        this.withdrawal = 0;
    }

    public deposit(amount:number):void {
        this.balance += amount;
    }
    public withdraw(amount:number):void {
        if (this.withdrawal < 3) {
            this.balance -= amount;
            this.withdrawal++;
        } else {
            console.log('Error: Withdrawal limit exceeded');
        }
    }
    public checkBalance():void {
        console.log('current owner\'s name: ${this.ownerName}');
        console.log('current balance: $${this.balance}');
    }
}