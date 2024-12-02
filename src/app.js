const express = require('express');
const path = require('path');
const applyMiddleware = require('./middlewares');
const logger = require('./libraries/log/logger');

// Initialize the app
const app = express();

logger.info('Applying middlewares');
applyMiddleware(app);

logger.info('Defining Routes');
require('./routes')(app);

// Static files
app.use('/css', express.static(path.join(__dirname, '../public/css')));
app.use('/js', express.static(path.join(__dirname, '../public/js')));

// Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

module.exports = app;
