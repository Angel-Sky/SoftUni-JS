const router = require('express').Router();
const mainController = require('./controllers/mainController');
const authController = require('./controllers/authController');
const courseController = require('./controllers/courseController')
const isAuth = require('./middlewares/isAuth');

router.use('/', mainController);
router.use('/auth', authController);
router.use('/course', isAuth, courseController)

module.exports = router;