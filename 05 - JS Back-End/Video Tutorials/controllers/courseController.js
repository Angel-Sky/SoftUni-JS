const { Router } = require('express');
const router = Router();
const courseService = require('../services/courseService');

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', async (req, res) => {
    let { title, description, imageUrl, isPublic } = req.body;
    isPublic = Boolean(isPublic);
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


// router.get('/:id/edit', async (req, res) => {
//     let hotel = await courseService.getSpecific(req.params.id);
//     res.render('edit', { title: 'Edit hotel', hotel })
// });

// router.post('/:id/edit', async (req, res) => {
//     try {
//         await courseService.update(req.params.id, req.body);
//         res.redirect(`/hotel/${req.params.id}/details`)
//     } catch (error) {
//         res.render('edit', { error })
//     }
// });

// router.get('/:id/delete', async (req, res) => {
//     let hotel = await courseService.getSpecific(req.params.id);
//     res.render('delete', { title: 'Delete Hotel', hotel })
// });

// router.post('/:id/delete', async (req, res) => {
//     try {
//         await courseService.deleteHotel(req.params.id);
//         res.redirect(`/`);
//     } catch (error) {
//         res.render('delete', { error })
//     }
// });

// router.get('/:id/book', async (req, res) => {
//     try {
//         await courseService.book(req.params.id, req.user._id);
//         res.redirect(`/hotel/${req.params.id}/details`);
//     } catch (error) {
//         res.render('details', { error })
//     }
// });


module.exports = router;