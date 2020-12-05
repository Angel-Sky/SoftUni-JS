import { getSpecificData, loadPage, errorHandler, getUserData } from '../helpers.js';

export function details() {
    const { id } = this.params;
    getSpecificData(id)
        .then(res => {
            const creatorId = getUserData().localId;
           
            if (res.creator === creatorId) {
                this.isCreator = true;
            }
            
            this.article = { id, ...res }
            changeContext(this)
            loadPage.call(this, 'detailsPage');
        })
      .catch(errorHandler)
}