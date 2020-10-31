class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this article!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
        }
    }

    like(name) {
        if (this._likes.includes(name)) {
            throw new Error("You can't like the same article twice!");
        }

        if (name == this.creator) {
            throw new Error("You can't like your own articles!");
        }

        this._likes.push(name);
        return `${name} liked ${this.title}!`;
    }

    dislike(name) {
        if (!this._likes.includes(name)) {
            throw new Error("You can't dislike this article!");
        } else {
            this._likes.splice(this._likes.indexOf(name), 1); //Ако е харесал преди това, премахни го
        }

        return `${name} disliked ${this.title}`;
    }

    comment(name, content, id) {
        let searchedComment = this._comments.find(el => el.id == id);

        if (id === undefined || searchedComment === undefined) {
            let id = this._comments.length + 1;
            this._comments.push({ id, name, content, replies: [] })
            return `${name} commented on ${this.title}`;
        } else {
            let subId = `${id}.${searchedComment.replies.length + 1}`;
            searchedComment.replies.push({ id: subId, name, content })
            return "You replied successfully";
        }
    }

    toString(sortingType) {
        const sorting = {
            'asc': (obj) => {
                obj.sort((a, b) => a.id - b.id);
                obj.forEach(comment => {
                    if (comment.replies.length > 0) {
                        comment.replies.sort((a, b) => b.id - a.id);
                    }
                });
                return obj;
            },
            'desc': (obj) => {
                obj.sort((a, b) => b.id - a.id);
                obj.forEach(comment => {
                    if (comment.replies.length > 0) {
                        comment.replies.sort((a, b) => b.id - a.id)
                    }
                });
                return obj;
            },
            'username': (obj) => {
                obj.sort((a, b) => a.name.localeCompare(b.name));
                obj.forEach(comment => {
                    if (comment.replies.length > 0) {
                        comment.replies.sort((a, b) => a.name.localeCompare(b.name))
                    }
                });
                return obj;
            }
        }

        let sortedCollection = sorting[sortingType](this._comments);
        let result = [
            `Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this._likes.length}`,
        ];

        if (this._comments.length > 0) {
            result.push("Comments:")
        }
        
        sortedCollection.forEach(line => {
            result.push(`-- ${line.id}. ${line.name}: ${line.content}`)
            if (line.replies.length > 0) {
                line.replies.forEach(el => {
                    result.push(`--- ${el.id}. ${el.name}: ${el.content}`)
                })
            }
        })

        return result.join("\n")
    }

}


let art = new Article("My Article", "Anny");
console.log(art.like("John"));//, "John liked My Article!"
console.log(art.likes); //, "John likes this article!"
//console.log(art.dislike("Sally")); // "You can't dislike this article!")
console.log(art.like("Ivan")); //"Ivan liked My Article!");
console.log(art.like("Steven")); // "Steven liked My Article!");
console.log(art.likes);//, "John and 2 others like this article!");
console.log(art.comment("Anny", "Some Content"));//,"Anny commented on My Article");
console.log(art.comment("Ammy", "New Content", 1));//,"You replied successfully");
console.log(art.comment("Zane", "Reply", 2));//,"Zane commented on My Article");
console.log(art.comment("Jessy", "Nice :)"));//, "Jessy commented on My Article");
console.log(art.comment("SAmmy", "Reply@", 2));//, "You replied successfully");
console.log(art.toString('asc'));

// `Title: My Article
// Creator: Anny
// Likes: 3
// Comments:
// -- 1. Anny: Some Content
// --- 1.1. Ammy: New Content
// -- 2. Zane: Reply
// --- 2.1. SAmmy: Reply@
// -- 3. Jessy: Nice :)`
