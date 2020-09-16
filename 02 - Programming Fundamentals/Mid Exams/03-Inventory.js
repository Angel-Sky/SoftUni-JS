function inventory(collection) {
    let inventory = collection.shift().split(", ");

    for (let line of collection) {
        let commandAndItem = line.split(" - ");
        let command = commandAndItem[0];
        let item = commandAndItem[1];

        if (command == "Collect") {
            if (!(inventory.includes(item))) {
                inventory.push(item);
            }
        } else if (command == "Drop") {
            if (inventory.includes(item)) {
                let indexOfSearched = inventory.indexOf(item);
                inventory.splice(indexOfSearched, 1);
            }   
        } else if (command == "Combine Items") {
            let oldAndNewItems = item.split(":");
            if (inventory.includes(oldAndNewItems[0])) {
                let indexOfSearched = inventory.indexOf(oldAndNewItems[0]);
                inventory.splice(indexOfSearched+1, 0, oldAndNewItems[1])
            }
        } else if (command == "Renew") {
            if (inventory.includes(item)) {
                let indexOfSearched = inventory.indexOf(item);
                inventory.splice(indexOfSearched, 1);
                inventory.push(item);
            }
        
        } else if (command == "Craft!") {
            console.log(inventory.join(", "));
        }
    }
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])