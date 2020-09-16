//01. Read Text
/*
function read(input){
    let text = input.shift();

    while (text !== "Stop") {
        text = input.shift();
    }
}*/


// 02. Password
/*
function pass(input) {
    let username = input.shift();
    let password = input.shift();
    let enteredPass = input.shift();

    while (enteredPass !== password) {
        enteredPass = input.shift();
    }

    console.log(`Welcome ${username}!`);
}*/

//03. Sum  Numbers
/*
function sumNum(input){
    let number = Number(input.shift());
    let sum = 0;
    let counter = 0;
    while (number > counter) {

        if (number == "Stop"){
            break;
        }
        sum += number;
        number = Number(input.shift());
        counter++;

    }

    console.log(sum);
}

sumNum(["10", "20", "30", "45", "Stop"])*/

//04. Sequence 2k+1
/*
function solve(input){
    let numbers = Number(input.shift());
    let i = 1;

    while (i<=numbers) {
        console.log(i);
        i = i * 2 + 1;
    }
    
}

solve([15])*/

//05. Account Balance
/*
function accountBalance(input){
    let n = Number(input.shift());
    let counter = 0;
    let balance = 0;

    while (n > counter) {
        let amount = Number(input.shift());

        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log("Increase: " + amount.toFixed(2));
        balance += amount;
        counter++;
    }

    console.log("Total: " + balance.toFixed(2))

}

accountBalance([5, 120, 45.55, -150])*/

//06. Max Number & 07. Min Number
/*
function maxNum (input) {
    let n = Number(input.shift());

    let counter = 1;
    let minNum = Number.MAX_SAFE_INTEGER;

    while (counter <= n) {
        let currentNum = Number(input.shift()); 
        if (currentNum < minNum) {
            minNum = currentNum;
        }
        counter ++;
    }
    console.log(minNum);
}

maxNum([ '3', '-10', '20', '-30'])*/

//08. Graduation
/*
function graduation (input) {
    let name = input.shift();
    let allGrades = 0;
    let counter = 1;
    while (counter <= 12) {
        let grade = +input.shift();
        if (grade >= 4) {
            allGrades += grade;
            counter ++;
        }
        
    }
    let averageGrade = allGrades/12;

    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
}

graduation([
    'Pesho', '4',    '5.5',
    '6',     '5.43', '4.5',
    '6',     '5.55', '5',
    '6',     '6',    '5.43',
    '5',     '6'
  ])*/

  //09. Graduation pt. 2
/*
  function graduation (input) {
    let name = input.shift();
    let allGrades = 0;
    let year = 1;
    let notPassedYears = 0;
    while (year <= 12) {
        let grade = +input.shift();
        if (grade >= 4) {
            allGrades += grade;
            year ++;
        } else {
            notPassedYears++;
        }

        if (notPassedYears > 1) {
            break;
        }
        
    }
    if (notPassedYears > 1) {
        console.log(`${name} has been excluded at ${year} grade`);
    } else {
        let averageGrade = allGrades/12;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
    
}

graduation([
    'Mimi', '5', '6',
    '5',    '6', '5',
    '6',    '6', '2',
    '3'
  ])*/