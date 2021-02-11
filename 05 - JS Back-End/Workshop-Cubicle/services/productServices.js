const Cube = require('../models/Cube');
const uniqid = require('uniqid');
const fs = require('fs');
let productsData = require('../config/products.json');


function create(data) {
    const {name, description, imageUrl, difficultyLevel} = data;
    let cube = new Cube(uniqid(), name, description, imageUrl, difficultyLevel);
    console.log(cube);
    productsData.push(cube);
    fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(productsData), (err) => {
        if (err) {
            return console.error(err);
        }
    })
}

module.exports = {
    create
}
