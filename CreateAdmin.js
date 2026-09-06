const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Admin = require("./models/admin");

async function createAdmin() {
    await connectDB();

    const admin = new Admin({
        email: "admin2@college.com",
        password: "admin123"
    });

    await admin.save();

    console.log("Admin Created");

    await mongoose.disconnect();
}

createAdmin();