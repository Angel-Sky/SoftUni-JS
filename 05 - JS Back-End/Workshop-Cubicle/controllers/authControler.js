const { Router } = require('express');
const router = Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
const isGuest = require('../middlewares/isGuest');
const authService = require('../services/authService');
const {COOKIE_NAME} = require('../config/config');

router.get('/register', isGuest, (req, res) => {
    res.render('registerPage', {title: 'Register'});
});

router.post('/register', isGuest, async (req, res) => {
    const {password, repeatPassword, username} = req.body;
    try {
        if (password !== repeatPassword) {
            throw { message: 'Passwords don\'t match' };
        }
        
        await authService.register(req.body);
        res.redirect('/auth/login');
    } catch (error) {
        res.render('registerPage', {title: 'Register', error });
    }
});

router.get('/login', isGuest, (req, res) => {
    res.render('loginPage', {title: "Login"});
});

router.post('/login', isGuest, async (req, res) => {
    try {
        let token = await authService.login(req.body);
        res.cookie(COOKIE_NAME, token);
        res.redirect('/');
    } catch (error) {
        res.render('loginPage', {title: 'Login', error });
    }
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/');
});


module.exports = router;