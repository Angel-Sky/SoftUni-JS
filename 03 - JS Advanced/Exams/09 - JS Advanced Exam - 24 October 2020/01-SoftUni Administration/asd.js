function solve() {
    const inputs = Array.from(document.querySelectorAll("input"));
    const [lectureNameInput, dateInput] = inputs;
    const module = document.querySelector("select");
    const trainings = document.querySelector(".modules");
    
    document.querySelector(".form-control > button").addEventListener("click", addEvent);

    function addEvent(e) {
        e.preventDefault();
        const lectureNamesArr = Array.from(document.querySelectorAll(".module h3"));
        const lecture = lectureNameInput.value;
        let [date, time] = dateInput.value.split("T");
        date = date.split("-").join("/");
        
        const moduleText = module.options[module.selectedIndex].text.toUpperCase();

        let existingLecture = lectureNamesArr.find(x => x.textContent === `${moduleText}-MODULE`);
        let ul;

        if (lecture !== "" && date !== "" && moduleText !== "Select module...") {
            const delBtn = genEl("button", "Del", { className: "red" });
            const h4 = genEl("h4", `${lecture} - ${date} - ${time}`);
            
            const moduleDiv = genEl("div", [
                genEl("h3", moduleText + "-MODULE"),
            ], { className: "module" });
            const moduleUl = genEl("ul", []);
            const modulLi = genEl("li", [
                h4,
                delBtn
            ], { className: "flex" });

            if (existingLecture === undefined) {
                trainings.appendChild(moduleDiv);
                moduleDiv.appendChild(moduleUl);
                moduleUl.appendChild(modulLi)
                ul = moduleUl;
            } else {
                ul = existingLecture.parentElement.querySelector("ul");
                ul.appendChild(modulLi)
                sortList(ul); 
            }

            lectureNameInput.value = "", dateInput.value = "";

            delBtn.addEventListener("click", () => {
                ul.removeChild(modulLi);
                if (ul.textContent == "") {
                    document.querySelector(".module").remove() //TODO да мине с референция, а не хардкоднато...
                }
            })
        }
    }

    function sortList(ul) {
        let sorted = Array.from(ul.getElementsByTagName("li")).sort((a, b) =>
           a.children[0].innerText.split(' - ')[1].localeCompare(b.children[0].innerText.split(' - ')[1])
        );
        
        sorted.forEach((li) => ul.appendChild(li));
     }


    /**
  * e.g. genEl("div", [genEl("p", ["Im awesome"], {className: "awesome"}])) -> Ще създаде div, в който има елемент P с текст Im awesome. Div-a ще има клас awesome
 * @param {string} tag Tag name of DOM element
 * @param {array} content Can be [array] or string
 * @param {object} attributes {Object property, e.g. className: silver}
 */

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
            if (typeof node == 'string' || typeof node == "number") {
                node = document.createTextNode(node);
            }
            element.appendChild(node);
        }
        return element;
    }
};