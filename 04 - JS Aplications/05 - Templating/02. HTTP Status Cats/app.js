window.addEventListener("load", () => {
    console.log("catTemplate")
    const list = document.querySelector("#allCats");

    loadCats();

    async function loadCats() {
        const catsListString = await (await fetch("./list.hbs")).text();
        const template = Handlebars.compile(catsListString);

        Handlebars.registerPartial('cat', await (await fetch("./cat.hbs")).text());
        const catHtml = template({cats});
    
        list.innerHTML = catHtml;
    }

    list.addEventListener("click", showInfo);

    function showInfo(e) {
        if (e.target.tagName === "BUTTON") {
            let details = e.target.parentElement.querySelector(".status");
            if (details.style.display == "none") {
                details.style.display = "block";
                e.target.textContent = "Hide";
            } else {
                details.style.display = "none";
                e.target.textContent = "Show status code";
            }
        }
    }
})