const logger = require('../../libraries/log/logger');

function validateRequest({ schema, isParam = false }) {
    return (req, res, next) => {
        const input = isParam ? req.params : req.body;
        const validationResult = schema.validate(input, { abortEarly: false });

        if (validationResult.error) {
            // Transform error details into key-value format and clean up the messages
            const errorDetails = validationResult.error.details.map((detail) => ({
                key: detail.path.join('.'),
                message: detail.message.replace(/\"/g, ''), // Remove all quotes from the message
            }));

            logger.error(`${req.method} ${req.originalUrl} Validation failed`, {
                errors: errorDetails,
            });

            // Respond with the decorated error messages
            return res.status(400).json({
                code: 400,
                message: 'Validation failed',
                errors: errorDetails,
            });
        }

        // Validation successful - proceed
        next();
    };
}

module.exports = { validateRequest };
