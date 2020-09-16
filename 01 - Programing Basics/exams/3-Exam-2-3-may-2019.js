//04. Tourist Shop
/*
function touristShop(input) {
    let budget = +input.shift();
    let product = input.shift();
    let counter = 0, productsBaught = 0, sum = 0;
    let isExpensive = false;
    while (product !== "Stop") {
        counter++;
        let price = +input.shift();
        if (counter % 3 == 0) {
            price /= 2;
        }

        if (price > budget) {
            console.log("You don't have enough money!");
            console.log(`You need ${Math.abs(budget - price).toFixed(2)} leva!`);
            isExpensive = true;
            break;
        }
        budget -= price;
        
        productsBaught++;
        sum += price;
        product = input.shift();
    
    }
    if (!isExpensive) {
        console.log(`You bought ${productsBaught} products for ${sum.toFixed(2)} leva.`);
    }
    

}

touristShop([
    '153.20', 'Backpack',
    '25.20',  'Shoes',
    '54',     'Sunglasses',
    '30',     'Stop'
  ]
  
  )*/

  //05. Division Without Remainder
/*
  function solve(input) {
    let n = +input.shift();
    let devisionTwo = 0, devisionThree = 0, devisionFour = 0, p1 = 0, p2 = 0, p3 = 0;
    for (let i = 1; i<=n; i++) {
        let currentNum = +input.shift();
        if (currentNum % 2 == 0) {
            devisionTwo++;
        } 
        if (currentNum % 3 == 0) {
            devisionThree++;
        } 
        if (currentNum % 4 == 0) {
            devisionFour++;
        }
    }

    p1 = devisionTwo/n*100;
    p2 = devisionThree/n*100;
    p3 = devisionFour/n*100;

    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
  }

  solve([ '3', '3', '6', '9' ]

  )*/

  //06. Vet Parking

function vetParking(input){
    let days = +input.shift();
    let hours = +input.shift();
    let price = 0;
    let daysCounter = 0;
    let hoursCounter = 0;
    let sum = 0;
    for (let i = 1; i<=days; i++) {
        daysCounter++;
        for (let j = 1; j<=hours ; j++) {
            hoursCounter++;
            if (daysCounter % 2 == 0  && hoursCounter % 2 !==0) {
                price += 2.50;
            } else if (daysCounter % 2 !==0 && hoursCounter % 2 == 0) {
                price += 1.25;
            } else {
                price += 1;
            }

        }
        console.log(`Day: ${i} - ${price.toFixed(2)} leva`);
        sum += price;
        price = 0;
        hoursCounter = 0;
    }
    console.log(`Total: ${sum.toFixed(2)} leva`)
}

  vetParking([ '5', '2' ])