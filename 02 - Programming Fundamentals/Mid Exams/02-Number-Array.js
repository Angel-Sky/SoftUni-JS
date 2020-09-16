//ДАВА 80 ОТ 100
function numberArray(array) {
    let arr = array.shift().split(" ").map(Number);
    let negatives = [], positives = [];

    for (let line of array) {
        if (line == "End") {
            console.log(positive().join(" "));
            break;
        } else {
            let [command, index, value] = line.split(" ");

            switch (command) {
                case "Switch":
                    index = Number(index);
                    if (index >= 0 && index < arr.length) {
                        if (arr[index] >= 0) {
                            arr[index] = -arr[index];
                        }
                        //else {
                        //     arr[index] += arr[index]*2;
                        // }
                    }
                    break;

                case "Change":
                    index = Number(index), value = Number(value);
                    if (index >= 0 && index < arr.length) {
                        arr[index] = value;
                    }
                    break;

                case "Sum":
                    if (index == "Negative") {
                        for (let num of arr) {
                            if (num < 0) {
                                negatives.push(num);
                            }
                        }
                        console.log(negatives.reduce((a, b) => a + b, 0));
                    } else if (index == "Positive") {
                        positive().reduce((a, b) => a + b, 0);
                    } else {
                        console.log(arr.reduce((a, b) => a + b, 0));
                    }
                    break;
            }
        }
    }

    function positive() {
        for (let num of arr) {
            if (num >= 0) {
                positives.push(num);
            }
        }
        return positives;
    }
}

numberArray([
    '1 2 3 4 5 4 3 2 1 0',
    'Switch -4',
    'Change 13 0',
    'Switch 0',
    'Sum All',
    'End'
]
)

numberArray(['1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End']
)