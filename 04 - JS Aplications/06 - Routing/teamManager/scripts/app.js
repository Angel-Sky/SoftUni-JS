import home from './constroles/home.js';
import about from './constroles/about.js';
import login, {loginUser, logoutUser} from './constroles/login.js';
import register, {registerUser} from './constroles/register.js';
import catalog from './constroles/catalog.js';
import details from './constroles/details.js';
import create, {createPost} from './constroles/create.js';
import edit from './constroles/edit.js';

$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');
        this.userData = {
            loggedIn: false,
            hasTeam: false
        }
        this.get('index.html', home);
        this.get('#/home', home);
        this.get('/', home);

        this.get('#/about', about);
        this.get('#/login', login);
        this.get('#/register', register);
        this.get('#/logout', logoutUser);
        this.get('#/catalog', catalog);
        this.get('#/catalog/:id', details);
        this.get("#/create", create);
        this.get('#/edit/:id', edit);
      
        this.post('#/register', (data) => {registerUser.call(data)})
        this.post('#/login', (data) => {loginUser.call(data)})
        this.post('#/create', (data) => {createPost.call(data)})
    });

    app.run();
});