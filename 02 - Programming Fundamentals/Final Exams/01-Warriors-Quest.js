function warriorsQuest(input) {
    let skill = input.shift();

    for (let line of input) {
        if (line != "For Azeroth") {
            let [command, firstArg, secArg, thirdArg] = line.split(" ");

            switch (command) {
                case "GladiatorStance":
                    skill = skill.toUpperCase();
                    console.log(skill)
                    break;
                case "DefensiveStance":
                    skill = skill.toLowerCase();
                    console.log(skill)
                    break;
                case "Dispel":
                    let index = Number(firstArg);
                    let charToReplace = skill[index]
                    if (index < 0 || index > skill.length-1) {
                        console.log("Dispel too weak.");
                    } else {
                        if (skill.includes(charToReplace)) {
                            skill = skill.replace(charToReplace, secArg)
                            console.log("Success!");
                        }
                    }
                    break;
                case "Target":
                    if (firstArg == "Change") {
                        while (skill.includes(secArg)) {
                            skill = skill.replace(secArg, thirdArg);
                        }
                        console.log(skill);
                    } else if (firstArg == "Remove") {
                        while (skill.includes(secArg)) {
                            skill = skill.replace(secArg, "");
                        }
                        console.log(skill);
                    } else {
                        console.log("Command doesn't exist!");
                    }
            
                    break;

                default:
                    console.log("Command doesn't exist!");
                    break;

            }
        }
    }
}

warriorsQuest([
    'DYN4MICNIC',
    'Target Remove NIC',
    'Dispel 3 A',
    'DefensiveStance',
    'Target Change d D',
    'target change D d',
    'For Azeroth'
  ]  
)