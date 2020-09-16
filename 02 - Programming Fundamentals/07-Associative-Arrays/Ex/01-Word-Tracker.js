function wordTracker(input) {
    let sentanse = new Map();
    let searchedWords = input.shift().split(" ");
    searchedWords.forEach(word => sentanse.set(word, []));
    input.forEach(word => {
        if (sentanse.has(word)){
            let collectionOfWords = sentanse.get(word);
            collectionOfWords.push(word);
            sentanse.set(word, collectionOfWords)
        }
    });

    Array.from(sentanse.entries())
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(word => {
            console.log(`${word[0]} - ${word[1].length}`)
    })
}

wordTracker([
    'this sentence', 'In',
    'this',          'sentence',
    'you',           'have',
    'to',            'count',
    'the',           'occurances',
    'of',            'the',
    'words',         'this',
    'and',           'sentence',
    'because',       'this',
    'is',            'your',
    'task'
  ]
  )