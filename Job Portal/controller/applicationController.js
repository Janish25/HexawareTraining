const Admin = require("../model/admin");
const Application = require("../model/application");
const Job = require("../model/job");
const User = require("../model/user");

exports.applyJob = async(req, res) => {
    try
    {
        const jid = req.params.jid;
        const uid = req.params.uid;

        const job = await Job.findById(jid);
        if(!job)
            return res.status(400).json({'msg':`Invalid Job ID`})

        const user = await User.findById(uid);
        if(!user)
            return res.status(400).json({'msg':`Invalid User ID`})

        let applicationObj = new Application({'job': jid, 'user': uid});
        applicationObj = await applicationObj.save();
        res.status(200).json(applicationObj);
    }
    catch(err)
    {
        res.status(400).json({'msg': `Error in api ${err}`});
    }
}

exports.getUserByJobId = async(req, res) => {
    try
    {
        const user = req.user;
        const username = user.username;

        const admin = await Admin.findOne({'username': username})
        if(!admin)
            res.status(401).json({'msg':`Unauthorized User`})
        
        const jid = req.params.jid;

        const job = await Job.findById(jid);
        if(!job)
            return res.status(400).json({'msg': 'Invalid Job ID'})
        
        const users = await Application.find({'job': jid}).populate("user", "name city username -_id");
        res.status(200).json(users);
    }
    catch(err)
    {
        res.status(400).json({'msg': `Error in api ${err}`});
    }
}

exports.getJobByUserId = async(req, res) => {
    try
    {
        const user = req.user;
        const username = user.username;

        const admin = await Admin.findOne({'username': username})
        if(!admin)
            res.status(401).json({'msg':`Unauthorized User`})

        const uid = req.params.uid;
        const userObj = await User.findById(uid);
        if(!userObj)
            return res.status(400).json({'msg':'Invalid User Id'});

        const jobs = await Application.find({'user': uid}).populate("job", "title salary techStack -_id")
        res.status(200).json(jobs);

    }
    catch(err)
    {
        res.status(400).json({'msg': `Error in api ${err}`});
    }
}