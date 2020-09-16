function revealWords(wordsToReplase, string) {
    let words = wordsToReplase.split(", ");
    let length = words.length;
    let i = 0;
    while (length > 0) {
        let repeatTimes = words[i].length;
        string = string.replace(('*'.repeat(repeatTimes)), words[i]);
        i++, length--;
    }
   
    console.log(string)
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')