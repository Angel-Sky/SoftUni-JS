import { getAllData, loadPage, mapCategories } from '../helpers.js'

export async function home() {
    //TO DO
    changeContext(this);
    loadPage.call(this, 'homePage');
}