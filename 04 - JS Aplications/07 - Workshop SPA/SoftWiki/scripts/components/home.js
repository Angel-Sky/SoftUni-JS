import { getAllData, loadPage, mapCategories } from '../helpers.js'

export async function home() {
    this.articles = mapCategories(await getAllData());
    changeContext(this);
    loadPage.call(this, 'homePage', 'article');
}