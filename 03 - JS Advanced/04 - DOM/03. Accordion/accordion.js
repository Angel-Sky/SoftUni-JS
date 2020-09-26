function toggle() {
    let accordeonText = document.querySelector("#extra");
    let button = document.querySelector(".button");

    if (button.innerText == "More") {
        accordeonText.style.display = "block";
        button.innerText = "Less";
    } else {
        accordeonText.style.display = "none";
        button.innerText = "More";
    } 
}