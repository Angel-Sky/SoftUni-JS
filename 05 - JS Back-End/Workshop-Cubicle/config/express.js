const express = require('express');
const handlebars = require('express-handlebars');

module.exports = (app) => {
    app.engine('hbs', handlebars({
        extname: 'hbs'
    }));

    app.set('view engine', 'hbs');

    app.use(express.static("static"));
    app.use(express.urlencoded({
        extended: true
    }));
};