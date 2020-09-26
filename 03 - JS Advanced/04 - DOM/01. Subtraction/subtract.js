function subtract() {
    let firstNum = document.querySelector("#firstNumber").value;
    let secNum = document.querySelector("#secondNumber").value;
    let resultDiv = document.querySelector("#result");

    resultDiv.innerHTML = Number(firstNum) - Number(secNum);
}