// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Auth Pages
import AdminLogin from "../pages/auth/AdminLogin";
import TeacherLogin from "../pages/auth/TeacherLogin";

// Admin Module Pages
import AdminDashboard from "../pages/admin/Dashboard";
import ManageCourses from "../pages/admin/ManageCourses";
import ManageStudents from "../pages/admin/ManageStudents";
import ManageTeachers from "../pages/admin/ManageTeachers";
import Reports from "../pages/admin/Reports";
import Settings from "../pages/admin/Settings";

// Teacher Module Pages
import TeacherDashboard from "../pages/teacher/Dashboard";
import AttendanceManagement from "../pages/teacher/AttendanceManagement";
import TeacherCourses from "../pages/teacher/Courses";
import CreateAssignment from "../pages/teacher/CreateAssignment";
import Profile from "../pages/teacher/Profile";
import Students from "../pages/teacher/Students";
import UploadNotes from "../pages/teacher/UploadNotes";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Root redirect to Admin Login */}
      <Route path="/" element={<Navigate to="/admin/login" replace />} />

      {/* Auth Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/teacher/login" element={<TeacherLogin />} />

      {/* Admin Module Routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/manage-courses" element={<ManageCourses />} />
      <Route path="/admin/manage-students" element={<ManageStudents />} />
      <Route path="/admin/manage-teachers" element={<ManageTeachers />} />
      <Route path="/admin/reports" element={<Reports />} />
      <Route path="/admin/settings" element={<Settings />} />

      {/* Teacher Module Routes */}
      <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      <Route path="/teacher/courses" element={<TeacherCourses />} />
      <Route path="/teacher/students" element={<Students />} />
      <Route path="/teacher/upload-notes" element={<UploadNotes />} />
      <Route path="/teacher/create-assignment" element={<CreateAssignment />} />
      <Route path="/teacher/attendance" element={<AttendanceManagement />} />
      <Route path="/teacher/profile" element={<Profile />} />

      {/* Catch-all fallback */}
      <Route path="*" element={<Navigate to="/admin/login" replace />} />
    </Routes>
  );
}