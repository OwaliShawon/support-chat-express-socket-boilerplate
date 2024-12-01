const express = require('express');
const { getUsers, createUser } = require('./api');

const router = express.Router();

router.get('/', getUsers); // GET /users
router.post('/', createUser); // POST /users

module.exports = router;
