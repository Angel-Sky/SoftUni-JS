//01. Number Pyramid
/*
function pyramid (input) {
    let n = +input.shift();

    let current = 1;
    let isBigger = false;
    let row = "";

    for (let i = 1; i<=n; i++) {
        for (let j = 1; j <= i; j++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            row += current + " ";
            current++;
            
        }
        console.log(row);
        row = "";
        if (isBigger) {
            break;
        }
    }
}

pyramid([7])*/

//02. Equal Sums Even Odd Position
/*
function solve(input) {
    let firstNum = +input.shift();
    let secNum = +input.shift();
    let output = "";

    for (let i = firstNum; i <= secNum; i++) {
        let numByNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < numByNum.length; j++) {
            let current = numByNum.charCodeAt(j);
            if (j % 2 == 0) {
                evenSum += current;
            } else {
                oddSum += current;
            }
        }

        if (oddSum == evenSum) {
            output += i + " ";
        }
    }
    console.log(output)

}

solve([100000, 100050])*/

//03. Sum Prime Non Prime
/*
function solve2(input) {
    let number = input.shift();
    let sumOfPrimeNumber = 0;
    let sumOfNoPrimeNumber = 0;

    while (number !== "stop") {
        number = Number(number);
        let isPrime = true;
        if (number < 0) {
            console.log("Number is negative.");
            number = input.shift();
            continue;
        }
        if (number === 1) {
            isPrime = true;
        }
        let maxDelimiter = Math.floor(Math.sqrt(number));
        for (let i = 2; i <= maxDelimiter; i++) {
            if (number % i == 0) {
               
                isPrime = false;
            }
        }
        if (isPrime) {
            sumOfPrimeNumber += number;
        } else {
            sumOfNoPrimeNumber += number;
        }
        number = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${sumOfPrimeNumber}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNoPrimeNumber}`)
}

solve2(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"])*/

    //04. Train The Trainers
/*
    function trainTheTrainers(input) {
        let jury = +input.shift();
        let presentationName = input.shift();
        
        let allAverageGrades = 0;
        let presentationCounter = 0;
        while (presentationName !== "Finish") {
            let averageGrade = 0;
            let grades = 0;
            for (let i = 0; i < jury; i++) {
                let mark = +input.shift();
                grades += mark;
            }
            averageGrade = grades/jury;
            console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);
            allAverageGrades += averageGrade;
            presentationCounter++;
            presentationName = input.shift();
        }

        if (presentationName == "Finish") {
            console.log(`Student's final assessment is ${(allAverageGrades/presentationCounter).toFixed(2)}.`)
        }
    }

    trainTheTrainers([
        '3',    'Arrays',
        '4.53', '5.23',
        '5.00', 'Lists',
        '5.83', '6.00',
        '5.42', 'Finish'
      ])*/


//05. Password Generator
/*
function password(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());
    let result = "";
    for (let a = 1; a < n; a++){
        for (let b = 1; b < n; b++) {
            for (let c = 97; c < 97 + l; c++) {
                let cChar = String.fromCharCode(c);
                for (let d = 97; d < 97 + l; d++) {
                    let dChar = String.fromCharCode(d);
                    for (let e = 1; e <= n; e++) {
                        if (a < e && b < e) {
                            result += a +""+ b + cChar + dChar + e + " "; 
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}
*/

//06. Special Numbers

function specialNumbers(input) {
    let n = +input.shift();
    let output = "";

    for (let a = 1; a <= 9; a++){
        for (let b = 1; b <= 9; b++){
            for (let c = 1; c <= 9; c++){
                for (let d = 1; d <= 9; d++){
                    if (n % a == 0 && n % b == 0 && n % c == 0 && n % d == 0){
                        output += "" + a + b + c + d + " ";
                    }
                }
            }
        } 
    }
    console.log(output);
}

specialNumbers([3])
