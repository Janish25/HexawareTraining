const Project = require("../model/project");
const Task = require("../model/task");

exports.addTask=async (req,res)=>{
    const pid = req.params.pid; 
    let {title, shortDescription, estimatedEndDate} = req.body; 

  
    let project = await Project.findById(pid); 
    if(!project)
        return res.status(400).json({'msg' : 'Invalid project Id given..'})

    let task = new Task({title, shortDescription, estimatedEndDate, 
        'project':project._id });
    task = await task.save();
    return res.json(task);
}

exports.getAllTask =async (req,res)=>{
    let tasks = await Task.find().populate('project','title clientName -_id');
    res.json(tasks)
}


exports.updateStatus = async(req, res) => {
    try
    {
        const {id} = req.params;
        const task = await Task.updateOne(
            {'_id': id},
            {$set: { 'status': 'archive' }}
        );
        return res.status(200).json(task);
    }
    catch(err)
    {
        res.status(400).json("error");
    }
}