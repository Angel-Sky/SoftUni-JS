function worldTour(input) {
    let string = input.shift();

    for (let line of input) {
        if (line !== "Travel") {
            let [command, firstArg, secArg ] = line.split(":");

            switch(command) {
                case "Add Stop":
                    let index = Number(firstArg);
                    if (string[index] !== undefined) {
                        let firstPart = string.substring(0, index);
                        let secPart = string.substring(index);

                        string = firstPart + secArg + secPart;
                    }
                    console.log(string);
                    break;

                case "Remove Stop":
                    let firstIndex = Number(firstArg), secIndex = Number(secArg);

                    if (string[firstIndex] !== undefined && string[secIndex] !== undefined) {
                        let cutPart = string.substring(firstIndex, secIndex+1);
                        string = string.replace(cutPart, "");
                    }
                    console.log(string);
                    break;

                case "Switch":
                    if (string.indexOf(firstArg) != "-1") {
                       // string = string.replace(firstArg, secArg);
                        string = string.split(firstArg).join(secArg);
                        console.log(string);
                    } else {
                        console.log(string)
                    }
                    break;
            }   
           
        } else {
            console.log(`Ready for world tour! Planned stops: ${string}`);
            break;
        }
    }
}

worldTour([
    'Hawai::Cyprys-Greece-Hawai-Hawai',
    'Add Stop:7:Rome',
    'Remove Stop:7:11',
    'Switch:Hawai:Bulgaria',
    'Travel'
  ] 
)