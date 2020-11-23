import { showMessage, errorHandler } from './helpers.js'

export function register() {
    const { email, password, repeatPassword } = this.params;

    if (password === repeatPassword) {
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                //this.redirect('/login')
                showMessage("Successful registration!", this, '/login');
            })
            .catch(errorHandler);
    } else {
        let error = { message: 'Passwords do not match. Password should be at least 6 characters long.' };
        errorHandler(error)
    }
}

export function login() {
    const { email, password } = this.params;
    auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            //this.redirect("/home");
            showMessage("Logged in successfully!", this, '/home');
        })
        .catch(errorHandler);
}

export function logout(context) {
    auth.signOut().then(function () {
       // context.redirect('/home');
        showMessage("Successfully logged out!", context, '/home');
    }).catch(errorHandler);
}

