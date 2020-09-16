function weaponsmith(input) {
    let puzzleWord = input.shift().split("|");
    let evenArr = [], oddArr = [];

    for (let line of input) {
        if (line != "Done") {
            let [command, direction, index] = line.split(" ");
            index = Number(index);
            switch(command) {
                case "Move":
                    if (direction == "Left") {
                        if (index < puzzleWord.length && index - 1 >= 0) {
                            let part = puzzleWord[index];
                            puzzleWord.splice(index, 1);
                            puzzleWord.splice(index-1, 0, part)
                        }
                    } else {
                        if (index+1 < puzzleWord.length) {
                            let part = puzzleWord[index];
                            puzzleWord.splice(index, 1);
                            puzzleWord.splice(index+1, 0, part);
                        }
                    }
                break;

                case "Check":
                    if (direction == "Even") {
                        for (let i = 0; i < puzzleWord.length; i++) {
                            if (i % 2 == 0) {
                                evenArr.push(puzzleWord[i]);
                            }
                        }
                        console.log(evenArr.join(" "));
                    } else {
                        for (let i = 0; i < puzzleWord.length; i++) {
                            if (i % 2 != 0) {
                                oddArr.push(puzzleWord[i]);
                            }
                        }
                        console.log(oddArr.join(" "));
                    }
                break;
            }
        }
    }

    console.log(`You crafted ${puzzleWord.join("")}!`)
}

weaponsmith([
    'ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done'
  ]
  )