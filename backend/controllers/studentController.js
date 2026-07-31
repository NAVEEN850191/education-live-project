const User = require("../models/User");

// Get All Students
const getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ role: "student" }).select("-password");

    res.status(200).json({
      success: true,
      data: students
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get Student by ID
const getStudentById = async (req, res) => {
  try {
    const student = await User.findOne({
      _id: req.params.id,
      role: "student"
    }).select("-password");

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      data: student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Create Student
const createStudent = async (req, res) => {
  try {
    const student = await User.create({
      ...req.body,
      role: "student"
    });

    res.status(201).json({
      success: true,
      message: "Student Created Successfully",
      data: student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update Student
const updateStudent = async (req, res) => {
  try {
    const student = await User.findOneAndUpdate(
      {
        _id: req.params.id,
        role: "student"
      },
      req.body,
      {
        new: true,
        runValidators: true
      }
    ).select("-password");

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Student Updated Successfully",
      data: student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Delete Student
const deleteStudent = async (req, res) => {
  try {
    const student = await User.findOneAndDelete({
      _id: req.params.id,
      role: "student"
    });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Student Deleted Successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};