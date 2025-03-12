const jwt = require('jsonwebtoken');
const User = require('../model/user');

const auth = async(req, res, callback) => {
    try
    {
        const token = req.header('Authorization');

        if(!token)
            return res.status(400).json({'msg': `No token given`})

        const actualToken = token.split(" ")[1];
        const SECRET_KEY = '06062004';
        
        const adminObj = jwt.verify(actualToken, SECRET_KEY);
        req.user = adminObj;
        callback();
    }
    catch(err)
    {
        res.status(400).json({'msg': `Error in api ${err}`});
    }
}

module.exports = auth;