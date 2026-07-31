const User = require("../models/User");

// Get all teachers
const getAllTeachers = async (req, res) => {
  try {
    const teachers = await User.find({ role: "teacher" }).select("-password");

    res.status(200).json({
      success: true,
      data: teachers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get teacher by ID
const getTeacherById = async (req, res) => {
  try {
    const teacher = await User.findOne({
      _id: req.params.id,
      role: "teacher"
    }).select("-password");

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found"
      });
    }

    res.status(200).json({
      success: true,
      data: teacher
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Add teacher
const createTeacher = async (req, res) => {
  try {
    const teacher = await User.create({
      ...req.body,
      role: "teacher"
    });

    res.status(201).json({
      success: true,
      message: "Teacher added successfully",
      data: teacher
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update teacher
const updateTeacher = async (req, res) => {
  try {
    const teacher = await User.findOneAndUpdate(
      {
        _id: req.params.id,
        role: "teacher"
      },
      req.body,
      {
        new: true,
        runValidators: true
      }
    ).select("-password");

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Teacher updated successfully",
      data: teacher
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Delete teacher
const deleteTeacher = async (req, res) => {
  try {
    const teacher = await User.findOneAndDelete({
      _id: req.params.id,
      role: "teacher"
    });

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Teacher deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher
};