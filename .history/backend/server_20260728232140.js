require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());


const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const adminRoutes = require("./routes/adminRoutes");
const courseRoutes = require("./routes/courseRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const noteRoutes = require("./routes/noteRoutes");

// API Routes
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send(" Backend is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on https://localhost: ${PORT}`);
});