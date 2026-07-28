const getNotes = (req, res) => {
    res.status(200).json({
        success: true,
        message: "All Notes"
    });
};

module.exports = { getNotes};