import {errorHandler, getUserData} from '../helpers.js'

export function deletePost() {
    const { id } = this.params;
    const url = baseUrl + '/' + id + `.json?auth=${getUserData().idToken}`
    fetch(url, {
        method: "DELETE"
    }).then(() => this.redirect('/'))
        .catch(errorHandler)
}