const dbconnect=require('./dbcongig');
const mongoose= require('mongoose');
const Employee = require('./employee');

async function addEmployee()
{ try{
   await dbconnect();
   let emp1={
      fname:'harry',
      lname:'potter',
      city:'london',
      salary:90383

   }
   const empobj=new Employee(emp1);
   await empobj.save();
   console.log('Employee Saved')
}
catch(err)
{
    console.log(err)
}
finally{
    mongoose.connection.close();
    console.log("Db Connection Closed")
}
}

addEmployee();