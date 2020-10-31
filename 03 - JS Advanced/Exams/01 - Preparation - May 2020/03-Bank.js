class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        const existingCustomer = this.allCustomers.find(x => x.personalId === customer.personalId);

        if (existingCustomer !== undefined) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        } else {
            customer.totalMoney = 0;
            customer.transactions = [];
            this.allCustomers.push(customer);
            return customer;
        }
    }

    depositMoney(personalId, amount) {
        const customer = this._getCustomer(personalId);

        customer.totalMoney += amount;
        customer.transactions.unshift(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        const customer = this._getCustomer(personalId);

        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
        } else {
            customer.totalMoney -= amount;
            customer.transactions.unshift(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
            return `${customer.totalMoney}$`
        }

    }

    customerInfo(personalId) {
        const customer = this._getCustomer(personalId);

        return [
            `Bank name: ${this._bankName}`,
            `Customer name: ${customer.firstName} ${customer.lastName}`,
            `Customer ID: ${customer.personalId}`,
            `Total Money: ${customer.totalMoney}$`,
            `Transactions:`
        ].concat(customer.transactions).join("\n");

    }

    _getCustomer(personalId) {
        const customer = this.allCustomers.find(x => x.personalId === personalId);
        if (customer === undefined) {
            throw new Error(`We have no customer with this ID!`);
        }
        return customer;
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));