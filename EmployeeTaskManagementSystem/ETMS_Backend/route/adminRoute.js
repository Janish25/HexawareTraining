const express = require('express');
const { addAdmin, login } = require('../controller/adminController');

const router = express.Router();

router.post("/add", addAdmin)
router.post("/login", login)
module.exports = router; 