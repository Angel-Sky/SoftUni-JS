function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return [
                `Post: ${this.title}`,
                `Content: ${this.content}`
            ].join('\n');
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            return this.comments.push(comment);
        }

        toString() {
            let result = [
                super.toString(),
                `Rating: ${this.likes - this.dislikes}`
            ]

            if  (this.comments.length > 0) {
                result.push("Comments:");
                this.comments.forEach(comment => {
                    result.push(` * ${comment}`);
                })
            }

            return result.join("\n")
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return [
                super.toString(),
                `Views: ${this.views}`
            ].join("\n");
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

let posr = solve();
let post = new posr.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new posr.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!


`Post: TestTitle\nContent: TestContent\nRating: -5\nComments:\n* 1\n* 2\n* 3'`
`Post: TestTitle\nContent: TestContent\nRating: -5\nComments:\n * 1\n *...`