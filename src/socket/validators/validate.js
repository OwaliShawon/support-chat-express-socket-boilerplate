const validate = (schema, data) => {
    const { error, value } = schema.validate(data, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        throw new Error(errors.join(', '));
    }
    return value;
};

module.exports = validate;
