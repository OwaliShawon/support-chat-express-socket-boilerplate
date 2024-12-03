const express = require('express');
const { findAll, findById, create, update, remove } = require('./api');
const { logRequest } = require('../../middlewares/request-log');
const { validateRequest } = require('../../middlewares/request-validate');
const getUsersDto = require('./dto');

const router = express.Router();

router
    .route('/')
    .get(logRequest({}), validateRequest({ schema: getUsersDto }), findAll) // GET /users
    .post(logRequest({}), create); // POST /users

router
    .route('/:id')
    .get(logRequest({}), findById) // GET /user:id
    .patch(logRequest({}), update) // PATCH /user:id
    .delete(logRequest({}), remove); // DELETE /user:id

module.exports = router;
