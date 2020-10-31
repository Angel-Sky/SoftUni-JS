function solve() {
    const addoptionUl = document.querySelector("#adoption > ul");
    let adoptedUl = document.querySelector("#adopted > ul");
    let addBtn = document.querySelector("#container > button");

    addBtn.addEventListener("click", renderAdoptionData);

    function renderAdoptionData(e) {
        e.preventDefault();
        let petName = document.querySelector("[placeholder='Name']");
        let age = document.querySelector("[placeholder='Age']");
        let kind = document.querySelector("[placeholder='Kind']");
        let currOwner = document.querySelector("[placeholder='Current Owner']");

        if (petName.value !== "" && kind.value !== "" && currOwner.value !== "" && !isNaN(age.value)) {

            let contactOwnerBtn = genEl("button", "Contact with owner");
            let addoptionLi = genEl("li", [
                genEl("p", 
                    [genEl("strong", petName.value), ' is a ', 
                    genEl("strong", age.value), " year old ",
                    genEl("strong", kind.value)]),
                genEl("span", `Owner: ${currOwner.value}`),
                contactOwnerBtn
            ])

            addoptionUl.appendChild(addoptionLi);
            
            contactOwnerBtn.addEventListener("click", createNewAdoptionBtn);
            let tempName = petName.value, tempAge = age.value, tempKind = kind.value;
            petName.value = "", age.value = "", kind.value = "", currOwner.value = ""; 

            function createNewAdoptionBtn(e) {
                let takeItBtn = genEl("button", "Yes! I take it!");
                let newOwner = genEl("input", [], {placeholder: "Enter your names"});
                let newDiv = genEl("div", [newOwner, takeItBtn]);
                addoptionLi.appendChild(newDiv);
                e.target.remove();

                takeItBtn.addEventListener("click", makeAdoption);

                function makeAdoption() {
                    if (newOwner.value !== "") {
                        let checkedBtn = genEl("button", "Checked");
                        let addoptedLi = genEl("li", [
                            genEl("p", 
                                [genEl("strong", tempName), ' is a ', 
                                genEl("strong", tempAge), " year old ",
                                genEl("strong", tempKind)]),
                            genEl("span", `New Owner: ${newOwner.value}`),
                            checkedBtn
                        ])

                        adoptedUl.appendChild(addoptedLi);
                        addoptionLi.remove();

                        checkedBtn.addEventListener("click", (e) => {
                            addoptedLi.remove();
                        })
                    }
                }
            }
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

