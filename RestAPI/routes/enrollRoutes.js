
const express = require('express');
const { enrollStudentInCourse, fetchAllEnrollments, getStudentsByCourseId, 
    unenrollStudentFromCourse, 
    getEnrollmentbyDateRange} = require('../controllers/enrollcontroller');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/add',auth,enrollStudentInCourse)
router.get('/all',auth,fetchAllEnrollments)
router.get('/students/:courseId',getStudentsByCourseId)
router.delete('/unenroll/:studentId/:courseId',unenrollStudentFromCourse)
router.get('/date',auth, getEnrollmentbyDateRange)
module.exports=router; 