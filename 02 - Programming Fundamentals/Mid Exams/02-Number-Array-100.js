function numberArray(arr) {
    let numbers = arr.shift().split(' ').map(Number);
    for (let line of arr) {
        let [command, index, value] = line.split(' ');
        value = Number(value);
        if (command === 'End') {
            console.log(numbers.filter(n => n >= 0).join(' '));
            break;
        } else {
            if (command === 'Switch') {
                index = Number(index);
                if (index >= 0 && index < numbers.length) {
                    numbers[index] = - numbers[index];
                }
            }
            if (command === 'Change') {
                if (index >= 0 && index < numbers.length) {
                    numbers[index] = value;
                }
            }
            if (command === 'Sum') {
                let currentNumbers = [];
                if (index === 'Negative') {
                    currentNumbers = numbers.filter(n => n < 0);
                } else if (index === 'Positive') {
                    currentNumbers = numbers.filter(n => n >= 0);
                } else if (index === 'All') {
                    currentNumbers = numbers.slice();
                }
                console.log(currentNumbers.reduce((a, b) => a + b, 0));
            }

        }
    }
}
numberArray([
    '1 2 3 4 5 4 3 2 1 0',
    'Switch -4',
    'Change 13 0',
    'Switch 0',
    'Sum All',
    'End'
]);

numberArray(['1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End']);