const mongoose=require("mongoose");
const FacultyAttendenceSchema=new mongoose.Schema({
    EmployeeId:{
        type:String,
        requires:true
    },
    year:{
        type:String,
        requires:true
    },
    month:{
        type:String,
        requires:true
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
model.exports=mongoose.model('FacultyAttendence',FacultyAttendenceSchema);