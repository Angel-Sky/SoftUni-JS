import { getSpecificPost, loadPage, errorHandler } from '../helpers.js';

export function loadEditFormWithInfo() {
    const { postId } = this.params;
    getSpecificPost(postId)
        .then(res => {
            this.post = { postId, ...res };
            let isEditing = true;
            changeContext(this, isEditing)
            loadPage.call(this, 'editForm');
        });
}

export function editPost() {
    const { postId, title, category, content } = this.params;
    const newData = { title, category, content };
    fetch(baseUrl + postId + '.json', {
        method: 'PATCH',
        body: JSON.stringify(newData)
    }).then(() => this.redirect('/'))
        .catch(errorHandler)
}
