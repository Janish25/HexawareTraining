const Admin = require("../models/admin");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

exports.addAdmin= async (req,res)=>{ //sign up
    const {username,password} = req.body; 
     
    //convert pain text password in to hash password 
    let salt = 10; 
    const hashedPassword = await bcrypt.hash(password,salt);
    
    let admin = new Admin({'username': username,'password': hashedPassword});
    admin = await admin.save(); 
    return res.json(admin)
}

exports.login = async (req,res)=>{
    const {username,password} = req.body;
 
    let admin = await Admin.findOne({'username' : username}); 

    if(!admin) //if admin if undefined
        return res.status(400).json({'msg':'Invalid Credentials!!!!'})
    
  
    const isValid = await bcrypt.compare(password, admin.password);
    if(!isValid)
        return res.status(400).json({'msg':'Invalid Credentials!!!!'})

  
   const SECRET_KEY = '15111983200722';
   let adminObj = {
    'id' : admin._id,
 
   }
   const token = jwt.sign(adminObj, SECRET_KEY , {'expiresIn' :'20h'}); 
   
    return res.json({'token' : token})
}