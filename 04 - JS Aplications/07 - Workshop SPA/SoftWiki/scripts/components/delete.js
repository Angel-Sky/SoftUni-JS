import {errorHandler} from '../helpers.js'

export function deletePost() {
    const { id } = this.params;
    fetch(baseUrl + '/' + id + '.json', {
        method: "DELETE"
    }).then(() => this.redirect('/'))
        .catch(errorHandler)
}