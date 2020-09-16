function houseParty(arr) {
    let finalGuests = [];

    for (let i = 0; i < arr.length; i++) {
        let currentLine = arr[i];
        let currentName = (currentLine.split(" "))[0];
        if (currentLine.includes("not")) {
            if (finalGuests.includes(currentName)) {
                delete finalGuests[finalGuests.indexOf(currentName)];
            } else {
                console.log(`${currentName} is not in the list!`)
            }  
        } else {
            if (finalGuests.includes(currentName)) { 
                console.log(`${currentName} is already in the list!`);
            } else {
                finalGuests.push(currentName);
            }
        }
    }
    console.log(finalGuests.join("\n"))

}

houseParty(
    ['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
)