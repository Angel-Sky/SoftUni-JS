import { getAllData, loadPage, mapCategories, errorHandler } from '../helpers.js'

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
       // console.log(await getAllData())
        this.articles = mapCategories(await getAllData());
        console.log(this.articles)
        // let articles = Object.entries(data)
        //     .map(([articleId, data]) => { return { articleId, ...data } })

        
        // console.log(articles.filter(x => x.category))
   
    changeContext(this);
        loadPage.call(this, 'homePage');
}