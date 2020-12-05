import { getAllData, loadPage, mapCategories, errorHandler } from '../helpers.js'

export function home() {
    getAllData()
        .then(res => {
            this.ideas = Object.entries(res)
                .map(([id, data]) => { return { id, ...data } })
            changeContext(this);
            loadPage.call(this, 'homePage', 'idea');
        }).catch((err) => {
            changeContext(this);
            loadPage.call(this, 'homePage', 'idea');
            errorHandler(err);
        })
        
}