const fs = require('fs/promises');
const path = require('path');
const productsDb = require('../config/products.json');

module.exports = {
    getAllData() {
        return productsDb;
    },
    create(product) {
        productsDb.push(product);
        return fs.writeFile(path.join(__dirname, '../config/products.json'), JSON.stringify(productsData));
    },
    getOne(id) {
        return productsDb.find(x => x.id == id);
    }
}