// function stringSubstring(searchedWord, text) {
//     text = text.toLowerCase();
//     searchedWord = searchedWord.toLowerCase();
    
//     if (text.includes(searchedWord)) {
//         console.log(searchedWord);
//     } else {
//         console.log(`${searchedWord} not found!`);
//     }
// }

function stringSubstring(word, sentence) {
    let sentenceToLowerCase = sentence.toLowerCase();
    let wordToLowerCase = word.toLowerCase();
    let isFound = false;

    let words = sentenceToLowerCase.split(" ");
    for (let word of words) {
        if (word === wordToLowerCase) {
            console.log(word);
            isFound = true;
            break;
        }
    }   
    if (!isFound) {
        console.log(`${word} not found!`);
    }
}


stringSubstring('java script',
    'Java Script is the best programming language javascript')
