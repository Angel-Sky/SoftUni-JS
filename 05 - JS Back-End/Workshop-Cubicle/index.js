const config = require('./config/config');
const handlebars = require('express-handlebars');
const express = require('express');
const app = express()

// require('./config/express')(app);
// require('./config/routes')(app);
app.engine('hbs', handlebars({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.static("static"))
app.get('/', (req, res) => {
    res.render('home', {layout: false})
})

app.listen(config.PORT, console.log(`Listening on port ${config.PORT}...`));