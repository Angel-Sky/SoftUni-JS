const Cube = require('../models/Cube');
const uniqid = require('uniqid');
const fs = require('fs');
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
    console.log(cube);
    productsData.push(cube);
    fs.writeFile(path.join(__dirname, '../config/products.json'), JSON.stringify(productsData), (err) => {
        if (err) {
            return console.error(err);
        }
    })
}

module.exports = {
    create,
    getAllProducts,
    getSpecific
}
