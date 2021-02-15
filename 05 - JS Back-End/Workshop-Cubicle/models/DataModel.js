//Old file about saving info into JSON file - i'm keeping it just for the demo

const fs = require('fs/promises');
const path = require('path');
const productsDb = require('../config/products.json');

class DataModel {
    save() {
        productsDb.push(this);
        return fs.writeFile(path.join(__dirname, '../config/products.json'), JSON.stringify(productsDb));
    }

    static getAll() {
        return productsDb;
    }

    static getOne(id) {
        return productsDb.find(x => x.id == id);
    }
}

module.exports = DataModel;