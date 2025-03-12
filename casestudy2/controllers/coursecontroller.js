//Api for inserting course in Db

const Course = require("../models/course");

exports.addCourse  = async (req,res)=>{
    try{
        let CourseData = req.body;
        const courseObj = new Course(CourseData);
        await courseObj.save();
        res.status(200).json(CourseData)
    }
    catch(err){
        console.log(res.status(400).json({'msg': `error in api: ${err.message}`}));
    }

}

exports.getAllCourse  = async(req,res)=>{
    try
    {
       let courses = await Course.find();
       res.status(200).json(courses);
    }
    catch(err)
    {
        res.status(400).json({'msg': `error in api: ${err.message}`});
    }
}

exports.deleteCourse  = async(req,res)=>{
    try
    {
        const id = req.params.id;
        const course = await Course.findOne({'_id': id});
        if(!course)
            res.status(400).json({'msg': `Invalid ID ${id}`});
        else
            await Course.deleteOne({'_id': id});
            res.status(200).json({'msg': `Record ID ${id} deleted successfully`});
    }
    catch(err)
    {
        res.status(400).json({'msg': `api error ${err}`});
    }
}


exports.deleteCoursev2 = async (req, res) => {
    try 
    {
        const id = req.params.id;
        const course = await Course.findOneAndDelete({'_id':id});
        if(course == null)
            res.status(400).json({'msg': `Invalid Id ${id}`});
        else
            res.status(200).json({'msg': `Record ID ${id} successfully deleted`});
    }
    catch(err)
    {
        res.status(400).json({'msg': `error in api ${err}`});
    }
}

exports.getcourseById  = async(req,res)=>{
    try
    {
        let id = req.params.id;
        let courseObj =await Course.find({'_id': id});
        res.status(200).json(courseObj);
    }
    catch(err)
    {
        console.log(res.status(400).json({'msg': `error in api ${err}`}));
    }
}

exports.updateCourse = async(req,res)=>{
    try
    {
        const id = req.params.id;
        const newCourse = req.body;
        const updatedCourse = await Course.findByIdAndUpdate(id, newCourse);
        if(!updatedCourse)
            res.status(400).json({'msg':`Invlid ID ${id}`});
        else
            res.status(200).json({'msg':`Record ID ${id} successfully updated`});
    }
    catch(err)
    {
        res.status(400).json({'msg':`error in api ${err}`});
    }
}