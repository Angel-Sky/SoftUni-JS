function companyUsers(input) {
    let companies = {};

    for (let line of input) {
        let [companyName, id] = line.split(" -> ");

        if (!companies.hasOwnProperty(companyName)){
            companies[companyName] = []
            companies[companyName].push(id);
        } else {
            let ids = Object.values(companies[companyName]);
            if (!ids.includes(id)) {
                companies[companyName].push(id);
            }
        }
    }

    let sortedNames = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));
   
    for (let line of sortedNames) {
        console.log(line[0]);
        console.log("-- " + line[1].join("\n-- "))
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345',
    'HP -> BB12345'
  ]
  )

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
  ]
  )