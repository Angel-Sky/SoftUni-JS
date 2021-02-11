const {Router} = require('express');
const router = Router();

router.get('/create', (req, res) => {
    res.render('create')
});

router.get('/details/:id', (req, res) => {
    res.render('details')
});

module.exports = router;