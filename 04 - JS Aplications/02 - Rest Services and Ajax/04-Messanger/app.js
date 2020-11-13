function attachEvents() {
    const url = 'https://rest-messanger.firebaseio.com/messanger.json';

    function getMessages() {
        const messagesBox = document.querySelector("#messages");
        document.querySelector("#refresh").addEventListener("click", () => {
            messagesBox.textContent = "";
            fetch(url)
                .then(url => url.json())
                .then(data => {
                    for (let line in data) {
                        messagesBox.textContent += `${data[line].author}: ${data[line].content}\n`;
                    }
                });
        });
    }

    function sendMessage() {
        const authorName = document.querySelector("#author");
        const msgText = document.querySelector("#content");
        document.querySelector("#submit").addEventListener("click", () => {
            if (authorName.value.trim() !== "" && msgText.value.trim() !== "") {
                const obj = {
                    author: authorName.value,
                    content: msgText.value
                }

                fetch(url, {
                    method: "POST",
                    body: JSON.stringify(obj)
                })

                authorName.value = "", msgText.value = "";
            }
        })
    }

    getMessages();
    sendMessage();
}

attachEvents();