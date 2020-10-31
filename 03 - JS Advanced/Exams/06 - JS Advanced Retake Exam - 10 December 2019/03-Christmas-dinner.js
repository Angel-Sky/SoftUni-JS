class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (Number(value) < 0) {
            throw new Error("The budget cannot be a negative number");
        } else {
            this._budget = value;
        }
    }

    shopping(product) {
        const [productName, price] = product;

        if (Number(price) > this._budget) {
            throw new Error("Not enough money to buy this product");
        } else {
            this.products.push(productName);
            this.budget -= Number(price);
            return `You have successfully bought ${productName}!`
        }
    }

    recipes(recipe) {
        const {recipeName, productsList} = recipe;
        productsList.forEach(product => {
            if ((this.products.find(x => x == product)) == undefined) {
                throw new Error("We do not have this product");
            }
        });

        this.dishes.push(recipe);
        return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        let recipe = this.dishes.find(x => x.recipeName == dish);
        if (recipe == undefined) {
            throw new Error("We do not have this dish");
        } else if(this.guests.hasOwnProperty(name)) {
            throw new Error("This guest has already been invited");
        } else {
            this.guests[name] = recipe;
            return `You have successfully invited ${name}!`;
        }
    }

    showAttendance() {
        let result = [];
        Object.entries(this.guests).forEach(line => {
            result.push(`${line[0]} will eat ${line[1].recipeName}, which consists of ${line[1].productsList.join(", ")}`);
        })
        return result.join("\n").trim();
    }


}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

