const getAllStudents = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Get all students"
    });
};

module.exports = { getAllStudents
};