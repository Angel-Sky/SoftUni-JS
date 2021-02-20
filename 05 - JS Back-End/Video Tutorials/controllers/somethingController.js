const { Router } = require('express');
const router = Router();
const someService = require('../services/someService');

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

// router.post('/create', async (req, res) => {
//     try {
//         await someService.create(req.body, req.user._id);
//         res.redirect('/');
//     } catch (error) {
//         res.render('create', { error });
//     }
// });

// router.get('/:id/details', async (req, res) => {
//     let hotel = await someService.getSpecific(req.params.id, req.user._id);
//     res.render('details', { title: 'Details', hotel })
// });


// router.get('/:id/edit', async (req, res) => {
//     let hotel = await someService.getSpecific(req.params.id);
//     res.render('edit', { title: 'Edit hotel', hotel })
// });

// router.post('/:id/edit', async (req, res) => {
//     try {
//         await someService.update(req.params.id, req.body);
//         res.redirect(`/hotel/${req.params.id}/details`)
//     } catch (error) {
//         res.render('edit', { error })
//     }
// });

// router.get('/:id/delete', async (req, res) => {
//     let hotel = await someService.getSpecific(req.params.id);
//     res.render('delete', { title: 'Delete Hotel', hotel })
// });

// router.post('/:id/delete', async (req, res) => {
//     try {
//         await someService.deleteHotel(req.params.id);
//         res.redirect(`/`);
//     } catch (error) {
//         res.render('delete', { error })
//     }
// });

// router.get('/:id/book', async (req, res) => {
//     try {
//         await someService.book(req.params.id, req.user._id);
//         res.redirect(`/hotel/${req.params.id}/details`);
//     } catch (error) {
//         res.render('details', { error })
//     }
// });


module.exports = router;