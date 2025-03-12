const mongoose = require('mongoose')

const enrollmentSchema = new mongoose.Schema({
    student:{ type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true},
    course:{type: mongoose.Schema.Types.ObjectId, ref:"Course", required: true },
    date_of_enroll: {type: Date , default: Date.now}
}); 

const Enrollment= mongoose.model("Enrollment", enrollmentSchema); 
module.exports = Enrollment;
