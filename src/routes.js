const express = require('express');
const userRoutes = require('./domains/users/routes');

const apiRouter = express.Router();

// Attach domain routes
apiRouter.use('/users', userRoutes);

module.exports = (app) => {
    // API routes
    app.use('/api/v1', apiRouter);

    // Health check route
    app.get('/health', (req, res) => {
        res.status(200).send('OK');
    });

    // Widget route
    app.get('/widget', (req, res) => {
        res.render('widget', { name: req.query.name });
    });
};
