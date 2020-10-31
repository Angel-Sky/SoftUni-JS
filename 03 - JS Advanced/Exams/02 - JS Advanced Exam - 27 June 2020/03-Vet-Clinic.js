class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        kind = kind.toLowerCase();
        if (this.capacity == this.currentWorkload) {
            throw new Error("Sorry, we are not able to accept more patients!");
        }
        const currentRecord = this.clients.find(el => el.ownerName == ownerName);
        if (currentRecord !== undefined) {
            let pet = currentRecord.pets.find(el => el.petName == petName);
            if (pet) {
                throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${pet.procedures.join(", ")}.`);
            } else {
                currentRecord.pets.push({ petName, kind, procedures });
                this.currentWorkload++;
                return `Welcome ${petName}!`;
            }
        }
       
        this.clients.push({ownerName, pets: [{ petName, kind, procedures }] });
        this.currentWorkload++;
        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {
        const currentRecord = this.clients.find(el => el.ownerName == ownerName);

        if (currentRecord) {
            let currentPet = currentRecord.pets.find(el => el.petName == petName);
            if (currentPet && currentPet.procedures.length > 0) {
                this.totalProfit += currentPet.procedures.length * 500;
                this.currentWorkload--;
                currentPet.procedures = [];
                return `Goodbye ${petName}. Stay safe!`;
            } else {
                throw new Error(`Sorry, there are no procedures for ${petName}!`);
            }
        } else {
            throw new Error("Sorry, there is no such client!");
        }
    }

    toString() {
        let percentage = this.currentWorkload / this.capacity * 100;
        let result = [
            `${this.clinicName} is ${percentage}% busy today!`,
            `Total profit: ${this.totalProfit.toFixed(2)}$`
        ];
        
        let sortedOwners = this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName))
        for (let line of sortedOwners) {
            line.pets.sort((a, b) => a.petName.localeCompare(b.petName));
            result.push(`${line.ownerName} with:`);

            line.pets.forEach(pet => {
                result.push(`---${pet.petName} - a ${pet.kind} that needs: ${pet.procedures.join(", ")}`)
            });
        }

        return result.join("\n").trim()
    }

}

let clinic = new VeterinaryClinic('SoftCare', 20);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Jim Jones', 'Kate', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());
