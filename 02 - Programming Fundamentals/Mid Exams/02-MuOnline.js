function muOnline(input) {
    let arrayOfRooms = input.split("|");
    let health = 100;
    let coins = 0, totalRooms = 1;
    let isAllive = true;

    for (let room of arrayOfRooms) {
        let commandAndPoints = room.split(' ');
        let command = commandAndPoints[0];
        let points = +commandAndPoints[1]
       
        if(isAllive) {
            if (command == "potion") {
                health += points;
                if (health > 100) {
                    health -= points;
                    console.log(`You healed for ${100 - health} hp.`)
                    health = 100;
                } else {
                    console.log(`You healed for ${points} hp.`);
                }
                console.log(`Current health: ${health} hp.`) 
            } else if (command == "chest") {
                console.log(`You found ${points} bitcoins.`);
                coins += points;
            } else {
                health -= points;
                if (health <= 0) {
                    isAllive = false;
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${totalRooms}`)
                    break;
                } else {
                    console.log(`You slayed ${command}.`)
                }
            }
            totalRooms++;
        }  
    }

    if (isAllive) {
        console.log(`You've made it!\nBitcoins: ${coins}\nHealth: ${health}`)
    }
}

muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');