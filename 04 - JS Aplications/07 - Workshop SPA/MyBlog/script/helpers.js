export function loadPage(pageName, partialName) {
    let partials;
    if (partialName) {
        partials = loadAllPartials({ partialName: `./templates/${partialName}.hbs` });
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
       // footer: './templates/footer.hbs',
    };

    for (const key in partials) {
        if (partials.hasOwnProperty(key)) {
            defaultPartials[key] = partials[key];
        }
    }
    return defaultPartials;
}

export function changeContext(context) {
    context.isLoggedIn = data.isLoggedIn;
    context.email = data.email ? data.email : undefined;
}

export async function getAllPosts() {
    return (await fetch(baseUrl + '.json')).json();
}

export async function getSpecificPost(id) {
    return (await fetch(baseUrl + id + '.json')).json();
}

export function showMessage(message, context, redirectTo) {
    const messageField = document.querySelector("#successBox");
    const messageBox = messageField.parentElement;
    messageField.textContent = message;
    messageBox.style.display = "block";

    setTimeout(() => {
        messageBox.style.display = "none";
        context.redirect(redirectTo)
    }, 1000);
}

export function errorHandler(error) {
    // const errorMessage = document.querySelector("#errorBox");
    // const errorBox = errorMessage.parentElement;
    // errorMessage.textContent = error.message;
    // errorBox.style.display = "block";

    // setTimeout(() => {
    //     errorBox.style.display = "none";
    // }, 3000);

    alert(error.message)

}