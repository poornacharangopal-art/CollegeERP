const StudentAttendance = require("../models/StudentAttendence");
const Student = require("../models/Student");

exports.attendancePage = async (req, res) => {

    if (!req.session.user) {
        return res.redirect("/login");
    }

    const email = req.session.user.email;

    const student = await Student.findOne({ email });

    if (!student) {
        return res.status(404).send("Student not found");
    }

    res.render("studentattendance", { student });
};

exports.displayAttendance = async (req, res) => {

    if (!req.session.user) {
        return res.redirect("/login");
    }

    const { semester, month } = req.body;

    const email = req.session.user.email;

    const student = await Student.findOne({ email });

    if (!student) {
        return res.status(404).send("Student not found");
    }

    const attendance = await StudentAttendance.findOne({
        rollNumber: student.rollNumber,
        semester,
        month
    });

    if (!attendance) {
        return res.send("Attendance record not found");
    }

    res.render("attendanceResult", { attendance });
};