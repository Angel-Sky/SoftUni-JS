function systemComponents(input) {

    let filledData = input.reduce((acc, data) => {
        let [domain, subdomain, page] = data.split(" | ");
        if (!acc.hasOwnProperty(domain)) {
            acc[domain] = {};
        }
        if (!acc[domain].hasOwnProperty(subdomain)) {
            acc[domain][subdomain] = [];
        }
        acc[domain][subdomain].push(page);

        return acc;
    }, {})

    Object.entries(filledData)
        .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]))
        .forEach(el => {
            console.log(el[0]);
            let insideObj = Object.entries(el[1])
                .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length );

            for (let line of insideObj) {
                console.log(`|||${line[0]}`);
                console.log(`||||||${line[1].join("\n||||||")}`);
            }
        })
}

systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]
)