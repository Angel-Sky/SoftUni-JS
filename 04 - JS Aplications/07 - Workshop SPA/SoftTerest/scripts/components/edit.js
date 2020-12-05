import { getSpecificData, loadPage, errorHandler, getUserData } from '../helpers.js';

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
    //TO DO 
    const newData = { title, category, content };
    let url = baseUrl + '/' + id + '.json' + `?auth=${getUserData().idToken}`;
    
    fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(newData)
    }).then(() => this.redirect('/'))
        .catch(errorHandler)
}
