function needForSpeed(input) {
    let carsCount = +input[0];
    let arrOfCars = input.slice(1, carsCount + 1);
    let data = input.slice(carsCount + 1);
    let cars = {};

    for (let line of arrOfCars) {
        let [car, mileage, fuel] = line.split("|");
        mileage = Number(mileage), fuel = Number(fuel);
        cars[car] = { mileage, fuel }
    }

    for (let line of data) {
        if (line != "Stop") {
            let [command, carName, argument, fuel] = line.split(" : ");
            argument = Number(argument), fuel = Number(fuel);

            switch (command) {
                case "Drive":
                    if (cars[carName].fuel >= fuel) {
                        cars[carName].mileage += argument; //argument -> distance
                        cars[carName].fuel -= fuel;
                        console.log(`${carName} driven for ${argument} kilometers. ${fuel} liters of fuel consumed.`);

                        if (cars[carName].mileage >= 100000) {
                            console.log(`Time to sell the ${carName}!`);
                            delete cars[carName];
                        }
                    } else {
                        console.log("Not enough fuel to make that ride");
                    }
                    break;

                case "Refuel":
                    if ((cars[carName].fuel + argument) < 75) {
                        cars[carName].fuel += argument;
                        console.log(`${carName} refueled with ${argument} liters`);
                    } else {
                        let difference = (cars[carName].fuel + argument) - 75;
                        cars[carName].fuel = 75;
                        console.log(`${carName} refueled with ${argument - difference} liters`)
                    }
                    break;

                case "Revert":
                    if (cars[carName].mileage - argument < 10000) {
                        cars[carName].mileage = 10000;
                    } else {
                        cars[carName].mileage -= argument;
                        console.log(`${carName} mileage decreased by ${argument} kilometers`);
                    }
                    break;
            }
        } else {
            Object.entries(cars)
                .sort((a, b) => {
                    if (b[1].mileage == a[1].mileage) {
                        return a[0].localeCompare(b[0]);
                    } else {
                        return b[1].mileage - a[1].mileage;
                    }
                })
                .forEach(el => {
                    console.log(`${el[0]} -> Mileage: ${el[1].mileage} kms, Fuel in the tank: ${el[1].fuel} lt.`)
                });
        }

    }

}

// needForSpeed([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]
// )

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  )