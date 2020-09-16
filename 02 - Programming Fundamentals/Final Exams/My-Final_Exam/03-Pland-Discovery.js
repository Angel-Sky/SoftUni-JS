function plantDiscovery(input) {
    let n = input.shift();
    let plants = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input[i].split("<->");
        rarity = Number(rarity);
        if (!plants.hasOwnProperty(plant)) {
            plants[plant] = {rarity, rating: []};
        } else {
            plants[plant] = {rarity, rating: []};
        }
    }

    for (let line of input.slice(n)) {
        if (line !== "Exhibition") {
            let [command, properties] = line.split(": ");
            let [plant, rarity] = properties.split(" - ");
            rarity = Number(rarity);

            switch(command) {
                case "Rate":
                    if (plants.hasOwnProperty(plant)) {
                        plants[plant].rating.push(rarity);

                    } else {
                        console.log("error")
                    }
                break;

                case "Update":
                    if (plants.hasOwnProperty(plant)) {
                        plants[plant].rarity = rarity;
                    } else {
                        console.log("error")
                    }
                break;

                case "Reset":
                    if (plants.hasOwnProperty(plant)) {
                        plants[plant].rating = [];
                    } else {
                        console.log("error")
                    }
                break;

                default:
                    console.log("error")
                break;
            }
        } else {
            break; 
        }
             
    }
   
    averageRating(plants);
    console.log("Plants for the exhibition:");

    let sorted = Object.entries(plants)
        .sort((a, b) => {
            if (a[1].rarity == b[1].rarity) {
                return b[1].rating - a[1].rating;
            } else {
                return b[1].rarity - a[1].rarity;
            }
        })
        .forEach(el => {
            console.log(`- ${el[0]}; Rarity: ${el[1].rarity}; Rating: ${(el[1].rating).toFixed(2)}`)
        })

    function averageRating(obj) {
        for (let property in obj) {
            let arrOfRatings = obj[property].rating;
            if (arrOfRatings.length > 0) {
                let sum = 0;
                for (let each of arrOfRatings) {
                    sum += each;
                }
                let averageSum = sum / arrOfRatings.length;
                obj[property].rating = averageSum
            } else {
                obj[property].rating = 0;
            }
        }
    }
     
}
        
plantDiscovery([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
  ]
  
  )