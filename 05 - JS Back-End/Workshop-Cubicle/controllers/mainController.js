const {Router} = require('express');
const router = Router();
const productServices = require('../services/productServices')

router.get('/', (req, res) => {
    let products = productServices.getAllProducts(req.query);
    res.render('home', {title: 'Cubicle', products})
});

router.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
});

module.exports = router;