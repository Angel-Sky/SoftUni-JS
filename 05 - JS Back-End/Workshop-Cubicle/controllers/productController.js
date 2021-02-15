const { Router } = require('express');
const router = Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
const productService = require('../services/productServices');
const accessoryService = require('../services/accessoryService');

router.get('/create', isAuthenticated, (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', isAuthenticated, validateInput, (req, res) => {
    productService.create(req.body)
        .then(() => res.redirect('/'))
        .catch((err) => console.error(err));
});

router.get('/details/:id', async (req, res) => {
    let product = await productService.getOneWithAccessories(req.params.id);
    res.render('details', { title: 'Attach Accessory', product })
});

router.get('/:id/attach-accessory', isAuthenticated, async (req, res) => {
    let product = await productService.getSpecific(req.params.id);
    let accessories = await accessoryService.getAllUnattached(product.accessories);

    res.render('attachAccessory', { title: 'Attach Accessory', product, accessories })
});

router.post('/:id/attach-accessory', isAuthenticated, (req, res) => {
    productService.attachAccessory(req.params.id, req.body.accessory)
        .then(() => res.redirect(`/details/${req.params.id}`))
});

router.get('/:id/edit', isAuthenticated, async (req, res) => {
    let product = await productService.getSpecific(req.params.id);
    res.render('edit', { title: 'Edit Product', product })
});

router.post('/:id/edit', isAuthenticated, async (req, res) => {
    try {
        await productService.update(req.params.id, req.body);
        res.redirect(`/details/${req.params.id}`)
    } catch (error) {
        console.log(error);     
    }
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