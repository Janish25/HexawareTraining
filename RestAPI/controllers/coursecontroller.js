const Course = require("../models/course");

/*
AIM: is to insert course in DB
BODY:{
        "title": "Node.js Rest API",
        "credits": 100,
        "shortDesc": "Create rest apis using node.js express server, mongo db",
        "fee": 7500
} 
*/
exports.addCourse = async (req,res)=>{   //req is to rad the values , res is to give the output json
    try{
        let courseData = req.body; 
        const courseObj = new Course(courseData); //obj created 
        courseData = await courseObj.save();
        res.status(200).json(courseData); 
    } 
    catch(err){
        res.status(400).json({'msg' : `error in api: ${err.message}`}); 
    }
}

exports.getAllCourses = async (req,res)=>{
   try{
        const courses = await Course.find();
        res.status(200).json(courses);
   }
   catch(err){
        res.status(400).json({'msg' : `error in api: ${err.message}`}); 
}    
}

exports.deleteCourse = async (req,res)=>{
   try{
        //take the id of the record u wish to delete
        let id = req.params.id; 
        //ensure that record exists before u delete... 
        const course = await Course.findOne({'_id':id}); 
        if(!course){ //if course not initialized - undefined
            res.status(400).json({'msg' : `Invalid ID: ${id}`}); 
        }
        else{
            await Course.deleteOne({'_id': id}); 
            res.status(200).json({'msg': 'course record deleted!!'});
        }
    }
    catch(err){
        res.status(400).json({'msg' : `error in api: ${err.message}`});
    }
}

exports.deleteCoursev2 =async (req,res)=>{
    try{
        //take the id of the record u wish to delete
        let id = req.params.id; 
        const resp = await Course.findOneAndDelete({'_id':id}); 
        console.log(resp)
        if(resp == null)
            res.status(400).json({'msg' : `Invalid ID: ${id}`});
        else
            res.status(200).json({'msg': 'course record deleted!!'});
    }
    catch(err){
        res.status(400).json({'msg' : `error in api: ${err.message}`});
    }    
}

exports.getCourseById = async(req,res)=>{
    try{
        let id = req.params.id; 
        let courseObj = await Course.findOne({'_id': id})
        res.status(200).json(courseObj);
    }
    catch(err){ 
        res.status(400).json({'msg' : `error in api: ${err.message}`}); 
    }
}

exports.updateCourse = async (req,res)=>{
    try{
        let id = req.params.id; 
        let newCourseObj = req.body; 
        let updatedCourse =  await Course.findByIdAndUpdate(id,newCourseObj); //{new: true}
        if(!updatedCourse){
            res.status(400).json({'msg' : `Invalid ID: ${id}`});
        }
        else{
            res.status(200).json({'msg': 'course record updated!!'});
        }
    }
    catch(err){ 
        res.status(400).json({'msg' : `error in api: ${err.message}`}); 
    }
}
 