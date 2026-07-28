const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Get all att" });
});

module.exports = router;