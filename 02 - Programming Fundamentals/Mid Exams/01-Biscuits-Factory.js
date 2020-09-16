function biscuitsFactory(input) {
    let [biscuitsPerDay, workers, otherCompProduction] = input.map(Number);
    
    let allDaylyBisc = biscuitsPerDay * workers; 
    let thirdDayBisc = allDaylyBisc * 75/100;
    let myProduction = allDaylyBisc * 20 + thirdDayBisc * 10;
    let difference = Math.abs(otherCompProduction - myProduction);
    let percent = (difference / otherCompProduction * 100).toFixed(2);
    console.log(`You have produced ${myProduction} biscuits for the past month.`);
    if (myProduction > otherCompProduction) {
        console.log(`You produce ${percent} percent more biscuits.`)
    } else {
        console.log(`You produce ${percent} percent less biscuits.`)
    }
    
}

biscuitsFactory([ '65', '12', '26000' ])