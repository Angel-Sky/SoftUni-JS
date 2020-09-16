//01. Numbers from 1 to 100
/*
function numbersFrom1To100() {
    for (let i = 0; i <= 100; i++){
        console.log(i);
    }
}

numbersFrom1To100();*/

//02. Numbers N...1
/*
function numbersFromNto1(input) {
    let n = Number(input.shift());

    for (let i = n; i > 0; i--){
        console.log(i);
    }
}

numbersFromNto1([5]);*/

//03. Numbers 1...N with Step 3
/*
function solve (input) {
    let n = Number(input.shift());

    for (let i = 1; i<=n; i+=3){
        console.log(i);
    }
}
solve(['30'])*/

//04. Even Powers of 2

/*function solve (input) {
    let n = Number(input.shift());
    let num = 1;
    for (let i = 0; i<=n; i+=2){
        console.log(num);
        num = num * 2 * 2;
    }
}
solve(['30'])
*/

//05. Character Sequence

/* function solve (input){
    let text = input.shift();

    for (let i = 0; i<text.length; i++){
        console.log(text[i]);
    }
}

solve(["pesho"]); */

//06. Vowels Sum
/*
function lowelsSum(input) {
    let text = input.shift();
    let counter = 0;

    for (let i = 0; i<text.length; i++) {
        let bukva = text[i];
        switch(bukva) {
            case "a": counter += 1; break;
            case "e": counter += 2; break;
            case "i": counter += 3; break;
            case "o": counter += 4; break;
            case "u": counter += 5; break;
        }
    }
    console.log(counter);
}

lowelsSum(['hello']) */

//07. Sum Numbers
/*
function sumNum (input) {
    let n = Number(input.shift());
    let sum = 0;

    for (let i = 0; i<n; i++){
        let num = Number(input.shift());
        sum += num;
    }
    console.log(sum);
}

sumNum([2, 10, 20])*/

//08. Number sequence
/*
function numberSequence(input) {
    let n = Number(input.shift());
    let minNum = Number.MAX_SAFE_INTEGER;
    let maxNum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i<n; i++) {
        let num = Number(input.shift());

        if (num < minNum) {
            minNum = num;
        } 
        if (num > maxNum) {
            maxNum = num;
        }
    }
    console.log("Max number: " + maxNum);
    console.log("Min number: " + minNum);
}

numberSequence([5, 10, 20, 304, 0, 50])*/

//09. Left and Right Sum
/*
function leftAndightSum(input) {
    let mid = Number(input.shift());
    let leftSum = 0;
    let rigthSum = 0;


    for (let i = 1; i <= mid*2; i++) {
        let current = Number(input.shift());

        if (i <= mid) {
            leftSum += current;
        } else {
            rigthSum += current;
        }
    }

    if (leftSum === rigthSum) {
        console.log("Yes, sum = " + leftSum);
    } else {
        console.log(`No, diff = ${Math.abs(leftSum - rigthSum)}`);
    }
}

leftAndightSum([2, 90, 9, 50, 50])*/

//11. Clever Lily
/*
function lili (input) {
    let age = Number(input.shift());
    let priceForWashingmachine = Number(input.shift());
    let toyPrice = Number(input.shift());

    let totalToys = 0;
    let totalMoney = 0;
    let incommingMoney = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            totalMoney += incommingMoney + 10;
            incommingMoney += 10;
            totalMoney -= 1;
        } else {
            totalToys += 1;
        }
    }
    
    totalMoney += totalToys * toyPrice;
    if (totalMoney >= priceForWashingmachine) {
        console.log(`Yes! ${(totalMoney - priceForWashingmachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceForWashingmachine - totalMoney).toFixed(2)}`);
    }
}

lili([21, 1570.98, 3])*/

//10. Odd Even Sum

function oddEvenSum (input) {
    let numbers = Number(input.shift());

    let oddSum = 0, evenSum = 0;

    for (let i = 1; i <=numbers; i++) {
        let currendNum = Number(input.shift());
         if (i % 2 == 0) {
             oddSum += currendNum;
         } else {
             evenSum += currendNum;
         }
    }

    if (oddSum === evenSum) {
        console.log("Yes");;
        console.log("Sum = " + oddSum);
    } else {
        console.log("No");;
        console.log("Diff = " + Math.abs(oddSum - evenSum));
    }

}

oddEvenSum([4, 10, 50, 60, 20])