const Cube = require('../models/Cube');
const uniqid = require('uniqid');
const fs = require('fs/promises');
const path = require('path');
const productsData = require('../data/data');

function getAllProducts(query) {
    let result = productsData.getAllData();

    if (query.search) {
        result = result.filter(x => x.name.toLowerCase().includes(query.search.toLowerCase()));
    }

    if (query.from) {
        result = result.filter(x => x.difficultyLevel >= query.from);
    }

    if (query.to) {
        result = result.filter(x => x.difficultyLevel <= query.to);
    }

    return result;
}

function getSpecific(id) {
    return productsData.getOne(id);
}

function create(data) {
    const {name, description, imageUrl, difficultyLevel} = data;
    const cube = new Cube(uniqid(), name, description, imageUrl, difficultyLevel);
    return productsData.create(cube);
}

module.exports = {
    create,
    getAllProducts,
    getSpecific
}
