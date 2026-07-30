// routes/adminRoutes.js
const express = require("express");
const router = express.Router();

// Import controller functions
const {
  getDashboard,
  getRecentActivities,
  getAnnouncements,
  createAnnouncement,
} = require("../controllers/adminController"); // Ensure path matches your project structure

// ==========================================
// AUTHENTICATION ROUTES
// ==========================================

// Admin Login Endpoint: POST /api/admin/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check incoming values
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required." });
    }

    // TODO: Replace this block with your actual MongoDB User query & bcrypt check
    // e.g., const admin = await Admin.findOne({ email });

    // Quick Dev Fallback response for rapid UI testing:
    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        token: "dev-jwt-token-12345",
        user: {
          email,
          role: "admin",
        },
      },
    });
  } catch (error) {
    console.error("Admin login controller error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server error during login." });
  }
});

// ==========================================
// DASHBOARD & ACTIVITY ROUTES
// ==========================================

// GET /api/admin/dashboard - Fetch metrics
router.get("/dashboard", getDashboard);

// GET /api/admin/recent-activities - Fetch recent system logs
router.get("/recent-activities", getRecentActivities);

// GET /api/admin/announcements - Fetch announcements list
router.get("/announcements", getAnnouncements);

// POST /api/admin/announcements - Create a new announcement
router.post("/announcements", createAnnouncement);

// ==========================================
// CATCH-ALL ROUTE (Prevents 404 on base path)
// ==========================================
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Admin API endpoints are active.",
  });
});

module.exports = router;