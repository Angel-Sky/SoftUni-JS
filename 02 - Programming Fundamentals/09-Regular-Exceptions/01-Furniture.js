function furniture(input) {
    let pattern = />{2}(?<furnitureName>\w+)<{2}(?<price>\d+\.?\d*)!(?<quantity>\d+)/;
    let totalMoneySpent = 0;
    console.log("Bought furniture:");
    for (let line of input) {
        let match = pattern.exec(line);

        if (match) {
            let name = match.groups.furnitureName;
            let price = match.groups.price;
            let quantity = match.groups.quantity;

            totalMoneySpent += price * quantity; 
            console.log(name);
        }
        
    }

    console.log(`Total money spend: `+ totalMoneySpent.toFixed(2))
    
}

furniture([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]
)