const {Router} = require('express');
const router = Router();
const productController = require('../controllers/productController')
const mainController = require('../controllers/mainController')
const accessoryController = require('../controllers/accessoryControler');

router.use(mainController);
router.use(productController);
router.use('/accessories', accessoryController);
router.get("*", (req, res) => {
    res.render('404')
});

module.exports = router;
