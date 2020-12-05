import { loadPage, getUserData, getAllData, errorHandler } from "../helpers.js";

export function profile() {
    const currentUserId = getUserData().localId;

    getAllData()
        .then(res => {
            const ideas = Object.values(res).filter(x => x.creator == currentUserId).map(x => x.title);
            this.hasIdeas = true;
            this.ideas = ideas;
            this.ideasLength = ideas.length;
            changeContext(this);
            loadPage.call(this, 'userPage');
        })
        .catch(errorHandler)
    changeContext(this);
    loadPage.call(this, 'userPage');
}