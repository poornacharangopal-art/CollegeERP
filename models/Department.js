//stores department information
const mongoose=require('mongoose');
const DepartmentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    Hod:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model
("Department",DepartmentSchema);