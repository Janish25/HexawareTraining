const express = require('express');
const { addInstructor, fetchAllInstructor, fetchInstructorByCourse, fetchCourseByInstructor } = require('../controllers/instructorcontroller');

const router = express.Router();

router.post("/add", addInstructor);
router.get("/getAll", fetchAllInstructor);

module.exports = router;