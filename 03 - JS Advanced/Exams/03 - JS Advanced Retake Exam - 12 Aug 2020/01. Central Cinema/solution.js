function solve() {
    document.querySelector("#container > button").addEventListener("click", addMovie);
    let moviesSection = document.querySelector("#movies ul");
    let archiveSection = document.querySelector("#archive ul");

    function addMovie(e) {
        e.preventDefault();
        let inputs = Array.from(document.querySelectorAll("#container input"))
        let [name, hall, ticketPrice] = inputs;
        if (name.value != "" && hall.value !== "" && !isNaN(ticketPrice.value)) {
            let soldTickets =  genEl("input", "", {placeholder: "Tickets Sold"});
            let archiveBtn = genEl("button", "Archive");
            let movieOnScreen = genEl("li", [
                genEl("span", name.value),
                genEl("strong", `Hall: ${hall.value}`),
                genEl("div", [
                    genEl("strong", Number(ticketPrice.value).toFixed(2)),
                    soldTickets,
                    archiveBtn
                ])
            ]);

            moviesSection.appendChild(movieOnScreen);
            let tempName = name.value, tempHall = hall.value, tempTicketPrice = Number(ticketPrice.value);
            name.value = "", hall.value = "", ticketPrice.value = "";
            archiveBtn.addEventListener("click", (e) => {
                archiveMovie(soldTickets, movieOnScreen, tempName, tempHall, tempTicketPrice);
            })
        }  
    }

    function archiveMovie(soldTickets, movieOnScreen, name, hall, ticketPrice) {
        if (soldTickets.value !== "" && !isNaN(soldTickets.value)) {
            movieOnScreen.remove();
            let deleteBtn = genEl("button", "Delete");
            let archivedMovie = genEl("li", [
                genEl("span", name),
                genEl("strong", `Total amount: ${(soldTickets.value * ticketPrice).toFixed(2)}`),
                deleteBtn
            ]);
            archiveSection.appendChild(archivedMovie);

            deleteBtn.addEventListener("click", (e) => {
                archiveSection.removeChild(archivedMovie);
            });

        }
    }

    document.querySelector("#archive button").addEventListener("click", () => {
        archiveSection.innerHTML = "";
    })

    function genEl(tag, content, attributes){
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