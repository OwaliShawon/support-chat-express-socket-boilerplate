const { ValidationError } = require('joi');

const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    // Handle Joi validation errors
    if (err instanceof ValidationError || err.isJoi) {
        return res.status(400).json({
            error: 'Validation Error',
            details: err.details.map((detail) => detail.message),
        });
    }

    // Handle other errors
    console.error('Error:', err.message || err);
    return res.status(err.HTTPStatus || 500).json({
        code: err.HTTPStatus || 500,
        message: err.message || 'Something went wrong!',
        error: 'Internal Server Error',
    });
};

module.exports = errorHandler;
