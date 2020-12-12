import {errorHandler, getUserData, showMessage, loadingMessage} from '../helpers.js'

export function remove() {
    const { id } = this.params;
    const url = baseUrl + '/' + id + `.json?auth=${getUserData().idToken}`
    fetch(url, {
        method: "DELETE"
    }).then(res => {
        if (res.error) {
            throw new Error(res.error.message);
        } else {
            loadingMessage();
            showMessage('Destination deleted.', this, '/destinations')
        }
    })
    .catch(errorHandler)
}

//Destination deleted.” 