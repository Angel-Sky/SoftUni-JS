function frindlist(data) {
    let friendList = data.shift().split(", ");
    let blacklisted = 0, losted = 0;

    for (let line of data) {
        if (line != "Report") {
            let [command, value, newName] = line.split(" ");
            switch(command) {
                case "Blacklist":
                    if (friendList.includes(value)) {
                        console.log(`${value} was blacklisted.`);
                        let indexOfValue = friendList.indexOf(value);
                        friendList.splice(indexOfValue, 1, "Blacklisted");
                        blacklisted++;
                    } else {
                        console.log(`${value} was not found.`)
                    }
                break;
                case "Error":
                    let index = Number(value);
                    if (friendList[index] != "Lost" && friendList[index] != "Blacklisted") {
                        let name = friendList[index];
                        console.log(`${name} was lost due to an error.`)
                        friendList.splice(index, 1, "Lost");
                        losted++;
                    }
                break;
                case "Change":
                    value = Number(value);
                    if (value < friendList.length) {
                        console.log(`${friendList[value]} changed his username to ${newName}. `);
                        friendList[value] = newName; //Eddie -> Mike123
                    }
                break;
            }
        } else {
            console.log(`Blacklisted names: ${blacklisted}`);
            console.log(`Lost names: ${losted}`);
            console.log(friendList.join(" "));
        }
    }
}

frindlist([
    'Mike, John, Eddie',
    'Blacklist Mike',
    'Error 0',
    'Error 1',
    'Change 2 Mike123',
    'Report'
  ]
  )