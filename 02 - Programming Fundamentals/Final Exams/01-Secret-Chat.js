function secretChat(input) {
    let secretCode = input[0];

    for (let line of input.slice(1)) {
        if (line !== "Reveal") {
            let [command, string, char] = line.split(":|:");
            switch (command) {
                case "ChangeAll":
                    while (secretCode.includes(string)) {
                        secretCode = secretCode.replace(string, char);
                    }
                    console.log(secretCode);
                    break;

                case "Reverse":
                    if (secretCode.includes(string)) {
                        secretCode = secretCode.replace(string, "");
                        let reversed = string.split("").reverse().join("");
                       
                        secretCode += reversed;
                        console.log(secretCode);
                    } else {
                        console.log("error")
                    }

                    break;

                case "InsertSpace":
                    let index = Number(string);
                    let firstWord = secretCode.substring(0, index);
                    let secondWord = secretCode.substring(index);

                    secretCode = firstWord + " " + secondWord;
                    console.log(secretCode);
                    break;
            }
           
        } else {
            console.log("You have a new text message: " + secretCode);
            break;
        }
    }
}

// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]
// )

 secretChat([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal'
]
)