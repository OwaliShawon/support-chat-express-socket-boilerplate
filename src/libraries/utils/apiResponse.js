const apiResponse = (code = 200, message, data = null, meta = null) => {
    return {
        code,
        message,
        data,
        meta,
    };
};

module.exports = apiResponse;
