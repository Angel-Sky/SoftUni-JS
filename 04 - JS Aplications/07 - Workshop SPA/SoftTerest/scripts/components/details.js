import { getSpecificData, loadPage, errorHandler, getUserData } from '../helpers.js';

export function details() {
    const { id } = this.params;
    getSpecificData(id)
        .then(res => {
            const creatorId = getUserData().localId;
           
            if (res.creator === creatorId) {
                this.isCreator = true;
            }
            this.idea = { id, ...res }
            this.idea.likesLength = res.likes.length - 1;
            changeContext(this)
            loadPage.call(this, 'detailsPage');
        })
      .catch(errorHandler)
}