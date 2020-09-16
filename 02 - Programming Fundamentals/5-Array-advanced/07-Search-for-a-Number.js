function searchForANum(array, cutFrom) {
    let newArray = array.slice(0, cutFrom[0]) // 5 2 3 4 1
    newArray.splice(0, cutFrom[1]); // 5 2 
    let searchedNum = cutFrom[2]; //3 
    let count = 0;
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] == searchedNum) {
            count++;
        } 
    }
    
    console.log(`Number ${searchedNum} occurs ${count} times.`);
}

searchForANum([5, 2, 1, 3, 1, 6], [5, 2, 3])