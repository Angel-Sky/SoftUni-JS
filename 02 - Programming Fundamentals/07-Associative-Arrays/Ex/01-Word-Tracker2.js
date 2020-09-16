function wordTracker(input) {
    let searchedWords = input.shift().split(" ");
    let collection = {};
    searchedWords.forEach(word => {
        collection[word] = 0;
    });

    input.forEach(currentWord => {
        if (collection.hasOwnProperty(currentWord)) {
            collection[currentWord] += 1;
        }
    })

    let sorted = Object.entries(collection)
        .sort((a, b) => {
            return b[1] - a[1];
        });
    
    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
    
}

wordTracker([
    'sentence this', 'In',
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