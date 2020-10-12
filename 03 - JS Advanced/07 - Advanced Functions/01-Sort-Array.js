function sortArray(array, argument) {
    let ascDesc = {
        'asc': (arr) => arr.sort((a, b) => a - b),
        'desc': (arr) => arr.sort((a, b) => b - a)
    }
    return ascDesc[argument](array);
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'))