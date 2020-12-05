import { getSpecificData, getUserData, errorHandler } from "../helpers.js";

export function like() {
    const { id } = this.params;
    const url = baseUrl + '/' + id + `.json?auth=${getUserData().idToken}`

    getSpecificData(id)
        .then(res => {
            let likesArray = res.likes;
            const currentUserEmail = getUserData().email;
            if (likesArray.includes(currentUserEmail)) {
                const error = { message: "You have already liked this idea!" };
                errorHandler(error);
                return
            } else {
                likesArray.push(currentUserEmail);
                return likesArray;
            }
        })
        .then(likesArr => {
            fetch(url, {
                method: 'PATCH',
                body: JSON.stringify({ likes: likesArr })
            }).then(() => this.redirect(`#/details/${id}`))
                .catch(errorHandler)
        })
        .catch(errorHandler)
}