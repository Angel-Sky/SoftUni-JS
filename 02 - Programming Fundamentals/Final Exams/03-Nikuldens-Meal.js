function meal(input) {
    let guests = {};
    let unlikeMeals = 0;

    for (let line of input) {
        if (line != "Stop") {
            let [command, name, meal] = line.split("-");

            if (command == "Like") {
                if (!guests.hasOwnProperty(name)) {
                    guests[name] = [meal];
                } else {
                    if (!guests[name].includes(meal)) {
                        guests[name].push(meal);
                    }
                }
            } else {
                if (guests.hasOwnProperty(name)) {
                    if (guests[name].includes(meal)) {
                        console.log(`${name} doesn't like the ${meal}.`);
                        let indexOfMeal = guests[name].indexOf(meal);
                        guests[name].splice(indexOfMeal, 1);
                        unlikeMeals++;
                    } else {
                        console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                    }
                } else {
                    console.log(`${name} is not at the party.`);
                }
            }
        }
    }

    let sorted = Object.entries(guests)
        .sort((a, b) => {
            if (a[1].length === b[1].length) {
                return a[0].localeCompare(b[0]); 
            } else {
                return b[1].length - a[1].length;
            }
        })
        .forEach(el => {
            console.log(`${el[0]}: ${el[1].join(", ")}`);
        })
    
    console.log(`Unliked meals: ${unlikeMeals}`);

}

meal([

    'Like-Misho-salad',
    'Like-Pena-dessert',
    'Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Ani-shrimps',
    'Like-Ani-soup',
    'Stop'
  ]
  )

// meal([
//     'Like-Krisi-shrimps',
//     'Like-Krisi-soup',
//     'Like-Misho-salad',
//     'Like-Pena-dessert',
//     'Like-Krisi-shrimps',
//     'Unlike-Vili-carp',
//     'Unlike-Krisi-salad',
//     'Unlike-Krisi-shrimps',
//     'Stop'
//   ])