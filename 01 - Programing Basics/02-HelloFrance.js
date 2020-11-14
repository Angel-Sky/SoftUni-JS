function helloFrance(input) {
    let collectionOfClothes = input[0].split("|");
    let budget = +input[1];
    let bought = [];
    let profit = 0, money = budget;

    for (let line of collectionOfClothes) {
        let [type, price] = line.split("->");
        price = Number(price);

        if (type == "Clothes") {
            buying(50, price);
        } else if (type == "Shoes") {
            buying(35, price);
        } else {
            buying(20.5, price);
        }
    }

    for (let i = 0; i < bought.length; i++) {
        bought[i] += bought[i] * 0.4;
        bought[i] = bought[i].toFixed(2);
    }

    function buying(maxPrice, price) {
        if (price <= maxPrice && price <= money) {
            money -= price;
            bought.push(price);
        }
    }

    profit = bought.map(Number).reduce((a, b) => a + b, 0);

    if (profit + money >= 150 ) {
        console.log(bought.join(" "));
        console.log(`Profit: ${(profit - budget + money).toFixed(2)}`);
        console.log("Hello, France!");
    } else {
        console.log(bought.join(" "));
        console.log(`Profit: ${(profit - budget + money).toFixed(2)}`);
        console.log("Time to go.");
    } 
}

helloFrance([
    'Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
    '120'
  ])

helloFrance([
    'Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60',
    '90'
  ]
  )