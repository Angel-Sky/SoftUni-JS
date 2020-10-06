function notify(message) {
    let notiffication = document.querySelector("#notification");
    notiffication.textContent = message;
    notiffication.style.display = "block"

        setTimeout(() => {
            notiffication.style.display = "none";
        }, 2000);
    
}