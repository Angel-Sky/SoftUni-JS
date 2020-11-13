function getInfo() {
    const stopId = document.querySelector("#stopId").value;
    const stopName = document.querySelector("#stopName");
    const buses = document.querySelector("#buses");
    const validStops = ['1287', '1308', '1327', '2334'];

    stopName.textContent = "", buses.innerHTML = "";
    const url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

    if (validStops.includes(stopId)) {
        fetch(url)
            .then(url => url.json())
            .then(appendBuses)
    } else {
        stopName.textContent = "Error";
        return;
    }

    function appendBuses(data) {
        stopName.textContent = data.name;
        for (let bus in data.buses) {
            let li = document.createElement("li");
            li.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
            buses.appendChild(li);
        }
    }
}