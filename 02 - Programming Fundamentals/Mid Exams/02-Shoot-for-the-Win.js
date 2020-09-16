function shootForTheWin(array) {
    let targets = array[0].split(" ").map(Number);
    let indexes = array.slice(1);
    let shotTargets = 0;

    for (let index of indexes) {
        if (index != "End") {
            index = Number(index);
            
            if (index < targets.length) {
                let shotTargetValue = targets[index];
                targets.splice(index, 1, '-1');    
                shotTargets++;
                for (let i = 0; i < targets.length; i++) {
                    if (targets[i] != "-1") {
                        if (shotTargetValue < targets[i]) {
                            targets[i] -= shotTargetValue;
                       } else {
                            targets[i] += shotTargetValue;
                       }
                    }
                }    
            }
        }
    }
    console.log(`Shot targets: ${shotTargets} -> ${targets.join(" ").trim()}`)

}

shootForTheWin([ '24 50 36 70', '0', '4', '3', '1', 'End' ]
)