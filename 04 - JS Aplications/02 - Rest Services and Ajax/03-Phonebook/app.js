function attachEvents() {
    const url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';
    loadAndDelData(url);
    createContact(url);
}

function loadAndDelData(url) {
    const phonebook = document.querySelector("#phonebook");
    document.querySelector("#btnLoad").addEventListener("click", renderData);

    function renderData() {
        phonebook.innerHTML = "";
        fetch(url)
            .then(url => url.json())
            .then(data => {
                for (let line in data) {
                    const delBtn = document.createElement("button");
                    delBtn.textContent = "Delete";

                    const li = document.createElement("li");
                    li.textContent = `${data[line].person}: ${data[line].phone}`;

                    li.appendChild(delBtn);
                    phonebook.appendChild(li);

                    delBtn.addEventListener("click", () => {
                        deleteContact(line, li);
                    });
                }
            })
    }

    function deleteContact(key, property) {
        const delUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json `
        fetch(delUrl, { method: 'DELETE' });
        property.remove();
    }

}

function createContact(url) {
    const person = document.querySelector("#person");
    const phone = document.querySelector("#phone");

    document.querySelector("#btnCreate").addEventListener("click", addContact);

    function addContact() {
        if (person.value.trim() !== "" && phone.value.trim() !== "") {
            let obj = {
                "person": person.value,
                "phone": phone.value
            }
            fetch(url, {
                method: "POST",
                body: JSON.stringify(obj)
            })

            phone.value = "", person.value = "";
        }
    }
}


attachEvents();