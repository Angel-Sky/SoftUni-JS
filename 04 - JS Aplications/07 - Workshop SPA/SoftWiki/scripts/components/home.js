import {getAllPosts, loadPage, errorHandler} from '../helpers.js'

export function home() {
    getAllPosts()
        .then(res => {
            this.posts = Object.entries(res)
                .map(([postId, data]) => { return { postId, ...data } })
            changeContext(this);
            loadPage.call(this, 'homePage');
        }).catch( err => {
            changeContext(this);
            loadPage.call(this, 'homePage');
            errorHandler(err)
        })
}