const config = require('./config/config');
const express = require('express');
const app = express();
const routes = require('./config/routes');

require('./config/express')(app);
require('./config/mongoose')(app);

app.use(routes);
app.listen(config.PORT, console.log(`Listening on port ${config.PORT}...`));