import { getAllData, loadPage, mapCategories, errorHandler } from '../helpers.js'

export async function home() {
    //TO DO
    getAllData()
        .then(res => {
            this.ideas = Object.entries(res)
                .map(([id, data]) => { return { id, ...data } })
            changeContext(this);
            loadPage.call(this, 'homePage', 'idea');
        }).catch(errorHandler);

    changeContext(this);
    loadPage.call(this, 'homePage', 'idea');
}