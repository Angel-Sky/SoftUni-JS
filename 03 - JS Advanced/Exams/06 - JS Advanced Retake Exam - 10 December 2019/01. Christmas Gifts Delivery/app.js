function solution() {
    const sections = Array.from(document.querySelectorAll(".card > ul"));
    const [giftsList, sentGifts, discartedGifts] = sections;

    const giftName = document.querySelector(".card > div > input");
    document.querySelector(".card > div > button").addEventListener("click", addToGiftsList);

    function addToGiftsList() {
        if (giftName.value.trim().length > 0) {
            const sendBtn = genEl("button", "Send", { id: "sendButton" });
            const discBtn = genEl("button", "Discard", { id: "discardButton" });
            const newGift = genEl("li",
                [giftName.value, sendBtn, discBtn],
                { className: "gift" });
            
            giftsList.appendChild(newGift);
            
            sortGifts(giftsList);
            giftName.value = ""; 

            sendBtn.addEventListener("click", () => {
                sentGifts.appendChild(newGift);
                sendBtn.remove();
                discBtn.remove();
                //sortGifts(sentGifts);
            })

            discBtn.addEventListener("click", () => {
                discartedGifts.appendChild(newGift);
                sendBtn.remove();
                discBtn.remove();
                //sortGifts(discartedGifts);
            })
        }
    }

    function sortGifts(section) {
        return Array.from(section.childNodes)
                .sort((a, b) => a.textContent.localeCompare(b.textContent))
                .forEach(node => section.appendChild(node));
    }


    function genEl(tag, content, attributes) {
        const element = document.createElement(tag);
        if (attributes) {
            Object.assign(element, attributes);
        }
        if (Array.isArray(content)) {
            content.forEach(appendEl)
        } else {
            appendEl(content);
        }
        function appendEl(node) {
            if (typeof node == 'string') {
                node = document.createTextNode(node);
            }
            element.appendChild(node);
        }
        return element;
    }
}