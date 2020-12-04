import { getAllData, loadPage, mapCategories, errorHandler } from '../helpers.js'

export async function home() {
    this.articles = mapCategories(await getAllData());
    changeContext(this);
    loadPage.call(this, 'homePage');
}