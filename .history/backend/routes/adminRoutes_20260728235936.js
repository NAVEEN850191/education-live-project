const express = require("express");

const router = express.Router();

const {
  getDashboard,
  getRecentActivities,
  getAnnouncements,
  createAnnouncement
} = require("../controllers/adminController");

router.get("/dashboard", getDashboard);

router.get("/activities", getRecentActivities);

router.get("/announcements", getAnnouncements);

router.post("/announcements", createAnnouncement);

module.exports = router;