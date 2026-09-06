const express = require("express");
const path = require("path");
const session = require("express-session");
const connectDB = require("./config/db");
connectDB();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Session
app.use(
    session({
        secret: "nitpatna_secret",
        resave: false,
        saveUninitialized: false
    })
);

// Home
app.get("/", (req, res) => {
    res.render("home");
});

// Admin routes
const adminRoutes = require("./routes/Adminroutes");
const studentRoutes = require("./routes/studentroutes");

app.use("/", adminRoutes);
app.use("/", studentRoutes);

// Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});