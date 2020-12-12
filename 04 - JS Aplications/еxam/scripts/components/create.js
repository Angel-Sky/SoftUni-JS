import { errorHandler, getUserData, loadingMessage, showMessage } from '../helpers.js'

export function create() {
    const url = baseUrl + `.json?auth=${getUserData().idToken}`
    const { destination, city, duration, departureDate, imgUrl } = this.params;
         
    if (destination== "" || city== "" || duration== "" || departureDate== "" || imgUrl== "") {
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
        const obj = { destination, city, duration, departureDate, imgUrl, creator: getUserData().localId };
    
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => {
                if (res.error) {
                    throw new Error(res.error.message);
                } else {
                    loadingMessage();
                    showMessage('Destination added successfuly.', this, '/')
                }
            })
            .catch(errorHandler)
    } else {
        const error = { message: 'The image URL should start with "http://" or "https://"'};
        errorHandler(error);
        return;
    }
}