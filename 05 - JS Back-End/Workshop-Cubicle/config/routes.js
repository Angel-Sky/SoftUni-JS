const {Router} = require('express');
const router = Router();
const productController = require('../controllers/productController')
const mainController = require('../controllers/mainController')

router.use(productController);
router.use(mainController);
router.get("*", (req, res) => {
    res.render('404', {layout: false})
});

module.exports = router;
