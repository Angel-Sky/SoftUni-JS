function argumentInfo() {
    let info = {};
    
    Array.from(arguments).forEach(arg => {
        let type = typeof arg;
        if (!info.hasOwnProperty(type)) {
            info[type] = [arg];
        } else {
            info[type].push(arg);
        }

        console.log(`${type}: ${arg}`)
    })

    let sorted = Object.entries(info)
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(line => {
            console.log(line[0] + " = " + line[1].length)
        })
}

argumentInfo([], {}, 42, 'cat', 15, 'kitten', 'tomcat')