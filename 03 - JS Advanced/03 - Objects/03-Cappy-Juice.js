function cappyJuice(input) {
    let bottles = {};
    let fullBottles = {};

    for (let line of input) {
        let [juice, quantity] = line.split(" => ");
        quantity = Number(quantity);

        if (bottles.hasOwnProperty(juice)) {
            bottles[juice] += quantity;
        } else {
            bottles[juice] = quantity;
        }

        if (bottles[juice] >= 1000) {
            if (fullBottles.hasOwnProperty(juice)) {
                fullBottles[juice] += quantity;
            } else {
                fullBottles[juice] = bottles[juice];
            }
        }

    }

    Object.entries(fullBottles)
        .forEach(el => {
            console.log(`${el[0]} => ${Math.floor(el[1]/1000)}`)
        })
}

cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']


)