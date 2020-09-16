function lettersChangeNum(input) {
    let words = input.split(" ").filter(el => el !== "");
    let results = [];
    let tempResult = 0;
    function isUpper(letter) {
        return letter == letter.toUpperCase();
    }

    for (let word of words) {
        let firstLetter = word[0];
        let secLetter = word[word.length-1];
        let number = Number(word.substring(1, word.length-1));
        
        if (isUpper(firstLetter)) {
            tempResult = number/(firstLetter.charCodeAt(0) - 64);
            results.push(tempResult);           
        } else {
            tempResult = number*(firstLetter.charCodeAt(0) - 96);
            results.push(tempResult);      
        } 

        if (isUpper(secLetter)) {
            results.push(tempResult - (secLetter.charCodeAt(0) - 64));
        } else {
            results.push(tempResult + (secLetter.charCodeAt(0) - 96));
        }  
    }
    tempResult = 0;
    for (let i = 1; i < results.length; i+=2) {
        tempResult += results[i];
    }

    console.log(tempResult.toFixed(2))
}

lettersChangeNum('A12b    s17G')