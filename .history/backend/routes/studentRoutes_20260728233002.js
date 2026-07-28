// const express = require("express");

// const router = express.Router();

// router.get("/", (req, res) => {
//     res.json({ message: "Get all students" });
// });

// module.exports = router;

const express = require("express");

const router = express.Router();

const { getAllStudents} = require("../controllers/studentController");

router.get("/", getAllStudents);

module.exports = router;