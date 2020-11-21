import { login, logout } from '../data.js'

export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        loginForm: await this.load('./templates/login/loginForm.hbs')
    }
    this.partial('./templates/login/loginPage.hbs');
}

export async function loginUser() {
    try {
        const result = await login(this.params.username, this.params.password);
        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }
        this.app.userData.loggedIn = true;
        this.app.userData.username = result.username;
        this.app.userData.userId = result.objectId;
        localStorage.setItem('userToken', result['user-token']);
        localStorage.setItem('username', result.username);
        localStorage.setItem('userId', result.objectId);
        this.redirect('#/home');
    } catch (err) {
        console.error(err)
        alert(err.message)
    }

}

export async function logoutUser() {
    try {
        await logout();
        this.app.userData.loggedIn = false;
        this.app.userData.username = undefined;
        this.app.userData.userId = null;
        this.app.userData.hasTeam = false;
        this.app.userData.isAuthor = false;
        localStorage.removeItem('userToken');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        
        this.redirect('#/home');
    } catch (err) {
        alert(err)
    }
}
