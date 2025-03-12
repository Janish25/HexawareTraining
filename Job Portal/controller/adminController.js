const Admin = require("../model/admin");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator');

exports.addAdmin = async(req, res) => {
    try
    {
        const errors = validationResult(req);
        if(!errors.isEmpty())
            return res.status(400).json({err: errors.array()});

        let {username, password} = req.body;

        let admin = await Admin.find({'username': username})
        if(admin.length != 0)
            return res.status(400).json({'msg':`Username ${username} already exist`});

        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt);

        let adminObj = new Admin({username, 'password': hashedPassword});
        adminObj = await adminObj.save();
        res.status(200).json(adminObj);
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

        let admin = await Admin.findOne({'username': username})
        if(!admin)
            return res.status(400).json({'msg':`Invalid Credentials..!!`});

        let isValid = await bcrypt.compare(password, admin.password);
        if(!isValid)
            return res.status(400).json({'msg':`Invalid Credentials..!!`});

        const SECRET_KEY = '06062004';
        const adminObj = {
            'username': admin.username
        }

        const token = jwt.sign(adminObj, SECRET_KEY, {'expiresIn': '4h'});
        res.status(200).json({'token': token});
    }
    catch(err)
    {
        res.status(400).json({'msg': `Error in api ${err}`});
    }
}