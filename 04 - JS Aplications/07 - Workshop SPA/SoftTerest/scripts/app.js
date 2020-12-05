import { loadPage, getAllData, getSpecificData, errorHandler } from './helpers.js';
import { register, login, logout } from './authNoSdk.js';
import { home } from './components/home.js'
import { create } from './components/create.js';
import { details } from './components/details.js';
import { deletePost } from './components/delete.js';
import { like } from './components/like.js';
import { comment } from './components/comment.js';
import { profile } from './components/profile.js';

$(() => {
    const app = Sammy("body", function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', home);
        this.get('/home', home);
        this.get('/', home);

        this.get('/create', (context) => {loadPage.call(context, 'createPage'); changeContext(context)});
        this.post('/create', create);
        this.get('/details/:id', details);
        this.get('/delete/:id', deletePost);
        this.get('/like/:id', like);
        this.post('/comment/:id', comment);
        this.get('/profile', profile);


        //Authorization
        this.get('/register', (context) => { loadPage.call(context, 'registerPage'); changeContext(context) });
        this.post('/register', (context) => { register.call(context) });

        this.get('/login', (context) => { loadPage.call(context, 'loginPage'); changeContext(context) });
        this.post('/login', (context) => { login.call(context); changeContext(context) });

        this.get('/logout', logout);
    });

    app.run();
});