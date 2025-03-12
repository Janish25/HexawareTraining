const Admin = require("../model/admin");
const Project = require("../model/project");

exports.addProject=async (req,res)=>{

    let user = req.user; 
    
    let username = user.username; 
  
    let admin = await Admin.findOne({'username': username})
    if(!admin)
        return res.status(401).json({'msg': `UnAuthorized access for user: ${username}`})

let {title,shortDescription,estimatedEndDate,clientName,techStack} = req.body;

    let project = new Project({title,shortDescription,estimatedEndDate,clientName,techStack})
    project = await project.save();
    res.json(project);
}

exports.getAllProject = async (req,res)=>{
    let {page,size} = req.query; 

    page = parseInt(page) || 1;
    size = parseInt(size) || 2
  
    let skip = (page-1) * size; 

    const projects = await Project.find().skip(skip).limit(size);
    let totalRecords = await Project.countDocuments();
    let totalPages = Math.ceil(totalRecords / size); 

    res.json({
        'currentPage' : page, 
        'totalRecords' : totalRecords,
        'data' : projects,
        'totalPage' : totalPages
    });
}
