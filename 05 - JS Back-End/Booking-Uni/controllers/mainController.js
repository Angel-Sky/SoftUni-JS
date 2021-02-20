const router = require('express').Router();
const hotelService = require('../services/hotelService')
const User = require('../models/User');

router.get('/', async (req, res) => {
    let hotels = await hotelService.getAll(req.query);
    res.render('home', { title: 'Booking Uni', hotels })
});

router.get('/profile', async (req, res) => {
    let usr = await User.findById(req.user._id).populate('bookedHotels');
    let hotels = [];
    usr.bookedHotels.map(x => hotels.push(x.hotel));

    res.render('profile', {title: 'Profile', usr: {username: usr.username, email: usr.email, bookedHotels: hotels}})
});

module.exports = router;