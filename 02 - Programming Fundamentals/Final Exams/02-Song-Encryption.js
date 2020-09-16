function songEncryption(input) {
    let pattern = /^(?<name>[A-Z][a-z' ]*):(?<song>[A-Z ]*)/;

    for (let line of input) {
        if (line !== "end") {
            let match = pattern.exec(line);
            if (match) {
                let key = match.groups.name.length;
                let encryptArr = match[0].split("");
                let song = "";
                for (let el of encryptArr) {
                    if (el != " " && el != ":" && el != "'") {
                        let oldAscii = el.charCodeAt(0);
                        let newAscii = el.charCodeAt(0) + key;

                        if (oldAscii >= 65 && oldAscii <= 90) {
                            if (newAscii > 90) {
                                let diff = newAscii - 90;
                                let fromStartUpper = 65 + diff - 1;
                                song += String.fromCharCode(fromStartUpper);
                            } else {
                                song += String.fromCharCode(newAscii);
                            }
                        } else if (oldAscii >= 97 && oldAscii <= 122) {
                            if (newAscii > 122) {
                                let diffTwo = newAscii - 122;
                                let fromStartLower = 97 + diffTwo - 1;
                                song += String.fromCharCode(fromStartLower);
                            } else {
                                song += String.fromCharCode(newAscii);
                            }
                        }
                    } else if (el == ":") {
                        song += "@"
                    } else {
                        song += el;
                    }
                }
                console.log(`Successful encryption: ${song}`);
            } else {
                console.log("Invalid input!");
            }
        } else {
            break;
        }
    }
}

songEncryption([
    'Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    "Guns n'roses:NOVEMBER RAIN",
    'Christina Aguilera: HuRt',
    'end'
]
)//Sgze z'daeqe@ZAHQYNQD DMUZ
//Fijqj@TSJ FSI TSQD