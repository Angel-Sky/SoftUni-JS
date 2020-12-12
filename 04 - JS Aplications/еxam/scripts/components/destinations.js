import { loadPage, getUserData, getAllData, errorHandler } from "../helpers.js";

export function destinations() {
    const currentUserId = getUserData().localId;

    getAllData()
        .then(res => {
            const destinations = Object.entries(res)
                .filter(([key, x]) => x.creator == currentUserId)
                .map(([id, x]) => Object.assign({id}, x))
            
            this.destinations = destinations;
            changeContext(this);
            loadPage.call(this, 'dashboardPage');
        })
        .catch(err => {
            changeContext(this);
            loadPage.call(this, 'dashboardPage');
            errorHandler(err)
        })
}
