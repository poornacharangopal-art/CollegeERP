const mongoose = require('mongoose');
const UserFeeSchema=new mongooseSchema({
    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student',
        required:true
    },
    fees:{
        type:String,
        required:true,
    }
});
module.exports=mongoose.model("Fess",UserFeeSchema);