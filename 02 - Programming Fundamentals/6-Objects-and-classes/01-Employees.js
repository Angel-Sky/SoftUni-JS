function employees(arr) {
    class Person {
        constructor(name, number) {
            this.name = name;
            this.number = number;
        }
    }

    for (const employeeName of arr) {
        let personalNum = employeeName.length;
        let person = new Person(employeeName, personalNum);
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
    }
    
}

employees(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'])