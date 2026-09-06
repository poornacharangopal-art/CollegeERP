const mongoose=require("mongoose");
const CoursesSchema=mongoose.Schema({
    Semester:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    Courses:[
        {
            type:String,
            Faculty:String
        }
    ]
});
module.exports=mongoose.model("Courses",CoursesSchema)
