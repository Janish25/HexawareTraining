const express = require('express');
const { addStudent, getAllStudent, getStudentById, deleteStudentById, updateStudent } 
= require('../controllers/studentcontroller');

const router = express.Router();

router.post("/add", addStudent);
router.get("/get", getAllStudent);
router.get("/get/:id", getStudentById);
router.delete("/delete/:id", deleteStudentById);
router.put("/update/:id", updateStudent);

module.exports = router;