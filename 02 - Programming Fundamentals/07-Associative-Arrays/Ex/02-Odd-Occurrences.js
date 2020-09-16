function oddOccurrences(input) {
    let arrOfWords = input.toLowerCase().split(" ");
    let obj = {};

    arrOfWords.forEach(element => {
        if (obj.hasOwnProperty(element)) {
            obj[element] += 1;
        } else {
            obj[element] = 1;
        }
    });
    let result = ``;
    Object.entries(obj).forEach(el => {
        if (el[1] % 2 != 0) {
            result += `${el[0]} `;
        }
    });

    console.log(result)

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
