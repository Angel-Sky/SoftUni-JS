function distanceCalculator(input) {
    let [stepsMade, lengthOfSteps, wishDistance] = input.map(Number);
    wishDistance *= 100;

    let lengthOfShorterSteps = lengthOfSteps - lengthOfSteps*30/100; //1.4
    let shorterSteps = 0; 
    for (i = 1; i<=stepsMade; i++) {
        if (i % 5 == 0) {
            shorterSteps++;
        }
    }
    let allSteps = (stepsMade-shorterSteps) * lengthOfSteps + shorterSteps * lengthOfShorterSteps; //80*2 + 20*1.4

    console.log(`You travelled ${(allSteps/wishDistance * 100).toFixed(2)}% of the distance!`);
}

distanceCalculator([ '100', '2', '1' ])
distanceCalculator([ '5000', '7.5', '500' ])