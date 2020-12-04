import { errorHandler, getUserData } from '../helpers.js'

export function create() {
    const { title, category, content } = this.params;
    const categories = ['JavaScript', 'Python', 'Java', 'C#'];

    if (categories.includes(category)) {
        const url = baseUrl + `.json?auth=${getUserData().idToken}`
        const obj = { title, category, content, creator: getUserData().localId };

        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(() => { this.redirect('/') })
            .catch(errorHandler)
    } else {
        let error = { message: "The category must be one of the following: JavaScript, Python, Java or C#" };
        errorHandler(error);
    }
}