function blackFlag(input) {
    let [days, dailyPlunder, expectedplunder] = input.map(Number);
    let counter = 1, allPlunder = 0;
    while (counter <= days) {
        let plunder = dailyPlunder;
        if (counter % 3 == 0) {
            plunder += plunder * 50/100;
        }
        allPlunder += plunder;

        if (counter % 5 == 0) {
            allPlunder -= allPlunder * 30/100;
        }
        counter++;
    }
    if (allPlunder >= expectedplunder) {
        console.log(`Ahoy! ${allPlunder.toFixed(2)} plunder gained.`)
    } else {
        console.log(`Collected only ${((allPlunder/expectedplunder)*100).toFixed(2)}% of the plunder.`);
    } 
}

blackFlag([ '10', '20', '380' ]
)