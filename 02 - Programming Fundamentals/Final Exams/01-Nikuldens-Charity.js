function charity(input) {
    let string = input.shift();

    for (let line of input) {
        if (line != "Finish") {
            let [command, firstArg, secArg] = line.split(" ");

            switch(command) {
                case "Replace":
                    while (string.includes(firstArg)) {
                        string = string.replace(firstArg, secArg);
                    }
                    console.log(string);
                break;

                case "Cut":
                    let firstIndex = Number(firstArg), secIndex = Number(secArg);
                    if (firstIndex < 0 || secIndex < 0 || firstIndex > string.length || secIndex > string.length) {
                        console.log("Invalid indexes!");
                    } else {
                        let cutPart = string.substring(firstIndex, secIndex + 1);
                        string = string.replace(cutPart, "");
                        console.log(string)
                    }
                    break;

                case "Make":
                    if (firstArg == "Upper") {
                        string = string.toUpperCase();
                    } else {
                        string = string.toLowerCase();
                    }
                    console.log(string);
                break;

                case "Check":
                    if (string.includes(firstArg)) {
                        console.log(`Message contains ${firstArg}`);
                    } else {
                        console.log(`Message doesn't contain ${firstArg}`)
                    }
                    break;

                case "Sum":
                    let startIndex = Number(firstArg), endIndex = Number(secArg);
                    if (startIndex < 0 || endIndex < 0 || startIndex > string.length || endIndex > string.length) {
                        console.log("Invalid indexes!");
                    } else {
                        let substr = string.substring(startIndex, endIndex + 1);
                        let sum = 0;
                        for (let char of substr) {
                            sum += char.charCodeAt(0);
                        }
                        console.log(sum)
                    }
            }
        }
    }

}

charity([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
  ]
  )