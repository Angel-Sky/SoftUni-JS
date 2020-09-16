function concert(input) {
    let concerts = {};
    let finalBandName = input.pop();
    
    for (let line of input) {
        if (line !== "start of concert") {
            line = line.split("; ");
            let command = line[0];
            let band = line[1];
            let members = "", time = 0;
            if (line[2] !== undefined && line[2].includes(",")) {
                members = line[2].split(", ");
            } else {
                time = Number(line[2]);
            }
            if (command == "Add") {
                if (!concerts.hasOwnProperty(band)) {
                    concerts[band]  = {members: "", time: 0, hasPlayed: false};
                    for (let member of members) {
                        if (!concerts[band].members.includes(member)) {
                            concerts[band].members += `${member}, `;
                        }
                    }
                } else {
                    for (let member of members) {
                        if (!concerts[band].members.includes(member)) {
                            concerts[band].members += `${member}, `;
                        }
                    }
                }
           
            } else {
                if (!concerts.hasOwnProperty(band)) {
                    concerts[band]  = {members: "", time: time, hasPlayed: true};
                } else {
                    concerts[band].time += time;
                    concerts[band].hasPlayed = true;
                }
            }
        } else {
            break;
        }
    }
    let sorted = Object.entries(concerts)
        .sort((a, b) => { 
            if (a[1].time == b[1].time) {
                return a[0].localeCompare(b[0]);
            } else {
                return b[1].time - a[1].time;
            }
        })
    let totalTime = 0;
    for (let line of sorted) {
        totalTime += line[1].time;
    }
    console.log(`Total time: ${totalTime}`);

    sorted.forEach(element => {
        console.log(`${element[0]} -> ${element[1].time}`);
    });

    console.log(finalBandName);

    sorted.forEach(element => {
        if (element[0] === finalBandName) {
            let membersOfTheBand = element[1].members.split(", ");
            for (let i = 0; i < membersOfTheBand.length-1; i++) {
                    console.log(`=> ${membersOfTheBand[i]}`)
            }
        }
       
    });


}

concert([
    'Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones'
  ]
  )