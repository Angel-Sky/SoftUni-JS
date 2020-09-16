function partyTime(input) {
    let list = new Map();
    input.forEach(code => {
        if (code != "PARTY") {
            if (list.has(code)) {
                list.set(code, '+');
            } else {
                list.set(code, '-');
            }
        }
    });
    let notComming = [];
    Array.from(list.entries()).forEach(el => {
        if (el[1] == "-") {
            notComming.push(el[0]);
        }
    })
    console.log(notComming.length)

    // for (let el of notComming) {
    //     if (el[0][0].charCodeAt(0) >= 48 && el[0][0].charCodeAt(0) <= 57) {
    //         notComming.sort();
    //         break;
    //     }
        
    // }
    console.log(notComming.join("\n"))
       
}

partyTime([
    '9NoBUajQ',
    'Ce8vwPmE', 
    'SVQXQCbc',
    'tSzE5t0p', 
    '7IK9Yo0h',
    'PARTY',
    '9NoBUajQ', 
    'Ce8vwPmE',
    'SVQXQCbc'
  ]
)

partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'])