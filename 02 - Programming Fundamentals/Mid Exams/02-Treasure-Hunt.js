function tresureHunt(input) {
    let items = input.shift().split("|");

    for (let line of input) {
        let collection = line.split(" ");

        if (collection[0] == "Yohoho!") {
            break;
        } else {
            switch (collection[0]) {
                case "Loot":
                    collection.shift();
                    for (let i = 0; i < collection.length; i++) {
                        if (!items.includes(collection[i])) {
                            items.splice(0, 0, collection[i]);
                        }
                    }
                    break;
                case "Drop":
                    let index = +collection[1];
                    if (index >= 0 && index < items.length) {
                        let item = items[index];
                        items.splice(index, 1);
                        items.push(item);
                    }
                    break;
                case "Steal":
                    let count = +collection[1];
                    let stolenItems = items.splice(-count, count);
                    console.log(stolenItems.join(', '));
                    break;
            }
        } 
    }
   
    if (items.length > 0) {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].length;
        }
        let average = sum / items.length;
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
        
    } else {
        console.log("Failed treasure hunt."); 
    }
}

tresureHunt([
    'Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 6',
    'Yohoho!'
])