function arrayManupulator(arr, input) {
    for (let i = 0; i < input.length; i++) {
        let separated = input[i].split(" ");
        let command = separated[0];
        let element = separated[1];
        if (command == "add") {
            add(element, separated[2]);
        } else if (command == "addMany") {
            addMany(element, separated);
        } else if (command == "contains") {
            contains(element);
        } else if (command == "remove") {
            remove(element);
        } else if (command == "shift") {
            shift(element);
        } else if (command == "sumPairs") {
            sumPairs();
            
        } else {
            console.log(`[ ${arr.join(', ')} ]`);
        }
    }

    function add(index, element) {
        index = Number(index), element = Number(element);
        arr.splice(index, 0, element);
    }

    function contains(element) {
        element = Number(element);
        if (arr.includes(element)) {
            console.log(arr.indexOf(element));
        } else {
            console.log('-1');
        }
    }

    function remove(element) {
        element = Number(element);
        arr.splice(element, 1);
    }

    function shift(n) {
        n = Number(n);
        for (let i = 0; i < n; i++) {
            let currentEl = arr.shift();
            arr.push(currentEl);
        }
    }

    function sumPairs() {
        let index = 1;
            for (let j = 0; j < arr.length; j++) { // 2 3 5 9 8 7 6 5 1 
                if (index > 0 && index <= arr.length-1) {
                    arr[j] = arr[j] + arr[j+1];
                    arr.splice(index, 1);
                    index++;
                } else {
                    break;
                }
            }
    }

    function addMany(index, element) {
        for (let i = 1; i < element.length - 1; i++) {
            arr.splice(+index, 0, +element[i+1]);
            index++;
        }
    }
}



arrayManupulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',
        'shift 1', 'sumPairs', 'print'])