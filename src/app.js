const express = require('express');
const path = require('path');
const applyMiddleware = require('./middlewares');

// Initialize the app
const app = express();

require('./routes')(app);

// Middleware
applyMiddleware(app);

// Static files
app.use('/css', express.static(path.join(__dirname, '../public/css')));
app.use('/js', express.static(path.join(__dirname, '../public/js')));

// Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

module.exports = app;
