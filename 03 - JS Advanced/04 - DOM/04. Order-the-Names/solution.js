function solve() {
    let possitions = document.getElementsByTagName("li");
    let input = document.querySelector("input");

    document.querySelector("button").addEventListener("click", (e) => {
        let firstLetterPossition = (input.value[0].toUpperCase().charCodeAt(0)) - 65;

        for (let i = 0; i < possitions.length; i++) {
            if (possitions[firstLetterPossition].textContent) {
                possitions[firstLetterPossition].textContent += `, ${input.value[0].toUpperCase() + input.value.slice(1).toLowerCase()}`;
            } else {
                possitions[firstLetterPossition].textContent += input.value[0].toUpperCase() + input.value.slice(1).toLowerCase();
            }
            
            input.value = "";
            break;
        }
    })
}