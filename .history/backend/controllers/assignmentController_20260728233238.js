const getAssignments = (req, res) => {
    res.status(200).json({
        success: true,
        message: "All Assignments"});
};

module.exports = {getAssignments};