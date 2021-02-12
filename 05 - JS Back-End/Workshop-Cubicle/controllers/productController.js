const { Router } = require('express');
const router = Router();
const productService = require('../services/productServices');

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', validateInput, (req, res) => {
    productService.create(req.body)
        .then(() => res.redirect('/'))
        .catch((err) => console.error(err));
});

router.get('/details/:id', (req, res) => {
    // let product = productService.getSpecific(req.params.id);
    // res.render('details', { title: 'Details', product })

    productService.getSpecific(req.params.id)
        .then((product) => res.render('details', { title: 'Details', product }))
        .catch()

});


function validateInput(req, res, next) {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    let isValid = true;
    if (name.trim().length == "" || description.trim().length == "" || imageUrl.trim().length == "") {
        isValid = false;
    }

    if (isValid) {
        next();
    }
}

module.exports = router;