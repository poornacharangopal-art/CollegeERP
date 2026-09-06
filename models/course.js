const mongoose = require("mongoose");
const CourseSchema=new mongoose.Schema({
    coursename:{
        type:String,
        required:true
    },
    department:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Department',
        required:true
    },
    semster:{
        type:String,
        required:true
    },
    faculty:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Faculty',
        required:true
    }
});
module.exports=mongoose.model("Course",CourseSchema);