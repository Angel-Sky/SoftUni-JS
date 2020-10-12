function solution() {
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2, order: ['carbohydrate', 'flavour'] },
        lemonade: { carbohydrate: 10, flavour: 20, order: ['carbohydrate', 'flavour'] },
        burger: { carbohydrate: 5, fat: 7, flavour: 3, order: ['carbohydrate', 'fat', 'flavour'] },
        eggs: { protein: 5, fat: 1, flavour: 1, order: ['protein', 'fat', 'flavour'] },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10, order: ['protein', 'carbohydrate', 'fat', 'flavour'] }
    }

    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const robotOperations = {
        restock,
        prepare,
        report
    };

    function restock(microelement, quantity) {
        ingredients[microelement] += quantity;
        return "Success";
    }

    function prepare(recipe, quantity) {
        let neededIngredients = Object.assign({}, recipes[recipe]);  //правим си копие на рецептата
        neededIngredients.order.forEach(el => neededIngredients[el] *= quantity) //приравняваме съставките към нужния брой за n порции

        for (let microelement of neededIngredients.order) { //проверяваме дали всички съставки са налични
            if (ingredients[microelement] < neededIngredients[microelement]) {
                return `Error: not enough ${microelement} in stock`;
            }
        }
        //използваме вече наличните съставки 
        neededIngredients.order.forEach(microelement => ingredients[microelement] -= neededIngredients[microelement])
        
        /*Използваме два цикъла един след друг, за да можем чрез първия да проверим дали всички нужни съставки са налични
        и чак тогава, чрез втория, започваме да изваждаме от тях, за да приготвим ястието. 
        В противен случаи ако дадена съставка е налична, директно я изваждаме и това чупи програмата. */

        return 'Success';
    }

    function report() {
        let output = [];
        Object.keys(ingredients).forEach(ingredient => {
            output.push(`${ingredient}=${ingredients[ingredient]}`)
        })

        return output.join(" ")
    }

    function manager(input) {
        let [operation, argument, quantity] = input.split(" ");
        return robotOperations[operation](argument, Number(quantity));
    }

    return manager;
}

let manager = solution();
// manager("prepare turkey 1");
// manager("restock protein 10")

manager("prepare turkey 1")
manager("restock protein 10");
manager("prepare turkey 1");
manager("restock carbohydrate 10");
manager("prepare turkey 1");
manager("restock fat 10");
manager("prepare turkey 1");
manager("restock flavour 10");
manager("prepare turkey 1");
manager("report");

