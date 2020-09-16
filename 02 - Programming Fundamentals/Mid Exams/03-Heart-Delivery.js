function heartDelivery(data) {
    let neighborhood = data.shift().split("@").map(Number);
    let currentPosition = 0;
    let valentinePlaces = 0;
    for (let line of data) {
        if (line != "Love!") {
            let value = Number(line.split(" ")[1]);
            currentPosition += value;
            if (currentPosition < neighborhood.length) {
                neighborhood[currentPosition] -= 2;
            } else {
                currentPosition = 0;
                neighborhood[currentPosition] -= 2;
            }

            if (neighborhood[currentPosition] == 0) {
                console.log(`Place ${currentPosition} has Valentine's day.`);
                neighborhood[currentPosition] = -2;
                valentinePlaces++;
            } else if (neighborhood[currentPosition] < 0) {
                console.log(`Place ${currentPosition} already had Valentine's day.`);
            }

        } else {
            console.log(`Cupid's last position was ${currentPosition}.`);
            if (valentinePlaces == neighborhood.length) {
                console.log("Mission was successful.")
            } else {
                console.log(`Cupid has failed ${neighborhood.length - valentinePlaces} places.`);
            }
            break;
        }
    }
}

heartDelivery([
    '2@4@2', 'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
])