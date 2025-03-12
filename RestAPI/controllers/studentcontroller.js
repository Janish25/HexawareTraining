const Student = require("../models/student");

exports.addStudent = async (req, res) => {
    try {
        //console.log('add student api called.....')
        let studentObj = req.body;
        let student = new Student(studentObj);
        student = await student.save();
        res.status(200).json(student);
    }
    catch (err) {
        res.status(400).json({ 'msg': `error in api: ${err.message}` });
    }
}

exports.getAllStudent=((req,res)=>{})
exports.getStudentById=((req,res)=>{})
exports.deleteStudentById=((req,res)=>{})
exports.updateStudent=((req,res)=>{})    