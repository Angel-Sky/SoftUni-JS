function messageTranslator(input){
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z]{7,})]/g;
    let n = +input.shift();

    for (let line of input) {
        let match = pattern.exec(line);

        if (match) {
            let ecrypt = [];
            for (let char of match.groups.message) {
                char = char.charCodeAt(0);
                ecrypt.push(char);
            }
            console.log(`${match.groups.command}: ${ecrypt.join(" ")}`);
        } else {
            console.log("The message is invalid")
        }
    }

}

messageTranslator([
    '3',
    'go:[outside]',
    '!drive!:YourCarToACarWash',
    '!Watch!:[LordofTheRings]'
  ]
  )