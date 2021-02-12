const {Router} = require('express');
const router = Router();
const productServices = require('../services/productServices')

router.get('/', (req, res) => {
    productServices.getAllProducts(req.query)
    .then((products) => {
        res.render('home', {title: 'Cubicle', products})
    })
    .catch((err) => res.status(500).end());
});

router.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
});

module.exports = router;