const router = require('express').Router();
const courseService = require('../services/courseService');

router.get('/', async (req, res) => {
    let courses = await courseService.getAll(req.query);
    res.render('home', { title: 'Video Tutorials', courses })
});


module.exports = router;