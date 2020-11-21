export function loadPage(pageName, partialName) {
    let partials;
    if (!!partialName) {
        partials = loadAllPartials({ partialName: `./templates/${partialName}.hbs` });
    } else {
        partials = loadAllPartials({});
    }
    this.loadPartials(partials)
        .then(function () {
            this.partial(`./templates/${pageName}.hbs`);
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
