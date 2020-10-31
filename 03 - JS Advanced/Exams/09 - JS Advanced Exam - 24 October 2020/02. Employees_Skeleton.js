function solveClasses() {
    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experiense = 0;
        }

        addTask(id, taskName, priority) {
            if (priority == "high") {
                this.tasks.unshift({ id, taskName, priority })
            } else {
                this.tasks.push({ id, taskName, priority })
            }

            return `Task id ${id}, with ${priority} priority, has been added.`
        }

        doTask() {
            if (this.tasks.length > 0) {
                let taskName = this.tasks[0].taskName;
                this.tasks.shift();
                return taskName
            } else {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`
            }
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }

        reviewTasks() {
            let result = ["Tasks, that need to be completed:"];
            for (let line of this.tasks) {
                result.push(`${line.id}: ${line.taskName} - ${line.priority}`);
            }

            return result.join("\n")
        }

    }

    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.bonus = bonus;
            this.experiense = Number(experience);
            this.baseSalary = 1000 + bonus;
            this.tasks = []
        }
        get experience() {
            return this._experiense;
        }

        set experiense(value) {
            return this._experiense = value;
        }

        learn(years) {
            this.experiense = this.experience + Number(years);
        }

    }

    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.bonus = bonus;
            this.experiense = Number(experience) + 5;
            this.baseSalary = 1000 + bonus;
            this.tasks = []
        }

        get experience() {
            return this._experiense;
        }

        set experiense(value) {
            return this._experiense = value;
        }

        changeTaskPriority(taskId) {
            //let taskt = super.tasks();
            let task = this.tasks.find(x => x.id == taskId);
            let index = this.tasks.indexOf(task);

            if (task) {
                if (task.priority == "high") {
                    task.priority = "low";
                    return "low";

                } else {
                    task.priority = "high";
                    this.tasks.splice(index, 1);
                    this.tasks.unshift(task);
                    return "high";
                }
            }
        }


    }
    return {
        Developer,
        Junior,
        Senior
    }
}



// let classes = solveClasses();
// const developer = new classes.Developer("George", "Joestar");
// console.log(developer.addTask(1, "Inspect bug", "low"));
// console.log(developer.addTask(2, "Update repository", "high"));
// console.log(developer.doTask())
// console.log(developer.reviewTasks());
// console.log(developer.getSalary());
// // //----------------------------------------------------------------------------
// const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
// console.log(junior.getSalary());
// // //----------------------------------------------------------------------------
// const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
// senior.addTask(1, "Create functionality", "low");
// senior.addTask(2, "Update functionality", "high");
// console.log(senior.changeTaskPriority(1));

// // Zero test 2 Junior
// const classes = solveClasses();
// const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);

// junior.learn(4);
// const learnResult = junior.experience;
// const learnExpect = 6;
// //expect(learnResult).to.be.eq(learnExpect);

// const salaryResult = junior.baseSalary;
// const salaryExpect = 1200;
// //expect(salaryResult).to.be.eq(salaryExpect);

// console.log(junior.experience)


// Zero test 3 Senior

const classes = solveClasses();
const senior = new classes.Senior("Jonathan", "Joestar", 200, 2);
senior.addTask(1, "Write Performance Tests", "high");


const checkTaskPResult = senior.tasks[0]["priority"];
const checkTaskPExpect = "high";
console.log(checkTaskPResult, checkTaskPExpect);

const yearsResult = senior.experience;
const yearsExpect = 7;
console.log(yearsResult, yearsExpect);
