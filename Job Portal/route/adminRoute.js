const express = require('express');

const { body } = require('express-validator');
const { addAdmin, login } = require('../controller/adminController');

const router = express.Router();

router.post("/addAdmin", [
    body('username').not().isEmpty(),
    body('password').isLength({min:6, max:14})
],addAdmin);
router.post("/login",[
    body('username').not().isEmpty(),
    body('password').not().isEmpty()
] ,login);

module.exports = router;