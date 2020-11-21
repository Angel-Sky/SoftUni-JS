export function register() {
    const { email, password, repPassword } = this.params;
   
    if (password === repPassword) {
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.redirect("/login");
            })
            .catch((error) => {
                alert(error.message)
            });
    } else {
        alert('Passwords do not match')
    }
}

export function login() {
    const { email, password } = this.params;
    auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
           // data.isLoggedIn = true;
            this.redirect("/home");
        })
        .catch((error) => {
            alert(error.message)
        });
}

export function logout(context) {
    auth.signOut().then(function () {
        context.redirect('/home')
    }).catch(function (error) {
        alert(error.message)
    });
}

