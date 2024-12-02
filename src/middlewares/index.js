const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDoc = YAML.load('./swagger.yaml');


const applyMiddleware = (app) => {
    // Core Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    // Security and Optimization
    app.use(compression());
    app.use(helmet());
    
    // API Documentation
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
};

module.exports = applyMiddleware;