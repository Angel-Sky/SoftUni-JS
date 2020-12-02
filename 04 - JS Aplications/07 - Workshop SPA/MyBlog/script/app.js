import { loadPage, getAllPosts, getSpecificPost, errorHandler } from './helpers.js';
import { register, login, logout } from './auth.js';
import { home } from './components/home.js'
import { createPost } from './components/create-post.js';
import { details } from './components/details.js';
import { deletePost } from './components/delete.js';

$(() => {
    const app = Sammy("body", function () {
        this.use('Handlebars', 'hbs');

        // let data = {};
        // auth.onAuthStateChanged(function (currentUser) {
        //     data.isLoggedIn = Boolean(currentUser);
        //     if (currentUser) {
        //         data.userid = currentUser.uid;
        //         data.email = currentUser.email;
        //     }
        // });
        // function changeContext(context) {
        //     context.isLoggedIn = data.isLoggedIn;
        //     context.email = data.email ? data.email : undefined;
        // }

        this.get('index.html', home);
        this.get('/home', home);
        this.get('/', home);

        this.post('/create-post', createPost);
        this.get('/details/:postId', details);
        this.get('/delete/:postId', deletePost);

        //Authorization
        this.get('/register', (context) => { loadPage.call(context, 'registerPage'); changeContext(context) });
        this.post('/register', (context) => { register.call(context) });

        this.get('/login', (context) => { loadPage.call(context, 'loginPage'); changeContext(context) });
        this.post('/login', (context) => { login.call(context); changeContext(context) });

        this.get('/logout', logout);
    });

    app.run();
});