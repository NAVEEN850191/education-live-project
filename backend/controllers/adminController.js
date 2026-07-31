// Dashboard
const getDashboard = (req, res) => {
  res.status(200).json({
    success: true,
    data: dashboard
  });
};

// Recent Activities
const getRecentActivities = (req, res) => {

  const activities = [
    {
      id: 1,
      activity: "New student registered"
    },
    {
      id: 2,
      activity: "Java assignment uploaded"
    },
    {
      id: 3,
      activity: "Attendance updated"
    }
  ];

  res.status(200).json({
    success: true,
    data: activities
  });

};

// Announcements
let announcements = [
  {
    id: 1,
    title: "Holiday Notice",
    description: "College will remain closed on Monday."
  }
];

// Get announcements
const getAnnouncements = (req, res) => {

  res.status(200).json({
    success: true,
    data: announcements
  });

};

// Add announcement
const createAnnouncement = (req, res) => {

  const { title, description } = req.body;

  const newAnnouncement = {
    id: announcements.length + 1,
    title,
    description
  };

  announcements.push(newAnnouncement);

  res.status(201).json({
    success: true,
    message: "Announcement added successfully",
    data: newAnnouncement
  });

};

module.exports = {
  getDashboard,
  getRecentActivities,
  getAnnouncements,
  createAnnouncement
};