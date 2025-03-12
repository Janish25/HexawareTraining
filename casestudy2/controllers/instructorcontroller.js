const Instructor = require("../models/instructor");

exports.addInstructor = async(req, res) => {
    try
    {
        const inst = req.body;

        let instObj = new Instructor(inst);
        await instObj.save();
        res.status(200).json(inst);
    }
    catch(err)
    {
        res.status(400).json({'msg': `error in api ${err}`});
    }  
}

exports.fetchAllInstructor = async(req, res) => {
    try
    {
        const instructors = await Instructor.find();
        res.status(200).json(instructors);
    }
    catch(err)
    {
        res.status(400).json({'msg': `error in api ${err}`});
    }
}