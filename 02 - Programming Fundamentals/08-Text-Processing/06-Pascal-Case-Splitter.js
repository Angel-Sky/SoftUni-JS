function pascalCaseSplitter(input) {
    let arrayOfWords = [];
    let currentWord = input[0];
    for (let i = 1; i < input.length; i++) {
        let letter = input[i];
        if (letter !== letter.toUpperCase()) {
            currentWord += letter;
        } else {
            arrayOfWords.push(currentWord);
            currentWord = letter;
        }
    }
    arrayOfWords.push(currentWord);
    console.log(arrayOfWords.join(", "))
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')