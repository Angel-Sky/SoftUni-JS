function attachEventsListeners() {

    const convertData = {
        "days": (days) => {
            let hours = days * 24;
            let minutes = hours * 60;
            let sec = minutes * 60

            return [hours, minutes, sec];
        },
        "hours": (hours) => {
            let days = hours / 24;
            let minutes = hours * 60;
            let sec = minutes * 60

            return [days, minutes, sec];
        },
        "minutes": (min) => {
            let sec = min * 60;
            let hours = min/ 60;
            let days = hours / 24;

            return [days, hours, sec];
        },
        "seconds": (sec) => {
            let minutes = sec / 60;
            let hours = minutes / 60;
            let days = hours / 24;

            return [days, hours, minutes];
        }
    }
    let daysInput = document.querySelector("#days");
    let hoursInput = document.querySelector("#hours");
    let minutesInput = document.querySelector("#minutes");
    let secondsInput = document.querySelector("#seconds");
    
    let target = document.querySelector("main");
    
    function inputHandler(input, unit, firstInput, secInput, thirdInput ) {
        let value = Number(input.value);
        let [firstUnit, secUnit, thirdUnit] = convertData[unit](value);
        firstInput.value = firstUnit;
        secInput.value = secUnit;
        thirdInput.value = thirdUnit;
    }

    target.addEventListener("click",  (e) => {
       if (e.target.id === "daysBtn") {
           inputHandler(daysInput, "days", hoursInput, minutesInput, secondsInput);
       } else if (e.target.id === "hoursBtn") {
           inputHandler(hoursInput, "hours", daysInput, minutesInput, secondsInput);
       } else if (e.target.id === "minutesBtn") {
           inputHandler(minutesInput, "minutes", daysInput, hoursInput, secondsInput);
       } else if (e.target.id === "secondsBtn") {
           inputHandler(secondsInput, "seconds", daysInput, hoursInput, minutesInput);
       }
    })

 
    
}