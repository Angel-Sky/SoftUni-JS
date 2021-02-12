const mongoose = require('mongoose');

module.exports = (app) => {
    mongoose.connect('mongodb://localhost/cubicle', {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'DB connection error:'));
    db.once('open', console.log.bind(console, 'DB connected!'));
}