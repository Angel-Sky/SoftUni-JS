//------------- Nested Conditional Statements - Lab --------------
//01. Day of Week
/*
function dayOfWeek(input){
    let number = Number(input.shift());
    switch(number){
        case 1: console.log('Monday');
        break;
        case 2: console.log('Tuesday');
        break;
        case 3: console.log('Wednesday');
        break;
        case 4: console.log('Thursday');
        break;
        case 5: console.log('Friday');
        break;
        case 6: console.log('Saturday');
        break;
        case 7: console.log('Sunday');
        break;

        default: console.log('Error');
        break;
    }
}

dayOfWeek([2]);*/

//02. Animal Type
/*
function animalType(input){
    let animal = input.shift();

    switch (animal) {
        case 'dog': 
            console.log('mammal');
            break;
        case 'crocodile':
        case 'tortoise':
        case 'snake':
            console.log('reptile');
            break;
        default: 
            console.log('unknown');
            break;
    }
}*/

//03. Personal Titles
/*
function personalTitles(input) {
    let age = Number(input.shift());
    let gender = input.shift();

    if (gender == 'f') {
        if (age >= 16) {
            console.log('Ms.');
        } else {
            console.log('Miss');
        }
    } else {
         if (age >= 16) {
             console.log('Mr.');
        } else {
             console.log('Master');
        }
    }
}

personalTitles(['s', 10]); */

// 04. Small Shop
/*
function smallShop(input) {
    let product = input.shift();
    let city = input.shift();
    let quantity = Number(input.shift());

    let price; 

    if (city == 'Sofia'){
        if (product == 'coffee') {
            price = quantity * 0.50;
        } else if (product == 'water') {
            price = quantity * 0.80;
        } else if (product == 'beer') {
            price = quantity * 1.20;
        } else if (product == 'sweets') {
            price = quantity * 1.45;
        } else {
            price = quantity * 1.60;
        }
    } else if (city == 'Plovdiv') {
        if (product == 'coffee') {
            price = quantity * 0.40;
        } else if (product == 'water') {
            price = quantity * 0.70;
        } else if (product == 'beer') {
            price = quantity * 1.15;
        } else if (product == 'sweets') {
            price = quantity * 1.30;
        } else {
            price = quantity * 1.50;
        }
    } else {
        if (product == 'coffee') {
            price = quantity * 0.45;
        } else if (product == 'water') {
            price = quantity * 0.70;
        } else if (product == 'beer') {
            price = quantity * 1.10;
        } else if (product == 'sweets') {
            price = quantity * 1.35;
        } else {
            price = quantity * 1.55;
        }
    }
    console.log(price);
}

smallShop(['coffee', 'Varna', '2']) */

//05. Number in Range
/*
function numInRange(input){
    let number = Number(input.shift());

    if (number >= -100 && number <= 100 && number !== 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

numInRange([-10])*/

//06. Fruit or Vegetable
/*
function fruitOrVegetable(input) {
    let product = input.shift();

    if (product == 'banana' || product == 'kiwi' || product == 'apple' || product == 'cherry' || product == 'lemon' || product == 'grapes') {
        console.log ('fruit');
    } else if (product == 'tomato'|| product == 'cucumber' || product == 'pepper' || product == 'carrot') {
        console.log ('vegetable');
    } else {
        console.log('unknown');
    }
}*/

//07. Invalid Number
/*
function invalidNumber(input) {
    let num = Number(input.shift());

    if (num < 100 && num !=0 || num > 200 && num !=0){
        console.log('invalid');
    }
}

invalidNumber([0]);*/

