//------------- Nested Conditional Statements - Exercise --------------
//01. Point on Rectangle Border

/*function point (input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());

    let firstCondition = (y==x1 || x==x2) && (y >= y1 && y <= y2);
    let secondCondition = (x==y1 || y==y2) && (x >= x1 && x <= x2);

    if (firstCondition || secondCondition) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}*/

//02. Cinema

/*function cinema (input) {
    let projectionType = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());

    let seats = rows * columns;
    let premierePrice = 12;
    let normalPrice = 7.50;
    let discountPrice = 5;
    let finalPrice;

    if (projectionType == 'Premiere') {
        finalPrice = premierePrice * seats;
    }  else if (projectionType == 'Normal') {
        finalPrice = normalPrice * seats;
    } else {
        finalPrice = discountPrice * seats;
    }

    console.log(finalPrice.toFixed(2));
}

cinema(['Premiere', 10, 12])*/

//03. Summer Outfit
/*
function summerOutfit(input) {
    let degrees = Number(input.shift());
    let time = input.shift();

    let outfit, shoes;

    if (time == 'Morning') {
        if (degrees >= 10 && degrees <= 18) {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if (degrees > 18 && degrees <= 24) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (degrees >= 25) {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }
    }  else if (time == 'Afternoon') {
        if (degrees >= 10 && degrees <= 18) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (degrees > 18 && degrees <= 24) {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (degrees >= 25) {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        }
    } else {
        outfit = 'Shirt';
        shoes = 'Moccasins';
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}

summerOutfit ([16, 'Morning']);*/

//04. New House
/*
function newHomeGarden(input) {
    let flowerType = input.shift();
    let numOfFlowers = Number(input.shift());
    let budget = Number(input.shift());
    let temperaryPrice, price;

    if (flowerType == 'Roses') {
        price = numOfFlowers * 5;
        if (numOfFlowers > 80){
            temperaryPrice = price * 10/100;
            price -= temperaryPrice;
        }
    } else if (flowerType == 'Dahlias') {
        price = numOfFlowers * 3.80;
        if (numOfFlowers > 90){
            temperaryPrice = price * 15/100;
            price -= temperaryPrice;
        }
    } else if (flowerType == 'Tulips') {
        price = numOfFlowers * 2.80;
        if (numOfFlowers > 80){
            temperaryPrice = price * 15/100;
            price -= temperaryPrice;
        }
    } else if (flowerType == 'Narcissus') {
        price = numOfFlowers * 3;
        if (numOfFlowers < 120){
            temperaryPrice = price * 15/100;
            price += temperaryPrice;
        }
    } else if (flowerType == 'Gladiolus') {
        price = numOfFlowers * 2.50;
        if (numOfFlowers < 80){
            temperaryPrice = price * 20/100;
            price += temperaryPrice;
        }
    }

    let leftMoney = budget - price;

    if (leftMoney >= 0) {
        console.log (`Hey, you have a great garden with ${numOfFlowers} ${flowerType} and ${leftMoney.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(leftMoney*(-1)).toFixed(2)} leva more.`)
    }

}

newHomeGarden(['Gladiolus', 64, 160]);*/

//05. Fishing Boat

/*function fishingBoat(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let fishermen = Number(input.shift());
    let price, discount;

    if (season == 'Spring') {
        price = 3000;
    } else if (season == 'Summer' || season == 'Autumn') {
        price = 4200;
    } else {
        price = 2600;
    }

    if (fishermen <= 6) {
        discount = price * 10 / 100;
        price -= discount;
    } else if (fishermen > 7 && fishermen <= 11) {
        discount = price * 15 / 100;
        price -= discount;
    } else {
        discount = price * 25 / 100;
        price -= discount;
    }

    if (season != 'Autumn' && fishermen % 2 == 0) {
        discount = price * 5 / 100;
        price -= discount;
    }

    let leftMoney = budget - price;
    if (leftMoney >= 0) {
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(leftMoney*(-1)).toFixed(2)} leva.`)
    }

}

fishingBoat([2000, 'Winter', 13]); */

//06. Journey 
/*
function journey(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let place;
    let destination;

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season == 'summer') {
            budget *= (30/100);
            place = 'Camp';
        } else {
            budget *= 70/100;
            place = 'Hotel';
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = 'Balkans';
        if (season == 'summer') {
            budget *= 40/100;
            place = 'Camp';
        } else {
            budget *= 80/100;
            place = 'Hotel';
        }
    } else {
        destination = 'Europe';
        budget *= 90/100;
        place = 'Hotel';
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${budget.toFixed(2)}`);

}

journey([75, 'winter']);*/

//07. Operations Between Numbers
/*
function solve(input){
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let operator = input.shift();
    let result = 0;
    let output = `${num1} ${operator} ${num2}`;
    switch (operator) {
        case "+": result = num1 + num2; output += ` = ${result}`; break;
        case "-": result = num1 - num2; output += ` = ${result}`; break;
        case "*": result = num1 * num2; output += ` = ${result}`; break;
        case "/":
            if (num2 == 0) {
                console.log("Cannot divide " + num1 + " by zero");
             } else {
                result = num1 / num2; output += ` = ${result.toFixed(2)}`;
             } 
            break;
        case "%":
            if (num2 == 0) {
                console.log("Cannot divide " + num1 + " by zero");
             } else {
                result = num1 % num2; output += ` = ${result}`;
             } 
            break;
    }

    if (operator == "+" || operator == "-" || operator == "*"){
        if (result % 2 == 0) {
            output += " - even";
        } else {
            output += " - odd";
        }
        console.log(output);
    } else if (num2 != 0){
        console.log(output);
    }

}

solve([112, 0, "/"]);*/

//08. Hotel room
/*
function hotelRoom (input) {
    let season = input.shift();
    let nights = Number(input.shift());
    let studio, apartment;

    if (season == "May" || season == "October") {
        studio = 50 * nights;
        apartment = 65 * nights;
        if (nights > 7 && nights < 14) {
            studio = studio * 5/100 - studio;
        } else {
            studio = studio * 30/100 -  studio;
            apartment = apartment * 10/100 - apartment;
        }
    } else if (season == "June" || season == "September") {
        studio = 75.20 * nights;
        apartment = 68.70 * nights;
        if (nights > 14) {
            studio = studio * 20/100 - studio;
            apartment = apartment * 10/100 - apartment;
        }
    } else {
        studio = 76 * nights;
        apartment = 77 * nights;
        if (nights > 14) {
            apartment = apartment * (10/100) - apartment;
        }
    }

    if (apartment < 0){
        apartment *= (-1);
    } 
    if (studio < 0) {
        studio *= (-1);
    }

    console.log(`Apartment: ${(apartment).toFixed(2)} lv.`);
    console.log(`Studio: ${(studio).toFixed(2)} lv.`);
}

hotelRoom(["May", 15]);
*/

