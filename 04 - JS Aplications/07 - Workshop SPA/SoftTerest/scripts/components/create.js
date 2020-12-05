import { errorHandler, getUserData } from '../helpers.js'

export function create() {
    const { title, description, imageURL } = this.params;
    const url = baseUrl + `.json?auth=${getUserData().idToken}`
    const obj = { title, description, imageURL, creator: getUserData().localId, 'likes': [getUserData().email], 'comments': ['none'],};

    //Validation
    if (title.length < 6) {
        const error = { message: "Title should be at least 6 characters long!" };
        errorHandler(error);
        return;
    }
    if (description.length < 6) {
        const error = { message: "The description should be at least 10 characters long"};
        errorHandler(error);
        return;
    }

    if (description.length < 6) {
        const error = { message: "The description should be at least 10 characters long"};
        errorHandler(error);
        return;
    }
    let startOfUrl = imageURL.substring(0, 8);
    console.log(startOfUrl)
    if (startOfUrl.includes("https://") || startOfUrl.includes("http://")) {
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(() => { this.redirect('/') })
            .catch(errorHandler)
    
    } else {
        const error = { message: "The image should start with \"http://\" or \"https://\"."};
        errorHandler(error);
        return;
    }

    
}