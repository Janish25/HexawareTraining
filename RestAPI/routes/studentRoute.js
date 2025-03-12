const express = require('express')
const router = express.Router();
const { addStudent, getAllStudent, deleteStudentById, updateStudent, getStudentById, } 
= require('../controllers/studentcontroller');

router.post("/add", addStudent)
router.get("/getall",getAllStudent)
router.delete('/delete/:id',deleteStudentById)
router.put('/update/:id', updateStudent)
router.get('/get/:id', getStudentById) 

module.exports = router;  