const User = require("../models/User");
const Course = require("../models/Course");
const Assignment = require("../models/Assignment");
const Announcement = require("../models/Announcement");

// Dashboard
const getDashboard = async (req, res) => {
  try {
    const totalStudents = await User.countDocuments({ role: "student" });
    const totalTeachers = await User.countDocuments({ role: "teacher" });
    const totalCourses = await Course.countDocuments();
    const totalAssignments = await Assignment.countDocuments();
    const totalAnnouncements = await Announcement.countDocuments();

    res.status(200).json({
      success: true,
      data: {
        totalStudents,
        totalTeachers,
        totalCourses,
        totalAssignments,
        totalAnnouncements
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Recent Activities
const getRecentActivities = async (req, res) => {
  try {
    const recentAnnouncements = await Announcement.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      data: recentAnnouncements
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get Announcements
const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: announcements
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Create Announcement
const createAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.create(req.body);

    res.status(201).json({
      success: true,
      message: "Announcement added successfully",
      data: announcement
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getDashboard,
  getRecentActivities,
  getAnnouncements,
  createAnnouncement
};