const getAllTeachers = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Get all teachers"
    });
};

module.exports = {getAllTeachers
};