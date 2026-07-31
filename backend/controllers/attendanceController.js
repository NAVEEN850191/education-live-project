const Attendance = require("../models/Attendance");

// Get all attendance records
const getAllAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find();

    res.status(200).json({
      success: true,
      data: attendance
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get attendance by ID
const getAttendanceById = async (req, res) => {
  try {
    const record = await Attendance.findById(req.params.id);

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Attendance record not found"
      });
    }

    res.status(200).json({
      success: true,
      data: record
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Mark attendance
const createAttendance = async (req, res) => {
  try {
    const record = await Attendance.create(req.body);

    res.status(201).json({
      success: true,
      message: "Attendance marked successfully",
      data: record
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update attendance
const updateAttendance = async (req, res) => {
  try {
    const record = await Attendance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Attendance record not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Attendance updated successfully",
      data: record
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Delete attendance
const deleteAttendance = async (req, res) => {
  try {
    const record = await Attendance.findByIdAndDelete(req.params.id);

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Attendance record not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Attendance deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getAllAttendance,
  getAttendanceById,
  createAttendance,
  updateAttendance,
  deleteAttendance
};