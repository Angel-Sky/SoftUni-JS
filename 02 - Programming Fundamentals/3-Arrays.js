//01. Add and Subtract
/*
function addAndSubtract(array) {
    let newArray = [];
    let sum = 0, newSum = 0;
    array.forEach(function (element, i){
        sum += element;
        if (element % 2 == 0) {
            element += i;
        } else {
            element -= i;
        }
        newArray.push(element);
        newSum += element;
        
    });

    console.log(newArray);
    console.log(sum);
    console.log(newSum);
}

addAndSubtract([-5, 11, 3, 0, 2]);*/

//02. Common Elements
/*
function commonElements(array1, array2) {
    array1.forEach(element => {
        if (array2.includes(element)) {
            console.log(element)
        }
    });  
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])*/

//03. Merge Arrays
/*
function megreArrays(arr1, arr2) {
    let newArr = [];

    arr1.forEach((element, i) => {
        if (i % 2 == 0) {
            let firsArrEl = Number(element);
            let secArrEl = Number(arr2[i]);
            newArr.push(firsArrEl + secArrEl);
        } else {
            newArr.push(element + arr2[i]);
        }
        
    });
    console.log(newArr.join(' - '));
}

megreArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])*/

//04. Array Rotation
/*
function arrayRotation(arr, rotations) {
    while (rotations > 0){
        let currentElement = arr.shift();
        arr.push(currentElement);
        rotations--;
    }

    console.log(arr.join(" "));
}

arrayRotation([32, 21, 61, 1], 4)*/

//05. Max Number
/*
function maxNum(arr) {
    let newArr = [];

    arr.forEach((currentElement, i) => {
        let rightElements = arr.slice(i + 1);
        let isBigger = true;

        for (let j = 0; j < rightElements.length; j++) {

            if (currentElement <= rightElements[j]) {
                isBigger = false;
                break;
            }
        }

        if (isBigger) {
            newArr.push(currentElement);
        }

    });

    console.log(newArr.join(' '));
}
maxNum([14, 24, 3, 19, 15, 17])*/

//06. Equal Sums
/*
function equalSums(array) {
    let isEqual = false;
    let leftElements = 0;
    array.forEach((element, i) => {
        if (array.length == 1) {
            console.log(0);
            return;
        }
        let rightElements = array.slice(i + 1).reduce((a, b) => a + b, 0);
        
        if (rightElements == leftElements) {
            console.log(i);
            isEqual = true;
        } 
        leftElements += element;
    
    });
    if (!isEqual && leftElements != 0) {
        console.log("no");
    }
}

equalSums([10])*/

//07. Max Sequence of Equal Elements
/*
function maxSequence(array) {
    let index = -1;
    let maxLength = 0;
    for(let i = 0; i < array.length; i++) {
       let firstElement = array[i];
       let length = 1;
        for (let j = i + 1; j < array.length; j++){
            let secElement = array[j];
       
            if(firstElement == secElement){
                length++;
            } else {
                break;
            }
        }
        if (length > maxLength){
            maxLength = length;
            index = i;
        }
    }
    let element = array[index];
 
    console.log(`${element} `.repeat(maxLength).trim())
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])*/

//08. Magic Sum

function magicSum(array, magicNum) {
    for (let i = 0; i < array.length; i++) {
        let firstNum = array[i];
        for (let j = i+1; j< array.length; j++) {
            let secNum = array[j];
            if ((firstNum + secNum) == magicNum){
                console.log(firstNum, secNum);
            }
        }
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27)





