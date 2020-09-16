function destinationMapper(input) {
    let pattern = /([=\/])(?<name>[A-Z][A-Za-z]{2,})\1/gi;
   
    let arrOfMaches = input.match(pattern);
    let destinations = [];
    let travelPoints = 0;
    if (arrOfMaches !== null) {
        for (let each of arrOfMaches) {
            let destination = each.substring(1, each.length-1);
            destinations.push(destination);
            travelPoints += destination.length;
        }
    }

    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`)
}

function destination(string) {
 
    let pattern = /([=\/])(?<destination>[A-Z][A-z]{2,})\1/g;
    let total = 0;
    let places = [];
    let result = pattern.exec(string)
 
    while (result !== null) {
        total += result.groups.destination.length;
        places.push(result.groups.destination)
        result = pattern.exec(string)
    }
    console.log(`Destinations: ${places.join(', ')}`)
    console.log(`Travel Points: ${total}`)
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")