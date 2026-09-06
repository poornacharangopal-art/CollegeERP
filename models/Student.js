//stores student detaials
const mongoose=require('mongoose');
const StudentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    rollNumber:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true
    },
     Admissionyear:{
        type:Number,
        required:true
    },
    semester:{
        type:Number,
        required:true
    }
});
module.exports=mongoose.model('Student',StudentSchema);