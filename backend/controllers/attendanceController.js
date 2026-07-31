// Get all attendance records
const getAllAttendance = (req, res) => {
  res.status(200).json({
    success: true,
    data: attendance
  });
};

// Get attendance by ID
const getAttendanceById = (req, res) => {
  const id = Number(req.params.id);

  const record = attendance.find((item) => item.id === id);

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
};

// Mark attendance
const createAttendance = (req, res) => {
  const { studentName, course, date, status } = req.body;

  const newRecord = {
    id: attendance.length + 1,
    studentName,
    course,
    date,
    status
  };

  attendance.push(newRecord);

  res.status(201).json({
    success: true,
    message: "Attendance marked successfully",
    data: newRecord
  });
};

// Update attendance
const updateAttendance = (req, res) => {
  const id = Number(req.params.id);

  const record = attendance.find((item) => item.id === id);

  if (!record) {
    return res.status(404).json({
      success: false,
      message: "Attendance record not found"
    });
  }

  record.studentName = req.body.studentName || record.studentName;
  record.course = req.body.course || record.course;
  record.date = req.body.date || record.date;
  record.status = req.body.status || record.status;

  res.status(200).json({
    success: true,
    message: "Attendance updated successfully",
    data: record
  });
};

// Delete attendance
const deleteAttendance = (req, res) => {
  const id = Number(req.params.id);

  const record = attendance.find((item) => item.id === id);

  if (!record) {
    return res.status(404).json({
      success: false,
      message: "Attendance record not found"
    });
  }

  attendance = attendance.filter((item) => item.id !== id);

  res.status(200).json({
    success: true,
    message: "Attendance deleted successfully"
  });
};

module.exports = {
  getAllAttendance,
  getAttendanceById,
  createAttendance,
  updateAttendance,
  deleteAttendance
};