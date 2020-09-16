function followers(input) {
    let followers = {};

    for (let line of input) {
        if (line != "Log out") {
            let [command, name, value] = line.split(": ");
            value = Number(value);

            switch(command) {
                case "New follower":
                    if (!followers.hasOwnProperty(name)) {
                        followers[name] = {likes: 0, comments: 0}
                    }
                break;

                case "Like":
                    if (!followers.hasOwnProperty(name)) {
                        followers[name] = {likes: value, comments: 0}
                    } else {
                        followers[name].likes += value;
                    }
                    break;

                case "Comment":
                    if (!followers.hasOwnProperty(name)) {
                        followers[name] = {likes: 0, comments: 1}
                    } else {
                        followers[name].comments += 1;
                    }
                    break;

                case "Blocked":
                    if (followers.hasOwnProperty(name)) {
                        delete followers[name];
                    } else {
                       console.log(`${name} doesn't exist.`)
                    } 
                break;
            }
        } else {
            let sorted = Object.entries(followers)
            console.log(sorted.length + " followers");
            sorted
                .sort((a, b) => {
                    if ((a[1].likes + a[1].comments) === (b[1].likes + b[1].comments)) {
                        return a[0].localeCompare(b[0]);
                    } else {
                        return b[1].likes - a[1].likes;
                    }
                })
                .forEach(el => {
                    console.log(`${el[0]}: ${el[1].likes + el[1].comments}`)
                });
        }
    }
}

followers([
    'Like: A: 3',
    'Comment: A',
    'New follower: B',
    'Blocked: A',
    'Comment: B',
    'Like: C: 5',
    'Like: D: 5',
    'Log out'
  ]
  
  )