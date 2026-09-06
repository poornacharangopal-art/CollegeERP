//stores faculty details
const mongoose=require('mongoose');
const FacultySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    EmployeeId:{
        type:String,
        require:true
    },
    department:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    courses:[{
        type:String,
        required:true
    }]
});
module.exports=mongoose.model('Faculty',FacultySchema);