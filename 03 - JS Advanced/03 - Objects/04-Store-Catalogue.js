function storeCatalogue(input) {
    let result = input
        .sort((a, b) => a.localeCompare(b))
        .reduce((catalogue, data) => {
            let [product, price] = data.split(" : ");
            let firstLetter = product[0];
    
            if (!catalogue.hasOwnProperty(firstLetter)) {
                catalogue[firstLetter] = [];
            }
    
            if (!catalogue[firstLetter].includes(product)) {
                catalogue[firstLetter].push(product, price);
            }

            return catalogue;
          
        }, {})

        Object
            .entries(result)
            .forEach(el => {
                console.log(el[0]);
                for (let i = 0; i < el[1].length; i+=2) {
                    console.log(`  ${el[1][i]}: ${el[1][i+1]}`)
                }
            });
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)