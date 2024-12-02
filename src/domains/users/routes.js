const express = require('express');
const { findAll, findById, create, update, remove } = require('./api');

const router = express.Router();

router.get('/', findAll); // GET /users
router.post('/', create); // POST /users
router.get('/:id', findById); // GET /user:id
router.patch('/:id', update); // PATCH /user:id
router.delete('/:id', remove); // DELETE /user:id

module.exports = router;
