const { Router } = require('express');
const router = Router();
const productService = require('../services/productServices');
const accessoryService = require('../services/accessoryService');

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

router.get('/:id/attach-accessory', async (req, res) => {
    let product = await productService.getSpecific(req.params.id);
    let accessories = await accessoryService.getAll();

    res.render('attachAccessory', { title: 'Attach Accessory', product, accessories })
});

router.post('/:id/attach-accessory', (req, res) => {
    productService.attachAccessory(req.params.id, req.body.accessory)
        .then(() => res.redirect(`/details/${req.params.id}`))

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