function dungeonestDark(input) {
    let rooms = input[0].split("|");
    let health = 100;
    let coins = 0;
    let roomsCounter = 1;
    let isAlive = true;

    for (let i = 0; i < rooms.length; i++) {
        let currentRoom = rooms[i];
        let room = currentRoom.split(" ");
        let command = room[0];
        let value = Number(room[1]);

        if (command == "potion") {
            health += value;
            if (health > 100) {
                health -= value;
                console.log(`You healed for ${100 - health} hp.`)
                health = 100;
            } else {
                console.log(`You healed for ${value} hp.`);
            }
            console.log(`Current health: ${health} hp.`)
        } else if (command == "chest") {
            coins += value;
            console.log(`You found ${value} coins.`)
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomsCounter}`);
                isAlive = false;
                break;
            }
        }
        roomsCounter++;

    }
    if (isAlive) {
        console.log(`You've made it! \nCoins: ${coins} \nHealth: ${health}`)
    }
}

dungeonestDark([ 'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' ]
)