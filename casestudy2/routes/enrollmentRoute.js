const express = require('express');
const { addEnrollment, fetchAllEnrollments, fetchStudentByCourseId, fetchCourseByStudentId, unenrollStudentFromCourse, fetchEnrollByDateRange } = require('../controllers/enrollmentcontroller');

const router = express.Router();

router.post("/add", addEnrollment);
router.get("/getAll", fetchAllEnrollments);
router.get("/getStudent/:courseId", fetchStudentByCourseId);
router.get("/getCourse/:studentId", fetchCourseByStudentId);
router.delete("/unenroll/:studentId/:courseId", unenrollStudentFromCourse);
router.get("/getByDate", fetchEnrollByDateRange);

module.exports = router;