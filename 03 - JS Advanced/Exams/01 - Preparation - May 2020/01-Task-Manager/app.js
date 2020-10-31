function solve() {
    let sections = document.querySelectorAll("section");
    let openDiv = sections.item(1).querySelectorAll("div").item(1);
    let progressDiv = sections.item(2).querySelectorAll("div").item(1);
    let completeDiv = sections.item(3).querySelectorAll("div").item(1);

    let task = document.querySelector("#task");
    let description = document.querySelector("#description");
    let date = document.querySelector("#date");

    document.querySelector("#add").addEventListener("click", addTask);

    function addTask(e) {
        e.preventDefault();
        let taskName = task.value.trim();
        let descriptionValue = description.value.trim();
        let dateValue = date.value.trim();

        if (taskName !== "" && descriptionValue !== "" && dateValue !== "") {
            let startBtn = genEl("button", "Start", { className: "green" });
            let delBtn = genEl("button", "Delete", { className: "red" });
            let finishBtn = genEl("button", "Finish", { className: "orange" });

            let btnDiv = genEl("div", [startBtn, delBtn], { className: "flex" });
            let newArticle = genEl("article", [
                genEl("h3", taskName),
                genEl("p", `Description: ${descriptionValue}`),
                genEl("p", `Due Date: ${dateValue}`),
                btnDiv
            ]);

            openDiv.appendChild(newArticle);

            startBtn.addEventListener("click", () => {
                progressDiv.appendChild(newArticle);
                startBtn.remove();
                btnDiv.appendChild(finishBtn)
            });

            delBtn.addEventListener("click", () => {
                newArticle.remove();
            })

            finishBtn.addEventListener("click", () => {
                completeDiv.appendChild(newArticle);
                btnDiv.remove()
            })
        }

    }


    function genEl(tag, content, attributes) {
        const element = document.createElement(tag);
        if (attributes) {
            Object.assign(element, attributes);
        }
        if (Array.isArray(content)) {
            content.forEach(appendEl)
        } else {
            appendEl(content);
        }
        function appendEl(node) {
            if (typeof node == 'string') {
                node = document.createTextNode(node);
            }
            element.appendChild(node);
        }
        return element;
    }
}