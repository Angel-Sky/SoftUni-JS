function solve(input) {
    let list = [];
    const commands = {
        add: (text) => list.push(text),
        remove: text => list = list.filter(x => x != text),
        print: () => console.log(list.join(","))
    }

    input
        .map(x => x.split(" "))
        .forEach(([command, text]) => {
            commands[command](text);
        });
}

solve(['add peter', 'add george', 'add peter', 'remove peter','print'])