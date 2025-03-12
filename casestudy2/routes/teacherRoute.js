const express = require('express');
const { assignCourseToInstructor, unassignCourseToInstructor, fetchInstructorByCourse, fetchCourseByInstructor } = require('../controllers/teachercontroller');

const router = express.Router();

router.get("/getInstructor/:courseId", fetchInstructorByCourse);
router.get("/getCourse/:instructorId", fetchCourseByInstructor);
router.post("/add", assignCourseToInstructor);
router.delete("/delete/:instructorId/:courseId", unassignCourseToInstructor);

module.exports = router;