import { loadPage, getAllPosts, getSpecificPost } from './helpers.js';
import { register, login, logout } from './auth.js';

const baseUrl = 'https://movies-softuni.firebaseio.com/movies/';
$(() => {
    const app = Sammy("body", function () {
        this.use('Handlebars', 'hbs');

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

       

        //Authorization
        this.get('/register', (context) => { loadPage.call(context, 'registerPage'); changeContext(context) });
        this.post('/register', (context) => { register.call(context) });

        this.get('/login', (context) => { loadPage.call(context, 'loginPage'); changeContext(context) });
        this.post('/login', (context) => { login.call(context); changeContext(context) });

        this.get('/logout', logout);
    });

    app.run('/login');
});