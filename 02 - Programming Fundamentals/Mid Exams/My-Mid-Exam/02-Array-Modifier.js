function arrayModifier(input) {
    let array = input.shift().split(" ").map(Number);

    for(let line of input) {
        if (line != "end") {
            let [command, index1, index2] = line.split(" ");
            index1 = Number(index1), index2 = Number(index2);

            switch(command) {
                case "swap":
                    let temp = array[index1];
                    array[index1] = array[index2];
                    array[index2] = temp;
                break;

                case "multiply":
                    array[index1] *= array[index2];
                break;

                case "decrease":
                    for (let i = 0; i<array.length; i++) {
                        array[i] -= 1;
                    }
                break;
            }
        }
    }

    console.log(array.join(", "));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  )