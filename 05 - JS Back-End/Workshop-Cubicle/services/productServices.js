const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
//const productData = require('../data/data')

async function getAllProducts(query) {
    //let products = Cube.getAll();
    //let products = productData.getAllData();
    let products = await Cube.find().lean();
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

async function getSpecific(id) {
    //return Cube.getOne(id);
    //return productData.getOne(id);
    return await Cube.findById(id).lean();
}

async function getOneWithAccessories(id) {
    return await Cube.findById(id).populate('accessories').lean();
}

async function update(id, data) {
    return await Cube.updateOne({_id: id}, data);
}

async function deleteCube(id) {
    return await Cube.deleteOne({_id: id});
}

function create(data, userId) {
    const cube = new Cube({...data, creator: userId});
    return cube.save()
}

async function attachAccessory(productId, accesoryId) {
    let product = await Cube.findById(productId);
    let accessory = await Accessory.findById(accesoryId);
    product.accessories.push(accessory);
    return product.save();
}

module.exports = {
    create,
    getAllProducts,
    getSpecific,
    getOneWithAccessories,
    attachAccessory,
    update,
    deleteCube
}
