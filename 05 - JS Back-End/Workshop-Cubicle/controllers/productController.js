const {Router} = require('express');
const router = Router();

router.get('/create', (req, res) => {
    res.render('create', {layout: false})
});

router.get('/details/:id', (req, res) => {
    res.render('details', {layout: false})
});

module.exports = router;