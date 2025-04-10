const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    job: {type: mongoose.Schema.Types.ObjectId, ref:"Job", required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref:"User", required: true},
    appliedDate: {type: Date, default: Date.now()}
})

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;