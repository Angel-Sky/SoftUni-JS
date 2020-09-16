//01. Multiply Number by 2
/*
function solve (num) {
    console.log(num * 2);
}
*/

//02. Excellent grade

/* function excellentGrade (grade) {

    if (grade >= 5.5){
        console.log("Excellent")
    } else {
        console.log("Not excellent")
    }
}
*/
//03. Numbers from 1 to 5
/*
function solve() {
    for(let i = 1; i<=5; i++){
        console.log(i)
    }
}
*/
//04. Numbers from N to 1
/*
function solve (n) {
    for (let i = n; i>=1; i--){
        console.log(i);

    }
}
solve(5)*/

//05. Numbers from M to N
/*
function solve(m, n) {
    for (let i = m; i>=n; i--) {
        console.log(i);
        
    }
}

solve(15, 10)*/


//06. Student Information
// function studentInfo(name, age, grade) {
//     console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}.`);
// }

//studentInfo('Ivam', 15, 5.55)
/*
function month(number){ ??
    switch(number){
        case 1: console.log('January');
        break;
        case 2: console.log('February');
        break;
        case 3: console.log('March');
        break;
        case 4: console.log('April');
        break;
        case 5: console.log('May');
        break;
        case 6: console.log('June');
        break;
        case 7: console.log('July');
        break;
        case 8: console.log('August');
        break;
        case 9: console.log('September');
        break;
        case 10: console.log('Octomber');
        break;
        case 11: console.log('November');
        break;
        case 12: console.log('December');
        break;

        default: console.log('Error!');
        break;
    }
}

month(5)*/

//08. Foreign Languages
/*
function languages(country) {
    switch(country){
        case "USA":
        case "England":
            console.log("English");
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            console.log("Spanish");
            break;
        default:
            console.log("unknown");
            break;
    }
}

languages("England")*/

//09. Theatre Promotions ??
/*
function theater (day, age) {
    let price = 0;

    switch(day) {
        case "Weekday":
            if (age > 18 && age <=64) {
                price = 18;
            } else {
                price = 12;
            }
            break;
        case "Weekend":
            if (age > 18 && age <=64) {
                price = 20;
            } else {
                price = 15;
            }
            break;
        case "Holiday":
            if (0<=age && age <=18) {
                price = 5;
            } else if (age > 18 && age <=64) {
                price = 12;
            } else {
                price = 10;
            }
            break;
    }

    if (age < 0) {
        console.log("Error!");
    } else {
        console.log(price + "$")
    }
}

theater('Weekday', 42)*/

//10. Divisible by 3
/*
function solve() {
    for(let i = 1; i<=100; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

solve()*/

//11. Sum of Odd Numbers
/*
function sumOddNums(number) {
    let counter = 1, sum = 0;

    while (counter <= number*2) {
        if (counter % 2 != 0) {
            console.log(counter);
            sum += counter;
        }
        counter++;
    }

    console.log("Sum: " + sum);

}

sumOddNums(11)*/