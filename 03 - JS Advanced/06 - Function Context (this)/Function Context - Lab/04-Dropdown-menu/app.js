function solve() {
    let button = document.querySelector("#dropdown");
    let dropdownUl = document.querySelector("#dropdown-ul");
    let box = document.querySelector("#box");
   
    [...document.querySelectorAll("li")].forEach(li => {
        li.addEventListener("click", changeBoxColor)
    });

    button.addEventListener("click", changeStyle);

    function changeStyle(e) {
        if (dropdownUl.style.display != "block") {
            dropdownUl.style.display = "block";
        } else {
            dropdownUl.style.display = "none";
            box.style.backgroundColor = "black";
            box.style.color = "white";
        }
    }

    function changeBoxColor(e) {
        let tempColor = e.target.textContent;
        box.style.backgroundColor = tempColor;
        box.style.color = 'black';
    }
}