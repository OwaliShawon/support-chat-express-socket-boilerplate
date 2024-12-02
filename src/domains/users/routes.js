const express = require('express');
const { getUsers, createUser, getUser, updateUser, deleteUser } = require('./api');

const router = express.Router();

router.get('/', getUsers); // GET /users
router.post('/', createUser); // POST /users
router.get('/:id', getUser); // GET /user:id
router.patch('/:id', updateUser); // PATCH /user:id
router.delete('/:id', deleteUser); // DELETE /user:id

module.exports = router;
