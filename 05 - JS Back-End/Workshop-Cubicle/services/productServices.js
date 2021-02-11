const Cube = require('../models/Cube');
const uniqid = require('uniqid');
const fs = require('fs/promises');
const path = require('path');
let productsData = require('../config/products.json');

function getAllProducts() {
    return productsData;
}

function getSpecific(id) {
    return productsData.find(x => x.id == id);
}

function create(data) {
    const {name, description, imageUrl, difficultyLevel} = data;
    let cube = new Cube(uniqid(), name, description, imageUrl, difficultyLevel);
    productsData.push(cube);
    return fs.writeFile(path.join(__dirname, '../config/products.json'), JSON.stringify(productsData));
}

module.exports = {
    create,
    getAllProducts,
    getSpecific
}