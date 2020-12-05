import { errorHandler, getUserData } from '../helpers.js'

export function create() {
    const { title, category, content } = this.params;
    const url = baseUrl + `.json?auth=${getUserData().idToken}`
    const obj = { title, category, content, creator: getUserData().localId };

    //TO DO

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(() => { this.redirect('/') })
        .catch(errorHandler)

}