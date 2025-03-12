const Assign = require("../model/assign");
const Employee = require("../model/employee");
const Task = require("../model/task");

exports.assignTaskToEmployee = async(req, res) => {
    try
    {
        const {eid, tid} = req.body;
        
        const employee = await Employee.findById(eid);
        if(!employee)
            return res.status(400).json({'msg': 'Invalid Employee ID'})

        const task = await Task.findById(tid);
        if(!task)
            return res.status(400).json()

        let assign = new Assign({'employee': eid,'task': tid});
        assign = await assign.save();
        return res.status(200).json(assign);
    }
    catch(err)
    {
        res.status(400).json();
    }
}


exports.getTaskByEmployeeId = async(req, res) => {
    try
    {
        const eid = req.params.eid;

        const tasks = await Assign.find({ employee: eid })
        .populate({
            path: "task",
            populate: "project"
        });
        const taskList = tasks.map(task => task.task);
        res.status(200).json(taskList);
    }
    catch(err)
    {
        res.status(400).json();
    }
}

exports.getTaskByEmployee = async(req, res) => {
    try {
        const username = req.user.username;
        const employee = await Employee.findOne({ username });
    
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } 
    catch (err) {
        res.status(400).json(err);
    }
}