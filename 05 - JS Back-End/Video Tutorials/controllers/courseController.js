const { Router } = require('express');
const router = Router();
const courseService = require('../services/courseService');

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', async (req, res) => {
    let { title, description, imageUrl, isPublic } = req.body;
    let courseData = {
        title, description, imageUrl, isPublic: Boolean(isPublic), createdAt: new Date()
    }
    try {
        await courseService.create(courseData, req.user._id);
        res.redirect('/');
    } catch (error) {
        res.render('create', { error });
    }
});

router.get('/:id/details', async (req, res) => {
    let course = await courseService.getSpecific(req.params.id, req.user._id);
    res.render('details', { title: 'Details', course })
});


router.get('/:id/edit', async (req, res) => {
    let course = await courseService.getSpecific(req.params.id);
    course.checked = course.isPublic ? 'checked' : '';
    res.render('edit', { title: 'Edit course', course })
});

router.post('/:id/edit', async (req, res) => {
    let { title, description, imageUrl, isPublic } = req.body;
    let courseData = {
        title, description, imageUrl, isPublic: Boolean(isPublic), createdAt: new Date()
    }
    try {
        await courseService.update(req.params.id, courseData);
        res.redirect(`/course/${req.params.id}/details`)
    } catch (error) {
        res.render('edit', { error })
    }
});

router.get('/:id/delete', async (req, res) => {
    try {
        await courseService.deleteCourse(req.params.id);
        res.redirect(`/`);
    } catch (error) {
        res.render('delete', { error })
    }
});

router.get('/:id/enroll', async (req, res) => {
    try {
        await courseService.enroll(req.params.id, req.user._id);
        res.redirect(`/course/${req.params.id}/details`);
    } catch (error) {
        res.render('details', { error })
    }
});


module.exports = router;