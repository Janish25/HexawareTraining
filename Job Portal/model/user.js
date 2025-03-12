const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    city: {type: String},
    username: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, default: 'ROLE_USER'},
    profilePic: {type: String},
    cv: {type: String}
})

const User = mongoose.model("User", userSchema);
module.exports = User;