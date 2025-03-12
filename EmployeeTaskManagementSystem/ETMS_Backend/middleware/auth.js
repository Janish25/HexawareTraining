const jwt = require('jsonwebtoken');

const auth = (req, res, callback) => {
    try {
       

        let token = req.header('Authorization');
       
        if (!token)
            return res.status(400).json({ 'msg': 'No token given!!!' })

        let actualToken = token.split(" ")[1];

        const SECRET_KEY = '15111983200722';

        let obj = jwt.verify(actualToken, SECRET_KEY);
       

        req.user = obj;  
        callback();
    }
    catch (err) {
        res.status(400).json({ 'err': err })
    }

}

module.exports = auth;