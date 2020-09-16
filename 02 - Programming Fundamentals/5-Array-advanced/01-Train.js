function train(array) {
    let wagons = array[0].split(" ").map(Number);
    let maxCapacity = Number(array[1]);
    let commands = array.slice(2);

    for (let currentCommand of commands) {

        if (currentCommand.includes("Add")) {
            let value = currentCommand.split(" ").map(Number);
            wagons.push(value[1]);

        } else {
            for (let i = 0; i < wagons.length; i++) {
                let currentPassangers = wagons[i];
                let passangersToAdd = Number(currentCommand);

                if (passangersToAdd + currentPassangers <= maxCapacity) {

                    let newPassangers = passangersToAdd + currentPassangers;
                    wagons.splice(i, 1, newPassangers);
                    break;
                } 
            }  
        }
    }
    console.log(wagons.join(" "));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])