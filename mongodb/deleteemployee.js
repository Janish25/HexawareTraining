const mongoose= require('mongoose');
const dbconnect = require('./dbcongig');
const Employee = require('./employee');


const deleteEmployeeId=async (empId)=>{
    try{
        await dbconnect();
        const resp= await Employee.deleteOne({'_id':empId})
        if(resp.deletedCount==0){
            console.log("no data in db")
        }
        else{
        console.log(resp)
        console.log("deleted")
        }


    }
      catch(err){
            console.log(err)
        }
        finally{
            mongoose.connection.close();
        }
}

deleteEmployeeId("67b582c9562ff470581ef979");