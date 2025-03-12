const { default: mongoose } = require("mongoose");
const dbconnect = require("./dbcongig")
const Employee = require("./employee")

const fetchById= async (empId)=>{
    try{

        await dbconnect();
        const emp = await Employee.find({'_id':empId});
        if(!emp){
            console.log("No data Found")
        }
        console.log(emp)
    }
    catch(err){
        console.log(err)
    }
 
 

}

const fetchByName =async(name)=>{
    try{

        await dbconnect();
        let fname=name.split(' ')[0];
        let lname=name.split(' ')[1];
        const emp= await Employee.find({'fname':fname,'lname':lname})
        console.log(emp)
    }
    catch(err){
        console.log(err)
    }
    finally{
        mongoose.connection.close();
    }

}

// fetchById("67b582c9562ff470581ef979")
fetchByName('harry potter')