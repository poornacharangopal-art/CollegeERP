//stores commonlogin information for all users
const mongoose = require('mongoose');
const UserSchema=new mongoose.Schema({
    name:{
        type:string,
        required:true
    },
    email:{
        type:string,
        required:true
    },
    password:{
        type:string,
        required:true
    },
    role:{
        type:string,
        enum:['student','faculty','admin'],
        required:true
    }
});
module.exports=mongoose.model('User',UserSchema);