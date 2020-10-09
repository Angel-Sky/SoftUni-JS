class Company {
    constructor() {
        this.departaments = [];
        this.index = {};
    }

    addEmployee(name, salary, position, departament) {
        for (let argument of [name, salary, position, departament]) {
            this._validate(argument);
        }

        let current = this.departaments[this.index[departament]];

        if (current == undefined) {
            current = {
                name: departament,
                employees: []
            };
            this.departaments.push(current);
            this.index[departament] = this.departaments.length - 1;
        }

        current.employees.push({ name, salary, position })

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }


    bestDepartment() {
        const best = this.departaments
            .map(d => ({
                name: d.name,
                employees: d.employees.slice(),
                averageSalary: d.employees
                    .reduce((acc, prev) =>  acc + prev.salary, 0) / d.employees.length
            }))
            .sort((a, b) => b.averageSalary - a.averageSalary)[0];

        if (best !== undefined) {
            best.employees.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

            const result = [
                `Best Department is: ${best.name}`,
                `Average salary: ${best.averageSalary.toFixed(2)}`
            ]

            best.employees.forEach(el => {
                result.push(`${el.name} ${el.salary} ${el.position}`)
            })

            return result.join("\n")
        }
    }

    _validate(value) {
        if (!value || value < 0) {
            throw new Error("Invalid input!");
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


