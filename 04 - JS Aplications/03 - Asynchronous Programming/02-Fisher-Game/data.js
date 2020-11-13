const url = `https://fisher-game.firebaseio.com/catches.json`;

export async function getEntries() {
    return await (await fetch(url)).json();
}

export async function createEntry(entry) {
    return (await fetch(url, {
        method: "POST",
        body: JSON.stringify(entry)
    })).json();
}

export async function updateEntry(id, entry) {
    return (await fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
        method: "PUT",
        body: JSON.stringify(entry)
    })).json();
}

export function deleteEntry(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
            method: "DELETE"
        })
            .then(data => setTimeout(resolve, 1000))
            .catch(er => reject(err))
    });
}


