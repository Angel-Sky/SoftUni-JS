class Kitchen {
    constructor(budget) {
        this.budget = Number(budget);
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(arrOfProducts) {
        for (let product of arrOfProducts) {
            let [productName, quantity, price] = product.split(" ");
            quantity = Number(quantity), price = Number(price);
            let neededMoney = price; //quantity * price чупи доста тестове?!?!
            if (this.budget >= neededMoney) {
                this.budget -= neededMoney;
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = quantity;
                } else {
                    this.productsInStock[productName] += quantity;
                }

                this.actionsHistory.push(`Successfully loaded ${quantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${productName}`);
            }
        }
        return this.actionsHistory.join("\n")
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = { price, products: neededProducts };
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        } else {
            return `The ${meal} is already in the our menu, try something different`; 
        }
    }

    showTheMenu() {
        let menuArr = Object.entries(this.menu);
        let result = [];
        if (menuArr.length > 0) {
            for (let line of menuArr) {
                result.push(`${line[0]} - $ ${line[1].price}`)
            }
        } else {
            return "Our menu is not ready yet, please come later..."; //Трябва да е return, иначе гърми 8 тест
        }

        return `${result.join("\n")}${"\n"}` //.trim() ?
    }

    makeTheOrder(meal) {
        //Първо проверяваме дали исканото ястие съществува в менюто
        if (this.menu.hasOwnProperty(meal)) {
            //Взимаме нужните продукти за исканото ястие
            let neededProducts = this.menu[meal].products;
            let isGootToMake = true;

            for (let line of neededProducts) {
                let [product, quantity] = line.split(" ");
                // Проверяваме дали имаме в наличност нужните продукти за приготвянето на ястието
                //if (!this.productsInStock.hasOwnProperty(product) || this.productsInStock[product] - Number(quantity) < 0) {
                if (!this.productsInStock.hasOwnProperty(product) || this.productsInStock[product] < Number(quantity) ) {
                    isGootToMake = false;
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }
            }

            //Обхождаме втори път нужните съставки, за да извадим броя на използваните продукти от склада 
            if (isGootToMake) {
                for (let line of neededProducts) {
                    let [product, quantity] = line.split(" ");
                    this.productsInStock[product] -= Number(quantity);
                    //Ако след като използваме продуктите наличността стане 0, премахваме продукта от склада
                    if (this.productsInStock[product] == 0) {
                        delete this.productsInStock[product];
                    }
                }
                //Добавяме цената от ястието към бюджета
                this.budget += this.menu[meal].price;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
            }
        } else {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
    }
}


let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 3', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.showTheMenu());
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder("frozenYogurt"))