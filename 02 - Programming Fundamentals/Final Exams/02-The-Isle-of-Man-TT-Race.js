function manTTrace(input) {
    let pattern = /([#$%*&]+)(?<name>[A-Za-z]+)\1=(?<length>[\d]+)!!(?<code>.+)/;

    for (let line of input) {
        let match = pattern.exec(line);
        
        if (match && (+match.groups.length === match.groups.code.length)) {
            let increasedCode = "";
            for (let char of match.groups.code) {
                let newCharCode = char.charCodeAt(0) + Number(match.groups.length);

                increasedCode += String.fromCharCode(newCharCode)
            }
            console.log(`Coordinates found! ${match.groups.name} -> ${increasedCode}`);
            break;
        } else {
            console.log("Nothing found!");
        }
    }
}

manTTrace([
    '%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S'
  ]
  )