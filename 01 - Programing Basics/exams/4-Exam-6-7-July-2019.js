//04. Club
/*
function club (input) {
    let wishedMoney = +input.shift();
    let coctail = input.shift();
    let price = 0;
    let total= 0;
    while (coctail !== "Party!") {
        let quantity = +input.shift();
        price = quantity * coctail.length;
        if (price % 2 !== 0) {
            price -= price * 25/100;
        }
        total += price;
        coctail = input.shift();

        if (total >= wishedMoney) {
            console.log("Target acquired.");
            break;
        }
    }
    if (total < wishedMoney) {
        console.log(`We need ${(wishedMoney - total).toFixed(2)} leva more.`)
    }
    console.log(`Club income - ${total.toFixed(2)} leva.`)
}
club([ '500', 'Bellini', '6', 'Bamboo', '7', 'Party!' ])*/

//04. Renovation

function renovation (input) {
    let height = +input.shift();
    let width = +input.shift();
    let notToColor = +input.shift();

    let walls = height * width * 4;
    let totalToColor = walls - walls * notToColor/100;

    let paint = input.shift();
    while (paint !== "Tired!") {
        paint = Number(paint);
        totalToColor -=paint;
        
        if (totalToColor < 0) {
            console.log(`All walls are painted and you have ${Math.abs(totalToColor)} l paint left!"`);
            break;
        } else if (totalToColor == 0) {
            console.log("All walls are painted! Great job, Pesho!");
            break;
        }
        paint = input.shift();
  
    }

    if (paint == "Tired!"){
        console.log(`${totalToColor} quadratic m left.`)
    }

}

renovation([ '2', '3', '25', '6', '7', '5' ])

// 05. PC Game Shop
/*
function gameShop(input) {
    let n = +input.shift();
    let hearthstoneCount = 0, fortniteCount = 0, overwatchCount = 0, othersCount = 0;
    for (let i = 1; i<=n; i++){
        let game = input.shift();
        if (game == "Hearthstone") {
            hearthstoneCount++;
        } else if (game == "Fornite") {
            fortniteCount++;
        } else if (game == "Overwatch") {
            overwatchCount++;
        } else {
            othersCount++;
        }
    }

    console.log(`Hearthstone - ${(hearthstoneCount/n*100).toFixed(2)}%`);
    console.log(`Fornite - ${(fortniteCount/n*100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatchCount/n*100).toFixed(2)}%`);
    console.log(`Others - ${(othersCount/n*100).toFixed(2)}%`);
}

gameShop([ '3', 'Hearthstone', 'Diablo 2', 'Star Craft 2' ])*/

//05. Football Tournament

