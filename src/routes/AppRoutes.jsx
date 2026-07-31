import { Routes, Route } from "react-router-dom";

import StudentLogin from "../pages/auth/StudentLogin";
import StudentRegister from "../pages/auth/StudentRegister";

import Dashboard from "../pages/student/Dashboard";
import Profile from "../pages/student/Profile";
import Courses from "../pages/student/Courses";
import Notes from "../pages/student/Notes";
import Assignments from "../pages/student/Assignments";
import Attendance from "../pages/student/Attendance";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<StudentLogin />} />
      <Route path="/register" element={<StudentRegister />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/attendance" element={<Attendance />} />

    </Routes>
  );
}

export default AppRoutes;