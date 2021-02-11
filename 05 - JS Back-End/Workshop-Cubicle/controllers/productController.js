const {Router} = require('express');
const router = Router();
const productService = require('../services/productServices');

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

router.post('/create', (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;
    if (name.trim().length == "" || description.trim().length == "" || imageUrl.trim().length == "") {
        return;
    }
    productService.create(req.body);
    res.redirect('/');
});

router.get('/details/:id', (req, res) => {
    let product = productService.getSpecific(req.params.id);
    res.render('details', {title: 'Details', product})
});

module.exports = router;