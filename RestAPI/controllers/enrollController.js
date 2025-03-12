const Course = require("../models/course");
const Enrollment = require("../models/enrollment");
const Student = require("../models/student");

exports.enrollStudentInCourse = async (req,res)=>{
    //console.log('enroll api called....');
    const {sid,cid} = req.body;
    //console.log(`student id: ${sid} and course id: ${cid}`)

    //step 1: validate sid and cid 
    let student = await Student.findById(sid); 

    if(!student){ //if student is not found/defined 
       return res.status(400).json({'msg': 'student id invalid!!'});
    }

    let course = await Course.findById(cid);

    if(!course){
        return res.status(400).json({'msg': 'course id invalid!!'});
    }

    //step 2 : create enroll obj and save it in db
    let enrollObj = {
        student: sid,
        course: cid
    }
    let enroll = new Enrollment(enrollObj); 
    enroll = await enroll.save();

    res.status(200).json(enroll); 
}