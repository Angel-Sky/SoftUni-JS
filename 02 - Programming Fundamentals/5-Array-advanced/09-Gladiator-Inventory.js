function gladiatorInventory(arr) {
    let currentBag = arr[0].split(" ");

    for (let i = 1; i < arr.length; i++) {
        let row = arr[i].split(" ");
        let command = row[0];
        let item = row[1];

        if (command == "Buy") {
            if (!(currentBag.includes(item))) {
                currentBag.push(item);
            }
        } else if (command == "Trash") {
            if ((currentBag.includes(item))) {
                let index = currentBag.indexOf(item);
                currentBag.splice(index, 1);
            }   
        } else if (command == "Repair") {
            if ((currentBag.includes(item))) {
                let index = currentBag.indexOf(item);
                let repaird = currentBag.splice(index, 1);
                currentBag.push(repaird[0]);
            }
        } else if (command == "Upgrade") {
            let searchedItemRow = item.split("-");
            let searchedItem = searchedItemRow[0];
            if ((currentBag.includes(searchedItem))) {
                let index = currentBag.indexOf(searchedItem);
                let upragded = `${searchedItem}:${searchedItemRow[1]}`
                currentBag.splice(index+1, 0, upragded)
            }
        }
    }

    console.log(currentBag.join(" "));

}

gladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]
)