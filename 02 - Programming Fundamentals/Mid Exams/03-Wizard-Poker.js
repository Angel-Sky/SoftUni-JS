function wizardPoker(data) {
    let arsenalOfCards = data.shift().split(":");
    let deck = [];

    for (let line of data) {
        if (line != "Ready") {
            if (line == "Shuffle deck") {
                deck.reverse();
            } else {
                let [command, cardName, cardName2] = line.split(" ");

                switch(command) {
                    case "Add":
                        if (arsenalOfCards.includes(cardName)) {
                            deck.push(cardName);
                        } else {
                            console.log("Card not found.");
                        }
                    break;

                    case "Insert":
                        let index = Number(cardName2);
                        if (index >=0 && index < deck.length && arsenalOfCards.includes(cardName) ) {
                            deck.splice(index, 0, cardName);
                        } else {
                            console.log("Error!");
                        }
                    break;

                    case "Swap":
                        let cardOneIndex = deck.indexOf(cardName);
                        let cardTwoIndex = deck.indexOf(cardName2);
                        let temp = deck[cardOneIndex];
                        deck[cardOneIndex] = deck[cardTwoIndex];
                        deck[cardTwoIndex] = temp;
                    break;

                    case "Remove":
                        if (deck.includes(cardName)) {
                            let indexOfCard = deck.indexOf(cardName);
                            deck.splice(indexOfCard, 1);
                        } else {
                            console.log("Card not found.")
                        }
                }
            }
            
        }
    }

    console.log(deck.join(" "));
}

wizardPoker([
    'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
    'Add Moonfire',
    'Add Pounce',
    'Add Bite',
    'Add Wrath',
    'Insert Claw 0',
    'Swap Claw Moonfire',
    'Remove Bite',
    'Shuffle deck',
    'Ready'
  ]
  )