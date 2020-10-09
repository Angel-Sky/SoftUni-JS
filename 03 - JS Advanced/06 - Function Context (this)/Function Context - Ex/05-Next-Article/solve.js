function getArticleGenerator(articles) {
    const content = document.querySelector("#content");

    function showNext() {
        if (articles.length > 0) {            
            let article = document.createElement("article");
            let artContent = articles.shift();

            article.textContent = artContent;
            content.appendChild(article)
        }
    }

    return showNext;
}
