function tanksCollector(data) {
    let ownTanks = data.shift().split(", ");
    let n = +data.shift();

    for (let line of data) {
        if (n > 0) {
            let [command, tank, tank2] = line.split(", ");

            switch(command) {
                case "Add":
                    if (ownTanks.includes(tank)) {
                        console.log("Tank is already bought");
                    } else {
                        console.log("Tank successfully bought");
                        ownTanks.push(tank);
                    }
                break;

                case "Remove":
                    if (ownTanks.includes(tank)) {
                        let index = ownTanks.indexOf(tank);
                        ownTanks.splice(index, 1);
                        console.log("Tank successfully sold");
                    } else {
                        console.log("Tank not found");
                    }
                break;
                
                case "Remove At":
                    let index = Number(tank);
                    if (index < ownTanks.length) {
                        ownTanks.splice(index, 1);
                        console.log("Tank successfully sold");
                    } else {
                        console.log("Index out of range");
                    }
                break;

                case "Insert":
                    let indexx = Number(tank);
                    if (indexx < ownTanks.length) {
                        if (!ownTanks.includes(tank2)) {
                            console.log("Tank successfully bought");
                            ownTanks.splice(indexx, 0, tank2)
                        } else {
                            console.log("Tank is already bought");
                        }
                    } else {
                        console.log("Index out of range");
                    }
                break;
    
            }
            n--;
        } 
    }
    
    console.log(ownTanks.join(", "));
}

tanksCollector([
    'T-34-85 Rudy, SU-100Y, STG',
    '3',
    'Remove, SU-100Y',
    'Remove, T-34-85',
    'Remove, STG'
  ]
  
  
  )