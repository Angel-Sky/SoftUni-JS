//Load server data from module data.js
//Load DOM generator function from dom-generator.js
import * as data from "./data.js";
import genEl from "../dom-generator.js";

//An obj with wheather symbols
const symbols = {
    'Sunny': '&#x2600;', // ☀
    'Partly sunny': '&#x26C5;', // ⛅
    'Overcast': '&#x2601;', // ☁
    'Rain': '&#x2614;', // ☂
    'Degrees': '&#176;'   // °
}

//Do the whole logic after the window is fully load
window.addEventListener("load", () => {
    const locationInput = document.querySelector("#location");
    const mainDiv = document.querySelector("#forecast");
    const currentForcastDiv = document.querySelector("#current");
    const upcomingForcastDiv = document.querySelector("#upcoming");
    const content = document.querySelector("#content");

    document.querySelector("#submit").addEventListener("click", getForcast);

    async function getForcast() {
        const location = locationInput.value;

        if (location.trim() !== "") {
            //ERROR data handler
            let code = '';
            try {
                code = await data.getCodeAsync(location);
            } catch (err) {
                clearDomData();
                content.appendChild(genEl("div", "Couldn't Find This Location", { id: "error" }));
                return;
            }

            //Async Functionallity from data.js
            const currentForcast = await data.getCurrentForcastAsync(code);
            const upcomingForcast = await data.getUpcomingForcastAcync(code);
           
            clearDomData();
            renderTodayForcast(currentForcast);
            renderUpcomingForcast(upcomingForcast);

            mainDiv.style.display = "block";
        }
    }

    function renderTodayForcast(currentWeather) {
        const symbolSpan = genEl("span", "", { className: "condition symbol" });
        symbolSpan.innerHTML = symbols[currentWeather.forecast.condition];

        const temperatureSpan = genEl("span", "", { className: "forecast-data" });
        temperatureSpan.innerHTML = `${currentWeather.forecast.high}${symbols.Degrees}/${currentWeather.forecast.low}${symbols.Degrees}`

        const result = genEl("div", [
            symbolSpan,
            genEl("span", [
                genEl("span", currentWeather.name, { className: "forecast-data" }),
                temperatureSpan,
                genEl("span", currentWeather.forecast.condition, { className: "forecast-data" }),
            ], { className: "condition" }),

        ], { className: "forecasts" });

        currentForcastDiv.appendChild(result);

    }

    function renderUpcomingForcast(upcomingWeather) {
        const divForcast = genEl("div", "", { className: "forecast-info" });

        //For each day of upcoming forcast render some data via renderEachDay function
        upcomingWeather.forecast.map(f => renderEachDay(f));

        function renderEachDay(forecast) {
            const symbolSpan = genEl("span", "", { className: "symbol" });
            symbolSpan.innerHTML = symbols[forecast.condition];

            const temperatureSpan = genEl("span", "", { className: "forecast-data" });
            temperatureSpan.innerHTML = `${forecast.high}${symbols.Degrees}/${forecast.low}${symbols.Degrees}`;

            let result = genEl("span", [
                symbolSpan,
                temperatureSpan,
                genEl("span", forecast.condition, { className: "forecast-data" }),
            ], { className: "upcoming" });

            divForcast.appendChild(result);
        }

        upcomingForcastDiv.appendChild(divForcast);
    }

    function clearDomData() {
        //Clear DIVs before rendering (maybe there is smarter way, couldnt do it with references :/)
        if (currentForcastDiv.contains(document.querySelector(".forecasts"))) {
            document.querySelector(".forecasts").remove();
        }

        if (upcomingForcastDiv.contains(document.querySelector(".forecast-info"))) {
            document.querySelector(".forecast-info").remove();
        }

        if (content.contains(document.querySelector("#error"))) {
            content.removeChild(document.querySelector("#error"))
        }
        locationInput.value = "";
        mainDiv.style.display = "none";
    }
});


