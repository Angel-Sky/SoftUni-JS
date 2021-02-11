const config = require('./config/config');
const app = require('express')();

// require('./config/express')(app);
// require('./config/routes')(app);
app.get('/', (req, res) => {
    res.send("Hiiii")
})

app.listen(config.PORT, console.log(`Listening on port ${config.PORT}...`));