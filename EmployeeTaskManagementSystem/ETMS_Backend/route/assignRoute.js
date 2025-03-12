const express = require('express');
const { assignTaskToEmployee, getTaskByEmployee, getTaskByEmployeeId } = require('../controller/assignController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post("/add/task/employee", auth, assignTaskToEmployee);
router.get("/get/taskByEmployee/:eid", auth, getTaskByEmployeeId);
router.get("/taskById", auth, getTaskByEmployee);

module.exports = router;