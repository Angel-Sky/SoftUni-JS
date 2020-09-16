function arriving(input) {
    let pattern = /^(?<name>[A-Za-z0-9!@#$?]+)=(?<length>\d+)<<(?<code>(.*?)+)$/

    let line = input.shift();

    while (line != "Last note") {
        let match = pattern.exec(line);

        if (match) {
            let nameOfMountain = match.groups.name.split(/\W+/).join("");
            let length = Number(match.groups.length);
            let code = match.groups.code;

            if (length === code.length) {
                console.log(`Coordinates found! ${nameOfMountain} -> ${match.groups.code}`);
            } else {
                console.log("Nothing found!");
            }
            
        } else {
            console.log("Nothing found!");
        }
        line = input.shift()
    }
 
}

arriving([
    '!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Last note'
  ]
  )