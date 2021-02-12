const Cube = require('../models/Cube');
const uniqid = require('uniqid');

function getAllProducts(query) {
    let products = Cube.getAll();

    if (query.search) {
        products = products.filter(x => x.name.toLowerCase().includes(query.search.toLowerCase()));
    }

    if (query.from) {
        products = products.filter(x => x.difficultyLevel >= query.from);
    }

    if (query.to) {
        products = products.filter(x => x.difficultyLevel <= query.to);
    }

    return products;
}

function getSpecific(id) {
    return Cube.getOne(id);
}

function create(data) {
    const {name, description, imageUrl, difficultyLevel} = data;
    const cube = new Cube(uniqid(), name, description, imageUrl, difficultyLevel);

    return cube.save()
}

module.exports = {
    create,
    getAllProducts,
    getSpecific
}
