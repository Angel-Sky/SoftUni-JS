import {errorHandler} from '../helpers.js'

export function deletePost() {
    const { postId } = this.params;
    fetch(baseUrl + postId + '.json', {
        method: "DELETE"
    }).then(() => this.redirect('/'))
        .catch(errorHandler)
}