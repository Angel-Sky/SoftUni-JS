function travelTime(input) {
    let objCountry = {};
    for (let line of input) {
        let [country, city, price] = line.split(" > ");
        price = Number(price);
        if (objCountry.hasOwnProperty(country)) {
            let currentCounty = objCountry[country];

            if (currentCounty.hasOwnProperty(city)) {
                let oldPrice = currentCounty[city];
                if (price < oldPrice) {
                    currentCounty[city] = price;
                }
            } else {
                currentCounty[city] = price;
            }
                    
        } else {
            objCountry[country] = {};
            objCountry[country][city] = price;
         }   
    }

    let sortedCountries = Object.entries(objCountry)
        .sort(sortCountries);

    for (let [name, cities] of sortedCountries) {
        let sortedCities = Object.entries(cities)
            .sort(sortCities);
        let output = `${name} ->`;
        for (let [cityName, price] of sortedCities) {
            output += ` ${cityName} -> ${price}`
        }

        console.log(output)
    }

    function sortCountries(firstCountry, secCountry) {
        return firstCountry[0].localeCompare(secCountry[0]);
    }

    function sortCities(firstCity, secCity) {
        return firstCity[1] - secCity[1];
    }
}

travelTime([
    'Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200'
  ]
  )