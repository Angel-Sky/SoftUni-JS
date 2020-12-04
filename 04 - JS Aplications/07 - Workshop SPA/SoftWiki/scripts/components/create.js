import {errorHandler} from '../helpers.js'

export function createPost () {
    const { title, category, content } = this.params;
    const obj = { title, category, content, creator: data.userid };

    fetch(baseUrl + '.json', {
        method: "POST",
        body: JSON.stringify(obj)
    }).then(() => this.redirect('/'))
        .catch(errorHandler)
}