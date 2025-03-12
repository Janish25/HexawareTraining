const jwt = require('jsonwebtoken');
const Admin = require('../model/admin');
const bcrypt = require('bcryptjs')

exports.addAdmin= async (req,res)=>{
    let {username,password} = req.body; 

  
    let salt = 10; 
    const hashedPassword = await bcrypt.hash(password,salt);

    let admin = new Admin({username, 'password': hashedPassword});
    admin = await admin.save();
    res.json(admin)
}

exports.login =async (req,res)=>{
    let {username,password} = req.body; 

    let admin = await Admin.findOne({'username': username}); 

    if(!admin)
        return res.status(400).json({'msg': 'Invalid Credentials!!'})

    let isValid = await bcrypt.compare(password, admin.password);
    if(!isValid)
        return res.status(400).json({'msg':'Invalid Credentials!!!!'})

    
    const SECRET_KEY = '15111983200722';
    let adminObj = {
        'username' : admin.username,
       }
    const token = jwt.sign(adminObj, SECRET_KEY , {'expiresIn' :'20h'});
       res.json({'token' : token})
}