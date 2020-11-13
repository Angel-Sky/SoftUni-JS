import monkeys from "./monkeys.js";

window.addEventListener("load", async () => {
    const monkeysDiv = document.querySelector(".monkeys");

    const monkeysString = await (await fetch("./monkey.hbs")).text();
    const template = Handlebars.compile(monkeysString);
    const monkeysHtml = template({monkeys})

    monkeysDiv.innerHTML = monkeysHtml;
    
    monkeysDiv.addEventListener("click", showHiddenInfo);

    function showHiddenInfo(e) {
        if (e.target.tagName === "BUTTON") {
            let details = e.target.parentElement.querySelector("p");
            console.log(e)
            if (details.style.display == "none") {
                details.style.display = "block";
                e.target.textContent = "HIDE";
            } else {
                details.style.display = "none";
                e.target.textContent = "INFO";
            }
        }
    }
});