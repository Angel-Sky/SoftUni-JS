const router = require('express').Router();
const courseService = require('../services/courseService');
const moment = require("moment");

router.get('/', async (req, res) => {
    try {
        let courses;
        if (req.user) {
            courses = await courseService.getAll(req.query.search);
            courses = courses.map(x => ({ ...x, createdAt: moment(x.createdAt).format('ddd MMM d YYYY HH:mm:ss') }))
        } else {
            courses = await courseService.getMostPop(3);
        }

        res.render('home', { title: 'Video Tutorials', courses })
    } catch (error) {
        res.render('home', { title: 'Video Tutorials', courses, error })
    }
});


module.exports = router;