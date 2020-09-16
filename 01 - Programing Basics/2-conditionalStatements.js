//-----------------Conditional Statements - Lab------------
// 01. Excellent Result
/*
function excellentResult (input) {
    let grade = input.shift();

    if (grade >=5.50) {
        console.log("Excellent!");
    }
}

excellentResult([6]);*/

// 02. Greater Number
/*
function greaterNumber(input) {
    let one = Number(input.shift());
    let two = Number(input.shift());

    if (one>two) {
        console.log(one);
    } else {
        console.log(two);
    }
}

greaterNumber([6, 10]);*/

//03. Even or Odd

/*function evenOrrOdd(input) {
    let num = Number(input.shift());
 
    if (num % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

evenOrrOdd([6]);*/

//04. Number 1...9 to Text
/*
function numberToText(input) {
    let num = Number(input.shift());
 
    if (num  == 1) {
        console.log("one");
    } else if (num  == 2){
        console.log("two");
    } else if (num  == 3){
        console.log("three");
    } else if (num  == 4){
        console.log("four");
    } else if (num  == 5){
        console.log("five");
    } else if (num  == 6){
        console.log("six");
    } else if (num  == 7){
        console.log("seven");
    } else if (num  == 8){
        console.log("eight");
    } else if (num  == 9){
        console.log("nine");
    } else {
        console.log("number too big");
    }
}

numberToText([334]);*/

// 05. Number 100...200
/*
function lessBetweenGreater (input){
    let num = Number(input.shift());

    if (num < 100) {
        console.log("Less than 100");
    } else if (num >= 100 && num <= 200) {
        console.log("Between 100 and 200");
    } else if (num > 200) {
        console.log("Greater than 200");
    }
}

lessBetweenGreater([100]);*/

//06. Password Guess
/*
function passwordGuess(input) {
    let password = input.shift();

    if (password == 's3cr3t!P@ssw0rd'){
        console.log ('Welcome');
    } else {
        console.log ("Wrong password!");
    }
}

passwordGuess(['s3cr3t!P@ssw0rd']);*/

//07. Area of Figures
/*
function figurs(input) {
    let figure = input.shift();
    let a = input.shift();
    let b = input.shift();

    if (figure == 'square') {
        console.log((a*a).toFixed(3));
    } else if (figure == 'rectangle') {
        console.log((a*b).toFixed(3));
    } else if (figure == 'circle') {
        let result = Math.PI * a * a;
        console.log(result.toFixed(3));
    } else if (figure == 'triangle') {
        console.log((a*b/2).toFixed(3));
    } 
}

figurs(['triangle', 4.5, 7.5]);*/

//08. Toy Shop
/*
function toyShop(input) {
    let trip = Number(input.shift());
    let puzzles = Number(input.shift());
    let dolls = Number(input.shift());
    let bears = Number(input.shift());
    let minions = Number(input.shift());
    let trucks = Number(input.shift());

    let sum = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
    let toys = puzzles + dolls + bears + minions + trucks;

    if (toys >= 50) {
        sum = sum - (sum*(25/100));
    }

    let earnedMoney = sum - (sum*(10/100));
    let leftMoney = earnedMoney - trip;
    let neededMoney = trip - earnedMoney;

    if (earnedMoney>=trip){
        console.log("Yes! "+ leftMoney.toFixed(2) + " lv left.")
    } else {
        console.log("Not enough money! " + neededMoney.toFixed(2) + " lv needed.")
    }
}

toyShop([40.8, 20, 25, 30, 50, 10]);
//toyShop([320, 8, 2, 5, 5, 1]);*/

//----------------- Conditional Statements - Exercise ------------

//01. Sum Seconds
/*
function sumSeconds(input){
    let firstTime = Number(input.shift());
    let secTime = Number(input.shift());
    let thirthTime = Number(input.shift());

    let totalTime = firstTime + secTime + thirthTime;

    let min = Math.floor(totalTime/60);
    let sec = totalTime % 60;

    if (sec < 10){
        console.log(`${min}:0${sec}`);
    } else {
        console.log(`${min}:${sec}`);
    }
    
}

sumSeconds([14, 12, 10]);*/

