const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const { logRequest } = require('./request-log');
const swaggerDoc = YAML.load('./swagger.yaml');

const applyMiddleware = app => {
    app.use([express.json(), express.urlencoded({ extended: true }), compression(), helmet()]);
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
    app.use(logRequest({}));
};

module.exports = applyMiddleware;
