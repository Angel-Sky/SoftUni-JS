import genEl from "../dom-generator.js";

window.addEventListener("load", () => {
    const baseUrl = 'https://books-f6954.firebaseio.com/students/';
    const table = document.querySelector("#results tbody");
    const errorDiv = document.querySelector("#error")
    const form = document.querySelector("#form");
    const fistNameInp = document.querySelector("#firstName");
    const lastNameInp = document.querySelector("#lastName");
    const facultyNumInp = document.querySelector("#facultyNum");
    const gradeInp = document.querySelector("#grade");

    loadStudents();

    function loadStudents() {
        fetch(baseUrl + ".json")
            .then(res => res.json())
            .then(renderStrudents)
            .catch(errorHandler)
    }

    function renderStrudents(data) {
        table.innerHTML = "";
        Object.entries(data).forEach(([id, innerData]) => {
            const tableRow = genEl("tr", [
                genEl("td", innerData.id),
                genEl("td", innerData.firstName),
                genEl("td", innerData.lastName),
                genEl("td", innerData.facultyNum),
                genEl("td", `${(Number(innerData.grade)).toFixed(2)}`),
            ]);

            table.appendChild(tableRow);
        });
    }

    document.querySelector("#submit").addEventListener("click", addStudent)

    function addStudent(e) {
        e.preventDefault();

        fetch(baseUrl + ".json")
            .then(res => res.json())
            .then(data => Object.keys(data).length)
            .then(createStudent)
            .catch(errorHandler)

        async function createStudent(id) {
            const name = fistNameInp.value.trim();
            const familyName = lastNameInp.value.trim();
            const facNum = facultyNumInp.value.trim();
            const gr = gradeInp.value.trim();
            if (name !== "" && familyName !== "" && facNum !== "" && gr !== "" && !isNaN(facNum) && !isNaN(gr)) {
                const obj = {
                    id: id+1,
                    firstName: name,
                    lastName: familyName,
                    facultyNum: facNum,
                    grade: gr
                }

                try {
                    await addEntry(obj);
                    loadStudents();
                    form.reset();
                } catch (err) {
                    errorHandler(err);
                }
                
            } else {
                const err = {message: "All fields are required! Faculty Number and Grade must be of type Number"};
                errorHandler(err);
            }
        }
    }

    async function addEntry(obj) {
        await fetch(baseUrl + ".json", { method: "POST", body: JSON.stringify(obj)});
    }

    function errorHandler(err) {
        errorDiv.style.display = "block";
        errorDiv.textContent = err.message;
        setTimeout(() => {
            errorDiv.style.display = "none";
        }, 3000);
    }

})