const router = require('express').Router();
const authService = require('../services/authService');
const {COOKIE_NAME} = require('../config/config');
const isAuth = require('../middlewares/isAuth');
const isGuest = require('../middlewares/isGuest');

router.get('/register', isGuest, (req, res) => {
    res.render('register', {title: "Register"})
});

router.get('/login', isGuest, (req, res) => {
    res.render('login', {title: "Login"})
});

router.post('/register', isGuest, async (req, res) => {
    const {username, password, repeatPassword} = req.body;
    try {
        if (password !== repeatPassword) {
            throw { message: 'Passwords don\'t match' };
        }
        await authService.registerUser(username, password);
        res.redirect('/auth/login')
    } catch (error) {
        console.log(error)
        res.render('register', {title: 'Register', error });
    } 
});

router.post('/login', isGuest, async (req, res) => {
    try {
        let token = await authService.loginUser(req.body);
        res.cookie(COOKIE_NAME, token, {httpOnly: true});
        res.redirect('/');
    } catch (error) {
        console.log(error)
        res.render('login', {title: 'Login', error });
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/');
});


module.exports = router;