import { errorHandler } from './helpers.js'
const paths = {
    reg: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`,
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`,
}

export function register() {
    const { email, password, repeatPassword } = this.params;

    if (password === repeatPassword) {
        fetch(paths.reg, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, returnSecureToken: true })
        }).then(() => this.redirect('/login'))
        .catch(errorHandler)
    } else {
        let error = { message: 'Passwords do not match.' };
        errorHandler(error)
    }
}

export function login() {
    const { email, password } = this.params;
    fetch(paths.login, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, returnSecureToken: true })
    })
        .then(res => res.json())
        .then(res => {
            localStorage.setItem('user', JSON.stringify(res));
            this.redirect("/");
        })
        .catch(errorHandler);
}

export function logout(context) {
    localStorage.removeItem('user');
    context.redirect('/login');
}



