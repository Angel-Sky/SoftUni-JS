import { loadPage, getAllPosts, getSpecificPost, errorHandler } from './helpers.js';
import { register, login, logout } from './auth.js';
import { home } from './components/home.js'
import { createPost } from './components/create-post.js';
import { details } from './components/details.js';
import { deletePost } from './components/delete.js';
import { loadEditFormWithInfo, editPost } from './components/edit.js';

$(() => {
    const app = Sammy("body", function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', home);
        this.get('/home', home);
        this.get('/', home);

        this.post('/create-post', createPost);
        this.get('/details/:postId', details);
        this.get('/delete/:postId', deletePost);
        this.get('/edit/:postId', loadEditFormWithInfo);
        this.post('/edit/:postId', editPost);

        //Authorization
        this.get('/register', (context) => { loadPage.call(context, 'registerPage'); changeContext(context) });
        this.post('/register', (context) => { register.call(context) });

        this.get('/login', (context) => { loadPage.call(context, 'loginPage'); changeContext(context) });
        this.post('/login', (context) => { login.call(context); changeContext(context) });

        this.get('/logout', logout);
    });

    app.run();
});