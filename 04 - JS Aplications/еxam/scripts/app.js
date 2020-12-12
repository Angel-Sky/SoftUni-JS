import { loadPage } from './helpers.js';
import { register, login, logout } from './auth.js';
import { home } from './components/home.js'
import { create } from './components/create.js';
import { details } from './components/details.js';
import { loadEditFormWithInfo, editPost } from './components/edit.js';
import { destinations } from './components/destinations.js';
import { remove } from './components/delete.js';


$(() => {
    const app = Sammy("body", function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', home);
        this.get('/home', home);
        this.get('/', home);

        this.get('/add', (context) => {loadPage.call(context, 'createPage'); changeContext(context)});
        this.post('/add', create);
        this.get('/details/:id', details);
        this.get('/edit/:id', loadEditFormWithInfo);
        this.post('/edit/:id', editPost);
        this.get('/destinations', destinations);
        this.get('/remove/:id', remove);


        this.get('/register', (context) => { loadPage.call(context, 'registerPage'); changeContext(context) });
        this.post('/register', (context) => { register.call(context) });

        this.get('/login', (context) => { loadPage.call(context, 'loginPage'); changeContext(context) });
        this.post('/login', (context) => { login.call(context); changeContext(context) });

        this.get('/logout', logout);
    });

    app.run();
});