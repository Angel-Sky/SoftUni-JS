function makeADictionary(input) {
    let obj = input.map(JSON.parse);
    const dictionary = {};
    obj.forEach(line => {
        let arrCollection = Object.entries(line);
        let term  = arrCollection[0][0];
        let definition = arrCollection[0][1];
        
        dictionary[term] = definition;
    });

    let sortedArrayOfDictionary = Object
        .entries(dictionary)
        .sort((a, b) => a[0].localeCompare(b[0]));
    
    sortedArrayOfDictionary.forEach((line) => {
        console.log(`Term: ${line[0]} => Definition: ${line[1]}`);
    });
    
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
  ])