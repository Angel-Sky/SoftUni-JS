function pirats(input) {
    let towns = {};
    let arrOfTowns = input.slice(0, (input.indexOf("Sail")));
    let data = input.slice((input.indexOf("Sail")+1));

    for (let line of arrOfTowns) {
        let [town, population, gold] = line.split("||");
        population = Number(population), gold = Number(gold)
        if (!towns.hasOwnProperty(town)) {
            towns[town] = { population, gold };
        } else {
            towns[town].population += population;
            towns[town].gold += gold;
        }
    }

    for (let line of data) {
        if (line != "End") {
            let [command, city, firstArg, secArg] = line.split("=>");
            firstArg = Number(firstArg), secArg = Number(secArg);

            switch(command) {
                case "Plunder":
                    console.log(`${city} plundered! ${secArg} gold stolen, ${firstArg} citizens killed.`);
                    towns[city].population -= firstArg;
                    towns[city].gold -= secArg;

                    if (towns[city].population <= 0 || towns[city].gold <= 0) {
                        delete towns[city];
                        console.log(`${city} has been wiped off the map!`)
                    }
                break;

                case "Prosper":
                    if (firstArg < 0) {
                        console.log("Gold added cannot be a negative number!");
                    } else {
                        towns[city].gold += firstArg;
                        console.log(`${firstArg} gold added to the city treasury. ${city} now has ${towns[city].gold} gold.`);
                    }
                break;
            }
        } else {
            let entriesOfTowns = Object.entries(towns)
                .sort((a, b) => {
                    if (b[1].gold == a[1].gold) {
                        return a[0].localeCompare(b[0]);
                    } else {
                        return b[1].gold - a[1].gold;
                    }
                });
            if (entriesOfTowns.length > 0) {
                console.log(`Ahoy, Captain! There are ${entriesOfTowns.length} wealthy settlements to go to:`);
                entriesOfTowns.forEach(el => {
                    console.log(`${el[0]} -> Population: ${el[1].population} citizens, Gold: ${el[1].gold} kg`);
                })
            } else {
                console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
            }
            
        }
    }
}

pirats([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
]
)