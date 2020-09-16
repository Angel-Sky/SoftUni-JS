function sort(array) {
    let sortArray = array
                .sort()
                .sort((a, b) => a.length - b.length)
                
    console.log(sortArray.join('\n'))
}

sort(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'])