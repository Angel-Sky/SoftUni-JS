import { showMessage, errorHandler } from './helpers.js'

export function register() {
    const { email, password, repeatPassword } = this.params;

    if (password === repeatPassword) {
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.redirect('/login')
                // showMessage("Successful registration!", this, '/login');
            })
            .catch(errorHandler);
    } else {
        let error = { message: 'Passwords do not match.' };
        errorHandler(error)
    }
}

export function login() {
    const { email, password } = this.params;
    auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
            const { email, uid, refreshToken, idToken } = res.user;
            console.log(res.user)
            //window.localStorage.setItem('user', JSON.stringify({ 'email': email, 'uid': uid, 'refreshToken': idToken }));
            window.localStorage.setItem('user', JSON.stringify(res));
            this.redirect("/home");
            //showMessage("Logged in successfully!", this, '/home');
        })
        .catch(errorHandler);
}

export function logout(context) {
    auth.signOut().then(function () {
        window.localStorage.removeItem('user');
        context.redirect('/home');
        // showMessage("Successfully logged out!", context, '/home');
    }).catch(errorHandler);
}

