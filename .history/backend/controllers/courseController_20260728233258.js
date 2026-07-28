const getCourses = (req, res) => {
    res.status(200).json({
        success: true,
        message: "All Courses"
    });
};

module.exports = {
getCourses
};