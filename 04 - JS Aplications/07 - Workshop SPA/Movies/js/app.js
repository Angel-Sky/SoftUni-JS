import { loadPage, getAllMovies, getSpecificMovie } from './helpers.js';
import { register, login, logout } from './auth.js';
import { showMessage, errorHandler } from './helpers.js';

const baseUrl = 'https://movies-softuni.firebaseio.com/movies/';
$(() => {
    const app = Sammy("#container", function () {
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

        this.get('/home', function (context) {
            getAllMovies()
                .then(res => {
                    context.movies = Object.entries(res)
                    .map(([movieId, data]) => { return { movieId, ...data } })
                    changeContext(context);
                    loadPage.call(context, 'homePage');
                }).catch(errorHandler)
        });
        this.get('/', function (context) {
            getAllMovies()
                .then(res => {
                    context.movies = Object.entries(res)
                    .map(([movieId, data]) => { return { movieId, ...data } })
                    changeContext(context);
                    loadPage.call(context, 'homePage');
                }).catch(errorHandler)
        });
        this.get('index.html', function (context) {
            getAllMovies()
                .then(res => {
                    context.movies = Object.entries(res)
                    .map(([movieId, data]) => { return { movieId, ...data } })
                    changeContext(context);
                    loadPage.call(context, 'homePage');
                }).catch(errorHandler)
        });
       

        this.get('/home/search', function (context) {
            const { searchedWord } = context.params;
            getAllMovies()
                .then(res => {
                    context.movies = Object.entries(res)
                        .map(([movieId, data]) => { return { movieId, ...data } })
                        .filter(x => x.title.toLowerCase().includes(searchedWord.toLowerCase()));
                    changeContext(context);
                    loadPage.call(context, 'homePage');
                }).catch(errorHandler);
        });

        this.get('/add-movie', (context) => { loadPage.call(context, 'addMoviePage'); changeContext(context) });
        this.post('/add-movie', function (context) {
            const { title, description, imageUrl } = context.params;
            let obj = {
                title, description, imageUrl, creator: data.userid, likedBy: {
                    'emails': [data.email]
                }
            }
            fetch(baseUrl + '.json', {
                method: "POST",
                body: JSON.stringify(obj)
            }).then(() => showMessage('Movie Successfully added to collection!', this, '/home'))
                .catch(errorHandler)
        });

        this.get('/details/:movieId', function (context) {
            const { movieId } = context.params;
            getSpecificMovie(movieId)
                .then(res => {
                    if (res.creator === data.userid) {
                        context.isCreator = true;
                    }
                    if ((res.likedBy.emails).includes(data.email)) {
                        context.isLiked = true;
                        context.likes = (res.likedBy.emails).length;
                    }
                    context.movie = { movieId, ...res }
                    changeContext(context)
                    loadPage.call(context, 'detailsPage');
                })
        });

        this.get('/edit/:movieId', function (context) {
            const { movieId } = context.params;
            getSpecificMovie(movieId)
                .then(res => {
                    context.movie = { movieId, ...res }
                    changeContext(context)
                    loadPage.call(context, 'editPage');
                })
        });
        this.post('/edit/:movieId', function (context) {
            const { movieId, title, description, imageUrl } = context.params;
            const newData = { title, description, imageUrl };
            fetch(baseUrl + movieId + '.json', {
                method: 'PATCH',
                body: JSON.stringify(newData)
            }).then(() => showMessage('Movie Successfully edited!', this, `/details/${movieId}`))
                .catch(errorHandler)
        });

        this.get('/delete/:movieId', function (context) {
            const { movieId } = context.params;
            fetch(baseUrl + movieId + '.json', {
                method: "DELETE"
            }).then(() => showMessage('Successfully deleted!', this, '/home'))
                .catch(errorHandler)
        });

        this.get('/like/:movieId', function (context) {
            const { movieId } = context.params;
            getSpecificMovie(movieId)
                .then(res => {
                    const arr = res.likedBy.emails;
                    arr.push(data.email);
                    fetch(baseUrl + movieId + '/likedBy/.json', {
                        method: "PATCH",
                        body: JSON.stringify({
                            "emails": arr
                        })
                    }).then(() => {
                        showMessage("You successfully liked this movie!", this, `/details/${movieId}`);
                    }).catch(errorHandler)
                }).catch(errorHandler)
        });

        //Authorization
        this.get('/register', (context) => { loadPage.call(context, 'registerPage'); changeContext(context) });
        this.post('/register', (context) => { register.call(context) });

        this.get('/login', (context) => { loadPage.call(context, 'loginPage'); changeContext(context) });
        this.post('/login', (context) => { login.call(context); changeContext(context) });

        this.get('/logout', logout);
    });

    app.run();
});

