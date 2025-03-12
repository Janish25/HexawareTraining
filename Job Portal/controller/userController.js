const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const User = require("../model/user");
const jwt = require('jsonwebtoken');
const Admin = require("../model/admin");

exports.signup = async(req, res) => {
    try
    {
        const errors = validationResult(req);
        if(!errors.isEmpty())
            return res.status(400).json({err: errors.array()});

        const {name, city, username, password, profilePic, cv} = req.body;

        let user = await User.find({'username': username})
        if(user.length != 0)
            return res.status(400).json({'msg':`Username ${username} already exist`});

        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt);

        let userObj = new User({name, city, username, 'password': hashedPassword, profilePic, cv});
        userObj = await userObj.save();
        return res.status(200).json(userObj);
    }
    catch(err)
    {
        res.status(400).json({'msg': `Error in api ${err}`});
    }
}

exports.login = async(req, res) => {
    try
    {
        const errors = validationResult(req);
        if(!errors.isEmpty())
            return res.status(400).json({err: errors.array()});

        let {username, password} = req.body;

        let user = await User.findOne({'username': username});
        if(!user)
            return res.status(400).json({'msg': `Invalid Credentials..!!`})

        let isValid = await bcrypt.compare(password, user.password);
        if(!isValid)
            return res.status(400).json({'msg': `Invalid Credentials..!!`});

        const SECRET_KEY = '06062004';
        const userObj = {
            'username': user.username
        }

        const token = jwt.sign(userObj, SECRET_KEY, {'expiresIn': '4h'});
        res.status(200).json({'token': token});

    }
    catch(err)
    {
        res.status(400).json({'msg': `Error in api ${err}`});
    }
}

exports.getAllUsers = async(req, res) => {
    try
    {
        const user = req.user;
        const username = user.username;

        const admin = await Admin.findOne({'username': username})
        if(!admin)
            res.status(401).json({'msg':`Unauthorized User`})

        let {page} = req.query;
        page = parseInt(page);
        let size = 3;

        let skip = (page-1) * size;
        let totalRecords = await User.countDocuments();
        let totalPages = Math.ceil(totalRecords / size);

        let users = await User.find().skip(skip).limit(size);
        res.status(200).json({
            'currentPage': page,
            'totalRecords': totalRecords,
            'totalPage': totalPages,
            'data': users
        })
    }
    catch(err)
    {
        res.status(400).json({'msg': `Error in api ${err}`});
    }
}

exports.getUserByCity = async(req, res) => {
    try
    {
        const user = req.user;
        const username = user.username;

        const admin = await Admin.findOne({'username': username})
        if(!admin)
            res.status(401).json({'msg':`Unauthorized User`})
        
        const cityName = req.params.cName;
        const userObj = await User.find({'city':cityName})
        res.status(200).json(userObj);
    }
    catch(err)
    {
        res.status(400).json({'msg': `Error in api ${err}`});
    }
}