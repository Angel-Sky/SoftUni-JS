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

   // alert(error.message)
    console.error(error);
    
}

const categoryMap = {
    'JavaScript': 'javascript',
    'C#': 'csharp',
    'Python': 'python',
    'Java': 'java'
}

export function mapCategories(data) {
    const res = {
        javascript: [],
        csharp: [],
        java: [],
        python: []
    }

    for (let id in data) {
        res[categoryMap[data[id].category]].push({id, ...data[id]});
    }
    //each can be article, movie, etc.

    return res;
}

export function getUserData() {
    const currentUser = localStorage.getItem('user');
    if (currentUser != null) {
        return JSON.parse(currentUser);
    }
}
