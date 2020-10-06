function lockedProfile() {
    document.querySelector("#main")
        .addEventListener("click", handler);

    function handler(e) {
        if (e.target.type == "submit") {
            const parent = e.target.parentNode;

            let isLocked = parent.querySelector('input[type="radio"][value="lock"]').checked;
            if (!isLocked) {
                let hiddenDiv = e.target.previousElementSibling;
                hiddenDiv.style.display = hiddenDiv.style.display === 'block' ? 'none' : 'block';
                e.target.textContent = e.target.textContent === 'Hide it' ? 'Show more' : 'Hide it';
            }
        }
    }
}