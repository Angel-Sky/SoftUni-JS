function race(input) {
    let lettersPattern = /[A-Za-z]/g;
    let validRacers = input[0].split(", ");
    let racers = {};
    for (let line of input.slice(1)) {
        let nameMatch = line.match(lettersPattern).join("");
      
        if (validRacers.includes(nameMatch)) {
            let distance = line.match(/[\d]/g).map(Number).reduce((a, b) => a + b);
            
            if (!racers[nameMatch]) {
                racers[nameMatch] = distance;
            } else {
                racers[nameMatch] += distance;
            }
        }

    }
    let sortedOutput = Object.entries(racers).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sortedOutput[0][0]}`);
    console.log(`2nd place: ${sortedOutput[1][0]}`);
    console.log(`3rd place: ${sortedOutput[2][0]}`);

}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]
  )