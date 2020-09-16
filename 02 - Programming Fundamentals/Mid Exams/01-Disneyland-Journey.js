function disneyland(input) {
    let journeyCost = +input[0];
    let months = +input[1];
    let savedMoney = 0, currentMonth = 1;

    while (currentMonth <= months) {
        if (currentMonth % 2 !== 0 && currentMonth != 1) {
            savedMoney -= savedMoney * 16/100;
        }
        if (currentMonth % 4 == 0) {
            savedMoney += savedMoney * 25/100;
        }
        savedMoney += journeyCost * 25/100;
        currentMonth++;
    }

    if (savedMoney >= journeyCost) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(savedMoney - journeyCost).toFixed(2)}lv. for souvenirs.`)
    } else {
        console.log(`Sorry. You need ${(journeyCost - savedMoney).toFixed(2)}lv. more.`)
    }
}

disneyland([ '3265', '3' ]
)