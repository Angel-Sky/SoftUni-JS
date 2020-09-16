function solve(str) {
    let health = 100;
    let coins = 0;
    let word = '';
    let number = '';
    let foundWord = false;
    let endRoom = false;
    let roomCounter = 0;
 
    let died = false;
    let result = '';
    let healthDiff = 0;
 
    for (let i = 0; i < str.length; i++) {
 
        if (str[i] != ' ' && foundWord == false) { //първо откриваме думата - събираме буквички
            word += str[i];
        } else { //ако сме стигнали до интервал, значи думата е готова
            foundWord = true;
            if (str[i] == ' ') { //прескачаме го, за да не го запишем в числото
                continue;
            } else {
                if (i == str.length - 1) {
                    number += str[i];
                    endRoom = true;
                    roomCounter++;
                    number = Number(number);
 
                } else if (str[i] != '|') {
                    number += str[i];
 
                } else {
                    endRoom = true;
                    roomCounter++;
                    number = Number(number);
                }
            }
        }
 
        if (foundWord && endRoom) {
            switch (word) {
                case 'chest':
                    console.log(`You found ${number} coins.`);
                    // result += `You found ${number} coins.`;
                    // result += '\n';
                    coins += number;
                    break;
                case 'potion':
                    if (number >= 100 - health) {
                        healthDiff = 100 - health;
                    } else {
                        healthDiff = number;
                    }
                    if (health + number > 100) {
                        health = 100;
                    } else {
                        health += number;
                    }
                    console.log(`You healed for ${healthDiff} hp.`);
                    console.log(`Current health: ${health} hp.`);
                    // result += `You healed for ${healthDiff} hp.`;
                    // result += '\n';
                    // result += `Current health: ${health} hp.`;
                    // result += '\n';
                    break;
                default: //влизаме ако е бос или друг враг
                    health -= number; //взима ни живот
                    if (health > 0) {
                        console.log(`You slayed ${word}.`)
                        // result += `You slayed ${word}.`;
                        // result += '\n';
                    } else { //влизаме, ако сме умрели
                        console.log(`You died! Killed by ${word}.`);
                        console.log(`Best room: ${roomCounter}`);
                        // result += `You died! Killed by ${word}.`;
                        // result += '\n';
                        // result += `Best room: ${roomCounter}`;
                        // result += '\n';
                        died = true;
                    }
                    break;
            }
            word = '';
            number = '';
            foundWord = false;
            endRoom = false;
            if (died) {
                break;
            }
         
        }
 
    }
    if (!died) {
        // result += `You've made it!`;
        // result += '\n';
        // result += `Coins: ${coins}`;
        // result += '\n';
        // result += `Health: ${health}.`;
        console.log(`You've made it!`);
       console.log(`Coins: ${coins}`);
       console.log(`Health: ${health}`);
   }
   //console.log(result)
}
 
//solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");