//02. Bonus Score
/*
function bonusScore(input){
    let score = Number(input.shift());
    let bonus = 0.0;

    if (score <= 100){
        bonus = 5;
    } else if (score > 100 && score < 1000){
        bonus = 0.2 * score;
    } else if (score > 1000) {
        bonus = 0.1 * score;
    }

    if (score % 2 == 0){
        bonus += 1;
    } else if (score % 10 ==5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(bonus+score);

}
bonusScore([15875]);*/

//03. Speed Info
/*
function speedInfo(input){
    let speed = Number(input.shift());

    if (speed <= 10) {
        console.log('slow');
    } else if (speed > 10 && speed <=50) {
        console.log('average');
    } else if (speed > 50 && speed <=150) {
        console.log('fast');
    } else if (speed > 150 && speed <= 1000) {
        console.log('ultra fast');
    } else {
        console.log('extremely fast');
    } 
}

speedInfo([100]);*/

//04. Metric Converter
/*
function metricConv(input) {
    let num = Number(input.shift());
    let from = input.shift();
    let to = input.shift();

    if (from == 'm' && to == 'cm'){
        result = num*100;
    } else if (from == 'm' && to == 'mm'){
        result = num*1000;
    }

    if (from == 'cm' && to == 'm'){
        result = num/100;
    } else if (from == 'cm' && to == 'mm'){
        result = num*10;
    }

    if (from == 'mm' && to == 'm'){
        result = num/1000;
    } else if (from == 'mm' && to == 'cm'){
        result = num/10;
    }

    console.log(result.toFixed(3));
}

metricConv([45, 'cm', 'mm']);*/

//05. Time + 15 Minutes
/*
function afterFifteenMin(input){
    let hour = Number(input.shift());
    let min = Number(input.shift());

    let minsPlus15 = min + 15;
    let newMin = minsPlus15%60;

    if (minsPlus15 >= 60 ){
        hour +=1;
    }
    if (hour > 23){
        hour = 0;
    }
    if (newMin <= 9){
        newMin = `0${newMin}`;
    }
    console.log(`${hour}:${newMin}`);
}

afterFifteenMin([23, 45]);*/

//06. Godzilla vs. Kong
/*
function budget(input){
    let budget = Number(input.shift());
    let statists = Number(input.shift());
    let clothes = Number(input.shift());

    let decor = 0.1*budget;

    if (statists>=150){
        clothes = clothes - (0.1*clothes);
    }

    let budgetMoney = (clothes * statists) + decor;
    let leftMoney = budget - budgetMoney;
    let neededMoney = budgetMoney - budget;

    if (budgetMoney <= budget) {
        console.log('Action!');
        console.log("Wingard starts filming with "+ leftMoney.toFixed(2) + " leva left.");
    } else if (budgetMoney > budget) {
        console.log('Not enough money!');
        console.log("Wingard needs " + neededMoney.toFixed(2) + " leva more.");
    }
}
budget([9587.88, 222, 55.68]);*/

//07. World Swimming Record
/*
function wordRecord(input){
    let record = Number(input.shift());
    let distance = Number(input.shift());
    let secPerMether = Number(input.shift());

    let personalTime = distance*secPerMether;
    let slowdown = Math.floor((distance/15))*12.5;
    let totalTime = personalTime + slowdown;
    let neededSec = totalTime - record;

    if (totalTime < record){
        console.log("Yes, he succeeded! The new world record is "+ totalTime.toFixed(2) + " seconds.");
    } else {
        console.log("No, he failed! He was " + neededSec.toFixed(2) + " seconds slower.");
    }
}

wordRecord([55555.67, 3017, 5.03]);*/

//08. Scholarship
/*
function schoolScholarship(input){
    let profit = Number(input.shift());
    let averageGrade = Number(input.shift());
    let minSalary = Number(input.shift());

    let socialSch = minSalary*(35/100);
    let excellentSch = averageGrade*25;

    if (averageGrade >= 5.50 && profit < minSalary) {
        if (socialSch > excellentSch) {
            console.log(`You get a Social scholarship ${Math.floor(socialSch)} BGN`);
        } else {
            console.log(`You get a scholarship for excellent results ${Math.floor(excellentSch)} BGN`);
        } 
    } else if (averageGrade >= 5.50 && profit >= minSalary) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentSch)} BGN`);
    } else if (averageGrade > 4.50 && profit < minSalary) {
        console.log(`You get a Social scholarship ${Math.floor(socialSch)} BGN`);
    } else { 
        console.log("You cannot get a scholarship!");
    }
}

//schoolScholarship([100.00, 5.65, 420.00]);
*/



