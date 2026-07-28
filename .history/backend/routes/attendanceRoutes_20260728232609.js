const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Get all attendence" });
});

module.exports = router;