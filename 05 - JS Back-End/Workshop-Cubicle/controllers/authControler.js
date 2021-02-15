const { Router } = require('express');
const router = Router();
const authService = require('../services/authService');
const {COOKIE_NAME} = require('../config/config')

router.get('/register', (req, res) => {
    res.render('registerPage');
});

router.post('/register', async (req, res) => {
    try {
        await authService.register(req.body);
        res.redirect('/auth/login');
    } catch (error) {
        res.render('registerPage', { error });
    }
});

router.get('/login', (req, res) => {
    res.render('loginPage');
});

router.post('/login', async (req, res) => {
    try {
        let token = await authService.login(req.body);
        res.cookie(COOKIE_NAME, token);
        res.redirect('/');
    } catch (error) {
        res.render('loginPage', { error });
    }
});




module.exports = router;