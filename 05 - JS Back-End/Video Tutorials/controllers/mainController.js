const router = require('express').Router();
const courseService = require('../services/courseService');
const moment = require("moment");

router.get('/', async (req, res) => {
    let courses;
    if (req.user) {
        courses = await courseService.getAll(req.query);
        courses = courses.map(x => ({...x, createdAt: moment(x.createdAt).format('ddd MMM d YYYY HH:mm:ss')}))
    } else {
        courses = await courseService.getMostPop(3);
    }

    res.render('home', { title: 'Video Tutorials', courses })
});


module.exports = router;