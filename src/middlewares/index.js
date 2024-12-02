const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDoc = YAML.load('./swagger.yaml');


const applyMiddleware = (app) => {
    app.use([express.json(), express.urlencoded({ extended: true }), compression(), helmet()]);
    // API Documentation
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
};

module.exports = applyMiddleware;