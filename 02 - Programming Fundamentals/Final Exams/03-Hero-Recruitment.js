function heroRecruitment(input) {
    let heroes = {};

    for (let line of input) {
        if (line !== "End") {
            let [command, name, spellName] = line.split(" ");

            switch (command) {
                case "Enroll":
                    if (!heroes.hasOwnProperty(name)) {
                        heroes[name] = [];
                    } else {
                        console.log(`${name} is already enrolled.`)
                    }
                    break;

                case "Learn":
                    if (heroes.hasOwnProperty(name)) {
                        if (!heroes[name].includes(spellName)) {
                            heroes[name].push(spellName);
                        } else {
                            console.log(`${name} has already learnt ${spellName}.`);
                        }
                    } else {
                        console.log(`${name} doesn't exist.`);
                    }
                    break;

                case "Unlearn":
                    if (heroes.hasOwnProperty(name)) {
                        if (heroes[name].includes(spellName)) {
                            let indexOfSpell = heroes[name].indexOf(spellName);
                            heroes[name].splice(indexOfSpell, 1);
                        } else {
                            console.log(`${name} doesn't know ${spellName}.`);
                        }
                    } else {
                        console.log(`${name} doesn't exist.`);
                    }

            }
        } else {
            console.log("Heroes:")
            let sorted = Object.entries(heroes)
                .sort((a, b) => {
                    if (a[1].length === b[1].length) {
                        return a[0].localeCompare(b[0]);
                    } else {
                        return b[1].length - a[1].length;
                    }
                })
                .forEach(el => {
                    console.log(`== ${el[0]}: ${el[1].join(", ")}`);
                })
        }
    }
}

heroRecruitment([
    'Enroll Stefan',
    'Enroll Pesho',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stamat ItShouldNotWork',
    'Unlearn Gosho Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
]
)

heroRecruitment([
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stefan ItShouldWork',
    'Unlearn Stefan NotFound',
    'End'
  ]
  
  )