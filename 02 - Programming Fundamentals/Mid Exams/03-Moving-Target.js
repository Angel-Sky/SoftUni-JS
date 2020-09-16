function movingTarget(arr) {
    let targets = arr[0].split(" ").map(Number);
    let commands = arr.slice(1);
    for (let line of commands) {
        let arrOfCommands = line.split(" ");
        let command = arrOfCommands[0];
        let index = +arrOfCommands[1];
        let value = +arrOfCommands[2];
        if (command != "End") {
            let target = targets[index];
            if (command == "Shoot") {
                if (index <= targets.length && index >= 0) {
                    if (target <= value) {
                        targets.splice(index, 1);
                    } else {
                        targets.splice(index, 1, (target - value));
                    }
                }
            } else if (command == "Strike") {
                if (index >= 0 && index + value + 1 < targets.length) {
                    targets.splice((index - value), (value * 2 + 1));
                } else {
                    console.log("Strike missed!");
                }
            } else if (command == "Add") {
                if (index >= 0 && index < targets.length) {
                    targets.splice(index, 0, value);
                } else {
                    console.log("Invalid placement!");
                }
            } 
        } else {
            console.log(targets.join("|").trim())
        }
    }
}

// movingTarget([
//     '47 55 85 78 99 20',
//     'Shoot 1 55',
//     'Shoot 8 15',
//     'Strike 2 3',
//     'Add 0 22',
//     'Add 2 40',
//     'Add 2 50',
//     'End'
//   ]
//   )

movingTarget([
    '52 74 23 44 96 110',
    'Shoot -5 120',
    'Shoot 1 80',
    'Strike 1 2',
    'Add 22 3',
    'End'
]
)