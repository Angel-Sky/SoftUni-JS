import { getAllData, loadPage, mapCategories } from '../helpers.js'

export async function home() {
    changeContext(this);
    this.articles = mapCategories(await getAllData());
    loadPage.call(this, 'homePage');
}