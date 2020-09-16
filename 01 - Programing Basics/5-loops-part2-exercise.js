//01. Old Books
/*
function oldBooks (book) {
    let searchedBook = book.shift();
    let totalBooks = Number(book.shift());

    let books = 0;
    let isTheBookFound = false;

    while(books < totalBooks) {
        let currentBook = book.shift();
        if (currentBook == searchedBook) {
            isTheBookFound = true;
            break;
        }
        books++;
    }

    if (isTheBookFound == false) {
        console.log("The book you search is not here!");
        console.log("You checked " + totalBooks + " books.")
    } else {
        console.log(`You checked ${books} books and found it.`);
    }
}

oldBooks(["Troy",
8,
"Stronger",
"Life Style",
"Troy"])*/

//02. Exam Preparation
/*function examPreparation(input) {
    let maxPoorGrades = Number(input.shift());
    let taskName = input.shift();
    let poorGrade = 0;
    let sumGrades = 0;
    let gradeCounter = 0;
    let lastTaskName = "";
    let flag = false;

    while ("Enough" !== taskName) {
        lastTaskName = taskName;
        let grade = Number(input.shift());
        if (grade <= 4) {
            poorGrade++;
        }

        if (maxPoorGrades == poorGrade) {
            console.log(`You need a break, ${maxPoorGrades} poor grades.`);
            flag = true;
            break;
        }

        sumGrades += grade;
        gradeCounter++;
        taskName = input.shift();
    }
    let averageGrade = sumGrades / gradeCounter;
    if (!flag) {
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCounter}`);
        console.log(`Last problem: ${lastTaskName}`);
    }
    
}

examPreparation([
    '3', 'Money',
    '6', 'Story',
    '4', 'Spring Time',
    '5', 'Bus',
    '6', 'Enough',
    ''
  ])*/

// 06. Cake
/*
 function cake (input) {
     let length = Number(input.shift());
     let width = Number(input.shift());

     let cakeArea = length * width;

     while (cakeArea > 0) {
        let data = input.shift();
        if (data == "STOP") {
            break;
        } 
        let cakePieces = Number(data);
        cakeArea -= cakePieces;
     }
     if(cakeArea < 0) {
        console.log("No more cake left! You need " + Math.abs(cakeArea) + " pieces more.")
     } else {
         console.log(cakeArea + " pieces are left.")
     }
 }

 cake([
    '10', '10',
    '20', '20',
    '20', '20',
    '21'
  ])*/

//03. Vacation
/*
  function vacation (input){
    let neededTripMoney = +input.shift();
    let availableMoney = +input.shift();
    let days = 1;
    let serialDays = 0;

    while (neededTripMoney >= availableMoney) {
      let action = input.shift();
      let sum = +input.shift();

      if (action == "save") {
          availableMoney += sum;
          serialDays = 0;
          if (availableMoney >= neededTripMoney) {
              console.log(`You saved the money for ${days} days.`);
              break;
          }
      } else if (action == "spend")  {
          availableMoney -= sum;
          serialDays++;
          if (availableMoney < 0) {
              availableMoney = 0;
          }
          if (serialDays == 5) {
              console.log("You can't save the money.");
              console.log(days);
              break;
          }
      }
      days++;
    }  

}
 

  vacation([
    '250',   '150',
    'spend', '50',
    'spend', '50',
    'save',  '100',
    'save',  '100'
  ]);*/

// 04. Walking
/*
function walking(input) {
    let totalSteps = 0;
    let steps = 0;
    const goal = 10000;
    let boolean = false;
    let isGoingHome = false;
    while (totalSteps <= goal) {
        let command = input.shift();
     
        if (command === "Going home") {
            isGoingHome = true;
            continue;
        } else {
            steps = Number(command);
        }
       
        totalSteps += steps;

        if (isGoingHome) {
            break;
        }
        if (totalSteps >= goal) {
            boolean = true;
            break;
        }
        
    }

    let neededSteps = goal - totalSteps;
    if (!boolean && neededSteps > 0) {
        console.log(`${neededSteps} more steps to reach goal.`)
    } else {
        console.log("Goal reached! Good job!");
    }    
}

walking([ '1500', '300', '2500', '3000', 'Going home', '200', '' ]
)*/

//05. Coins
/*
function coins (input) {
    let change = +input.shift();
    let coins = 0;

    while (change > 0) {
        if (change >= 2) {
            change -=2;
        } else if (change >= 1) {
            change -= 1;
        } else if (change >= 0.5) {
            change -= 0.5;
        } else if (change >= 0.2) {
            change -= 0.2;
        } else if (change >= 0.1) {
            change -= 0.1;
        } else if (change >= 0.05) {
            change -= 0.05;
        } else if (change >= 0.02) {
            change -= 0.02;
        } else {
            change -=0.01;
        }

        change = Number(change.toFixed(2));
        coins++;
    }

    console.log(coins);

}

coins(['0.56'])
*/





