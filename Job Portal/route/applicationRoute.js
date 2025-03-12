const express = require('express');
const { applyJob, getUserByJobId, getJobByUserId } = require('../controller/applicationController');
const auth = require('../middleware/auth');


const router = express.Router();

router.post("/apply/:jid/:uid", applyJob);
router.get("/getUserByJobId/:jid", auth, getUserByJobId);
router.get("/getJobByUserId/:uid", auth, getJobByUserId);

module.exports = router