function heroesOfCode(input) {
    let heroesCount = Number(input[0]);
    let heroes = {};

    for (let i = 1; i <= heroesCount; i++) {
        let [name, hp, mana] = input[i].split(" ");
        hp = Number(hp), mana = Number(mana);
        heroes[name] = { hp, mana };
    }

    for (let line of input.slice(heroesCount + 1)) {
        if (line != "End") {
            let [command, heroName, num, name] = line.split(" - ");
            num = Number(num);

            switch (command) {
                case "CastSpell":
                    if ((heroes[heroName].mana - num) >= 0) {
                        console.log(`${heroName} has successfully cast ${name} and now has ${heroes[heroName].mana - num} MP!`);
                        heroes[heroName].mana -= num;
                    } else {
                        console.log(`${heroName} does not have enough MP to cast ${name}!`)
                    }
                    break;

                case "TakeDamage":
                    heroes[heroName].hp -= num;

                    if (heroes[heroName].hp > 0) {
                        console.log(`${heroName} was hit for ${num} HP by ${name} and now has ${heroes[heroName].hp} HP left!`);
                    } else {
                        console.log(`${heroName} has been killed by ${name}!`);
                        delete heroes[heroName];
                    }
                    break;

                case "Recharge":
                    if ((heroes[heroName].mana + num) > 200) {
                        let difference = num - (heroes[heroName].mana + num - 200);
                        console.log(`${heroName} recharged for ${difference} MP!`);
                        heroes[heroName].mana = 200;
                    } else {
                        console.log(`${heroName} recharged for ${num} MP!`);
                        heroes[heroName].mana += num;
                    }


                    break;

                case "Heal":
                    if ((heroes[heroName].hp + num) > 100) {
                        let difference = num - (heroes[heroName].hp + num - 100);
                        console.log(`${heroName} healed for ${difference} HP!`);
                        heroes[heroName].hp = 100;
                    } else {
                        console.log(`${heroName} healed for ${num} HP!`);
                        heroes[heroName].hp += num;
                    }
                    break;
            }

        } else {
            Object.entries(heroes)
                .sort((a, b) => {
                    if (a[1].hp == b[1].hp) {
                        return a[0].localeCompare(b[0]);
                    } else {
                        return b[1].hp - a[1].hp;
                    }
                })
                .forEach(el => {
                    console.log(el[0]);
                    console.log(`  HP: ${el[1].hp}`);
                    console.log(`  MP: ${el[1].mana}`);
                })
        }
    }
}

heroesOfCode([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]


)