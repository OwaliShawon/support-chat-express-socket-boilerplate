const express = require('express');
const { getUsers, createUser, getUser, updateUser, deleteUser } = require('./api');
const { validateRequest } = require('../../middlewares/request-validate');
const getUsersDto = require('./dto');
const errorHandler = require('../../libraries/error-handling');

const router = express.Router();

router.get('/', validateRequest({ schema: getUsersDto }), getUsers); // GET /users
router.post('/', createUser); // POST /users
router.get('/:id', getUser); // GET /user:id
router.patch('/:id', updateUser); // PATCH /user:id
router.delete('/:id', deleteUser); // DELETE /user:id

module.exports = router;
