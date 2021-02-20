const { Router } = require('express');
const router = Router();
const hotelService = require('../services/hotelService');

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', async (req, res) => {
    try {
        await hotelService.create(req.body, req.user._id);
        res.redirect('/');
    } catch (error) {
        res.render('create', { error });
    }
});

router.get('/:id/details', async (req, res) => {
    let hotel = await hotelService.getSpecific(req.params.id, req.user._id);
    res.render('details', { title: 'Details', hotel })
});


router.get('/:id/edit', async (req, res) => {
    let hotel = await hotelService.getSpecific(req.params.id);
    res.render('edit', { title: 'Edit hotel', hotel })
});

router.post('/:id/edit', async (req, res) => {
    try {
        await hotelService.update(req.params.id, req.body);
        res.redirect(`/hotel/${req.params.id}/details`)
    } catch (error) {
        res.render('edit', { error })
    }
});

router.get('/:id/delete', async (req, res) => {
    let hotel = await hotelService.getSpecific(req.params.id);
    res.render('delete', { title: 'Delete Hotel', hotel })
});

router.post('/:id/delete', async (req, res) => {
    try {
        await hotelService.deleteHotel(req.params.id);
        res.redirect(`/`);
    } catch (error) {
        res.render('delete', { error })
    }
});

router.get('/:id/book', async (req, res) => {
    try {
        await hotelService.book(req.params.id, req.user._id);
        res.redirect(`/hotel/${req.params.id}/details`);
    } catch (error) {
        res.render('details', { error })
    }
});


module.exports = router;