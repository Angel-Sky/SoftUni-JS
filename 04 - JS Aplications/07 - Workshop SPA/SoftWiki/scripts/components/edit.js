import { getSpecificData, loadPage, errorHandler } from '../helpers.js';

export function loadEditFormWithInfo() {
    const { id } = this.params;
    getSpecificData(id)
        .then(res => {
            this.article = { id, ...res };
            changeContext(this)
            loadPage.call(this, 'editPage');
        });
}

export function editPost() {
    const { id, title, category, content } = this.params;
    const newData = { title, category, content };
    fetch(baseUrl + id + '.json', {
        method: 'PATCH',
        body: JSON.stringify(newData)
    }).then(() => this.redirect('/'))
        .catch(errorHandler)
}
