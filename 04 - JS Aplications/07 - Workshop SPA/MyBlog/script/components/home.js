import {getAllPosts, loadPage, errorHandler} from '../helpers.js'

export function home(context) {
    getAllPosts()
        .then(res => {
            context.posts = Object.entries(res)
                .map(([postId, data]) => { return { postId, ...data } })
            changeContext(context);
            loadPage.call(context, 'homePage', 'postPartial');
        }).catch(errorHandler)
}