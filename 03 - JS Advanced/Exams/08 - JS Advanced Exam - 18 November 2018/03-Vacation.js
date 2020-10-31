class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = Number(budget);
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        budget = Number(budget);
        if (budget >= this.budget) {

            if (!this.kids[grade]) {
                this.kids[grade] = [`${name}-${budget}`];
            } else if ((this.kids[grade].find(x => x.includes(name))) === undefined) {
                this.kids[grade].push(`${name}-${budget}`);
            } else {
                return `${name} is already in the list for this ${this.destination} vacation.`
            }

            return `['${this.kids[grade].join("','")}']`

        } else {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }
    }

    removeChild(name, grade) {
        //Проверяваме дали обектът с децата има за пропърти дадената оценка
        if (this.kids[grade]) {
            //Намираме детето - ако съществува го премахваме от масива, в противен случай - връщаме грешка
            let child = this.kids[grade].find(x => x.includes(name));

            if (child === undefined) {
                return `We couldn't find ${name} in ${grade} grade.`;
            } else {
                this.kids[grade].splice(this.kids[grade].indexOf(child), 1);
            }

        } else {
            return `We couldn't find ${name} in ${grade} grade.`;
        }
    }

    toString() {
        if (this.numberOfChildren == 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        let result = [
            `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}`
        ]

        Object.entries(this.kids).sort((a, b) => a[0] - b[0])
            .forEach(line => {
                result.push(`Grade: ${line[0]}`);
                let n = 1;
                line[1].forEach(el => {
                    result.push(`${n}. ${el}`);
                    n++;
                })
            });

        return result.join("\n") + "\n";
    }

    get numberOfChildren() {
        let counter = 0;
        for (let grade in this.kids) {
            counter += this.kids[grade].length;
        }
        return counter;
    }

}


let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Lilly', 6, 2100));
console.log(vacation.registerChild('Pesho', 6, 2400));
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Tanya', 5, 6000));
console.log(vacation.registerChild('Mitko', 10, 1590));

vacation.registerChild('Gosho', 5, 2000);
vacation.registerChild('Lilly', 6, 2100);

console.log(vacation.removeChild('Gosho', 9));

vacation.registerChild('Gosho', 5, 2000);

vacation.removeChild('Lilly', 6);
console.log(vacation.registerChild('Pesho', 6, 2400));
console.log(vacation.registerChild('Tanya', 5, 6000))
console.log(vacation.toString());


//let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);

// vacation.registerChild('Gosho', 5, 3000);
// vacation.registerChild('Lilly', 6, 1500);
// vacation.registerChild('Pesho', 7, 4000);
// vacation.registerChild('Tanya', 5, 5000);
// vacation.registerChild('Mitko', 10, 5500);

//console.log(vacation.toString());



