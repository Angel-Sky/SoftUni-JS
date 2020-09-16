function ladybugs(data) {
    let fieldLength = data.shift();
    let ladybugsIndexes = data.shift().split(" ");
    let bugsField = [];
    
    let index = 0, increase = 1;
    for (index of ladybugsIndexes) {
        bugsField[index] = 1;
    }
    
    while (bugsField.length < fieldLength){
        bugsField.push(0);  
    } //bugsField -> 1 1 0

    for (let j = 0; j < data.length; j++) {
        let commandsData = data[j].split(" ");
        let indexOfBug = Number(commandsData[0]); //0     2
        let rightOrLeft = commandsData[1];        //right
        let goesTo = Number(commandsData[2]);     //1     1

        for (let i = 0; i<bugsField.length; i++) {
            let currentPosition = bugsField[i];
            if (indexOfBug == i) { //hvashtame pravilnata kalinka
                if (rightOrLeft == "right") {
                    if (bugsField[i] == 1) { //ako element na poziciq 0 e 1
                        bugsField[i] = 0;    // elementa na poziciq 0 stava 0
                        if (bugsField[i+increase] != 1){  // ako elementa na poziciq 1 ne e 1 znachi nqma kalinka
                            bugsField[i+increase] = 1; //mestim kalinkata tuk
                        } else {
                            increase++;
                            
                        }
                    }
                    
                   
                }
            }
        }

        
    }

        
}
    


    

    
    


ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ])