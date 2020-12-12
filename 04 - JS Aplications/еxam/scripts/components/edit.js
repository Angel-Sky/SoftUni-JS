import { getSpecificData, loadPage, errorHandler, getUserData, showMessage, loadingMessage } from '../helpers.js';

export function loadEditFormWithInfo() {
    const { id } = this.params;
    getSpecificData(id)
        .then(res => {
            this.destination = { id, ...res };
            changeContext(this)
            loadPage.call(this, 'editPage');
        });
}

export function editPost() {
    const { id, destination, city, duration, departureDate, imgUrl } = this.params;
    const url = baseUrl + '/' + id + '.json' + `?auth=${getUserData().idToken}`;

    if (destination == "" || city == "" || duration == "" || departureDate == "" || imgUrl == "") {
        const error = { message: "All input fields shouldn’t be empty" };
        errorHandler(error);
        return;
    }

    if (duration < 1) {
        const error = { message: "The duration should be at least 1 day" };
        errorHandler(error);
        return;
    }

    const startOfUrl = imgUrl.substring(0, 8);

    if (startOfUrl.includes("https://") || startOfUrl.includes("http://")) {
        const newData = { destination, city, duration, departureDate, imgUrl };
        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(newData)
        }).then(res => {
            if (res.error) {
                throw new Error(res.error.message);
            } else {
                loadingMessage();
                showMessage('Destination edited successfuly.', this, `#/details/${id}`)
            }
        })
            .catch(errorHandler)
    } else {
        const error = { message: 'The image URL should start with "http://" or "https://"' };
        errorHandler(error);
        return;
    }
}
