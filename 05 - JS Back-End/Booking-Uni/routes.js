const router = require('express').Router();
const mainController = require('./controllers/mainController');
const authController = require('./controllers/authController');
const hotelController = require('./controllers/hotelController');
const isAuth = require('./middlewares/isAuth');

router.use('/', mainController);
router.use('/auth', authController);
router.use('/hotel', isAuth, hotelController);

module.exports = router;