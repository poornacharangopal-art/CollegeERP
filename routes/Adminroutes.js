const Student = require("../models/Student");
const Faculty = require("../models/Faculty");
const Course = require("../models/course");
const Department = require("../models/Department");
const StudentAttendence = require("../models/StudentAttendence");
const FacultyAttendence = require("../models/FacultyAttendence");
const Marks = require("../models/Marks");
const Notice = require("../models/Notice");
const Result = require("../models/Result");
const Courses = require("../models/Courses");

const express = require("express");
const router = express.Router();

const auth = require("../Controllers/Adminfdashboardcontroller");
const auths = require("../Controllers/Aminlogincontroller");

router.get("/displayAddstudent", auth.DisplayAddStudent);
router.post("/addstudent", auth.AddsStudent);

router.get("/displayAddFaculty", auth.DisplayAddFaculty);
router.post("/addfaculty", auth.Addfaculty);

router.get(
    "/displaystudentattendenceupdate",
    auth.displaystudentattendenceupdate
);

router.post(
    "/updatestudentAttendence",
    auth.updatestudentAttendence
);

router.get(
    "/displayfacultyattendenceupdate",
    auth.displayfacultyattendenceupdate
);

router.post(
    "/updatefacultyAttendence",
    auth.updatefacultyAttendence
);

router.get(
    "/openAddCorsesinsemester",
    auth.openAddCorsesinsemester
);

router.post(
    "/AddCourseinSemester",
    auth.AddCourseinSemester
);

router.get("/getfaculty", auth.getfaculty);

router.post(
    "/facultydetails",
    auth.Allfacultydetails
);

router.get(
    "/displayadminlogin",
    auths.displayadminlogin
);

router.post(
    "/adminlogin",
    auths.adminlogin
);

router.get(
    "/displayaddmarks",
    auth.displayAddmarks
);

router.post(
    "/addmarks",
    auth.addmarks
);

module.exports = router;