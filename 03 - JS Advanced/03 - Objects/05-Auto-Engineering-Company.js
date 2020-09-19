function company(input) {
    let filledData = input.reduce((acc, data) => {
        let [brand, model, producedCars] = data.split(" | ");
        producedCars = Number(producedCars);

        if (!acc.hasOwnProperty(brand)) {
            acc[brand] = [{ model, producedCars }];
        } else {
            if (acc[brand][0].model !== model) {
                acc[brand].push({ model, producedCars })
            } else {
                acc[brand][0].producedCars += producedCars;
            }
        }

        return acc;
    }, {})

    Object.entries(filledData)
        .forEach(el => {
            console.log(el[0]);
            for (let each of el[1]) {
                console.log(`###${each.model} -> ${each.producedCars}`)
            }
        })

}

company([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'
]
)