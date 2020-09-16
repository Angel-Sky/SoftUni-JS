//01. Smallest of Three Numbers
/*
function findSmallestNum(firstNum, secNum, thirdNum) {
    return Math.min(firstNum, secNum, thirdNum);
}*/

//02. Add and Subtract
/*
function sum(a, b, c) {
    let sumOfFirstTwo = a + b;

    function subtract(sumOfFirstTwo, third) {
        console.log(sumOfFirstTwo - third);
    }
    subtract(sumOfFirstTwo, c)
}

sum(23, 6, 10)*/

//03. Characters in Range
/*
function charInRange(firstChar, secChar) {
    let firstCode = firstChar.charCodeAt(0);
    let secCode = secChar.charCodeAt(0);

    let smaller = Math.min(firstCode, secCode);
    let bigger = Math.max(firstCode, secCode);
    let output = " ";
    for(let i = smaller + 1; i < bigger; i++) {
        let current = String.fromCharCode(i);
        output += current + " ";
    }
    console.log(output.trim())
}

charInRange('a', 'd')*/


//04. Odd And Even Sum
/*
function oddAndEvenSum(num) {
    let number = num.toString();
    let even = 0, odd = 0;
    for (let i = 0; i<number.length; i++) {
        let currentNum = Number(number[i]);
        if (currentNum % 2 == 0) {
            even += currentNum;
        } else {
            odd += currentNum;
        }
    }

    console.log(`Odd sum: ${odd}, Even sum: ${even}`)
}

oddAndEvenSum(3495892137259234)*/

//05. Palindrome Integers
/*
function palidromeIntegers(array) {
    array.forEach(num => {
        console.log(palindrome(num))
    });
     
    function palindrome(num) {
        let numAsString = num.toString();
        let reversed = numAsString.split("").reverse().join("");

        return numAsString === reversed;
    }
}

palidromeIntegers([123,323,421,121])*/

//06. Password Validator
/*
function passwordValidator(password) {
    
    if (checkLength() && checkChars() && checIffDigitsAreAtLeastTwo()) {
        console.log("Password is valid.")
    } else {
        if (!(checkLength())) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!(checkChars())) {
            console.log("Password must consist only of letters and digits")
        } 
        if (!(checIffDigitsAreAtLeastTwo())) {
            console.log("Password must have at least 2 digits");
        }
    }

    function checkLength() {
        return password.length >= 6 && password.length <= 10;
    }

    function checkChars() {
        for (let i = 0; i < password.length; i++) {
            let char = password[i];
            let charCode = char.charCodeAt(0);
           
            if (charCode >= 48 && charCode <= 57 || charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
                    continue;
            } else {
                return false;
            }
        }
        return true;     
    }

    function checIffDigitsAreAtLeastTwo() {
        let counter = 0;
        for (let i = 0; i < password.length; i++) {
            let char = password[i];
            let charCode = char.charCodeAt(0);
            
            if (charCode >= 48 && charCode <= 57) {
                counter++;
            }
        }
        if (counter < 2) {
            return false;
        } else {
            return true;
        }
    } 
}

passwordValidator('login')*/

//07. NxN Matrix
/*
function nxnMatrix(num) {
    let result = "";
    
    for (let i = 0; i < num; i++) {
        result += num + " ";
    }
    for (let j = 1; j < num; j++) {
        console.log(result)
    }
    console.log(result)
}

nxnMatrix(6)*/

//08. Perfect Number

function perfectNum(num) {
    function aliquotSum(n) {
        let sum = 0;
        for (let i = 1; i < n; i++){
            if (n % i == 0){
                sum += i;
            }
        }
        return sum;
    }
    
    if (aliquotSum(num) == num) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
    
}

perfectNum(1236498)

//09. Loading Bar
/*
function loadingBar(percent) {
    let symbolsN = percent / 10;
    let symbols = "%".repeat(symbolsN);
    let dotsN = 10 - symbolsN;
    let dots = ".".repeat(dotsN);

    if (symbolsN == 10) {
        console.log("100% Complete!");
        console.log(`[${symbols}${dots}]`);
    } else {
        console.log(`${percent}% [${symbols}${dots}]`)
        console.log("Still loading...");
    }
}

loadingBar(80)*/

//10. Factorial Division
/*
function solve(num1, num2) {
    function factorial(firstNum) {
        let result = 1;
        for (let i = 1; i<=firstNum; i++) {
            result *= i;
        }
        return result;
    }

    console.log((factorial(num1) / factorial(num2)).toFixed(2));
}

solve(5, 2)*/