function attachEventsListeners() {
    let inputField = document.querySelector("#inputDistance");
    let outputField = document.querySelector("#outputDistance");
    let convertBtn = document.querySelector("#convert");

    convertBtn.addEventListener("click", convert);

    function convert(e) {
        let inputUnits = document.querySelector("#inputUnits");
        let fromUnit = inputUnits.options[inputUnits.selectedIndex].value;
        let outputUnits = document.querySelector("#outputUnits");
        let toUnit = outputUnits.options[outputUnits.selectedIndex].value;

        if (!isNaN((inputField.value))) {
            let inputNum = inputField.value.trim();
            let inputToMeters = toMeters[fromUnit](inputNum);
            let outputFromMeters = metersToOutput[toUnit](inputToMeters)

            outputField.value = outputFromMeters;
        }
               
    }

    const toMeters = {
        'km': value => value * 1000,
        'm': value => value * 1,
        'cm': value => value * 0.01,
        'mm': value => value * 0.001,
        'mi': value => value * 1609.34,
        'yrd': value => value * 0.9144,
        'ft': value => value * 0.3048,
        'in': value => value * 0.0254
    }

    const metersToOutput = {
        'km': value => value / 1000,
        'm': value => value / 1,
        'cm': value => value / 0.01,
        'mm': value => value / 0.001,
        'mi': value => value / 1609.34,
        'yrd': value => value / 0.9144,
        'ft': value => value / 0.3048,
        'in': value => value / 0.0254
    }
  
}