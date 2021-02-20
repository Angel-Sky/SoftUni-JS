const router = require('express').Router();
const mainController = require('./controllers/mainController');
const authController = require('./controllers/authController');
const somethingController = require('./controllers/somethingController')
const isAuth = require('./middlewares/isAuth');

router.use('/', mainController);
router.use('/auth', authController);
router.use('/some', isAuth, somethingController)

module.exports = router;