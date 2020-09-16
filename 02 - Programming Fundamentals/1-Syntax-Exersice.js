//01. Ages
/*
function ages(age) {
    if (age >= 0 && age <= 2) {
        console.log("baby");
    } else if (age >= 3 && age <= 13) {
        console.log("child");
    } else if (age >= 14 && age <= 19) {
        console.log("teenager");
    } else if (age >= 20 && age <= 65) {
        console.log("adult");
    } else if (age >= 66) {
        console.log("elder");
    }
}*/

//02. Rounding
/*
function rounding(number, precision) {
    if (precision > 15) {
        precision = 15;
    }

    console.log(parseFloat(number.toFixed(precision)));
}

rounding (3.140000567564634545, 4)*/

//03. Division
/*
function division(num) {
    if (num % 10 == 0) {
        console.log("The number is divisible by 10");
    } else if (num % 7 == 0) {
        console.log("The number is divisible by 7");
    } else if (num % 6 == 0) {
        console.log("The number is divisible by 6");
    } else if (num % 3 == 0) {
        console.log("The number is divisible by 3");
    } else if (num % 2 == 0) {
        console.log("The number is divisible by 2");
    } else {
        console.log("Not divisible");
    }
}

division(9);*/

//04. Vacation
/*
function vacation (groupOfPeople, typeOfTheGroup, day) {
    let price = 0;
    switch (typeOfTheGroup) {
        case "Students":
            if (day === "Friday") {
                price += groupOfPeople * 8.45;
            } else if (day === "Saturday") {
                price += groupOfPeople * 9.80;
            } else if (day === "Sunday") {
                price += groupOfPeople * 10.46;
            }

            if (groupOfPeople >= 30) {
                price -= price * 15/100;
            }
            break;
        case "Business":
            if (groupOfPeople >= 100) {
                groupOfPeople -= 10;
            }

            if (day === "Friday") {
                price += groupOfPeople * 10.90;
            } else if (day === "Saturday") {
                price += groupOfPeople * 15.60;
            } else if (day === "Sunday") {
                price += groupOfPeople * 16;
            }
            break;
        case "Regular":
            if (day === "Friday") {
                price += groupOfPeople * 15;
            } else if (day === "Saturday") {
                price += groupOfPeople * 20;
            } else if (day === "Sunday") {
                price += groupOfPeople * 22.50;
            }

            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                price -= price * 5/100;
            }
            break;
    }

    console.log("Total price: " + price.toFixed(2));
}

vacation(40, "Regular", "Saturday")*/

//05. Leap Year
/*
function leapYear(year) {
    if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

leapYear(4)*/

//06. Print And Sum
/*
function printAndSum(num1, num2) {
    let result = "";
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        result += i + " ";
        sum += i;
    }

    console.log(result);
    console.log("Sum: " + sum);
}

printAndSum (5, 10)*/

//07. Triangle Of Numbers
/*
function triangleOfNumbers(num) {
    for (let i = 1; i <= num; i++) {
        console.log(`${i} `.repeat(i));
    }
}

triangleOfNumbers(5);*/

//08. Multiplication Table
/*
function multiplicationTable(num) {
    let result = "";
    for (let i = 1; i<=10; i++) {
        result = num +" X " + i + " = " + num * i;
        console.log(result);
    }
}
multiplicationTable(5)*/

//09. Login
/*
function login (input) {
    let username = input.shift();
    let correctPassword = username.split("").reverse().join("");
    let password = input.shift();
    let counter = 1;
    while (password !== correctPassword) {
        if (counter >= 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log("Incorrect password. Try again.");
        counter++;
        password = input.shift();
    }

    if (password === correctPassword) {
        console.log(`User ${username} logged in.`);
    }
}

login([ 'sunny', 'rainy', 'cloudy', 'sunny', 'not sunny' ]
)
*/

function solve(input) {
    let a = input.split('').reverse().join('');
    console.log(a)
}

solve('ivan')