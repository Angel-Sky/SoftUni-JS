export function loadPage(pageName, partialName) {
    let partials;
    if (partialName) {
        let obj = {};
        obj[partialName] = `./templates/${partialName}.hbs`;
        partials = loadAllPartials(obj);
    } else {
        partials = loadAllPartials({});
    }
    this.loadPartials(partials)
        .then(function () {
            this.partial(`../templates/${pageName}.hbs`);
        });
}

function loadAllPartials(partials) {
    const defaultPartials = {
        header: './templates/header.hbs',
        footer: './templates/footer.hbs',
        notifications: './templates/notifications.hbs'
    };

    for (const key in partials) {
        if (partials.hasOwnProperty(key)) {
            defaultPartials[key] = partials[key];
        }
    }
    return defaultPartials;
}

export async function getAllData() {
    return (await fetch(baseUrl + '.json')).json();
}

export async function getSpecificData(id) {
    return (await fetch(baseUrl + '/' + id + '.json')).json();
}

export function getUserData() {
    const currentUser = localStorage.getItem('user');
    if (currentUser != null) {
        return JSON.parse(currentUser);
    }
}

export function showMessage(message, context, redirectTo) {
    const messageBox = document.querySelector("#successBox");
    messageBox.textContent = message;
    messageBox.style.display = "block";

    let timeour = setTimeout(() => {
        messageBox.style.display = "none";
        context.redirect(redirectTo);
    }, 2000);

    messageBox.addEventListener("click", () => {
        clearTimeout(timeour);
        messageBox.style.display = "none";
        context.redirect(redirectTo);
    })
}

export function errorHandler(error) {
    const errorBox = document.querySelector("#errorBox");
    errorBox.textContent = error.message;
    errorBox.style.display = "block";

    window.addEventListener("click", () => {
        errorBox.style.display = "none";
    })
}

export function loadingMessage() {
    const loadingBox = document.querySelector("#loadingBox");
    loadingBox.style.display = "block";

    window.addEventListener("load", () => {
        loadingBox.style.display = "none";
    })
}


