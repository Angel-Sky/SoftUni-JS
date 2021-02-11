const config = require('./config/config');
const express = require('express');
const app = express()

require('./config/express')(app);
// require('./config/routes')(app);

app.get('/', (req, res) => {
    res.render('home', {layout: false})
})

app.listen(config.PORT, console.log(`Listening on port ${config.PORT}...`));