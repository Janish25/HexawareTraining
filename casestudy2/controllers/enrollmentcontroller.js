const Course = require("../models/course");
const Enrollment = require("../models/enrollment");
const Student = require("../models/student");

exports.addEnrollment =async (req, res) => {
    try
    {
        const {sid, cid} = req.body;

        const student = await Student.findById(sid);
        if(!student)
            return res.status(400).json({'msg': `Invalid ID ${sid}`});
    
        const course = await Course.findById(cid);
        if(!course)
            return res.status(400).json({'msg': `Invalid ID ${cid}`});
    
        const enroll = {
            student: sid,
            course: cid
        }
    
        let enrollObj = new Enrollment(enroll);
        enrollObj = await enrollObj.save();
        res.status(200).json(enrollObj);
    }
    catch(err)
    {
        res.status(400).json({'msg': `error in api ${err}`});
    }
    
}

exports.fetchAllEnrollments = async (req, res) => {
    try
    {
        const enroll = await Enrollment.find().populate("student").populate("course");
        res.status(200).json(enroll);
    }
    catch(err)
    {
        res.status(400).json({'msg': `Error in api {err}`});
    }
}

exports.fetchStudentByCourseId = async(req, res) => {
    try
    {
        const courseId = req.params.courseId;

        let course =await Course.findById(courseId);
        if(!course)
            return res.status(400).json({'msg':`Invalid Course ID`});
    
        let students = await Enrollment.find({'course': courseId}).populate("student", "_id name email")
        let studentObj = students.map(e => e.student);
        res.status(200).json(studentObj);
    }
    catch(err)
    {
        res.status(400).json({'msg': `Error in api {err}`});
    }
    
}

exports.fetchCourseByStudentId = async(req, res) => {
    try
    {
        const studentId = req.params.studentId;

        const studentObj = await Student.findById(studentId);
        if(!studentObj)
            return res.status(400).json({'msg':`Invalid Student ID`});

        const courses = await Enrollment.find({'student': studentId}).populate("course", "title credits fee");
        let courseObj = courses.map(e => e.course);
        res.status(200).json(courseObj);
    }
    catch(err)
    {
        res.status(400).json({'msg': `Error in api ${err}`});
    }
}


exports.unenrollStudentFromCourse = async(req, res) => {
    try
    {
        const studentId = req.params.studentId;
        const courseId = req.params.courseId;

        const studentChk = await Student.findById(studentId);
        if(!studentChk)
            return res.status(400).json({'msg':'Student Id Invalid'});

        const courseChk = await Course.findById(courseId);
        if(!courseChk)
            return res.status(400).json({'msg':'Course Id Invalid'});

        const enrollChk = await Enrollment.findOne({'student': studentId, 'course': courseId});
        if(!enrollChk)
            return res.status(400).json({'msg':'Student not Enroll in Course'});

        await Enrollment.deleteOne({'student': studentId, 'course': courseId});
        res.status(200).json({'msg':'Student unenrolled from course'});

    }
    catch(err)
    {
        res.status(400).json({'msg':`error in api ${err}`});
    }
}

exports.fetchEnrollByDateRange = async(req, res) => { 
    try
    {
        const {fromDate, toDate} = req.query;

        
        const fDate = new Date(fromDate);
        const tDate = new Date(toDate);
        // console.log(fDate);
        // console.log(tDate);

        if(isNaN(fDate))
            return res.status(400).json({'msg': `Invalid From Date`});
        if(isNaN(tDate))
            return res.status(400).json({'msg': `Invalid To Date`});

        const enroll = await Enrollment.find({'date_of_enroll': {$gt: fDate, $lt: tDate}}).populate("student").populate("course");
        if(enroll.length == 0)
            return res.status(400).json({'msg': `No Data Available`});

        res.status(200).json(enroll);

    }
    catch(err)
    {
        res.status(400).json({'msg':`error in api ${err}`});
    }
    

}