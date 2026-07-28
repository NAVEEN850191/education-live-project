const getAttendance = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Attendance Records"});
};

module.exports = {getAttendance};