import { loadPage } from './helpers.js';
import { register, login, logout } from './auth.js'

$(() => {
    const app = Sammy("#body", function () {
        this.use('Handlebars', 'hbs');
        
        //CHECK IF THE CURRENT USER IS LOGGED IN, IF SO - SAVE HIS DATA
        let data = {};
        auth.onAuthStateChanged(function (currentUser) {
            data.isLoggedIn = Boolean(currentUser);
            if (currentUser) {
                data.userid = currentUser.uid;
                data.email = currentUser.email;
            }
        });
        function changeContext(context) {
            context.isLoggedIn = data.isLoggedIn;
            context.email = data.email ? data.email : undefined;
        }

        //--------------LOAD PAGES, GET DATA FROM DB----------------
        this.get('/login', (context) => { loadPage.call(context, 'loginPage', 'homePage'); changeContext(context) });
        this.get('/register', (context) => { loadPage.call(context, 'registerPage', 'homePage'); changeContext(context) });
        this.get("/home", function (context) {
            db.collection("offers").get()
                .then((res) => {
                    context.offers = res.docs.map((offer) => { return { id: offer.id, ...offer.data() } })
                    changeContext(context)
                    loadPage.call(context, 'homePage');
                })
        });
        this.get('/create', (context) => {loadPage.call(context, 'createPage'); changeContext(context)});
        this.get("/details/:offerId", function (context) {
            const { offerId } = context.params;
            db.collection('offers').doc(offerId).get()
                .then(responce => {
                    context.offer = { offerId, ...responce.data() };
                    if (responce.data().creator === data.userid) {
                        context.isCreator = true;
                    }
                    context.offer.isBought = Boolean(responce.data().boughtBy.find(x => x === data.email));
                    context.offer.buyers = responce.data().boughtBy.length;
                    changeContext(context);
                    loadPage.call(context, 'detailsPage')
                })
        });
        this.get("details/edit/:offerId", function (context) {
            const { offerId } = context.params;
            db.collection('offers').doc(offerId).get()
                .then(responce => {
                    context.offer = { offerId, ...responce.data() };
                    changeContext(context);
                    loadPage.call(context, 'editPage')
                })
        });
        this.get("details/buy/:offerId", function (context) {
            const { offerId } = context.params;
            db.collection('offers').doc(offerId)
                .update({ boughtBy: firebase.firestore.FieldValue.arrayUnion(data.email) })
                .then(() => { this.redirect(`#/details/${offerId}`) })
                .catch(err => alert(err.message))
        })
        this.get("details/delete/:offerId", function (context) {
            const { offerId } = context.params;
            db.collection('offers').doc(offerId).delete()
                .then(() => { this.redirect('/home') })
                .catch(err => alert(err.message))
        })

        //------------CREATE OR CHANGE DATA IN DB---------------------------
        this.post('/create', function (context) {
            const { productName, price, imageUrl, description, brand } = context.params;
            db.collection("offers").add({
                productName, price, imageUrl, description, brand, 'creator': data.userid, boughtBy: []
            })
                .then((responce) => {
                    this.redirect('/home');
                })
                .catch(function (error) {
                    alert(error.message);
                });

        })
        this.post("details/edit/:offerId", function (context) {
            const { offerId, productName, price, imageUrl, description, brand } = context.params;

            db.collection('offers').doc(offerId).set({
                productName, price, imageUrl, description, brand
            }, { merge: true })
                .then(() => { this.redirect(`/details/${offerId}`) })
                .catch(err => alert(err.message))
        })

        //--------------AUTHORIZATION----------------------
        this.post('/register', (ctx) => { register.call(ctx) });
        this.post('/login', (ctx) => { login.call(ctx) });
        this.get('/logout', logout);

    });

    app.run('/home');
});