//01. Clock
/*
function clock () {
    for (let h = 0; h < 24; h++) {
        for (let min = 0; min < 60; min++){
            console.log(`${h}:${min}`)
        }
    }
}

clock();*/

//02. Multiplication Table
/*function table() {
    for (let num1 = 1; num1 <=10; num1++) {
        for (let num2 = 1; num2 <= 10; num2++){
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
        }
    }
}

table();*/

//03. Combinations
/*
function combinations(input) {
    let n = +input.shift();
    let validCombinations = 0;

    for (let i = 0; i <= n; i++){
        for (let j = 0; j <= n; j++){
            for (let k = 0; k <= n; k++) {
                let result = i + j + k;
                if (result == n) {
                    validCombinations++;
                }
            }
        }
    }
    console.log(validCombinations);
}

combinations([25])*/


//04. Sum of Two Numbers
/*
function magicNumbers (input){
    let start = +input.shift();
    let end = +input.shift();
    let magicNum = +input.shift();
    let loop = 0;
    let isFound = false;
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            loop++;
            if (i + j == magicNum) {
                console.log(`Combination N:${loop} (${i} + ${j} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${loop} combinations - neither equals ${magicNum}`)
    }
}

magicNumbers([23, 24, 20])*/

//06. Building
/*
  function building(input) {
      let floors = +input.shift();
      let rooms = +input.shift();

      for (let i = floors; i >= 1; i--) {
          let output = '';
          for (let j = 0; j < rooms; j++) {
              if (i == floors) {
                output += `L${i}${j} `;
              } else if (i % 2 == 0) {
                output += `O${i}${j} `;
              } else {
                output += `A${i}${j} `;
              }
           
          }
          console.log(output)
      }
  }

  building([6, 4])*/



//05. Travelling
/*
function travelling (input) {
    let destination = input.shift();

    while (destination !== "End") {
        let minBudget = +input.shift();
        let savedMoney = 0;
        while (savedMoney <= minBudget) {
           let enteredMoney = +input.shift();
          // if (!isNaN(enteredMoney)) {
          //      enteredMoney = Number(enteredMoney);
                savedMoney += enteredMoney;

                if (savedMoney >= minBudget) {
                    console.log("Going to " + destination + "!");
                    break;
                }
            //}
        }

        if (isNaN(destination)) {
            destination = input.shift();
        } 
    }

}

travelling([
    'France',   '2000',  '300',
    '300',      '200',   '400',
    '190',      '258',   '360',
    'Portugal', '1450',  '400',
    '400',      '200',   '300',
    '300',      'Egypt', '1900',
    '1000',     '280',   '300',
    '500',      'End',   ''
  ]);*/


//07. Cinema Tickets
/*
function cinema(input) {
    let movie = input.shift();
    let totalSeats = +input.shift();
    let allMoviesSeats = 0; currentSeats = 0; standardSeats = 0; studentSeats = 0; kidsSeats = 0; totalStandardSeats = 0; totalStudentsSeats = 0; totalKidsSeats = 0;

    while (movie !== "Finish") {
        allMoviesSeats += currentSeats;

        currentSeats = 0; studentSeats = 0; studentSeats = 0; kidsSeats = 0;
        while (currentSeats < totalSeats) {
            let ticketType = input.shift();
            if (ticketType == "standard") {
                standardSeats++;
            } else if (ticketType == "student") {
                studentSeats++;
            } else if (ticketType == "kid") {
                kidsSeats++;
            } else {
                break;
            }
            currentSeats++;
        }

        let seatsPercent = (currentSeats / totalSeats) * 100;
        console.log(`${movie} - ${seatsPercent.toFixed(2)}% full.`);
        totalStandardSeats += standardSeats;
        totalStudentsSeats += studentSeats;
        totalKidsSeats += kidsSeats;
        movie = input.shift();
        totalSeats = +input.shift();

    }
    allMoviesSeats += currentSeats;
    if (movie == "Finish") {
        let studenPercent = (totalStudentsSeats / allMoviesSeats) * 100;
        let kidsPercent = (totalKidsSeats / allMoviesSeats) * 100;
        let standardPercent = 100 - (studenPercent + kidsPercent);
        console.log(`Total tickets: ${allMoviesSeats}`);
        console.log(`${studenPercent.toFixed(2)}% student tickets.`);
        console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
        console.log(`${kidsPercent.toFixed(2)}% kids tickets.`);
    }
}

cinema([
    'The Matrix', '20',
    'student',    'standard',
    'kid',        'kid',
    'student',    'student',
    'standard',   'student',
    'End',        'The Green Mile',
    '17',         'student',
    'standard',   'standard',
    'student',    'standard',
    'student',    'End',
    'Amadeus',    '3',
    'standard',   'standard',
    'standard',   'Finish'
  ])*/
