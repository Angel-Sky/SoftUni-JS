function solve() {
    const url = 'https://judgetests.firebaseio.com/schedule/';
    const infoSpan = document.querySelector(".info");
    let stopID = 'depot';
    let stopName = '';

    function depart() {
        fetch(url + `${stopID}.json`)
            .then(url => url.json())
            .then(showNextStop)

        function showNextStop(data) {
            stopName = data.name;
            infoSpan.textContent = `Next stop ${stopName}`;
            stopID = data.next;
            switchBtns();
        }
    }

    function arrive() {
        infoSpan.textContent = `Arriving at ${stopName}`;
        switchBtns();
    }

    function switchBtns() {
        const departBtn = document.querySelector("#depart");
        const arriveBtn = document.querySelector("#arrive");

        const { disabled: isDisabled } = departBtn;

        if (isDisabled) {
            departBtn.disabled = false;
            arriveBtn.disabled = true;
        } else {
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();