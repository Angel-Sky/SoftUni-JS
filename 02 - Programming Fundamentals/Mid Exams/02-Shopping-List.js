function shoppingList(data) {
    let initialList = data.shift().split("!");
    
    for (let line of data) {
        if (line != "Go Shopping!") {
            let [command, item, newItem] = line.split(" ");
            if (command == "Urgent" && !initialList.includes(item)) {
                initialList.splice(0, 0, item);
            } else if (command == "Unnecessary" && initialList.includes(item)) {
                let indexOfItem = initialList.indexOf(item);
                initialList.splice(indexOfItem, 1);
            } else if (command == "Correct" && initialList.includes(item)) {
                let indexOfItem = initialList.indexOf(item);
                initialList.splice(indexOfItem, 1, newItem);
            } else if (command == "Rearrange" && initialList.includes(item)) {
                let indexOfItem = initialList.indexOf(item);
                let newItem = initialList.splice(indexOfItem, 1);
                initialList.push(newItem);
            }
        } else {
            console.log(initialList.join(", "))
        }
    }    
}

shoppingList([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
  ]
  
  )