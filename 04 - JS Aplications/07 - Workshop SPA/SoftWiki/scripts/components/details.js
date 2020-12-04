import { getSpecificData, loadPage, errorHandler } from '../helpers.js';

export function details() {
    const { id } = this.params;
    getSpecificData(id)
        .then(res => {
            console.log(res)
            if (res.creator === data.userid) {
                this.isCreator = true;
            }
            this.article = { id, ...res }
            changeContext(this)
            loadPage.call(this, 'detailsPage');
        })
        .catch(errorHandler)
}