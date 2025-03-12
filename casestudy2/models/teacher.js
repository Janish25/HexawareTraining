const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    course: {type: mongoose.Schema.Types.ObjectId, ref:"Course", required: true},
    instructor: {type: mongoose.Schema.Types.ObjectId, ref:"Instructor", required: true}
})

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;