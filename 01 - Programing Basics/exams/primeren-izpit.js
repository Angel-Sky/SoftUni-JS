//01. Sea Trip
/*
function seaTrip(input) {
    let foodMoney =+input.shift();
    let giftsMoney = +input.shift();
    let hotelMoney = +input.shift();

    let benzin = ((210*2)/100*7) * 1.85;
    let foodAndGifts = foodMoney * 3 + giftsMoney * 3;

    let firstDayHotel = hotelMoney - hotelMoney * 10/100;
    let secondDayHotel = hotelMoney - hotelMoney * 15/100;
    let thirdDayHotel = hotelMoney - hotelMoney * 20/100;

    let moneyForHotel = firstDayHotel + secondDayHotel + thirdDayHotel;

    let total = benzin + foodAndGifts + moneyForHotel;

    console.log("Money needed: "+ total.toFixed(2));
}

seaTrip([100, 50, 500])*/


//02. Spaceship
/*
function spaceship (input) {
    let widthShip = +input.shift();
    let lengthShip = +input.shift();
    let heightShip = +input.shift();
    let averageAstr = +input.shift();

    let v = widthShip * lengthShip * heightShip;
    let vRoom = (averageAstr + 0.40) * 4;
    let freeSpace = Math.floor(v / vRoom);

    if (freeSpace < 3) {
        console.log("The spacecraft is too small.");
    } else if (freeSpace >= 3 && freeSpace <= 10) {
        console.log(`The spacecraft holds ${freeSpace} astronauts.`)
    } else {
        console.log("The spacecraft is too big.");
    }

}

spaceship([3.5,
    4,
    5,
    1.70
    ])*/


//03. Sushi Time

function sushiTime(input) {
    let sushi = input.shift();
    let restaurant = input.shift();
    let portion = +input.shift();
    let order = input.shift();
    let price = 0;
    if (sushi == "sashimi") {
        switch (restaurant) {
            case "Sushi Zone":
                price = 4.99 * portion;
                break;
            case "Sushi Time":
                price = 5.49 * portion;
                break;
            case "Sushi Bar":
                price = 5.25 * portion;
                break;
            case "Asian Pub":
                price = 4.50 * portion;
                break;
            default:
                console.log(`${restaurant} is invalid restaurant!`);
                break;
        }
    } else if (sushi == "maki") {
        switch (restaurant) {
            case "Sushi Zone":
                price = 5.29 * portion;
                break;
            case "Sushi Time":
                price = 4.69 * portion;
                break;
            case "Sushi Bar":
                price = 5.55 * portion;
                break;
            case "Asian Pub":
                price = 4.80 * portion;
                break;
            default:
                console.log(`${restaurant} is invalid restaurant!`);
                break;
        }
    } else if (sushi == "uramaki") {
        switch (restaurant) {
            case "Sushi Zone":
                price = 5.99 * portion;
                break;
            case "Sushi Time":
                price = 4.49 * portion;
                break;
            case "Sushi Bar":
                price = 6.25 * portion;
                break;
            case "Asian Pub":
                price = 5.50 * portion;
                break;
            default:
                console.log(`${restaurant} is invalid restaurant!`);
                break;
        }
    } else {
        switch (restaurant) {
            case "Sushi Zone":
                price = 4.29 * portion;
                break;
            case "Sushi Time":
                price = 5.19 * portion;
                break;
            case "Sushi Bar":
                price = 4.75 * portion;
                break;
            case "Asian Pub":
                price = 5.50 * portion;
                break;
            default:
                console.log(`${restaurant} is invalid restaurant!`);
                break;
        }
    }

    if (order == "Y") {
        price += price * 20 / 100;
    }

    if (restaurant == "Sushi Zone" || restaurant == "Sushi Time" || restaurant == "Sushi Bar" || restaurant == "Asian Pub") {
        console.log(`Total price: ${Math.ceil(price)} lv.`);
    }
}

sushiTime([ 'maki', 'Sushi Zone', '4', 'Y', '' ]
)


//04. Bus
/*
function bus (input) {
    let passengers = +input.shift();
    let stops = +input.shift();
    
    for (let i = 1; i<=stops; i++) {
        let goingDown = +input.shift();
        let goingUp = +input.shift();
        if (i % 2 == 0) {
            passengers = passengers - goingDown + goingUp - 2;
        } else {
            passengers = passengers - goingDown + goingUp + 2;
        }
    }

    console.log(`The final number of passengers is : ${passengers}`)

}

bus([
    '17', '3', '6',
    '7',  '8', '9',
    '3',  '4', ''
  ]
  
  )*/

//05. Bachelor Party
/*
function party (input) {
    let guestPerformer = +input.shift();
    let groups = input.shift();
    let reservation= 0; //3620
    let totalGuests = 0; //50
    while (groups !== "The restaurant is full") {
        if(!isNaN(groups)) {
            groups = Number(groups);
        }

        if (groups < 5) {
            reservation += groups * 100;
        } else {
            reservation += groups * 70;
        }

        totalGuests += groups;
        groups = input.shift();
    }

    let leftMoney = reservation - guestPerformer;
    if (leftMoney >= 0) {
        console.log(`You have ${totalGuests} guests and ${leftMoney} leva left.`);
    } else {
        console.log(`You have ${totalGuests} guests and ${reservation} leva income, but no singer.`)
    }
}

party([ '3200', '5', '12', '6', '6', '12', 'The restaurant is full' ]

  )*/

//06. Multiply Table
/*
function multiplyTable (input) {
    let number = +input.shift();
    let thirthNum = number % 10; //4
    let newNum = Math.floor((number / 10)); //32
    let secNum = newNum % 10; //2
    let firstNum = Math.floor((newNum / 10));//3

    if (firstNum > 0 && secNum > 0 && thirthNum > 0) {

        for (let i = 1; i <= thirthNum; i++) {
            for (let j = 1; j <= secNum; j++) {
                for (let k = 1; k <= firstNum; k++) {
                    console.log(`${i} * ${j} * ${k} = ${i*j*k};`);  
                } 
            }
        }
    }  
}

multiplyTable(['324']);*/