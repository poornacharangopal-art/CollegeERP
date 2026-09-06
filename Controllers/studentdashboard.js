const Student =require("../models/Student");
const Marks=require("../models/Marks");
const StudentAttendence=("../models/StudentAttendence");
exports.displayStudentlogin=(req,res)=>{
    res.render("studentlogin");
}
exports.studentlogin=async(req,res)=>{
    const{email,password}=req.body;
    try{
    const student=await Student.findOne({
        email:email
    });
    if(!student){
        return res.send("No student with this email");
    }
    else{
        if(password==student.password){
            req.session.email=email;
            return res.render("studentdashboard",{student});
        }
        else{
           return  res.send("incorrect password");
        }
    }
}catch(err){
    console.error(err);

        return res.status(500).send("Server error");
}
}
exports.DiaplayMarksform=async(req,res)=>{
    const email=req.session.email;
    const student=await Student.findOne({
        email:email
    });
    return res.render("marksform",{
        student
    });
}
exports.DisplayMarks=async(req,res)=>{
    const{roll,semester}=req.body;
    const marks=await Marks.findOne({
        RollNumber:roll,
        semester:semester
    });
    const student=await Student.findOne({
        email:req.session.email
    })
    return res.render("display",{
        marks,
        student
    });
}
exports.attendenceform=async(req,res)=>{
    const email=req.session.email;
    const student=await Student.findOne({
        email:email
    });
    return res.render("attendeneceform",{
        student
    });
}
exports.Displayattendence=async(req,res)=>{
    const{rollNumber,semester,month}=req.body;
    const attendence=await StudentAttendence.findOne({
        rollNumber:rollNumber,
        semester:semester,
        month:month
    });
    if(!attendence){
        return res.send("attendence of the particular month not uploaded at");
    }
    return res.render("displayattendence",{
        attendence
    });
}
exports.profile=async(req,res)=>{
    const student=await Student.findOne({
        email:req.session.email
    });
    return res.render("profile",{student});
}
exports.logout = (req, res) => {

    req.session.destroy((err) => {

        if (err) {

            console.error(err);

            return res.status(500).send("Unable to logout");

        }

        res.clearCookie("connect.sid");

        return res.redirect("/student/login");

    });

};
