import { getSpecificData, getUserData, errorHandler } from "../helpers.js";

export function comment(context) {
    const { id, newComment } = context.params;
    const url = baseUrl + '/' + id + `.json?auth=${getUserData().idToken}`

    getSpecificData(id)
        .then(res => {
            let commentsArr = res.comments;
            this.idea.comments = commentsArr; 
            //const currentUserEmail = getUserData().email;
            // if (commentsArr.includes(currentUserEmail)) {
            //     const error = { message: "You have already liked this idea!" };
            //     errorHandler(error);
            //     return
            // } else {
            commentsArr.push(newComment);
            context.commentsArray = commentsArr;
            return commentsArr;
            //}
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