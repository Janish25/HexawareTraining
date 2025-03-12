const Course = require("../models/course");
const Instructor = require("../models/instructor");
const Teacher = require("../models/teacher");

exports.assignCourseToInstructor = async(req, res) => {
    try
    {
        const {cid, iid} = req.body;
        let teacherObj = {
            course: cid,
            instructor: iid
        }

        const teach = new Teacher(teacherObj);
        await teach.save();
        res.status(200).json(teacherObj);
    }
    catch(err)
    {
        res.status(400).json({'msg': `error in api ${err}`});
    } 
}

exports.unassignCourseToInstructor = async(req, res) => {
    try
    {
        const instructorId = req.params.instructorId;
        const courseId = req.params.courseId;

        const instructorChk = await Instructor.findById(instructorId);
        if(!instructorChk)
            return res.status(400).json({'msg': `Invalid Instructor ID`})

        const courseChk = await Course.findById(courseId);
        if(!courseChk)
            return res.status(400).json({'msg': `Invalid Course ID`})

        const teachChk = await Teacher.find({'course': courseId, 'instructor': instructorId});
        if(!teachChk)
            return res.status(400).json({'msg': `Teacher is not assigned to course`});

        await Teacher.deleteOne({'course': courseId, 'instructor': instructorId})
        res.status(200).json({'msg': `Teacher Record Successfully deleted`})

    }
    catch(err)
    {
        res.status(400).json({'msg': `error in api ${err}`});
    }
}

exports.fetchInstructorByCourse = async(req, res) => {
    try
    {
        const courseId = req.params.courseId;

        const courseChk = await Course.findById(courseId);
        if(!courseChk)
            return res.status(400).json({'msg': `Invalid Course ID`})

        let instructors = await Teacher.find({'course': courseId}).populate("instructor", "name age email");
        let instruct = instructors.map(i => i.instructor);
        res.status(200).json(instruct);
    }
    catch(err)
    {
        res.status(400).json({'msg': `error in api ${err}`});
    }
}

exports.fetchCourseByInstructor = async(req, res) => {
    try
    {
        const instructorId = req.params.instructorId;

        const instructorChk = await Instructor.findById(instructorId);
        if(!instructorChk)
            return res.status(400).json({'msg': `Invalid Instructor ID`})

        let courses = await Teacher.find({'instructor': instructorId}).populate("course", "title credits fee");
        let courseDis = courses.map(c => c.course);
        res.status(200).json(courseDis);
    }
    catch(err)
    {
        res.status(400).json({'msg': `error in api ${err}`});
    }
}