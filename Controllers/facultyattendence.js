 const Faculty=require("../models/Faculty");
 const FacultyAttendence=require("../models/FacultyAttendence");
 exports.attendancePage = async (req, res) => {
 
     if (!req.session.user) {
         return res.redirect("/login");
     }
 
     const email = req.session.user.email;
 
     const faculty = await  Faculty.findOne({ email });
 
     if (!faculty) {
         return res.status(404).send("Student not found");
     }
 
     res.render("facultyattendance", { faculty });
 };
 exports.displayattendence=async (req,res)=>{
    if(!req,session.user.email){
         return res.redirect("/login");
    }
    const{year,month}=req.body;
    const email=req.session.user.email;
    const faculty=await Faculty.findOne({email});
    const attendence=await FacultyAttendence.findOne({
        EmployeeId:faculty.EmployeeId,
        year,
        month
    });
    if (!attendance) {
        return res.send("Attendance record not found");
    }
    res.render("factultyattendenceresult",{faculty});
 }