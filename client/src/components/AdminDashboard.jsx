import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import adminMenu from "../../constants/adminMenu";
import API from "../../services/api";
import { UserPlus, GraduationCap, BookOpen, BarChart3 } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // State matching backend response structure
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    totalCourses: 0,
    totalAssignments: 0,
  });
  const [loading, setLoading] = useState(true);

  // Fetch dashboard metrics on component mount
  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const response = await API.get("/admin/dashboard");
        if (response.data.success) {
          setStats(response.data.data);
        }
      } catch (error) {
        console.error("Error loading dashboard metrics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  // Navigation handlers for Quick Actions
  const handleQuickAction = (path) => {
    navigate(path);
  };

  return (
    <Layout menu={adminMenu}>
      <div className="space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-purple-900">Admin Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            Welcome back! Here is an overview of your institution's system status.
          </p>
        </div>

        {/* Dynamic Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Total Students
            </p>
            <p className="text-3xl font-extrabold text-purple-900 mt-2">
              {loading ? "..." : stats.totalStudents?.toLocaleString() || 0}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Total Teachers
            </p>
            <p className="text-3xl font-extrabold text-purple-900 mt-2">
              {loading ? "..." : stats.totalTeachers?.toLocaleString() || 0}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Total Courses
            </p>
            <p className="text-3xl font-extrabold text-purple-900 mt-2">
              {loading ? "..." : stats.totalCourses?.toLocaleString() || 0}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Total Assignments
            </p>
            <p className="text-3xl font-extrabold text-purple-900 mt-2">
              {loading ? "..." : stats.totalAssignments?.toLocaleString() || 0}
            </p>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-bold text-purple-900 mb-4">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => handleQuickAction("/admin/manage-students")}
              className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 active:scale-95 text-white py-3.5 px-4 rounded-xl font-medium transition shadow-sm text-sm cursor-pointer"
            >
              <UserPlus size={18} />
              <span>Add Student</span>
            </button>

            <button
              onClick={() => handleQuickAction("/admin/manage-teachers")}
              className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 active:scale-95 text-white py-3.5 px-4 rounded-xl font-medium transition shadow-sm text-sm cursor-pointer"
            >
              <GraduationCap size={18} />
              <span>Add Teacher</span>
            </button>

            <button
              onClick={() => handleQuickAction("/admin/manage-courses")}
              className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 active:scale-95 text-white py-3.5 px-4 rounded-xl font-medium transition shadow-sm text-sm cursor-pointer"
            >
              <BookOpen size={18} />
              <span>Add Course</span>
            </button>

            <button
              onClick={() => handleQuickAction("/admin/reports")}
              className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 active:scale-95 text-white py-3.5 px-4 rounded-xl font-medium transition shadow-sm text-sm cursor-pointer"
            >
              <BarChart3 size={18} />
              <span>View Reports</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;