const Accessory = require('../models/Accessory.js');

function getAll() {
    return Accessory.find().lean();
}

function getAllUnattached(ids) {
    return Accessory.find({ _id: {$nin: ids} }).lean();
}

function create(data) {
    let accessory = new Accessory(data);

    return accessory.save();
}

module.exports = {
    getAll,
    getAllUnattached,
    create,
};