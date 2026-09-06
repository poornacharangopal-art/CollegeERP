const express = require("express");
const router = express.Router();

const studentAuth = require("../Controllers/studentdashboard");
const attendanceAuth = require("../Controllers/studentattendence");


/* ================= STUDENT LOGIN ================= */

router.get(
    "/studentlogin",
    studentAuth.displayStudentlogin
);

router.post(
    "/studentslogin",
    studentAuth.studentlogin
);


/* ================= MARKS ================= */

router.get(
    "/studentmarks",
    studentAuth.DiaplayMarksform
);

router.post(
    "/studentsmarks",
    studentAuth.DisplayMarks
);


/* ================= ATTENDANCE ================= */

router.get(
    "/studentattendance",
    attendanceAuth.attendancePage
);

router.post(
    "/studentsattendance",
    attendanceAuth.displayAttendance
);


/* ================= PROFILE ================= */

router.get(
    "/student/profile",
    studentAuth.profile
);


/* ================= LOGOUT ================= */

router.get(
    "/student/logout",
    studentAuth.logout
);


module.exports = router;