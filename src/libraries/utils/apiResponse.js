const apiResponse = (res, status = 200, message, data = null, meta = null) => {
    const response = {
        status,
        message,
    };

    if (data) response.data = data;
    if (meta) response.meta = meta;

    return res.status(status).json(response);
};

module.exports = apiResponse;
