const Hotel = require('../models/Hotel');
const User = require('../models/User');

async function create(data, userId) {
    let hotel = new Hotel({ ...data, owner: userId })
    await hotel.save();
    let user = await User.findById(userId);
    user.offeredHotels.push(hotel);
    return await user.save();
}

async function getAll() {
    let hotel = await Hotel.find().sort({ 'free-rooms': -1 }).lean();
    return hotel;
}

async function getSpecific(id, userId) {
    let hotel = await Hotel.findById(id).populate('bookedBy').lean();
    hotel.isBooked = hotel.bookedBy.some(x => x._id == userId);
    hotel.isOwner = hotel.owner == userId;

    return hotel;
}

async function update(id, data) {
    return await Hotel.updateOne({ _id: id }, data);
}

async function deleteHotel(id) {
    return await Hotel.deleteOne({ _id: id });
}


async function book(hotelId, userId) {
    let hotel = await Hotel.findById(hotelId);
    if (!hotel.bookedBy.includes(userId)) {
        hotel.bookedBy.push(userId);
    }

    await hotel.save();
    let user = await User.findById(userId);
    user.bookedHotels.push(hotelId);
    return await user.save();
}


module.exports = {
    create,
    getAll,
    getSpecific,
    update,
    deleteHotel,
    book,
}
