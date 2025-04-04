const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {type: String, required: true},
    shortDescription: {type: String, required: true},
    salary: {type: Number},
    experienceNeeded: {type: Number},
    techStack: {type: String, required: true}
})

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;