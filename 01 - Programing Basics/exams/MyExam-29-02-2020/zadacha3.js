function computerRoom(input){
    let month = input.shift();
    let hours = +input.shift();
    let group = +input.shift();
    let time = input.shift();
    
    let pricePerPerson = 0, totalSum = 0;
    switch (month) {
        case "march":
        case "april":
        case "may":
            if (time == "day") {
                pricePerPerson = 10.50;
            } else {
                pricePerPerson = 8.40;
            }
            break;

        case "june":
        case "july":
        case "august":
            if (time == "day") {
                pricePerPerson = 12.60;
            } else {
                pricePerPerson = 10.20;
            }
            break;
    }

    if (group >= 4) {
        pricePerPerson *= 0.9;
    }

    if (hours >= 5) {
        pricePerPerson *= 0.5;
    }

    totalSum = pricePerPerson * hours * group;
    console.log(`Price per person for one hour: ${pricePerPerson.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalSum.toFixed(2)}`);

}

computerRoom(['may', '6', '5', 'day']
)