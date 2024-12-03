const express = require('express');
const { findAll, findById, create, update, remove } = require('./api');

const router = express.Router();

router
    .route('/')
    .get(findAll) // GET /users
    .post(create); // POST /users

router
    .route('/:id')
    .get(findById) // GET /user:id
    .patch(update) // PATCH /user:id
    .delete(remove); // DELETE /user:id

module.exports = router;
