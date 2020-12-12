import { getAllData, loadPage, errorHandler } from '../helpers.js'

export function home() {
    getAllData()
        .then(res => {
            this.destinations = Object.entries(res)
                .map(([id, data]) => { return { id, ...data } })
            changeContext(this);
            loadPage.call(this, 'homePage', 'destination');
        }).catch((err) => {
            changeContext(this);
            loadPage.call(this, 'homePage', 'destination');
            errorHandler(err);
        })
        
}