class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalProfit = 0;
        this.totalSold = 0;
    }

    newScreening(date, hall, desrtiption) {
        let currentHall = this.screenings.find(x => x.hall == hall && x.date == date);
        if (currentHall) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
        }

        this.screenings.push({ hall, date, desrtiption });
        return `New screening of ${this.movieName} is added.`
    }

    endScreening(date, hall, soldTickets) {
        let currentHall = this.screenings.find(x => x.hall == hall && x.date == date);
        if (currentHall === undefined) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        }
        let currentProfit = Number(this.ticketPrice) * Number(soldTickets);
        this.totalProfit += currentProfit;
        this.totalSold += Number(soldTickets);

        this.screenings.splice((this.screenings.indexOf(currentHall)), 1);

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`
    }

    toString() {
        let sorted = this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));
        let result = [
            `${this.movieName} full information:`,
            `Total profit: ${this.totalProfit.toFixed(0)}$`,
            `Sold Tickets: ${this.totalSold}`
        ]

        if (this.screenings.length > 0) {
            result.push("Remaining film screenings:");
            sorted.forEach(line => {
                result.push(`${line.hall} - ${line.date} - ${line.desrtiption}`)
            })
        } else {
            result.push("No more screenings!");
        }

        return result.join("\n").trim()
    }
}


let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());




