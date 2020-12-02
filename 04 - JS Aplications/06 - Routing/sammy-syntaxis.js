this.render('./templates/home/home.hbs').then(function (html) {
    this.swap(html);
})
// Same As //
this.partial('./templates/home/home.hbs');

//________________________________________________________//

this.loadPartials({
    header: './templates/common/header.hbs',
    footer: './templates/common/footer.hbs'
}).then(function () {
    this.partial('./templates/home/home.hbs');
})

// Same As //

this.partials = {
    header: await this.load('./templates/common/header.hbs'),
    footer: await this.load('./templates/common/footer.hbs')
}
this.partial('./templates/home/home.hbs');

//________________________________________________________//

//To know that the user is loged in:
this.userData = {
    loggedIn: true,
    hasTeam: false
}
this.partial('./templates/home/home.hbs', this.app.userData);
