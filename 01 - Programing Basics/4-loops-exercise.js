//01. Numbers Ending in 7

// function numbers (){
//     for (let i = 7; i<= 1000; i+=10) {
//         console.log(i);
//     }
// }

// numbers();

//02. Half Sum Element
/*
function solve(input){
    let numbers = Number(input.shift());
    let maxNum = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    for (let i = 1; i<=numbers; i++){
        let number = Number(input.shift());
        sum += number;

        if (number>maxNum){
            maxNum = number;
        }
    }

    let numWithourMaxNum = sum - maxNum;
    if (maxNum == numWithourMaxNum) {
        console.log("Yes");
        console.log("Sum = "+ numWithourMaxNum);
    } else {
        let diference = Math.abs(maxNum - numWithourMaxNum);
        console.log("No");
        console.log("Def = "+ diference);
    }
}

solve([7,
    3,
    4,
    1,
    1,
    2,
    12,
    1])*/
//03. Odd / Even Position
/*
   function solve (input) {
        let numbers = Number(input.shift());
    
        let oddSum = 0;
        let oddMin = Number.MAX_SAFE_INTEGER;
        let oddMax= Number.MIN_SAFE_INTEGER;
    
        let evenSum = 0;
        let evenMin = Number.MAX_SAFE_INTEGER;
        let evenMax= Number.MIN_SAFE_INTEGER;
    
        for (let i = 1; i<=numbers; i++) {
            let currentNum = Number(input.shift());
            
            if(i % 2 == 1){ //ODD
                oddSum += currentNum;
                if (currentNum < oddMin) {
                    oddMin = currentNum;
                }
    
                if (currentNum > oddMax) {
                    oddMax= currentNum;
                }
            } else { //EVEN
                evenSum +=currentNum;
                if(currentNum < evenMin) {
                    evenMin = currentNum;
                }
    
                if (currentNum > evenMax) {
                    evenMax = currentNum;
                }
            }
        }
        console.log("OddSum=" + oddSum.toFixed(2) + ",");
        if (oddMin !== Number.MAX_SAFE_INTEGER && oddMin !== Number.MIN_SAFE_INTEGER){
            console.log("OddMin=" + oddMin.toFixed(2) + ",");
            console.log("OddMax=" + oddMax.toFixed(2) + ",");
        } else {
            console.log("OddMin=No,")
            console.log("OddMax=No,")
        }
        
        console.log("EvenSum=" + evenSum.toFixed(2) + ",");
        if (evenMin !== Number.MAX_SAFE_INTEGER && evenMin !== Number.MIN_SAFE_INTEGER) {
            console.log("EvenMin=" + evenMin.toFixed(2) + ",");
            console.log("EvenMax=" + evenMax.toFixed(2));
        } else {
            console.log("EvenMin=No,")
            console.log("EvenMax=No")
        }
    }

solve ([
    4,
1.5,
1.75,
1.5,
1.75
])*/

//04. Histogram
/*
function histogram (input) {
    let num = Number(input.shift());
    let p1 = 0, p2 = 0, p3 = 0, p4 = 0, p5 = 0;

    for (let i = 1; i <= num; i++) {
        let currentNum = Number(input.shift());
        if (currentNum < 200) {
            p1++;
        } else if (currentNum >= 200 && currentNum <= 399) {
            p2++;
        } else if (currentNum >=400 && currentNum <= 599) {
            p3++
        } else if (currentNum>=600 && currentNum <=799) {
            p4++;
        } else {
            p5++;
        }
    }

    let p1Perc = p1 / num  * 100;
    let p2Perc = p2 / num  * 100;
    let p3Perc = p3 / num  * 100;
    let p4Perc = p4 / num  * 100;
    let p5Perc = p5 / num  * 100;

    console.log(`${p1Perc.toFixed(2)}%`);
    console.log(`${p2Perc.toFixed(2)}%`);
    console.log(`${p3Perc.toFixed(2)}%`);
    console.log(`${p4Perc.toFixed(2)}%`);
    console.log(`${p5Perc.toFixed(2)}%`);
    
}

histogram([7, 800, 801, 250, 199, 399, 599, 799])*/


//05. Divide Without Remainder
/*
function solve(input) {
    let numbers = Number(input.shift());
    let p1=0, p2=0, p3=0;

    for (let i = 0; i <= numbers; i++) {
        let currentNum = Number(input.shift());

        if (currentNum % 2 == 0) {
            p1++;
        }
        if (currentNum % 3 == 0) {
            p2++;
        }
        if (currentNum % 4 == 0) {
            p3++;
        }
    }

    let p1Perc = p1 / numbers  * 100;
    let p2Perc = p2 / numbers  * 100;
    let p3Perc = p3 / numbers  * 100;

    console.log(`${p1Perc.toFixed(2)}%`);
    console.log(`${p2Perc.toFixed(2)}%`);
    console.log(`${p3Perc.toFixed(2)}%`);

}*/

//06. Salary

function salary(input) {
    let browserTabs = Number(input.shift());
    let salary = Number(input.shift());

    for (let i =0; i <= browserTabs; i++) {
        let currentTab = input.shift();

        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }

        if (currentTab === "Facebook") {
            salary -= 150;
        } else if (currentTab === "Reddit") {
            salary -= 50;
        } else if (currentTab === "Instagram") {
            salary -= 100;
        }        
    }
    if (salary > 0) {
        console.log(salary);
    }
     
}

salary([10,
750,
"Facebook",
"Dev.bg",
"Instagram",
"Reddit"])
