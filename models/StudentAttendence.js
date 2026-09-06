const mongoose=require("mongoose");
const StudentAttendenceSchema=new mongoose.Schema({
    rollNumber:{
        type:String,
        required:true
    },
    semester:{
        type:String,
        required:true
    },
    month:{
        type:String,
        required:true
    },
    workingDays:{
        type:String,
        required:true
    },
    Holidays:{
        type:String,
        required:true
    },
    PresentDays:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('StudentAttendence',StudentAttendenceSchema);