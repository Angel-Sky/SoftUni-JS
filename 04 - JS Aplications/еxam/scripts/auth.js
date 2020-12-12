import { errorHandler, showMessage, loadingMessage } from './helpers.js'
const paths = {
    reg: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`,
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`,
}

export function register() {
    const { email, password, rePassword } = this.params;

    if (password === rePassword) {
        fetch(paths.reg, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, returnSecureToken: true })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw new Error(res.error.message);

                } else {
                    loadingMessage();
                    localStorage.setItem('user', JSON.stringify(res));
                    showMessage('User registration successful.', this, '/')
                }
            })
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
            if (res.error) {
                throw new Error(res.error.message);
            } else {
                loadingMessage();

                localStorage.setItem('user', JSON.stringify(res));
                showMessage('Login successful.', this, '/')
            }
        })
        .catch(errorHandler);
}

export function logout(context) {
    localStorage.removeItem('user');
    showMessage('Logout successful.', context, '/login')
}



