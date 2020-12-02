import { getSpecificPost, loadPage, errorHandler } from '../helpers.js';

export function details() {
    const { postId } = this.params;
    getSpecificPost(postId)
        .then(res => {
            console.log(res)
            if (res.creator === data.userid) {
                this.isCreator = true;
            }
            this.post = { postId, ...res }
            changeContext(this)
            loadPage.call(this, 'detailsPage');
        })
        .catch(errorHandler)
}