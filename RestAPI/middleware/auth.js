const jwt = require('jsonwebtoken');

const auth = (req,res,callback)=>{

    try{
        let token = req.header('Authorization');
    

    if(!token)
        return res.status(400).json({'msg' : 'No token given!!!'})

    let actualToken = token.split(' ')[1]; 
  
    const decodedToken = jwt.verify(actualToken, SECRET_KEY);
    let userObj = decodedToken; 

    req.user = userObj; 
    callback(); 
    }
    catch(err){
        res.status(400).json({'err' : err})
    }
    
}

module.exports = auth; 