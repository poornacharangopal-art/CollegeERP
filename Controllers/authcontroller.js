const User=require("../models/User");
const Student=require("../models/Student");
const Faculty=require("../models/Faculty");
exports.showregisterForm=(req,res)=>{
    res.render("register");
}
exports.register=async(req,res)=>{
    try{
        let user;
        const{name,email,password,role}=req.body;
        if(role==="student"){
            const isstudent=await Student.findOne({email});
            if(!isstudent){
                return res.status(400).send("Student not found");
            }
             const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).send("User already exists");
        }
         user=new User({
            name:isstudent.name,
            email:isstudent.email,
            password,
            role
        });
        }
        else if(role==="faculty"){
            const isfaculty=await Faculty.findOne({email});
            if(!isfaculty){
                return res.status(400).send("Faculty not found");
            }
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).send("User already exists");
        }
        user=new User({
            name:isfaculty.name,
            email:isfaculty.email,
            password,
            role
        });
    }
        await user.save();
        res.redirect("/login");
    }catch(err){
        console.error(err);
    }
}
exports.showlogin=(req,res)=>{
    res.render("login");
}
exports.login=async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user){
        return res.status(400).send("User not found");
    }
    if(user.password!=password){
        return res.status(400).send("Invalid password");
    }
    req.session.user={
        _id:user._id,
        name:user.name,
        email:user.email,
        role:user.role
    }
    if(user.role==="student"){
        const student=await Student.findOne({email});
        if(!student){
            return res.status(400).send("Student not found");
        }
        res.redirect("/studentdashboard");
    }else if(user.role==="faculty"){
        const faculty=await Faculty.findOne({email});
        if(!faculty){
            return res.status(400).send("Faculty not found");
        }   
        res.redirect("/facultydashboard");
    }
}