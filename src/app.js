const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
const helmet = require('helmet');
require('./routes')(app);

// Middleware
app.use([compression(), express.json(), express.urlencoded({ extended: true }), helmet()]);

// Static files
app.use('/css', express.static(path.join(__dirname, '../public/css')));
app.use('/js', express.static(path.join(__dirname, '../public/js')));

// Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

module.exports = app;
