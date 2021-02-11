const {Router} = require('express');
const router = Router();

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'})
});

router.get('/details/:id', (req, res) => {
    res.render('details', {title: 'Details'})
});

module.exports = router;