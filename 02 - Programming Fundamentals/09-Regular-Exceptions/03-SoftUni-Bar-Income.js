function softuniBarIncome(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^.%$|]*<(?<product>\w+)>[^.%$|]*\|(?<quantity>\d+)\|[^\d.%$|]*(?<price>\d+\.?\d+)\$/;
    let totalIncome = 0;

    for (let line of input) {
        let match = pattern.exec(line);

        if (match) {
            let name = match.groups.name;
            let product = match.groups.product;
            let income = match.groups.quantity * match.groups.price;
           
            console.log(`${name}: ${product} - ${(income.toFixed(2))}`);
            totalIncome += income;
        }

    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}

softuniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
  ]
  
  )