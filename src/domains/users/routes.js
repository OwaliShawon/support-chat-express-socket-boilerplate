const express = require('express');
const { findAll, findById, create, update, remove } = require('./api');
const { logRequest } = require('../../middlewares/request-log');
const { validateRequest } = require('../../middlewares/request-validate');
const { createUserDto, updateUserDto, userIdDto } = require('./dto');

const router = express.Router();

router
    .route('/')
    .get(findAll)
    .post(validateRequest({ schema: createUserDto }), create);

router
    .route('/:id', validateRequest({ schema: userIdDto }, true))
    .get(findById)
    .patch(validateRequest({ schema: updateUserDto }), update)
    .delete(remove);

module.exports = router;
