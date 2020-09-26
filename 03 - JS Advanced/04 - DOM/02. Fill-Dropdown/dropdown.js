function addItem() {
    let newItemText = document.querySelector("#newItemText");
    let newItemValue = document.querySelector("#newItemValue");
    let selectMenu = document.querySelector("#menu");

    let newMenuValue = document.createElement("option");
    newMenuValue.setAttribute("value", newItemValue.value);
    newMenuValue.innerHTML = newItemText.value;

    selectMenu.appendChild(newMenuValue);
    newItemText.value = "";
    newItemValue.value = "";
}