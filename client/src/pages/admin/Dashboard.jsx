// src/pages/admin/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import adminMenu from "../../constants/adminMenu";
import API from "../../services/api";
import {
  UserPlus,
  GraduationCap,
  BookOpen,
  BarChart3,
  Bell,
  Activity,
  PlusCircle,
} from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // State management
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    totalCourses: 0,
    totalAssignments: 0,
  });
  const [activities, setActivities] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form state for creating a new announcement
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch all dashboard data from your controller on mount
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [statsRes, activitiesRes, announcementsRes] = await Promise.all([
          API.get("/admin/dashboard"),
          API.get("/admin/recent-activities"),
          API.get("/admin/announcements"),
        ]);

        if (statsRes.data?.success) setStats(statsRes.data.data);
        if (activitiesRes.data?.success) setActivities(activitiesRes.data.data);
        if (announcementsRes.data?.success) setAnnouncements(announcementsRes.data.data);
      } catch (error) {
        console.error("Error loading admin dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Handle adding new announcement
  const handleAddAnnouncement = async (e) => {
    e.preventDefault();
    if (!newAnnouncement.title || !newAnnouncement.description) return;

    setIsSubmitting(true);
    try {
      const response = await API.post("/admin/announcements", newAnnouncement);
      if (response.data?.success) {
        setAnnouncements((prev) => [...prev, response.data.data]);
        setNewAnnouncement({ title: "", description: "" });
      }
    } catch (error) {
      console.error("Failed to add announcement:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout menu={adminMenu}>
      <div className="space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-purple-900">Admin Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            Welcome back! Overview of institutional metrics, activities, and announcements.
          </p>
        </div>

        {/* Dynamic Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Total Students
            </p>
            <p className="text-3xl font-extrabold text-purple-900 mt-2">
              {loading ? "..." : stats.totalStudents}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Total Teachers
            </p>
            <p className="text-3xl font-extrabold text-purple-900 mt-2">
              {loading ? "..." : stats.totalTeachers}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Total Courses
            </p>
            <p className="text-3xl font-extrabold text-purple-900 mt-2">
              {loading ? "..." : stats.totalCourses}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Total Assignments
            </p>
            <p className="text-3xl font-extrabold text-purple-900 mt-2">
              {loading ? "..." : stats.totalAssignments}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-purple-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              type="button"
              onClick={() => navigate("/admin/manage-students")}
              className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 active:scale-95 text-white py-3.5 px-4 rounded-xl font-medium transition shadow-sm text-sm cursor-pointer"
            >
              <UserPlus size={18} />
              <span>Add Student</span>
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/manage-teachers")}
              className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 active:scale-95 text-white py-3.5 px-4 rounded-xl font-medium transition shadow-sm text-sm cursor-pointer"
            >
              <GraduationCap size={18} />
              <span>Add Teacher</span>
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/manage-courses")}
              className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 active:scale-95 text-white py-3.5 px-4 rounded-xl font-medium transition shadow-sm text-sm cursor-pointer"
            >
              <BookOpen size={18} />
              <span>Add Course</span>
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/reports")}
              className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 active:scale-95 text-white py-3.5 px-4 rounded-xl font-medium transition shadow-sm text-sm cursor-pointer"
            >
              <BarChart3 size={18} />
              <span>View Reports</span>
            </button>
          </div>
        </div>

        {/* Two-Column Grid: Recent Activities & Announcements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activities Section */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="text-purple-700" size={20} />
              <h2 className="text-xl font-bold text-purple-900">Recent Activities</h2>
            </div>

            <div className="space-y-3">
              {loading ? (
                <p className="text-sm text-gray-500">Loading activities...</p>
              ) : activities.length > 0 ? (
                activities.map((act) => (
                  <div
                    key={act.id}
                    className="p-3.5 rounded-xl bg-purple-50 text-purple-900 text-sm font-medium border border-purple-100"
                  >
                    {act.activity}
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No recent activity logged.</p>
              )}
            </div>
          </div>

          {/* Announcements Section */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <div className="flex items-center gap-2">
              <Bell className="text-purple-700" size={20} />
              <h2 className="text-xl font-bold text-purple-900">Announcements</h2>
            </div>

            {/* List Announcements */}
            <div className="space-y-3">
              {announcements.map((ann) => (
                <div
                  key={ann.id}
                  className="p-4 rounded-xl border border-gray-200 bg-gray-50"
                >
                  <h3 className="font-semibold text-gray-800 text-sm">{ann.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{ann.description}</p>
                </div>
              ))}
            </div>

            {/* Post New Announcement Form */}
            <form onSubmit={handleAddAnnouncement} className="pt-4 border-t border-gray-100 space-y-3">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Post New Announcement
              </h4>
              <input
                type="text"
                placeholder="Announcement Title"
                value={newAnnouncement.title}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <textarea
                placeholder="Description"
                value={newAnnouncement.description}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, description: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={2}
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 w-full bg-purple-700 hover:bg-purple-800 text-white py-2.5 rounded-xl text-sm font-semibold transition cursor-pointer disabled:opacity-50"
              >
                <PlusCircle size={16} />
                <span>{isSubmitting ? "Posting..." : "Post Announcement"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;