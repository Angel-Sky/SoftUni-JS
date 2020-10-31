class Parking {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        console.log(this)
        if (this.vehicles.length >= this.capacity) {
            throw new Error("Not enough parking space.");
        }
        if ((this.vehicles.find(x => x.carNumber === carNumber && x.carModel === carModel)) === undefined) {
            this.vehicles.push({ carModel, carNumber, payed: false });
            return `The ${carModel}, with a registration number ${carNumber}, parked.`
        }
    }

    removeCar(carNumber) {
        let car = this.vehicles.find(x => x.carNumber === carNumber);
        if (car === undefined) {
            throw new Error("The car, you're looking for, is not found.");
        } else if (car.payed === false) {
            throw new Error(`${car.carNumber} needs to pay before leaving the parking lot.`)
        } else {
            this.vehicles.splice((this.vehicles.indexOf(car)), 1);
            return `${car.carNumber} left the parking lot.`
        }
    }
    pay(carNumber) {
        let car = this.vehicles.find(x => x.carNumber === carNumber);
        if (car === undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        } else if (car.payed === true) {
            throw new Error(`${car.carNumber}'s driver has already payed his ticket.`)
        } else {
            car.payed = true;
            return `${car.carNumber}'s driver successfully payed for his stay.`
        }
    }

    getStatistics(carNumber) {
        if (carNumber) {
            let car = this.vehicles.find(x => x.carNumber === carNumber);
            return `${car.carModel} == ${carNumber} - ${car.payed == true ? "Has payed" : "Not payed"}`
        } else {
            let result = [
                `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`
            ]
            let sorted = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel))
                .forEach(car => {
                    result.push(`${car.carModel} == ${car.carNumber} - ${car.payed == true ? "Has payed" : "Not payed"}`);
                })

            return result.join("\n")
        }
    }

}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Saab t600", "KSJSKSK"));
console.log(parking.addCar("Ferrary t600", "FKSDKSKD"));
console.log(parking.addCar("Alfa t600", "LSKDSKD"));
console.log(parking.addCar("Volvo t600", "SDSLDSDLS"));
console.log(parking.getStatistics());

console.log(parking.pay("SDSLDSDLS"));
//console.log(parking.pay("SDSLDSDLS"));
//console.log(parking.removeCar("TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.removeCar("SDSLDSDLS"))
