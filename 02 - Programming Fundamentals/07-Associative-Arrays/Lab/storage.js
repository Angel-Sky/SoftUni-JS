function storage(arr) {
    let storage = new Map();

    arr.forEach(el => {
        let line = el.split(" ");
        
        let product = line[0];
        let quantity = Number(line[1]);

        if (storage.has(product)) {
            let oldQuantity = storage.get(product);
            storage.set(product, (quantity + oldQuantity));
        } else {
            storage.set(product, quantity);
        }
    });

    let entries = Array.from(storage.entries());
    entries.forEach(el => {
        console.log(`${el[0]} => ${el[1]}`);
    });
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])