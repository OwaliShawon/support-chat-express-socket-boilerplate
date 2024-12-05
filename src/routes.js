const express = require('express');
const userRoutes = require('./domains/users/routes');
const authRoutes = require('./domains/auth/routes');
const { AppError } = require('./libraries/error-handling/AppError');

const apiRouter = express.Router();

// Attach domain routes
apiRouter.use('/users', userRoutes);
apiRouter.use('/auth', authRoutes);

module.exports = app => {
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

    // Fallback for unhandled routes
    app.use('*', (req, res, next) => {
        next(new AppError('NotFoundError', 'Route not found', 404));
    });
};
