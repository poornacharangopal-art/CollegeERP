const mongoose=require("mongoose");
const StudentMarksSchema=new mongoose.Schema({
    RollNumber:{
        type:String,
        require:true
    },
    semester:{
        type:String,
        require:true
    },
    Marks:[
        {
            subject:String,
            marks:Number
        }
    ]
})
module.exports=mongoose.model("Marks",StudentMarksSchema)