const Student=require("../models/Student");
const Faculty=require("../models/Faculty");
const Course=require("../models/course");
const Department=require("../models/Department");
const StudentAttendence=require("../models/StudentAttendence");
const FacultyAttendence=require("../models/FacultyAttendence");
const Marks=require("../models/Marks");
const Notice=require("../models/Notice");
const Result=require("../models/Result");
const Courses = require("../models/Courses");
const multer = require("multer");
const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,"public/uploads");
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});
const upload = multer({
    storage: storage,

    fileFilter: function(req, file, cb) {
        if (
            file.mimetype === "application/pdf" ||
            file.mimetype === "image/png"
        ) {
            cb(null, true);
        } else {
            cb(new Error("Only PDF and PNG files are allowed"));
        }
    }
});
exports.DisplayAddStudent=async(req,res)=>{
    res.render("Addstudent");
}
exports.AddsStudent=async(req,res)=>{
    const {name,email,password,rollNumber,department,Admissionyear,semester}=req.body;
    try{
    const existingstudent=await Student.findOne({name,email});
    if(existingstudent){
        return res.send("Student exists");
    }
    const student=new Student({
        name,
        email,
        password,
        rollNumber,
        department,
        Admissionyear,
        semester
    })
    await student.save();
    res.render("Addedsuccessfully");
}catch(err){
    console.error(err);
}
}
exports.DisplayAddFaculty=async(req,res)=>{
    res.render("Addfaculty");
}
exports.Addfaculty=async(req,res)=>{
    const {name,email,EmployeeId,department,designation,courses}=req.body;
    try{
    const existingfaculty=await Faculty.findOne({name,email});
    if(existingfaculty){
        return res.send("faculty already exists");
    }
    const faculty=new Faculty({
        name,
        email,
        EmployeeId,
        department,
        designation,
        courses
    });
    await faculty.save();
    res.render("AddedSuccesfully2");
}catch(err){
    console.error(err);
}
}
exports.displaystudentattendenceupdate=(req,res)=>{
    res.render("Attendenceupdate");
}
exports.updatestudentAttendence=async(req,res)=>{
        const rollNumber=req.body.id;
        try{
        const student=await Student.findOne({rollNumber});
        if(!student){
            return res.send('No student found');
        }
        const semester=req.body.semester;
        const month=req.body.month;
        const workingDays=req.body.workingdays;
        const Holidays=req.body.holidays;
        const PresentDays=req.body.presentdays;
        const existing=await StudentAttendence.findOne({
            rollNumber,
            semester,
            month
        });
        if(existing){
            return res.send("Ateendence of the student for this month already updated");
        }
        const attendence=new StudentAttendence({
            rollNumber,
            semester,
            month,
            workingDays,
            Holidays,
            PresentDays
        });
        await attendence.save();
        res.render("Attendencesuccess");
    }catch(err){
        console.error(err);
    }
    
    }
exports.displayfacultyattendenceupdate=(req,res)=>{
    res.render("Attendenceupdate2");
}
exports.updatefacultyAttendence=async(req,res)=>{
    const EmployeeId=req.body.EmployeeId;
    try{
    const faculty=await Faculty.findOne({EmployeeId});
    if(!faculty){
        return res.send("No employee found");
    }
    const Year=Date.now().getFullYear();
    const month=req.body.month;
    const workingDays=req.body.workingDays;
    const Holidays=req.body.holidays;
    const PresentDays=req.body.presentdays;
    const existing=await FacultyAttendence.findOne({
        EmployeeId,
        Year,
        month
    });
    if(existing){
        return res.send("Attendence of this month already updated ")
    }
    const attendence=new FacultyAttendence({
        EmployeeId,
        Year,
        month,
        workingDays,
        Holidays,
        PresentDays
    });
    await attendence.save();
    res.render("AttendenceSuccess2");
}catch(err){
    console.error(err);
}
}
exports.openAddCorsesinsemester=(req,res)=>{
    res.render("Addcourseinsemester");
}
exports.AddCourseinSemester=async(req,res)=>{
    const {semester,department,coursename}=req.body;
    const dep=await Courses.findOne({
        semester,
        department,
    });
    if(!dep){
        await Courses.insertOne(
            {
                semester:semester,
                department:department,
                Courses:[coursename]
            }
        );
    }
    else{
        await Courses.updateOne({
            semester:semester,
            department:department
        },
        {
            $addToset:{
                Courses:coursename
            }
        }
    );
    }
    res.render("succesfullycourseadded");
}
exports.getfaculty=async(req,res)=>{
    res.render("aboutfaculty");
}
exports.Allfacultydetails=async(req,res)=>{
    const{department}=req.body;
    const faculty=await Faculty.find({
        department:department
    });
    res.render("Facultydetails",{faculty});
}
exports.displayAddmarks=async(req,res)=>{
    res.render("Addmarks");
}
exports.addmarks=async(req,res)=>{
    const{RollNumber,semester,Marks}=req.body;
    const student=await Marks.findOne({
        RollNumber:RollNumber,
        semester:semester
    });
    if(student){
        return res.send("the marks of the particular student already uploaded");
    }
    await Marks.insertOne({
        RollNumber:RollNumber,
        semester:semester,
        Marks:Marks
    });
    res.render("Added succesfully");
}
exports.updateSemester=async(req,res)=>{
    try{
    await Student.deleteMany({
        semester:8
    });
    await Student.updateMany({},
        {
            $inc:{
                semester:1
            }
        }
    )
}catch(err){
    console.log(err);
}
}
exports.displayAddNotice=async(req,res)=>{
    res.render("Addnotice");
}
exports.addNotice=async(req,res)=>{
    const{title,description}=req.body;
    const file=req.file;
    if(!file){
        return res.status(400).send("No file uploaded");
    }
    const notice=new Notice({
        title,
        description,
        file:file.path
    });
    await notice.save();
    res.render("Addednotice");
}

