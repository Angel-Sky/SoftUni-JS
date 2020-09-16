//6. Благотворителна кампания
/*function charityCampaign(input){
    let days = Number(input.shift());
    let coockers = Number(input.shift());
    let cakes = Number(input.shift());
    let corrugations = Number(input.shift());
    let pancakes = Number(input.shift());

    let cackesPrice = cakes * 45;
    let corPrice = corrugations * 5.80;
    let pancakesPrice = pancakes * 3.20;

    let turnoverForDay = (cackesPrice + corPrice + pancakesPrice)*coockers;
    let turnoverTotal = (turnoverForDay * days);
    let turnoverFinal = turnoverTotal - (turnoverTotal/8);
    
    console.log(turnoverFinal.toFixed(2));
}

charityCampaign([20, 8, 14, 30, 16]);*/

// 7. Алкохолна борса

function alcoholStore (input) {
    let whiskeyPrice = Number(input.shift());
    let beer = Number(input.shift());
    let wine = Number(input.shift());
    let rakiya = Number(input.shift());
    let whiskey = Number(input.shift());

    let rakiyaPrice = whiskeyPrice/2;
    let winePrice = rakiyaPrice - (40/100*rakiyaPrice);
    let beerPrice = rakiyaPrice - (80/100*rakiyaPrice);

    let bill = whiskey*whiskeyPrice + beer*beerPrice + rakiya*rakiyaPrice + wine*winePrice;
    console.log(bill.toFixed(2));
}

alcoholStore([50, 10, 3.5, 6.5, 1])