// src/pages/teacher/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import teacherMenu from "../../constants/teacherMenu";
import API from "../../services/api";
import { BookPlus, FileUp, ClipboardPlus, CalendarCheck } from "lucide-react";

const TeacherDashboard = () => {
  const navigate = useNavigate();

  // State to hold stats from backend
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalStudents: 0,
    pendingAssignments: 0,
    attendanceRate: "0%",
  });
  const [loading, setLoading] = useState(true);

  // Fetch teacher metrics on load
  useEffect(() => {
    const fetchTeacherStats = async () => {
      try {
        const response = await API.get("/teachers/dashboard");
        if (response.data?.success) {
          setStats(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching teacher stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherStats();
  }, []);

  // Quick Action click router
  const handleQuickAction = (path) => {
    navigate(path);
  };

  return (
    <Layout menu={teacherMenu}>
      <div className="space-y-8">
        {/* Page Title */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Teacher Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            Welcome back! Manage your courses, assignments, and student attendance here.
          </p>
        </div>

        {/* Dynamic Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              My Courses
            </p>
            <p className="text-3xl font-extrabold text-indigo-600 mt-2">
              {loading ? "..." : stats.totalCourses || 0}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Enrolled Students
            </p>
            <p className="text-3xl font-extrabold text-emerald-600 mt-2">
              {loading ? "..." : stats.totalStudents || 0}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Pending Assignments
            </p>
            <p className="text-3xl font-extrabold text-purple-600 mt-2">
              {loading ? "..." : stats.pendingAssignments || 0}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Attendance Avg
            </p>
            <p className="text-3xl font-extrabold text-amber-600 mt-2">
              {loading ? "..." : stats.attendanceRate || "92%"}
            </p>
          </div>
        </div>

        {/* Quick Actions Component */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Add / View Courses */}
            <button
              type="button"
              onClick={() => handleQuickAction("/teacher/courses")}
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white py-3.5 px-4 rounded-xl font-medium transition shadow-sm text-sm cursor-pointer"
            >
              <BookPlus size={18} />
              <span>Add Course</span>
            </button>

            {/* Upload Notes */}
            <button
              type="button"
              onClick={() => handleQuickAction("/teacher/upload-notes")}
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white py-3.5 px-4 rounded-xl font-medium transition shadow-sm text-sm cursor-pointer"
            >
              <FileUp size={18} />
              <span>Upload Notes</span>
            </button>

            {/* Create Assignment */}
            <button
              type="button"
              onClick={() => handleQuickAction("/teacher/create-assignment")}
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 active:scale-95 text-white py-3.5 px-4 rounded-xl font-medium transition shadow-sm text-sm cursor-pointer"
            >
              <ClipboardPlus size={18} />
              <span>Create Assignment</span>
            </button>

            {/* Mark Attendance */}
            <button
              type="button"
              onClick={() => handleQuickAction("/teacher/attendance")}
              className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white py-3.5 px-4 rounded-xl font-medium transition shadow-sm text-sm cursor-pointer"
            >
              <CalendarCheck size={18} />
              <span>Mark Attendance</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherDashboard;