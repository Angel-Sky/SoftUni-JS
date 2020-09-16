function experienceGaining(input) {
    let data = input.map(Number);
    let neededExperience = data.shift();
    let battles = data.shift();
    let collectedExperience = 0, countOfBattles = 0;
    let isCollected = false;
    for (let experience of data) {
        if (collectedExperience < neededExperience) {
            countOfBattles++;
            if (battles > 0) {
                if (countOfBattles % 3 == 0) {
                    experience += experience * 15/100; 
                } else if (countOfBattles % 5 == 0) {
                    experience -= experience * 10/100;
                } 
                collectedExperience += experience;
                if (collectedExperience >= neededExperience) {
                    isCollected = true;
                    break;
                }
                battles--;
            } else {
                break;
            }
        } else {
            isCollected = true;
            break;
        }
    }

    if (isCollected) {
        console.log(`Player successfully collected his needed experience for ${countOfBattles} battles.`)
    } else {
        console.log(`Player was not able to collect the needed experience, ${(neededExperience - collectedExperience).toFixed(2)} more needed.`)
    }
}

experienceGaining([
    '500', '5',
    '50',  '100',
    '200', '100',
    '30'
  ]
  )