const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Get all admins" });
});

module.exports = router;