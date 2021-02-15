const { Router } = require('express');
const router = Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
const isGuest = require('../middlewares/isGuest');
const authService = require('../services/authService');
const {COOKIE_NAME} = require('../config/config')

router.get('/register', isGuest, (req, res) => {
    res.render('registerPage');
});

router.post('/register', isGuest, async (req, res) => {
    try {
        await authService.register(req.body);
        res.redirect('/auth/login');
    } catch (error) {
        res.render('registerPage', { error });
    }
});

router.get('/login', isGuest, (req, res) => {
    res.render('loginPage');
});

router.post('/login', isGuest, async (req, res) => {
    try {
        let token = await authService.login(req.body);
        res.cookie(COOKIE_NAME, token);
        res.redirect('/');
    } catch (error) {
        res.render('loginPage', { error });
    }
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/');
});




module.exports = router;