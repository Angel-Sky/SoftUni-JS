function passwordReset(input) {
    let password = input.shift();

    for (let line of input) {
        if (line == "TakeOdd") {
            let tempPass = "";
            for (let i = 1; i < password.length; i+=2) {
                tempPass += password[i];
            }
            password = tempPass;
            console.log(password)
        } else {
            let [command, firstArg, secArg] = line.split(" ");
            switch(command) {
                case "Cut":
                    let index = Number(firstArg), length = Number(secArg);
                    let cutPart = password.substring(index, index+length);
                    password = password.replace(cutPart, "") 
                    console.log(password);
                break;

                case "Substitute":
                    if (password.includes(firstArg)) {
                        while (password.includes(firstArg)) {
                            password = password.replace(firstArg, secArg);
                        }
                        console.log(password);
                    } else {
                        console.log("Nothing to replace!")
                    }
                break;

                default:
                    console.log(`Your password is: ${password}`);
            }
        }
    }
}

passwordReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ]
  )