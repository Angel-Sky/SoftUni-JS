//-------------------- 50/100 Judge ---------------------------
/*
function encodeAndDecodeMessages() {
    let textarea = document.getElementsByTagName("textarea")[1];

    document.querySelector("#main")
        .addEventListener("click", onClick);

    function onClick(e) {
        if (e.target.type == "submit") {
            let buttonText = e.target.innerHTML.split(" ")[0];
            let inputMessage = e.target.previousElementSibling;

            textarea.value = (encodeOrDecode(buttonText, inputMessage));
        }
    }

    function encodeOrDecode(buttonText, inputMessage) {
        let output = "";
        if (buttonText == "Encode") {
            output = inputMessage.value
                .split("")
                .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
                .join("");
        } else {
            output = inputMessage.value
                .split("")
                .map(char => String.fromCharCode(char.charCodeAt(0) - 1))
                .join("");
        }

        inputMessage.value = "";
        return output;
    }
}*/

//--------------- 100/100 Judge -------------------------------------

function encodeAndDecodeMessages() {
    let [encodeBtn, decodeBtn] = document.querySelectorAll("button");
    let [encodeText, decodeText] = document.querySelectorAll("textarea")

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode(e) {
        if (encodeText.value.length > 0) {
            let encodedMessage = encodeText.value
                .split('')
                .map(el => String.fromCharCode(el.charCodeAt() + 1))
                .join('');

            encodeText.value = '';
            decodeText.value = encodedMessage;
        }
    }

    function decode(e) {
        if (decodeText.value.length > 0) {
            let decodedMessage = decodeText.value
                .split('')
                .map(el => String.fromCharCode(el.charCodeAt() - 1))
                .join('');

            decodeText.value = decodedMessage;
        }
    }
   
}