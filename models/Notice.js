const mongoose=require('mongoose');
const NoticeSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    pdf:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("Notice",NoticeSchema);