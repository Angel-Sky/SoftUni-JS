import { getSpecificData, getUserData, errorHandler } from "../helpers.js";

export function comment(context) {
    const { id, newComment } = context.params;
    const url = baseUrl + '/' + id + `.json?auth=${getUserData().idToken}`

    getSpecificData(id)
        .then(res => {
            let commentsArr = res.comments;
            commentsArr.push(newComment);
            return commentsArr;
        })
        .then(commentsArr => {
            fetch(url, {
                method: 'PATCH',
                body: JSON.stringify({ comments: commentsArr })
            }).then(() => this.redirect(`#/details/${id}`))
                .catch(errorHandler)
        })
        .catch(errorHandler)
}