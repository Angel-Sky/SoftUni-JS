function activationKeys(input) {
    let key = input[0];

    for (let line of input.slice(1)) {
        let [command, firstArgument, secArgument, thirdArgument] = line.split(">>>");

        switch(command) {
            case "Contains":
                if (key.includes(firstArgument)) {
                    console.log(`${key} contains ${firstArgument}`);
                } else {
                    console.log("Substring not found!");
                }
                break;

            case "Flip":
                let startIndex = Number(secArgument);
                let endIndex = Number(thirdArgument);
                let before = key.substring(0, startIndex);
                let partToFlip = key.substring(startIndex, endIndex);
                let after = key.substring(endIndex);

                if (firstArgument == "Upper") {
                    partToFlip = partToFlip.toUpperCase();
                } else {
                    partToFlip = partToFlip.toLowerCase();
                }

                key = before + partToFlip + after;
                console.log(key);
            break;

            case "Slice":
                let firstIndex = Number(firstArgument);
                let secIndex = Number(secArgument);

                let partToSlice = key.substring(firstIndex, secIndex);
                key = key.replace(partToSlice, "");
                console.log(key)
            break;

            default:
                console.log(`Your activation key is: ${key}`);
        }
    }
}

activationKeys([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ]
  
  )

// abghijklmnopqrstuvwxyz
// abgHIJKLMNOPQRstuvwxyz
// abgHIjkLMNOPQRstuvwxyz
// Substring not found!
// Substring not found!
// Your activation key is: abgHIjkLMNOPQRstuvwxyz
