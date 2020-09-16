function stoneProvision(stock, ordered) {
    let combinedArray = [stock + "," + ordered];
    let store = combinedArray[0].split(",");
    let shop = {}
    
    for (let i = 0; i < store.length; i+=2) {
        let product = store[i];
        let quantity = Number(store[i+1]);

        if (!shop.hasOwnProperty(product)) {
            shop[product] = quantity;
        } else {
            shop[product] += quantity;
        }
    }

    for (const product in shop) {
        console.log(`${product} -> ${shop[product]}`)
    }
    
}

stoneProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'],

    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'])