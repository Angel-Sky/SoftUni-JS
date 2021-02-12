const Cube = require('../models/Cube');
const productData = require('../data/data')

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

function create(data) {
    const {name, description, imageUrl, difficultyLevel} = data;
    const cube = new Cube(data);

    return cube.save()
}

module.exports = {
    create,
    getAllProducts,
    getSpecific
}
