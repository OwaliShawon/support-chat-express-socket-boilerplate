const express = require('express');
const { register, login } = require('./api');
const { logRequest } = require('../../middlewares/request-log');
const { validateRequest } = require('../../middlewares/request-validate');
const { registerDto, loginDto } = require('./dto');

const router = express.Router();

router.route('/register').post(validateRequest({ schema: registerDto }), register);
router.route('/login').post(validateRequest({ schema: loginDto }), login);

module.exports = router;
