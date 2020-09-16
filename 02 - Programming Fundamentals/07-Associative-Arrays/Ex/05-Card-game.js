function cardGame(input) {
    let obj = {};
    let uniquesObj = {};
    let points = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }
    let colors = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    for (let line of input) {
        let [name, hand] = line.split(": ");
        if (!obj.hasOwnProperty(name)) {
            obj[name] = hand;
        } else {
            obj[name] += ", " + hand;
        }
    }

    for (let name in obj) {
        let hand = obj[name].split(", ");
        uniquesObj[name] = new Set(hand);
    }

   for (let name in uniquesObj) {
       let hand = Array.from(uniquesObj[name]);
       let sum = 0;
       for (let card of hand) {
           let tokens = [...card];
           if (tokens.length == 2) {
               sum += solvePoints(tokens[0], tokens[1]);
           } else {
               sum += solvePoints(tokens[0] + tokens[1], tokens[2])
           }
       }
       console.log(`${name}: ${sum}`)
   }

   function solvePoints(point, color) {
        let cardPoints = points[point];
        let cardColor = colors[color];

        return cardPoints * cardColor;
   }
}

cardGame([
    'Pesho: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Peshoslav: QH, QC, QS, QD',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Peshoslav: QH, QC, JS, JD, JC',
    'Pesho: JD, JD, JD, JD, JD, JD'
  ]
  )