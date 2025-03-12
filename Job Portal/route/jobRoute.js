const express = require('express');
const {getAllJob, postJob } = require('../controller/jobController');

const router = express.Router();

router.post("/add", postJob);
router.get("/getAll", getAllJob);

module.exports = router;