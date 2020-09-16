function practiceSessions(input) {
    let roads = {};

    for (let line of input) {
        let [command, roadName, racer, newRoad] = line.split("->");

        switch (command) {
            case "Add":
                if (!roads.hasOwnProperty(roadName)) {
                    roads[roadName] = [racer];
                } else {
                    roads[roadName].push(racer);
                }
                break;

            case "Move":
                if (roads[roadName].includes(racer)) {
                    let indexOfRacer = roads[roadName].indexOf(racer);
                    roads[roadName].splice(indexOfRacer, 1);
                    roads[newRoad].push(racer);
                }
                break;

            case "Close":
                if (roads.hasOwnProperty(roadName)) {
                    delete roads[roadName];
                }
                break;

            default:
                break;
        }
    }

    console.log("Practice sessions:");
    let sorted = Object.entries(roads)
        .sort((a, b) => {
            if (a[1].length === b[1].length) {
                return a[0].localeCompare(b[0]);
            } else {
                return b[1].length - a[1].length;
            }
        })
        .forEach(el => {
            console.log(el[0]);
            for (let element of el[1]) {
                console.log(`++${element}`);
            }
        });

}

practiceSessions([
    'Add->Glencrutchery Road->Giacomo Agostini',
    'Add->Braddan->Geoff Duke',
    'Add->Peel road->Mike Hailwood',
    'Add->Glencrutchery Road->Guy Martin',
    'Move->Glencrutchery Road->Giacomo Agostini->Peel road',
    'Close->Braddan',
    'END'
]
)