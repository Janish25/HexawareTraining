const express = require('express');
const { signup, login } = require('../controllers/usercontroller');
const { body } = require('express-validator');
const router = express.Router();
 
router.post("/signup",[
    body('username').not().isEmpty(),
    body('password').isLength({min:6, max:14})
], signup);
router.post("/login",[
    body('username').not().isEmpty(),
    body('password').not().isEmpty()
], login)

module.exports = router;  