function manOwar(data) {
    let pirateShip = data[0].split(">").map(Number);
    let warShip = data[1].split(">").map(Number);
    let maxHealth = Number(data[2]);
    let commands = data.slice(3);
    let gameOver = false;

    for (let line of commands) {
        if (line == "Retire") {
            break;
        } else if (!gameOver){
            let [command, index, value, damage] = line.split(" ");
            index = Number(index), value = Number(value), damage = Number(damage);

            switch(command) {
                case "Fire":
                    if (index >= 0 && index < warShip.length) {
                        warShip[index] -= value;
                        if (warShip[index] <= 0) {
                            console.log("You won! The enemy ship has sunken.");
                            gameOver = true;
                            break;
                        }
                    }
                break;

                case "Defend":
                    if (index >= 0 && value >= 0 && index < pirateShip.length && value < pirateShip.length) {
                        for (let i = index; i <= value; i++) {
                            pirateShip[i] -= damage;
                            if (pirateShip[i] <= 0) {
                                console.log("You lost! The pirate ship has sunken.");
                                gameOver = true;
                                break;
                            }
                        } 
                    }
                break;

                case "Repair":
                    if (index >= 0 && index < pirateShip.length) {
                       pirateShip[index] += value;
                       if (pirateShip[index] > maxHealth) {
                           pirateShip[index] = maxHealth;
                       }
                    }
                break;

                case "Status":
                    let count = 0;
                    for (let sections of pirateShip) {
                        if (sections < maxHealth * 20/100) {
                            count++;
                        }
                    }
                    console.log(`${count} sections need repair.`);
                break;
            }
        } else {
            break;
        }
    }

    if (!gameOver) {
        console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b, 0)}`);
        console.log(`Warship status: ${warShip.reduce((a, b) => a + b, 0)}`);
    }
}

manOwar([
    '2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire'
  ]
  )