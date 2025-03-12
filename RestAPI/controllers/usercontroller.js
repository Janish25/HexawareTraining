const User = require("../models/user");
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');

exports.signup = async (req,res)=>{
    const errors = validationResult(req); 
    if(!errors.isEmpty())
        return res.status(400).json({err: errors.array()});

    const {name,username,password} = req.body; 
   
    let user  =  await User.findOne({'username' : username}); 
    if(user) 
        return res.status(400).json({'msg' : 'Username already taken!!!!'}); 
 
    let salt = 10; //needed for hash algo: SHA256 
    const hashedPassword = await bcrypt.hash(password,salt); 
    let userObj ={
        'name': name,
        'username': username,
        'password': hashedPassword
    }
    user = new User(userObj); 
    user = await user.save();

    return res.json(user); 
}

exports.login = async (req,res)=>{
    const errors = validationResult(req); 
    if(!errors.isEmpty())
        return res.status(400).json({err: errors.array()});

    const {username,password} = req.body;
    
   
    let user = await User.findOne({'username' : username}); 

    if(!user) //if user if undefined
        return res.status(400).json({'msg':'Invalid Credentials!!!!'})
  
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid)
        return res.status(400).json({'msg':'Invalid Credentials!!!!'})

  
   const SECRET_KEY = '15111983200722';
   let userObj = {
    'username' : user.username,
   
   }
   const token = jwt.sign(userObj, SECRET_KEY , {'expiresIn' :'1h'}); 
   
    return res.json({'token' : token})
}