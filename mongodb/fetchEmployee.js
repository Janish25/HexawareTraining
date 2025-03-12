
const mongoose =require('mongoose');
const Employee=require('./employee');
const dbconnect = require('./dbcongig');

const fetchEmployee = async ()=>{
    try{
        await dbconnect();
        const empArray=await Employee.find();
        empArray.forEach(e=>console.log(e))

    }
   catch
   {
    console.log(err)
   }
   finally{
       mongoose.connection.close();
       console.log("Db Connection Closed")
   }

}

fetchEmployee();