//08. Fruit Shop 
/*
function fruitShop(input) {
    let fruit = input.shift();
    let day = input.shift();
    let quantity = Number(input.shift());

    if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {
        switch (fruit) {
            case 'banana': price = quantity * 2.50; console.log(price.toFixed(2)); break;
            case 'apple': price = quantity * 1.20; console.log(price.toFixed(2)); break;
            case 'orange': price = quantity * 0.85; console.log(price.toFixed(2)); break;
            case 'grapefruit': price = quantity * 1.45; console.log(price.toFixed(2)); break;
            case 'kiwi': price = quantity * 2.70; console.log(price.toFixed(2)); break;
            case 'pineapple': price = quantity * 5.50; console.log(price.toFixed(2)); break;
            case 'grapes': price = quantity * 3.85; console.log(price.toFixed(2)); break;
            default: console.log('error'); break;
        }   
       //console.log(price.toFixed(2));
    } else if (day == 'Saturday' || day == 'Sunday'){
        switch (fruit) {
            case 'banana': price = quantity * 2.70; console.log(price.toFixed(2)); break;
            case 'apple': price = quantity * 1.25; console.log(price.toFixed(2)); break;
            case 'orange': price = quantity * 0.90; console.log(price.toFixed(2)); break;
            case 'grapefruit': price = quantity * 1.60; console.log(price.toFixed(2)); break;
            case 'kiwi': price = quantity * 3.00; console.log(price.toFixed(2)); break;
            case 'pineapple': price = quantity * 5.60; console.log(price.toFixed(2)); break;
            case 'grapes': price = quantity * 4.20; console.log(price.toFixed(2));  break;
            default: console.log('error'); break;
        }
       // console.log(price.toFixed(2));
    } else {
        console.log('error')
    }
}


fruitShop(['apple', 'Saturday', 2]);*/

//09. Trade Commissions
/*
function tradeCommissions(input) {
    let city = input.shift();
    let sales = Number(input.shift());

    if (city == 'Sofia') {
        if (sales >= 0 && sales <= 500) {
            console.log((sales * 5/100).toFixed(2));
        } else if (sales > 500 && sales <= 1000){
            console.log((sales * 7/100).toFixed(2));
        } else if (sales >1000 && sales <=10000){
            console.log((sales * 8/100).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales * 12/100).toFixed(2));
        } else {
            console.log ('error');
        }

    } else if (city == 'Varna') {
        if (sales >= 0 && sales <= 500) {
            console.log((sales * 4.5/100).toFixed(2));
        } else if (sales > 500 && sales <= 1000){
            console.log((sales * 7.5/100).toFixed(2));
        } else if (sales >1000 && sales <=10000){
            console.log((sales * 10/100).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales * 13/100).toFixed(2));
        } else {
            console.log ('error');
        }
        
    } else if (city == 'Plovdiv') {
        if (sales >= 0 && sales <= 500) {
            console.log((sales * 5.5/100).toFixed(2));
        } else if (sales > 500 && sales <= 1000){
            console.log((sales * 8/100).toFixed(2));
        } else if (sales >1000 && sales <=10000){
            console.log((sales * 12/100).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales * 14.5/100).toFixed(2));
        } else {
            console.log ('error');
        }
        
    } else {
        console.log ('error');
    }
}

tradeCommissions([
    'Varna', 500
])*/

//10. Ski Trip *
/*
function skiTrip(input) {
    let days = Number(input.shift());
    let typeOfRoom = input.shift();
    let grade = input.shift();

    let nights = days - 1;
    let price, total;
    let discount = 0;

    if (typeOfRoom == 'room for one person') {
        price = nights * 18;
    } else if (typeOfRoom == 'apartment') {
        price = nights * 25;
        if (nights < 10) {
            discount = price*30/100;
        } else if (nights >= 10 && nights <= 15) {
            discount = price*35/100;
        } else if (nights > 15) {
            discount = price*50/100;
        }
    } else if (typeOfRoom == 'president apartment') {
        price = nights * 35;
        if (nights < 10) {
            discount = price*10/100;
        } else if (nights >= 10 && nights <= 15) {
            discount = price*15/100;
        } else if (nights > 15) {
            discount = price*20/100;
        }
    }

    let newPrice = price - discount;
    if (grade == 'positive') {
        total = newPrice + (newPrice * 25/100);
    } else {
        total = newPrice - (newPrice * 10/100);
    }

    console.log(total.toFixed(2));
}

skiTrip ([ "12", "room for one person", "positive" ]);*/



