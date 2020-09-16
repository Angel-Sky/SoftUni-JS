function bookShelf(input) {
    let shelfs = {};
    let id, genre;

    for (let line of input){
        if (line.includes("->")) {
            [id, genre] = line.split(" -> ");
            id = Number(id);

            if (!shelfs.hasOwnProperty(id)){
                shelfs[id] = [genre];
            }
        } else {
            let [title, paramethers] = line.split(": ");
            let [autor, genre] = paramethers.split(", ");

            for (let id in shelfs) {
                if (shelfs[id].includes(genre)) {
                    shelfs[id].push(title + ": " + autor)
                }
            }
        }
    }

    let sorted = Object.entries(shelfs)
        .sort((a, b) => {
            if (b[1].length - a[1].length) {
                 return b[1].length - a[1].length;
            } else {
              
            }
            
        })
        .forEach(el => {
            console.log(`${el[0]} ${el[1][0]} ${el[1].length-1}`);
            for (let line of el[1]){
                if (line.includes(":")){
                    console.log(`-- ${line}`);
                } 
            }
        })

}

bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']

)