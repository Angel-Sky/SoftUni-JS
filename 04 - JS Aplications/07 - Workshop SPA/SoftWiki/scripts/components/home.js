import { getAllData, loadPage, errorHandler } from '../helpers.js'

export async function home() {
    // getAllData()
    //     .then(res => {
    //         this.posts = Object.entries(res)
    //             .map(([postId, data]) => { return { postId, ...data } })
    //         changeContext(this);
    //         loadPage.call(this, 'homePage');
    //     }).catch( err => {
    //         changeContext(this);
    //         loadPage.call(this, 'homePage');
    //         errorHandler(err)
    //     })
    try {
        let data = await getAllData();
        data.articles = Object.entries(articles)
            .map(([articleId, data]) => { return { articleId, ...data } })
    } catch (err) {
        errorHandler(err)
    }

    changeContext(this);
        loadPage.call(this, 'homePage');
}