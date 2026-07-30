// src/pages/admin/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import adminMenu from "../../constants/adminMenu";
import { UserPlus, GraduationCap, BookOpen, BarChart3 } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Total Students
            </p>
            <p className="text-3xl font-extrabold text-purple-900 mt-2">1,248</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Total Teachers
            </p>
            <p className="text-3xl font-extrabold text-purple-900 mt-2">84</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Active Courses
            </p>
            <p className="text-3xl font-extrabold text-purple-900 mt-2">42</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              System Health
            </p>
            <p className="text-3xl font-extrabold text-emerald-600 mt-2">99.8%</p>
          </div>
        </div>

        {/* Styled & Functional Quick Actions Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-bold text-purple-900 mb-4">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => handleQuickAction("/admin/manage-students")}
              className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 active:scale-95 text-white py-3.5 px-4 rounded-xl font-medium transition shadow-sm text-sm"
            >
              <UserPlus size={18} />
              <span>Add Student</span>
            </button>

            <button
              onClick={() => handleQuickAction("/admin/manage-teachers")}
              className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 active:scale-95 text-white py-3.5 px-4 rounded-xl font-medium transition shadow-sm text-sm"
            >
              <GraduationCap size={18} />
              <span>Add Teacher</span>
            </button>

            <button
              onClick={() => handleQuickAction("/admin/manage-courses")}
              className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 active:scale-95 text-white py-3.5 px-4 rounded-xl font-medium transition shadow-sm text-sm"
            >
              <BookOpen size={18} />
              <span>Add Course</span>
            </button>

            <button
              onClick={() => handleQuickAction("/admin/reports")}
              className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 active:scale-95 text-white py-3.5 px-4 rounded-xl font-medium transition shadow-sm text-sm"
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