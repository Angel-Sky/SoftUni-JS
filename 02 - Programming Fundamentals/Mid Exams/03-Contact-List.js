function contactList(data) {
    let contacts = data.shift().split(" ");
    let isPrint = false;
    for (let line of data) {
        if (!isPrint) {
            line = line.split(" ");
            let command = line[0];
            switch (command) {
                case "Add":
                    let name = line[1];
                    let index = +line[2];

                    if (!contacts.includes(name)) {
                        contacts.push(name);
                    } else {
                        if (index >= 0 && index < contacts.length) {
                            contacts.splice(index, 0, name);
                        }
                    }

                break;

                case "Remove":
                    let i = +line[1];
                    if (i >= 0 && i < contacts.length) {
                        contacts.splice(i, 1);
                    }
                break;

                case "Export":
                    let startIndex = +line[1];
                    let count = +line[2];

                    let exported = contacts.slice(startIndex, startIndex + count);
                    console.log(exported.join(" "));
                break;

                case "Print":
                    let howToPrint = line[1];
                    if (howToPrint == "Normal") {
                        console.log("Contacts: " + contacts.join(" "));
                    } else {
                        console.log("Contacts: " + contacts.reverse().join(" "));
                    }
                    isPrint = true;
                break;
            }
        } else {
            break;
        }
    }
}

contactList([
    'Zayn Katy Ariana Avril Nick Mikolas',
    'Remove 3',
    'Add Jacob 0',
    'Export 0 3',
    'Export 3 8',
    'Print Reversed'
  ]
  
)