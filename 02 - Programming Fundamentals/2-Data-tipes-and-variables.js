//1. Sum Digits
/*
function sumDigits(number) {
    let string = String(number);
    let sum = 0;
    for(let i = 0; i<string.length; i++){
        let num = Number(string[i]);
        sum += num;
    }
    console.log(sum)
    
}

sumDigits(245678);

//02. Chars to String

function solve(a, b, c) {
    console.log(`${a}${b}${c}`)
}

solve('s', 'k', 'z')

//03. Town Info

function printInfo (townName, population, area) {
    console.log(`Town ${townName} has population of ${population} and area ${area} square km.`);
}

//04. Convert Meters to Kilometres

function convert(m) {
    let km = m/1000;
    console.log(km.toFixed(2))
}

convert(798);

//05. Pounds to Dollars

function poundsToDollars(pounds) {
    let dolars = pounds * 1.31;
    console.log(dolars.toFixed(3))
}

poundsToDollars(80)

//07. Lower or Upper

function lowerOrUpper(char) {
    if (char === char.toUpperCase()) {
        console.log("upper-case");
    } else {
        console.log("lower-case")
    }
}

lowerOrUpper("A")*/

//08. Calculator 
/*
function calculator (number1, operator, number2){
    switch(operator){
        case "+":
            console.log((number1+number2).toFixed(2));
            break;
        case "-":
            console.log((number1-number2).toFixed(2));
            break;
        case "*":
            console.log((number1*number2).toFixed(2));
            break;
        case "/":
            console.log((number1/number2).toFixed(2));
            break;
    }
}

calculator(25.5, '-', 3)*/

//09. Gladiator Expenses
/*
function gradiatorExpress(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenHelmets = 0, brokenSwords = 0, brokenShields = 0, brokenArmor = 0;
    let j = 0;
    for (let i = 1; i <= lostFights; i++) {
        let isTheSameFightHelmet = false, isTheSameFightSword = false;
        if (i % 2 == 0) {
            brokenHelmets++;
            isTheSameFightHelmet = true;
        }

        if (i % 3 == 0) {
            brokenSwords++;
            isTheSameFightSword = true;
        }

        if (isTheSameFightSword==true && isTheSameFightHelmet==true) {
            brokenShields++;
        }
        
        if (brokenShields != j && brokenShields % 2 == 0) {
            brokenArmor++;
            j += 2;
        }
        
    }

    let total = brokenHelmets * helmetPrice + brokenSwords * swordPrice + brokenShields * shieldPrice + brokenArmor * armorPrice;
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`); 
}

gradiatorExpress(23,
    12.50,
    21.50,
    40,
    200)*/

//10. Spice Must Flow 

function spiceMustFlow(spice) {
    let days = 1;  
    let yield = spice; 
    let totalYield = 0;

    while (spice > 100) {
        yield = spice;
        yield -= 26;
        totalYield += yield;
        days++;
        spice -= 10;
    }
    //totalYield -= 26;
    console.log(days);
    console.log(totalYield);
}

spiceMustFlow(450); //8938