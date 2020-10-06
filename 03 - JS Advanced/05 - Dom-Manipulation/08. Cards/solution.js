//--------------- 50 / 100 Judge ---------------------------//

function solve() {
    let playerOneCards = document.querySelector("#player1Div");
    let playerTwoCards = document.querySelector("#player2Div");
    let [firstSpan, secSpan, thirdSpan] = Array.from(document.querySelectorAll("span"));
    let historyDiv = document.querySelector("#history");

    let selectedCards = [];

    playerOneCards.addEventListener("click", firstPlayerOnClick);

    playerTwoCards.addEventListener("click", secPlayerOnClick);


    function firstPlayerOnClick(e) {
        if (e.target.name !== '0' && e.target.name !== undefined) {
            changeCardImage(e);
            selectedCards[0] = e.target;
            clearResult(thirdSpan);
            appendCardValueToResultSpan(e);
        }   
    }

    function secPlayerOnClick(e) {
        if (e.target.name !== '0' && e.target.name !== undefined) {
            changeCardImage(e);
            selectedCards[1] = e.target;
            
            appendCardValueToResultSpan(e, "second");
            setCardsBorders(selectedCards, e.target);
            history(historyDiv, firstSpan, thirdSpan);
        }  
    }

    function appendCardValueToResultSpan(e, unit) {
        if (unit == "second") {
            thirdSpan.textContent = e.target.name;
        } else {
            firstSpan.textContent = e.target.name;  
        }
    }

    function setCardsBorders(arrayOfCards, value) {
        if (arrayOfCards.length == 2 ) {
            let firstCard = arrayOfCards[0];
            let secondCard = arrayOfCards[1];
            if (Number(firstCard.name) > Number(secondCard.name)) {
                firstCard.style.border = "2px solid green";
                secondCard.style.border = "2px solid red";
            } else {
                secondCard.style.border = "2px solid green";
                firstCard.style.border = "2px solid red";
            }  
            value.name = '0';
            arrayOfCards = [];
        }
              
    }


    function changeCardImage(e) {
        return e.target.src = 'images/whiteCard.jpg'
    }

    function clearResult(secSpan) {
        if (secSpan.textContent !== undefined) {
            secSpan.textContent = "";
        }
    }

    function history(historyDiv, firstCard, secondCard) {
        if (secondCard.textContent.trim() !== "") {
            let result = `[${firstCard.textContent} vs ${secondCard.textContent}] `;
            historyDiv.innerHTML += result;
        }
    }
}

