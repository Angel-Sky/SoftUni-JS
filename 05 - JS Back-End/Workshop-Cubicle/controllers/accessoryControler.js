const { Router } = require('express');
const router = Router();
const accessoryService = require('../services/accessoryService');
const isAuthenticated = require('../middlewares/isAuthenticated');

router.get('/create', isAuthenticated, (req, res) => {
    res.render('createAccessory');
});

// TODO: Create validation middleware or just validate incomming data
router.post('/create', (req, res) => {
    accessoryService.create(req.body)
        .then(() => res.redirect('/'))
        .catch(() => res.status(500).end());
});

module.exports = router;