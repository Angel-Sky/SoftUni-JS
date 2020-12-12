import { getSpecificData, loadPage, errorHandler, getUserData } from '../helpers.js';

export function details() {
    const { id } = this.params;
    getSpecificData(id)
        .then(res => {
            let creatorId = getUserData().localId;
           
            if (res.creator === creatorId) {
                this.isCreator = true;
            }
            this.destination = { id, ...res }
           
            changeContext(this)
            loadPage.call(this, 'detailsPage');
        })
      .catch(errorHandler)
}