window.addEventListener("load", () => {
    const townInput = document.querySelector("#towns");
    const rootDiv = document.querySelector("#root");
    document.querySelector("#btnLoadTowns").addEventListener("click", addToList)

    function addToList(e) {
        e.preventDefault();
        const towns = townInput.value.split(", ");
        const view = document.querySelector("#list-template").innerHTML;
        const template = Handlebars.compile(view);

        const generateHtml = template({towns});
        rootDiv.innerHTML = generateHtml;

        townInput.value = "";
    }
});