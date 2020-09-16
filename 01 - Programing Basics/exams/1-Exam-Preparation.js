//01. Savings 
/*
function festivalSavings (input) {
    let monthlyIncome = +input.shift();
    let savingMonths = +input.shift();
    let coasts = +input.shift();

    let personalCoasts = monthlyIncome * 30/100;
    let savedMoney = monthlyIncome - (coasts + personalCoasts);
    let totalSavings = savedMoney * savingMonths;
    let totalSavingsPercent = (savedMoney/monthlyIncome)*100;
    console.log(`She can save ${totalSavingsPercent.toFixed(2)}%`);
    console.log(totalSavings.toFixed(2));

}

festivalSavings(["1500", "3", "800"])*/

//02. Summer shoping
/*
function summerShopping(input) {
    let burget = +input.shift();
    let priceBeachTowel = +input.shift();
    let discount = +input.shift();

    let umbrellaPrice = 2/3*priceBeachTowel;
    let flipFlopsPrice = umbrellaPrice * 75/100;
    let beachBagPrice = 1/3*(flipFlopsPrice + priceBeachTowel);

    let sum = priceBeachTowel + umbrellaPrice + flipFlopsPrice + beachBagPrice;
    let finalSum = sum - (sum * discount/100);

    if (finalSum <= burget ){
        console.log(`Annie's sum is ${finalSum.toFixed(2)} lv. She has ${(burget - finalSum).toFixed(2)} lv. left.`);
    } else {
        console.log(`Annie's sum is ${finalSum.toFixed(2)} lv. She needs ${(finalSum - burget).toFixed(2)} lv. more.`)
    }
 

}

summerShopping(["30", "17", "3"])*/

//03. Cruise Ship
/*
function cruiseShip(input) {
    let cruise = input.shift();
    let cabin = input.shift();
    let nights = +input.shift();
    let price = 0;
    let discount = 0;
    if (cruise == "Mediterranean") {
        switch (cabin) {
            case "standard cabin":
                price = (nights * 27.50)*4;
                break;
            case "cabin with balcony":
                price = (nights * 30.20)*4;
                break;
            case "apartment":
                price = (nights * 40.50)*4;
                break;
        }
    } else if (cruise == "Adriatic") {
        switch (cabin) {
            case "standard cabin":
                price = (nights * 22.99)*4;
                break;
            case "cabin with balcony":
                price = (nights * 35.00)*4;
                break;
            case "apartment":
                price = (nights * 34.99)*4;
                break;
        }
    } else {
        switch (cabin) {
            case "standard cabin":
                price = (nights * 23.00)*4;
                break;
            case "cabin with balcony":
                price = (nights * 26.60)*4;
                break;
            case "apartment":
                price = (nights * 39.80)*4;
                break;
        }
    }

    if (nights > 7){
        discount = 25/100;
        price -= price * discount;
    }

    console.log(`Annie's holiday in the ${cruise} sea costs ${price.toFixed(2)} lv.`)

}

cruiseShip(["Mediterranean", "cabin with balcony", "12"]);

*/

//04. Cruise Games
/*
function cruiseGames(input) {
    let name = input.shift();
    let nGames = +input.shift();

    let volleyballCounter = 0;
    let tennisCounter = 0;
    let badmintonCaounter = 0;
    let pointsVolley = 0;
    let pointsTennis = 0;
    let pointsBadminton = 0;

    for (let i = 0; i < nGames; i++) {
        let game = input.shift();
        let points = +input.shift();
        
        if (game == "volleyball") {
            volleyballCounter++;
            pointsVolley += points + (7/100 * points);
        } else if (game == "tennis") {
            tennisCounter++;
            pointsTennis += points + (5/100 * points);
        } else {
            badmintonCaounter++;
            pointsBadminton += points + (2/100 * points);
        }

    }
    let averageVolley = pointsVolley / volleyballCounter;
    let averageTennis = pointsTennis / tennisCounter;
    let averageBadmin = pointsBadminton / badmintonCaounter;
    let finalPoints = pointsVolley + pointsTennis + pointsBadminton;
    if (averageVolley >= 75 && averageTennis >= 75 && averageBadmin >= 75) {
        console.log(`Congratulations, ${name}! You won the cruise games with ${Math.floor(finalPoints)} points.`)
    } else {
        console.log(`Sorry, ${name}, you lost. Your points are only ${Math.floor(finalPoints)}.`)
    }
}

cruiseGames([ 'Pepi', '3', 'volleyball', '78', 'tennis', '98', 'badminton', '105' ]) */

//05. Darts Tournament
/*
function darts(input) {
    let points = +input.shift();
    let counter = 0;
    let isBullseye = false;
    while (points >= 0){
        let sector = input.shift();
        let scored = +input.shift();

        if (sector == "number section") {
            points -= scored;
        } else if (sector == "double ring") {
            points -= scored * 2;
        } else if (sector == "triple ring") {
            points -= scored * 3;
        } else {
            isBullseye = true;
            counter++;
            break;
        }
        counter++;
    }

    if (isBullseye) {
        console.log(`Congratulations! You won the game with a bullseye in ${counter} moves!`)
    } else if (points == 0) {
        console.log(`Congratulations! You won the game in ${counter} moves!`)
    } else {
        console.log(`Sorry, you lost. Score difference: ${Math.abs(points)}.`)
    }
} 

darts([
    '75',
    'triple ring',
    '17',
    'number section',
    '16',
    'triple ring',
    '13',
    'double ring',
    '10'
  ])*/

//06. Baking Competition

function baking(input) {
    let participants = +input.shift();
    let earnedMoney = 0;
    let totalSweets = 0;

    for (let i = 1; i <= participants; i++) {
        let name = input.shift();
        let sweet = input.shift();
        let cookies = 0; 
        let cakes = 0; 
        let waffles = 0;
        while (sweet !== "Stop baking!") {

            let quantity = +input.shift();
            totalSweets += quantity;
            if (sweet == "cookies") {
                cookies += quantity;
                earnedMoney += quantity * 1.50;
            } else if (sweet == "cakes") {
                cakes += quantity;
                earnedMoney += quantity * 7.80;
            } else if (sweet == "waffles") {
                waffles += quantity;
                earnedMoney += quantity * 2.30;
            }
            
            sweet = input.shift();

        }
        console.log(`${name} baked ${cookies} cookies, ${cakes} cakes and ${waffles} waffles.`)
    
    }
    console.log(`All bakery sold: ${totalSweets}`)
    console.log(`Total sum for charity: ${earnedMoney.toFixed(2)} lv.`)
    
}

baking([
    '3',            'George',
    'cookies',      '10',
    'Stop baking!', 'Annie',
    'waffles',      '8',
    'Stop baking!', 'Ivan',
    'cookies',      '6',
    'waffles',      '3',
    'Stop baking!'
  ])