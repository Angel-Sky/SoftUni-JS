function people() {
    const juniorTasks = [
        ' is working on a simple task.'
    ];

    const seniourTasks = [
        ' is working on a complicated task.',
        ' is taking time off work.',
        ' is supervising junior workers.'
    ]

    const managerTasks = [
        ' scheduled a meeting.',
        ' is preparing a quarterly report.'
    ]

    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error("Can not instantiare directli")
            }

            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`)
        }

    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            juniorTasks.forEach(task => this.tasks.push(task));
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            seniourTasks.forEach(task => this.tasks.push(task));
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            managerTasks.forEach(task => this.tasks.push(task));
            this.dividend = 0;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

let result = people();

let guy1 = new result.Junior('pesho', 20);
let guy2 = new result.Senior('gosho', 21);
let guy3 = new result.Manager('ivan', 22);

console.log(guy1.hasOwnProperty('name'))
console.log(guy1.hasOwnProperty('age'))
console.log(guy1.hasOwnProperty('salary'));

console.log(guy2.hasOwnProperty('name'))
console.log(guy2.hasOwnProperty('age'))
console.log(guy2.hasOwnProperty('salary'))

console.log(guy3.hasOwnProperty('name'));
console.log(guy3.hasOwnProperty('age'))
console.log(guy3.hasOwnProperty('salary'))
console.log(guy3.hasOwnProperty('dividend'))