const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.engine('hbs', handlebars({
        extname: 'hbs'
    }));
    
    app.set('view engine', 'hbs');
    
    app.use(express.static("static"));
    app.use(express.urlencoded({
        extended: true
    }));
    //TODO: Setup the view engine

    //TODO: Setup the body parser

    //TODO: Setup the static files

};