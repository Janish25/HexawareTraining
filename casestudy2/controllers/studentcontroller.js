const Student = require('../models/student');

exports.addStudent = async(req, res) => {
    try
    {
        const student = req.body;
        const studentObj = new Student(student);
        await studentObj.save();
        res.status(200).json(student);
    }
    catch(err)
    {
        res.status(400).json({'msg': `error in api ${err}`});
    }
}

exports.getAllStudent = (req, res) => {
    
}

exports.getStudentById = (req, res) => {
    
}

exports.deleteStudentById = (req, res) => {
    
}

exports.updateStudent = (req, res) => {
    
}