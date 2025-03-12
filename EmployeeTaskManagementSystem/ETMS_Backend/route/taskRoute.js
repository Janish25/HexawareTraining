const express = require('express');
const { addTask, getAllTask,updateStatus } = require('../controller/taskController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post("/add/:pid", addTask)
router.get("/getall",getAllTask)
router.put("/updateTask/:id",auth, updateStatus);
module.exports = router; 