function archeryTournament(input) {
    let targets = input.shift().split("|").map(Number);
    let target, indexTarget, points = 0;

    for (let line of input) {
        if (line != "Game over") {
            let [command, discription] = line.split(" ");

            if (command == "Reverse") {
                targets.reverse();
            } else {
                let [direction, startIndex, length] = discription.split("@");
                startIndex = Number(startIndex); //0 4
                length = Number(length); //12 15
                if (startIndex < targets.length && startIndex >= 0) {
                    if (direction == "Left") {
                        for (let i = startIndex - 1; length > 0; i--, length--) {
                            if (i == -1) {
                                i = targets.length - 1;
                            }
                            target = targets[i];
                            indexTarget = i;
                        }
                        takePoints();
                       
                    } else {
                        for (let i = startIndex + 1; length > 0; i++, length--) {
                            if (i >= targets.length) {
                                i = 0;
                            }
                            target = targets[i];
                            indexTarget = i;
                        }
                       takePoints();
                    }
                }
            }
        } else {
            console.log(targets.join(" - "));
            console.log(`Iskren finished the archery tournament with ${points} points!`)
            break;
        }
    }

    function takePoints() {
        if (targets[indexTarget] >= 5) {
            targets[indexTarget] -= 5;
            points += 5;
        } else {
            points += targets[indexTarget];
            targets[indexTarget] = 0;
        }
    }
}


archeryTournament([
    '10|10|10|10|10',
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over',
    ''
  ]
  )

// archeryTournament([
//     '20|30|40|50|60',
//     'Shoot Left@0@12',
//     'Shoot Right@4@15',
//     'Shoot Left@6@5',
//     'Reverse',
//     'Game over',
//     ''
//   ]
//   )