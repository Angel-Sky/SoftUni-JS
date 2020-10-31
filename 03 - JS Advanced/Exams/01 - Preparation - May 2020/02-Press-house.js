function pressHouse() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Title: ${this.title}\nContent: ${this.content}`;
        }
    }

    class ShortReports extends Article {
        constructor(title, content, originalResearch) {     
            super(title, content);
            this.originalResearches = originalResearch;
            this.comments = [];
        }

        get content() {
            return this._content;
        }

        set content(value) {
            if (value.length >= 150) {
                throw new Error("Short reports content should be less then 150 symbols.");
            }
            this._content = value;
        }

        get originalResearches() {
            return this._originalResearches;
        }

        set originalResearches(value) {
            if (!value.hasOwnProperty("title") || !value.hasOwnProperty("author")) {
                throw new Error("The original research should have author and title.");
            }
            this._originalResearches = value;
        }

        addComment(comment) {
            this.comments.push(comment);
            return `The comment is added.`
        }

        toString() {
            let result = [
                super.toString(),
                `Original Research: ${this.originalResearches.title} by ${this.originalResearches.author}`
            ]

            if (this.comments.length > 0) {
                result.push("Comments:");
                result.push(this.comments.join("\n"));
            }

            return result.join("\n");
        }
    }

    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }

        addClient(clientName,  orderDescription) {
            let existingOrder = this.clients.find(x => x.clientName == clientName && x.orderDescription == orderDescription);
            if (existingOrder) {
                throw new Error("This client has already ordered this review.");
            }

            this.clients.push({clientName, orderDescription});
            return `${clientName} has ordered a review for ${this.book.name}`;
        }

        toString(){
            let result = [
                super.toString(),
                `Book: ${this.book.name}`
            ];

            if (this.clients.length > 0) {
                result.push("Orders:");
                this.clients.forEach(line => {
                    result.push(`${line.clientName} - ${line.orderDescription}`);
                })
            }

            return result.join("\n");
        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    }
}

let classes = pressHouse();
// let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
// console.log(lorem.toString()); 
// console.log();

let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", { title: "Dragon 2" , author: "Ivan"});
console.log(short.addComment("Thank god they didn't use java."))
short.addComment(`In the end JavaScript"s features are executed in C++ — the underlying language.`)
console.log(short.toString()); 
console.log();
console.log();

// let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
// console.log(book.addClient("The Guardian", "100 symbols"));
// console.log(book.addClient("Goodreads", "30 symbols"));
// console.log(book.toString()); 

