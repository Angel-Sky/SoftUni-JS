function solve(input) {
    let collection = {};

    for (let line of input) {
        let [command, store, items] = line.split("->");

        if (command == "Add"){
            if (!collection.hasOwnProperty(store)) {
                collection[store] = [];
                if (items !== undefined && items.includes(",")) {
                    items = items.split(",")
        
                    for (let item of items) {
                        collection[store].push(item);
                    }
                } else {
                    collection[store].push(items);
                }
            } else {
                if (items !== undefined && items.includes(",")) {
                    items = items.split(",")
        
                    for (let item of items) {
                        collection[store].push(item);
                    }
                } else {
                    collection[store].push(items);
                }
            }
        } else if (command == "Remove") {
            if (collection.hasOwnProperty(store)) {
                delete collection[store];
            }
        } else {
            console.log("Stores list:")
            let sorted = Object.entries(collection)
                .sort((a, b) => {
                    if (a[1].length === b[1].length) {
                        return b[0].localeCompare(a[0]);
                    } else {
                        return b[1].length - a[1].length;
                    }
                })
                .forEach(el => {
                    console.log(el[0]);
                
                    for (let element of el[1]){
                        console.log(`<<${element}>>`);            
                    }
                  //  console.log(`<<${el[1].join(">>\n<<")}>>`) 
                });
                
        }
    }
}

solve([
    'Add->PeakSports->Map,Navigation,Compass',
    'Add->Paragon->Sunscreen',
    'Add->Groceries->Dried-fruit,Nuts',
    'Add->Groceries->Nuts',
    'Add->Paragon->Tent',
    'Remove->Paragon',
    'Add->Pharmacy->Pain-killers',
    'END'
  ]
  )