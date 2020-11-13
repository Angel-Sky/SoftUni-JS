import * as data from "./data.js";
import genEl from "../dom-generator.js";

window.addEventListener("load", () => {
    const catchesDiv = document.querySelector("#catches");
    const loadBtn = document.querySelector(".load");
    const addBtn = document.querySelector(".add");

    loadBtn.addEventListener("click", renderCatches);
    addBtn.addEventListener("click", createCatch);

    async function renderCatches() {
        let catches = "";
        try {
            catches = await data.getEntries();
        } catch (err) {
            catchesDiv.appendChild(genEl("span", "There is no new data. Try again later"));
            console.log(err.message)
        }

        catchesDiv.innerHTML = "";
        Object.entries(catches).forEach(([key, innerData]) => {
            const updateBtn = genEl("button", "UPDATE");
            const delBtn = genEl("button", "DELETE");

            let catchDiv = genEl("div", "", { className: "catch" });

            //I know, it's ugly... TODO: Better code, using genEl function. References to inputs!
            catchDiv.innerHTML = `<label>Angler</label><input type="text" class="angler" value="${innerData.angler}"><hr>
            <label>Weight</label><input type="number" class="weight" value="${innerData.weight}"><hr>
            <label>Species</label><input type="text" class="species" value="${innerData.species}"><hr>
            <label>Location</label><input type="text" class="location" value="${innerData.location}"><hr>
            <label>Bait</label><input type="text" class="bait" value="${innerData.bait}"><hr>
            <label>Capture Time</label><input type="number" class="captureTime" value="${innerData.captureTime}"><hr>`;
            catchDiv.setAttribute("data-id", key);
            catchDiv.append(updateBtn, delBtn);
            catchesDiv.appendChild(catchDiv);

            delBtn.addEventListener("click", async () => {
                try {
                    delBtn.textContent = "Please wait...";
                    delBtn.disabled = true;
                    await data.deleteEntry(key);
                    catchDiv.remove();
                } catch (err) {
                    delBtn.textContent = "Button";
                    delBtn.disabled = false;
                    alert(err.message);
                }
            });

            updateBtn.addEventListener("click", async () => {
                try {
                    //TODO to work with references 
                    let entries = Array.from(catchDiv.querySelectorAll("input"));
                    let obj = {
                        angler: entries[0].value,
                        weight: entries[1].value,
                        species: entries[2].value,
                        location: entries[3].value,
                        bait: entries[4].value,
                        captureTime: entries[5].value,
                    };

                    await data.updateEntry(key, obj);
                    updateBtn.textContent = "UPDATING...";
                    updateBtn.disabled = true;
                    setInterval(() => {
                        updateBtn.textContent = "UPDATE";
                        updateBtn.disabled = false;
                    }, 1500);

                } catch (err) {
                    alert(err.message)
                }
            })
        });

    }

    async function createCatch() {
        let obj = createObj("#addForm");
        if (obj !== undefined) {
            try {
                await data.createEntry(obj);
                let message = document.querySelector("aside").appendChild(genEl("span", "Catch added successfully!"));
                setInterval(() => {
                    message.remove();
                }, 2500);
            } catch (err) {
                console.log(err)
            }
        } else {
            let message = document.querySelector("aside").appendChild(genEl("span", "All fields are required!"));
            setInterval(() => {
                message.remove();
            }, 1500);
        }
    }

    function createObj(tag) {
        let angler = document.querySelector(`${tag} .angler`);
        let weight = document.querySelector(`${tag} .weight`);
        let location = document.querySelector(`${tag} .location`);
        let bait = document.querySelector(`${tag} .bait`);
        let captureTime = document.querySelector(`${tag} .captureTime`);
        let species = document.querySelector(`${tag} .species`);

        let obj = {};
        if (angler.value.trim() !== "" && weight.value.trim() !== "" && location.value.trim() !== "" && bait.value.trim() !== "" && captureTime.value.trim() !== "" && species.value.trim() !== "") {
            obj = {
                angler: angler.value,
                weight: weight.value,
                location: location.value,
                bait: bait.value,
                captureTime: captureTime.value,
                species: species.value
            };

            angler.value = "", weight.value = "", location.value = "", bait.value = "", captureTime.value = "", species.value = "";
        }
        if (Object.entries(obj).length > 0) {
            return obj;
        }
    }
});





