const Admin = require("../model/admin");
const Employee = require("../model/employee");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.getUserInfo = async (req,res)=>{
    try {
        obj = req.user
        let username = obj.username

        let admin = await Admin.findOne({ 'username': username });
        if (admin)
            return res.json(admin)

        let employee = await Employee.findOne({ 'username': username })
        if (employee)
            return res.json(employee)

        res.status(400).json({ 'msg': 'login denied!!' })
    }
    catch(err){
        return res.status(400).json(err)
    }

}
exports.login = async (req,res)=>{
    let {username,password} = req.body; 

 
    let admin = await Admin.findOne({'username': username});

    if (admin) {
       
        let isValid = await bcrypt.compare(password, admin.password);
        if (!isValid)
            return res.status(400).json({ 'msg': 'Invalid Credentials!!!!' })

        const SECRET_KEY = '15111983200722';
        let adminObj = {
            'username': admin.username,
        }
        const token = jwt.sign(adminObj, SECRET_KEY, { 'expiresIn': '20h' });
        return res.json(
            {
                'token': token,
                'role': admin.role
            })
    }

    let employee = await Employee.findOne({'username': username})

    if (employee) {
       
        let isValid = await bcrypt.compare(password, employee.password);
        if (isValid === undefined)
            return res.status(400).json({ 'msg': 'Invalid Credentials!!!!' })

       
        const SECRET_KEY = '15111983200722';
        let employeeObj = {
            'username': employee.username,
        }
        const token = jwt.sign(employeeObj, SECRET_KEY, { 'expiresIn': '1h' });
        return res.json({ 'token': token, 'role': employee.role })
    }

    return res.status(400).json({'msg':'Invalid Credentials!!!!'})
}
