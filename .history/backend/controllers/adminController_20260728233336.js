const getAdminDashboard = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Admin Dashboard"
    });
};

module.exports = { getAdminDashboard};