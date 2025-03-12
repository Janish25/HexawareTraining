const Job = require("../model/job");

exports.postJob = async(req, res) => {
    try
    {
        const {title, shortDescription, salary, experienceNeeded, techStack} = req.body;

        let jobObj = new Job({title, shortDescription, salary, experienceNeeded, techStack});
        jobObj = await jobObj.save();
        res.status(200).json(jobObj);
    }
    catch(err)
    {
        res.status(400).json({'msg': `Error in api ${err}`});
    }
}

exports.getAllJob = async(req, res) => {
    try
    {
        const jobs = await Job.find();
        if(!jobs)
            return res.status(400).json({'msg': `No records Available`});

        res.status(200).json(jobs);
    }
    catch(err)
    {
        res.status(400).json({'msg': `Error in api ${err}`});
    }
}