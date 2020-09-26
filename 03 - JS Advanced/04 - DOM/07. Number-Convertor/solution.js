function solve() {
    let selectMenuTo = document.querySelectorAll('#selectMenuTo')[0];
    let options = {
        binary: (num) => num.toString(2),
        hexadecimal: (num) => num.toString(16).toUpperCase()
    }

    Object.keys(options).forEach(el => {
        el = el.charAt(0).toUpperCase() + el.slice(1);
        createOptionelement(el);
    })

    document.querySelector("#container button").addEventListener('click', (e) => {
        let num = Number(document.querySelector("input").value);
        let criteria = selectMenuTo.value;
        document.querySelector("#result").value = options[criteria](num);
    });

    function createOptionelement(value) {
        let optionElement = document.createElement("option");
        optionElement.setAttribute("value", value.toLowerCase());
        optionElement.innerHTML = value;
        selectMenuTo.appendChild(optionElement);
    }

}