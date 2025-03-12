const express = require('express');
const { signup, login, getAllUsers, getUserByCity } = require('../controller/userController');
const { body } = require('express-validator');
const auth = require('../middleware/auth');

const router = express.Router();

router.post("/signup", [
    body('username').not().isEmpty(),
    body('password').isLength({min:6, max:14})
],signup);
router.post("/login",[
    body('username').not().isEmpty(),
    body('password').not().isEmpty()
] ,login);
router.get("/getAll", auth, getAllUsers);
router.get("/getUserByCity/:cName", auth, getUserByCity);

module.exports = router;