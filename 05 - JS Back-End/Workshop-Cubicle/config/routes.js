const {Router} = require('express');
const router = Router();
const productController = require('../controllers/productController')
const mainController = require('../controllers/mainController')

router.use(productController);
router.use(mainController);

module.exports = router;
