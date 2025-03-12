const express = require('express');
const { addCourse, getAllCourse, deleteCourse, updateCourse, getcourseById, deleteCoursev2 } = require('../controllers/coursecontroller');

const router = express.Router();

router.post("/add",addCourse)
router.get("/getAll",getAllCourse)
router.delete("/delete/:id",deleteCourse)
router.put("/update/:id",updateCourse)
router.get("/get/:id",getcourseById)

module.exports = router;