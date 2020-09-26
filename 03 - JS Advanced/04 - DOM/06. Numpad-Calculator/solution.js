function solve() {
    let expressionOutput = document.querySelector("#expressionOutput");
    let resultOutput = document.querySelector("#resultOutput");
    let clearButton = document.querySelector(".clear");

    let operations = {
        "+": (num1, num2) => {return  Number(num1) + Number(num2)},
        "-": (num1, num2) => {return  Number(num1) - Number(num2)},
        "x": (num1, num2) => {return  Number(num1) * Number(num2)},
        "/": (num1, num2) => {return  Number(num1) / Number(num2)},
    }

    document.querySelector(".keys").addEventListener("click", (e) => {
        let operators = Object.keys(operations);
       
        if (operators.includes(e.target.innerHTML)) {
            expressionOutput.innerHTML += ` ${e.target.innerHTML} `;
        } else if (e.target.innerHTML !== "=") {
            expressionOutput.innerHTML += e.target.innerHTML;
        } else {
            let [num1, operator, num2] = expressionOutput.innerHTML.split(" ");
            if (num2) {
                resultOutput.innerHTML = operations[operator](num1, num2);
            } else {
                resultOutput.innerHTML = "NaN"
            }
        } 
    })

    clearButton.addEventListener("click", (e) => {
        expressionOutput.innerHTML = "";
        resultOutput.innerHTML = "";
    })
    
}