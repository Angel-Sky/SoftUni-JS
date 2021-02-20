const express = require('express');
const app = express();
const {PORT} = require('./config/config');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

require('./config/express')(app);
require('./config/mongoose');

app.use(routes);
// app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
