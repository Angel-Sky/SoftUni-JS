function getFibonator() {
    let firstNum = 0;
    let secNum = 1;

    function fibonacci() {
        let fibNum = firstNum + secNum;
        firstNum = secNum;
        secNum = fibNum;

        return firstNum;
    }

    return fibonacci;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
