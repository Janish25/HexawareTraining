const mongoose=require('mongoose');
 const employeeSchema= mongoose.Schema({
    fname:{type:String,required:true },
    lname:{type:String,required:true},
    city:{type:String},
    salary:{type:Number,default:0}

 })

 const Employee=mongoose.model("Employee",employeeSchema)
 module.exports=Employee