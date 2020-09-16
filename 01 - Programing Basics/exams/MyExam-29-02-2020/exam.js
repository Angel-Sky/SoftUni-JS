//01. Fishland
/*
function fishland(input) {
    let skumriyaPrice = +input.shift(); 
    let tsatsaPrice = +input.shift();
    let kgPalamud = +input.shift();
    let kgSafrid = +input.shift();
    let kgMidi = +input.shift();

    let palamudPrice = skumriyaPrice + skumriyaPrice * 60/100;
    let safridPrice = tsatsaPrice + tsatsaPrice * 80/100;
    let midiPrice = 7.50;

    let sumPalamud = palamudPrice * kgPalamud;
    let sumSafrid = safridPrice * kgSafrid;
    let sumMidi = midiPrice * kgMidi;

    let finalSum = sumPalamud + sumSafrid + sumMidi;
    console.log(finalSum.toFixed(2))

}

fishland([ '6.90', '4.20', '1.5', '2.5', '1' ])*/

//02. Football Results
/*
function footballResults(input) {
    let firstMachResults = input.shift();
    let secMachResults = input.shift();
    let thrMachResults = input.shift();
    let domakin, other;
    let win = 0, loss = 0, equal = 0;
    //firstMachResults = firstMachResults%10;
    let firsSplit = firstMachResults.split(":");
    
    for (let i = 0; i<firsSplit.length; i++) {
        domakin = Number(firsSplit[0]);
        other = Number(firsSplit[1]);
    }
    if (domakin > other) {
        win++;
    } else  if (domakin < other) {
        loss++;
    } else {
        equal++;
    }

    let secSplit = secMachResults.split(":");

    for(let i = 0; i < secSplit.length; i++) {
        domakin = Number(secSplit[0]);
        other = Number(secSplit[1]);
    }

    if (domakin > other) {
        win++;
    } else  if (domakin < other) {
        loss++;
    } else {
        equal++;
    }

    let thirdSplit = thrMachResults.split(":");

    for(let i = 0; i < thirdSplit.length; i++) {
        domakin = Number(thirdSplit[0]);
        other = Number(thirdSplit[1]);
    }

    if (domakin > other) {
        win++;
    } else  if (domakin < other) {
        loss++;
    } else {
        equal++;
    }

    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${loss} games.`);
    console.log(`Drawn games: ${equal}`);
   
}

footballResults([ '4:2', '0:3', '1:0' ]
)*/


//03. Computer Room

function computerRoom(input){
    let month = input.shift();
    let hours = +input.shift();
    let group = +input.shift();
    let time = input.shift();
    let pricePerPerson = 0, total = 0;
    switch (month) {
        case "march":
        case "april":
        case "may":
            if (time == "day") {
                total = 10.50 * hours * group;
            } else {
                total = 8.40 * hour * group;
            }
            break;

        case "june":
        case "july":
        case "august":
            if (time == "day") {
                total = 12.60 * hours * group;
            } else {
                total = 10.20 * hours * group;
            }
            break;
    }

    if (group >= 4) {
        total *= 0.9;
    }

    if (hours >= 5) {
        total *= 0.5;
    }

    pricePerPerson = total/group/hours;
    console.log(`Price per person for one hour: ${pricePerPerson.toFixed(2)}`);
    console.log(`Total cost of the visit: ${total.toFixed(2)}`);

}

computerRoom([ 'july', '5', '5', 'night' ]
)


//04. Gifts from Santa
/*
function giftsFromSanta(input) {
    let n = +input.shift();
    let m = +input.shift();
    let s = +input.shift();
    let result = "";
    for(let i = m; i >= n ; i--){
        if (i % 2 == 0 && i % 3 == 0) {
            
            if (i == s) {
                break;
            }
            result += i + " ";
        }
        
    }

    console.log(result)

}
giftsFromSanta([ '1', '30', '12' ])*/

//05. Christmas Gifts
/*
function christmasGifts(input) {
    let age = input.shift();
    let kids = 0, adults = 0;

    while (age !=="Christmas") {
        age = Number(age);

        if (age <= 16){
            kids++;
        } else {
            adults++;
        }

        age = input.shift();
    }
    let toysMoney = kids * 5;
    let sweatersMoney = adults * 15;

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${toysMoney}`);
    console.log(`Money for sweaters: ${sweatersMoney}`);
}

christmasGifts([ '16', '20', '46', '12', '8', '20', '49', 'Christmas' ])*/

//06. Unique PIN Codes
/*
function uniquePin(input) {
    let maxFirst = +input.shift();
    let maxSec = +input.shift();
    let maxThrd = +input.shift();

    for (let i = 1; i <= maxFirst; i++) {
        if (i % 2 == 0) {
            for (let j = 1; j <= maxSec; j++) {
                if (j == 2 || j == 3 || j == 5 || j == 7) {

                    for (let k = 1; k <= maxThrd; k++) {
                        if (k % 2 == 0) {
                            console.log(i, j, k)
                        }
                    }

                }
            }
        }
    }
}

uniquePin(['3', '5', '5'])*/